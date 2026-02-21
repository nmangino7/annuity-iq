#!/usr/bin/env node
/**
 * Add sourceUrl to VA and VUL products (compact format with id/carrierId on same line)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'src', 'data');

const vaUrls = {
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
  'minnesota-life': 'https://www.securian.com/financial-professionals/products/annuities.html',
};

const vulUrls = {
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
};

function processFile(filename, urlMap) {
  const filePath = path.join(dataDir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const newLines = [];
  let currentCarrierId = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track carrierId - may be on a line with other properties (compact format)
    const carrierMatch = line.match(/carrierId:\s*['"]([^'"]+)['"]/);
    if (carrierMatch) {
      currentCarrierId = carrierMatch[1];
    }

    // If we hit lastRateUpdate, add sourceUrl before it
    if (line.match(/^\s*lastRateUpdate:/) && currentCarrierId) {
      const indent = line.match(/^(\s*)/)[1];
      const url = urlMap[currentCarrierId] || '';
      if (url) {
        newLines.push(`${indent}sourceUrl: '${url}',`);
      }
    }

    newLines.push(line);
  }

  content = newLines.join('\n');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filename}`);
}

processFile('va-products.js', vaUrls);
processFile('vul-products.js', vulUrls);
console.log('Done!');
