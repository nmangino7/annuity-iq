#!/usr/bin/env node
/**
 * AnnuityIQ Rate Scraper
 *
 * Uses Puppeteer to scrape rate data from carrier websites and aggregators.
 * These sites use JavaScript to load rate data dynamically, so we need
 * a real browser to render the content.
 *
 * Usage: node scripts/scrape-rates.js
 * Output: scripts/scraped-rates.json
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, 'scraped-rates.json');

// Utility: wait for a specific time
const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Utility: safe text extraction
const safeText = async (page, selector) => {
  try {
    return await page.$eval(selector, el => el.textContent.trim());
  } catch { return null; }
};

// Utility: extract all text from page
const getPageText = async (page) => {
  return await page.evaluate(() => document.body.innerText);
};

// Utility: extract tables from page
const extractTables = async (page) => {
  return await page.evaluate(() => {
    const tables = [];
    document.querySelectorAll('table').forEach(table => {
      const rows = [];
      table.querySelectorAll('tr').forEach(tr => {
        const cells = [];
        tr.querySelectorAll('td, th').forEach(cell => {
          cells.push(cell.textContent.trim());
        });
        if (cells.length > 0) rows.push(cells);
      });
      if (rows.length > 0) tables.push(rows);
    });
    return tables;
  });
};

// ========== CARRIER SCRAPERS ==========

async function scrapeAllianzFIARates(page) {
  console.log('\n📊 Scraping Allianz FIA rates...');
  const results = {};

  // Allianz 222+ rates
  const fiaProducts = [
    { name: '222+', url: 'https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/222/rates' },
    { name: 'Benefit Control+', url: 'https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/benefit-control/rates' },
  ];

  for (const product of fiaProducts) {
    console.log(`  → ${product.name}...`);
    try {
      await page.goto(product.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await delay(3000); // Wait for JS to render

      const text = await getPageText(page);
      const tables = await extractTables(page);

      results[product.name] = {
        url: product.url,
        carrier: 'Allianz Life',
        pageText: text.substring(0, 5000),
        tables: tables,
        scrapedAt: new Date().toISOString()
      };
    } catch (err) {
      console.log(`    ❌ Error: ${err.message}`);
      results[product.name] = { error: err.message, url: product.url };
    }
  }

  return results;
}

async function scrapeAllianzRILARates(page) {
  console.log('\n📊 Scraping Allianz RILA rates...');
  const results = {};

  try {
    await page.goto('https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities/index-advantage-plus-nf/rates',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(3000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['Index Advantage+ NF'] = {
      url: 'https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities/index-advantage-plus-nf/rates',
      carrier: 'Allianz Life',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['Index Advantage+ NF'] = { error: err.message };
  }

  return results;
}

async function scrapeAllianzIULRates(page) {
  console.log('\n📊 Scraping Allianz IUL rates...');
  const results = {};

  try {
    await page.goto('https://www.allianzlife.com/what-we-offer/life-insurance/indexed-universal-life/life-accumulator-advantage/rates',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(3000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['Life Accumulator Advantage IUL'] = {
      url: 'https://www.allianzlife.com/what-we-offer/life-insurance/indexed-universal-life/life-accumulator-advantage/rates',
      carrier: 'Allianz Life',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['Life Accumulator Advantage IUL'] = { error: err.message };
  }

  return results;
}

async function scrapeNationwideRates(page) {
  console.log('\n📊 Scraping Nationwide rates...');
  const results = {};

  const urls = [
    { name: 'Annuities Overview', url: 'https://www.nationwide.com/personal/investing/annuities/', type: 'overview' },
    { name: 'IUL Overview', url: 'https://www.nationwide.com/personal/insurance/life-insurance/indexed-universal-life/', type: 'iul' },
  ];

  for (const item of urls) {
    console.log(`  → ${item.name}...`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await delay(2000);

      const text = await getPageText(page);
      const tables = await extractTables(page);

      results[item.name] = {
        url: item.url,
        carrier: 'Nationwide',
        type: item.type,
        pageText: text.substring(0, 5000),
        tables: tables,
        scrapedAt: new Date().toISOString()
      };
    } catch (err) {
      console.log(`    ❌ Error: ${err.message}`);
      results[item.name] = { error: err.message, url: item.url };
    }
  }

  return results;
}

async function scrapeAtheneRates(page) {
  console.log('\n📊 Scraping Athene rates...');
  const results = {};

  try {
    await page.goto('https://www.athene.com/annuities', { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['Athene Annuities'] = {
      url: 'https://www.athene.com/annuities',
      carrier: 'Athene',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['Athene Annuities'] = { error: err.message };
  }

  return results;
}

async function scrapeEquitableRates(page) {
  console.log('\n📊 Scraping Equitable RILA rates...');
  const results = {};

  try {
    await page.goto('https://equitable.com/retirement/products/variable-annuities/structured-capital-strategies',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(3000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['SCS PLUS'] = {
      url: 'https://equitable.com/retirement/products/variable-annuities/structured-capital-strategies',
      carrier: 'Equitable',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['SCS PLUS'] = { error: err.message };
  }

  return results;
}

async function scrapePacificLifeRates(page) {
  console.log('\n📊 Scraping Pacific Life rates...');
  const results = {};

  const urls = [
    { name: 'Annuities', url: 'https://www.pacificlife.com/home/individuals/annuities.html' },
    { name: 'IUL', url: 'https://www.pacificlife.com/home/individuals/life-insurance/indexed-universal-life-insurance.html' },
  ];

  for (const item of urls) {
    console.log(`  → ${item.name}...`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await delay(2000);

      const text = await getPageText(page);
      const tables = await extractTables(page);

      results[item.name] = {
        url: item.url,
        carrier: 'Pacific Life',
        pageText: text.substring(0, 5000),
        tables: tables,
        scrapedAt: new Date().toISOString()
      };
    } catch (err) {
      console.log(`    ❌ Error: ${err.message}`);
      results[item.name] = { error: err.message, url: item.url };
    }
  }

  return results;
}

async function scrapeNorthAmericanRates(page) {
  console.log('\n📊 Scraping North American rates...');
  const results = {};

  try {
    // North American publishes IUL index performance data
    await page.goto('https://www.northamericancompany.com/indexed-universal-life',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['IUL Products'] = {
      url: 'https://www.northamericancompany.com/indexed-universal-life',
      carrier: 'North American',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['IUL Products'] = { error: err.message };
  }

  return results;
}

async function scrapeMidlandNationalRates(page) {
  console.log('\n📊 Scraping Midland National IUL performance...');
  const results = {};

  try {
    // Midland National publishes IUL performance data publicly
    await page.goto('https://www.midlandnational.com/indexed-ul-performance',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['IUL Performance'] = {
      url: 'https://www.midlandnational.com/indexed-ul-performance',
      carrier: 'Midland National',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['IUL Performance'] = { error: err.message };
  }

  return results;
}

async function scrapeLincolnRates(page) {
  console.log('\n📊 Scraping Lincoln Financial rates...');
  const results = {};

  const urls = [
    { name: 'Annuities', url: 'https://www.lincolnfinancial.com/public/individuals/products/annuities' },
    { name: 'IUL', url: 'https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife' },
  ];

  for (const item of urls) {
    console.log(`  → ${item.name}...`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await delay(2000);

      const text = await getPageText(page);
      const tables = await extractTables(page);

      results[item.name] = {
        url: item.url,
        carrier: 'Lincoln Financial',
        pageText: text.substring(0, 5000),
        tables: tables,
        scrapedAt: new Date().toISOString()
      };
    } catch (err) {
      console.log(`    ❌ Error: ${err.message}`);
      results[item.name] = { error: err.message, url: item.url };
    }
  }

  return results;
}

async function scrapeFGRates(page) {
  console.log('\n📊 Scraping F&G rates...');
  const results = {};

  try {
    await page.goto('https://www.fglife.com/life-and-annuity-products/annuities.html',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['Annuities'] = {
      url: 'https://www.fglife.com/life-and-annuity-products/annuities.html',
      carrier: 'F&G',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['Annuities'] = { error: err.message };
  }

  return results;
}

async function scrapeBrighthouseRates(page) {
  console.log('\n📊 Scraping Brighthouse rates...');
  const results = {};

  try {
    await page.goto('https://www.brighthousefinancial.com/products/annuities/shield-annuities/',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(3000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['Shield Annuities'] = {
      url: 'https://www.brighthousefinancial.com/products/annuities/shield-annuities/',
      carrier: 'Brighthouse',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['Shield Annuities'] = { error: err.message };
  }

  return results;
}

async function scrapeTransamericaRates(page) {
  console.log('\n📊 Scraping Transamerica rates...');
  const results = {};

  try {
    await page.goto('https://www.transamerica.com/individual/products/life-insurance/indexed-universal-life-insurance',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['IUL'] = {
      url: 'https://www.transamerica.com/individual/products/life-insurance/indexed-universal-life-insurance',
      carrier: 'Transamerica',
      pageText: text.substring(0, 5000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['IUL'] = { error: err.message };
  }

  return results;
}

// ========== AGGREGATOR SCRAPERS ==========

async function scrapeAnnuityOrg(page) {
  console.log('\n📊 Scraping Annuity.org...');
  const results = {};

  const urls = [
    { name: 'Fixed Index Annuities', url: 'https://www.annuity.org/annuities/fixed-index/' },
    { name: 'Annuity Rates', url: 'https://www.annuity.org/annuities/rates/' },
    { name: 'Best Annuities', url: 'https://www.annuity.org/annuities/best/' },
  ];

  for (const item of urls) {
    console.log(`  → ${item.name}...`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await delay(2000);

      const text = await getPageText(page);
      const tables = await extractTables(page);

      results[item.name] = {
        url: item.url,
        pageText: text.substring(0, 8000),
        tables: tables,
        scrapedAt: new Date().toISOString()
      };
    } catch (err) {
      console.log(`    ❌ Error: ${err.message}`);
      results[item.name] = { error: err.message, url: item.url };
    }
  }

  return results;
}

async function scrapeAnnuityExpert(page) {
  console.log('\n📊 Scraping AnnuityExpertAdvice.com...');
  const results = {};

  const urls = [
    { name: 'Best FIA', url: 'https://www.annuityexpertadvice.com/best-fixed-index-annuities/' },
    { name: 'Best Income Riders', url: 'https://www.annuityexpertadvice.com/best-income-riders/' },
    { name: 'RILA', url: 'https://www.annuityexpertadvice.com/best-rila-annuities/' },
  ];

  for (const item of urls) {
    console.log(`  → ${item.name}...`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await delay(2000);

      const text = await getPageText(page);
      const tables = await extractTables(page);

      results[item.name] = {
        url: item.url,
        pageText: text.substring(0, 8000),
        tables: tables,
        scrapedAt: new Date().toISOString()
      };
    } catch (err) {
      console.log(`    ❌ Error: ${err.message}`);
      results[item.name] = { error: err.message, url: item.url };
    }
  }

  return results;
}

async function scrapeVariableAnnuityFYI(page) {
  console.log('\n📊 Scraping VariableAnnuityFYI.com...');
  const results = {};

  try {
    await page.goto('https://www.variableannuityfyi.com/structured-variable-annuities/',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['Structured Annuities'] = {
      url: 'https://www.variableannuityfyi.com/structured-variable-annuities/',
      pageText: text.substring(0, 8000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['Structured Annuities'] = { error: err.message };
  }

  return results;
}

async function scrapeIULComparison(page) {
  console.log('\n📊 Scraping IUL comparison sites...');
  const results = {};

  try {
    await page.goto('https://www.lifeinsurancerecommendations.com/index-universal-life/cap-rates-highest-indexed-ul/',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    const tables = await extractTables(page);

    results['IUL Cap Rates'] = {
      url: 'https://www.lifeinsurancerecommendations.com/index-universal-life/cap-rates-highest-indexed-ul/',
      pageText: text.substring(0, 8000),
      tables: tables,
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    results['IUL Cap Rates'] = { error: err.message };
  }

  return results;
}

// ========== SEC EDGAR ==========

async function scrapeSECEdgar(page) {
  console.log('\n📊 Scraping SEC EDGAR for VA/VUL filings...');
  const results = {};

  // Search for recent N-4 (VA) filings
  try {
    const searchUrl = 'https://efts.sec.gov/LATEST/search-index?q=%22variable+annuity%22&forms=N-4&dateRange=custom&startdt=2025-06-01&enddt=2026-02-21';
    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    results['VA Filings (N-4)'] = {
      url: searchUrl,
      pageText: text.substring(0, 8000),
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ VA search error: ${err.message}`);
    results['VA Filings (N-4)'] = { error: err.message };
  }

  // Also try the EDGAR full-text search
  try {
    const searchUrl2 = 'https://efts.sec.gov/LATEST/search-index?q=%22variable+universal+life%22&forms=N-6&dateRange=custom&startdt=2025-06-01&enddt=2026-02-21';
    await page.goto(searchUrl2, { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);

    const text = await getPageText(page);
    results['VUL Filings (N-6)'] = {
      url: searchUrl2,
      pageText: text.substring(0, 8000),
      scrapedAt: new Date().toISOString()
    };
  } catch (err) {
    console.log(`  ❌ VUL search error: ${err.message}`);
    results['VUL Filings (N-6)'] = { error: err.message };
  }

  return results;
}

// ========== MAIN ==========

async function main() {
  console.log('🚀 AnnuityIQ Rate Scraper');
  console.log('========================');
  console.log(`Started: ${new Date().toISOString()}\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const allResults = {
    metadata: {
      scrapedAt: new Date().toISOString(),
      version: '1.0'
    },
    carriers: {},
    aggregators: {},
    secEdgar: {}
  };

  try {
    // Carrier sites
    allResults.carriers.allianz = {
      fia: await scrapeAllianzFIARates(page),
      rila: await scrapeAllianzRILARates(page),
      iul: await scrapeAllianzIULRates(page)
    };

    allResults.carriers.nationwide = await scrapeNationwideRates(page);
    allResults.carriers.athene = await scrapeAtheneRates(page);
    allResults.carriers.equitable = await scrapeEquitableRates(page);
    allResults.carriers.pacificLife = await scrapePacificLifeRates(page);
    allResults.carriers.northAmerican = await scrapeNorthAmericanRates(page);
    allResults.carriers.midlandNational = await scrapeMidlandNationalRates(page);
    allResults.carriers.lincoln = await scrapeLincolnRates(page);
    allResults.carriers.fg = await scrapeFGRates(page);
    allResults.carriers.brighthouse = await scrapeBrighthouseRates(page);
    allResults.carriers.transamerica = await scrapeTransamericaRates(page);

    // Aggregator sites
    allResults.aggregators.annuityOrg = await scrapeAnnuityOrg(page);
    allResults.aggregators.annuityExpert = await scrapeAnnuityExpert(page);
    allResults.aggregators.variableAnnuityFYI = await scrapeVariableAnnuityFYI(page);
    allResults.aggregators.iulComparison = await scrapeIULComparison(page);

    // SEC EDGAR
    allResults.secEdgar = await scrapeSECEdgar(page);

  } catch (err) {
    console.error('\n❌ Fatal error:', err.message);
  }

  await browser.close();

  // Write results
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allResults, null, 2));
  console.log(`\n✅ Results saved to ${OUTPUT_FILE}`);
  console.log(`📁 File size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);
  console.log(`⏱️  Completed: ${new Date().toISOString()}`);
}

main().catch(console.error);
