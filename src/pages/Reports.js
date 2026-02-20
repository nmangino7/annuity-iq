// =============================================================================
// AnnuityIQ - Reports & Export Page
// =============================================================================
// Generate PDF/CSV reports of rate data, comparisons, and market summaries.
// Premium feature for paid subscribers.
// =============================================================================

import { getCarriers, getFIAProducts, getGLWBRiders, getIULProducts, getRILAProducts, getVAProducts, getVULProducts, getSubaccounts, getBenchmarks } from '../data/index.js';
import { pct, currency } from '../utils/formatters.js';

export function renderReports() {
  const carriers = getCarriers();
  const fiaProducts = getFIAProducts();
  const glwbRiders = getGLWBRiders();
  const iulProducts = getIULProducts();
  const rilaProducts = getRILAProducts();
  const benchmarks = getBenchmarks();

  window._pageInit = () => {
    initReportHandlers();
  };

  const html = `
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Reports & Export</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Generate downloadable reports and data exports</p>
        </div>
      </div>

      <!-- Report Templates -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <!-- Market Overview Report -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Market Overview</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Complete market summary with benchmarks, top products, and rate trends across all categories.</p>
          <div class="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 mb-4 flex-wrap">
            <span>${fiaProducts.length} FIA</span>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>${glwbRiders.length} GLWB</span>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>${iulProducts.length} IUL</span>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>${rilaProducts.length} RILA</span>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>${getVAProducts().length} VA</span>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>${getVULProducts().length} VUL</span>
          </div>
          <button onclick="window._generateMarketReport()" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Generate Report
          </button>
        </div>

        <!-- FIA Rate Sheet -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">FIA Rate Sheet</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">All FIA products with cap rates, participation rates, and index strategies in a spreadsheet format.</p>
          <button onclick="window._exportCSV('fia')" class="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <!-- GLWB Rate Sheet -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Income Rider Sheet</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">All GLWB riders with rollup rates, withdrawal percentages, and rider fees.</p>
          <button onclick="window._exportCSV('glwb')" class="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <!-- IUL Rate Sheet -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">IUL Rate Sheet</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">All IUL products with cap rates, illustrated rates, and loan provisions.</p>
          <button onclick="window._exportCSV('iul')" class="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <!-- RILA Rate Sheet -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">RILA Rate Sheet</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">All RILA/Buffer products with cap rates, buffer levels, and account options.</p>
          <button onclick="window._exportCSV('rila')" class="w-full px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <!-- VA Rate Sheet -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">VA Rate Sheet</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">All Variable Annuity products with M&E charges, living benefits, and subaccount counts.</p>
          <button onclick="window._exportCSV('va')" class="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <!-- VUL Rate Sheet -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">VUL Rate Sheet</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">All VUL products with M&E charges, loan provisions, and subaccount counts.</p>
          <button onclick="window._exportCSV('vul')" class="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <!-- Carrier Comparison -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Carrier Directory</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">${carriers.length} carriers with AM Best, S&P, Moody's, Fitch, and COMDEX ratings.</p>
          <button onclick="window._exportCSV('carriers')" class="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <!-- Custom Comparison -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Full Data Export</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Export all product data, rates, and carrier information in one comprehensive CSV.</p>
          <button onclick="window._exportCSV('all')" class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Export All Data
          </button>
        </div>

      </div>
    </div>
  `;

  return html;
}

