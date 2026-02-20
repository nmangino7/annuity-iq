import { state } from './state.js';

const routes = {};
const publicRoutes = new Set(['/landing', '/login', '/signup', '/pricing']);

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function matchRoute(hash) {
  if (routes[hash]) return { handler: routes[hash], params: {}, path: hash };

  for (const [pattern, handler] of Object.entries(routes)) {
    const patternParts = pattern.split('/');
    const hashParts = hash.split('/');

    if (patternParts.length !== hashParts.length) continue;

    const params = {};
    let matched = true;

    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        params[patternParts[i].slice(1)] = decodeURIComponent(hashParts[i]);
      } else if (patternParts[i] !== hashParts[i]) {
        matched = false;
        break;
      }
    }

    if (matched) return { handler, params, path: pattern };
  }

  return null;
}

function isPublicRoute(path) {
  return publicRoutes.has(path);
}

function showAppShell(show) {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  const compareBar = document.getElementById('compare-bar');
  const trialBanner = document.getElementById('trial-banner-slot');

  if (show) {
    sidebar?.classList.remove('hidden');
    mainContent?.classList.add('lg:ml-64');
    compareBar?.classList.remove('hidden');
  } else {
    sidebar?.classList.add('hidden');
    mainContent?.classList.remove('lg:ml-64');
    compareBar?.classList.add('hidden');
    if (trialBanner) trialBanner.innerHTML = '';
  }
}

export async function handleRoute() {
  const hash = getCurrentRoute();
  state.currentRoute = hash;

  const match = matchRoute(hash);
  const content = document.getElementById('app-content');
  const isPublic = isPublicRoute(hash);

  // Auth guard: if not authenticated and not a public route, redirect to landing
  if (!isPublic && !state.user) {
    showAppShell(false);
    navigate('/landing');
    return;
  }

  // Subscription guard: if trial expired and no active subscription, redirect to pricing
  if (!isPublic && state.user && state.subscriptionStatus === 'expired') {
    showAppShell(false);
    navigate('/pricing');
    return;
  }

  // If authenticated and visiting login/signup/landing, redirect to dashboard
  if (state.user && (hash === '/login' || hash === '/signup' || hash === '/landing')) {
    navigate('/');
    return;
  }

  // Show/hide app shell based on route
  showAppShell(!isPublic);

  // Update active nav
  document.querySelectorAll('.nav-item').forEach(el => {
    const route = el.dataset.route;
    if (route === hash || (route !== '/' && hash.startsWith(route))) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  if (match) {
    try {
      const html = await match.handler(match.params);
      content.innerHTML = `<div class="page-enter">${html}</div>`;
      if (window._pageInit) {
        window._pageInit();
        window._pageInit = null;
      }
    } catch (err) {
      console.error('Route error:', err);
      content.innerHTML = `<div class="text-center py-20"><p class="text-red-500">Error loading page</p><p class="text-sm text-slate-500 mt-2">${err.message}</p></div>`;
    }
  } else {
    content.innerHTML = `<div class="text-center py-20"><p class="text-xl font-semibold">Page Not Found</p><p class="text-slate-500 mt-2">The page you're looking for doesn't exist.</p><a href="#/" class="text-blue-600 hover:underline mt-4 inline-block">Go to Dashboard</a></div>`;
  }

  // Close mobile sidebar
  document.getElementById('sidebar')?.classList.remove('mobile-open');
  document.getElementById('mobile-overlay')?.classList.add('hidden');

  window.scrollTo(0, 0);
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
