// =============================================================================
// Round 12: Remove all unverified and partial products
// Keep ONLY products with ratesVerified: true
// =============================================================================
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

function filterVerifiedProducts(filePath, exportName) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Parse the array by finding product blocks
  // Strategy: use Function constructor to evaluate the JS and filter
  // Actually, safer to use regex to find product blocks and check for ratesVerified: true

  const lines = content.split('\n');
  const result = [];
  let inProduct = false;
  let productLines = [];
  let depth = 0;
  let productHasVerified = false;
  let beforeArray = [];
  let foundArrayStart = false;
  let totalProducts = 0;
  let keptProducts = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Capture everything before the array
    if (!foundArrayStart) {
      if (line.match(/export\s+const\s+\w+\s*=\s*\[/)) {
        foundArrayStart = true;
        result.push(line);
      } else {
        result.push(line);
      }
      continue;
    }

    // Check for closing of array
    if (line.match(/^\];/) && depth === 0) {
      // Flush any pending product
      if (inProduct && productLines.length > 0) {
        totalProducts++;
        if (productHasVerified) {
          keptProducts++;
          result.push(...productLines);
        }
      }
      result.push(line);
      // Copy remaining lines (if any)
      for (let j = i + 1; j < lines.length; j++) {
        result.push(lines[j]);
      }
      break;
    }

    // Track braces to find product boundaries
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;

    if (!inProduct && openBraces > 0) {
      // Starting a new product
      inProduct = true;
      productLines = [line];
      depth = openBraces - closeBraces;
      productHasVerified = line.includes('ratesVerified: true');

      if (depth <= 0) {
        // Single-line product
        totalProducts++;
        if (productHasVerified) {
          keptProducts++;
          result.push(line);
        }
        inProduct = false;
        productLines = [];
        depth = 0;
      }
      continue;
    }

    if (inProduct) {
      productLines.push(line);
      depth += openBraces - closeBraces;

      if (line.includes('ratesVerified: true')) {
        productHasVerified = true;
      }

      if (depth <= 0) {
        // End of product
        totalProducts++;
        if (productHasVerified) {
          keptProducts++;
          result.push(...productLines);
        }
        inProduct = false;
        productLines = [];
        productHasVerified = false;
      }
    } else {
      // Comment lines or whitespace between products
      // Only keep if they're associated with a verified product
      // For simplicity, keep comment lines (they'll be orphaned but harmless)
      // Actually, let's be smarter - buffer comments and only output if next product is kept
      if (line.trim().startsWith('//') || line.trim() === '') {
        // Buffer this - we'll decide when we see the next product
        productLines = [line];
        inProduct = false;
        // Check if next product is verified by peeking ahead
        let nextIsVerified = false;
        for (let j = i + 1; j < lines.length; j++) {
          if (lines[j].includes('ratesVerified: true')) {
            nextIsVerified = true;
            break;
          }
          if (lines[j].match(/^\s*{/) || lines[j].match(/id:\s*['"]/)) {
            // Found start of next product without seeing ratesVerified: true
            // Check within the product block
            let checkDepth = 0;
            for (let k = j; k < lines.length; k++) {
              if (lines[k].includes('ratesVerified: true')) {
                nextIsVerified = true;
                break;
              }
              checkDepth += (lines[k].match(/{/g) || []).length;
              checkDepth -= (lines[k].match(/}/g) || []).length;
              if (checkDepth <= 0 && k > j) break;
            }
            break;
          }
        }
        if (nextIsVerified) {
          result.push(line);
        }
        productLines = [];
      }
    }
  }

  const output = result.join('\n');
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`  ${path.basename(filePath)}: ${keptProducts}/${totalProducts} products kept`);
  return { total: totalProducts, kept: keptProducts, removed: totalProducts - keptProducts };
}

console.log('=== Round 12: Remove Unverified Products ===\n');

const fiaResult = filterVerifiedProducts(
  path.join(dataDir, 'fia-products.js'), 'fiaProducts'
);

const iulResult = filterVerifiedProducts(
  path.join(dataDir, 'iul-products.js'), 'iulProducts'
);

const rilaResult = filterVerifiedProducts(
  path.join(dataDir, 'rila-products.js'), 'rilaProducts'
);

const vaResult = filterVerifiedProducts(
  path.join(dataDir, 'va-products.js'), 'vaProducts'
);

const vulResult = filterVerifiedProducts(
  path.join(dataDir, 'vul-products.js'), 'vulProducts'
);

const totalKept = fiaResult.kept + iulResult.kept + rilaResult.kept + vaResult.kept + vulResult.kept;
const totalRemoved = fiaResult.removed + iulResult.removed + rilaResult.removed + vaResult.removed + vulResult.removed;

console.log(`\n✅ Complete: ${totalKept} verified products kept, ${totalRemoved} unverified removed`);
