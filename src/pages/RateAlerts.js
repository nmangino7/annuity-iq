// =============================================================================
// AnnuityIQ - Rate Alerts Page
// =============================================================================
// Lets users set up alerts for rate changes on specific products or categories.
// Alerts are stored in localStorage (free tier) or Supabase (paid tier).
// =============================================================================

import { getCarriers, getFIAProducts, getGLWBRiders, getIULProducts } from '../data/index.js';

export function renderRateAlerts() {
  // Load saved alerts from localStorage
  const savedAlerts = JSON.parse(localStorage.getItem('annuityiq-alerts') || '[]');

  // Attach handlers
  window._pageInit = () => {
    initAlertHandlers(savedAlerts);
  };

  const alertRows = savedAlerts.length > 0
    ? savedAlerts.map((alert, i) => `
        <tr class="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
          <td class="py-3 px-4">
            <div class="flex items-center gap-2">
              <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${getTypeColor(alert.type)}">${alert.type.toUpperCase()}</span>
              <span class="text-sm font-medium">${alert.name}</span>
            </div>
          </td>
          <td class="py-3 px-4 text-sm text-slate-600 dark:text-slate-400">${alert.metric}</td>
          <td class="py-3 px-4 text-sm">
            <span class="font-mono">${alert.condition} ${alert.threshold}%</span>
          </td>
          <td class="py-3 px-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium ${alert.active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}">
              <span class="w-1.5 h-1.5 rounded-full ${alert.active ? 'bg-emerald-500' : 'bg-slate-400'}"></span>
              ${alert.active ? 'Active' : 'Paused'}
            </span>
          </td>
          <td class="py-3 px-4 text-sm text-slate-500 dark:text-slate-400">${alert.lastTriggered || 'Never'}</td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-2">
              <button onclick="window._toggleAlert(${i})" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                ${alert.active ? 'Pause' : 'Resume'}
              </button>
              <button onclick="window._deleteAlert(${i})" class="text-xs text-red-500 hover:underline">Delete</button>
            </div>
          </td>
        </tr>
      `).join('')
    : `<tr><td colspan="6" class="py-12 text-center text-slate-500 dark:text-slate-400">
        <div class="flex flex-col items-center gap-3">
          <svg class="w-12 h-12 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <p class="text-sm">No alerts set up yet</p>
          <p class="text-xs">Create your first alert to get notified when rates change</p>
        </div>
       </td></tr>`;

  const html = `
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Rate Alerts</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Get notified when rates change on products you're watching</p>
        </div>
        <button onclick="window._showCreateAlert()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          New Alert
        </button>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active Alerts</p>
          <p class="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-mono">${savedAlerts.filter(a => a.active).length}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Triggered Today</p>
          <p class="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1 font-mono">0</p>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Products Watched</p>
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1 font-mono">${new Set(savedAlerts.map(a => a.productId)).size}</p>
        </div>
      </div>

      <!-- Alerts Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <th class="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Product</th>
                <th class="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Metric</th>
                <th class="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Condition</th>
                <th class="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Status</th>
                <th class="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Last Triggered</th>
                <th class="text-left py-3 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>${alertRows}</tbody>
          </table>
        </div>
      </div>

      <!-- Create Alert Modal (hidden by default) -->
      <div id="alert-modal" class="fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center">
        <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-md mx-4 shadow-2xl">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Create Rate Alert</h2>
            <button onclick="window._hideCreateAlert()" class="text-slate-400 hover:text-slate-600">&times;</button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Product Type</label>
              <select id="alert-type" onchange="window._updateAlertProducts()"
                class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm">
                <option value="fia">Fixed Indexed Annuity (FIA)</option>
                <option value="glwb">Income Rider (GLWB)</option>
                <option value="iul">Indexed Universal Life (IUL)</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Product</label>
              <select id="alert-product"
                class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm">
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Metric to Watch</label>
              <select id="alert-metric"
                class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm">
                <option value="Cap Rate">Cap Rate</option>
                <option value="Participation Rate">Participation Rate</option>
                <option value="Rollup Rate">Rollup Rate</option>
                <option value="Rider Fee">Rider Fee</option>
                <option value="Any Change">Any Change</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Condition</label>
                <select id="alert-condition"
                  class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm">
                  <option value="increases above">Increases Above</option>
                  <option value="decreases below">Decreases Below</option>
                  <option value="changes by">Changes By</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Threshold (%)</label>
                <input id="alert-threshold" type="number" step="0.25" value="5.0"
                  class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm">
              </div>
            </div>
          </div>

          <button onclick="window._saveAlert()" class="w-full mt-6 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Create Alert
          </button>
        </div>
      </div>

      <!-- Recent Rate Changes Feed -->
      <div class="mt-8">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Rate Changes</h2>
        <div class="space-y-3">
          ${generateRecentChanges()}
        </div>
      </div>
    </div>
  `;

  return html;
}

