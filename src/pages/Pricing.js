export function renderPricing() {
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
            <div class="flex items-center gap-4">
              <a href="#/login" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600">Log In</a>
              <a href="#/signup" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">Start Free Trial</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Pricing Content -->
      <div class="flex-1 flex items-center justify-center px-4 py-16">
        <div class="max-w-lg w-full">
          <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              Your free trial has ended
            </div>
            <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Subscribe to continue</h1>
            <p class="text-slate-500 dark:text-slate-400 mt-3 text-sm max-w-md mx-auto">
              Your 7-day free trial has expired. Subscribe now to keep access to all AnnuityIQ features.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 rounded-2xl border-2 border-blue-600 dark:border-blue-500 p-8 shadow-xl shadow-blue-600/10 relative">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span class="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">Full Access</span>
            </div>
            <div class="text-center mb-8">
              <div class="flex items-baseline justify-center gap-1">
                <span class="text-5xl font-extrabold text-slate-900 dark:text-white font-mono">$3</span>
                <span class="text-slate-500 dark:text-slate-400 text-lg">/month</span>
              </div>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Billed monthly. Cancel anytime.</p>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                All FIA, GLWB, and IUL products
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Rate benchmarking & comparison tools
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Income calculator & historical rates
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Carrier ratings & COMDEX scores
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Daily automated rate updates
              </li>
            </ul>
            <button onclick="window.__stripe?.createCheckout()" id="pricing-subscribe-btn" class="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
              Subscribe Now — $3/month
            </button>
          </div>

          <!-- Back to app (if still has session) -->
          <div class="text-center mt-8">
            <button onclick="window.app.signOut()" class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Sign out and return to landing page
            </button>
          </div>
        </div>
      </div>

    </div>
  `;

  return html;
}
