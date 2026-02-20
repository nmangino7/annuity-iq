import { getProduct } from '../data/index.js';
import { pct, ratingBadge, getTopRate, getTopParticipation, currency } from '../utils/formatters.js';
import { state } from '../state.js';

export function renderCompare() {
  const items = state.compareItems.map(i => getProduct(i.id)).filter(Boolean);

  if (items.length === 0) {
    return `
      <div class="text-center py-20">
        <svg class="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
        <h2 class="text-xl font-semibold mb-2">No Products Selected</h2>
        <p class="text-slate-500 mb-6">Select up to 4 products from any category to compare side-by-side.</p>
        <div class="flex justify-center gap-3 flex-wrap">
          <a href="#/fia" class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">Browse FIAs</a>
          <a href="#/glwb" class="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700">Browse GLWBs</a>
          <a href="#/iul" class="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm hover:bg-amber-700">Browse IULs</a>
          <a href="#/rila" class="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm hover:bg-rose-700">Browse RILAs</a>
          <a href="#/va" class="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm hover:bg-violet-700">Browse VAs</a>
          <a href="#/vul" class="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700">Browse VULs</a>
        </div>
      </div>
    `;
  }

  const colWidth = items.length <= 2 ? 'w-1/2' : items.length === 3 ? 'w-1/3' : 'w-1/4';
  const typeColors = { fia: 'text-blue-600', glwb: 'text-emerald-600', iul: 'text-amber-600', rila: 'text-rose-600', va: 'text-violet-600', vul: 'text-teal-600' };

  function row(label, values, highlight = false) {
    const best = values.filter(v => v != null && v !== '-' && v !== 'N/A');
    const numBest = best.filter(v => typeof v === 'number');
    const maxVal = numBest.length ? Math.max(...numBest) : null;

    return `
      <tr class="${highlight ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''} border-t border-slate-100 dark:border-slate-700">
        <td class="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">${label}</td>
        ${values.map(v => {
          const isMax = typeof v === 'number' && v === maxVal && numBest.length > 1;
          return `<td class="px-4 py-3 text-sm font-mono text-center ${isMax ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}">${v ?? '-'}</td>`;
        }).join('')}
      </tr>
    `;
  }

  // Build comparison rows based on what types we have
  let rows = '';

  // Common rows
  rows += row('Carrier', items.map(i => i.carrier?.shortName || ''));
  rows += row('AM Best', items.map(i => i.carrier?.ratings?.amBest?.rating || 'N/R'));
  rows += row('COMDEX', items.map(i => i.carrier?.ratings?.comdex || 'N/R'), true);
  rows += row('Type', items.map(i => `<span class="${typeColors[i.type]}">${i.type.toUpperCase()}</span>`));

  // FIA-specific rows
  if (items.some(i => i.type === 'fia')) {
    rows += `<tr class="bg-slate-50 dark:bg-slate-700/30"><td colspan="${items.length + 1}" class="px-4 py-2 text-xs font-bold text-slate-400 uppercase">FIA Details</td></tr>`;
    rows += row('Top Cap Rate', items.map(i => i.type === 'fia' ? pct(getTopRate(i.indexStrategies)) : '-'), true);
    rows += row('Top Participation', items.map(i => i.type === 'fia' ? pct(getTopParticipation(i.indexStrategies), 0) : '-'));
    rows += row('Surrender Period', items.map(i => i.type === 'fia' ? i.surrenderPeriod + ' yr' : '-'));
    rows += row('Premium Bonus', items.map(i => i.type === 'fia' ? (i.premiumBonus > 0 ? pct(i.premiumBonus, 0) : 'None') : '-'));
    rows += row('Guaranteed Min', items.map(i => i.type === 'fia' ? pct(i.guaranteedMinimumRate) : '-'));
    rows += row('Min Premium', items.map(i => i.type === 'fia' ? currency(i.minimumPremium) : '-'));
    rows += row('Income Rider', items.map(i => i.type === 'fia' ? (i.incomeRiderAvailable ? 'Yes' : 'No') : '-'));
    rows += row('Free Withdrawal', items.map(i => i.type === 'fia' ? i.freeWithdrawalPercent + '%' : '-'));
  }

  // GLWB-specific rows
  if (items.some(i => i.type === 'glwb')) {
    rows += `<tr class="bg-slate-50 dark:bg-slate-700/30"><td colspan="${items.length + 1}" class="px-4 py-2 text-xs font-bold text-slate-400 uppercase">GLWB Details</td></tr>`;
    rows += row('Rollup Rate', items.map(i => i.type === 'glwb' ? i.rollUp.rate + '% ' + i.rollUp.type : '-'), true);
    rows += row('Rollup Max Years', items.map(i => i.type === 'glwb' ? i.rollUp.maxYears + ' yr' : '-'));
    rows += row('WD @60-64', items.map(i => i.type === 'glwb' ? pct(i.withdrawalRates.single['60-64']) : '-'));
    rows += row('WD @65-69', items.map(i => i.type === 'glwb' ? pct(i.withdrawalRates.single['65-69']) : '-'), true);
    rows += row('WD @70-74', items.map(i => i.type === 'glwb' ? pct(i.withdrawalRates.single['70-74']) : '-'));
    rows += row('WD @75-79', items.map(i => i.type === 'glwb' ? pct(i.withdrawalRates.single['75-79']) : '-'));
    rows += row('WD @80+', items.map(i => i.type === 'glwb' ? pct(i.withdrawalRates.single['80+']) : '-'));
    rows += row('Rider Fee', items.map(i => i.type === 'glwb' ? pct(i.riderFee) : '-'));
    rows += row('Step-Up', items.map(i => i.type === 'glwb' ? (i.stepUpAvailable ? 'Yes' : 'No') : '-'));
    rows += row('NH Benefit', items.map(i => i.type === 'glwb' ? (i.nursingHomeBenefit ? i.nursingHomeMultiplier + 'x' : 'No') : '-'));
    rows += row('RMD Friendly', items.map(i => i.type === 'glwb' ? (i.rmdFriendly ? 'Yes' : 'No') : '-'));
  }

  // IUL-specific rows
  if (items.some(i => i.type === 'iul')) {
    rows += `<tr class="bg-slate-50 dark:bg-slate-700/30"><td colspan="${items.length + 1}" class="px-4 py-2 text-xs font-bold text-slate-400 uppercase">IUL Details</td></tr>`;
    rows += row('Top Cap Rate', items.map(i => i.type === 'iul' ? pct(getTopRate(i.indexAccounts)) : '-'), true);
    rows += row('Top Participation', items.map(i => i.type === 'iul' ? pct(getTopParticipation(i.indexAccounts), 0) : '-'));
    rows += row('AG 49-B Illustrated', items.map(i => i.type === 'iul' ? pct(i.maxIllustratedRate) : '-'));
    rows += row('Fixed Account', items.map(i => i.type === 'iul' ? pct(i.fixedAccountRate) : '-'));
    rows += row('Zero-Cost Loan', items.map(i => i.type === 'iul' ? (i.loanProvisions?.zeroNetCostLoanAvailable ? 'Yes' : 'No') : '-'));
    rows += row('No-Lapse', items.map(i => i.type === 'iul' ? (i.noLapseGuarantee || 'None') : '-'));
  }

  // RILA-specific rows
  if (items.some(i => i.type === 'rila')) {
    const getTopRilaCap = (p) => {
      if (!p.accountOptions?.length) return null;
      const caps = p.accountOptions.filter(o => o.capRate).map(o => o.capRate);
      return caps.length ? Math.max(...caps) : null;
    };
    const getTopRilaParticipation = (p) => {
      if (!p.accountOptions?.length) return null;
      const parts = p.accountOptions.filter(o => o.participationRate).map(o => o.participationRate);
      return parts.length ? Math.max(...parts) : null;
    };
    const getMaxBuffer = (p) => {
      if (!p.accountOptions?.length) return null;
      const buffers = p.accountOptions.filter(o => o.bufferLevel).map(o => o.bufferLevel);
      return buffers.length ? Math.max(...buffers) : null;
    };
    const getBufferTypes = (p) => {
      if (!p.accountOptions?.length) return '-';
      const types = [...new Set(p.accountOptions.map(o => o.bufferType).filter(Boolean))];
      return types.join(', ') || '-';
    };
    const hasUncapped = (p) => p.accountOptions?.some(o => o.isUncapped);

    rows += `<tr class="bg-slate-50 dark:bg-slate-700/30"><td colspan="${items.length + 1}" class="px-4 py-2 text-xs font-bold text-slate-400 uppercase">RILA (Buffer Annuity) Details</td></tr>`;
    rows += row('Term', items.map(i => i.type === 'rila' ? (i.term ? i.term + ' yr' : '-') : '-'));
    rows += row('Top Cap Rate', items.map(i => i.type === 'rila' ? pct(getTopRilaCap(i)) : '-'), true);
    rows += row('Top Participation', items.map(i => i.type === 'rila' ? pct(getTopRilaParticipation(i), 0) : '-'));
    rows += row('Max Buffer', items.map(i => i.type === 'rila' ? (getMaxBuffer(i) ? getMaxBuffer(i) + '%' : '-') : '-'));
    rows += row('Buffer Types', items.map(i => i.type === 'rila' ? getBufferTypes(i) : '-'));
    rows += row('Uncapped Options', items.map(i => i.type === 'rila' ? (hasUncapped(i) ? '<span class="text-emerald-600 font-semibold">Yes</span>' : 'No') : '-'));
    rows += row('# Strategies', items.map(i => i.type === 'rila' ? (i.accountOptions?.length || 0) : '-'));
    rows += row('Min Premium', items.map(i => i.type === 'rila' ? currency(i.minimumPremium) : '-'));
    rows += row('Max Issue Age', items.map(i => i.type === 'rila' ? (i.maximumIssueAge || '-') : '-'));
    rows += row('Death Benefit', items.map(i => i.type === 'rila' ? (i.deathBenefit || '-') : '-'));
  }

  // VA-specific rows
  if (items.some(i => i.type === 'va')) {
    rows += `<tr class="bg-slate-50 dark:bg-slate-700/30"><td colspan="${items.length + 1}" class="px-4 py-2 text-xs font-bold text-slate-400 uppercase">Variable Annuity Details</td></tr>`;
    rows += row('Contract Type', items.map(i => i.type === 'va' ? (i.contractType || '-') : '-'));
    rows += row('M&E Charge', items.map(i => i.type === 'va' ? pct(i.meCharge) : '-'));
    rows += row('Total Annual Charge', items.map(i => i.type === 'va' ? pct(i.totalAnnualCharge) : '-'), true);
    rows += row('Subaccount Count', items.map(i => i.type === 'va' ? (i.subaccountCount || '-') : '-'));
    rows += row('Surrender Period', items.map(i => i.type === 'va' ? (i.surrenderPeriod ? i.surrenderPeriod + ' yr' : '-') : '-'));
    rows += row('Min Premium', items.map(i => i.type === 'va' ? currency(i.minimumPremium) : '-'));
    rows += row('Free Withdrawal', items.map(i => i.type === 'va' ? (i.freeWithdrawalPercent ? i.freeWithdrawalPercent + '%' : '-') : '-'));
    rows += row('RMD Friendly', items.map(i => i.type === 'va' ? (i.rmdFriendly ? 'Yes' : 'No') : '-'));
  }

  // VUL-specific rows
  if (items.some(i => i.type === 'vul')) {
    rows += `<tr class="bg-slate-50 dark:bg-slate-700/30"><td colspan="${items.length + 1}" class="px-4 py-2 text-xs font-bold text-slate-400 uppercase">VUL Details</td></tr>`;
    rows += row('Policy Type', items.map(i => i.type === 'vul' ? (i.policyType || '-') : '-'));
    rows += row('M&E Charge', items.map(i => i.type === 'vul' ? pct(i.meCharge) : '-'));
    rows += row('Fixed Account Rate', items.map(i => i.type === 'vul' ? pct(i.fixedAccountRate) : '-'), true);
    rows += row('Subaccount Count', items.map(i => i.type === 'vul' ? (i.subaccountCount || '-') : '-'));
    rows += row('No-Lapse Guarantee', items.map(i => i.type === 'vul' ? (i.noLapseGuarantee || 'None') : '-'));
    rows += row('Zero-Net Loan', items.map(i => i.type === 'vul' ? (i.loanProvisions?.zeroNetCostLoanAvailable ? 'Yes' : 'No') : '-'));
    rows += row('Min Face Amount', items.map(i => i.type === 'vul' ? currency(i.minimumFaceAmount) : '-'));
    rows += row('Surrender Period', items.map(i => i.type === 'vul' ? (i.surrenderPeriod ? i.surrenderPeriod + ' yr' : '-') : '-'));
  }

  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Side-by-Side Comparison</h1>
          <p class="text-slate-500 text-sm mt-1">Comparing ${items.length} product${items.length > 1 ? 's' : ''}</p>
        </div>
        <button onclick="window.print()" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
          Print Report
        </button>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="px-4 py-4 text-left font-medium text-slate-500 w-48"></th>
                ${items.map(i => `
                  <th class="px-4 py-4 text-center">
                    <div class="font-semibold text-slate-800 dark:text-slate-200">${i.name}</div>
                    <div class="text-xs text-slate-400 mt-0.5">${i.carrier?.shortName || ''}</div>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>

      <div class="text-xs text-slate-400 text-center py-2">
        Green highlighted values indicate the best rate in each comparison row. For informational purposes only.
      </div>
    </div>
  `;
}
