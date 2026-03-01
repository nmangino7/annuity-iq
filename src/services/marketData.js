// =============================================================================
// Market Data Service — Auto-Updating Daily Returns for Subaccounts
// =============================================================================
// Uses Financial Modeling Prep (FMP) free API to fetch live market data.
// Maps insurance subaccounts to their retail equivalent tickers.
// Falls back to index-based estimation for unmapped funds.
// Caches all data in localStorage with configurable TTL.
// =============================================================================

// ── Retail Ticker Mapping ──────────────────────────────────────────────────
// Maps subaccount IDs to their publicly-traded retail equivalent tickers.
// VIP (Variable Insurance Product) funds mirror retail funds but trade
// only within insurance contracts — these mappings let us fetch proxy data.
const TICKER_MAP = {
  // ─── S&P 500 Index (all carriers) ───
  'jn-sp500-idx':    'VOO',  'ln-sp500-idx':    'VOO',  'nw-sp500-idx':    'VOO',
  'cb-sp500-idx':    'VOO',  'mm-sp500-idx':    'VOO',  'pl-sp500-idx':    'VOO',
  'pro-sp500-idx':   'VOO',  'pru-sp500-idx':   'VOO',  'sb-sp500-idx':    'VOO',
  'ta-sp500-idx':    'VOO',  'nyl-sp500-idx':   'VOO',  'jh-sp500-idx':    'VOO',
  'pri-sp500-idx':   'VOO',  'bh-sp500-idx':    'VOO',  'ga-sp500-idx':    'VOO',

  // ─── Fidelity Funds ───
  'jn-fid-contrafund':  'FCNTX',  'ln-fid-contrafund': 'FCNTX',
  'nw-fid-contrafund':  'FCNTX',  'cb-fid-contrafund': 'FCNTX',
  'jn-fid-tech':        'FSPTX',  'jn-fid-health':     'FSPHX',
  'jn-fid-money-mkt':   'SPAXX',  'ml-fid-equity':     'FDEQX',
  'pl-fid-growth':      'FDGRX',  'pro-fid-growth':    'FDGRX',
  'ta-fid-equity':      'FDEQX',  'mm-fid-growth':     'FDGRX',

  // ─── T. Rowe Price Funds ───
  'jn-trp-bluechip':   'TRBCX',  'pro-trp-bluechip':  'TRBCX',
  'ln-trp-growth':     'PRGFX',  'ta-trp-growth':     'PRGFX',
  'mm-trp-value':      'TRVLX',  'nyl-trp-equity':    'PRGFX',
  'bh-trp-equity':     'PRGFX',  'ga-trp-equity':     'PRGFX',
  'pl-trp-equity':     'PRGFX',

  // ─── Vanguard Funds ───
  'jn-vanguard-growth':  'VUG',   'jn-vanguard-reit': 'VNQ',
  'ln-vanguard-midcap':  'VO',    'cb-vanguard-midcap': 'VO',
  'pro-vanguard-total':  'VTI',   'nw-vanguard-intl':  'VXUS',
  'nw-vanguard-tips':    'VTIP',  'pl-vanguard-bal':   'VBIAX',
  'sb-vanguard-growth':  'VUG',

  // ─── PIMCO Funds ───
  'jn-pimco-total':   'PTTRX',  'ln-pimco-income': 'PIMIX',
  'jn-pimco-hy':      'PHIYX',  'ln-pimco-tips':   'PTIPX',
  'nw-pimco-total':   'PTTRX',  'cb-pimco-total':  'PTTRX',
  'mm-pimco-total':   'PTTRX',  'sb-pimco-total':  'PTTRX',
  'pl-pimco-total':   'PTTRX',  'ta-pimco-total':  'PTTRX',
  'pro-pimco-income': 'PIMIX',  'ga-pimco-total':  'PTTRX',
  'nyl-pimco-bond':   'PTTRX',  'bh-pimco-bond':   'PTTRX',
  'pru-pimco-realret':'PRRIX',

  // ─── American Funds ───
  'cb-am-growth':    'AGTHX',  'ln-am-growth':     'AGTHX',
  'nw-am-growth':    'AGTHX',  'jn-am-europac':    'AEPGX',
  'ln-am-newworld':  'NEWFX',  'nyl-am-europac':   'AEPGX',
  'mm-am-balanced':  'ABALX',  'ta-am-balanced':   'ABALX',

  // ─── JPMorgan Funds ───
  'jn-jpmorgan-lgcap': 'JLGMX',  'jn-jpmorgan-alt': 'JPHAX',
  'ln-jpmorgan-value': 'JVAAX',   'cb-jpmorgan-value':'JVAAX',
  'nw-jpmorgan-mid':   'JMVSX',   'bh-jpmorgan-intl': 'JIERX',

  // ─── BlackRock Funds ───
  'jn-blackrock-bond':   'BFMCX',  'ln-blackrock-global': 'MDIZX',
  'ln-blackrock-tech':   'BGSAX',  'ln-blackrock-health': 'SHSAX',
  'ln-blackrock-alt':    'BASAX',  'nw-blackrock-eq':     'MDDVX',
  'cb-blackrock-intl':   'MDIIX',  'ta-blackrock-intl':   'MDIIX',
  'pl-blackrock-ga':     'MALOX',

  // ─── Goldman Sachs Funds ───
  'jn-goldman-strat':      'GSZAX',
  'jn-goldman-commodities': 'GLD',  // Proxy with gold ETF

  // ─── Invesco / Oppenheimer ───
  'jn-invesco-comstock':  'ACSTX',  'ln-invesco-div': 'LCEAX',
  'cb-invesco-equity':    'OACAX',  'cb-invesco-energy':'FSENX',
  'mm-oppenheimer-intl':  'OIDAX',  'ta-oppenheimer-em':'OEMSX',

  // ─── Target Date Funds ───
  'sb-target-2025': 'VTTVX',  'sb-target-2040': 'VFORX',
  'sb-target-2050': 'VFIFX',  'sb-target-2055': 'VFFVX',
  'sb-target-2060': 'VLXVX',

  // ─── REIT Funds ───
  'ln-cohen-steers-reit': 'CSRSX',  'pru-reit-fund': 'VNQ',
  'nw-reit-idx':          'VNQ',    'sb-reit-idx':   'VNQ',
  'pl-reit-fund':         'VNQ',

  // ─── Bond / Fixed Income ───
  'ln-bond-core':     'AGG',   'ln-short-duration': 'BSV',
  'ln-western-hy':    'HYLAX', 'jh-bond-core':      'AGG',
  'pri-bond-core':    'AGG',   'pru-bond-total':     'AGG',
  'sb-tips-bond':     'TIP',   'nw-federated-hy':    'FHYAX',

  // ─── International ───
  'jn-dfa-intl':          'DFIVX',  'jh-intl-equity':    'VXUS',
  'jh-emerging-mkt':      'VWO',    'pru-intl-growth':   'VXUS',
  'pru-em-equity':        'VWO',    'pru-intl-bond':     'BNDX',
  'sb-dimensional-intl':  'DFIVX',  'sb-emerging-mkt':   'VWO',
  'pri-intl-growth':      'VXUS',   'pl-intl-small':     'VSS',
  'nw-templeton-em':      'TEEMX',
  'ta-templeton-global-bond':'TPINX',

  // ─── Mid Cap ───
  'jn-mid-cap-gr':   'VOT',  'jh-mid-blend': 'VO',  'pri-mid-blend': 'VO',
  'pro-mid-cap-idx': 'VO',   'mm-mid-cap-growth': 'VOT',

  // ─── Small Cap ───
  'jh-small-cap':    'VB',   'cb-small-growth': 'VBK',
  'mm-small-cap':    'VB',   'pri-small-cap':   'VB',
  'pru-small-value': 'VBR',  'sb-small-value':  'VBR',
  'pl-small-cap-val':'VBR',  'ta-small-cap-value':'VBR',

  // ─── Growth / Large Cap ───
  'jh-growth-large':     'VUG',  'eq-lgcap-growth':  'VUG',
  'eq-mid-cap-growth':   'VOT',  'eq-small-cap-value':'VBR',
  'rs-lgcap-growth':     'VUG',  'rs-mid-cap-value': 'VOE',
  'rs-small-cap-growth': 'VBK',  'em-empower-lgcap': 'VUG',
  'sch-lgcap-idx':       'VV',   'mm-lgcap-blend':   'VV',
  'nyl-mainstay-growth': 'VUG',
  'cb-trp-growth':       'PRGFX',

  // ─── Alternatives / Specialty ───
  'pru-pgim-alt':      'QSPRX',  'pl-natural-resources': 'FSENX',
  'pru-money-market':  'SPAXX',  'pru-tech-growth':      'QQQ',

  // ─── Balanced / Allocation ───
  'pru-balanced':     'VBIAX',  'pru-growth-alloc': 'VASGX',

  // ─── Prudential / PGIM ───
  'pru-jenni-equity': 'SPGAX',

  // ─── DFA / Dimensional ───
  'sb-dfa-value': 'DFUVX',

  // ─── ESG ───
  'nw-parnassus-esg': 'PRBLX',  'cb-calvert-esg': 'CSXAX',
  'tiaa-social-choice':'TISCX',

  // ─── Protective / John Hancock / misc ───
  'pro-sp500-idx':     'VOO',

  // ─── New Subaccounts (batch 2) ─────────────────────────────────
  // Large Cap Growth
  'gs-lgcap-growth':   'VUG',   'ms-lgcap-growth':    'VUG',
  'ls-lgcap-growth':   'VUG',   'wb-lgcap-growth':    'VUG',
  'cl-lgcap-growth':   'VUG',   'har-lgcap-growth':   'VUG',
  'inv-lgcap-growth':  'VUG',   'col-lgcap-growth':   'VUG',

  // Large Cap Value
  'dc-lgcap-value':    'VTV',   'da-lgcap-value':     'VTV',
  'mfs-lgcap-value':   'VTV',   'nv-lgcap-value':     'VTV',
  'am-wash-mutual':    'AWSHX', 'har-dividend-income': 'VYM',
  'fid-equity-income': 'FEQIX', 'pgim-value':         'VTV',

  // Large Cap Blend
  'van-total-stock':   'VTI',   'blk-russell1000':    'IWB',
  'ab-lgcap-blend':    'VV',    'fid-vip-stock-sel':  'FDSSX',
  'jpm-us-equity':     'VV',    'wel-lgcap-opps':     'VV',

  // Mid Cap Growth
  'trp-midcap-growth': 'VOT',   'har-midcap-growth':  'VOT',
  'fid-midcap-growth': 'VOT',   'jpm-midcap-growth':  'VOT',
  'col-midcap-growth': 'VOT',

  // Mid Cap Value
  'am-midcap-value':   'VOE',   'har-midcap-value':   'VOE',
  'mfs-midcap-value':  'VOE',   'inv-midcap-value':   'VOE',
  'van-midcap-value':  'VOE',

  // Small Cap Growth
  'trp-smallcap-growth': 'VBK',  'fid-smallcap-growth': 'VBK',
  'jpm-smallcap-growth': 'VBK',  'har-smallcap-growth': 'VBK',
  'ab-smallcap-growth':  'VBK',

  // Small Cap Value
  'trp-smallcap-value':   'VBR',  'van-smallcap-value':  'VBR',
  'am-smallcap-value':    'VBR',  'blk-russell2000-val': 'IWN',
  'mfs-smallcap-value':   'VBR',

  // ─── International ─────────────────────────────────────────────
  'mfs-intl-equity':   'VXUS',  'trp-intl-stock':    'VXUS',
  'fid-intl-index':    'VXUS',  'har-intl-opps':     'VXUS',
  'inv-intl-growth':   'VXUS',  'am-intl-fund':      'AIVSX',
  'dodge-intl-stock':  'DODFX', 'blk-eafe-index':    'EFA',

  // ─── Emerging Markets ──────────────────────────────────────────
  'trp-em-equity':     'VWO',   'fid-em-index':      'VWO',
  'jpm-em-equity':     'VWO',   'ab-em-growth':      'VWO',
  'van-em-index':      'VWO',

  // ─── Global ────────────────────────────────────────────────────
  'am-new-perspective':'ANWPX', 'mfs-global-equity': 'ACWI',
  'har-global-growth': 'ACWI',  'jpm-global-alloc':  'ACWI',

  // ─── REIT (batch 2) ───────────────────────────────────────────
  'van-reit-index':    'VNQ',   'trp-reit':          'VNQ',
  'fid-reit':          'VNQ',   'har-reit':          'VNQ',

  // ─── Sector: Technology ────────────────────────────────────────
  'fid-tech':          'VGT',   'inv-tech':          'VGT',
  'blk-tech-opps':     'VGT',

  // ─── Sector: Healthcare ───────────────────────────────────────
  'fid-health':        'VHT',   'trp-health':        'VHT',
  'jpm-health':        'VHT',

  // ─── Sector: Financials ───────────────────────────────────────
  'fid-financials':    'VFH',   'inv-financials':    'VFH',

  // ─── Sector: Energy ───────────────────────────────────────────
  'fid-energy':        'VDE',   'inv-energy':        'VDE',

  // ─── High Yield Bond ──────────────────────────────────────────
  'pim-high-yield':    'HYG',   'fid-high-income':   'HYG',
  'trp-high-yield':    'HYG',   'har-high-yield':    'HYG',

  // ─── Core / Total Bond ────────────────────────────────────────
  'van-total-bond':    'BND',   'pim-total-return':  'PTTRX',
  'fid-inv-grade':     'AGG',   'trp-bond':          'AGG',
  'har-total-return':  'AGG',

  // ─── Government / Treasury ────────────────────────────────────
  'fid-govt-bond':     'GOVT',  'van-long-treasury': 'VGLT',
  'har-govt-income':   'GOVT',

  // ─── Short Duration ───────────────────────────────────────────
  'van-short-bond':    'BSV',   'pim-short-term':    'BSV',
  'fid-short-bond':    'BSV',

  // ─── Money Market / Stable Value ──────────────────────────────
  'fid-money-market':  'SPAXX', 'van-money-market':  'VMFXX',
  'jn-stable-value':   'BIL',   'ln-stable-value':   'BIL',

  // ─── Balanced ─────────────────────────────────────────────────
  'fid-balanced':      'FBALX', 'van-balanced':      'VBIAX',

  // ─── Target Date (batch 2) ────────────────────────────────────
  'trp-target-2035':   'TRRJX', 'am-target-2045':    'AALTX',

  // ─── ESG (batch 2) ────────────────────────────────────────────
  'cal-esg-equity':    'CSXAX', 'par-esg-intl':      'PFPIX',

  // ─── Multi-Strategy / TIPS ────────────────────────────────────
  'jpm-multi-strat':   'JMSAX', 'van-tips-index':    'VTIP',
};

