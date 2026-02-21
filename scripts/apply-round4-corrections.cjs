#!/usr/bin/env node
/**
 * Round 4 Corrections — Apply verified rates from annuityeducator.com
 * for F&G, Midland National, Athene, and additional products (February 2026)
 *
 * Products corrected:
 *   1. F&G Accelerator Plus 10 — cap 5.50→7.25, trigger 4.50→5.00, bonus 10→11
 *   2. MNL Endeavor 8 — cap 7.50→8.00, MARC PR 275→140, add Fidelity MFY
 *   3. Athene Performance Elite Plus 10 — BNP PR 250→130, bonus 18→22, min 25K→10K
 *   4. F&G Safe Income Advantage — cap 8.25→3.00, surrender 7→10, full overhaul
 */

const fs = require('fs');
const path = require('path');

// ── Helpers (same as round 3) ─────────────────────────────────────────
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

console.log('\n=== ROUND 4 FIA CORRECTIONS ===\n');

// ── 1. F&G Accelerator Plus 10 ──────────────────────────────────────
// Source: annuityeducator.com/reviews/fidelity-guaranty-life-insurance-company/fixed-index/accelerator-plus-10
// WITHOUT charge (base) rates: S&P cap 7.25, Monthly Sum 2.50, Trigger 5.00
console.log('1. F&G Accelerator Plus 10:');
fia = replaceProductBlock(fia, 'fg-accelerator-plus-10', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 10 → 11
  block = block.replace(/premiumBonus:\s*10\.0/, 'premiumBonus: 11.0');

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.75,\n');
  }

  // Replace strategies with verified data (WITHOUT charge = base rates)
  const newStrategies = `indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.00 },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 210, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 125, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["11% premium bonus", "S&P 500 cap 7.25% (base), 10.25% (enhanced)", "CIBC Balanced Asset 5 PR 210% (biennial)", "EGMWB rider 0.95% fee"]'
  );

  return block;
});

// ── 2. MNL Endeavor 8 ────────────────────────────────────────────────
// Source: annuityeducator.com/reviews/midland-national-life-insurance-company/fixed-index/mnl-endeavor-8
// S&P cap 8.00 (high band), MARC PR 140, Fidelity MFY added
console.log('2. MNL Endeavor 8:');
fia = replaceProductBlock(fia, 'midland-national-endeavor-8', (block) => {
  block = addVerifiedFields(block);

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 3.30,\n');
  }

  // Replace strategies with verified data (HIGH band)
  const newStrategies = `indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.05,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 35,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fidelity Multifactor Yield 5% ER",
        creditingMethod: "Biennial Point-to-Point",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["S&P 500 cap 8.00%, Monthly Sum 2.05%", "S&P MARC 5% ER 140% PR, Fidelity MFY 205% PR (biennial)", "8-year surrender, $20K minimum", "Inverse Performance Trigger 9.00%"]'
  );

  return block;
});

// ── 3. Athene Performance Elite Plus 10 ──────────────────────────────
// Source: annuityeducator.com/reviews/athene-annuity-and-life-company/fixed-index/athene-performance-elite-10-plus
// BNP PR 250→130 (without charge), bonus 18→22, min 25K→10K
console.log('3. Athene Performance Elite Plus 10:');
fia = replaceProductBlock(fia, 'athene-performance-elite-plus-10', (block) => {
  block = addVerifiedFields(block);

  // Fix premium bonus: 18 → 22
  block = block.replace(/premiumBonus:\s*18\.0/, 'premiumBonus: 22.0');

  // Fix minimum premium: 25000 → 10000
  block = block.replace(/minimumPremium:\s*25000/, 'minimumPremium: 10000');

  // Fix surrender schedule to match verified data
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [12, 12, 12, 11, 10, 9, 8, 7, 6, 4, 0]'
  );

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 2.90,\n');
  }

  // Replace strategies with verified data (WITHOUT strategy charge = base rates)
  const newStrategies = `indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi-Asset",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "AI Powered US Equity",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 107,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 77,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["22% premium bonus — among highest in industry", "S&P cap 5.50% (base), 8.00% (enhanced, 0.95% fee)", "BNP Paribas Multi-Asset 130% PR (base)", "Fixed account 2.90%"]'
  );

  return block;
});

// ── 4. F&G Safe Income Advantage ─────────────────────────────────────
// Source: annuityeducator.com/reviews/fidelity-guaranty-life-insurance-company/fixed-index/safe-income-advantage
// S&P cap 8.25→3.00 (MAJOR correction), surrender 7→10
console.log('4. F&G Safe Income Advantage:');
fia = replaceProductBlock(fia, 'fg-safe-income-advantage', (block) => {
  block = addVerifiedFields(block);

  // Fix surrender period: 7 → 10
  block = block.replace(/surrenderPeriod:\s*7/, 'surrenderPeriod: 10');

  // Fix surrender schedule
  block = block.replace(
    /surrenderSchedule:\s*\[[^\]]*\]/,
    'surrenderSchedule: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0]'
  );

  // Fix minimum premium
  block = block.replace(/minimumPremium:\s*15000/, 'minimumPremium: 10000');

  // Fix premium bonus — no bonus for this product
  block = block.replace(/premiumBonus:\s*4\.0/, 'premiumBonus: 0.0');

  // Add fixed account rate
  if (!block.includes('fixedAccountRate')) {
    block = block.replace(/(freeWithdrawalPercent:\s*10,?\n)/, '$1    fixedAccountRate: 2.50,\n');
  }

  // Replace strategies with verified data
  const newStrategies = `indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 1.20,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 2.25
      },
      {
        indexName: "CIBC Balanced Asset 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BlackRock Market Advantage",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ]`;
  block = block.replace(/indexStrategies:\s*\[[\s\S]*?\n\s*\]/, newStrategies);

  block = block.replace(
    /highlights:\s*\[[^\]]*\]/,
    'highlights: ["Income-focused design (S&P cap 3.00%)", "EGMWB rider included (1.15% fee)", "CIBC Balanced Asset 5 PR 120%", "10-year surrender, $10K minimum"]'
  );

  return block;
});

fs.writeFileSync(fiaPath, fia);
console.log('\n[DONE] FIA products updated.\n');

// Count verified
const fiaVerified = (fia.match(/ratesVerified:\s*true/g) || []).length;
const fiaTotal = (fia.match(/^\s*id:\s*"/gm) || []).length;
console.log(`FIA verified: ${fiaVerified}/${fiaTotal}`);
