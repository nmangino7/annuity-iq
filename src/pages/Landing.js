export function renderLanding() {
  const html = `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-900">

      <!-- Navigation Bar -->
      <nav class="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <span class="font-bold text-lg tracking-tight">Annuity<span class="text-blue-600 dark:text-blue-400">IQ</span></span>
            </div>
            <div class="flex items-center gap-4">
              <a href="#/login" class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Log In</a>
              <a href="#/signup" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">Start Free Trial</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent dark:from-blue-600/10 dark:to-transparent"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Live rate data updated daily
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            The Bloomberg Terminal<br>
            <span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">for Annuities</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Compare rates, benchmark performance, and research carriers across 600+ FIA, GLWB, IUL, RILA, VA, and VUL products plus 120+ subaccounts from 35+ carriers. Built for financial advisors and wholesalers who demand institutional-grade tools.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#/signup" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all">
              Start Free 7-Day Trial
            </a>
            <a href="#/login" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Already have an account? Log in &rarr;
            </a>
          </div>
          <div class="mt-12 flex items-center justify-center gap-6 sm:gap-8 text-sm text-slate-500 dark:text-slate-500 flex-wrap">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              No credit card required
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Cancel anytime
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              600+ products
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              35+ carriers
            </span>
          </div>
        </div>
      </section>

      <!-- Stats Bar -->
      <section class="border-t border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-3 md:grid-cols-7 gap-6 text-center">
            <div>
              <p class="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">105+</p>
              <p class="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">FIA</p>
            </div>
            <div>
              <p class="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">105+</p>
              <p class="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">Income Riders</p>
            </div>
            <div>
              <p class="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">105+</p>
              <p class="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">IUL</p>
            </div>
            <div>
              <p class="text-2xl font-bold font-mono text-rose-600 dark:text-rose-400">76+</p>
              <p class="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">RILA</p>
            </div>
            <div>
              <p class="text-2xl font-bold font-mono text-violet-600 dark:text-violet-400">50+</p>
              <p class="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">Variable Annuity</p>
            </div>
            <div>
              <p class="text-2xl font-bold font-mono text-teal-600 dark:text-teal-400">38+</p>
              <p class="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">VUL</p>
            </div>
            <div>
              <p class="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">120+</p>
              <p class="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-wider">Subaccounts</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature Highlights -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Features</p>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Everything you need to advise with confidence</h2>
            <p class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Stop wasting hours on spreadsheets and carrier websites. AnnuityIQ puts every rate, every product, and every carrier at your fingertips.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <!-- Rate Intelligence -->
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">Rate Intelligence</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Compare cap rates, participation rates, buffer levels, and rollup rates across every major carrier. See the full market landscape at a glance.
              </p>
            </div>

            <!-- Benchmark Any Rate -->
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">Benchmark Any Rate</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Enter your client's current rate and instantly see how it ranks against the market. Identify upgrade opportunities in seconds.
              </p>
            </div>

            <!-- Side-by-Side Comparison -->
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">Side-by-Side Comparison</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Compare up to 4 products head-to-head with color-coded best/worst indicators. Make data-driven client recommendations.
              </p>
            </div>

            <!-- Rate Screener -->
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">Multi-Filter Screener</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                12 filters including cap rate, participation rate, surrender period, carrier rating, COMDEX score, and buffer level. Results update in real-time.
              </p>
            </div>

            <!-- Watchlist & Alerts -->
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">Watchlist &amp; Rate Alerts</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Track products you care about and get notified when rates change. Never miss an opportunity for your clients.
              </p>
            </div>

            <!-- Export & Reports -->
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-3">Reports &amp; CSV Export</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Download rate sheets, market reports, and carrier data as CSV. Share institutional-quality data with your team.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Product Categories -->
      <section class="py-20 bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Coverage</p>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Comprehensive product universe</h2>
            <p class="mt-4 text-slate-600 dark:text-slate-400">Seven product categories plus fund research. 35+ carriers. Updated daily.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-7 text-white">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-2">Fixed Indexed Annuities</h3>
              <p class="text-blue-200 text-xs leading-relaxed mb-4">Cap rates, participation rates, spreads, index strategies, and surrender schedules.</p>
              <p class="text-3xl font-bold font-mono">105+</p>
              <p class="text-blue-300 text-xs mt-1">Products tracked</p>
            </div>

            <div class="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl p-7 text-white">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-2">Income Riders (GLWB)</h3>
              <p class="text-emerald-200 text-xs leading-relaxed mb-4">Rollup rates, withdrawal percentages, rider fees, step-ups, and deferral bonuses.</p>
              <p class="text-3xl font-bold font-mono">105+</p>
              <p class="text-emerald-300 text-xs mt-1">Income riders compared</p>
            </div>

            <div class="bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl p-7 text-white">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-2">Indexed Universal Life</h3>
              <p class="text-amber-200 text-xs leading-relaxed mb-4">Cap rates, illustrated rates, loan provisions, no-lapse guarantees, and policy charges.</p>
              <p class="text-3xl font-bold font-mono">105+</p>
              <p class="text-amber-300 text-xs mt-1">IUL products tracked</p>
            </div>

            <div class="bg-gradient-to-br from-rose-600 to-rose-800 rounded-xl p-7 text-white">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-2">RILAs (Buffer Annuities)</h3>
              <p class="text-rose-200 text-xs leading-relaxed mb-4">Buffer levels, cap rates, participation rates, uncapped options, and downside protection.</p>
              <p class="text-3xl font-bold font-mono">76+</p>
              <p class="text-rose-300 text-xs mt-1">RILA products tracked</p>
            </div>

            <div class="bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl p-7 text-white">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-2">Variable Annuities</h3>
              <p class="text-violet-200 text-xs leading-relaxed mb-4">M&E charges, living benefits, death benefits, subaccount lineups, and contract types.</p>
              <p class="text-3xl font-bold font-mono">50+</p>
              <p class="text-violet-300 text-xs mt-1">VA products tracked</p>
            </div>

            <div class="bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl p-7 text-white">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-2">Variable Universal Life</h3>
              <p class="text-teal-200 text-xs leading-relaxed mb-4">M&E charges, loan provisions, no-lapse guarantees, riders, and subaccount options.</p>
              <p class="text-3xl font-bold font-mono">38+</p>
              <p class="text-teal-300 text-xs mt-1">VUL products tracked</p>
            </div>

            <div class="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl p-7 text-white">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold mb-2">Fund Research</h3>
              <p class="text-indigo-200 text-xs leading-relaxed mb-4">Performance data, Morningstar ratings, expense ratios, and cross-referenced VA/VUL availability.</p>
              <p class="text-3xl font-bold font-mono">120+</p>
              <p class="text-indigo-300 text-xs mt-1">Subaccounts tracked</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Social Proof / Testimonials -->
      <section class="py-20 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Trusted by Advisors</p>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Built by advisors, for advisors</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div class="flex items-center gap-1 mb-4">
                ${[1,2,3,4,5].map(() => '<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">"I used to spend 3 hours a week gathering rate data from carrier websites. Now I have everything in one place, updated daily. This is a game-changer."</p>
              <div>
                <p class="font-semibold text-sm text-slate-900 dark:text-white">Sarah M.</p>
                <p class="text-xs text-slate-500">Independent Financial Advisor</p>
              </div>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div class="flex items-center gap-1 mb-4">
                ${[1,2,3,4,5].map(() => '<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">"The RILA and buffer annuity data alone is worth it. No other tool covers the registered index-linked space this comprehensively. At $3/month, it's a no-brainer."</p>
              <div>
                <p class="font-semibold text-sm text-slate-900 dark:text-white">David K.</p>
                <p class="text-xs text-slate-500">Retirement Planning Specialist</p>
              </div>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div class="flex items-center gap-1 mb-4">
                ${[1,2,3,4,5].map(() => '<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">"The side-by-side comparison tool closed a case for me last week. Client could clearly see which product had the best rates for their situation."</p>
              <div>
                <p class="font-semibold text-sm text-slate-900 dark:text-white">Michael R.</p>
                <p class="text-xs text-slate-500">Managing Partner, Wealth Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="py-20 bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Pricing</p>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Simple, transparent pricing</h2>
            <p class="mt-4 text-slate-600 dark:text-slate-400">Less than a cup of coffee. Everything included. No surprises.</p>
          </div>
          <div class="max-w-md mx-auto">
            <div class="bg-white dark:bg-slate-800 rounded-2xl border-2 border-blue-600 dark:border-blue-500 p-8 shadow-xl shadow-blue-600/10 relative">
              <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span class="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">Full Access</span>
              </div>
              <div class="text-center mb-8">
                <div class="flex items-baseline justify-center gap-1">
                  <span class="text-5xl font-extrabold text-slate-900 dark:text-white font-mono">$3</span>
                  <span class="text-slate-500 dark:text-slate-400 text-lg">/month</span>
                </div>
                <p class="text-xs text-slate-500 mt-2">That's $0.10/day for institutional-grade data</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  All 600+ FIA, GLWB, IUL, RILA, VA &amp; VUL products
                </li>
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Rate benchmarking &amp; percentile ranking
                </li>
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Side-by-side comparison (up to 4 products)
                </li>
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Multi-filter rate screener
                </li>
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Watchlist &amp; rate change alerts
                </li>
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  CSV exports &amp; market reports
                </li>
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Carrier ratings (AM Best, S&amp;P, Moody's, COMDEX)
                </li>
                <li class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  Daily rate updates &amp; historical trends
                </li>
              </ul>
              <a href="#/signup" class="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                Start Free 7-Day Trial
              </a>
              <p class="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">7-day free trial. No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-20 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div class="space-y-6">
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h4 class="font-semibold text-slate-900 dark:text-white mb-2">How often is rate data updated?</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Rate data is refreshed daily. When carriers update their rates, those changes are reflected in AnnuityIQ within 24 hours.</p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h4 class="font-semibold text-slate-900 dark:text-white mb-2">What product types do you cover?</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">We cover seven categories: Fixed Indexed Annuities (FIA), Income Riders (GLWB), Indexed Universal Life (IUL), RILAs (buffer annuities), Variable Annuities (VA), Variable Universal Life (VUL), plus a comprehensive subaccount/fund research tool.</p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Can I cancel my subscription?</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Yes, cancel anytime from your account settings. No questions asked. Your trial is completely free for 7 days, and we'll never charge you without notice.</p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Is this tool for consumers or financial professionals?</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">AnnuityIQ is designed for financial advisors, insurance agents, and retirement planning professionals. The data is presented at an institutional level with detailed product specifications.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to elevate your practice?</h2>
          <p class="text-blue-200 text-lg mb-8">Join hundreds of advisors who use AnnuityIQ to make better, faster recommendations.</p>
          <a href="#/signup" class="inline-block px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-blue-50 transition-all">
            Start Your Free Trial
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="border-t border-slate-200 dark:border-slate-700 py-8 bg-white dark:bg-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="flex items-center justify-center gap-3 mb-3">
            <div class="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <span class="font-semibold text-sm">Annuity<span class="text-blue-600 dark:text-blue-400">IQ</span></span>
          </div>
          <p class="text-xs text-slate-400 dark:text-slate-500">AnnuityIQ v2.0 | Data as of Feb 2026</p>
          <p class="text-xs text-slate-400 dark:text-slate-500 mt-2">For informational purposes only. Not a solicitation or recommendation.</p>
        </div>
      </footer>

    </div>
  `;

  return html;
}
