// =============================================================================
// Round 10 Part 2: Add verification status to VA and VUL products
// Since subaccount returns have been verified, mark VA/VUL as partially verified
// =============================================================================
const fs = require('fs');
const path = require('path');

function addVerificationToProducts(filePath, productType) {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let count = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Find lines with product id definitions
    const match = line.match(/id: '([^']+)',\s*carrierId:/);
    if (match && !line.includes('ratesVerified')) {
      const productId = match[1];
      lines[i] = line.replace(
        `id: '${productId}', carrierId:`,
        `id: '${productId}', ratesVerified: 'partial', verificationNote: 'Subaccount returns verified from public fund data (Morningstar, Fidelity, Vanguard, T. Rowe Price, PIMCO, DFA). Product fees/structure unverified.', lastVerifiedDate: '2026-02-21', carrierId:`
      );
      count++;
      console.log(`  ✓ ${productId}`);
    }
  }

  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log(`\n${productType}: ${count} products marked as partially verified\n`);
  return count;
}

const vaPath = path.join(__dirname, '..', 'src', 'data', 'va-products.js');
const vulPath = path.join(__dirname, '..', 'src', 'data', 'vul-products.js');

console.log('=== VA Products ===');
const vaCount = addVerificationToProducts(vaPath, 'VA');

console.log('=== VUL Products ===');
const vulCount = addVerificationToProducts(vulPath, 'VUL');

console.log(`✅ Total: ${vaCount + vulCount} products marked as partially verified`);
