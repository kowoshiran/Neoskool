import { block1 } from '../prompts/block1.js';
import { block2 as allemand9H } from '../prompts/allemand-9H.js';
import { block2 as allemand10H } from '../prompts/allemand-10H.js';
import { block2 as allemand11H } from '../prompts/allemand-11H.js';
import { block2 as maths9H } from '../prompts/maths-9H.js';
import { block2 as maths10H } from '../prompts/maths-10H.js';
import { block2 as maths11H } from '../prompts/maths-11H.js';
import { block2 as francais9H } from '../prompts/francais-9H.js';
import { block2 as francais10H } from '../prompts/francais-10H.js';
import { block2 as francais11H } from '../prompts/francais-11H.js';

// Prompt lookup table
const PROMPTS = {
  'allemand-9H': allemand9H,
  'allemand-10H': allemand10H,
  'allemand-11H': allemand11H,
  'mathematiques-9H': maths9H,
  'mathematiques-10H': maths10H,
  'mathematiques-11H': maths11H,
  'francais-9H': francais9H,
  'francais-10H': francais10H,
  'francais-11H': francais11H,
};

// Normalize matiere for lookup
function normalizeMatiere(matiere) {
  return matiere.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export const config = {
  runtime: 'edge',
  maxDuration: 300, // 5 minutes max
};

export default async function handler(req) {
  // Only accept POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Parse form data
    const formData = await req.formData();
    const matiere = formData.get('matiere') || '';
    const degre = formData.get('degre') || '';
    const voie = formData.get('voie') || '';
    const difficulte = formData.get('difficulte') || '';
    const sujet = formData.get('sujet') || '';
    const theme = formData.get('theme') || '';
    const chapitre = formData.get('chapitre') || '';
    const profil = formData.get('profil') || 'enseignant';
    const adaptations = formData.get('adaptations') || '';
    const message = formData.get('message') || '';

    // Determine degree key: "9H (12-13 ans)" → "9H"
    const degreKey = degre.split(' ')[0];

    // Determine matiere key
    const matiereNorm = normalizeMatiere(matiere);
    const promptKey = `${matiereNorm}-${degreKey}`;

    // Get the right Block 2
    const block2 = PROMPTS[promptKey];
    if (!block2) {
      return new Response(
        JSON.stringify({ error: `Matière/degré non supporté: ${promptKey}. Disponibles: ${Object.keys(PROMPTS).join(', ')}` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Build userMessage (same logic as n8n Code in JavaScript node)
    let userMessage = message;
    if (!userMessage) {
      const profilLabel = profil === 'enseignant' ? 'Enseignant' : "Parent d'élève";
      const formatLabel = 'Impression (fiche exercice + fiche outil séparée, sans aides cliquables)';
      userMessage = `Profil : ${profilLabel}\nFormat : ${formatLabel}`;
      userMessage += `\nMatière : ${matiere}\nDegré : ${degre}`;
      if (voie) userMessage += `\nVoie : ${voie}`;
      if (difficulte) userMessage += `\nNiveau de la classe : ${difficulte}`;
      if (chapitre) userMessage += `\nChapitre : ${chapitre}`;
      userMessage += `\nObjectif : ${sujet}`;
      if (theme) userMessage += `\nThème / Vocabulaire visé : ${theme}`;
      if (adaptations) userMessage += `\nAdaptations BEP : ${adaptations}`;
    }

    // max_tokens: assez haut pour ne jamais couper une fiche, le prompt contrôle la concision
    const maxTokens = 12288;

    // Call Anthropic with streaming
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'prompt-caching-2024-07-31',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: maxTokens,
        stream: true,
        system: [
          { type: 'text', text: block1, cache_control: { type: 'ephemeral' } },
          { type: 'text', text: block2, cache_control: { type: 'ephemeral' } },
        ],
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      return new Response(
        JSON.stringify({ error: `Anthropic API error: ${anthropicResponse.status}`, details: errorText }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create a TransformStream to parse Anthropic SSE and forward text deltas
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = anthropicResponse.body.getReader();
        let buffer = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || ''; // Keep incomplete line in buffer

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6).trim();
                if (data === '[DONE]') continue;

                try {
                  const event = JSON.parse(data);
                  
                  // Extract text delta
                  if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
                    const text = event.delta.text;
                    // Send as SSE event
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'delta', text })}\n\n`));
                  }
                  
                  // Stream ended
                  if (event.type === 'message_stop') {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done' })}\n\n`));
                  }

                  // Usage stats
                  if (event.type === 'message_delta' && event.usage) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'usage', usage: event.usage })}\n\n`));
                  }
                } catch (e) {
                  // Skip unparseable lines
                }
              }
            }
          }

          // Send final done event
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done' })}\n\n`));
          controller.close();
        } catch (error) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', message: error.message })}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