function initReportHandlers() {
  const carriers = getCarriers();
  const fiaProducts = getFIAProducts();
  const glwbRiders = getGLWBRiders();
  const iulProducts = getIULProducts();
  const rilaProducts = getRILAProducts();
  const vaProducts = getVAProducts();
  const vulProducts = getVULProducts();

  window._exportCSV = (type) => {
    let csvContent = '';
    let filename = '';

    if (type === 'fia') {
      filename = `annuityiq-fia-rates-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Carrier,Product,Surrender Period,Min Premium,Max Issue Age,Guaranteed Min Rate,Premium Bonus,Free Withdrawal %,Top Cap Rate,Top Part Rate,Income Rider,Last Updated\n';
      fiaProducts.forEach(p => {
        const topCap = Math.max(...(p.indexStrategies || []).filter(s => s.capRate).map(s => s.capRate), 0);
        const topPart = Math.max(...(p.indexStrategies || []).filter(s => s.participationRate).map(s => s.participationRate), 0);
        csvContent += `"${p.carrier?.shortName || ''}","${p.name}",${p.surrenderPeriod},${p.minimumPremium},${p.maximumIssueAge},${p.guaranteedMinimumRate || 0}%,${p.premiumBonus || 0}%,${p.freeWithdrawalPercent || 10}%,${topCap}%,${topPart}%,${p.incomeRiderAvailable ? 'Yes' : 'No'},${p.lastRateUpdate}\n`;
      });
    } else if (type === 'glwb') {
      filename = `annuityiq-glwb-rates-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Carrier,Rider Name,Attached Product,Rider Fee,Rollup Rate,Rollup Type,Max Rollup Years,Step-Up,RMD Friendly,Nursing Home,Last Updated\n';
      glwbRiders.forEach(r => {
        csvContent += `"${r.carrier?.shortName || ''}","${r.name}","${r.attachedProduct || ''}",${r.riderFee}%,${r.rollup?.rate || ''}%,${r.rollup?.type || ''},${r.rollup?.maxYears || ''},${r.stepUpAvailable ? 'Yes' : 'No'},${r.rmdFriendly ? 'Yes' : 'No'},${r.nursingHomeBenefit ? 'Yes' : 'No'},${r.lastRateUpdate}\n`;
      });
    } else if (type === 'iul') {
      filename = `annuityiq-iul-rates-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Carrier,Product,Max Illustrated Rate,Fixed Account Rate,Guaranteed Min Rate,Top Cap Rate,No Lapse Guarantee,Standard Loan Rate,Last Updated\n';
      iulProducts.forEach(p => {
        const topCap = Math.max(...(p.indexAccounts || []).filter(a => a.capRate && a.capRate <= 15).map(a => a.capRate), 0);
        const loanRate = p.loanProvisions?.standardLoan?.rate || '';
        csvContent += `"${p.carrier?.shortName || ''}","${p.name}",${p.maxIllustratedRate}%,${p.fixedAccountRate}%,${p.guaranteedMinCreditingRate || 0}%,${topCap}%,"${p.noLapseGuarantee || ''}",${loanRate}%,${p.lastRateUpdate}\n`;
      });
    } else if (type === 'rila') {
      filename = `annuityiq-rila-rates-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Carrier,Product,Term,Min Premium,Max Issue Age,Top Cap Rate,Top Participation,Max Buffer,Buffer Types,Uncapped Options,# Strategies,Death Benefit,Last Updated\n';
      rilaProducts.forEach(p => {
        const topCap = Math.max(...(p.accountOptions || []).filter(o => o.capRate).map(o => o.capRate), 0);
        const topPart = Math.max(...(p.accountOptions || []).filter(o => o.participationRate).map(o => o.participationRate), 0);
        const maxBuffer = Math.max(...(p.accountOptions || []).filter(o => o.bufferLevel).map(o => o.bufferLevel), 0);
        const bufferTypes = [...new Set((p.accountOptions || []).map(o => o.bufferType).filter(Boolean))].join('; ');
        const hasUncapped = (p.accountOptions || []).some(o => o.isUncapped);
        csvContent += `"${p.carrier?.shortName || ''}","${p.name}",${p.term || ''},${p.minimumPremium || ''},${p.maximumIssueAge || ''},${topCap}%,${topPart}%,${maxBuffer}%,"${bufferTypes}",${hasUncapped ? 'Yes' : 'No'},${(p.accountOptions || []).length},"${p.deathBenefit || ''}",${p.lastRateUpdate}\n`;
      });
    } else if (type === 'va') {
      filename = `annuityiq-va-data-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Carrier,Product,Contract Type,M&E Charge,Admin Fee,Total Annual Charge,Surrender Period,Min Premium,Max Issue Age,Subaccount Count,Free Withdrawal %,RMD Friendly,Last Updated\n';
      vaProducts.forEach(p => {
        csvContent += `"${p.carrier?.shortName || ''}","${p.name}","${p.contractType || ''}",${p.meCharge || ''}%,${p.adminFee || ''}%,${p.totalAnnualCharge || ''}%,${p.surrenderPeriod || ''},${p.minimumPremium || ''},${p.maximumIssueAge || ''},${p.subaccountCount || ''},${p.freeWithdrawalPercent || ''}%,${p.rmdFriendly ? 'Yes' : 'No'},${p.lastRateUpdate}\n`;
      });
    } else if (type === 'vul') {
      filename = `annuityiq-vul-data-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Carrier,Product,Policy Type,M&E Charge,Fixed Account Rate,Surrender Period,Min Face Amount,Max Issue Age,Subaccount Count,No-Lapse Guarantee,Zero-Net Loan,Last Updated\n';
      vulProducts.forEach(p => {
        csvContent += `"${p.carrier?.shortName || ''}","${p.name}","${p.policyType || ''}",${p.meCharge || ''}%,${p.fixedAccountRate || ''}%,${p.surrenderPeriod || ''},${p.minimumFaceAmount || ''},${p.maximumIssueAge || ''},${p.subaccountCount || ''},"${p.noLapseGuarantee || ''}",${p.loanProvisions?.zeroNetCostLoanAvailable ? 'Yes' : 'No'},${p.lastRateUpdate}\n`;
      });
    } else if (type === 'carriers') {
      filename = `annuityiq-carriers-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Carrier,Full Name,AM Best,S&P,Moodys,COMDEX,Founded,Headquarters,Total Assets,Product Categories\n';
      carriers.forEach(c => {
        csvContent += `"${c.shortName}","${c.name}","${c.ratings?.amBest?.rating || ''}","${c.ratings?.sAndP?.rating || ''}","${c.ratings?.moodys?.rating || ''}",${c.ratings?.comdex || ''},${c.foundedYear},"${c.headquarters}","${c.totalAssets}","${(c.productCategories || []).join(', ')}"\n`;
      });
    } else if (type === 'all') {
      filename = `annuityiq-full-export-${new Date().toISOString().slice(0,10)}.csv`;
      csvContent = 'Type,Carrier,Product/Rider,Key Metric 1,Key Metric 2,Key Metric 3,Last Updated\n';
      fiaProducts.forEach(p => {
        const topCap = Math.max(...(p.indexStrategies || []).filter(s => s.capRate).map(s => s.capRate), 0);
        csvContent += `FIA,"${p.carrier?.shortName || ''}","${p.name}","Cap: ${topCap}%","Surrender: ${p.surrenderPeriod}yr","Min: $${p.minimumPremium?.toLocaleString()}",${p.lastRateUpdate}\n`;
      });
      glwbRiders.forEach(r => {
        csvContent += `GLWB,"${r.carrier?.shortName || ''}","${r.name}","Rollup: ${r.rollup?.rate || ''}%","Fee: ${r.riderFee}%","Type: ${r.rollup?.type || ''}",${r.lastRateUpdate}\n`;
      });
      iulProducts.forEach(p => {
        csvContent += `IUL,"${p.carrier?.shortName || ''}","${p.name}","Illust: ${p.maxIllustratedRate}%","Fixed: ${p.fixedAccountRate}%","NLG: ${p.noLapseGuarantee || 'N/A'}",${p.lastRateUpdate}\n`;
      });
      rilaProducts.forEach(p => {
        const topCap = Math.max(...(p.accountOptions || []).filter(o => o.capRate).map(o => o.capRate), 0);
        const maxBuffer = Math.max(...(p.accountOptions || []).filter(o => o.bufferLevel).map(o => o.bufferLevel), 0);
        csvContent += `RILA,"${p.carrier?.shortName || ''}","${p.name}","Cap: ${topCap}%","Buffer: ${maxBuffer}%","Term: ${p.term || 'N/A'}yr",${p.lastRateUpdate}\n`;
      });
      vaProducts.forEach(p => {
        csvContent += `VA,"${p.carrier?.shortName || ''}","${p.name}","M&E: ${p.meCharge || ''}%","Funds: ${p.subaccountCount || ''}","Type: ${p.contractType || 'N/A'}",${p.lastRateUpdate}\n`;
      });
      vulProducts.forEach(p => {
        csvContent += `VUL,"${p.carrier?.shortName || ''}","${p.name}","M&E: ${p.meCharge || ''}%","Fixed: ${p.fixedAccountRate || ''}%","NLG: ${p.noLapseGuarantee || 'N/A'}",${p.lastRateUpdate}\n`;
      });
    }

    // Trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  window._generateMarketReport = () => {
    // Generate a comprehensive text report that opens in a new tab
    const benchmarks = getBenchmarks();
    const now = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    let report = `ANNUITYIQ MARKET OVERVIEW REPORT\n`;
    report += `Generated: ${now}\n`;
    report += `${'='.repeat(60)}\n\n`;

    report += `MARKET SUMMARY\n`;
    report += `${'-'.repeat(40)}\n`;
    report += `Total FIA Products:  ${fiaProducts.length}\n`;
    report += `Total GLWB Riders:   ${glwbRiders.length}\n`;
    report += `Total IUL Products:  ${iulProducts.length}\n`;
    report += `Total RILA Products: ${rilaProducts.length}\n`;
    report += `Total VA Products:   ${vaProducts.length}\n`;
    report += `Total VUL Products:  ${vulProducts.length}\n`;
    report += `Total Carriers:      ${carriers.length}\n\n`;

    if (benchmarks.fia) {
      report += `FIA BENCHMARKS\n`;
      report += `${'-'.repeat(40)}\n`;
      Object.entries(benchmarks.fia).forEach(([key, val]) => {
        report += `  ${key}: ${typeof val === 'number' ? val + '%' : val}\n`;
      });
      report += `\n`;
    }

    if (benchmarks.glwb) {
      report += `GLWB BENCHMARKS\n`;
      report += `${'-'.repeat(40)}\n`;
      Object.entries(benchmarks.glwb).forEach(([key, val]) => {
        report += `  ${key}: ${typeof val === 'number' ? val + '%' : val}\n`;
      });
      report += `\n`;
    }

    if (benchmarks.iul) {
      report += `IUL BENCHMARKS\n`;
      report += `${'-'.repeat(40)}\n`;
      Object.entries(benchmarks.iul).forEach(([key, val]) => {
        report += `  ${key}: ${typeof val === 'number' ? val + '%' : val}\n`;
      });
      report += `\n`;
    }

    // Top FIA products by cap rate
    report += `TOP 10 FIA PRODUCTS BY CAP RATE\n`;
    report += `${'-'.repeat(40)}\n`;
    const topFIA = [...fiaProducts]
      .map(p => {
        const topCap = Math.max(...(p.indexStrategies || []).filter(s => s.capRate && s.capRate <= 15).map(s => s.capRate), 0);
        return { ...p, topCap };
      })
      .sort((a, b) => b.topCap - a.topCap)
      .slice(0, 10);

    topFIA.forEach((p, i) => {
      report += `  ${i + 1}. ${p.carrier?.shortName || ''} ${p.name} — ${p.topCap}%\n`;
    });
    report += `\n`;

    // Top GLWB by rollup rate
    report += `TOP 10 GLWB RIDERS BY ROLLUP RATE\n`;
    report += `${'-'.repeat(40)}\n`;
    const topGLWB = [...glwbRiders]
      .sort((a, b) => (b.rollup?.rate || 0) - (a.rollup?.rate || 0))
      .slice(0, 10);

    topGLWB.forEach((r, i) => {
      report += `  ${i + 1}. ${r.carrier?.shortName || ''} ${r.name} — ${r.rollup?.rate || 'N/A'}% ${r.rollup?.type || ''}\n`;
    });
    report += `\n`;

    // Top RILA by cap rate
    report += `TOP 10 RILA PRODUCTS BY CAP RATE\n`;
    report += `${'-'.repeat(40)}\n`;
    const topRILA = [...rilaProducts]
      .map(p => {
        const topCap = Math.max(...(p.accountOptions || []).filter(o => o.capRate && o.capRate <= 30).map(o => o.capRate), 0);
        const maxBuffer = Math.max(...(p.accountOptions || []).filter(o => o.bufferLevel).map(o => o.bufferLevel), 0);
        return { ...p, topCap, maxBuffer };
      })
      .sort((a, b) => b.topCap - a.topCap)
      .slice(0, 10);

    topRILA.forEach((p, i) => {
      report += `  ${i + 1}. ${p.carrier?.shortName || ''} ${p.name} — ${p.topCap}% cap / ${p.maxBuffer}% buffer\n`;
    });
    report += `\n`;

    report += `${'-'.repeat(60)}\n`;
    report += `Report generated by AnnuityIQ v2.0\n`;
    report += `For informational purposes only. Not a solicitation or recommendation.\n`;

    // Open in new tab
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };
}
