export const config = {
  runtime: 'edge',
};

const BREVO_API_KEY = process.env.BREVO_API_KEY || '';
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const SENDER = { name: 'Neoskool', email: 'contact@neoskool.com' };

// Email templates
const templates = {
  welcome: (email) => ({
    sender: SENDER,
    to: [{ email }],
    subject: 'Bienvenue sur Neoskool !',
    htmlContent: `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f3ff;">
<div style="max-width:560px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;border:1px solid #e5e5ed;">
  <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:40px 32px;text-align:center;">
    <h1 style="color:white;font-size:28px;margin:0;font-weight:900;letter-spacing:-0.03em;">Bienvenue sur <em style="font-style:italic;font-weight:400;">Neoskool</em></h1>
  </div>
  <div style="padding:32px;">
    <p style="font-size:16px;color:#0a0a0f;line-height:1.6;margin:0 0 16px;">Salut !</p>
    <p style="font-size:16px;color:#3a3a4a;line-height:1.6;margin:0 0 16px;">Merci de rejoindre Neoskool. Tu fais partie des premiers utilisateurs de la plateforme qui va transformer la facon dont les enseignants et parents creent des exercices.</p>
    <p style="font-size:16px;color:#3a3a4a;line-height:1.6;margin:0 0 24px;">Tu peux generer <strong style="color:#7c3aed;">3 fiches gratuites par mois</strong>, chacune adaptee au niveau de l'eleve et fondee sur les sciences cognitives.</p>
    <div style="text-align:center;margin:32px 0;">
      <a href="https://www.neoskool.com" style="display:inline-block;background:#7c3aed;color:white;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">Generer ma premiere fiche</a>
    </div>
    <p style="font-size:14px;color:#6b6b7b;line-height:1.6;margin:0;">A bientot sur Neoskool !</p>
  </div>
  <div style="background:#f5f3ff;padding:20px 32px;text-align:center;">
    <p style="font-size:12px;color:#6b6b7b;margin:0;">Neoskool — Chaque eleve merite de reussir.</p>
  </div>
</div>
</body></html>`,
  }),

  quota_reminder: (email, remaining, limit) => ({
    sender: SENDER,
    to: [{ email }],
    subject: remaining === 0
      ? 'Tu as utilise toutes tes fiches du mois'
      : `Plus que ${remaining} fiche${remaining > 1 ? 's' : ''} gratuite${remaining > 1 ? 's' : ''} ce mois`,
    htmlContent: `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f3ff;">
<div style="max-width:560px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;border:1px solid #e5e5ed;">
  <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:32px;text-align:center;">
    <h1 style="color:white;font-size:24px;margin:0;font-weight:900;">Neoskool</h1>
  </div>
  <div style="padding:32px;">
    <p style="font-size:16px;color:#0a0a0f;line-height:1.6;margin:0 0 16px;">Salut !</p>
    ${remaining === 0
      ? `<p style="font-size:16px;color:#3a3a4a;line-height:1.6;margin:0 0 16px;">Tu as utilise tes <strong>${limit} fiches gratuites</strong> ce mois. Ton quota se renouvelle le 1er du mois prochain.</p>
         <p style="font-size:16px;color:#3a3a4a;line-height:1.6;margin:0 0 24px;">Tu veux continuer a generer des fiches sans limite ? Passe au plan Pro !</p>`
      : `<p style="font-size:16px;color:#3a3a4a;line-height:1.6;margin:0 0 16px;">Il te reste <strong style="color:#7c3aed;">${remaining} fiche${remaining > 1 ? 's' : ''} gratuite${remaining > 1 ? 's' : ''}</strong> ce mois sur ${limit}.</p>
         <p style="font-size:16px;color:#3a3a4a;line-height:1.6;margin:0 0 24px;">Continue a creer des exercices sur mesure pour tes eleves !</p>`
    }
    <div style="text-align:center;margin:32px 0;">
      <a href="https://www.neoskool.com" style="display:inline-block;background:#7c3aed;color:white;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">${remaining === 0 ? 'Decouvrir le plan Pro' : 'Generer une fiche'}</a>
    </div>
  </div>
  <div style="background:#f5f3ff;padding:20px 32px;text-align:center;">
    <p style="font-size:12px;color:#6b6b7b;margin:0;">Neoskool — Chaque eleve merite de reussir.</p>
  </div>
</div>
</body></html>`,
  }),
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!BREVO_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { type, email, remaining, limit } = body;

    if (!email || !type) {
      return new Response(JSON.stringify({ error: 'Missing email or type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let emailData;
    if (type === 'welcome') {
      emailData = templates.welcome(email);
    } else if (type === 'quota_reminder') {
      emailData = templates.quota_reminder(email, remaining ?? 0, limit ?? 5);
    } else {
      return new Response(JSON.stringify({ error: 'Unknown email type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const brevoRes = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!brevoRes.ok) {
      const errorText = await brevoRes.text();
      console.error('Brevo error:', errorText);
      return new Response(JSON.stringify({ error: 'Email send failed', details: errorText }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await brevoRes.json();
    return new Response(JSON.stringify({ success: true, messageId: result.messageId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
