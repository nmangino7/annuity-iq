#!/usr/bin/env node
// One-off correction: remove fabricated/unverifiable fund fields from subaccounts.js.
//   - sectorAllocation: templated allocations (not point-in-time sourced)
//   - riskMetrics: alpha/beta/rSquared/sortino/maxDrawdown/capture computed from category
//     defaults — invented, not sourced
//   - retailEquivalent: tied to the removed live/proxy market-data feature
// Kept: description (prospectus-style prose, asserts no number) and the labeled,
// proxy-sourced numeric returns (returnsVerified/verificationNote disclose those).
// Records are single-line with no nested braces, so `\{[^}]*\}` scopes each object safely.
const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'src', 'data', 'subaccounts.js');
let src = fs.readFileSync(p, 'utf8');

for (const field of ['retailEquivalent', 'sectorAllocation', 'riskMetrics']) {
  const re = new RegExp(`,\\s*${field}:\\s*\\{[^}]*\\}`, 'g');
  const count = (src.match(re) || []).length;
  src = src.replace(re, '');
  console.log(`removed ${count} ${field}`);
}

fs.writeFileSync(p, src);
console.log('done');
