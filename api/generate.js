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
import { block2 as anglais9H } from '../prompts/anglais-9H.js';
import { block2 as anglais10H } from '../prompts/anglais-10H.js';
import { block2 as anglais11H } from '../prompts/anglais-11H.js';
import { block2 as histoire9H } from '../prompts/histoire-9H.js';
import { block2 as histoire10H } from '../prompts/histoire-10H.js';
import { block2 as histoire11H } from '../prompts/histoire-11H.js';

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
  'anglais-9H': anglais9H,
  'anglais-10H': anglais10H,
  'anglais-11H': anglais11H,
  'histoire-9H': histoire9H,
  'histoire-10H': histoire10H,
  'histoire-11H': histoire11H,
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

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nniyltlejcdoyqtgctql.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const FREE_SHEETS_PER_MONTH = 3;
const PRO_SHEETS_PER_MONTH = 50;

async function getUserPlan(userId) {
  if (!SUPABASE_SERVICE_KEY || !userId) return { plan: 'free', sheetsLimit: FREE_SHEETS_PER_MONTH };

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/subscriptions?user_id=eq.${userId}&select=plan,sheets_limit,status`,
      {
        headers: {
          'apikey': SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      }
    );
    const data = await res.json();
    if (data.length > 0 && data[0].plan === 'pro' && data[0].status === 'active') {
      return { plan: 'pro', sheetsLimit: data[0].sheets_limit || PRO_SHEETS_PER_MONTH };
    }
  } catch (err) {
    console.error('Plan check failed:', err);
  }
  return { plan: 'free', sheetsLimit: FREE_SHEETS_PER_MONTH };
}

async function checkQuota(userId, email) {
  if (!SUPABASE_SERVICE_KEY) return { allowed: true }; // Skip if no key configured

  // Get user plan to determine limit
  const { plan, sheetsLimit } = await getUserPlan(userId);

  const startOfMonth = new Date().toISOString().slice(0, 7) + '-01T00:00:00.000Z';
  let url;

  const headers = {
    'apikey': SUPABASE_SERVICE_KEY,
    'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type': 'application/json'
  };

  // Count generations this month for this user
  if (userId) {
    url = `${SUPABASE_URL}/rest/v1/generations?select=id&user_id=eq.${userId}&created_at=gte.${startOfMonth}`;
  } else if (email) {
    url = `${SUPABASE_URL}/rest/v1/generations?select=id&email=eq.${encodeURIComponent(email)}&user_id=is.null&created_at=gte.${startOfMonth}`;
  } else {
    return { allowed: true }; // No identity, allow (client will gate)
  }

  try {
    const res = await fetch(url, {
      headers: { ...headers, 'Prefer': 'count=exact', 'Range': '0-0' }
    });
    const countHeader = res.headers.get('content-range');
    // Format: "0-0/5" or "*/0"
    const total = countHeader ? parseInt(countHeader.split('/')[1]) || 0 : 0;
    return { allowed: total < sheetsLimit, count: total, limit: sheetsLimit, plan };
  } catch (err) {
    console.error('Quota check failed:', err);
    return { allowed: true }; // Fail open
  }
}

// Wikimedia Commons image search for Histoire
async function searchWikimediaImages(query, limit = 5) {
  try {
    // Search in French first, then English fallback
    const queries = [query, query.replace(/[àâäéèêëïîôùûüç]/g, c => ({à:'a',â:'a',ä:'a',é:'e',è:'e',ê:'e',ë:'e',ï:'i',î:'i',ô:'o',ù:'u',û:'u',ü:'u',ç:'c'})[c] || c)];
    let allResults = [];

    for (const q of queries) {
      if (allResults.length >= limit) break;
      const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q + ' filetype:bitmap')}&srnamespace=6&srlimit=${limit}&format=json&origin=*`;
      const res = await fetch(searchUrl);
      const data = await res.json();
      if (!data.query || !data.query.search || data.query.search.length === 0) continue;

      const titles = data.query.search
        .map(s => s.title)
        .filter(t => !allResults.some(r => r.title === t.replace('File:', '')));
      if (titles.length === 0) continue;

      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles.join('|'))}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=500&format=json&origin=*`;
      const infoRes = await fetch(infoUrl);
      const infoData = await infoRes.json();

      const pages = infoData.query?.pages || {};
      for (const page of Object.values(pages)) {
        if (page.imageinfo && page.imageinfo[0]) {
          const info = page.imageinfo[0];
          const thumbUrl = info.thumburl || info.url;
          // Skip SVGs, tiny images, and icons
          if (!thumbUrl || thumbUrl.endsWith('.svg') || (info.thumbwidth && info.thumbwidth < 100)) continue;
          const meta = info.extmetadata || {};
          allResults.push({
            title: page.title.replace('File:', ''),
            thumbUrl,
            descriptionUrl: info.descriptionurl,
            artist: meta.Artist?.value?.replace(/<[^>]*>/g, '') || 'Inconnu',
            license: meta.LicenseShortName?.value || 'Wikimedia Commons',
            description: (meta.ImageDescription?.value || '').replace(/<[^>]*>/g, '').slice(0, 200)
          });
        }
      }
    }
    return allResults.slice(0, limit);
  } catch (err) {
    console.error('Wikimedia search failed:', err);
    return [];
  }
}

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
    const code = formData.get('code') || '';
    const userEmail = formData.get('user_email') || '';
    const userId = formData.get('user_id') || '';
    const histoirePeriode = formData.get('histoire-periode') || '';
    const histoireSoustheme = formData.get('histoire-soustheme') || '';
    const dimensions = formData.get('dimensions') || '';
    const typesources = formData.get('typesources') || '';

    // Beta code bypasses quota
    const isBeta = code && code.length > 0;

    // Server-side quota check
    if (!isBeta) {
      const quota = await checkQuota(userId || null, userEmail || null);
      if (!quota.allowed) {
        return new Response(
          JSON.stringify({ error: 'quota_exceeded', message: `Limite atteinte : ${quota.count}/${quota.limit} fiches ce mois.` }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

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
      if (histoirePeriode) userMessage += `\nPériode historique : ${histoirePeriode}`;
      if (histoireSoustheme) userMessage += `\nSous-thème historique : ${histoireSoustheme}`;
      if (dimensions) userMessage += `\nDimensions PER : ${dimensions}`;
      if (typesources) userMessage += `\nTypes de sources : ${typesources}`;
      userMessage += `\nObjectif : ${sujet}`;
      if (theme) userMessage += `\nThème / Vocabulaire visé : ${theme}`;
      if (adaptations) userMessage += `\nAdaptations BEP : ${adaptations}`;
    }

    // For Histoire: search Wikimedia Commons for relevant images
    if (matiereNorm === 'histoire' && (histoirePeriode || sujet)) {
      const searchQuery = histoireSoustheme || histoirePeriode || sujet;
      const images = await searchWikimediaImages(searchQuery);
      if (images.length > 0) {
        userMessage += '\n\n=== SOURCES ICONOGRAPHIQUES WIKIMEDIA COMMONS ===';
        userMessage += '\nVoici des images libres de droits trouvées. Intègre-les dans la fiche avec <img src="URL" alt="description"> dans une div.source-box :';
        images.forEach((img, i) => {
          userMessage += `\n\nImage ${i + 1} :`;
          userMessage += `\n- Titre : ${img.title}`;
          userMessage += `\n- URL : ${img.thumbUrl}`;
          userMessage += `\n- Auteur : ${img.artist}`;
          userMessage += `\n- Licence : ${img.license}`;
          if (img.description) userMessage += `\n- Description : ${img.description}`;
        });
        userMessage += '\n\nUtilise ces images comme sources primaires dans les exercices d\'analyse de document.';
      }
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
