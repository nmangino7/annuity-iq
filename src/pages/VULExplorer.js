// =============================================================================
// VULExplorer.js - Variable Universal Life Explorer & Detail View
// =============================================================================

import { getVULProducts, getSubaccounts } from '../data/index.js';
import { pct, ratingBadge, currency, verifyBadge, verifyBanner, statusBadge, statusBanner } from '../utils/formatters.js';
import { state, addToCompare, removeFromCompare } from '../state.js';

let sortKey = 'subaccountCount';
let sortDir = 'desc';
let filters = { policyType: 'all', maxME: 5, noLapse: 'all', minSubaccounts: 0, minRating: 'all' };
let pageSize = 50;
let currentPage = 1;

function getFilteredProducts() {
  let products = getVULProducts().map(p => ({
    ...p,
    amBest: p.carrier?.ratings?.amBest?.rating || 'NR',
    comdex: p.carrier?.ratings?.comdex || 0,
    carrierName: p.carrier?.shortName || ''
  }));

  if (filters.policyType !== 'all') products = products.filter(p => p.policyType === filters.policyType);
  if (filters.maxME < 5) products = products.filter(p => p.meCharge <= filters.maxME);
  if (filters.noLapse === 'yes') products = products.filter(p => p.noLapseGuarantee && p.noLapseGuarantee !== 'None');
  if (filters.noLapse === 'no') products = products.filter(p => !p.noLapseGuarantee || p.noLapseGuarantee === 'None');
  if (filters.minSubaccounts > 0) products = products.filter(p => p.subaccountCount >= filters.minSubaccounts);
  if (filters.minRating !== 'all') {
    const order = ['A++', 'A+', 'A', 'A-', 'B++', 'B+'];
    const minIdx = order.indexOf(filters.minRating);
    products = products.filter(p => { const idx = order.indexOf(p.amBest); return idx >= 0 && idx <= minIdx; });
  }

  products.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'string') { va = va.toLowerCase(); vb = (vb || '').toLowerCase(); }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return products;
}

