import { getCarrier, getCarrierProducts } from '../data/index.js';
import { pct, ratingBadge, getTopRate } from '../utils/formatters.js';

export function renderCarrierProfile(id) {
  const carrier = getCarrier(id);
  if (!carrier) return `<div class="text-center py-20"><p class="text-xl">Carrier not found</p><a href="#/carriers" class="text-blue-600 hover:underline mt-4 inline-block">Back to Directory</a></div>`;

  const products = getCarrierProducts(id);
  const totalProducts = products.fia.length + products.glwb.length + products.iul.length + (products.rila?.length || 0) + (products.va?.length || 0) + (products.vul?.length || 0);

  return `
    <div class="space-y-6 max-w-5xl">
      <div class="flex items-center gap-2 text-sm text-slate-500">
        <a href="#/carriers" class="hover:text-blue-600">Carriers</a><span>/</span>
        <span class="text-slate-700 dark:text-slate-300">${carrier.shortName}</span>
      </div>

      <!-- Header Card -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <div class="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 class="text-2xl font-bold">${carrier.shortName}</h1>
            <p class="text-slate-500 text-sm mt-1">${carrier.name}</p>
          </div>
          <div class="text-right text-sm text-slate-500">
            <p>${carrier.headquarters}</p>
            <p>Founded ${carrier.foundedYear} (${carrier.yearsInBusiness} years)</p>
            ${carrier.totalAssets ? `<p>Total Assets: ${carrier.totalAssets}</p>` : ''}
          </div>
        </div>

        <!-- Ratings -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p class="text-xs text-slate-400 uppercase mb-2">AM Best</p>
            <div class="text-2xl">${ratingBadge(carrier.ratings?.amBest?.rating)}</div>
            <p class="text-[10px] text-slate-400 mt-1">${carrier.ratings?.amBest?.outlook || ''}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p class="text-xs text-slate-400 uppercase mb-2">S&P</p>
            <div class="text-2xl">${carrier.ratings?.sAndP ? ratingBadge(carrier.ratings.sAndP.rating) : '<span class="text-slate-400 text-sm">Not Rated</span>'}</div>
            <p class="text-[10px] text-slate-400 mt-1">${carrier.ratings?.sAndP?.outlook || ''}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p class="text-xs text-slate-400 uppercase mb-2">Moody's</p>
            <div class="text-2xl">${carrier.ratings?.moodys ? ratingBadge(carrier.ratings.moodys.rating) : '<span class="text-slate-400 text-sm">Not Rated</span>'}</div>
            <p class="text-[10px] text-slate-400 mt-1">${carrier.ratings?.moodys?.outlook || ''}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p class="text-xs text-slate-400 uppercase mb-2">Fitch</p>
            <div class="text-2xl">${carrier.ratings?.fitch ? ratingBadge(carrier.ratings.fitch.rating) : '<span class="text-slate-400 text-sm">Not Rated</span>'}</div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p class="text-xs text-slate-400 uppercase mb-2">COMDEX</p>
            <div class="text-2xl">${carrier.ratings?.comdex ? ratingBadge(carrier.ratings.comdex, 'comdex') : '<span class="text-slate-400 text-sm">N/A</span>'}</div>
            <p class="text-[10px] text-slate-400 mt-1">Composite Score</p>
          </div>
        </div>
      </div>

      <!-- Products -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold">Products (${totalProducts})</h3>
        </div>

        ${products.fia.length > 0 ? `
          <div class="px-5 py-3 bg-blue-50/50 dark:bg-blue-900/10 border-b border-slate-200 dark:border-slate-700">
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Fixed Indexed Annuities (${products.fia.length})</span>
          </div>
          ${products.fia.map(p => `
            <a href="#/fia/${p.id}" class="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div>
                <span class="font-medium text-sm">${p.name}</span>
                <span class="text-xs text-slate-400 ml-2">${p.surrenderPeriod}yr term</span>
              </div>
              <div class="flex items-center gap-4 text-sm">
                <span class="font-mono text-emerald-600 dark:text-emerald-400">${pct(getTopRate(p.indexStrategies))} cap</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        ` : ''}

        ${products.glwb.length > 0 ? `
          <div class="px-5 py-3 bg-green-50/50 dark:bg-green-900/10 border-b border-slate-200 dark:border-slate-700">
            <span class="text-xs font-bold text-green-600 dark:text-green-400 uppercase">Income Riders (${products.glwb.length})</span>
          </div>
          ${products.glwb.map(r => `
            <a href="#/glwb/${r.id}" class="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div>
                <span class="font-medium text-sm">${r.name}</span>
                <span class="text-xs text-slate-400 ml-2">${r.attachedProduct}</span>
              </div>
              <div class="flex items-center gap-4 text-sm">
                <span class="font-mono text-blue-600 dark:text-blue-400">${r.rollUp.rate}% ${r.rollUp.type}</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        ` : ''}

        ${products.iul.length > 0 ? `
          <div class="px-5 py-3 bg-amber-50/50 dark:bg-amber-900/10 border-b border-slate-200 dark:border-slate-700">
            <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">Indexed Universal Life (${products.iul.length})</span>
          </div>
          ${products.iul.map(p => `
            <a href="#/iul/${p.id}" class="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div>
                <span class="font-medium text-sm">${p.name}</span>
              </div>
              <div class="flex items-center gap-4 text-sm">
                <span class="font-mono text-amber-600 dark:text-amber-400">${pct(getTopRate(p.indexAccounts))} cap</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        ` : ''}

        ${(products.rila?.length || 0) > 0 ? `
          <div class="px-5 py-3 bg-rose-50/50 dark:bg-rose-900/10 border-b border-slate-200 dark:border-slate-700">
            <span class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase">RILAs — Buffer Annuities (${products.rila.length})</span>
          </div>
          ${products.rila.map(p => `
            <a href="#/rila/${p.id}" class="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div>
                <span class="font-medium text-sm">${p.name}</span>
                ${p.term ? `<span class="text-xs text-slate-400 ml-2">${p.term}yr term</span>` : ''}
              </div>
              <div class="flex items-center gap-4 text-sm">
                <span class="font-mono text-rose-600 dark:text-rose-400">${p.accountOptions?.length || 0} strategies</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        ` : ''}

        ${(products.va?.length || 0) > 0 ? `
          <div class="px-5 py-3 bg-violet-50/50 dark:bg-violet-900/10 border-b border-slate-200 dark:border-slate-700">
            <span class="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase">Variable Annuities (${products.va.length})</span>
          </div>
          ${products.va.map(p => `
            <a href="#/va/${p.id}" class="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div>
                <span class="font-medium text-sm">${p.name}</span>
                <span class="text-xs text-slate-400 ml-2">${p.contractType || ''}</span>
              </div>
              <div class="flex items-center gap-4 text-sm">
                <span class="font-mono text-violet-600 dark:text-violet-400">${p.subaccountCount || 0} funds</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        ` : ''}

        ${(products.vul?.length || 0) > 0 ? `
          <div class="px-5 py-3 bg-teal-50/50 dark:bg-teal-900/10 border-b border-slate-200 dark:border-slate-700">
            <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase">Variable Universal Life (${products.vul.length})</span>
          </div>
          ${products.vul.map(p => `
            <a href="#/vul/${p.id}" class="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div>
                <span class="font-medium text-sm">${p.name}</span>
                <span class="text-xs text-slate-400 ml-2">${p.policyType || ''}</span>
              </div>
              <div class="flex items-center gap-4 text-sm">
                <span class="font-mono text-teal-600 dark:text-teal-400">${p.subaccountCount || 0} funds</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        ` : ''}

        ${totalProducts === 0 ? '<div class="px-5 py-8 text-center text-slate-400">No products found for this carrier</div>' : ''}
      </div>
    </div>
  `;
}
