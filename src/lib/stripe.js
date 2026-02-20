// =============================================================================
// AnnuityIQ - Stripe Integration (Client-side)
// =============================================================================
//
// Provides checkout session creation and customer portal access.
// Talks to Supabase Edge Functions that hold the Stripe secret key.
// =============================================================================

import { supabase } from './supabase.js';

// ---------------------------------------------------------------------------
// Stripe Checkout — redirects user to Stripe-hosted payment page
// ---------------------------------------------------------------------------

/**
 * Create a Stripe Checkout Session via Edge Function and redirect.
 * The Edge Function creates the session and returns the URL.
 */
export async function createCheckout() {
  const btn = document.getElementById('pricing-subscribe-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Redirecting...'; }

  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      window.location.hash = '/login';
      return;
    }

    const response = await supabase.functions.invoke('create-checkout', {
      body: {
        returnUrl: window.location.origin + '/#/'
      }
    });

    if (response.error) throw response.error;

    const { url } = response.data;
    if (url) {
      window.location.href = url;
    } else {
      throw new Error('No checkout URL returned');
    }
  } catch (err) {
    console.error('Checkout error:', err);
    alert('Unable to start checkout. Please try again.');
    if (btn) { btn.disabled = false; btn.textContent = 'Subscribe Now — $3/month'; }
  }
}

// ---------------------------------------------------------------------------
// Stripe Customer Portal — manage subscription, update payment, cancel
// ---------------------------------------------------------------------------

/**
 * Create a Stripe Customer Portal session via Edge Function and redirect.
 */
export async function openCustomerPortal() {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      window.location.hash = '/login';
      return;
    }

    const response = await supabase.functions.invoke('create-portal', {
      body: {
        returnUrl: window.location.origin + '/#/'
      }
    });

    if (response.error) throw response.error;

    const { url } = response.data;
    if (url) {
      window.location.href = url;
    } else {
      throw new Error('No portal URL returned');
    }
  } catch (err) {
    console.error('Portal error:', err);
    alert('Unable to open subscription management. Please try again.');
  }
}

// ---------------------------------------------------------------------------
// Expose on window for onclick handlers in HTML
// ---------------------------------------------------------------------------

window.__stripe = {
  createCheckout,
  openCustomerPortal
};
