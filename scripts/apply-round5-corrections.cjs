#!/usr/bin/env node
/**
 * Round 5 Corrections — Apply verified rates from annuityeducator.com
 * comprehensive scrape (48 products across 13 carriers, February 2026)
 *
 * Products corrected:
 *   1.  Lincoln OptiBlend 7 — cap 9.00→8.55, trigger 6.50→7.30, add fixed 3.90
 *   2.  Lincoln OptiBlend 5 — cap 7.25→8.50, trigger 5.50→7.25, add fixed 3.90
 *   3.  Athene AccuMax 7 — complete overhaul: new strategies, bonus 5→0, min 25K→10K
 *   4.  Nationwide New Heights Select 12 — add GS New Horizons/SG Macro/NYSE Zebra
 *   5.  NAC BenefitSolutions — cap 6.25→5.0, complete strategy overhaul
 *   6.  NAC PrimePath Pro 10 — cap 8.75→7.25, add Morgan Stanley strategies
 *   7.  NAC VersaChoice — cap 6.75→8.80, complete strategy overhaul
 *   8.  F&G Prosperity Elite 7 Enhancement — cap 6.50→6.25, fix PRs, add fixed 3.75
 *   9.  F&G Prosperity Elite 10 Enhancement — cap 6.75→6.50, fix PRs, add fixed 3.75
 *   10. F&G Prosperity Elite 14 Enhancement — cap 7.00→6.75, fix PRs, add fixed 3.75
 *   11. Great American Safe Return — cap 7.25→6.75, bonus 5→0, add fixed 4.25
 *   12. American Equity IncomeShield 10 — cap 7.75→5.75, complete overhaul
 *   13. Delaware Life Momentum 10 — cap 7.00→9.30, complete overhaul
 */

const fs = require('fs');
const path = require('path');

// ── Helpers ─────────────────────────────────────────────────────────────
function replaceProductBlock(content, productId, replaceFn) {
  const idPattern = new RegExp(`(id:\\s*["']${productId}["'])`, 'g');
  const match = idPattern.exec(content);
  if (!match) {
    console.log(`  [SKIP] Product "${productId}" not found`);
    return content;
  }
  let braceStart = match.index;
  while (braceStart > 0 && content[braceStart] !== '{') braceStart--;
  let depth = 0;
  let braceEnd = braceStart;
  for (let i = braceStart; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) { braceEnd = i + 1; break; }
    }
  }
  const oldBlock = content.slice(braceStart, braceEnd);
  const newBlock = replaceFn(oldBlock);
  if (oldBlock === newBlock) { console.log(`  [NO CHANGE] "${productId}"`); return content; }
  console.log(`  [UPDATED] "${productId}"`);
  return content.slice(0, braceStart) + newBlock + content.slice(braceEnd);
}

function addVerifiedFields(block) {
  if (!block.includes('ratesVerified')) {
    block = block.replace(/(carrierId:\s*"[^"]+",?\n)/, '$1    ratesVerified: true,\n    lastVerifiedDate: "2026-02-21",\n');
  } else {
    block = block.replace(/ratesVerified:\s*\w+/, 'ratesVerified: true');
    block = block.replace(/lastVerifiedDate:\s*"[^"]*"/, 'lastVerifiedDate: "2026-02-21"');
  }
  return block;
}

// ════════════════════════════════════════════════════════════════════════
const fiaPath = path.join(__dirname, '..', 'src', 'data', 'fia-products.js');
let fia = fs.readFileSync(fiaPath, 'utf8');

console.log('\n=== ROUND 5 FIA CORRECTIONS (13 products) ===\n');

// ── 1. Lincoln OptiBlend 7 ──────────────────────────────────────────
// Source: annuityeducator.com/reviews/lincoln-national-life-insurance-company/fixed-index/optiblend-7
// Band 2 (high band) rates: S&P cap 8.55, trigger 7.30, fixed 3.90
console.log('1. Lincoln OptiBlend 7:');
fia = replaceProductBlock(fia, 'lincoln-optiblend-7', (block) => {
  block = addVerifiedFields(block);

  // Fix surrender schedule: [8,7,6,5,4,3,2,0] → [9,8,7,6,5,4,3,0]
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.90,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.55, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.30 },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq Privia", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 113, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["S&P 500 cap 8.55% (Band 2), trigger 7.30%", "BlackRock Dynamic Allocation 200% PR", "Fixed account 3.90%", "7-year surrender, no bonus"]'
  );

  return block;
});

