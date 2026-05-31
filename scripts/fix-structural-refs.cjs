#!/usr/bin/env node
// One-off correction: fix the 20 structural data errors surfaced by validate-data.mjs
//   - broken carrierId references (carrier id typos/short forms)
//   - 3 VUL records missing carrierId entirely
//   - 2 GLWB rider ids that collided cross-type with FIA product ids
// Idempotent via exact-count assertions; safe to re-run (counts become 0 after first pass).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', 'src', 'data');

function edit(file, replacements) {
  const p = path.join(ROOT, file);
  let src = fs.readFileSync(p, 'utf8');
  let changed = 0;
  for (const [from, to, expected] of replacements) {
    const count = src.split(from).length - 1;
    if (expected != null && count !== expected && count !== 0) {
      throw new Error(`${file}: expected ${expected} of \`${from}\`, found ${count}`);
    }
    if (count) { src = src.split(from).join(to); changed += count; }
  }
  fs.writeFileSync(p, src);
  console.log(`${file}: ${changed} replacement(s)`);
}

// va-products.js — remap short/typo carrier ids to real carrier ids
edit('va-products.js', [
  ["carrierId: 'protective',",  "carrierId: 'protective-life',", 6],
  ["carrierId: 'corebridge',",  "carrierId: 'corebridge-financial',", 1],
  ["carrierId: 'lincoln',",     "carrierId: 'lincoln-financial',", 2],
  ["carrierId: 'allianz',",     "carrierId: 'allianz-life',", 1],
  ["carrierId: 'jackson',",     "carrierId: 'jackson-national',", 1],
]);

// glwb-riders.js — fix nassau typo + de-collide rider ids that shadowed FIA products
edit('glwb-riders.js', [
  ['carrierId: "nassau",', 'carrierId: "nassau-life",', 2],
  ['id: "american-equity-incomeshield-10",', 'id: "american-equity-incomeshield-10-rider",', 1],
  ['id: "midland-national-incomevantage-pro",', 'id: "midland-national-incomevantage-pro-rider",', 1],
]);

// vul-products.js — add missing carrierId (insert right after the id line)
edit('vul-products.js', [
  ["id: 'equitable-vul-optimizer',",       "id: 'equitable-vul-optimizer',\n    carrierId: 'equitable',", 1],
  ["id: 'prudential-vul-protector-2018',", "id: 'prudential-vul-protector-2018',\n    carrierId: 'prudential',", 1],
  ["id: 'nyliac-corpexec-vul-ii',",        "id: 'nyliac-corpexec-vul-ii',\n    carrierId: 'new-york-life',", 1],
]);

console.log('done');
