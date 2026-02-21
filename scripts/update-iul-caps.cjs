/**
 * Cross-reference verified IUL cap rates against our product data
 * and report discrepancies.
 */
const fs = require('fs');
const path = require('path');

const iulFile = path.join(__dirname, '..', 'src', 'data', 'iul-products.js');
const content = fs.readFileSync(iulFile, 'utf8');

// Verified cap rates from lifeinsurancerecommendations.com (scraped 2026-02-21)
// These are S&P 500 Annual Point-to-Point cap rates
const verifiedCaps = {
  // carrier ID → { productNameMatch → capRate }
  'nationwide': {
    'Accumulator II': 10.25,
    'Protector II': 10.25,
  },
  'lincoln-financial': {
    'WealthAccumulate': 9.50,
  },
  'transamerica': {
    'Financial Foundation': 12.00,
    'Financial Choice': 9.50,
  },
  'pacific-life': {
    'Horizon': 9.00,
    'Trident': 8.50,
    'Indexed Accumulator': 8.00,
  },
  'penn-mutual': {
    'Accumulation Indexed': 10.00,
    'Builder Flex': 8.00,
  },
  'john-hancock': {
    'Accumulation IUL': 9.00,
  },
  'prudential': {
    'Index Advantage': 8.75,
    'Momentum': 10.25,
  },
  'protective': {
    'Indexed Choice': 9.00,
  },
  'securian': {
    'Eclipse Accumulator': 10.00,
    'Eclipse Protector': 8.50,
  },
  'symetra': {
    'Accumulator Ascent': 10.50,
    'Protector IUL': 8.75,
  },
};

// Now scan the file for each carrier's products and check cap rates
let discrepancies = [];
let matches = 0;

// Parse products from the file - look for carrierId and S&P 500 cap rates
const productBlocks = content.split(/\n\s*\/\//);

for (const block of productBlocks) {
  // Find carrierId
  const carrierMatch = block.match(/carrierId:\s*["']([^"']+)["']/);
  if (!carrierMatch) continue;
  const carrierId = carrierMatch[1];

  if (!verifiedCaps[carrierId]) continue;

  // Find product name
  const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
  if (!nameMatch) continue;
  const productName = nameMatch[1];

  // Check against our verified caps
  for (const [matchStr, expectedCap] of Object.entries(verifiedCaps[carrierId])) {
    if (productName.includes(matchStr)) {
      // Find S&P 500 cap rate in this product's index accounts
      const capMatch = block.match(/indexName:\s*["']S&P 500["'][^}]*?capRate:\s*([\d.]+)/);
      const capMatch2 = block.match(/capRate:\s*([\d.]+)[^}]*?indexName:\s*["']S&P 500["']/);

      let currentCap = null;
      if (capMatch) currentCap = parseFloat(capMatch[1]);
      else if (capMatch2) currentCap = parseFloat(capMatch2[1]);

      if (currentCap !== null) {
        if (Math.abs(currentCap - expectedCap) > 0.01) {
          discrepancies.push({
            carrier: carrierId,
            product: productName,
            currentCap,
            verifiedCap: expectedCap,
            diff: (currentCap - expectedCap).toFixed(2)
          });
        } else {
          matches++;
        }
      }
    }
  }
}

console.log('=== IUL CAP RATE VERIFICATION RESULTS ===\n');
console.log(`Matches: ${matches} products have correct cap rates`);
console.log(`Discrepancies: ${discrepancies.length} products need correction\n`);

if (discrepancies.length > 0) {
  console.log('Products needing correction:');
  discrepancies.forEach(d => {
    console.log(`  ${d.carrier} / ${d.product}`);
    console.log(`    Current: ${d.currentCap}%  →  Verified: ${d.verifiedCap}%  (diff: ${d.diff}%)`);
  });
}