// ── 2. Lincoln OptiBlend 5 ──────────────────────────────────────────
// Source: annuityeducator.com/reviews/lincoln-national-life-insurance-company/fixed-index/optiblend-5
// Band 2 rates: S&P cap 8.50, trigger 7.25, fixed 3.90
console.log('2. Lincoln OptiBlend 5:');
fia = replaceProductBlock(fia, 'lincoln-optiblend-5', (block) => {
  block = addVerifiedFields(block);

  // Fix surrender schedule: [7,6,5,4,3,0] → [9,8,7,6,5,0]
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [9, 8, 7, 6, 5, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.90,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.25 },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq Privia", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 110, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["S&P 500 cap 8.50% (Band 2), trigger 7.25%", "BlackRock Dynamic Allocation 200% PR", "Fixed account 3.90%", "5-year surrender — shortest commitment"]'
  );

  return block;
});

// ── 3. Athene AccuMax 7 ─────────────────────────────────────────────
// Source: annuityeducator.com/reviews/athene-annuity-and-life-company/fixed-index/athene-accumax-7
// Unique 7-year PTP product with AI Powered Multi-Asset and Shiller CAPE
console.log('3. Athene AccuMax 7:');
fia = replaceProductBlock(fia, 'athene-accumax-7', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 5 → 0
  block = block.replace(/premiumBonus:\s*5\.0/, 'premiumBonus: 0.0');

  // Fix minimum premium: 25000 → 10000
  block = block.replace(/minimumPremium:\s*25000/, 'minimumPremium: 10000');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.10,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "AI Powered Multi-Asset", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "AI Powered Multi-Asset", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 305, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Shiller Barclays CAPE Allocator 6", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Shiller Barclays CAPE Allocator 6", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 380, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 78, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 (-10% Floor)", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 73, spread: 0, floor: -10, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["Unique 7-year PTP design — Shiller CAPE 380% PR", "AI Powered Multi-Asset 305% PR (7yr)", "No premium bonus, fixed 3.10%", "7-year surrender, $10K minimum"]'
  );

  return block;
});

