#!/usr/bin/env node
// One-off correction: prune subaccount `availableIn` arrays to products that actually
// exist in the dataset. Many entries referenced planned-but-absent product ids (e.g.
// 'corebridge-polaris-platinum' vs the real 'corebridge-polaris-platinum-iii'), which
// inflated the "Available in" counts with non-existent products. Keep only real ids.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fiaProducts } from '../src/data/fia-products.js';
import { iulProducts } from '../src/data/iul-products.js';
import { rilaProducts } from '../src/data/rila-products.js';
import { vaProducts } from '../src/data/va-products.js';
import { vulProducts } from '../src/data/vul-products.js';
import { glwbRiders } from '../src/data/glwb-riders.js';

const valid = new Set([...fiaProducts, ...iulProducts, ...rilaProducts, ...vaProducts, ...vulProducts, ...glwbRiders].map(p => p.id));

const file = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'subaccounts.js');
let src = readFileSync(file, 'utf8');

let removed = 0, touched = 0;
src = src.replace(/availableIn:\s*\[([^\]]*)\]/g, (full, inner) => {
  const ids = [...inner.matchAll(/'([^']*)'/g)].map(m => m[1]);
  const kept = ids.filter(id => valid.has(id));
  const dropped = ids.length - kept.length;
  if (dropped > 0) { removed += dropped; touched++; }
  return `availableIn: [${kept.map(id => `'${id}'`).join(', ')}]`;
});

writeFileSync(file, src);
console.log(`Pruned ${removed} dangling product reference(s) across ${touched} subaccount(s).`);