function getTypeColor(type) {
  const colors = {
    fia: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    glwb: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    iul: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
  };
  return colors[type] || '';
}

function generateRecentChanges() {
  // Simulated recent rate changes for the feed
  const changes = [
    { carrier: 'Allianz Life', product: '222+ Annuity', metric: 'S&P 500 Cap Rate', from: '9.25%', to: '9.50%', direction: 'up', date: 'Feb 1, 2026' },
    { carrier: 'Athene', product: 'AccuMax 10', metric: 'Participation Rate', from: '155%', to: '160%', direction: 'up', date: 'Feb 1, 2026' },
    { carrier: 'Pacific Life', product: 'Pacific Index Flex', metric: 'S&P 500 Cap Rate', from: '10.50%', to: '10.25%', direction: 'down', date: 'Jan 28, 2026' },
    { carrier: 'Nationwide', product: 'New Heights 12', metric: 'Premium Bonus', from: '4.0%', to: '5.0%', direction: 'up', date: 'Jan 25, 2026' },
    { carrier: 'Lincoln Financial', product: 'OptiBlend 10', metric: 'S&P 500 Cap Rate', from: '8.75%', to: '9.00%', direction: 'up', date: 'Jan 22, 2026' },
    { carrier: 'North American', product: 'BenefitSolutions', metric: 'Rollup Rate', from: '7.5%', to: '7.0%', direction: 'down', date: 'Jan 20, 2026' },
    { carrier: 'Great American', product: 'American Legend III', metric: 'S&P 500 Cap Rate', from: '9.75%', to: '10.00%', direction: 'up', date: 'Jan 18, 2026' },
    { carrier: 'Securian', product: 'Eclipse Accumulator IUL', metric: 'Illustrated Rate', from: '6.25%', to: '6.50%', direction: 'up', date: 'Jan 15, 2026' }
  ];

  return changes.map(c => `
    <div class="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg ${c.direction === 'up' ? 'bg-emerald-100 dark:bg-emerald-900/50' : 'bg-red-100 dark:bg-red-900/50'} flex items-center justify-center">
          <svg class="w-5 h-5 ${c.direction === 'up' ? 'text-emerald-600' : 'text-red-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${c.direction === 'up' ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'}"/>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-900 dark:text-white">${c.carrier} — ${c.product}</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">${c.metric}: ${c.from} → ${c.to}</p>
        </div>
      </div>
      <span class="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">${c.date}</span>
    </div>
  `).join('');
}

function initAlertHandlers(savedAlerts) {
  const fiaProducts = getFIAProducts();
  const glwbRiders = getGLWBRiders();
  const iulProducts = getIULProducts();

  window._showCreateAlert = () => {
    document.getElementById('alert-modal')?.classList.remove('hidden');
    window._updateAlertProducts();
  };

  window._hideCreateAlert = () => {
    document.getElementById('alert-modal')?.classList.add('hidden');
  };

  window._updateAlertProducts = () => {
    const type = document.getElementById('alert-type')?.value;
    const select = document.getElementById('alert-product');
    if (!select) return;

    let products = [];
    if (type === 'fia') products = fiaProducts;
    else if (type === 'glwb') products = glwbRiders;
    else if (type === 'iul') products = iulProducts;

    select.innerHTML = products.map(p => {
      const carrierName = p.carrier?.shortName || '';
      return `<option value="${p.id}" data-name="${carrierName} ${p.name}">${carrierName} — ${p.name}</option>`;
    }).join('');
  };

  window._saveAlert = () => {
    const type = document.getElementById('alert-type')?.value;
    const productSelect = document.getElementById('alert-product');
    const productId = productSelect?.value;
    const productName = productSelect?.selectedOptions[0]?.dataset?.name || '';
    const metric = document.getElementById('alert-metric')?.value;
    const condition = document.getElementById('alert-condition')?.value;
    const threshold = parseFloat(document.getElementById('alert-threshold')?.value || '0');

    const alert = {
      type,
      productId,
      name: productName,
      metric,
      condition,
      threshold,
      active: true,
      lastTriggered: null,
      createdAt: new Date().toISOString()
    };

    savedAlerts.push(alert);
    localStorage.setItem('annuityiq-alerts', JSON.stringify(savedAlerts));
    window._hideCreateAlert();
    // Re-render the page
    window.location.hash = '/alerts';
  };

  window._toggleAlert = (index) => {
    if (savedAlerts[index]) {
      savedAlerts[index].active = !savedAlerts[index].active;
      localStorage.setItem('annuityiq-alerts', JSON.stringify(savedAlerts));
      window.location.hash = '/alerts';
    }
  };

  window._deleteAlert = (index) => {
    savedAlerts.splice(index, 1);
    localStorage.setItem('annuityiq-alerts', JSON.stringify(savedAlerts));
    window.location.hash = '/alerts';
  };
}
