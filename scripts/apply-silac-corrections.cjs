/**
 * apply-silac-corrections.cjs
 *
 * Updates SILAC FIA product rates in fia-products.js to match the
 * verified SILAC rate sheet dated December 10, 2025 (Best State Tier / Column 1).
 *
 * Usage:  node scripts/apply-silac-corrections.cjs
 */

const fs = require('fs');
const path = require('path');

const FIA_PATH = path.resolve(__dirname, '..', 'src', 'data', 'fia-products.js');

// ─── Verified rates from SILAC rate sheet (2025-12-10) ───────────────────────
// Keys match the strategy type; values are the rate numbers.
// "spCap"        → S&P 500 Annual P2P with Cap → capRate
// "spPR"         → S&P 500 Annual P2P with Participation Rate → participationRate
// "duoSwiftPR"   → S&P 500 Duo Swift → participationRate
// "monthlyCap"   → S&P 500 Monthly Sum with Cap → capRate
// "monthlyAvgPR" → S&P 500 Monthly Average with PR → participationRate
// "bloombergPR"  → Bloomberg Versa 10 → participationRate
// "atlas5PR"     → Barclays Atlas 5 → participationRate
// "ravenPackPR"  → S&P 500 RavenPack AI → participationRate
// "nasdaqPR"     → Nasdaq Generations 5 → participationRate
// "fixedRate"    → Fixed Rate → fixedRate