export function renderVULExplorer() {
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Variable Universal Life <span class="text-base font-normal text-slate-500 dark:text-slate-400">(VUL)</span></h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Compare VUL policies — subaccount options, M&E charges, no-lapse guarantees, and loan provisions</p>
        </div>
        <div class="flex items-center gap-2">
          <a href="#/funds" class="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            Fund Research
          </a>
          <button onclick="document.getElementById('vul-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filters
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="vul-summary-cards"></div>

      <!-- Filters -->
      <div id="vul-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Policy Type</label>
            <select id="vulf-type" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option>
              <option value="Accumulation">Accumulation</option><option value="Protection">Protection</option><option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max M&E Charge</label>
            <select id="vulf-me" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="5">Any</option>
              <option value="0.5">Under 0.50%</option><option value="0.75">Under 0.75%</option><option value="1.0">Under 1.0%</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">No-Lapse Guarantee</label>
            <select id="vulf-nolapse" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="yes">Has NLG</option><option value="no">No NLG</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Subaccounts</label>
            <select id="vulf-subs" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="30">30+</option><option value="50">50+</option><option value="75">75+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min AM Best</label>
            <select id="vulf-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="A++">A++</option><option value="A+">A+ or better</option><option value="A">A or better</option><option value="A-">A- or better</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyVULFilters()" class="mt-3 px-4 py-1.5 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 transition-colors">Apply Filters</button>
      </div>

      <!-- Table or Empty State -->
      <div id="vul-table-container" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="px-3 py-3 w-10"></th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVUL('name')">Product</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVUL('carrierName')">Carrier</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVUL('amBest')">Rating</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVUL('policyType')">Type</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVUL('meCharge')">M&E</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVUL('fixedAccountRate')">Fixed Rate</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVUL('subaccountCount')">Funds <span class="text-[10px]">&#9660;</span></th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">No-Lapse</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">0-Net Loan</th>
              </tr>
            </thead>
            <tbody id="vul-table-body">
            </tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="vul-count"></div>
      </div>
      <div id="vul-empty-state" class="hidden bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="py-16 px-8 text-center">
          <div class="w-16 h-16 mx-auto rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-700 dark:text-slate-200">VUL Products Coming Soon</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">We're actively verifying M&E charges, COI structures, and subaccount data from SEC EDGAR prospectus filings for 20+ carriers. VUL data will be available in the next update.</p>
          <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto">
            <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
              <div class="text-sm font-bold text-teal-600 dark:text-teal-400">Lincoln</div>
              <div class="text-[10px] text-slate-400">VULone</div>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
              <div class="text-sm font-bold text-teal-600 dark:text-teal-400">Equitable</div>
              <div class="text-[10px] text-slate-400">Incentive Life</div>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
              <div class="text-sm font-bold text-teal-600 dark:text-teal-400">Prudential</div>
              <div class="text-[10px] text-slate-400">VUL Protector</div>
            </div>
            <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
              <div class="text-sm font-bold text-teal-600 dark:text-teal-400">Protective</div>
              <div class="text-[10px] text-slate-400">Investors Life</div>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-center gap-4">
            <a href="#/va" class="text-sm text-teal-600 dark:text-teal-400 hover:underline">Explore Variable Annuities</a>
            <span class="text-slate-300 dark:text-slate-600">|</span>
            <a href="#/iul" class="text-sm text-teal-600 dark:text-teal-400 hover:underline">Explore IUL Products</a>
          </div>
        </div>
      </div>
    </div>
  `;

  window._sortVUL = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'name' || key === 'carrierName' || key === 'policyType' ? 'asc' : 'desc'; }
    currentPage = 1;
    renderVULTable();
  };

  window._applyVULFilters = () => {
    filters.policyType = document.getElementById('vulf-type').value;
    filters.maxME = parseFloat(document.getElementById('vulf-me').value);
    filters.noLapse = document.getElementById('vulf-nolapse').value;
    filters.minSubaccounts = parseInt(document.getElementById('vulf-subs').value);
    filters.minRating = document.getElementById('vulf-rating').value;
    currentPage = 1;
    renderVULTable();
  };

  window._loadMoreVUL = () => { currentPage++; renderVULTable(); };
  window._pageInit = () => renderVULTable();

  return html;
}

export function renderVULDetail(id) {
  const products = getVULProducts();
  const p = products.find(x => x.id === id);
  if (!p) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Product not found</h2><a href="#/vul" class="text-teal-500 hover:underline mt-2 inline-block">← Back to VUL Explorer</a></div>`;

  const carrier = p.carrier;
  const allSubs = getSubaccounts();
  const productSubs = (p.subaccountIds || []).map(sid => allSubs.find(s => s.id === sid)).filter(Boolean);

  const typeColors = {
    'Accumulation': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    'Protection': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'Hybrid': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
  };

  return `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex items-start justify-between flex-wrap gap-3">
        <div>
          <a href="#/vul" class="text-sm text-slate-500 hover:text-teal-500 transition-colors">← All VUL Products</a>
          <h1 class="text-2xl font-bold mt-1">${p.name}</h1>
          <p class="text-slate-500 dark:text-slate-400">
            ${carrier ? `<a href="#/carriers/${carrier.id}" class="text-teal-600 dark:text-teal-400 hover:underline">${carrier.shortName}</a>` : 'Unknown Carrier'}
            · <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${typeColors[p.policyType] || 'bg-slate-100 text-slate-700'}">${p.policyType}</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'vul'})" class="px-3 py-1.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-lg text-sm hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Compare
          </button>
        </div>
      </div>

      ${p.sourceUrl ? `
      <div>
        <a href="${p.sourceUrl}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          View Official Carrier Rate Sheet
        </a>
      </div>
      ` : ''}

      ${verifyBanner(p)}
      ${statusBanner(p)}

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-3">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-teal-600 dark:text-teal-400">${pct(p.meCharge)}</div>
          <div class="text-xs text-slate-500 mt-1">M&E Charge</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${p.subaccountCount}</div>
          <div class="text-xs text-slate-500 mt-1">Subaccounts</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${pct(p.fixedAccountRate)}</div>
          <div class="text-xs text-slate-500 mt-1">Fixed Account</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${p.noLapseGuarantee || 'None'}</div>
          <div class="text-xs text-slate-500 mt-1">No-Lapse Guarantee</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${currency(p.minimumFaceAmount)}</div>
          <div class="text-xs text-slate-500 mt-1">Min Face Amount</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${carrier ? ratingBadge(carrier.ratings?.amBest?.rating) : 'N/R'}</div>
          <div class="text-xs text-slate-500 mt-1">AM Best</div>
        </div>
      </div>

      <!-- Details Grid -->
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Policy Details -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Policy Details</h3>
          <dl class="space-y-2 text-sm">
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Policy Type</dt>
              <dd class="font-medium"><span class="px-2 py-0.5 rounded text-xs font-medium ${typeColors[p.policyType] || ''}">${p.policyType}</span></dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">M&E Charge</dt>
              <dd class="font-medium">${pct(p.meCharge)}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Monthly Admin Fee</dt>
              <dd class="font-medium">$${p.adminFeeMonthly?.toFixed(2) || '0.00'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Cost of Insurance</dt>
              <dd class="font-medium">${p.costOfInsurance || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Fixed Account Rate</dt>
              <dd class="font-medium">${pct(p.fixedAccountRate)}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Guaranteed Min Rate</dt>
              <dd class="font-medium">${pct(p.guaranteedMinRate)}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Max Issue Age</dt>
              <dd class="font-medium">${p.maximumIssueAge || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Death Benefit Options</dt>
              <dd class="font-medium">${p.deathBenefitOptions?.join(', ') || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">Target Premium Basis</dt>
              <dd class="font-medium">${p.targetPremiumBasis || 'N/A'}</dd>
            </div>
          </dl>
        </div>

        <!-- Loan & Riders -->
        <div class="space-y-4">
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-lg mb-3">Loan Provisions</h3>
            <dl class="space-y-2 text-sm">
              <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
                <dt class="text-slate-500">Fixed Loan Rate</dt>
                <dd class="font-medium">${p.loanProvisions?.fixedLoanRate ? pct(p.loanProvisions.fixedLoanRate) : 'N/A'}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
                <dt class="text-slate-500">Variable Loan</dt>
                <dd class="font-medium">${p.loanProvisions?.variableLoanAvailable ? '<span class="text-emerald-600">Available</span>' : '<span class="text-slate-400">No</span>'}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
                <dt class="text-slate-500">Zero-Net Cost Loan</dt>
                <dd class="font-medium">${p.loanProvisions?.zeroNetCostLoanAvailable ? '<span class="text-emerald-600">Available</span>' : '<span class="text-slate-400">No</span>'}</dd>
              </div>
              <div class="flex justify-between py-1">
                <dt class="text-slate-500">Preferred Loan After</dt>
                <dd class="font-medium">${p.loanProvisions?.preferredLoanAfterYear ? 'Year ' + p.loanProvisions.preferredLoanAfterYear : 'N/A'}</dd>
              </div>
            </dl>
          </div>

          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-lg mb-3">Available Riders</h3>
            ${p.riders?.length ? `<ul class="space-y-1.5">${p.riders.map(r => `
              <li class="flex items-center gap-2 text-sm">
                <svg class="w-3.5 h-3.5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>${r}</span>
              </li>`).join('')}</ul>` : '<p class="text-sm text-slate-400">No riders listed</p>'}
          </div>
        </div>
      </div>

      <!-- Subaccounts -->
      ${productSubs.length ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold text-lg">Available Subaccounts</h3>
          <p class="text-xs text-slate-500">${productSubs.length} funds linked · <a href="#/funds" class="text-teal-600 dark:text-teal-400 hover:underline">Research all funds →</a></p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2 font-medium text-slate-500">Fund Name</th>
                <th class="text-left px-4 py-2 font-medium text-slate-500">Category</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Expense</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">1Y Return</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">3Y Return</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">5Y Return</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Rating</th>
              </tr>
            </thead>
            <tbody>
              ${productSubs.sort((a, b) => (b.morningstarRating || 0) - (a.morningstarRating || 0)).slice(0, 20).map(s => `
                <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/funds/${s.id}'">
                  <td class="px-4 py-2"><div class="font-medium text-teal-600 dark:text-teal-400">${s.name}</div><div class="text-xs text-slate-400">${s.manager || ''}</div></td>
                  <td class="px-4 py-2 text-xs">${s.category || ''}</td>
                  <td class="px-4 py-2 text-right font-mono">${pct(s.expenseRatio)}</td>
                  <td class="px-4 py-2 text-right font-mono ${(s.oneYearReturn || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}">${s.oneYearReturn != null ? pct(s.oneYearReturn) : '—'}</td>
                  <td class="px-4 py-2 text-right font-mono">${s.threeYearReturn != null ? pct(s.threeYearReturn) : '—'}</td>
                  <td class="px-4 py-2 text-right font-mono">${s.fiveYearReturn != null ? pct(s.fiveYearReturn) : '—'}</td>
                  <td class="px-4 py-2 text-center"><span class="text-amber-500">${'★'.repeat(s.morningstarRating || 0)}</span><span class="text-slate-300">${'★'.repeat(5 - (s.morningstarRating || 0))}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${productSubs.length > 20 ? `<div class="px-4 py-3 border-t text-xs text-slate-400">Showing top 20 of ${productSubs.length}</div>` : ''}
      </div>
      ` : ''}

      <!-- Highlights -->
      ${p.highlights?.length ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-lg mb-3">Highlights</h3>
        <ul class="space-y-2">${p.highlights.map(h => `
          <li class="flex items-start gap-2 text-sm">
            <svg class="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>${h}</span>
          </li>`).join('')}</ul>
      </div>
      ` : ''}

      ${carrier ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-lg mb-3">Carrier: ${carrier.name}</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><span class="text-slate-500">AM Best</span><div class="font-medium mt-0.5">${ratingBadge(carrier.ratings?.amBest?.rating)}</div></div>
          <div><span class="text-slate-500">COMDEX</span><div class="font-medium mt-0.5">${carrier.ratings?.comdex || 'N/A'}</div></div>
          <div><span class="text-slate-500">Total Assets</span><div class="font-medium mt-0.5">${carrier.totalAssets || 'N/A'}</div></div>
          <div><span class="text-slate-500">Founded</span><div class="font-medium mt-0.5">${carrier.foundedYear || 'N/A'}</div></div>
        </div>
        <a href="#/carriers/${carrier.id}" class="inline-block mt-3 text-sm text-teal-600 dark:text-teal-400 hover:underline">View full carrier profile →</a>
      </div>
      ` : ''}
    </div>
  `;
}