// ── 4. Nationwide New Heights Select 12 ─────────────────────────────
// Source: annuityeducator.com/reviews/nationwide-life-insurance-company/fixed-index/nationwide-new-heights-select-12
// Add Goldman Sachs, SG Macro, NYSE Zebra Edge, Loomis Sayles indices
console.log('4. Nationwide New Heights Select 12:');
fia = replaceProductBlock(fia, 'nationwide-new-heights-select-12', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: rider-based, not product-based
  block = block.replace(/premiumBonus:\s*5\.0/, 'premiumBonus: 0.0');

  // Fix free withdrawal: already correct at 7
  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [10, 10, 10, 10, 10, 10, 9, 8, 7, 6, 5, 4, 0]'
  );

  const newStrategies = `indexStrategies: [
      { indexName: "Goldman Sachs New Horizons", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Goldman Sachs New Horizons", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 125, spread: 0, floor: 0, isUncapped: true },
      { indexName: "SG Macro Compass", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "SG Macro Compass", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "NYSE Zebra Edge II", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 185, spread: 0, floor: 0, isUncapped: true },
      { indexName: "NYSE Zebra Edge II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 115, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JP Morgan Mozaic II", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JP Morgan Mozaic II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 30, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 20, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Loomis Sayles Discovery", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["GS New Horizons 225% PR (3yr), SG Macro 150% PR (3yr)", "NYSE Zebra Edge II 185% PR, JP Mozaic II 160% PR", "12-year surrender, Option B (no spread) rates shown", "High Point 365 Select w/Bonus rider 1.10% fee"]'
  );

  return block;
});

// ── 5. NAC BenefitSolutions ─────────────────────────────────────────
// Source: annuityeducator.com/reviews/north-american-company-for-life-and-health/fixed-index/nac-benefitsolutions-10
// Income-focused product, rider fee 1.20%, cap 5.0, fixed 2.30
console.log('5. NAC BenefitSolutions:');
fia = replaceProductBlock(fia, 'north-american-nac-benefitsolutions', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 15 → 0 (no premium bonus per source)
  block = block.replace(/premiumBonus:\s*15\.0/, 'premiumBonus: 0.0');

  // Fix minimum premium: 25000 → 20000
  block = block.replace(/minimumPremium:\s*25000/, 'minimumPremium: 20000');

  // Fix free withdrawal: 10 → 5
  block = block.replace(/freeWithdrawalPercent:\s*10/, 'freeWithdrawalPercent: 5');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [10, 10, 9, 9, 8, 8, 7, 6, 4, 2, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*5,?\n)/, '$1    fixedAccountRate: 2.30,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.85, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Transitions 6", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Transitions 6", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["Income-focused with 1.20% rider fee", "S&P 500 cap 5.00%, Monthly Sum 1.85%", "Fidelity MFY 100% PR, MS Dynamic Global 100% PR", "Fixed 2.30%, $20K minimum, 5% free withdrawal"]'
  );

  return block;
});

// ── 6. NAC PrimePath Pro 10 ─────────────────────────────────────────
// Source: annuityeducator.com/reviews/north-american-company-for-life-and-health/fixed-index/nac-primepath-pro-10
// Cap 7.25, fixed 3.15, MS Dynamic strategies, free withdrawal 7%
console.log('6. NAC PrimePath Pro 10:');
fia = replaceProductBlock(fia, 'nac-primepath-pro-10', (block) => {
  block = addVerifiedFields(block);

  // Fix minimum premium: 10000 → 20000
  block = block.replace(/minimumPremium:\s*10000/, 'minimumPremium: 20000');

  // Fix free withdrawal: 10 → 7
  block = block.replace(/freeWithdrawalPercent:\s*10/, 'freeWithdrawalPercent: 7');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [10, 10, 10, 10, 10, 9, 8, 7, 6, 4, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*7,?\n)/, '$1    fixedAccountRate: 3.15,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.20, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 25, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Contribution", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Contribution", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 170, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER Enhanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER Enhanced", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 190, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global Enhanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 170, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global Enhanced", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 240, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["S&P 500 cap 7.25%, Monthly Sum 2.20%", "MS Dynamic Global Enhanced 170/240% PR", "S&P MARC 5% Enhanced 160/225% PR", "Fixed 3.15%, 7% free withdrawal, $20K minimum"]'
  );

  return block;
});

// ── 7. NAC VersaChoice ──────────────────────────────────────────────
// Source: annuityeducator.com/reviews/north-american-company-for-life-and-health/fixed-index/nac-versachoice-10
// Cap 8.80, fixed 3.10, complete strategy overhaul
console.log('7. NAC VersaChoice:');
fia = replaceProductBlock(fia, 'nac-versachoice', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 8 → 0 (not shown in source)
  block = block.replace(/premiumBonus:\s*8\.0/, 'premiumBonus: 0.0');

  // Fix minimum premium: 10000 → 20000
  block = block.replace(/minimumPremium:\s*10000/, 'minimumPremium: 20000');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [10, 10, 9, 9, 8, 8, 7, 6, 4, 2, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.10,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.80, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.90, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 30, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 185, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Enhanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 175, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Enhanced", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 175, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 170, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["S&P 500 cap 8.80% — highest in NAC lineup", "Fidelity MFY 170/250% PR, MS Enhanced 175/250% PR", "Fixed 3.10%, no bonus, $20K minimum", "Versatile accumulation + income product"]'
  );

  return block;
});

// ── 8. F&G Prosperity Elite 7 Enhancement ───────────────────────────
// Source: annuityeducator.com/reviews/fidelity-guaranty-life-insurance-company/fixed-index/prosperity-elite-7-enhancement
console.log('8. F&G Prosperity Elite 7 Enhancement:');
fia = replaceProductBlock(fia, 'fg-prosperity-elite-7-enhancement', (block) => {
  block = addVerifiedFields(block);

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.75,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.25 },
      { indexName: "Gold", creditingMethod: "Annual Point-to-Point", capRate: 7.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "GS Global Factor", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 255, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 240, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 190, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["4% premium bonus, GMDB rider 0.60% fee", "S&P 500 cap 6.25%, Gold cap 7.75%", "GS Global Factor 145/255% PR, CIBC 140/240% PR", "Fixed 3.75%, 7-year surrender"]'
  );

  return block;
});

// ── 9. F&G Prosperity Elite 10 Enhancement ──────────────────────────
// Source: annuityeducator.com/reviews/fidelity-guaranty-life-insurance-company/fixed-index/prosperity-elite-10-enhancement
console.log('9. F&G Prosperity Elite 10 Enhancement:');
fia = replaceProductBlock(fia, 'fg-prosperity-elite-10-enhancement', (block) => {
  block = addVerifiedFields(block);

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.75,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.30, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.50 },
      { indexName: "Gold", creditingMethod: "Annual Point-to-Point", capRate: 8.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "GS Global Factor", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 260, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 245, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 195, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["6% premium bonus, GMDB rider 0.60% fee", "S&P 500 cap 6.50%, Gold cap 8.25%", "GS Global Factor 150/260% PR, CIBC 145/245% PR", "Fixed 3.75%, 10-year surrender"]'
  );

  return block;
});

// ── 10. F&G Prosperity Elite 14 Enhancement ─────────────────────────
// Source: annuityeducator.com/reviews/fidelity-guaranty-life-insurance-company/fixed-index/prosperity-elite-14-enhancement
console.log('10. F&G Prosperity Elite 14 Enhancement:');
fia = replaceProductBlock(fia, 'fg-prosperity-elite-14-enhancement', (block) => {
  block = addVerifiedFields(block);

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.75,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.35, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.75 },
      { indexName: "Gold", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "GS Global Factor", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 155, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 265, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["7% premium bonus, GMDB rider 0.60% fee", "S&P 500 cap 6.75%, Gold cap 8.50%", "GS Global Factor 155/265% PR, CIBC 150/250% PR", "Fixed 3.75%, 14-year surrender — highest PRs"]'
  );

  return block;
});

// ── 11. Great American Safe Return ──────────────────────────────────
// Source: annuityeducator.com/reviews/great-american-life-insurance-company/fixed-index/safe-return
// (MassMutual Ascend product hosted under Great American)
console.log('11. Great American Safe Return:');
fia = replaceProductBlock(fia, 'great-american-safe-return', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 5 → 0
  block = block.replace(/premiumBonus:\s*5\.0/, 'premiumBonus: 0.0');

  // Fix minimum premium: 10000 → 25000
  block = block.replace(/minimumPremium:\s*10000/, 'minimumPremium: 25000');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 4.25,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "iShares US Real Estate", creditingMethod: "Annual Point-to-Point", capRate: 10.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Average DRC", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "First Trust Barclays Edge", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["S&P 500 cap 6.75%, iShares Real Estate cap 10.00%", "First Trust Barclays Edge 145% PR", "Fixed account 4.25% — among highest available", "Income Ascender rider 1.10% fee, $25K minimum"]'
  );

  return block;
});

// ── 12. American Equity IncomeShield 10 ─────────────────────────────
// Source: annuityeducator.com/reviews/american-equity-investment-life-insurance-company/fixed-index/american-equity-incomeshield-10
// Income rider product, cap 5.75, rider fee 1.20%
console.log('12. American Equity IncomeShield 10:');
fia = replaceProductBlock(fia, 'american-equity-incomeshield-10', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 8 → 0 (income rider product, no premium bonus per source)
  block = block.replace(/premiumBonus:\s*8\.0/, 'premiumBonus: 0.0');

  // Fix minimum premium: 25000 → 5000
  block = block.replace(/minimumPremium:\s*25000/, 'minimumPremium: 5000');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.50,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.00 },
      { indexName: "S&P 500", creditingMethod: "Biennial Point-to-Point", capRate: 12.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Advantage 15%", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.00 },
      { indexName: "BlackRock Adaptive", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 165, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Adaptive", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 245, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Dividend Aristocrats", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Dividend Aristocrats", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Advantage", creditingMethod: "Annual Point-to-Point", capRate: 9.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Advantage", creditingMethod: "Biennial Point-to-Point", capRate: 25.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["Income-focused — IncomeShield LIBR rider 1.20% fee", "S&P 500 cap 5.75%, Advantage 15% trigger 7.00%", "BlackRock Adaptive 165/245% PR, Dividend Aristocrats 160/225% PR", "Fixed 3.50%, $5K minimum — lowest entry point"]'
  );

  return block;
});

// ── 13. Delaware Life Momentum 10 ───────────────────────────────────
// Source: annuityeducator.com/reviews/delaware-life/fixed-index/momentum-growth
// S&P Flexible cap 9.30, completely different strategy lineup than our DB
console.log('13. Delaware Life Momentum 10:');
fia = replaceProductBlock(fia, 'delaware-life-momentum-10', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 10 → 0 (no bonus per source)
  block = block.replace(/premiumBonus:\s*10\.0/, 'premiumBonus: 0.0');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 4.50,\n');
  }

  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.30, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq-100 Volatility Control 12%", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Aries", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 95, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock US Equity Bitcoin Balanced Risk 12%", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["S&P 500 cap 9.30% — strong accumulation", "Bitcoin-linked index: BlackRock BTC Balanced 55% PR", "Barclays Aries 95% PR, Nasdaq-100 Vol Control 70% PR", "Fixed 4.50%, no bonus, $25K minimum"]'
  );

  return block;
});

fs.writeFileSync(fiaPath, fia);
console.log('\n[DONE] FIA products updated.\n');

// Count verified
const fiaVerified = (fia.match(/ratesVerified:\s*true/g) || []).length;
const fiaTotal = (fia.match(/^\s*id:\s*"/gm) || []).length;
console.log(`FIA verified: ${fiaVerified}/${fiaTotal}`);
