import { getFIAProducts, getGLWBRiders, getIULProducts, getRILAProducts, getVAProducts, getVULProducts, getSubaccounts, getCarriers, getHistorical } from '../data/index.js';
import { pct, ratingBadge, currency, getTopRate, getTopParticipation } from '../utils/formatters.js';

export function renderDashboard() {
  const fias = getFIAProducts();
  const glwbs = getGLWBRiders();
  const iuls = getIULProducts();
  const rilas = getRILAProducts();
  const vas = getVAProducts();
  const vuls = getVULProducts();
  const funds = getSubaccounts();
  const carriers = getCarriers();
  const historical = getHistorical();

  // Compute stats (filter for annual strategies only to avoid multi-year caps skewing results)
  const annualOnly = s => s.capRate && s.capRate <= 15;
  const topFIACap = Math.max(...fias.flatMap(p => p.indexStrategies.filter(annualOnly).map(s => s.capRate)));
  const topGLWBRollup = Math.max(...glwbs.map(r => r.rollUp.rate));
  const topIULCap = Math.max(...iuls.flatMap(p => p.indexAccounts.filter(annualOnly).map(s => s.capRate)));
  const topComdex = Math.max(...carriers.filter(c => c.ratings.comdex).map(c => c.ratings.comdex));

  // RILA stats
  const rilaTopCap = Math.max(...rilas.flatMap(p => (p.accountOptions || []).filter(o => o.capRate && o.capRate <= 30).map(o => o.capRate)), 0);
  const rilaTopBuffer = Math.max(...rilas.flatMap(p => (p.accountOptions || []).filter(o => o.bufferLevel).map(o => o.bufferLevel)), 0);

  // Top RILA products by cap rate
  const topRILAs = [...rilas].sort((a, b) => {
    const aMax = Math.max(...(a.accountOptions || []).filter(o => o.capRate).map(o => o.capRate), 0);
    const bMax = Math.max(...(b.accountOptions || []).filter(o => o.capRate).map(o => o.capRate), 0);
    return bMax - aMax;
  }).slice(0, 10);

  // Top FIA products by cap rate
  const topFIAs = [...fias].sort((a, b) => {
    const aMax = getTopRate(a.indexStrategies) || 0;
    const bMax = getTopRate(b.indexStrategies) || 0;
    return bMax - aMax;
  }).slice(0, 10);

  // Top GLWB by withdrawal rate at 65
  const topGLWBs = [...glwbs].sort((a, b) => (b.withdrawalRates.single['65-69'] || 0) - (a.withdrawalRates.single['65-69'] || 0)).slice(0, 10);

  // Top IUL by cap rate
  const topIULs = [...iuls].sort((a, b) => {
    const aMax = getTopRate(a.indexAccounts) || 0;
    const bMax = getTopRate(b.indexAccounts) || 0;
    return bMax - aMax;
  }).slice(0, 10);

  // Top carriers by COMDEX
  const topCarriers = [...carriers].filter(c => c.ratings.comdex).sort((a, b) => b.ratings.comdex - a.ratings.comdex).slice(0, 10);

  const html = `
    <div class="space-y-6">
      <!-- Header -->
      <div>
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <p class="text-slate-500 dark:text-slate-400 mt-1">Market overview across ${fias.length + glwbs.length + iuls.length + rilas.length + vas.length + vuls.length} products and ${funds.length} subaccounts</p>
      </div>

      <!-- Hero Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Top FIA Cap</p>
          <p class="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-2 font-mono">${pct(topFIACap)}</p>
          <p class="text-xs text-slate-400 mt-1">S&P 500 Annual P2P</p>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Top GLWB Rollup</p>
          <p class="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2 font-mono">${pct(topGLWBRollup, 1)}</p>
          <p class="text-xs text-slate-400 mt-1">Simple/Compound</p>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Top RILA Cap</p>
          <p class="text-3xl font-bold text-rose-600 dark:text-rose-400 mt-2 font-mono">${pct(rilaTopCap)}</p>
          <p class="text-xs text-slate-400 mt-1">Up to ${rilaTopBuffer}% buffer</p>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Products Tracked</p>
          <p class="text-3xl font-bold text-slate-700 dark:text-slate-200 mt-2 font-mono">${fias.length + glwbs.length + iuls.length + rilas.length + vas.length + vuls.length}</p>
          <p class="text-xs text-slate-400 mt-1">${carriers.length} carriers &bull; ${funds.length} funds</p>
        </div>
      </div>

      <!-- Category Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <a href="#/fia" class="group bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-blue-200 text-sm font-medium">Fixed Indexed Annuities</p>
              <p class="text-2xl font-bold mt-1">${fias.length} Products</p>
              <p class="text-blue-200 text-xs mt-2">Cap rates, participation rates, index strategies</p>
            </div>
            <svg class="w-8 h-8 text-blue-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </a>
        <a href="#/glwb" class="group bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-emerald-200 text-sm font-medium">Income Riders (GLWB)</p>
              <p class="text-2xl font-bold mt-1">${glwbs.length} Riders</p>
              <p class="text-emerald-200 text-xs mt-2">Rollup rates, withdrawal percentages, fees</p>
            </div>
            <svg class="w-8 h-8 text-emerald-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </a>
        <a href="#/iul" class="group bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-amber-200 text-sm font-medium">Indexed Universal Life</p>
              <p class="text-2xl font-bold mt-1">${iuls.length} Products</p>
              <p class="text-amber-200 text-xs mt-2">Cap rates, illustrated rates, loan provisions</p>
            </div>
            <svg class="w-8 h-8 text-amber-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </a>
        <a href="#/rila" class="group bg-gradient-to-br from-rose-600 to-rose-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-rose-200 text-sm font-medium">RILAs (Buffer Annuities)</p>
              <p class="text-2xl font-bold mt-1">${rilas.length} Products</p>
              <p class="text-rose-200 text-xs mt-2">Buffer levels, cap rates, index-linked protection</p>
            </div>
            <svg class="w-8 h-8 text-rose-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </a>
        <a href="#/va" class="group bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-violet-200 text-sm font-medium">Variable Annuities</p>
              <p class="text-2xl font-bold mt-1">${vas.length} Products</p>
              <p class="text-violet-200 text-xs mt-2">M&E charges, living benefits, subaccounts</p>
            </div>
            <svg class="w-8 h-8 text-violet-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </a>
        <a href="#/vul" class="group bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-teal-200 text-sm font-medium">Variable Universal Life</p>
              <p class="text-2xl font-bold mt-1">${vuls.length} Products</p>
              <p class="text-teal-200 text-xs mt-2">COI, loan provisions, death benefits</p>
            </div>
            <svg class="w-8 h-8 text-teal-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </a>
        <a href="#/funds" class="group bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-indigo-200 text-sm font-medium">Fund Research</p>
              <p class="text-2xl font-bold mt-1">${funds.length} Subaccounts</p>
              <p class="text-indigo-200 text-xs mt-2">Performance, holdings, Morningstar ratings</p>
            </div>
            <svg class="w-8 h-8 text-indigo-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </a>
      </div>

      <!-- Top Products Tables -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <!-- Top FIAs -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <h3 class="font-semibold">Top FIA Cap Rates</h3>
            <a href="#/fia" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All &rarr;</a>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">#</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Product</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Rating</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Cap Rate</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Term</th>
              </tr></thead>
              <tbody>
                ${topFIAs.map((p, i) => `
                  <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/fia/${p.id}'">
                    <td class="px-4 py-2.5 text-slate-400 font-mono text-xs">${i + 1}</td>
                    <td class="px-4 py-2.5">
                      <div class="font-medium">${p.name}</div>
                      <div class="text-xs text-slate-500">${p.carrier?.shortName || ''}</div>
                    </td>
                    <td class="px-4 py-2.5">${ratingBadge(p.carrier?.ratings?.amBest?.rating)}</td>
                    <td class="px-4 py-2.5 text-right font-mono font-semibold text-emerald-600 dark:text-emerald-400">${pct(getTopRate(p.indexStrategies))}</td>
                    <td class="px-4 py-2.5 text-right font-mono text-slate-500">${p.surrenderPeriod}yr</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Top GLWB Riders -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <h3 class="font-semibold">Top Income Riders (WD% at 65)</h3>
            <a href="#/glwb" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All &rarr;</a>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">#</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Rider</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Rating</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">WD @65</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Rollup</th>
              </tr></thead>
              <tbody>
                ${topGLWBs.map((r, i) => `
                  <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/glwb/${r.id}'">
                    <td class="px-4 py-2.5 text-slate-400 font-mono text-xs">${i + 1}</td>
                    <td class="px-4 py-2.5">
                      <div class="font-medium">${r.name}</div>
                      <div class="text-xs text-slate-500">${r.carrier?.shortName || ''}</div>
                    </td>
                    <td class="px-4 py-2.5">${ratingBadge(r.carrier?.ratings?.amBest?.rating)}</td>
                    <td class="px-4 py-2.5 text-right font-mono font-semibold text-blue-600 dark:text-blue-400">${pct(r.withdrawalRates.single['65-69'], 2)}</td>
                    <td class="px-4 py-2.5 text-right font-mono text-slate-500">${r.rollUp.rate}% ${r.rollUp.type}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Top IULs + Top RILAs -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <!-- Top IULs -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <h3 class="font-semibold">Top IUL Cap Rates</h3>
            <a href="#/iul" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All &rarr;</a>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">#</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Product</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Rating</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Cap Rate</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Illustrated</th>
              </tr></thead>
              <tbody>
                ${topIULs.map((p, i) => `
                  <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/iul/${p.id}'">
                    <td class="px-4 py-2.5 text-slate-400 font-mono text-xs">${i + 1}</td>
                    <td class="px-4 py-2.5">
                      <div class="font-medium">${p.name}</div>
                      <div class="text-xs text-slate-500">${p.carrier?.shortName || ''}</div>
                    </td>
                    <td class="px-4 py-2.5">${ratingBadge(p.carrier?.ratings?.amBest?.rating)}</td>
                    <td class="px-4 py-2.5 text-right font-mono font-semibold text-amber-600 dark:text-amber-400">${pct(getTopRate(p.indexAccounts))}</td>
                    <td class="px-4 py-2.5 text-right font-mono text-slate-500">${pct(p.maxIllustratedRate)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Top RILAs by Cap Rate -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <h3 class="font-semibold">Top RILA Cap Rates</h3>
            <a href="#/rila" class="text-xs text-rose-600 dark:text-rose-400 hover:underline">View All &rarr;</a>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">#</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Product</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Rating</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Cap Rate</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Buffer</th>
              </tr></thead>
              <tbody>
                ${topRILAs.map((p, i) => {
                  const topCap = Math.max(...(p.accountOptions || []).filter(o => o.capRate).map(o => o.capRate), 0);
                  const maxBuf = Math.max(...(p.accountOptions || []).filter(o => o.bufferLevel).map(o => o.bufferLevel), 0);
                  return `
                  <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/rila/${p.id}'">
                    <td class="px-4 py-2.5 text-slate-400 font-mono text-xs">${i + 1}</td>
                    <td class="px-4 py-2.5">
                      <div class="font-medium">${p.name}</div>
                      <div class="text-xs text-slate-500">${p.carrier?.shortName || ''}</div>
                    </td>
                    <td class="px-4 py-2.5">${ratingBadge(p.carrier?.ratings?.amBest?.rating)}</td>
                    <td class="px-4 py-2.5 text-right font-mono font-semibold text-rose-600 dark:text-rose-400">${pct(topCap)}</td>
                    <td class="px-4 py-2.5 text-right font-mono text-slate-500">${maxBuf}%</td>
                  </tr>
                `}).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Top Carriers -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <!-- Top Carriers by COMDEX -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <h3 class="font-semibold">Top Carriers by COMDEX</h3>
            <a href="#/carriers" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All &rarr;</a>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">#</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Carrier</th>
                <th class="text-left px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">AM Best</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">COMDEX</th>
                <th class="text-right px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">Since</th>
              </tr></thead>
              <tbody>
                ${topCarriers.map((c, i) => `
                  <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/carriers/${c.id}'">
                    <td class="px-4 py-2.5 text-slate-400 font-mono text-xs">${i + 1}</td>
                    <td class="px-4 py-2.5 font-medium">${c.shortName}</td>
                    <td class="px-4 py-2.5">${ratingBadge(c.ratings?.amBest?.rating)}</td>
                    <td class="px-4 py-2.5 text-right">${ratingBadge(c.ratings.comdex, 'comdex')}</td>
                    <td class="px-4 py-2.5 text-right font-mono text-xs text-slate-500">${c.foundedYear}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700">
            <h3 class="font-semibold">Quick Actions</h3>
          </div>
          <div class="p-5 grid grid-cols-2 gap-3">
            <a href="#/screener" class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
              <div class="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                <svg class="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <div>
                <p class="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Rate Screener</p>
                <p class="text-[10px] text-slate-400">Multi-filter search</p>
              </div>
            </a>
            <a href="#/compare" class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors group">
              <div class="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                <svg class="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"/></svg>
              </div>
              <div>
                <p class="text-sm font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Compare</p>
                <p class="text-[10px] text-slate-400">Side-by-side analysis</p>
              </div>
            </a>
            <a href="#/benchmark" class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors group">
              <div class="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                <svg class="w-4.5 h-4.5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <div>
                <p class="text-sm font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Benchmark</p>
                <p class="text-[10px] text-slate-400">Rate percentile ranking</p>
              </div>
            </a>
            <a href="#/reports" class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
              <div class="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                <svg class="w-4.5 h-4.5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <p class="text-sm font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Reports</p>
                <p class="text-[10px] text-slate-400">Export & download</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Historical Trends Chart -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold mb-4">Rate Trends (5 Years)</h3>
        <div id="dashboard-trend-chart"></div>
      </div>

      <!-- Disclaimer -->
      <div class="text-xs text-slate-400 dark:text-slate-500 text-center py-4">
        For informational purposes only. Not a solicitation or recommendation. Verify all rates directly with carriers before making decisions.
        <br>Data as of February 2026. Rates are subject to change.
      </div>
    </div>
  `;

  window._pageInit = () => {
    const chartEl = document.getElementById('dashboard-trend-chart');
    if (!chartEl) return;

    const chart = new ApexCharts(chartEl, {
      chart: { type: 'line', height: 300, toolbar: { show: false }, background: 'transparent',
        foreColor: document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b' },
      series: [
        { name: 'FIA Avg Cap', data: historical.map(h => h.fia.avgCapRate) },
        { name: 'IUL Avg Cap', data: historical.map(h => h.iul.avgCapRate) },
        { name: 'GLWB Avg Rollup', data: historical.map(h => h.glwb.avgRollup) }
      ],
      xaxis: { categories: historical.map(h => h.quarter), labels: { rotate: -45, style: { fontSize: '10px' } } },
      yaxis: { labels: { formatter: v => v.toFixed(1) + '%' } },
      colors: ['#3b82f6', '#f59e0b', '#10b981'],
      stroke: { width: 2.5, curve: 'smooth' },
      legend: { position: 'top' },
      tooltip: { y: { formatter: v => v.toFixed(2) + '%' } },
      grid: { borderColor: document.documentElement.classList.contains('dark') ? '#334155' : '#e2e8f0' },
      theme: { mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light' }
    });
    chart.render();
  };

  return html;
}
