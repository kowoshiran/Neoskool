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
import { HISTOIRE_IMAGES } from '../prompts/histoire-images.js';

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

    // Mapping: période key → list of sous-thème keys (for when no sous-thème is selected)
    const PERIODE_SOUSTHEMES = {
      'premiere-guerre-mondiale': ['causes-ww1', 'tranchees', 'guerre-totale', 'consequences-ww1', 'suisse-ww1'],
      'totalitarismes': ['fascisme-italie', 'nazisme', 'stalinisme', 'propagande', 'comparaison-regimes'],
      'seconde-guerre-mondiale-shoah': ['causes-ww2', 'phases-ww2', 'shoah', 'resistance-collaboration', 'suisse-ww2'],
      'guerre-froide': ['bipolarisation', 'crises-guerre-froide', 'course-armements', 'chute-mur'],
      'decolonisation': ['causes-decolonisation', 'independances-afrique', 'independances-asie', 'neocolonialisme'],
      'monde-contemporain': ['mondialisation', 'construction-europeenne', 'terrorisme', 'enjeux-environnement', 'suisse-contemporaine'],
      'antiquite-egypte-mesopotamie': ['pharaons-pyramides', 'ecriture-hieroglyphes', 'vie-quotidienne-egypte', 'mesopotamie-cuneiforme'],
      'grece-antique': ['democratie-athenes', 'mythologie-grecque', 'jeux-olympiques', 'sparte-vs-athenes', 'art-architecture-grece'],
      'rome': ['fondation-republique', 'empire-romain', 'armee-conquetes', 'vie-quotidienne-rome', 'chute-empire'],
      'christianisme-islam': ['naissance-christianisme', 'expansion-christianisme', 'naissance-islam', 'expansion-islam'],
      'moyen-age': ['feodalite', 'chateau-fort', 'eglise-moyen-age', 'croisades', 'vie-paysanne', 'villes-commerce'],
      'confederation-suisse': ['pacte-1291', 'legendes-fondatrices', 'batailles-suisses', 'cantons-alliance'],
      'renaissance': ['humanisme', 'art-renaissance', 'imprimerie', 'sciences-renaissance'],
      'grandes-decouvertes': ['explorateurs', 'colonisation-ameriques', 'traite-negriere', 'consequences-populations'],
      'reforme-guerres-religion': ['luther-reforme', 'calvin-geneve', 'contre-reforme', 'guerres-religion'],
      'ancien-regime-lumieres': ['absolutisme', 'societe-ordres', 'philosophes-lumieres', 'encyclopedie'],
      'revolution-francaise': ['causes-revolution', 'evenements-cles', 'droits-homme', 'napoleon', 'suisse-revolution'],
      'revolution-industrielle': ['inventions-techniques', 'condition-ouvriere', 'urbanisation', 'mouvements-sociaux', 'suisse-industrielle'],
    };

    // For Histoire: inject curated images as ready-to-use HTML blocks
    if (matiereNorm === 'histoire') {
      const sousThemeKey = histoireSoustheme || '';
      let images = [];

      // Priority 1: exact sous-thème match
      if (sousThemeKey && HISTOIRE_IMAGES[sousThemeKey] && HISTOIRE_IMAGES[sousThemeKey].length > 0) {
        images = [...HISTOIRE_IMAGES[sousThemeKey]];
        console.log(`Curated images found for sous-thème "${sousThemeKey}": ${images.length}`);
      }

      // Priority 2: no sous-thème selected → collect images from all sous-thèmes of the période
      if (images.length === 0 && histoirePeriode) {
        const periodeKey = histoirePeriode;
        const sousThemes = PERIODE_SOUSTHEMES[periodeKey] || [];
        for (const stKey of sousThemes) {
          if (HISTOIRE_IMAGES[stKey] && HISTOIRE_IMAGES[stKey].length > 0) {
            images.push(...HISTOIRE_IMAGES[stKey]);
          }
        }
        if (images.length > 0) {
          console.log(`Curated images found for période "${periodeKey}": ${images.length} (from sous-thèmes)`);
        }
      }

      // Diversify: pick max 3 images with different 'nature' types
      if (images.length > 0) {
        const diversified = [];
        const usedNatures = new Set();
        const usedUrls = new Set();
        for (const img of images) {
          const natureKey = (img.nature || '').toLowerCase().replace(/[^a-z]/g, '');
          if (!usedNatures.has(natureKey) && !usedUrls.has(img.url)) {
            diversified.push(img);
            usedNatures.add(natureKey);
            usedUrls.add(img.url);
            if (diversified.length >= 3) break;
          }
        }
        // If we have fewer than 2 diverse images, add more even if same nature (but not same URL)
        if (diversified.length < 2) {
          for (const img of images) {
            if (!usedUrls.has(img.url)) {
              diversified.push(img);
              usedUrls.add(img.url);
              if (diversified.length >= 3) break;
            }
          }
        }
        images = diversified;
      }

      if (images.length > 0) {
        // Provide EXACT HTML blocks that Claude must copy-paste into Section 4
        userMessage += '\n\n=== IMAGES PRÉ-FORMATÉES — COPIE LE HTML TEL QUEL ===';
        userMessage += '\nRÈGLE ABSOLUE : Copie ces blocs HTML EXACTEMENT dans la Section 4 (Analyse de sources).';
        userMessage += '\nNe modifie PAS les URLs. Ne décris PAS les images en texte. Ne génère AUCUNE image imaginaire.';
        userMessage += '\nAjoute tes questions d\'analyse (⭐ Observer, ⭐⭐ Comprendre, ⭐⭐⭐ Interpréter) APRÈS chaque bloc source.\n';

        images.forEach((img, i) => {
          const alt = (img.description || img.title || '').replace(/"/g, '&quot;').slice(0, 120);
          userMessage += `\n<div class="source-box">`;
          userMessage += `\n  <div class="source-box-header">📄 Source ${i + 1} — ${img.title}</div>`;
          userMessage += `\n  <div class="source-box-body">`;
          userMessage += `\n    <p class="source-meta"><strong>Nature :</strong> ${img.nature || 'Document iconographique'} | <strong>Date :</strong> ${img.date || 'Voir source'} | <strong>Auteur :</strong> ${img.auteur || 'Domaine public'}</p>`;
          userMessage += `\n    <img src="${img.url}" class="source-image" alt="${alt}">`;
          userMessage += `\n  </div>`;
          userMessage += `\n</div>\n`;
        });

        userMessage += '\nCopie ces blocs source-box dans ta Section 4, puis ajoute les questions d\'analyse après chaque bloc.';
      } else {
        // No curated images — tell Claude to use text sources only
        userMessage += '\n\nAucune image disponible pour ce sous-thème. Utilise des sources TEXTUELLES (extraits de documents, citations historiques) dans la Section 4. Ne décris JAMAIS une image imaginaire entre crochets.';
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
