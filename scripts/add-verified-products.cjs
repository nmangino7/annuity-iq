#!/usr/bin/env node
// Add real, currently-marketed FIA products with publicly-verifiable STRUCTURAL fields
// only. Per the "public sources only / omit unverifiable rates" policy: rates are left
// null (ratesVerified:false), index NAMES and surrender terms are included, and each
// record cites the carrier product page. Inserts before the closing `];`, skips dupes.
const fs = require('fs');
const path = require('path');

const newFIA = [
  {
    id: 'corebridge-power-select-builder', carrierId: 'corebridge-financial',
    name: 'Corebridge Power Select Builder', surrenderPeriod: 10, freeWithdrawalPercent: 10,
    incomeRiderAvailable: false,
    indexStrategies: [{ indexName: 'S&P 500', creditingMethod: 'Annual Point-to-Point', capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false }],
    sourceUrl: 'https://www.corebridgefinancial.com/what-we-offer/annuities/index-annuities',
  },
  {
    id: 'corebridge-power-protector-10', carrierId: 'corebridge-financial',
    name: 'Corebridge Power Protector 10', surrenderPeriod: 10, freeWithdrawalPercent: 10,
    incomeRiderAvailable: true,
    indexStrategies: [{ indexName: 'S&P 500', creditingMethod: 'Annual Point-to-Point', capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false }],
    sourceUrl: 'https://www.corebridgefinancial.com/what-we-offer/annuities/index-annuities',
  },
  {
    id: 'corebridge-power-index-5-plus', carrierId: 'corebridge-financial',
    name: 'Corebridge Power Index 5 Plus', surrenderPeriod: 5, freeWithdrawalPercent: 10,
    incomeRiderAvailable: true,
    indexStrategies: [{ indexName: 'S&P 500', creditingMethod: 'Annual Point-to-Point', capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false }],
    sourceUrl: 'https://www.corebridgefinancial.com/what-we-offer/annuities/index-annuities',
  },
  {
    id: 'symetra-income-edge-fia', carrierId: 'symetra',
    name: 'Symetra Income Edge', surrenderPeriod: 7, freeWithdrawalPercent: 10,
    incomeRiderAvailable: true,
    indexStrategies: [
      { indexName: 'S&P 500', creditingMethod: 'Annual Point-to-Point', capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false },
      { indexName: 'JPMorgan ETF Efficiente 5', creditingMethod: 'Annual Point-to-Point', capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false },
    ],
    sourceUrl: 'https://www.symetra.com/our-products/individuals/annuities/fixed-indexed/',
  },
];

const COMMON = {
  ratesVerified: false,
  lastVerifiedDate: '2026-05-31',
  verificationSource: 'Carrier product page — structural terms only; current cap/participation rates not publicly verified',
  lastRateUpdate: null,
  highlights: ['Currently marketed — confirm current rates with the carrier'],
};

const file = path.join(__dirname, '..', 'src', 'data', 'fia-products.js');
let src = fs.readFileSync(file, 'utf8');

const toAdd = newFIA.filter(p => !src.includes(`id: "${p.id}"`) && !src.includes(`id: '${p.id}'`));
if (!toAdd.length) { console.log('No new FIA products to add (all present).'); process.exit(0); }

const block = toAdd.map(p => {
  const rec = { id: p.id, carrierId: p.carrierId, ratesVerified: COMMON.ratesVerified, lastVerifiedDate: COMMON.lastVerifiedDate, verificationSource: COMMON.verificationSource, name: p.name, surrenderPeriod: p.surrenderPeriod, freeWithdrawalPercent: p.freeWithdrawalPercent, incomeRiderAvailable: p.incomeRiderAvailable, indexStrategies: p.indexStrategies, highlights: COMMON.highlights, sourceUrl: p.sourceUrl, lastRateUpdate: COMMON.lastRateUpdate };
  return '  ' + JSON.stringify(rec, null, 2).replace(/\n/g, '\n  ');
}).join(',\n');

const marker = src.lastIndexOf('\n];');
src = src.slice(0, marker) + ',\n  // ── Verified additions (structural only; rates not publicly verifiable) ──\n' + block + src.slice(marker);
fs.writeFileSync(file, src);
console.log(`Added ${toAdd.length} FIA product(s): ${toAdd.map(p => p.id).join(', ')}`);
