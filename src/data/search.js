// =============================================================================
// search.js — Ranked, typo-tolerant search across all records. Zero dependencies.
//
// Replaces the old substring `.includes()` scan with weighted, multi-field,
// fuzzy matching and relevance ranking. Drop-in: searchAll(query) returns the
// same { id, name, type, route } shape (plus `score`), so existing callers and
// the global search box keep working.
//
// Scoring: each query token must match somewhere (AND semantics). A token's
// score is the best (fieldWeight x tier) across a record's fields, where tier is
// exact-token > prefix > substring > fuzzy (bounded Levenshtein, tokens >= 3 chars
// only). A whole-query prefix/substring hit on the product name adds a bonus.
// Ties break deterministically: score, then verified, then shorter name, then order.
// =============================================================================

import { carriers } from './carriers.js';
import { fiaProducts } from './fia-products.js';
import { glwbRiders } from './glwb-riders.js';
import { iulProducts } from './iul-products.js';
import { rilaProducts } from './rila-products.js';
import { vaProducts } from './va-products.js';
import { vulProducts } from './vul-products.js';
import { mygaProducts } from './myga-products.js';
import { corporateBonds } from './corporate-bonds.js';
import { municipalBonds } from './municipal-bonds.js';
import { treasuryBonds } from './treasury-bonds.js';
import { subaccounts } from './subaccounts.js';

export const typeLabels = { carrier: 'Carrier', fia: 'FIA', glwb: 'GLWB', iul: 'IUL', rila: 'RILA', va: 'VA', vul: 'VUL', myga: 'MYGA', corp: 'Corp Bond', muni: 'Muni Bond', govt: 'Treasury', fund: 'Fund' };
export const typeColors = {
  carrier: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  fia: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  glwb: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  iul: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  rila: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300',
  va: 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300',
  vul: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
  myga: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
  corp: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
  muni: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
  govt: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  fund: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
};

const FIELD_WEIGHTS = { name: 1.0, carrier: 0.6, category: 0.45, ticker: 0.4, manager: 0.4 };

const norm = s => (s || '').toString().toLowerCase().trim();
const tokenize = s => norm(s).split(/[^a-z0-9]+/).filter(Boolean);

// ── Build a flat, weighted, pre-tokenized index once (data is static) ────────
let INDEX = null;

function buildIndex() {
  const carrierMap = new Map(carriers.map(c => [c.id, c]));
  const entries = [];

  const addField = (fields, key, value) => {
    const t = norm(value);
    if (t) fields.push({ key, w: FIELD_WEIGHTS[key], t, toks: tokenize(value) });
  };

  const addProduct = (p, type, routePrefix) => {
    const carrier = carrierMap.get(p.carrierId);
    const carrierShort = carrier?.shortName || '';
    const fields = [];
    addField(fields, 'name', p.name);
    addField(fields, 'carrier', carrierShort);
    addField(fields, 'category', p.category); // bonds: rating tier / category text (no-op when absent)
    // Avoid redundant prefixes like "Allianz Life Allianz 222+" when the product
    // name already leads with the carrier's first word.
    const firstWord = carrierShort.split(' ')[0].toLowerCase();
    const display = firstWord && norm(p.name).startsWith(firstWord) ? p.name : `${carrierShort} ${p.name}`.trim();
    entries.push({
      id: p.id, type, route: `${routePrefix}/${p.id}`,
      name: display,
      verified: p.ratesVerified === true || p.yieldVerified === true,
      fields,
    });
  };

  carriers.forEach(c => {
    const fields = [];
    addField(fields, 'name', c.name);
    addField(fields, 'name', c.shortName);
    entries.push({ id: c.id, type: 'carrier', route: `/carriers/${c.id}`, name: c.shortName, verified: false, fields });
  });

  fiaProducts.forEach(p => addProduct(p, 'fia', '/fia'));
  glwbRiders.forEach(p => addProduct(p, 'glwb', '/glwb'));
  iulProducts.forEach(p => addProduct(p, 'iul', '/iul'));
  rilaProducts.forEach(p => addProduct(p, 'rila', '/rila'));
  vaProducts.forEach(p => addProduct(p, 'va', '/va'));
  vulProducts.forEach(p => addProduct(p, 'vul', '/vul'));
  mygaProducts.forEach(p => addProduct(p, 'myga', '/myga'));
  // Bonds have no carrier; all kinds open in the combined Bond Yields explorer.
  corporateBonds.forEach(p => addProduct(p, 'corp', '/bonds'));
  municipalBonds.forEach(p => addProduct(p, 'muni', '/bonds'));
  treasuryBonds.forEach(p => addProduct(p, 'govt', '/bonds'));

  subaccounts.forEach(s => {
    const fields = [];
    addField(fields, 'name', s.name);
    addField(fields, 'manager', s.manager);
    addField(fields, 'category', s.category);
    addField(fields, 'ticker', s.ticker);
    entries.push({ id: s.id, type: 'fund', route: `/funds/${s.id}`, name: s.name, verified: s.returnsVerified === true, fields });
  });

  // Stable original order for deterministic tie-breaking
  entries.forEach((e, i) => { e._i = i; });
  return entries;
}

