#!/usr/bin/env node
// =============================================================================
// validate-data.mjs — Deterministic integrity + plausibility audit of all
// product data. Zero dependencies. Imports the SAME src/data/*.js ESM modules
// the app uses, so the validator and runtime can never drift apart.
//
//   npm run validate:data     (exit 0 = clean, exit 1 = errors found)
//
// ERRORS fail the build (missing required fields, duplicate ids, broken
// references, bad enums/dates). WARNINGS never fail it (out-of-range outliers,
// missing provenance) — they surface data worth a human look.
// =============================================================================

import { carriers } from '../src/data/carriers.js';
import { fiaProducts } from '../src/data/fia-products.js';
import { iulProducts } from '../src/data/iul-products.js';
import { rilaProducts } from '../src/data/rila-products.js';
import { vaProducts } from '../src/data/va-products.js';
import { vulProducts } from '../src/data/vul-products.js';
import { glwbRiders } from '../src/data/glwb-riders.js';
import { mygaProducts } from '../src/data/myga-products.js';
import { corporateBonds } from '../src/data/corporate-bonds.js';
import { municipalBonds } from '../src/data/municipal-bonds.js';
import { subaccounts } from '../src/data/subaccounts.js';
import {
  PRODUCT_SCHEMAS, CROSS_TYPE_COLLECTIONS, RATES_VERIFIED_ENUM,
  RANGES, SOURCE_KEYS, ISO_DATE_RE,
} from '../src/data/schema.js';

const COLLECTIONS = {
  carriers, fiaProducts, iulProducts, rilaProducts,
  vaProducts, vulProducts, glwbRiders, mygaProducts,
  corporateBonds, municipalBonds, subaccounts,
};

const errors = [];
const warnings = [];
const err = (coll, id, msg) => errors.push(`[${coll}] ${id}: ${msg}`);
const warn = (coll, id, msg) => warnings.push(`[${coll}] ${id}: ${msg}`);

const carrierIds = new Set(carriers.map(c => c.id));
const subaccountIds = new Set(subaccounts.map(s => s.id));
const allProductIds = new Set(
  CROSS_TYPE_COLLECTIONS.flatMap(coll => COLLECTIONS[coll].map(r => r.id))
);

// Recursively scan a record for any key listed in RANGES and range-check the value.
function checkRanges(coll, id, obj, seen = new Set()) {
  if (obj == null || typeof obj !== 'object' || seen.has(obj)) return;
  seen.add(obj);
  for (const [key, val] of Object.entries(obj)) {
    if (val == null) continue;
    if (typeof val === 'number' && RANGES[key]) {
      const [min, max] = RANGES[key];
      if (val < min || val > max) {
        warn(coll, id, `${key}=${val} outside plausible range [${min}, ${max}]`);
      }
    } else if (typeof val === 'object') {
      checkRanges(coll, id, val, seen);
    }
  }
}

// ── Per-collection checks ───────────────────────────────────────────────────
for (const [coll, schema] of Object.entries(PRODUCT_SCHEMAS)) {
  const records = COLLECTIONS[coll];
  if (!Array.isArray(records)) { err(coll, '-', 'collection missing or not an array'); continue; }

  const seenIds = new Set();
  for (const rec of records) {
    const id = rec?.[schema.idField] ?? '(no id)';

    // Required fields
    for (const f of schema.required) {
      if (rec[f] == null || rec[f] === '') err(coll, id, `missing required field "${f}"`);
    }

    // Duplicate id within collection
    if (seenIds.has(id)) err(coll, id, 'duplicate id within collection');
    seenIds.add(id);

    // carrierId reference
    if (schema.carrierRef && rec.carrierId != null && !carrierIds.has(rec.carrierId)) {
      err(coll, id, `carrierId "${rec.carrierId}" not found in carriers`);
    }

    // subaccountIds reference + count consistency
    if (schema.subaccountRef && Array.isArray(rec.subaccountIds)) {
      for (const sid of rec.subaccountIds) {
        if (!subaccountIds.has(sid)) err(coll, id, `subaccountId "${sid}" not found in subaccounts`);
      }
      // subaccountCount is the product's TRUE total; subaccountIds is the subset we track
      // (often a sample, sometimes empty). The only real inconsistency is linking MORE
      // tracked funds than the product is said to offer.
      if (typeof rec.subaccountCount === 'number' && rec.subaccountIds.length > rec.subaccountCount) {
        warn(coll, id, `subaccountIds.length=${rec.subaccountIds.length} exceeds subaccountCount=${rec.subaccountCount}`);
      }
    }

    // availableIn (subaccounts) → product ids (soft check)
    if (coll === 'subaccounts' && Array.isArray(rec.availableIn)) {
      for (const pid of rec.availableIn) {
        if (!allProductIds.has(pid)) warn(coll, id, `availableIn references unknown product "${pid}"`);
      }
    }

    // ratesVerified enum + provenance
    if ('ratesVerified' in rec) {
      if (!RATES_VERIFIED_ENUM.includes(rec.ratesVerified)) {
        err(coll, id, `ratesVerified=${JSON.stringify(rec.ratesVerified)} not one of ${JSON.stringify(RATES_VERIFIED_ENUM)}`);
      }
      // Real provenance is a CITED SOURCE (a self-asserted date alone is not evidence).
      if (rec.ratesVerified === true && !SOURCE_KEYS.some(k => rec[k])) {
        warn(coll, id, 'ratesVerified:true but no source (verificationSource/sourceUrl)');
      }
    }
    // subaccounts use returnsVerified instead
    if ('returnsVerified' in rec && rec.returnsVerified === true && !rec.lastVerifiedDate) {
      warn(coll, id, 'returnsVerified:true but no lastVerifiedDate');
    }

    // ISO date fields
    for (const dk of ['lastVerifiedDate', 'discontinuedDate', 'inceptionDate']) {
      if (rec[dk] != null && !ISO_DATE_RE.test(rec[dk])) {
        warn(coll, id, `${dk}="${rec[dk]}" not ISO (YYYY-MM-DD)`);
      }
    }

    checkRanges(coll, id, rec);
  }
}

// ── Global cross-type id uniqueness (getProduct resolves by bare id) ─────────
const globalIds = new Map(); // id -> collection
for (const coll of CROSS_TYPE_COLLECTIONS) {
  for (const rec of COLLECTIONS[coll]) {
    if (globalIds.has(rec.id)) {
      err(coll, rec.id, `cross-type id collision with ${globalIds.get(rec.id)} (getProduct would shadow one)`);
    } else {
      globalIds.set(rec.id, coll);
    }
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
const counts = Object.fromEntries(Object.keys(PRODUCT_SCHEMAS).map(k => [k, COLLECTIONS[k].length]));
console.log('AnnuityIQ data validation');
console.log('─'.repeat(60));
console.log('Records:', Object.entries(counts).map(([k, v]) => `${k}=${v}`).join('  '));
console.log('');

if (warnings.length) {
  console.log(`⚠  ${warnings.length} warning(s):`);
  for (const w of warnings) console.log('   ' + w);
  console.log('');
}
if (errors.length) {
  console.log(`✖  ${errors.length} error(s):`);
  for (const e of errors) console.log('   ' + e);
  console.log('');
  console.log('FAILED');
  process.exit(1);
}
console.log(`✓  ${warnings.length ? warnings.length + ' warning(s), but ' : ''}0 errors — data integrity OK`);
process.exit(0);
