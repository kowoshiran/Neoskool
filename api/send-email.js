export const config = {
  runtime: 'edge',
};

const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
const BREVO_BASE = 'https://api.brevo.com/v3';
const SENDER = { name: 'Neoskool', email: 'contact@neoskool.com' };

// Brevo list ID for Neoskool users (create list "Neoskool Users" in Brevo, ID = 2 by default)
const BREVO_LIST_ID = 3;

function brevoHeaders() {
  return {
    'api-key': BREVO_API_KEY,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
}

// ─── Create or update contact in Brevo ───
async function upsertContact(email, attributes = {}) {
  const res = await fetch(`${BREVO_BASE}/contacts`, {
    method: 'POST',
    headers: brevoHeaders(),
    body: JSON.stringify({
      email,
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
      attributes,
    }),
  });
  // 201 = created, 204 = updated — both are fine
  if (!res.ok && res.status !== 204) {
    const err = await res.text();
    console.error('Brevo upsert contact error:', err);
  }
}

// ─── Send transactional email ───
async function sendTransactional(emailData) {
  const res = await fetch(`${BREVO_BASE}/smtp/email`, {
    method: 'POST',
    headers: brevoHeaders(),
    body: JSON.stringify(emailData),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error('Brevo send error:', err);
    throw new Error(err);
  }
  return res.json();
}

// ─── Email footer (unsubscribe + legal) ───
const EMAIL_FOOTER = `
  <div style="background:#f5f3ff;padding:24px 32px;text-align:center;border-top:1px solid #e5e5ed;">
    <p style="font-size:13px;color:#6b6b7b;margin:0 0 8px;font-weight:600;">Neoskool</p>
    <p style="font-size:11px;color:#9b9bab;margin:0 0 12px;">Chaque \u00e9l\u00e8ve m\u00e9rite de r\u00e9ussir.</p>
    <p style="font-size:11px;color:#9b9bab;margin:0;">
      <a href="{{ unsubscribe }}" style="color:#7c3aed;text-decoration:underline;">Se d\u00e9sinscrire</a>
    </p>
  </div>`;

// ─── Email templates ───
const templates = {
  welcome: (email) => ({
    sender: SENDER,
    to: [{ email }],
    subject: 'Ta premi\u00e8re fiche t\u2019attend \ud83c\udf93',
    htmlContent: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f3ff;">
<div style="max-width:560px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;border:1px solid #e5e5ed;">

  <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:40px 32px;text-align:center;">
    <h1 style="color:white;font-size:26px;margin:0;font-weight:900;letter-spacing:-0.03em;">Bienvenue sur <em style="font-style:italic;font-weight:400;">Neoskool</em> \ud83d\udc4b</h1>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#0a0a0f;line-height:1.7;margin:0 0 20px;">
      Tu viens de rejoindre une plateforme qui change la donne pour les enseignants et les parents du canton de Vaud.
    </p>

    <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 12px;">
      Avec Neoskool, tu peux :
    </p>

    <table style="width:100%;margin:0 0 20px;" cellpadding="0" cellspacing="0">
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;line-height:1.5;">\u2728 G\u00e9n\u00e9rer des exercices adapt\u00e9s au niveau de chaque \u00e9l\u00e8ve</td></tr>
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;line-height:1.5;">\ud83e\udde0 B\u00e9n\u00e9ficier de 10 principes de sciences cognitives int\u00e9gr\u00e9s</td></tr>
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;line-height:1.5;">\u26a1 Cr\u00e9er une fiche compl\u00e8te en 30 secondes</td></tr>
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;line-height:1.5;">\ud83c\udfaf Couvrir VP, VG2 et VG1 automatiquement</td></tr>
    </table>

    <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 24px;">
      Tu disposes de <strong style="color:#7c3aed;">3 fiches gratuites par mois</strong> pour d\u00e9couvrir tout le potentiel de Neoskool.
    </p>

    <div style="text-align:center;margin:28px 0;">
      <a href="https://www.neoskool.com" style="display:inline-block;background:#7c3aed;color:white;padding:16px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">Cr\u00e9er ma premi\u00e8re fiche</a>
    </div>

    <p style="font-size:14px;color:#6b6b7b;line-height:1.6;margin:0;text-align:center;">
      \u00c0 tr\u00e8s vite,<br><strong style="color:#0a0a0f;">L\u2019\u00e9quipe Neoskool</strong>
    </p>
  </div>

  ${EMAIL_FOOTER}
</div>
</body></html>`,
  }),

  quota_low: (email, remaining) => ({
    sender: SENDER,
    to: [{ email }],
    subject: remaining === 1
      ? 'Plus qu\u2019une fiche gratuite ce mois \u2013 utilise-la bien \ud83c\udfaf'
      : `Il te reste ${remaining} fiches gratuites ce mois`,
    htmlContent: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f3ff;">
<div style="max-width:560px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;border:1px solid #e5e5ed;">

  <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:32px;text-align:center;">
    <h1 style="color:white;font-size:22px;margin:0;font-weight:900;">Neoskool</h1>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#0a0a0f;line-height:1.7;margin:0 0 16px;">Salut !</p>

    <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 16px;">
      Tu as d\u00e9j\u00e0 g\u00e9n\u00e9r\u00e9 ${3 - remaining} fiche${3 - remaining > 1 ? 's' : ''} ce mois.
      Il te reste <strong style="color:#7c3aed;">${remaining} fiche${remaining > 1 ? 's' : ''} gratuite${remaining > 1 ? 's' : ''}</strong>.
    </p>

    <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 24px;">
      Cr\u00e9e ton compte gratuit pour sauvegarder tes fiches, retrouver ton historique et ne rien perdre.
    </p>

    <div style="text-align:center;margin:28px 0;">
      <a href="https://www.neoskool.com" style="display:inline-block;background:#7c3aed;color:white;padding:16px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">G\u00e9n\u00e9rer une fiche</a>
    </div>
  </div>

  ${EMAIL_FOOTER}
</div>
</body></html>`,
  }),

  quota_exhausted: (email) => ({
    sender: SENDER,
    to: [{ email }],
    subject: 'Tes 3 fiches gratuites sont utilis\u00e9es \ud83d\udcca',
    htmlContent: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f3ff;">
<div style="max-width:560px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;border:1px solid #e5e5ed;">

  <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:32px;text-align:center;">
    <h1 style="color:white;font-size:22px;margin:0;font-weight:900;">Neoskool</h1>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#0a0a0f;line-height:1.7;margin:0 0 16px;">Salut !</p>

    <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 16px;">
      Tu as utilis\u00e9 tes <strong>3 fiches gratuites</strong> du mois. Ton quota se renouvelle automatiquement le 1er du mois prochain.
    </p>

    <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 8px;">
      Tu ne veux pas attendre ? Le <strong style="color:#7c3aed;">plan Pro</strong> te donne :
    </p>

    <table style="width:100%;margin:0 0 20px;" cellpadding="0" cellspacing="0">
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\ud83d\ude80 50 fiches par mois</td></tr>
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\ud83d\udcc4 Export PDF</td></tr>
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\u26a1 G\u00e9n\u00e9ration prioritaire</td></tr>
      <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\ud83d\udcbe Sauvegarde illimit\u00e9e</td></tr>
    </table>

    <div style="text-align:center;margin:28px 0;">
      <a href="https://www.neoskool.com" style="display:inline-block;background:#7c3aed;color:white;padding:16px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">D\u00e9couvrir le plan Pro</a>
    </div>

    <p style="font-size:14px;color:#6b6b7b;line-height:1.6;margin:0;text-align:center;">
      Ou patiente jusqu\u2019au 1er du mois prochain pour 3 nouvelles fiches gratuites.
    </p>
  </div>

  ${EMAIL_FOOTER}
</div>
</body></html>`,
  }),
};

// ─── Handler ───
export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405, headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!BREVO_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { type, email, remaining, limit, profil } = body;

    if (!email || !type) {
      return new Response(JSON.stringify({ error: 'Missing email or type' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    let emailData;

    if (type === 'welcome') {
      // 1. Add contact to Brevo list (triggers automation)
      await upsertContact(email, {
        PRENOM: '',
        PROFIL: profil || 'enseignant',
        SIGNUP_DATE: new Date().toISOString(),
        SHEETS_USED: 1,
      });
      // 2. Send welcome email immediately
      emailData = templates.welcome(email);

    } else if (type === 'sync_contact') {
      // Just update SHEETS_USED in Brevo (no email sent)
      await upsertContact(email, { SHEETS_USED: body.sheetsUsed || 0 });
      return new Response(JSON.stringify({ success: true, synced: true }), {
        status: 200, headers: { 'Content-Type': 'application/json' },
      });

    } else if (type === 'quota_reminder') {
      const r = remaining ?? 0;
      // Update contact attributes in Brevo
      await upsertContact(email, { SHEETS_USED: (limit || 3) - r });

      if (r === 0) {
        emailData = templates.quota_exhausted(email);
      } else {
        emailData = templates.quota_low(email, r);
      }

    } else {
      return new Response(JSON.stringify({ error: 'Unknown email type' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await sendTransactional(emailData);
    return new Response(JSON.stringify({ success: true, messageId: result.messageId }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}
