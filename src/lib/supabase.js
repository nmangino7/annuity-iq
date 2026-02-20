// =============================================================================
// AnnuityIQ - Supabase Client & Auth Helpers
// =============================================================================

import { createClient } from '@supabase/supabase-js';

// ---------------------------------------------------------------------------
// Client initialization
// ---------------------------------------------------------------------------

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. ' +
    'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ---------------------------------------------------------------------------
// Auth helper functions
// ---------------------------------------------------------------------------

/**
 * Sign in with email and password.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<import('@supabase/supabase-js').AuthResponse>}
 */
export async function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

/**
 * Create a new account.
 * @param {string} email
 * @param {string} password
 * @param {{ full_name?: string }} metadata - User metadata stored in raw_user_meta_data
 * @returns {Promise<import('@supabase/supabase-js').AuthResponse>}
 */
export async function signUp(email, password, metadata = {}) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata
    }
  });
}

/**
 * Sign in via Google OAuth.
 * Redirects the browser to Google's consent screen.
 * @returns {Promise<import('@supabase/supabase-js').AuthResponse>}
 */
export async function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({ provider: 'google' });
}

/**
 * Sign the current user out.
 * @returns {Promise<{ error: import('@supabase/supabase-js').AuthError | null }>}
 */
export async function signOut() {
  return supabase.auth.signOut();
}

/**
 * Send a password-reset email.
 * @param {string} email
 * @returns {Promise<{ data: object, error: import('@supabase/supabase-js').AuthError | null }>}
 */
export async function resetPassword(email) {
  return supabase.auth.resetPasswordForEmail(email);
}

/**
 * Retrieve the current session (if any).
 * @returns {Promise<{ data: { session: import('@supabase/supabase-js').Session | null }, error: import('@supabase/supabase-js').AuthError | null }>}
 */
export async function getSession() {
  return supabase.auth.getSession();
}

/**
 * Retrieve the current authenticated user.
 * @returns {Promise<import('@supabase/supabase-js').UserResponse>}
 */
export async function getUser() {
  return supabase.auth.getUser();
}

/**
 * Subscribe to auth state changes (sign-in, sign-out, token refresh, etc.).
 * @param {function} callback - Receives (event, session)
 * @returns {{ data: { subscription: import('@supabase/supabase-js').Subscription } }}
 */
export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange(callback);
}

// ---------------------------------------------------------------------------
// Expose auth helpers on window for login/signup page handlers
// ---------------------------------------------------------------------------

window.__supabaseAuth = {
  signIn,
  signUp,
  signInWithGoogle,
  signOut,
  resetPassword,
  getSession,
  getUser,
  onAuthStateChange
};
