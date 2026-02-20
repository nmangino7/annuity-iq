// =============================================================================
// AnnuityIQ v2.0 - Main Entry Point
// =============================================================================

import { state, setTheme, toggleTheme, setUser, setProfile, addToCompare, removeFromCompare, clearCompare, updateCompareBar } from './state.js';
import { registerRoute, initRouter, navigate } from './router.js';

// Data layer — static for local dev, swap to lib/api.js when Supabase is configured
import { searchAll } from './data/index.js';

// Auth & Stripe (these self-register on window.__supabaseAuth / window.__stripe)
// Only load when env vars are present
const hasSupabase = typeof import.meta !== 'undefined' &&
  import.meta.env?.VITE_SUPABASE_URL &&
  import.meta.env?.VITE_SUPABASE_ANON_KEY;

let supabaseAuth = null;
let stripeLib = null;

if (hasSupabase) {
  import('./lib/supabase.js').then(mod => {
    supabaseAuth = mod;
    // Also load stripe
    import('./lib/stripe.js');
    // Initialize auth
    initAuth(mod);
  }).catch(err => {
    console.warn('Supabase not configured, running in local mode:', err.message);
  });
}

// Page renderers
import { renderDashboard } from './pages/Dashboard.js';
import { renderFIAExplorer } from './pages/FIAExplorer.js';
import { renderGLWBExplorer } from './pages/GLWBExplorer.js';
import { renderIULExplorer } from './pages/IULExplorer.js';
import { renderProductDetail } from './pages/ProductDetail.js';
import { renderCompare } from './pages/CompareView.js';
import { renderBenchmark } from './pages/Benchmark.js';
import { renderHistory } from './pages/History.js';
import { renderCalculator } from './pages/Calculator.js';
import { renderCarriers } from './pages/Carriers.js';
import { renderCarrierProfile } from './pages/CarrierProfile.js';
import { renderLanding } from './pages/Landing.js';
import { renderLogin } from './pages/Login.js';
import { renderSignup } from './pages/Signup.js';
import { renderPricing } from './pages/Pricing.js';
import { renderRateAlerts } from './pages/RateAlerts.js';
import { renderReports } from './pages/Reports.js';
import { renderWatchlist } from './pages/Watchlist.js';
import { renderScreener } from './pages/Screener.js';
import { renderRILAExplorer, renderRILADetail } from './pages/RILAExplorer.js';
import { renderVAExplorer, renderVADetail } from './pages/VAExplorer.js';
import { renderVULExplorer, renderVULDetail } from './pages/VULExplorer.js';
import { renderFundExplorer, renderFundDetail } from './pages/FundExplorer.js';

// ---------------------------------------------------------------------------
// Register routes
// ---------------------------------------------------------------------------

// Public routes (no auth required)
registerRoute('/landing', () => renderLanding());
registerRoute('/login', () => renderLogin());
registerRoute('/signup', () => renderSignup());
registerRoute('/pricing', () => renderPricing());

// Protected routes (auth required)
registerRoute('/', () => renderDashboard());
registerRoute('/fia', () => renderFIAExplorer());
registerRoute('/fia/:id', (params) => renderProductDetail(params.id, 'fia'));
registerRoute('/glwb', () => renderGLWBExplorer());
registerRoute('/glwb/:id', (params) => renderProductDetail(params.id, 'glwb'));
registerRoute('/iul', () => renderIULExplorer());
registerRoute('/iul/:id', (params) => renderProductDetail(params.id, 'iul'));
registerRoute('/rila', () => renderRILAExplorer());
registerRoute('/rila/:id', (params) => renderRILADetail(params.id));
registerRoute('/va', () => renderVAExplorer());
registerRoute('/va/:id', (params) => renderVADetail(params.id));
registerRoute('/vul', () => renderVULExplorer());
registerRoute('/vul/:id', (params) => renderVULDetail(params.id));
registerRoute('/funds', () => renderFundExplorer());
registerRoute('/funds/:id', (params) => renderFundDetail(params.id));
registerRoute('/compare', () => renderCompare());
registerRoute('/benchmark', () => renderBenchmark());
registerRoute('/history', () => renderHistory());
registerRoute('/calculator', () => renderCalculator());
registerRoute('/carriers', () => renderCarriers());
registerRoute('/carriers/:id', (params) => renderCarrierProfile(params.id));
registerRoute('/alerts', () => renderRateAlerts());
registerRoute('/reports', () => renderReports());
registerRoute('/watchlist', () => renderWatchlist());
registerRoute('/screener', () => renderScreener());

