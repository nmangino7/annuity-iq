// Global application state
export const state = {
  theme: localStorage.getItem('annuityiq-theme') || 'light',
  compareItems: JSON.parse(localStorage.getItem('annuityiq-compare') || '[]'),
  currentRoute: '/',
  searchQuery: '',
  // Auth & subscription state
  user: null,
  session: null,
  profile: null,
  subscriptionStatus: null, // 'trialing', 'active', 'canceled', 'expired'
  trialDaysLeft: null
};

export function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem('annuityiq-theme', theme);
  document.documentElement.className = theme;
}

export function toggleTheme() {
  setTheme(state.theme === 'dark' ? 'light' : 'dark');
}

export function setUser(user, session) {
  state.user = user;
  state.session = session;
  updateUserUI();
}

export function setProfile(profile) {
  state.profile = profile;
  if (profile) {
    state.subscriptionStatus = profile.subscription_status || 'trialing';
    const trialStart = new Date(profile.trial_start);
    const now = new Date();
    const daysSinceTrialStart = Math.floor((now - trialStart) / (1000 * 60 * 60 * 24));
    state.trialDaysLeft = Math.max(0, 7 - daysSinceTrialStart);

    if (state.subscriptionStatus === 'trialing' && state.trialDaysLeft <= 0) {
      state.subscriptionStatus = 'expired';
    }
  } else {
    state.subscriptionStatus = null;
    state.trialDaysLeft = null;
  }
  updateTrialBanner();
}

function updateUserUI() {
  const userMenu = document.getElementById('user-menu');
  const userName = document.getElementById('user-name');
  const userAvatar = document.getElementById('user-avatar');

  if (state.user) {
    userMenu?.classList.remove('hidden');
    const name = state.user.user_metadata?.full_name || state.user.email?.split('@')[0] || 'User';
    if (userName) userName.textContent = name;
    if (userAvatar) userAvatar.textContent = name.charAt(0).toUpperCase();
  } else {
    userMenu?.classList.add('hidden');
  }
}

function updateTrialBanner() {
  const bannerSlot = document.getElementById('trial-banner-slot');
  if (!bannerSlot) return;

  if (state.subscriptionStatus === 'trialing' && state.trialDaysLeft != null && state.trialDaysLeft > 0) {
    const daysText = state.trialDaysLeft === 1 ? '1 day' : `${state.trialDaysLeft} days`;
    bannerSlot.innerHTML = `
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 text-center text-sm flex items-center justify-center gap-3">
        <span>${daysText} left in your free trial</span>
        <button onclick="window.__stripe?.createCheckout()" class="px-3 py-0.5 bg-white/20 hover:bg-white/30 rounded text-xs font-medium transition-colors">Subscribe now &rarr;</button>
      </div>`;
  } else if (state.subscriptionStatus === 'trialing' && state.trialDaysLeft === 0) {
    bannerSlot.innerHTML = `
      <div class="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-center text-sm flex items-center justify-center gap-3">
        <span>Your trial expires today!</span>
        <button onclick="window.__stripe?.createCheckout()" class="px-3 py-0.5 bg-white/20 hover:bg-white/30 rounded text-xs font-medium transition-colors">Subscribe now &rarr;</button>
      </div>`;
  } else {
    bannerSlot.innerHTML = '';
  }
}

export function addToCompare(item) {
  if (state.compareItems.length >= 4) return false;
  if (state.compareItems.find(i => i.id === item.id)) return false;
  state.compareItems.push(item);
  localStorage.setItem('annuityiq-compare', JSON.stringify(state.compareItems));
  updateCompareBar();
  return true;
}

export function removeFromCompare(id) {
  state.compareItems = state.compareItems.filter(i => i.id !== id);
  localStorage.setItem('annuityiq-compare', JSON.stringify(state.compareItems));
  updateCompareBar();
}

export function clearCompare() {
  state.compareItems = [];
  localStorage.setItem('annuityiq-compare', '[]');
  updateCompareBar();
}

export function updateCompareBar() {
  const bar = document.getElementById('compare-bar');
  const items = document.getElementById('compare-items');
  if (!bar || !items) return;

  if (state.compareItems.length > 0) {
    bar.classList.add('visible');
    items.innerHTML = state.compareItems.map(item => `
      <span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
        ${item.name}
        <button onclick="window.app.removeFromCompare('${item.id}')" class="hover:text-red-500 ml-1">&times;</button>
      </span>
    `).join('');
  } else {
    bar.classList.remove('visible');
    items.innerHTML = '';
  }

  document.querySelectorAll('.compare-checkbox').forEach(cb => {
    cb.checked = state.compareItems.some(i => i.id === cb.dataset.id);
  });
}
