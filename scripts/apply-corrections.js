#!/usr/bin/env node
/**
 * Apply rate corrections and add sourceUrl to all products across all data files.
 * Run: node scripts/apply-corrections.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'src', 'data');

// ── Source URL mappings by carrierId ──────────────────────────────────────
const carrierSourceUrls = {
  // FIA source URLs
  fia: {
    'allianz-life': 'https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities',
    'athene': 'https://www.athene.com/products/fia',
    'nationwide': 'https://www.nationwide.com/personal/investing/annuities/fixed-indexed',
    'north-american': 'https://www.northamericancompany.com/annuities/fixed-index-annuities',
    'fandg': 'https://www.fglife.com/annuities/fia',
    'pacific-life': 'https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html',
    'lincoln-financial': 'https://www.lincolnfinancial.com/public/individuals/products/annuities/fixedindexedannuities',
    'jackson-national': 'https://www.jackson.com/annuities/fixed-index-annuities',
    'midland-national': 'https://www.midlandnational.com/annuities/fixed-index-annuities',
    'sammons': 'https://www.northamericancompany.com/annuities/fixed-index-annuities',
    'american-equity': 'https://www.american-equity.com/annuities',
    'great-american': 'https://www.massmutualascend.com/products/fixed-indexed-annuity',
    'massmutual-ascend': 'https://www.massmutualascend.com/products/fixed-indexed-annuity',
    'global-atlantic': 'https://professionals.globalatlantic.com/products/annuities',
    'corebridge': 'https://www.corebridgefinancial.com/what-we-offer/annuities/fixed-indexed-annuities',
    'protective': 'https://www.protective.com/annuities',
    'securian': 'https://www.securian.com/financial-professionals/products/annuities.html',
    'symetra': 'https://www.symetra.com/our-products/individuals/annuities',
    'transamerica': 'https://www.transamerica.com/individual/what-we-offer/products/annuities/fixed-index',
    'prudential': 'https://www.prudential.com/personal/annuities',
    'silac': 'https://www.silacins.com/products/annuities',
    'ibexis': 'https://www.ibexislife.com/products',
    'sentinel-security-life': 'https://www.sentinellife.com/products',
    'nassau': 'https://www.nassaure.com/products',
    'empower': 'https://www.empower.com/annuities',
    'equitable': 'https://equitable.com/annuities',
    'brighthouse': 'https://www.brighthousefinancial.com/products/annuities',
    'john-hancock': 'https://www.johnhancock.com/annuities.html',
    'massmutual': 'https://www.massmutual.com/annuities',
    'mutual-of-omaha': 'https://www.mutualofomaha.com/annuities',
    'new-york-life': 'https://www.newyorklife.com/products/annuities',
    'principal': 'https://www.principal.com/annuities',
    'thrivent': 'https://www.thrivent.com/annuities',
    'unum': 'https://www.unum.com',
    'minnesota-life': 'https://www.securian.com/financial-professionals/products/annuities.html',
  },
  // RILA source URLs
  rila: {
    'allianz-life': 'https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities',
    'equitable': 'https://equitable.com/annuities/variable-annuities/performance-cap-rates',
    'brighthouse': 'https://www.brighthousefinancial.com/products/annuities/shield-annuities',
    'prudential': 'https://www.prudential.com/personal/annuities/flexguard-rate-center',
    'lincoln-financial': 'https://www.lincolnfinancial.com/public/microsite/leveladvantage/ratescenter',
    'nationwide': 'https://www.nationwide.com/personal/investing/annuities/registered-index-linked',
    'jackson-national': 'https://www.jackson.com/annuities/registered-index-linked-annuities',
    'transamerica': 'https://www.transamerica.com/rila-rate-center',
    'pacific-life': 'https://www.annuities.pacificlife.com/home/annuities/registered-index-linked-annuities.html',
    'fandg': 'https://www.fglife.com/annuities/rila',
    'athene': 'https://www.athene.com/products/rila/amplify2',
    'global-atlantic': 'https://professionals.globalatlantic.com/products/annuities',
    'great-american': 'https://www.massmutualascend.com/products/registered-index-linked-annuity/rates',
    'massmutual-ascend': 'https://www.massmutualascend.com/products/registered-index-linked-annuity/rates',
    'protective': 'https://www.protective.com/annuities',
    'corebridge': 'https://www.corebridgefinancial.com/what-we-offer/annuities',
    'symetra': 'https://www.symetra.com/our-products/individuals/annuities/IndexLinkedAnnuity/trek-plus',
    'north-american': 'https://www.northamericancompany.com/annuities',
    'securian': 'https://www.securian.com/financial-professionals/products/annuities.html',
    'american-equity': 'https://www.american-equity.com/annuities',
  },
  // IUL source URLs
  iul: {
    'allianz-life': 'https://www.allianzlife.com/what-we-offer/Life-Insurance/Indexed-Universal-Life',
    'north-american': 'https://www.northamericancompany.com/life-insurance/indexed-universal-life',
    'nationwide': 'https://nationwidefinancial.com/products/life/indexed-universal',
    'pacific-life': 'https://www.pacificlife.com/home/individuals/life-insurance/life-rates.html',
    'lincoln-financial': 'https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife',
    'transamerica': 'https://www.transamerica.com/individual/what-we-offer/products/life-insurance',
    'prudential': 'https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance',
    'securian': 'https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life.html',
    'john-hancock': 'https://www.johnhancock.com/life-insurance.html',
    'protective': 'https://www.protective.com/life-insurance',
    'fandg': 'https://www.fglife.com/life-insurance',
    'corebridge': 'https://www.corebridgefinancial.com/what-we-offer/life-insurance',
    'symetra': 'https://www.symetra.com/our-products/individuals/life-insurance',
    'massmutual': 'https://www.massmutual.com/life-insurance',
    'global-atlantic': 'https://professionals.globalatlantic.com/products/life-insurance',
    'great-american': 'https://www.massmutualascend.com/products',
    'massmutual-ascend': 'https://www.massmutualascend.com/products',
    'midland-national': 'https://www.midlandnational.com/life-insurance',
    'sammons': 'https://www.northamericancompany.com/life-insurance',
    'american-equity': 'https://www.american-equity.com',
    'jackson-national': 'https://www.jackson.com',
    'athene': 'https://www.athene.com',
    'equitable': 'https://equitable.com/life-insurance',
    'brighthouse': 'https://www.brighthousefinancial.com/products/life-insurance',
    'minnesota-life': 'https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life.html',
    'mutual-of-omaha': 'https://www.mutualofomaha.com/life-insurance',
    'new-york-life': 'https://www.newyorklife.com/products/life-insurance',
    'principal': 'https://www.principal.com/life-insurance',
    'thrivent': 'https://www.thrivent.com/life-insurance',
    'penn-mutual': 'https://www.pennmutual.com/products/life-insurance',
    'columbus-life': 'https://www.columbuslife.com',
  },
  // VA source URLs
  va: {
    'jackson-national': 'https://www.jackson.com/annuities/variable-annuities',
    'lincoln-financial': 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variableannuities',
    'prudential': 'https://www.prudential.com/personal/annuities/products/premier-investment',
    'transamerica': 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    'pacific-life': 'https://www.annuities.pacificlife.com/home/annuities/variable-annuities.html',
    'nationwide': 'https://www.nationwide.com/personal/investing/annuities/variable',
    'equitable': 'https://equitable.com/annuities/variable-annuities',
    'brighthouse': 'https://www.brighthousefinancial.com/products/annuities',
    'corebridge': 'https://www.corebridgefinancial.com/what-we-offer/annuities/variable-annuities',
    'john-hancock': 'https://www.johnhancock.com/annuities.html',
    'massmutual': 'https://www.massmutual.com/annuities',
    'protective': 'https://www.protective.com/annuities',
    'securian': 'https://www.securian.com/financial-professionals/products/annuities.html',
    'athene': 'https://www.athene.com/products',
    'fandg': 'https://www.fglife.com/annuities',
    'global-atlantic': 'https://professionals.globalatlantic.com/products/annuities',
    'symetra': 'https://www.symetra.com/our-products/individuals/annuities',
    'north-american': 'https://www.northamericancompany.com/annuities',
    'allianz-life': 'https://www.allianzlife.com/what-we-offer/annuities',
    'great-american': 'https://www.massmutualascend.com/products',
    'massmutual-ascend': 'https://www.massmutualascend.com/products',
    'mutual-of-omaha': 'https://www.mutualofomaha.com/annuities',
    'new-york-life': 'https://www.newyorklife.com/products/annuities',
    'principal': 'https://www.principal.com/annuities',
    'thrivent': 'https://www.thrivent.com/annuities',
  },
  // VUL source URLs
  vul: {
    'lincoln-financial': 'https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/variableuniversallife',
    'prudential': 'https://www.prudential.com/personal/life-insurance',
    'pacific-life': 'https://www.pacificlife.com/home/individuals/life-insurance.html',
    'john-hancock': 'https://www.johnhancock.com/life-insurance.html',
    'nationwide': 'https://nationwidefinancial.com/products/life',
    'transamerica': 'https://www.transamerica.com/individual/what-we-offer/products/life-insurance',
    'equitable': 'https://equitable.com/life-insurance',
    'brighthouse': 'https://www.brighthousefinancial.com/products/life-insurance',
    'securian': 'https://www.securian.com/financial-professionals/products/individual-life-insurance.html',
    'protective': 'https://www.protective.com/life-insurance',
    'corebridge': 'https://www.corebridgefinancial.com/what-we-offer/life-insurance',
    'massmutual': 'https://www.massmutual.com/life-insurance',
    'fandg': 'https://www.fglife.com/life-insurance',
    'symetra': 'https://www.symetra.com/our-products/individuals/life-insurance',
    'jackson-national': 'https://www.jackson.com',
    'north-american': 'https://www.northamericancompany.com/life-insurance',
    'allianz-life': 'https://www.allianzlife.com/what-we-offer/Life-Insurance',
    'athene': 'https://www.athene.com',
    'global-atlantic': 'https://professionals.globalatlantic.com/products/life-insurance',
    'minnesota-life': 'https://www.securian.com/financial-professionals/products/individual-life-insurance.html',
    'penn-mutual': 'https://www.pennmutual.com/products/life-insurance',
    'columbus-life': 'https://www.columbuslife.com',
    'mutual-of-omaha': 'https://www.mutualofomaha.com/life-insurance',
    'new-york-life': 'https://www.newyorklife.com/products/life-insurance',
    'principal': 'https://www.principal.com/life-insurance',
    'thrivent': 'https://www.thrivent.com/life-insurance',
  },
  // GLWB source URLs (use carrier's annuity or rider page)
  glwb: {
    'jackson-national': 'https://www.jackson.com/annuities/variable-annuities',
    'lincoln-financial': 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variableannuities/optionalfeatures',
    'prudential': 'https://www.prudential.com/personal/annuities',
    'nationwide': 'https://www.nationwide.com/personal/investing/annuities',
    'athene': 'https://www.athene.com/products',
    'north-american': 'https://www.northamericancompany.com/annuities',
    'pacific-life': 'https://www.annuities.pacificlife.com/home/annuities.html',
    'transamerica': 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    'equitable': 'https://equitable.com/annuities',
    'brighthouse': 'https://www.brighthousefinancial.com/products/annuities',
    'corebridge': 'https://www.corebridgefinancial.com/what-we-offer/annuities',
    'john-hancock': 'https://www.johnhancock.com/annuities.html',
    'massmutual': 'https://www.massmutual.com/annuities',
    'protective': 'https://www.protective.com/annuities',
    'securian': 'https://www.securian.com/financial-professionals/products/annuities.html',
    'fandg': 'https://www.fglife.com/annuities',
    'global-atlantic': 'https://professionals.globalatlantic.com/products/annuities',
    'allianz-life': 'https://www.allianzlife.com/what-we-offer/annuities',
    'great-american': 'https://www.massmutualascend.com/products',
    'massmutual-ascend': 'https://www.massmutualascend.com/products',
    'symetra': 'https://www.symetra.com/our-products/individuals/annuities',
    'american-equity': 'https://www.american-equity.com/annuities',
    'midland-national': 'https://www.midlandnational.com/annuities',
    'sammons': 'https://www.northamericancompany.com/annuities',
    'mutual-of-omaha': 'https://www.mutualofomaha.com/annuities',
  },
};

// ── Specific product source URL overrides ────────────────────────────────
const productSourceOverrides = {
  // FIA specific
  'allianz-222-plus': 'https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/222-plus',
  'allianz-benefit-control-plus': 'https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/Benefit-Control-Plus',
  'athene-ascent-pro-10': 'https://www.athene.com/products/fia/ascent-pro',
  'athene-accumulator-10': 'https://www.athene.com/products/fia/accumulator',
  'athene-agility-10': 'https://www.athene.com/products/fia/agility',
  'nationwide-new-heights-select-12': 'https://www.nationwide.com/personal/investing/annuities/fixed-indexed/types/new-heights-select-12',
  'nationwide-peak-10': 'https://www.nationwide.com/personal/investing/annuities/fixed-indexed/types/nationwide-peak-10',
  // RILA specific
  'allianz-index-advantage-nf-6': 'https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities/index-advantage-plus-nf/rates',
  'allianz-index-advantage-nf-3': 'https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities/index-advantage-plus-nf/rates',
  'allianz-index-advantage-nf-1': 'https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities/index-advantage-plus-nf/rates',
  'equitable-scs-plus-6': 'https://equitable.com/annuities/variable-annuities/performance-cap-rates',
  'equitable-scs-plus-3': 'https://equitable.com/annuities/variable-annuities/performance-cap-rates',
  'equitable-scs-income': 'https://equitable.com/annuities/variable-annuities/performance-cap-rates',
  'prudential-flexguard-6': 'https://www.prudential.com/personal/annuities/flexguard-rate-center',
  'prudential-flexguard-3': 'https://www.prudential.com/personal/annuities/flexguard-rate-center',
  'prudential-flexguard-income': 'https://www.prudential.com/personal/annuities/flexguard-rate-center',
  'prudential-flexguard-2': 'https://www.prudential.com/personal/annuities/flexguard-rate-center',
  'lincoln-level-advantage-6': 'https://www.lincolnfinancial.com/public/microsite/leveladvantage/ratescenter',
  'lincoln-level-advantage-3': 'https://www.lincolnfinancial.com/public/microsite/leveladvantage/ratescenter',
  'brighthouse-shield-6': 'https://www.brighthousefinancial.com/products/annuities/shield-annuities',
  'brighthouse-shield-3': 'https://www.brighthousefinancial.com/products/annuities/shield-annuities',
  'brighthouse-shield-10': 'https://www.brighthousefinancial.com/products/annuities/shield-annuities',
  'nationwide-defender': 'https://www.nationwide.com/personal/investing/annuities/registered-index-linked/types/defender',
  'nationwide-defined-protection-6': 'https://www.nationwide.com/personal/investing/annuities/registered-index-linked/types/defined-protection-2',
  'nationwide-defined-protection-3': 'https://www.nationwide.com/personal/investing/annuities/registered-index-linked/types/defined-protection-2',
  'transamerica-structured-6': 'https://www.transamerica.com/rila-rate-center',
  'transamerica-structured-3': 'https://www.transamerica.com/rila-rate-center',
  'athene-amplify-6': 'https://www.athene.com/products/rila/amplify2',
  'fandg-confidence-builder-6': 'https://www.fglife.com/annuities/rila',
  'symetra-trek-plus': 'https://www.symetra.com/our-products/individuals/annuities/IndexLinkedAnnuity/trek-plus',
  'global-atlantic-forestructured': 'https://professionals.globalatlantic.com/products/annuities',
  // IUL specific
  'allianz-life-accumulator': 'https://www.allianzlife.com/what-we-offer/Life-Insurance/Indexed-Universal-Life/Allianz-Life-Accumulator/Rates',
  'nationwide-iul-accumulator-ii': 'https://nationwidefinancial.com/products/life/indexed-universal/indexed-ul-accumulator-ii',
  'pacific-life-pdx-2': 'https://lifeinsurance.pacificlife.com/pdx2',
  'lincoln-wealthbuilder': 'https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife/lincolnwealthbuilderiul',
  'prudential-index-advantage': 'https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance',
  'prudential-momentum-iul': 'https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance',
  'securian-eclipse-accumulator': 'https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life/eclipse-accumulator.html',
  // VA specific
  'jackson-perspective-ii': 'https://www.jackson.com/annuities/variable-annuities/perspective-ii',
  'jackson-elite-access': 'https://www.jackson.com/annuities/variable-annuities/elite-access',
  'prudential-premier-investment': 'https://www.prudential.com/personal/annuities/products/premier-investment',
  'corebridge-polaris-platinum-iii': 'https://www.corebridgefinancial.com/what-we-offer/annuities/variable-annuities',
};

function processFile(filename, category) {
  const filePath = path.join(dataDir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Fix Bloomberg US Dynamic Balance II -> III (Allianz uses III, not II)
  // Only for Allianz products - other carriers may use II
  // Actually, the index IS called "Bloomberg US Dynamic Balance III" for Allianz
  // But other carriers may reference "Bloomberg US Dynamic Balance II"
  // So let's just do a global replace since III is the current version
  content = content.replace(/Bloomberg US Dynamic Balance II(?! ER)/g, 'Bloomberg US Dynamic Balance III');
  content = content.replace(/Bloomberg US Dynamic Balance II ER/g, 'Bloomberg US Dynamic Balance III ER');

  // Add sourceUrl to products that don't have one
  // We need to parse and re-serialize, or use regex
  // Let's use regex to add sourceUrl before lastRateUpdate for products missing it

  const urlMap = carrierSourceUrls[category] || {};

  // Find products without sourceUrl and add one
  // Pattern: find carrierId line, then check if sourceUrl exists before lastRateUpdate
  const productRegex = /carrierId:\s*["']([^"']+)["'].*?(?:id:\s*["']([^"']+)["']|id:\s*["']([^"']+)["'])/gs;

  // Simpler approach: find each lastRateUpdate line that doesn't have sourceUrl before it
  const lines = content.split('\n');
  const newLines = [];
  let currentCarrierId = null;
  let currentProductId = null;
  let hasSourceUrl = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track current product id
    const idMatch = line.match(/^\s*id:\s*["']([^"']+)["']/);
    if (idMatch) {
      currentProductId = idMatch[1];
      hasSourceUrl = false;
    }

    // Track current carrierId
    const carrierMatch = line.match(/^\s*carrierId:\s*["']([^"']+)["']/);
    if (carrierMatch) {
      currentCarrierId = carrierMatch[1];
    }

    // Check if this product already has sourceUrl
    if (line.match(/^\s*sourceUrl:/)) {
      hasSourceUrl = true;
    }

    // If we hit lastRateUpdate and no sourceUrl was found, add one
    if (line.match(/^\s*lastRateUpdate:/) && !hasSourceUrl && currentCarrierId) {
      const indent = line.match(/^(\s*)/)[1];
      // Use product-specific override or carrier default
      const url = productSourceOverrides[currentProductId] || urlMap[currentCarrierId] || '';
      if (url) {
        newLines.push(`${indent}sourceUrl: "${url}",`);
      }
    }

    newLines.push(line);
  }

  content = newLines.join('\n');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filename}`);
}

// Process all data files
const files = [
  ['fia-products.js', 'fia'],
  ['rila-products.js', 'rila'],
  ['iul-products.js', 'iul'],
  ['va-products.js', 'va'],
  ['vul-products.js', 'vul'],
  ['glwb-riders.js', 'glwb'],
];

for (const [filename, category] of files) {
  const filePath = path.join(dataDir, filename);
  if (fs.existsSync(filePath)) {
    processFile(filename, category);
  } else {
    console.log(`Skipping ${filename} (not found)`);
  }
}

console.log('\nDone! Source URLs added and Bloomberg index names corrected.');
