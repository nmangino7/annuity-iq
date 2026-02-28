import { getProduct, getBenchmarks } from '../data/index.js';
import { pct, ratingBadge, currency, benchmarkGauge, getTopRate, getTopParticipation, verifyBadge, verifyBanner, statusBadge, statusBanner } from '../utils/formatters.js';

export function renderProductDetail(id, type) {
  const product = getProduct(id);
  if (!product) return `<div class="text-center py-20"><p class="text-xl">Product not found</p><a href="#/${type || 'fia'}" class="text-blue-600 hover:underline mt-4 inline-block">Back to list</a></div>`;

  const bm = getBenchmarks()[product.type] || {};
  const carrier = product.carrier;
  const backRoute = product.type === 'glwb' ? '/glwb' : product.type === 'iul' ? '/iul' : product.type === 'rila' ? '/rila' : '/fia';
  const typeLabel = product.type === 'fia' ? 'Fixed Indexed Annuity' : product.type === 'glwb' ? 'Income Rider (GLWB)' : product.type === 'rila' ? 'RILA (Buffer Annuity)' : 'Indexed Universal Life';

  let detailHTML = '';

  if (product.type === 'fia') {
    const topCap = getTopRate(product.indexStrategies) || 0;
    const topPart = getTopParticipation(product.indexStrategies) || 0;

    detailHTML = `
      <!-- Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Top Cap Rate</p>
          <p class="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">${pct(topCap)}</p>
          ${bm.sp500CapRate ? benchmarkGauge(topCap, bm.sp500CapRate.min, bm.sp500CapRate.max, 'vs Market') : ''}
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Top Participation</p>
          <p class="text-2xl font-bold font-mono mt-1">${pct(topPart, 0)}</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Surrender Period</p>
          <p class="text-2xl font-bold font-mono mt-1">${product.surrenderPeriod} years</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Premium Bonus</p>
          <p class="text-2xl font-bold font-mono mt-1">${product.premiumBonus > 0 ? pct(product.premiumBonus, 0) : 'None'}</p>
        </div>
      </div>

      <!-- Index Strategies -->
      <div class="mt-6">
        <h3 class="font-semibold mb-3">Index Strategies</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
              <th class="text-left px-4 py-2.5 font-medium text-slate-500">Index</th>
              <th class="text-left px-4 py-2.5 font-medium text-slate-500">Crediting Method</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Cap Rate</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Participation</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Spread</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Floor</th>
            </tr></thead>
            <tbody>
              ${product.indexStrategies.map(s => `
                <tr class="border-t border-slate-100 dark:border-slate-700">
                  <td class="px-4 py-2.5 font-medium">${s.indexName}</td>
                  <td class="px-4 py-2.5 text-slate-500">${s.creditingMethod}</td>
                  <td class="px-4 py-2.5 text-right font-mono font-semibold">${s.isUncapped ? '<span class="text-blue-600">Uncapped</span>' : pct(s.capRate)}</td>
                  <td class="px-4 py-2.5 text-right font-mono">${pct(s.participationRate, 0)}</td>
                  <td class="px-4 py-2.5 text-right font-mono">${s.spread > 0 ? pct(s.spread) : '-'}</td>
                  <td class="px-4 py-2.5 text-right font-mono">${pct(s.floor)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Surrender Schedule -->
      <div class="mt-6">
        <h3 class="font-semibold mb-3">Surrender Schedule</h3>
        <div class="flex items-end gap-1 h-24">
          ${(product.surrenderSchedule || []).map((val, i) => `
            <div class="flex-1 flex flex-col items-center gap-1">
              <span class="text-[10px] font-mono text-slate-500">${val}%</span>
              <div class="w-full rounded-t" style="height: ${val * 2.2}px; background: ${val > 0 ? (val >= 8 ? '#ef4444' : val >= 5 ? '#f59e0b' : '#10b981') : '#e2e8f0'}"></div>
              <span class="text-[10px] text-slate-400">Y${i + 1}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Details Grid -->
      <div class="mt-6 grid grid-cols-2 gap-4">
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-slate-500">Minimum Premium</span><span class="font-mono">${currency(product.minimumPremium)}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Max Issue Age</span><span class="font-mono">${product.maximumIssueAge}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Guaranteed Minimum</span><span class="font-mono">${pct(product.guaranteedMinimumRate)}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Free Withdrawal</span><span class="font-mono">${product.freeWithdrawalPercent}%</span></div>
        </div>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-slate-500">Income Rider</span><span>${product.incomeRiderAvailable ? '<span class="text-emerald-600 font-medium">Available</span>' : 'Not Available'}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Last Rate Update</span><span class="font-mono text-xs">${product.lastRateUpdate}</span></div>
        </div>
      </div>
    `;
  } else if (product.type === 'glwb') {
    detailHTML = `
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Rollup Rate</p>
          <p class="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400 mt-1">${product.rollUp.rate}%</p>
          <p class="text-xs text-slate-400">${product.rollUp.type} / ${product.rollUp.maxYears}yr max</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">WD Rate @65</p>
          <p class="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">${pct(product.withdrawalRates.single['65-69'])}</p>
          ${bm.withdrawalRate65 ? benchmarkGauge(product.withdrawalRates.single['65-69'], bm.withdrawalRate65.min, bm.withdrawalRate65.max, 'vs Market') : ''}
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Rider Fee</p>
          <p class="text-2xl font-bold font-mono mt-1">${pct(product.riderFee)}</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Attached Product</p>
          <p class="text-lg font-semibold mt-1">${product.attachedProduct}</p>
        </div>
      </div>

      <!-- Withdrawal Rates -->
      <div class="mt-6">
        <h3 class="font-semibold mb-3">Withdrawal Rate Schedule</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
              <th class="text-left px-4 py-2.5 font-medium text-slate-500">Age Band</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Single Life</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Joint Life</th>
            </tr></thead>
            <tbody>
              ${Object.keys(product.withdrawalRates.single).map(band => `
                <tr class="border-t border-slate-100 dark:border-slate-700 ${band === '65-69' ? 'bg-blue-50 dark:bg-blue-900/20' : ''}">
                  <td class="px-4 py-2.5 font-medium">${band}</td>
                  <td class="px-4 py-2.5 text-right font-mono font-semibold">${pct(product.withdrawalRates.single[band])}</td>
                  <td class="px-4 py-2.5 text-right font-mono">${pct(product.withdrawalRates.joint[band])}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Features -->
      <div class="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div class="space-y-2">
          <div class="flex justify-between"><span class="text-slate-500">Step-Up</span><span>${product.stepUpAvailable ? '<span class="text-emerald-600 font-medium">Available</span>' : 'No'}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">RMD Friendly</span><span>${product.rmdFriendly ? '<span class="text-emerald-600 font-medium">Yes</span>' : 'No'}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Min Premium</span><span class="font-mono">${currency(product.minimumPremium)}</span></div>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between"><span class="text-slate-500">Nursing Home</span><span>${product.nursingHomeBenefit ? '<span class="text-emerald-600 font-medium">' + product.nursingHomeMultiplier + 'x Doubler</span>' : 'No'}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Max Issue Age</span><span class="font-mono">${product.maximumIssueAge}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Last Update</span><span class="font-mono text-xs">${product.lastRateUpdate}</span></div>
        </div>
      </div>
    `;
  } else if (product.type === 'iul') {
    const topCap = getTopRate(product.indexAccounts) || 0;
    const topPart = getTopParticipation(product.indexAccounts) || 0;

    detailHTML = `
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Top Cap Rate</p>
          <p class="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">${pct(topCap)}</p>
          ${bm.sp500CapRate ? benchmarkGauge(topCap, bm.sp500CapRate.min, bm.sp500CapRate.max, 'vs Market') : ''}
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">AG 49-B Illustrated</p>
          <p class="text-2xl font-bold font-mono mt-1">${pct(product.maxIllustratedRate)}</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">Fixed Account</p>
          <p class="text-2xl font-bold font-mono mt-1">${pct(product.fixedAccountRate)}</p>
        </div>
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <p class="text-xs text-slate-500 uppercase">No-Lapse Guarantee</p>
          <p class="text-lg font-semibold mt-1">${product.noLapseGuarantee || 'None'}</p>
        </div>
      </div>

      <!-- Index Accounts -->
      <div class="mt-6">
        <h3 class="font-semibold mb-3">Index Accounts</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
              <th class="text-left px-4 py-2.5 font-medium text-slate-500">Index</th>
              <th class="text-left px-4 py-2.5 font-medium text-slate-500">Method</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Cap</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Participation</th>
              <th class="text-right px-4 py-2.5 font-medium text-slate-500">Floor</th>
              <th class="text-center px-4 py-2.5 font-medium text-slate-500">Multiplier</th>
            </tr></thead>
            <tbody>
              ${product.indexAccounts.map(a => `
                <tr class="border-t border-slate-100 dark:border-slate-700">
                  <td class="px-4 py-2.5 font-medium">${a.indexName}</td>
                  <td class="px-4 py-2.5 text-slate-500">${a.creditingMethod}</td>
                  <td class="px-4 py-2.5 text-right font-mono font-semibold">${a.isUncapped ? '<span class="text-blue-600">Uncapped</span>' : pct(a.capRate)}</td>
                  <td class="px-4 py-2.5 text-right font-mono">${pct(a.participationRate, 0)}</td>
                  <td class="px-4 py-2.5 text-right font-mono">${pct(a.floor)}</td>
                  <td class="px-4 py-2.5 text-center font-mono">${a.hasMultiplier ? a.multiplierValue + 'x' : '-'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Loan & Features -->
      <div class="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div class="space-y-2">
          <div class="flex justify-between"><span class="text-slate-500">Fixed Loan Rate</span><span class="font-mono">${pct(product.loanProvisions?.fixedLoanRate)}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Variable Loan</span><span>${product.loanProvisions?.variableLoanAvailable ? '<span class="text-emerald-600">Available</span>' : 'No'}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Zero-Net-Cost Loan</span><span>${product.loanProvisions?.zeroNetCostLoanAvailable ? '<span class="text-emerald-600 font-medium">Yes</span>' : 'No'}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Min Face Amount</span><span class="font-mono">${currency(product.minimumFaceAmount)}</span></div>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between"><span class="text-slate-500">Death Benefit</span><span>${(product.deathBenefitOptions || []).join(', ')}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Riders</span><span class="text-xs">${(product.riders || []).join(', ')}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Max Issue Age</span><span class="font-mono">${product.maximumIssueAge}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Last Update</span><span class="font-mono text-xs">${product.lastRateUpdate}</span></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="space-y-4 max-w-5xl">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-slate-500">
        <a href="#${backRoute}" class="hover:text-blue-600 transition-colors">${typeLabel}s</a>
        <span>/</span>
        <span class="text-slate-700 dark:text-slate-300">${product.name}</span>
      </div>

      <!-- Header -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <div class="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div class="flex items-center gap-3">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase ${product.type === 'fia' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : product.type === 'glwb' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'}">${product.type}</span>
              <h1 class="text-2xl font-bold">${product.name}</h1>
            </div>
            <div class="flex items-center gap-4 mt-2">
              <a href="#/carriers/${carrier?.id || ''}" class="text-slate-500 hover:text-blue-600 transition-colors">${carrier?.shortName || 'Unknown Carrier'}</a>
              ${carrier ? `
                <span class="flex items-center gap-1.5">
                  ${ratingBadge(carrier.ratings?.amBest?.rating)}
                  ${carrier.ratings?.comdex ? ratingBadge(carrier.ratings.comdex, 'comdex') : ''}
                </span>
              ` : ''}
            </div>
          </div>
          <button onclick="window.app.addToCompare({id:'${product.id}',name:'${product.name}',type:'${product.type}'})"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
            + Add to Compare
          </button>
        </div>

        ${product.highlights ? `
          <div class="flex flex-wrap gap-2 mt-4">
            ${product.highlights.map(h => `<span class="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-300">${h}</span>`).join('')}
          </div>
        ` : ''}

        ${product.sourceUrl ? `
          <div class="mt-4">
            <a href="${product.sourceUrl}" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              View Official Carrier Rate Sheet
            </a>
          </div>
        ` : ''}

        <div class="mt-4">${verifyBanner(product)}</div>
        <div class="mt-2">${statusBanner(product)}</div>

        ${detailHTML}
      </div>
    </div>
  `;
}