// ── Asset-Class → Index ETF Mapping (for unmapped subaccounts) ─────────
const INDEX_MAP = {
  'Equity':       { ticker: 'SPY',  name: 'S&P 500' },
  'Fixed Income': { ticker: 'AGG',  name: 'Agg Bond' },
  'Balanced':     { ticker: 'AOR',  name: 'Balanced' },
  'Money Market': { ticker: 'BIL',  name: 'T-Bills' },
  'Alternative':  { ticker: 'QAI',  name: 'Alt Index' },
  'Target Date':  { ticker: 'SPY',  name: 'S&P 500' },
  'Real Assets':  { ticker: 'VNQ',  name: 'Real Estate' },
  'International': { ticker: 'VXUS', name: 'Intl Stocks' },
};

// ── Style → Beta Multiplier (for index-based estimation) ───────────────
const STYLE_BETA = {
  'Growth':      1.12,
  'Value':       0.92,
  'Blend':       1.00,
  'Core':        1.00,
  'Core Plus':   1.05,
  'Income':      0.85,
  'Aggressive':  1.20,
  'Conservative':0.75,
  'Moderate':    0.90,
};

// ── Config ─────────────────────────────────────────────────────────────────
const CACHE_KEY = 'annuityiq_market_data';
const CACHE_TTL = 4 * 60 * 60 * 1000; // 4 hours
const FMP_BASE = 'https://financialmodelingprep.com/api/v3';

