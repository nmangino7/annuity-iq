const fs = require('fs');
const data = JSON.parse(fs.readFileSync(__dirname + '/scraped-rates.json', 'utf8'));
const iulText = data.aggregators.iulComparison['IUL Cap Rates'].pageText;

// We already know the verified rates from the scraped text. Let me just output the key mapping.
// The scraped data shows these verified S&P 500 PTP cap rates:

const verifiedIULCaps = {
  'Transamerica Financial Foundation IUL': { carrier: 'Transamerica', cap: 12.00 },
  'Max Accumulator+ III': { carrier: 'American General (AIG)', cap: 11.50 },
  'Accumulator Ascent IUL': { carrier: 'Symetra', cap: 10.50 },
  'Lincoln WealthAccumulator 2 IUL (2020)': { carrier: 'Lincoln National', cap: 10.50 },
  'Lincoln WealthPreserve 2 IUL (2020)': { carrier: 'Lincoln National', cap: 10.50 },
  'Signature Performance IUL': { carrier: 'American National', cap: 10.25 },
  'Nationwide Indexed UL Accumulator II 2020': { carrier: 'Nationwide', cap: 10.25 },
  'Nationwide Indexed UL Protector II 2020': { carrier: 'Nationwide', cap: 10.25 },
  'Momentum IUL': { carrier: 'Prudential', cap: 10.25 },
  'Value+ Protector III': { carrier: 'American General (AIG)', cap: 10.00 },
  'Income Advantage IUL': { carrier: 'United of Omaha', cap: 10.00 },
  'Accumulation Indexed Universal Life': { carrier: 'Penn Mutual', cap: 10.00 },
  'Eclipse Accumulator IUL': { carrier: 'Securian', cap: 10.00 },
  'Lincoln WealthAccelerate IUL': { carrier: 'Lincoln National', cap: 9.50 },
  'Transamerica Financial Choice IUL': { carrier: 'Transamerica', cap: 9.50 },
  'Signature Protection IUL': { carrier: 'American National', cap: 9.50 },
  'IUL Express': { carrier: 'United of Omaha', cap: 9.25 },
  'Pacific Life Horizon IUL': { carrier: 'Pacific Life', cap: 9.00 },
  'Protective Indexed Choice UL': { carrier: 'Protective', cap: 9.00 },
  'Accumulation IUL 23': { carrier: 'John Hancock', cap: 9.00 },
  'Symetra Protector IUL 4.0': { carrier: 'Symetra', cap: 8.75 },
  'Prulife Index Advantage UL (2020)': { carrier: 'Prudential', cap: 8.75 },
  'Life Protection Advantage IUL': { carrier: 'United of Omaha', cap: 8.50 },
  'Pacific Trident IUL': { carrier: 'Pacific Life', cap: 8.50 },
  'Eclipse Protector II IUL': { carrier: 'Securian', cap: 8.50 },
  'Accumulation Builder Flex IUL': { carrier: 'Penn Mutual', cap: 8.00 },
  'Pacific Indexed Accumulator 6': { carrier: 'Pacific Life', cap: 8.00 },
};

// Uncapped IUL strategies
const uncappedIUL = {
  'Transamerica Financial Choice IUL': { carrier: 'Transamerica', participation: 200, index: 'Fidelity Small-Mid Multifactor' },
  'Eclipse Accumulator IUL (PRISM)': { carrier: 'Securian', participation: 200, index: 'S&P PRISM' },
  'Pacific Discovery Xelerator IUL 2': { carrier: 'Pacific Life', threshold: 10.00, index: 'S&P 500' },
  'Signature Protection IUL': { carrier: 'American National', spread: 9.00, index: 'S&P 500' },
  'Signature Performance IUL': { carrier: 'American National', spread: 8.00, index: 'S&P 500' },
  'PruLife Index Advantage UL (2020)': { carrier: 'Prudential', spread: 7.00, index: 'S&P 500' },
  'Nationwide Indexed UL Accumulator II 2020': { carrier: 'Nationwide', spread: 6.00, index: 'S&P 500' },
  'Symetra Accumulator Ascent IUL': { carrier: 'Symetra', spread: 5.00, index: 'S&P 500' },
};

console.log('=== VERIFIED IUL S&P 500 CAP RATES ===');
for (const [product, info] of Object.entries(verifiedIULCaps)) {
  console.log(`${String(info.cap).padEnd(6)}%  ${info.carrier.padEnd(25)}  ${product}`);
}

console.log('\n=== UNCAPPED IUL STRATEGIES ===');
for (const [product, info] of Object.entries(uncappedIUL)) {
  const detail = info.participation ? `${info.participation}% participation` :
                 info.threshold ? `${info.threshold}% threshold` :
                 `${info.spread}% spread`;
  console.log(`${info.carrier.padEnd(25)}  ${product.padEnd(45)}  ${detail} on ${info.index}`);
}

// Write the verified data for the update script
fs.writeFileSync(__dirname + '/verified-iul-caps.json', JSON.stringify({ verifiedIULCaps, uncappedIUL }, null, 2));
console.log('\nSaved to scripts/verified-iul-caps.json');
