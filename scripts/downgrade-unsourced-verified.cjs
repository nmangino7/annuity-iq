#!/usr/bin/env node
// One-off correction: 4 FIA records were marked ratesVerified:true with a date but
// NO cited source. A date is not evidence, so the "Verified" badge is unsubstantiated.
// Downgrade them to ratesVerified:false (honest "Unverified" — rates still shown).
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'fia-products.js');
const ids = ['delaware-life-momentum-10', 'ameritas-accumulation-7', 'brighthouse-shield-level-pay-plus', 'delaware-life-target-growth-10'];

let src = fs.readFileSync(file, 'utf8');
let n = 0;
for (const id of ids) {
  const idx = src.search(new RegExp(`id:\\s*['"]${id}['"]`));
  if (idx < 0) { console.warn('not found:', id); continue; }
  const rv = src.indexOf('ratesVerified: true', idx);
  if (rv < 0) { console.warn('no ratesVerified:true after', id); continue; }
  src = src.slice(0, rv) + 'ratesVerified: false' + src.slice(rv + 'ratesVerified: true'.length);
  n++;
}
fs.writeFileSync(file, src);
console.log(`Downgraded ${n} unsourced FIA record(s) to ratesVerified:false`);
