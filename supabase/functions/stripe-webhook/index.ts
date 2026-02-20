import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@13.6.0?target=deno'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2023-10-16' })
const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the raw body and Stripe signature header
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')!

    // Verify webhook signature
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message)
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Use service role key to bypass RLS
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const customerId = session.customer as string
        const subscriptionId = session.subscription as string

        // Look up user by stripe_customer_id and update subscription info
        const { error } = await supabase
          .from('profiles')
          .update({
            subscription_status: 'active',
            stripe_subscription_id: subscriptionId,
          })
          .eq('stripe_customer_id', customerId)

        if (error) {
          console.error('Error updating profile on checkout.session.completed:', error)
          throw error
        }
        console.log(`Checkout completed for customer ${customerId}, subscription ${subscriptionId}`)
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        // Map Stripe subscription status to our status values
        let status: string
        switch (subscription.status) {
          case 'active':
            status = 'active'
            break
          case 'canceled':
            status = 'canceled'
            break
          case 'past_due':
            status = 'past_due'
            break
          default:
            status = subscription.status
        }

        const { error } = await supabase
          .from('profiles')
          .update({ subscription_status: status })
          .eq('stripe_customer_id', customerId)

        if (error) {
          console.error('Error updating profile on subscription.updated:', error)
          throw error
        }
        console.log(`Subscription updated for customer ${customerId}: status=${status}`)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        const { error } = await supabase
          .from('profiles')
          .update({ subscription_status: 'expired' })
          .eq('stripe_customer_id', customerId)

        if (error) {
          console.error('Error updating profile on subscription.deleted:', error)
          throw error
        }
        console.log(`Subscription deleted for customer ${customerId}, status set to expired`)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        const { error } = await supabase
          .from('profiles')
          .update({ subscription_status: 'past_due' })
          .eq('stripe_customer_id', customerId)

        if (error) {
          console.error('Error updating profile on invoice.payment_failed:', error)
          throw error
        }
        console.log(`Payment failed for customer ${customerId}, status set to past_due`)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Webhook processing error:', err.message)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