const SILAC_RATES = {
  // ── ACCUMULATION (no bonus) ──
  'silac-teton-5': {
    spCap: 7.75, spPR: 50, duoSwiftPR: 67, monthlyCap: 2.65,
    monthlyAvgPR: 90, bloombergPR: null, atlas5PR: 170, ravenPackPR: 185,
    nasdaqPR: 175, fixedRate: 4.00
  },
  'silac-teton-7': {
    spCap: 7.75, spPR: 50, duoSwiftPR: 67, monthlyCap: 2.65,
    monthlyAvgPR: 90, bloombergPR: null, atlas5PR: 170, ravenPackPR: 185,
    nasdaqPR: 175, fixedRate: 4.25
  },
  'silac-teton-10': {
    spCap: 7.75, spPR: 50, duoSwiftPR: 67, monthlyCap: 2.65,
    monthlyAvgPR: 90, bloombergPR: null, atlas5PR: 170, ravenPackPR: 185,
    nasdaqPR: 175, fixedRate: 4.25
  },
  'silac-teton-14': {
    spCap: 7.75, spPR: 50, duoSwiftPR: null, monthlyCap: 2.75,
    monthlyAvgPR: 90, bloombergPR: null, atlas5PR: 175, ravenPackPR: 185,
    nasdaqPR: 175, fixedRate: 4.25
  },
  'silac-denali-7': {
    spCap: 8.50, spPR: 55, duoSwiftPR: 75, monthlyCap: 2.75,
    monthlyAvgPR: 100, bloombergPR: null, atlas5PR: 190, ravenPackPR: 200,
    nasdaqPR: 195, fixedRate: 4.50
  },
  'silac-denali-10': {
    spCap: 9.50, spPR: 60, duoSwiftPR: 82, monthlyCap: 3.25,
    monthlyAvgPR: 105, bloombergPR: null, atlas5PR: 205, ravenPackPR: 220,
    nasdaqPR: 210, fixedRate: 4.75
  },
  'silac-denali-14': {
    spCap: 9.75, spPR: 62, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 210, ravenPackPR: 225,
    nasdaqPR: 215, fixedRate: 5.00
  },

  // ── ACCUMULATION WITH PREMIUM BONUS ──
  'silac-teton-bonus-5': {
    spCap: 5.75, spPR: 40, duoSwiftPR: 52, monthlyCap: 2.15,
    monthlyAvgPR: null, bloombergPR: 65, atlas5PR: 135, ravenPackPR: 145,
    nasdaqPR: 140, fixedRate: 2.75
  },
  'silac-teton-bonus-7': {
    spCap: 6.00, spPR: 40, duoSwiftPR: 55, monthlyCap: 2.15,
    monthlyAvgPR: null, bloombergPR: 67, atlas5PR: 135, ravenPackPR: 145,
    nasdaqPR: 140, fixedRate: 2.75
  },
  'silac-teton-bonus-10': {
    spCap: 6.00, spPR: 40, duoSwiftPR: 55, monthlyCap: 2.15,
    monthlyAvgPR: null, bloombergPR: 67, atlas5PR: 135, ravenPackPR: 145,
    nasdaqPR: 140, fixedRate: 2.75
  },
  'silac-teton-bonus-14': {
    spCap: 6.00, spPR: null, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 140, ravenPackPR: 150,
    nasdaqPR: 140, fixedRate: 3.00
  },
  'silac-denali-bonus-7': {
    spCap: 6.25, spPR: 42, duoSwiftPR: null, monthlyCap: 2.25,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 145, ravenPackPR: 155,
    nasdaqPR: 150, fixedRate: 3.25
  },
  'silac-denali-bonus-10': {
    spCap: 6.75, spPR: 45, duoSwiftPR: null, monthlyCap: 2.25,
    monthlyAvgPR: 80, bloombergPR: null, atlas5PR: 155, ravenPackPR: 165,
    nasdaqPR: 160, fixedRate: 3.50
  },
  'silac-denali-bonus-14': {
    spCap: 7.00, spPR: null, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 160, ravenPackPR: 170,
    nasdaqPR: 165, fixedRate: 3.50
  },

  // ── LIFETIME INCOME (Evolve) ──
  'silac-evolve-7': {
    spCap: 8.50, spPR: 55, duoSwiftPR: 75, monthlyCap: 2.75,
    monthlyAvgPR: 100, bloombergPR: null, atlas5PR: 190, ravenPackPR: 200,
    nasdaqPR: 195, fixedRate: 4.50
  },
  'silac-evolve-10': {
    spCap: 9.50, spPR: 60, duoSwiftPR: 82, monthlyCap: 3.25,
    monthlyAvgPR: 105, bloombergPR: 100, atlas5PR: 205, ravenPackPR: 220,
    nasdaqPR: 210, fixedRate: 4.75
  },
  'silac-evolve-14': {
    spCap: 9.75, spPR: null, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 210, ravenPackPR: 225,
    nasdaqPR: 215, fixedRate: 5.00
  },

  // ── ENHANCED WEALTH TRANSFER (Vega — no Benefit Bonus) ──
  'silac-vega-7': {
    spCap: 4.75, spPR: 32, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 110, ravenPackPR: 120,
    nasdaqPR: 115, fixedRate: 2.25
  },
  'silac-vega-10': {
    spCap: 4.75, spPR: 32, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 110, ravenPackPR: 120,
    nasdaqPR: 115, fixedRate: 2.25
  },
  'silac-vega-14': {
    spCap: 4.50, spPR: null, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 105, ravenPackPR: 110,
    nasdaqPR: 105, fixedRate: 2.25
  },

  // ── ENHANCED WEALTH TRANSFER WITH BENEFIT BONUS (Vega Bonus) ──
  'silac-vega-bonus-7': {
    spCap: 5.00, spPR: 35, duoSwiftPR: 45, monthlyCap: 2.00,
    monthlyAvgPR: 60, bloombergPR: 57, atlas5PR: 115, ravenPackPR: 125,
    nasdaqPR: 120, fixedRate: 2.25
  },
  'silac-vega-bonus-10': {
    spCap: 4.50, spPR: 30, duoSwiftPR: null, monthlyCap: 1.75,
    monthlyAvgPR: 55, bloombergPR: null, atlas5PR: 100, ravenPackPR: 110,
    nasdaqPR: 105, fixedRate: 2.00
  },
  'silac-vega-bonus-14': {
    spCap: 3.50, spPR: null, duoSwiftPR: null, monthlyCap: null,
    monthlyAvgPR: null, bloombergPR: null, atlas5PR: 87, ravenPackPR: 92,
    nasdaqPR: 90, fixedRate: 2.00
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Find the character range for a product block starting from `id: "productId"`.
 * We look for the enclosing `{` before that line and then balance braces
 * to find the closing `}`.
 */
function findProductBlock(content, productId) {
  const idPattern = `id: "${productId}"`;
  const idIdx = content.indexOf(idPattern);
  if (idIdx === -1) return null;

  // Walk backwards to the opening `{`
  let braceStart = idIdx;
  while (braceStart > 0 && content[braceStart] !== '{') braceStart--;

  // Walk forward from `{` balancing braces
  let depth = 0;
  let braceEnd = braceStart;
  for (let i = braceStart; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) { braceEnd = i; break; }
    }
  }

  return { start: braceStart, end: braceEnd + 1, text: content.slice(braceStart, braceEnd + 1) };
}

/**
 * Inside a product block, find a specific strategy object and update a rate field.
 * Returns the updated block text and a description of the change, or null if not found.
 *
 * strategyMatch: object with fields to match (indexName, creditingMethod substring)
 * field: the JS field name to update (capRate, participationRate, fixedRate)
 * newValue: the new numeric value
 */