// ── Market Data Service ────────────────────────────────────────────────────
class MarketDataService {
  constructor() {
    this.cache = this._loadCache();
    this.lastUpdated = this.cache?.timestamp || null;
    this.isRefreshing = false;
    this.apiKey = this._getApiKey();
    this.listeners = [];
    this._errors = [];
  }

  // ── API Key Management ──────────────────────────────────────────────────
  _getApiKey() {
    // Check localStorage first, then env variable
    return localStorage.getItem('annuityiq_fmp_key') ||
           (typeof import.meta !== 'undefined' ? import.meta.env?.VITE_FMP_API_KEY : null) ||
           null;
  }

  setApiKey(key) {
    localStorage.setItem('annuityiq_fmp_key', key);
    this.apiKey = key;
  }

  hasApiKey() {
    return !!this.apiKey;
  }

  // ── Cache Management ────────────────────────────────────────────────────
  _loadCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (Date.now() - data.timestamp > CACHE_TTL) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
      return data;
    } catch { return null; }
  }

  _saveCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('[MarketData] Cache save failed:', e);
    }
  }

  clearCache() {
    localStorage.removeItem(CACHE_KEY);
    this.cache = null;
    this.lastUpdated = null;
  }

  // ── Event Listeners ─────────────────────────────────────────────────────
  onChange(fn) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter(l => l !== fn); };
  }

  _notify(event) {
    this.listeners.forEach(fn => fn(event));
  }

  // ── API Fetching ────────────────────────────────────────────────────────
  async _fetchBatch(tickers) {
    if (!this.apiKey || !tickers.length) return {};
    const results = {};
    const batchSize = 5; // FMP allows comma-separated, ~5 per call for free tier

    for (let i = 0; i < tickers.length; i += batchSize) {
      const batch = tickers.slice(i, i + batchSize);
      try {
        const url = `${FMP_BASE}/quote/${batch.join(',')}?apikey=${this.apiKey}`;
        const res = await fetch(url);
        if (!res.ok) {
          if (res.status === 429) {
            console.warn('[MarketData] Rate limited, stopping batch');
            break;
          }
          continue;
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          for (const q of data) {
            results[q.symbol] = {
              price: q.price,
              change: q.change,
              changesPercentage: q.changesPercentage,
              previousClose: q.previousClose,
              dayHigh: q.dayHigh,
              dayLow: q.dayLow,
              yearHigh: q.yearHigh,
              yearLow: q.yearLow,
              volume: q.volume,
              marketCap: q.marketCap,
              timestamp: q.timestamp,
            };
          }
        }
      } catch (err) {
        console.warn(`[MarketData] Batch fetch failed for ${batch.join(',')}:`, err.message);
        this._errors.push({ tickers: batch, error: err.message, time: Date.now() });
      }
      // Small delay between batches to respect rate limits
      if (i + batchSize < tickers.length) {
        await new Promise(r => setTimeout(r, 300));
      }
    }

    return results;
  }

  // ── Core Refresh ────────────────────────────────────────────────────────
  async refresh() {
    if (this.isRefreshing) return this.cache;
    this.isRefreshing = true;
    this._notify({ type: 'refreshStart' });
    this._errors = [];

    try {
      // Collect all unique tickers we need
      const tickerSet = new Set(Object.values(TICKER_MAP));
      Object.values(INDEX_MAP).forEach(idx => { if (idx?.ticker) tickerSet.add(idx.ticker); });
      const allTickers = [...tickerSet];

      const quotes = await this._fetchBatch(allTickers);
      const tickerCount = Object.keys(quotes).length;

      const data = {
        quotes,
        timestamp: Date.now(),
        tickerCount,
        marketStatus: this.getMarketStatus(),
        errors: this._errors,
      };

      this.cache = data;
      this.lastUpdated = Date.now();
      this._saveCache(data);
      this._notify({ type: 'refreshComplete', tickerCount, errors: this._errors });

      return data;
    } catch (err) {
      console.error('[MarketData] Refresh failed:', err);
      this._notify({ type: 'refreshError', error: err.message });
      return this.cache;
    } finally {
      this.isRefreshing = false;
    }
  }

  // ── Market Status ───────────────────────────────────────────────────────
  getMarketStatus() {
    const now = new Date();
    const estStr = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
    const est = new Date(estStr);
    const day = est.getDay();
    const hour = est.getHours();
    const min = est.getMinutes();

    if (day === 0 || day === 6) return { status: 'closed', label: 'Market Closed', color: 'text-slate-500' };
    if (hour < 9 || (hour === 9 && min < 30)) return { status: 'pre', label: 'Pre-Market', color: 'text-amber-500' };
    if (hour >= 16) return { status: 'after', label: 'After Hours', color: 'text-amber-500' };
    return { status: 'open', label: 'Market Open', color: 'text-emerald-500' };
  }

  // ── Get Return Data for a Subaccount ────────────────────────────────────
  getDailyChange(subaccountId, assetClass, style) {
    if (!this.cache?.quotes) return null;

    // Try direct ticker mapping first
    const ticker = TICKER_MAP[subaccountId];
    if (ticker && this.cache.quotes[ticker]) {
      const q = this.cache.quotes[ticker];
      return {
        dailyChange: q.changesPercentage,
        price: q.price,
        previousClose: q.previousClose,
        isLive: true,
        source: ticker,
        proxyType: 'direct',
      };
    }

    // Fall back to index-based estimation
    const idx = INDEX_MAP[assetClass];
    if (idx?.ticker && this.cache.quotes[idx.ticker]) {
      const q = this.cache.quotes[idx.ticker];
      const beta = STYLE_BETA[style] || 1.0;
      return {
        dailyChange: q.changesPercentage * beta,
        price: null,
        previousClose: null,
        isLive: true,
        source: idx.ticker,
        proxyType: 'index',
        indexName: idx.name,
        beta,
      };
    }

    return null;
  }

  // ── Apply Live Data to Subaccounts Array ────────────────────────────────
  enrichSubaccounts(subaccounts) {
    if (!this.cache?.quotes) return subaccounts;

    return subaccounts.map(fund => {
      const change = this.getDailyChange(fund.id, fund.assetClass, fund.style);
      if (!change) return fund;

      return {
        ...fund,
        _live: {
          dailyChange: change.dailyChange,
          source: change.source,
          proxyType: change.proxyType,
          indexName: change.indexName,
          isLive: true,
        }
      };
    });
  }

  // ── Stats ───────────────────────────────────────────────────────────────
  getStats() {
    const totalMapped = Object.keys(TICKER_MAP).length;
    const uniqueTickers = new Set(Object.values(TICKER_MAP)).size;
    const cachedQuotes = this.cache?.quotes ? Object.keys(this.cache.quotes).length : 0;
    return {
      totalMapped,
      uniqueTickers,
      cachedQuotes,
      lastUpdated: this.lastUpdated ? new Date(this.lastUpdated) : null,
      hasApiKey: this.hasApiKey(),
      marketStatus: this.getMarketStatus(),
      cacheAge: this.lastUpdated ? Math.round((Date.now() - this.lastUpdated) / 60000) : null,
    };
  }

  // ── Format Helpers ──────────────────────────────────────────────────────
  formatTimestamp() {
    if (!this.lastUpdated) return 'Never';
    const d = new Date(this.lastUpdated);
    const now = Date.now();
    const diff = now - this.lastUpdated;

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.round(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.round(diff / 3600000)}h ago`;

    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  }
}

// ── Singleton Export ───────────────────────────────────────────────────────
export const marketData = new MarketDataService();

// ── Helper: Format daily change with color ────────────────────────────────
export function formatDailyChange(change) {
  if (change == null) return '<span class="text-slate-400 text-xs">—</span>';
  const val = Number(change);
  const sign = val >= 0 ? '+' : '';
  const color = val > 0 ? 'text-emerald-600 dark:text-emerald-400'
               : val < 0 ? 'text-red-600 dark:text-red-400'
               : 'text-slate-500';
  return `<span class="font-mono text-xs font-semibold ${color}">${sign}${val.toFixed(2)}%</span>`;
}

// ── Helper: Live badge ────────────────────────────────────────────────────
export function liveBadge(fund) {
  if (!fund._live) return '';
  const title = fund._live.proxyType === 'direct'
    ? `Live data via ${fund._live.source}`
    : `Estimated via ${fund._live.indexName || fund._live.source} index`;
  const color = fund._live.proxyType === 'direct'
    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
    : 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400';
  const label = fund._live.proxyType === 'direct' ? 'Live' : 'Est.';
  return `<span title="${title}" class="inline-flex items-center ml-1 px-1 py-0.5 ${color} text-[9px] font-bold rounded align-middle">${label}</span>`;
}