function renderVULTable() {
  const allProducts = getVULProducts();
  const products = getFilteredProducts();
  const displayed = products.slice(0, currentPage * pageSize);
  const hasMore = displayed.length < products.length;
  const tbody = document.getElementById('vul-table-body');
  const countEl = document.getElementById('vul-count');
  const summaryEl = document.getElementById('vul-summary-cards');
  const emptyState = document.getElementById('vul-empty-state');
  const tableContainer = document.getElementById('vul-table-container');
  if (!tbody) return;

  // Toggle empty state vs table
  if (allProducts.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (tableContainer) tableContainer.classList.add('hidden');
    return;
  } else {
    if (emptyState) emptyState.classList.add('hidden');
    if (tableContainer) tableContainer.classList.remove('hidden');
  }

  // Summary
  if (summaryEl) {
    const avgME = allProducts.length ? (allProducts.reduce((s, p) => s + (p.meCharge || 0), 0) / allProducts.length) : 0;
    const avgSubs = allProducts.length ? Math.round(allProducts.reduce((s, p) => s + (p.subaccountCount || 0), 0) / allProducts.length) : 0;
    const withNLG = allProducts.filter(p => p.noLapseGuarantee && p.noLapseGuarantee !== 'None').length;
    summaryEl.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-teal-600 dark:text-teal-400">${allProducts.length}</div>
        <div class="text-xs text-slate-500 mt-1">Total VUL Products</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${pct(avgME)}</div>
        <div class="text-xs text-slate-500 mt-1">Avg M&E Charge</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${avgSubs}</div>
        <div class="text-xs text-slate-500 mt-1">Avg Subaccounts</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">${withNLG}</div>
        <div class="text-xs text-slate-500 mt-1">With No-Lapse Guarantee</div>
      </div>
    `;
  }

  const typeColors = {
    'Accumulation': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    'Protection': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    'Hybrid': 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
  };

  tbody.innerHTML = displayed.map(p => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5">
        <input type="checkbox" class="compare-checkbox rounded border-slate-300 dark:border-slate-600" data-id="${p.id}" data-name="${p.name}" data-type="vul"
          ${state.compareItems.find(i => i.id === p.id) ? 'checked' : ''}
          onchange="this.checked ? window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'vul'}) : window.app.removeFromCompare('${p.id}')">
      </td>
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/vul/${p.id}'">
        <div class="font-medium text-teal-600 dark:text-teal-400 hover:underline">${p.name}${verifyBadge(p)}${statusBadge(p)}</div>
      </td>
      <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">${p.carrierName}</td>
      <td class="px-3 py-2.5 text-center">${ratingBadge(p.amBest)}</td>
      <td class="px-3 py-2.5 text-center"><span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${typeColors[p.policyType] || 'bg-slate-100 text-slate-600'}">${p.policyType}</span></td>
      <td class="px-3 py-2.5 text-right font-mono ${p.meCharge <= 0.60 ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''}">${pct(p.meCharge)}</td>
      <td class="px-3 py-2.5 text-right font-mono">${pct(p.fixedAccountRate)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold">${p.subaccountCount}</td>
      <td class="px-3 py-2.5 text-center">${p.noLapseGuarantee && p.noLapseGuarantee !== 'None' ? '<span class="text-emerald-500 font-semibold text-xs">' + p.noLapseGuarantee + '</span>' : '<span class="text-slate-400">—</span>'}</td>
      <td class="px-3 py-2.5 text-center">${p.loanProvisions?.zeroNetCostLoanAvailable ? '<span class="text-emerald-500 font-semibold">✓</span>' : '<span class="text-slate-400">—</span>'}</td>
    </tr>
  `).join('');

  if (countEl) {
    countEl.innerHTML = `Showing ${displayed.length} of ${products.length} VUL products` +
      (hasMore ? ` <button onclick="window._loadMoreVUL()" class="ml-2 text-teal-600 dark:text-teal-400 hover:underline font-medium">Show More</button>` : '');
  }
}
