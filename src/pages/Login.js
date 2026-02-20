export function renderLogin() {
  // Attach global handlers
  window._handleLogin = async () => {
    const email = document.getElementById('login-email')?.value?.trim();
    const password = document.getElementById('login-password')?.value;
    const errorEl = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    if (!email || !password) {
      if (errorEl) { errorEl.textContent = 'Please enter both email and password.'; errorEl.classList.remove('hidden'); }
      return;
    }

    // Disable button while loading
    if (btn) { btn.disabled = true; btn.textContent = 'Signing in...'; }
    if (errorEl) { errorEl.classList.add('hidden'); }

    try {
      await window.__supabaseAuth.signIn(email, password);
      window.location.hash = '/';
    } catch (err) {
      if (errorEl) {
        errorEl.textContent = err.message || 'Invalid email or password. Please try again.';
        errorEl.classList.remove('hidden');
      }
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = 'Log In'; }
    }
  };

  window._handleGoogleLogin = async () => {
    try {
      await window.__supabaseAuth.signInWithGoogle();
    } catch (err) {
      const errorEl = document.getElementById('login-error');
      if (errorEl) {
        errorEl.textContent = err.message || 'Google sign-in failed. Please try again.';
        errorEl.classList.remove('hidden');
      }
    }
  };

  window._handleForgotPassword = async () => {
    const email = document.getElementById('login-email')?.value?.trim();
    const errorEl = document.getElementById('login-error');
    const msgEl = document.getElementById('login-success');

    if (!email) {
      if (errorEl) { errorEl.textContent = 'Please enter your email address first.'; errorEl.classList.remove('hidden'); }
      return;
    }

    try {
      await window.__supabaseAuth.resetPassword(email);
      if (msgEl) { msgEl.textContent = 'Check your email for a password reset link.'; msgEl.classList.remove('hidden'); }
      if (errorEl) { errorEl.classList.add('hidden'); }
    } catch (err) {
      if (errorEl) {
        errorEl.textContent = err.message || 'Failed to send reset email. Please try again.';
        errorEl.classList.remove('hidden');
      }
    }
  };

  const html = `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">

      <!-- Nav -->
      <nav class="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <a href="#/landing" class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <span class="font-bold text-lg tracking-tight">Annuity<span class="text-blue-600 dark:text-blue-400">IQ</span></span>
            </a>
          </div>
        </div>
      </nav>

      <!-- Login Form -->
      <div class="flex-1 flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-md">
          <div class="text-center mb-8">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Welcome back</h1>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">Sign in to access your rate intelligence dashboard</p>
          </div>

          <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">

            <!-- Error / Success Messages -->
            <div id="login-error" class="hidden mb-4 px-4 py-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm"></div>
            <div id="login-success" class="hidden mb-4 px-4 py-3 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-700 dark:text-emerald-300 text-sm"></div>

            <!-- Google Sign-In -->
            <button onclick="window._handleGoogleLogin()" class="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <!-- Divider -->
            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200 dark:border-slate-700"></div></div>
              <div class="relative flex justify-center text-xs"><span class="px-3 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">or sign in with email</span></div>
            </div>

            <!-- Email Field -->
            <div class="space-y-4">
              <div>
                <label for="login-email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email address</label>
                <input id="login-email" type="email" autocomplete="email" placeholder="you@example.com"
                  class="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
              </div>
              <div>
                <label for="login-password" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
                <input id="login-password" type="password" autocomplete="current-password" placeholder="Enter your password"
                  class="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  onkeydown="if(event.key==='Enter') window._handleLogin()">
              </div>
            </div>

            <!-- Forgot Password -->
            <div class="mt-3 text-right">
              <button onclick="window._handleForgotPassword()" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">Forgot password?</button>
            </div>

            <!-- Submit -->
            <button id="login-btn" onclick="window._handleLogin()" class="w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors">
              Log In
            </button>
          </div>

          <!-- Signup Link -->
          <p class="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
            Don't have an account?
            <a href="#/signup" class="text-blue-600 dark:text-blue-400 font-medium hover:underline">Start free trial</a>
          </p>
        </div>
      </div>

    </div>
  `;

  return html;
}
