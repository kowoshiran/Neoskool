export const config = {
  runtime: 'edge',
};

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nniyltlejcdoyqtgctql.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const BREVO_API_KEY = process.env.BREVO_API_KEY || '';

// ─── Stripe signature verification (Web Crypto) ───
async function verifyStripeSignature(payload, sigHeader) {
  if (!STRIPE_WEBHOOK_SECRET) return true; // Skip in dev if not configured

  const parts = {};
  sigHeader.split(',').forEach(part => {
    const [key, val] = part.split('=');
    parts[key] = val;
  });

  const timestamp = parts.t;
  const signature = parts.v1;

  if (!timestamp || !signature) return false;

  // Check timestamp (tolerance: 5 minutes)
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(timestamp)) > 300) return false;

  const signedPayload = `${timestamp}.${payload}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(STRIPE_WEBHOOK_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(signedPayload));
  const expectedSig = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');

  return expectedSig === signature;
}

// ─── Supabase helpers ───
function supabaseHeaders() {
  return {
    'apikey': SUPABASE_SERVICE_KEY,
    'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal',
  };
}

async function updateSubscription(stripeCustomerId, data) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/subscriptions?stripe_customer_id=eq.${stripeCustomerId}`,
    {
      method: 'PATCH',
      headers: supabaseHeaders(),
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) {
    console.error('Failed to update subscription:', await res.text());
  }
}

async function getSubscriptionByCustomer(stripeCustomerId) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/subscriptions?stripe_customer_id=eq.${stripeCustomerId}&select=*`,
    {
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

// ─── Email helpers ───
async function sendEmail(to, subject, htmlContent) {
  if (!BREVO_API_KEY) return;
  try {
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Neoskool', email: 'contact@neoskool.com' },
        to: [{ email: to }],
        subject,
        htmlContent,
      }),
    });
  } catch (e) {
    console.error('Email send failed:', e);
  }
}

const EMAIL_FOOTER = `
  <div style="background:#f5f3ff;padding:24px 32px;text-align:center;border-top:1px solid #e5e5ed;">
    <p style="font-size:13px;color:#6b6b7b;margin:0 0 8px;font-weight:600;">Neoskool</p>
    <p style="font-size:11px;color:#9b9bab;margin:0;">Chaque \u00e9l\u00e8ve m\u00e9rite de r\u00e9ussir.</p>
  </div>`;

function emailWrap(content) {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f3ff;">
<div style="max-width:560px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;border:1px solid #e5e5ed;">
  <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:32px;text-align:center;">
    <h1 style="color:white;font-size:22px;margin:0;font-weight:900;">Neoskool</h1>
  </div>
  <div style="padding:32px;">${content}</div>
  ${EMAIL_FOOTER}
</div>
</body></html>`;
}