// ---------------------------------------------------------------------------
// Auth initialization
// ---------------------------------------------------------------------------

async function initAuth(mod) {
  try {
    // Check for existing session
    const { data: { session } } = await mod.getSession();
    if (session?.user) {
      setUser(session.user, session);
      // Load profile for trial/subscription state
      const { getProfile } = await import('./lib/api.js');
      const profile = await getProfile();
      if (profile) setProfile(profile);
    }

    // Listen for auth changes (login, logout, token refresh)
    mod.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user, session);
        const { getProfile } = await import('./lib/api.js');
        const profile = await getProfile();
        if (profile) setProfile(profile);
      } else if (event === 'SIGNED_OUT') {
        setUser(null, null);
        setProfile(null);
        navigate('/landing');
      }
    });
  } catch (err) {
    console.warn('Auth init error:', err.message);
  }
}

// ---------------------------------------------------------------------------
// Global app API
// ---------------------------------------------------------------------------

window.app = {
  navigate,
  addToCompare,
  removeFromCompare,
  clearCompare,
  goToCompare: () => navigate('/compare'),
  signOut: async () => {
    if (window.__supabaseAuth) {
      await window.__supabaseAuth.signOut();
    }
    navigate('/landing');
  },
  openPortal: () => {
    if (window.__stripe) {
      window.__stripe.openCustomerPortal();
    }
  },
  toggleMobileSidebar: () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    sidebar?.classList.toggle('mobile-open');
    overlay?.classList.toggle('hidden');
  }
};

// ---------------------------------------------------------------------------
// Theme
// ---------------------------------------------------------------------------

setTheme(state.theme);
document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

// ---------------------------------------------------------------------------
// Global search
// ---------------------------------------------------------------------------

const searchInput = document.getElementById('global-search');
const searchResults = document.getElementById('search-results');
let searchDebounce = null;

searchInput?.addEventListener('input', (e) => {
  const q = e.target.value.trim();
  if (q.length < 2) { searchResults.classList.add('hidden'); return; }

  // Debounce for async search
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(async () => {
    try {
      const results = await Promise.resolve(searchAll(q));
      if (results.length === 0) {
        searchResults.innerHTML = '<div class="p-4 text-sm text-slate-500">No results found</div>';
      } else {
        const typeLabels = { carrier: 'Carrier', fia: 'FIA', glwb: 'GLWB', iul: 'IUL', rila: 'RILA', va: 'VA', vul: 'VUL', fund: 'Fund' };
        const typeColors = {
          carrier: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
          fia: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
          glwb: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
          iul: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
          rila: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300',
          va: 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300',
          vul: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
          fund: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
        };
        searchResults.innerHTML = results.map(r => `
          <a href="#${r.route}" class="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${typeColors[r.type]}">${typeLabels[r.type]}</span>
            <span class="text-sm">${r.name}</span>
          </a>
        `).join('');
      }
      searchResults.classList.remove('hidden');
    } catch (err) {
      console.error('Search error:', err);
    }
  }, 150);
});

searchInput?.addEventListener('blur', () => {
  setTimeout(() => searchResults?.classList.add('hidden'), 200);
});

searchInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { searchInput.blur(); searchResults?.classList.add('hidden'); }
});

