// =============================================================================
// ui.js — small, string-returning UI helpers shared across pages. No framework;
// these just return HTML strings to drop into the existing render functions.
// Consolidates patterns (stat cards, type badges, freshness/verification chrome,
// empty states) so they stay visually consistent and reuse existing formatters.
// =============================================================================

import { monthYear } from '../utils/formatters.js';
import { typeLabels, typeColors } from '../data/search.js';

// Consolidated product/record type badge (was duplicated across main.js, Screener,
// ProductDetail with divergent color maps).
export function typeBadge(type) {
  const label = typeLabels[type] || type;
  const color = typeColors[type] || 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
  return `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${color}">${label}</span>`;
}

export function statCard({ label, value, sub = '', color = 'text-slate-700 dark:text-slate-200' }) {
  return `<div class="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
    <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">${label}</p>
    <p class="text-3xl font-bold ${color} mt-2 font-mono">${value}</p>
    ${sub ? `<p class="text-xs text-slate-400 mt-1">${sub}</p>` : ''}
  </div>`;
}

export function emptyState(message, sub = '') {
  return `<div class="text-center py-16">
    <svg class="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    <p class="text-slate-500 dark:text-slate-400 font-medium">${message}</p>
    ${sub ? `<p class="text-sm text-slate-400 mt-1">${sub}</p>` : ''}
  </div>`;
}

// Compact verification/freshness chip for the top bar.
export function freshnessChip(stats) {
  if (!stats) return '';
  const through = stats.latestVerifiedDate ? monthYear(stats.latestVerifiedDate) : '—';
  const pctVerified = stats.totalProducts ? Math.round((stats.verifiedProducts / stats.totalProducts) * 100) : 0;
  return `<span title="${stats.verifiedProducts} of ${stats.totalProducts} products have a cited public source"
    class="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
    <span class="relative flex h-2 w-2"><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
    Data verified through ${through} &middot; ${pctVerified}% sourced
  </span>`;
}

// Dashboard panel making verification coverage transparent.
export function dataIntegrityPanel(stats) {
  const total = stats.totalProducts || 1;
  const vPct = Math.round((stats.verifiedProducts / total) * 100);
  const pPct = Math.round((stats.partialProducts / total) * 100);
  const uPct = Math.max(0, 100 - vPct - pPct);
  return `<div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-semibold">Data Integrity</h3>
      <span class="text-xs text-slate-400">Verified through ${stats.latestVerifiedDate ? monthYear(stats.latestVerifiedDate) : '—'}</span>
    </div>
    <div class="flex h-3 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700 mb-3">
      <div class="bg-emerald-500" style="width:${vPct}%"></div>
      <div class="bg-sky-500" style="width:${pPct}%"></div>
      <div class="bg-amber-400" style="width:${uPct}%"></div>
    </div>
    <div class="grid grid-cols-3 gap-2 text-center text-sm">
      <div><div class="font-bold text-emerald-600 dark:text-emerald-400">${stats.verifiedProducts}</div><div class="text-[11px] text-slate-500">Sourced</div></div>
      <div><div class="font-bold text-sky-600 dark:text-sky-400">${stats.partialProducts}</div><div class="text-[11px] text-slate-500">Partial</div></div>
      <div><div class="font-bold text-amber-600 dark:text-amber-400">${total - stats.verifiedProducts - stats.partialProducts}</div><div class="text-[11px] text-slate-500">Unverified</div></div>
    </div>
    <p class="text-[11px] text-slate-400 mt-3 leading-relaxed">Every figure shown traces to a cited public source or is labeled unverified. Live cap/participation rates change frequently &mdash; confirm with the carrier before relying on them.</p>
  </div>`;
}
