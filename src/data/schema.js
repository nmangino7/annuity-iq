// =============================================================================
// schema.js — Single source of truth for data shape + plausibility ranges.
// Consumed by scripts/validate-data.mjs (and available to any future tooling).
// Pure data, no runtime cost to the app. Keep field names in sync with src/data/*.js.
// =============================================================================

// Required top-level fields per collection. A record missing any of these is an ERROR.
// Rate/fee fields are intentionally NOT required — per the "omit unverifiable fields"
// policy a record may legitimately carry no rate data at all.
export const PRODUCT_SCHEMAS = {
  carriers:    { idField: 'id', required: ['id', 'name', 'shortName', 'ratings', 'productCategories'] },
  fiaProducts: { idField: 'id', required: ['id', 'carrierId', 'name'], carrierRef: true, crossTypeId: true },
  iulProducts: { idField: 'id', required: ['id', 'carrierId', 'name'], carrierRef: true, crossTypeId: true },
  rilaProducts:{ idField: 'id', required: ['id', 'carrierId', 'name'], carrierRef: true, crossTypeId: true },
  vaProducts:  { idField: 'id', required: ['id', 'carrierId', 'name'], carrierRef: true, crossTypeId: true, subaccountRef: true },
  vulProducts: { idField: 'id', required: ['id', 'carrierId', 'name'], carrierRef: true, crossTypeId: true, subaccountRef: true },
  glwbRiders:  { idField: 'id', required: ['id', 'carrierId', 'name'], carrierRef: true, crossTypeId: true },
  mygaProducts:{ idField: 'id', required: ['id', 'carrierId', 'name'], carrierRef: true, crossTypeId: true },
  // Bonds are benchmark YIELD references, not carrier products: no carrierId, so no carrierRef.
  corporateBonds: { idField: 'id', required: ['id', 'name'], crossTypeId: true },
  municipalBonds: { idField: 'id', required: ['id', 'name'], crossTypeId: true },
  treasuryBonds:  { idField: 'id', required: ['id', 'name'], crossTypeId: true },
  // Managed accounts (SMA / model portfolios): owner-provided, no carrierId.
  managedAccounts: { idField: 'id', required: ['id', 'name', 'firm'], crossTypeId: true },
  subaccounts: { idField: 'id', required: ['id', 'name', 'assetClass'] },
};

// Collections whose ids share one namespace because getProduct() (src/data/index.js)
// resolves by bare id across all of them — a cross-type collision silently shadows.
export const CROSS_TYPE_COLLECTIONS = ['fiaProducts', 'iulProducts', 'rilaProducts', 'vaProducts', 'vulProducts', 'glwbRiders', 'mygaProducts', 'corporateBonds', 'municipalBonds', 'treasuryBonds', 'managedAccounts'];

// Allowed values for the verification flag shared across product records.
export const RATES_VERIFIED_ENUM = [true, false, 'partial'];

const THIS_YEAR = new Date().getFullYear();

// Plausibility ranges [min, max] inclusive. Out-of-range => WARNING (real outliers exist;
// e.g. participation rates >400% are real on uncapped strategies), never a hard error.
// Checked recursively on any matching key name found anywhere in a record.
export const RANGES = {
  capRate:            [0, 1000],         // multi-year RILA point-to-point caps legitimately exceed 100%
  participationRate:  [0, 1000],
  spread:             [0, 25],
  floor:              [-100, 5],         // most floors are 0/negative, but some IULs guarantee a small positive floor
  triggerRate:        [0, 100],
  bufferLevel:        [0, 100],
  floorLevel:         [-100, 0],
  fixedAccountRate:   [0, 15],
  guaranteedRate:     [0, 15],          // MYGA declared rate
  currentYield:       [0, 25],          // bond benchmark yield
  taxableEquivalentYield: [0, 40],      // muni yield grossed up for tax
  termYears:          [1, 20],          // MYGA guarantee term
  guaranteedMinimumRate: [0, 10],
  guaranteedMinCreditingRate: [0, 10],
  premiumBonus:       [0, 30],
  freeWithdrawalPercent: [0, 100],
  maxIllustratedRate: [0, 12],
  riderFee:           [0, 10],
  meCharge:           [0, 5],
  adminFee:           [0, 1000],         // dollar OR percent depending on adminFeeType
  totalAnnualCharge:  [0, 5],
  surrenderPeriod:    [0, 20],
  maximumIssueAge:    [0, 100],
  expenseRatio:       [0, 10],         // alt/long-short SMA models legitimately run high (short borrow + dividend costs)
  ytdReturn:          [-100, 200],
  oneYearReturn:      [-100, 200],
  threeYearReturn:    [-100, 100],
  fiveYearReturn:     [-100, 100],
  tenYearReturn:      [-100, 100],
  standardDeviation:  [0, 100],
  sharpeRatio:        [-5, 10],
  morningstarRating:  [1, 5],
  turnoverRate:       [0, 1000],
  comdex:             [0, 100],
  foundedYear:        [1700, THIS_YEAR],
  yearsInBusiness:    [0, 400],
};

// Keys that are "facts" — when present with ratesVerified===true the record should also
// carry provenance (lastVerifiedDate + a source). Used for the provenance audit (WARNING).
export const PROVENANCE_KEYS = ['lastVerifiedDate'];
export const SOURCE_KEYS = ['verificationSource', 'sourceUrl', 'verificationNote'];

// ISO date (YYYY-MM-DD) or year-month (YYYY-MM) — both appear in the data (discontinuedDate).
export const ISO_DATE_RE = /^\d{4}-\d{2}(-\d{2})?$/;