// ─── Event handlers ───
async function handleCheckoutCompleted(session) {
  const customerId = session.customer;
  const subscriptionId = session.subscription;

  // Try to get userId from session metadata, then from subscription metadata
  let userId = session.metadata?.supabase_user_id;

  if (!subscriptionId) return;

  // Fetch full subscription details from Stripe
  const subRes = await fetch(`https://api.stripe.com/v1/subscriptions/${subscriptionId}`, {
    headers: { 'Authorization': `Bearer ${STRIPE_SECRET_KEY}` },
  });
  const sub = await subRes.json();

  // Fallback: get userId from subscription metadata
  if (!userId) {
    userId = sub.metadata?.supabase_user_id;
  }

  // Fallback: lookup userId by stripe_customer_id in subscriptions table
  if (!userId && customerId) {
    const lookupRes = await fetch(
      `${SUPABASE_URL}/rest/v1/subscriptions?stripe_customer_id=eq.${customerId}&select=user_id`,
      { headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` } }
    );
    const lookupData = await lookupRes.json();
    if (lookupData.length > 0) userId = lookupData[0].user_id;
  }

  const priceId = sub.items?.data?.[0]?.price?.id || '';
  const interval = sub.items?.data?.[0]?.price?.recurring?.interval || 'month';

  const periodEnd = sub.current_period_end
    ? new Date(sub.current_period_end * 1000).toISOString()
    : null;

  const updateData = {
    stripe_customer_id: customerId,
    stripe_subscription_id: subscriptionId,
    plan: 'pro',
    status: 'active',
    price_id: priceId,
    billing_interval: interval,
    cancel_at_period_end: false,
    sheets_limit: 50,
  };
  if (periodEnd) updateData.current_period_end = periodEnd;

  console.log('Webhook handleCheckoutCompleted:', { userId, customerId, subscriptionId, priceId, interval, periodEnd });

  // Update by user ID (preferred) or customer ID (fallback)
  let updated = false;
  if (userId) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions?user_id=eq.${userId}`, {
      method: 'PATCH',
      headers: supabaseHeaders(),
      body: JSON.stringify(updateData),
    });
    console.log('PATCH by user_id result:', res.status, await res.text());
    updated = res.ok;
  }
  if (!updated && customerId) {
    // Try by customer_id
    const res2 = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions?stripe_customer_id=eq.${customerId}`, {
      method: 'PATCH',
      headers: supabaseHeaders(),
      body: JSON.stringify(updateData),
    });
    console.log('PATCH by customer_id result:', res2.status, await res2.text());
    updated = res2.ok;
  }
  if (!updated && userId) {
    // Last resort: insert new row
    const res3 = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions`, {
      method: 'POST',
      headers: { ...supabaseHeaders(), 'Prefer': 'resolution=merge-duplicates' },
      body: JSON.stringify({ user_id: userId, ...updateData }),
    });
    console.log('INSERT result:', res3.status, await res3.text());
  }

  // Send welcome Pro email
  const email = session.customer_details?.email || session.customer_email;
  if (email) {
    const intervalLabel = interval === 'year' ? 'annuel' : 'mensuel';
    await sendEmail(email, 'Bienvenue dans Neoskool Pro \u{1F680}', emailWrap(`
      <p style="font-size:16px;color:#0a0a0f;line-height:1.7;margin:0 0 16px;">F\u00e9licitations, tu es maintenant <strong style="color:#7c3aed;">Pro</strong> !</p>
      <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 16px;">
        Ton abonnement ${intervalLabel} est actif. Voici ce qui change :
      </p>
      <table style="width:100%;margin:0 0 20px;" cellpadding="0" cellspacing="0">
        <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\u2705 50 fiches par mois (au lieu de 3)</td></tr>
        <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\u2705 Export PDF haute qualit\u00e9</td></tr>
        <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\u2705 Acc\u00e8s prioritaire</td></tr>
        <tr><td style="padding:8px 0;font-size:15px;color:#3a3a4a;">\u2705 Support d\u00e9di\u00e9</td></tr>
      </table>
      <p style="font-size:14px;color:#6b6b7b;line-height:1.6;margin:0 0 16px;">
        Tu as 14 jours pour changer d\u2019avis. Si le service ne te convient pas, contacte-nous pour un remboursement complet.
      </p>
      <div style="text-align:center;margin:28px 0;">
        <a href="https://www.neoskool.com/#generer" style="display:inline-block;background:#7c3aed;color:white;padding:16px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">G\u00e9n\u00e9rer une fiche</a>
      </div>
    `));
  }
}

