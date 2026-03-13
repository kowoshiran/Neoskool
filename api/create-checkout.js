export const config = {
  runtime: 'edge',
};

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_PRICE_MONTHLY = process.env.STRIPE_PRICE_MONTHLY || '';
const STRIPE_PRICE_ANNUAL = process.env.STRIPE_PRICE_ANNUAL || '';
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nniyltlejcdoyqtgctql.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

async function stripeRequest(endpoint, params) {
  const res = await fetch(`https://api.stripe.com/v1${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params).toString(),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data;
}

async function stripeGet(endpoint) {
  const res = await fetch(`https://api.stripe.com/v1${endpoint}`, {
    headers: { 'Authorization': `Bearer ${STRIPE_SECRET_KEY}` },
  });
  return res.json();
}

async function getOrCreateStripeCustomer(userId, email) {
  // Check if user already has a stripe_customer_id in subscriptions table
  const subRes = await fetch(
    `${SUPABASE_URL}/rest/v1/subscriptions?user_id=eq.${userId}&select=stripe_customer_id`,
    {
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    }
  );
  const subs = await subRes.json();

  if (subs.length > 0 && subs[0].stripe_customer_id) {
    return subs[0].stripe_customer_id;
  }

  // Search existing Stripe customers by email
  const searchRes = await fetch(
    `https://api.stripe.com/v1/customers/search?query=email:'${encodeURIComponent(email)}'`,
    {
      headers: { 'Authorization': `Bearer ${STRIPE_SECRET_KEY}` },
    }
  );
  const searchData = await searchRes.json();

  if (searchData.data && searchData.data.length > 0) {
    const customerId = searchData.data[0].id;
    // Save to subscriptions
    await saveCustomerId(userId, customerId);
    return customerId;
  }

  // Create new customer
  const customer = await stripeRequest('/customers', {
    email: email,
    'metadata[supabase_user_id]': userId,
  });

  // Save to subscriptions
  await saveCustomerId(userId, customer.id);
  return customer.id;
}

async function saveCustomerId(userId, customerId) {
  await fetch(`${SUPABASE_URL}/rest/v1/subscriptions?user_id=eq.${userId}`, {
    method: 'PATCH',
    headers: {
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({ stripe_customer_id: customerId }),
  });
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405, headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!STRIPE_SECRET_KEY) {
    return new Response(JSON.stringify({ error: 'Stripe not configured' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { userId, email, interval } = body;

    if (!userId || !email) {
      return new Response(JSON.stringify({ error: 'Missing userId or email' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const priceId = interval === 'year' ? STRIPE_PRICE_ANNUAL : STRIPE_PRICE_MONTHLY;
    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Price not configured' }), {
        status: 500, headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get or create Stripe customer
    const customerId = await getOrCreateStripeCustomer(userId, email);

    // Check if customer already has an active subscription
    const existingSubs = await stripeGet(`/subscriptions?customer=${customerId}&status=active&limit=1`);
    if (existingSubs.data && existingSubs.data.length > 0) {
      return new Response(JSON.stringify({ error: 'Tu as déjà un abonnement actif. Gère-le depuis ton espace.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create Checkout session
    const origin = req.headers.get('origin') || 'https://www.neoskool.com';
    const session = await stripeRequest('/checkout/sessions', {
      'customer': customerId,
      'mode': 'subscription',
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'success_url': `${origin}/dashboard.html?checkout=success`,
      'cancel_url': `${origin}/dashboard.html?checkout=cancel`,
      'metadata[supabase_user_id]': userId,
      'subscription_data[metadata][supabase_user_id]': userId,
      'allow_promotion_codes': 'true',
      'billing_address_collection': 'auto',
      'payment_method_types[0]': 'card',
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Checkout error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}
