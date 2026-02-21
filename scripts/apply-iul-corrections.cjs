/**
 * Apply verified IUL S&P 500 cap rate corrections.
 * Source: lifeinsurancerecommendations.com (scraped 2026-02-21)
 */
const fs = require('fs');
const path = require('path');

const iulFile = path.join(__dirname, '..', 'src', 'data', 'iul-products.js');
let content = fs.readFileSync(iulFile, 'utf8');

// Corrections: [regex to find the specific product's S&P cap, new value]
// We need to be surgical - find the specific product block and change its S&P 500 cap

const corrections = [
  // Transamerica Financial Choice IUL: 10.25 → 9.50
  { product: 'Financial Choice IUL', carrier: 'transamerica', oldCap: 10.25, newCap: 9.50 },
  // Securian Eclipse Accumulator IUL: 11 → 10
  { product: 'Eclipse Accumulator IUL', carrier: 'securian', oldCap: 11, newCap: 10.00 },
  // Prudential PruLife Index Advantage: 10.25 → 8.75
  { product: 'PruLife Index Advantage', carrier: 'prudential', oldCap: 10.25, newCap: 8.75 },
  // John Hancock Accumulation IUL 20: 10.75 → 9.00
  { product: 'Accumulation IUL 20', carrier: 'john-hancock', oldCap: 10.75, newCap: 9.00 },
  // Pacific Life Pacific Indexed Accumulator 7: 11.25 → 8.00
  { product: 'Pacific Indexed Accumulator 7', carrier: 'pacific-life', oldCap: 11.25, newCap: 8.00 },
  // Nationwide IUL Protector II: 8.75 → 10.25
  { product: 'IUL Protector II', carrier: 'nationwide', oldCap: 8.75, newCap: 10.25 },
  // Securian Eclipse Protector IUL: 9 → 8.50
  { product: 'Eclipse Protector IUL', carrier: 'securian', oldCap: 9, newCap: 8.50 },
  // Lincoln WealthAccelerate IUL: 11.75 → 9.50
  { product: 'WealthAccumulate IUL', carrier: 'lincoln-financial', oldCap: 11.75, newCap: 9.50 },
  // Transamerica Financial Foundation IUL II: 10.5 → 12.00
  { product: 'Financial Foundation IUL II', carrier: 'transamerica', oldCap: 10.5, newCap: 12.00 },
  // John Hancock Accumulation IUL 21: 11.25 → 9.00
  { product: 'Accumulation IUL 21', carrier: 'john-hancock', oldCap: 11.25, newCap: 9.00 },
  // Transamerica Financial Foundation IUL Plus: 10 → 12.00
  { product: 'Financial Foundation IUL Plus', carrier: 'transamerica', oldCap: 10, newCap: 12.00 },
];

let applied = 0;

for (const fix of corrections) {
  // Find the product block by name
  const nameRegex = new RegExp(`name:\\s*["'].*?${fix.product.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?["']`);
  const nameMatch = content.match(nameRegex);
  if (!nameMatch) {
    console.log(`⚠️  Could not find product: ${fix.product}`);
    continue;
  }

  const namePos = content.indexOf(nameMatch[0]);
  // Look within ~2000 chars after the name for S&P 500 cap rate
  const searchWindow = content.substring(namePos, namePos + 3000);

  // Find S&P 500 cap rate in indexAccounts array
  // Pattern: capRate: XX.XX followed by S&P 500, or S&P 500 followed by capRate: XX.XX
  const capPattern = new RegExp(`capRate:\\s*${String(fix.oldCap).replace('.', '\\.')}([,\\s])`);
  const capMatch = searchWindow.match(capPattern);

  if (capMatch) {
    const fullPos = namePos + searchWindow.indexOf(capMatch[0]);
    const before = content.substring(0, fullPos);
    const after = content.substring(fullPos + capMatch[0].length);
    content = before + `capRate: ${fix.newCap}${capMatch[1]}` + after;
    console.log(`✅ ${fix.product}: ${fix.oldCap} → ${fix.newCap}`);
    applied++;
  } else {
    console.log(`⚠️  Could not find capRate: ${fix.oldCap} near ${fix.product}`);
  }
}

fs.writeFileSync(iulFile, content);
console.log(`\nApplied ${applied}/${corrections.length} corrections.`);