// ---------------------------------------------------------------------------
// Keyboard shortcuts
// ---------------------------------------------------------------------------

const shortcuts = {
  '/': () => searchInput?.focus(),
  'd': () => navigate('/'),
  'f': () => navigate('/fia'),
  'g': () => navigate('/glwb'),
  'i': () => navigate('/iul'),
  'r': () => navigate('/rila'),
  'v': () => navigate('/va'),
  'u': () => navigate('/vul'),
  'n': () => navigate('/funds'),
  'c': () => navigate('/compare'),
  'b': () => navigate('/benchmark'),
  'k': () => navigate('/carriers'),
  's': () => navigate('/screener'),
  'w': () => navigate('/watchlist'),
  'e': () => navigate('/reports'),
  't': () => toggleTheme(),
  '?': () => toggleKeyboardHelp()
};

function toggleKeyboardHelp() {
  let overlay = document.getElementById('keyboard-help-overlay');
  if (overlay) {
    overlay.remove();
    return;
  }
  overlay = document.createElement('div');
  overlay.id = 'keyboard-help-overlay';
  overlay.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  overlay.innerHTML = `
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl max-w-lg w-full mx-4 p-6">
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white">Keyboard Shortcuts</h2>
        <button onclick="document.getElementById('keyboard-help-overlay').remove()" class="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
          <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
        <div class="font-semibold text-slate-500 dark:text-slate-400 col-span-2 mt-2 mb-1 text-xs uppercase tracking-wider">Navigation</div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Dashboard</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">D</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">FIA Explorer</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">F</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">GLWB Explorer</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">G</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">IUL Explorer</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">I</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">RILA Explorer</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">R</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">VA Explorer</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">V</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">VUL Explorer</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">U</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Fund Research</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">N</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Carriers</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">K</kbd></div>
        <div class="font-semibold text-slate-500 dark:text-slate-400 col-span-2 mt-3 mb-1 text-xs uppercase tracking-wider">Tools</div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Search</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">/</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Screener</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">S</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Compare</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">C</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Benchmark</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">B</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Watchlist</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">W</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Reports</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">E</kbd></div>
        <div class="font-semibold text-slate-500 dark:text-slate-400 col-span-2 mt-3 mb-1 text-xs uppercase tracking-wider">Other</div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Toggle Dark Mode</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">T</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">This Help</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">?</kbd></div>
        <div class="flex items-center justify-between"><span class="text-slate-600 dark:text-slate-300">Close/Cancel</span><kbd class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono">Esc</kbd></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

document.addEventListener('keydown', (e) => {
  // Don't trigger shortcuts when typing in inputs
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
    if (e.key === 'Escape') {
      document.activeElement.blur();
      searchResults?.classList.add('hidden');
      document.getElementById('keyboard-help-overlay')?.remove();
    }
    return;
  }

  // Close keyboard help on Escape
  if (e.key === 'Escape') {
    document.getElementById('keyboard-help-overlay')?.remove();
    return;
  }

  const handler = shortcuts[e.key];
  if (handler) {
    e.preventDefault();
    handler();
  }
});

// ---------------------------------------------------------------------------
// User menu dropdown toggle
// ---------------------------------------------------------------------------

document.getElementById('user-menu-btn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('user-dropdown')?.classList.toggle('hidden');
});

document.addEventListener('click', () => {
  document.getElementById('user-dropdown')?.classList.add('hidden');
});

// Manage Subscription link
document.querySelector('a[href="#/account"]')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.app.openPortal();
});

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

// If no Supabase configured, run in "local dev" mode (skip auth guards)
if (!hasSupabase) {
  // In local mode, set a fake user so auth guards don't block
  state.user = { id: 'local', email: 'local@dev', user_metadata: { full_name: 'Local Dev' } };
  state.subscriptionStatus = 'active';
}

updateCompareBar();
initRouter();