function updateStrategyRate(blockText, strategyMatch, field, newValue) {
  // Find the strategy object that contains both the indexName and creditingMethod
  const { indexName, creditingMethod } = strategyMatch;

  // We need to find strategy objects that contain both the indexName and creditingMethod
  // Strategy objects are delimited by { ... } within the indexStrategies array

  // Find all strategy blocks
  const stratIdx = blockText.indexOf('indexStrategies:');
  if (stratIdx === -1) return null;

  // Find the opening [ of the array
  let arrStart = blockText.indexOf('[', stratIdx);
  if (arrStart === -1) return null;

  // Find matching ] by balancing brackets
  let depth = 0;
  let arrEnd = arrStart;
  for (let i = arrStart; i < blockText.length; i++) {
    if (blockText[i] === '[') depth++;
    else if (blockText[i] === ']') {
      depth--;
      if (depth === 0) { arrEnd = i; break; }
    }
  }

  const arrText = blockText.slice(arrStart, arrEnd + 1);

  // Find individual strategy objects within the array
  // Each strategy is a { ... } block
  let searchFrom = 0;
  while (searchFrom < arrText.length) {
    const objStart = arrText.indexOf('{', searchFrom);
    if (objStart === -1) break;

    // Balance braces
    let d = 0;
    let objEnd = objStart;
    for (let i = objStart; i < arrText.length; i++) {
      if (arrText[i] === '{') d++;
      else if (arrText[i] === '}') {
        d--;
        if (d === 0) { objEnd = i; break; }
      }
    }

    const objText = arrText.slice(objStart, objEnd + 1);

    // Check if this strategy matches our criteria
    const hasIndex = objText.includes(`indexName: "${indexName}"`);
    const hasMethod = objText.includes(`creditingMethod: "${creditingMethod}"`);

    if (hasIndex && hasMethod) {
      // Found the right strategy. Now update the field.
      const fieldPattern = new RegExp(`(${field}:\\s*)([\\d.]+|null)`);
      const match = objText.match(fieldPattern);
      if (!match) {
        return null;
      }

      const oldValue = match[2];
      const formattedNew = formatRate(newValue);

      if (oldValue === formattedNew) {
        return { blockText, changed: false, oldValue, newValue: formattedNew, desc: `${indexName} / ${creditingMethod} / ${field}: already ${formattedNew} (no change)` };
      }

      const updatedObj = objText.replace(fieldPattern, `$1${formattedNew}`);
      const updatedArr = arrText.slice(0, objStart) + updatedObj + arrText.slice(objEnd + 1);
      const updatedBlock = blockText.slice(0, arrStart) + updatedArr + blockText.slice(arrEnd + 1);

      return {
        blockText: updatedBlock,
        changed: true,
        oldValue,
        newValue: formattedNew,
        desc: `${indexName} / ${creditingMethod} / ${field}: ${oldValue} -> ${formattedNew}`
      };
    }

    searchFrom = objEnd + 1;
  }

  return null; // strategy not found in this product
}

function formatRate(val) {
  if (val === null) return 'null';
  // Format: always show at least one decimal for consistency
  if (Number.isInteger(val)) {
    // Check if it's a whole number that looks better with .0 or .00
    if (val >= 10) return String(val); // participation rates like 50, 100, etc
    return val.toFixed(2); // small values like 4.00
  }
  // If it has decimals, show them
  const s = String(val);
  // If value < 10, ensure at least 2 decimal places
  if (val < 10 && !s.includes('.') ) return val.toFixed(2);
  if (val < 10 && s.split('.')[1] && s.split('.')[1].length === 1) return val.toFixed(2);
  return s;
}

/**
 * Add ratesVerified and lastVerifiedDate after carrierId line if not present.
 */
function addVerifiedFields(blockText) {
  if (blockText.includes('ratesVerified:')) {
    // Update existing
    let updated = blockText.replace(
      /ratesVerified:\s*(true|false)/,
      'ratesVerified: true'
    );
    updated = updated.replace(
      /lastVerifiedDate:\s*"[^"]*"/,
      'lastVerifiedDate: "2025-12-10"'
    );
    return updated;
  }

  // Insert after carrierId line
  const carrierIdMatch = blockText.match(/carrierId:\s*"[^"]*",?\s*\n/);
  if (carrierIdMatch) {
    const insertPos = carrierIdMatch.index + carrierIdMatch[0].length;
    const indent = '    '; // match existing indentation
    const newLines = `${indent}ratesVerified: true,\n${indent}lastVerifiedDate: "2025-12-10",\n`;
    return blockText.slice(0, insertPos) + newLines + blockText.slice(insertPos);
  }

  return blockText;
}

/**
 * Also update lastRateUpdate to "2025-12-10"
 */
function updateLastRateUpdate(blockText) {
  return blockText.replace(
    /lastRateUpdate:\s*"[^"]*"/,
    'lastRateUpdate: "2025-12-10"'
  );
}


// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log('Reading fia-products.js...');
  let content = fs.readFileSync(FIA_PATH, 'utf-8');
  console.log(`File size: ${content.length} characters\n`);

  let totalChanges = 0;
  let totalSkipped = 0;
  let totalNotFound = 0;

  for (const [productId, rates] of Object.entries(SILAC_RATES)) {
    console.log(`\n${'='.repeat(70)}`);
    console.log(`Processing: ${productId}`);
    console.log('='.repeat(70));

    const block = findProductBlock(content, productId);
    if (!block) {
      console.log(`  *** PRODUCT NOT FOUND IN FILE: ${productId} ***`);
      totalNotFound++;
      continue;
    }

    let currentBlock = block.text;

    // Define the strategy updates to apply
    const updates = [];

    // 1. S&P 500 Annual P2P Cap
    if (rates.spCap !== null) {
      updates.push({
        match: { indexName: 'S&P 500', creditingMethod: 'Annual Point-to-Point with Cap' },
        field: 'capRate',
        value: rates.spCap
      });
    }

    // 2. S&P 500 Annual P2P Participation Rate
    if (rates.spPR !== null) {
      updates.push({
        match: { indexName: 'S&P 500', creditingMethod: 'Annual Point-to-Point with Participation Rate' },
        field: 'participationRate',
        value: rates.spPR
      });
    }

    // 3. S&P 500 Duo Swift
    if (rates.duoSwiftPR !== null) {
      updates.push({
        match: { indexName: 'S&P 500 Duo Swift', creditingMethod: 'Annual Point-to-Point with Participation Rate' },
        field: 'participationRate',
        value: rates.duoSwiftPR
      });
    }

    // 4. Monthly Sum with Cap
    if (rates.monthlyCap !== null) {
      updates.push({
        match: { indexName: 'S&P 500', creditingMethod: 'Monthly Sum with Cap' },
        field: 'capRate',
        value: rates.monthlyCap
      });
    }

    // 5. Monthly Average with Participation Rate
    if (rates.monthlyAvgPR !== null) {
      updates.push({
        match: { indexName: 'S&P 500', creditingMethod: 'Monthly Average with Participation Rate' },
        field: 'participationRate',
        value: rates.monthlyAvgPR
      });
    }

    // 6. Bloomberg Versa 10
    if (rates.bloombergPR !== null) {
      updates.push({
        match: { indexName: 'Bloomberg Versa 10', creditingMethod: 'Annual Point-to-Point with Participation Rate' },
        field: 'participationRate',
        value: rates.bloombergPR
      });
    }

    // 7. Barclays Atlas 5
    updates.push({
      match: { indexName: 'Barclays Atlas 5', creditingMethod: 'Annual Point-to-Point with Participation Rate' },
      field: 'participationRate',
      value: rates.atlas5PR
    });

    // 8. S&P 500 RavenPack AI
    updates.push({
      match: { indexName: 'S&P 500 RavenPack AI', creditingMethod: 'Annual Point-to-Point with Participation Rate' },
      field: 'participationRate',
      value: rates.ravenPackPR
    });

    // 9. Nasdaq Generations 5
    updates.push({
      match: { indexName: 'Nasdaq Generations 5', creditingMethod: 'Annual Point-to-Point with Participation Rate' },
      field: 'participationRate',
      value: rates.nasdaqPR
    });

    // 10. Fixed Rate
    updates.push({
      match: { indexName: 'Fixed Rate', creditingMethod: 'Fixed' },
      field: 'fixedRate',
      value: rates.fixedRate
    });

    // Apply each update
    for (const upd of updates) {
      const result = updateStrategyRate(currentBlock, upd.match, upd.field, upd.value);
      if (result === null) {
        console.log(`  [NOT FOUND] ${upd.match.indexName} / ${upd.match.creditingMethod} / ${upd.field} — strategy not in product`);
        totalNotFound++;
      } else if (result.changed) {
        currentBlock = result.blockText;
        console.log(`  [UPDATED]   ${result.desc}`);
        totalChanges++;
      } else {
        console.log(`  [OK]        ${result.desc}`);
        totalSkipped++;
      }
    }

    // Add verified fields
    const beforeVerified = currentBlock;
    currentBlock = addVerifiedFields(currentBlock);
    currentBlock = updateLastRateUpdate(currentBlock);
    if (currentBlock !== beforeVerified) {
      console.log(`  [META]      Added/updated ratesVerified, lastVerifiedDate, lastRateUpdate`);
    }

    // Replace the block in the full content
    content = content.slice(0, block.start) + currentBlock + content.slice(block.end);
  }

  // Write the file
  fs.writeFileSync(FIA_PATH, content, 'utf-8');

  console.log(`\n${'='.repeat(70)}`);
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`  Rates updated:     ${totalChanges}`);
  console.log(`  Already correct:   ${totalSkipped}`);
  console.log(`  Not found/skipped: ${totalNotFound}`);
  console.log(`\nFile written: ${FIA_PATH}`);
}

main();