// ── Bounded Levenshtein (early-exits once min row cost exceeds cap) ───────────
function editDistance(a, b, cap) {
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > cap) return cap + 1;
  let prev = new Array(lb + 1);
  for (let j = 0; j <= lb; j++) prev[j] = j;
  for (let i = 1; i <= la; i++) {
    let cur = [i];
    let rowMin = i;
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > cap) return cap + 1;
    prev = cur;
  }
  return prev[lb];
}

function maxDistFor(len) {
  if (len <= 3) return 1;
  if (len <= 7) return 2;
  return 3;
}

// Best match tier of one query token against one field (0 = no match)
function tokenFieldScore(qTok, field) {
  if (field.toks.includes(qTok)) return 1.0;            // exact token
  for (const tok of field.toks) if (tok.startsWith(qTok)) return 0.8; // prefix
  if (field.t.includes(qTok)) return 0.5;               // substring anywhere
  if (qTok.length >= 3) {                               // fuzzy (typo-tolerant)
    const cap = maxDistFor(qTok.length);
    let best = cap + 1;
    for (const tok of field.toks) {
      if (Math.abs(tok.length - qTok.length) > cap) continue;
      const d = editDistance(qTok, tok, cap);
      if (d < best) best = d;
      if (best === 1) break;
    }
    if (best <= cap) return 0.4 * (1 - best / (qTok.length + 1));
  }
  return 0;
}

function scoreEntry(entry, qTokens, fullQuery) {
  let total = 0;
  for (const qTok of qTokens) {
    let bestForToken = 0;
    for (const field of entry.fields) {
      const s = field.w * tokenFieldScore(qTok, field);
      if (s > bestForToken) bestForToken = s;
    }
    if (bestForToken === 0) return 0; // every token must match somewhere
    total += bestForToken;
  }
  // Whole-query bonus on the primary (name) field
  const nameField = entry.fields.find(f => f.key === 'name');
  if (nameField) {
    if (nameField.t.startsWith(fullQuery)) total += 0.6;
    else if (nameField.t.includes(fullQuery)) total += 0.25;
  }
  return total;
}

/**
 * Ranked search. Returns [{ id, name, type, route, score }] best-first.
 * @param {string} query
 * @param {{limit?:number, types?:string[]}} opts
 */
export function searchAll(query, opts = {}) {
  const { limit = 30, types = null } = opts;
  const fullQuery = norm(query);
  if (fullQuery.length < 2) return [];
  const qTokens = tokenize(query);
  if (!qTokens.length) return [];
  if (!INDEX) INDEX = buildIndex();

  const scored = [];
  for (const entry of INDEX) {
    if (types && !types.includes(entry.type)) continue;
    const score = scoreEntry(entry, qTokens, fullQuery);
    if (score > 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.entry.verified !== b.entry.verified) return a.entry.verified ? -1 : 1;
    if (a.entry.name.length !== b.entry.name.length) return a.entry.name.length - b.entry.name.length;
    return a.entry._i - b.entry._i;
  });

  return scored.slice(0, limit).map(({ entry, score }) => ({
    id: entry.id, name: entry.name, type: entry.type, route: entry.route, score,
  }));
}

/** Grouped variant: { type, label, items[] }[], groups ordered by best score. */
export function searchGrouped(query, opts = {}) {
  const flat = searchAll(query, { ...opts, limit: opts.limit ?? 40 });
  const groups = new Map();
  for (const r of flat) {
    if (!groups.has(r.type)) groups.set(r.type, []);
    groups.get(r.type).push(r);
  }
  return [...groups.entries()]
    .map(([type, items]) => ({ type, label: typeLabels[type] || type, items }))
    .sort((a, b) => b.items[0].score - a.items[0].score);
}

// Test/diagnostic helper — lets tests rebuild against the real data deterministically.
export function _rebuildIndex() { INDEX = buildIndex(); return INDEX.length; }