async function handleSubscriptionUpdated(sub) {
  const customerId = sub.customer;
  const status = sub.status; // active, past_due, canceled, unpaid
  const priceId = sub.items?.data?.[0]?.price?.id || '';
  const interval = sub.items?.data?.[0]?.price?.recurring?.interval || 'month';

  const isPro = ['active', 'past_due'].includes(status);

  const periodEnd = sub.current_period_end
    ? new Date(sub.current_period_end * 1000).toISOString()
    : null;

  const data = {
    stripe_subscription_id: sub.id,
    plan: isPro ? 'pro' : 'free',
    status: status === 'active' ? 'active' : status === 'past_due' ? 'past_due' : 'canceled',
    price_id: priceId,
    billing_interval: interval,
    cancel_at_period_end: sub.cancel_at_period_end || false,
    sheets_limit: isPro ? 50 : 3,
  };
  if (periodEnd) data.current_period_end = periodEnd;

  await updateSubscription(customerId, data);

  // Send email for payment failure (past_due)
  if (status === 'past_due') {
    // Get customer email from Stripe
    const custRes = await fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
      headers: { 'Authorization': `Bearer ${STRIPE_SECRET_KEY}` },
    });
    const customer = await custRes.json();
    if (customer.email) {
      await sendEmail(customer.email, 'Probl\u00e8me avec ton paiement Neoskool', emailWrap(`
        <p style="font-size:16px;color:#0a0a0f;line-height:1.7;margin:0 0 16px;">Salut,</p>
        <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 16px;">
          Ton dernier paiement pour <strong>Neoskool Pro</strong> a \u00e9chou\u00e9. Ton acc\u00e8s Pro reste actif pendant 3 jours, mais il faut mettre \u00e0 jour ton moyen de paiement.
        </p>
        <div style="text-align:center;margin:28px 0;">
          <a href="https://www.neoskool.com/dashboard.html" style="display:inline-block;background:#dc2626;color:white;padding:16px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">Mettre \u00e0 jour ma carte</a>
        </div>
        <p style="font-size:14px;color:#6b6b7b;line-height:1.6;margin:0;text-align:center;">
          Sans mise \u00e0 jour, ton compte passera automatiquement en plan gratuit.
        </p>
      `));
    }
  }
}

async function handleSubscriptionDeleted(sub) {
  const customerId = sub.customer;

  await updateSubscription(customerId, {
    plan: 'free',
    status: 'canceled',
    cancel_at_period_end: false,
    sheets_limit: 3,
    stripe_subscription_id: null,
    price_id: null,
    billing_interval: null,
  });

  // Send cancellation email
  const custRes = await fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
    headers: { 'Authorization': `Bearer ${STRIPE_SECRET_KEY}` },
  });
  const customer = await custRes.json();
  if (customer.email) {
    await sendEmail(customer.email, 'Ton abonnement Neoskool Pro est termin\u00e9', emailWrap(`
      <p style="font-size:16px;color:#0a0a0f;line-height:1.7;margin:0 0 16px;">Salut,</p>
      <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 16px;">
        Ton abonnement <strong>Neoskool Pro</strong> est maintenant termin\u00e9. Tu reviens au plan gratuit (3 fiches par mois).
      </p>
      <p style="font-size:16px;color:#3a3a4a;line-height:1.7;margin:0 0 16px;">
        Tes fiches sauvegard\u00e9es restent accessibles dans ta biblioth\u00e8que. Tu peux te r\u00e9abonner \u00e0 tout moment.
      </p>
      <div style="text-align:center;margin:28px 0;">
        <a href="https://www.neoskool.com/dashboard.html" style="display:inline-block;background:#7c3aed;color:white;padding:16px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">Se r\u00e9abonner</a>
      </div>
      <p style="font-size:14px;color:#6b6b7b;line-height:1.6;margin:0;text-align:center;">
        Tu nous manques d\u00e9j\u00e0 ! \u{1F49C}
      </p>
    `));
  }
}

async function handleInvoicePaid(invoice) {
  // Renewal payment succeeded — ensure subscription is active
  if (invoice.subscription) {
    const customerId = invoice.customer;
    const sub = await getSubscriptionByCustomer(customerId);
    if (sub && sub.status === 'past_due') {
      await updateSubscription(customerId, {
        status: 'active',
        plan: 'pro',
        sheets_limit: 50,
      });
    }
  }
}

// ─── Main handler ───
export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const payload = await req.text();
  const sigHeader = req.headers.get('stripe-signature') || '';

  // Verify signature
  const valid = await verifyStripeSignature(payload, sigHeader);
  if (!valid) {
    console.error('Invalid Stripe signature');
    return new Response('Invalid signature', { status: 400 });
  }

  let event;
  try {
    event = JSON.parse(payload);
  } catch (e) {
    return new Response('Invalid JSON', { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object);
        break;
      case 'invoice.paid':
        await handleInvoicePaid(event.data.object);
        break;
      case 'invoice.payment_failed':
        // Handled by subscription.updated -> past_due
        break;
      default:
        // Ignore other events
        break;
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
