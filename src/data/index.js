import { carriers } from './carriers.js';
import { fiaProducts } from './fia-products.js';
import { glwbRiders } from './glwb-riders.js';
import { iulProducts } from './iul-products.js';
import { rilaProducts } from './rila-products.js';
import { vaProducts } from './va-products.js';
import { vulProducts } from './vul-products.js';
import { mygaProducts } from './myga-products.js';
import { corporateBonds } from './corporate-bonds.js';
import { municipalBonds } from './municipal-bonds.js';
import { subaccounts } from './subaccounts.js';
import { benchmarks } from './benchmarks.js';
import { historicalRates } from './historical.js';

const carrierMap = new Map(carriers.map(c => [c.id, c]));

export function getCarriers() { return carriers; }
export function getCarrier(id) { return carrierMap.get(id); }

export function getFIAProducts() {
  return fiaProducts.map(p => ({ ...p, carrier: carrierMap.get(p.carrierId) }));
}

export function getGLWBRiders() {
  return glwbRiders.map(r => ({ ...r, carrier: carrierMap.get(r.carrierId) }));
}

export function getIULProducts() {
  return iulProducts.map(p => ({ ...p, carrier: carrierMap.get(p.carrierId) }));
}

export function getRILAProducts() {
  return rilaProducts.map(p => ({ ...p, carrier: carrierMap.get(p.carrierId) }));
}

export function getVAProducts() {
  return vaProducts.map(p => ({ ...p, carrier: carrierMap.get(p.carrierId) }));
}

export function getVULProducts() {
  return vulProducts.map(p => ({ ...p, carrier: carrierMap.get(p.carrierId) }));
}

export function getMYGAProducts() {
  return mygaProducts.map(p => ({ ...p, carrier: carrierMap.get(p.carrierId) }));
}

export function getCorporateBonds() { return corporateBonds.map(b => ({ ...b, bondType: 'corp' })); }
export function getMunicipalBonds() { return municipalBonds.map(b => ({ ...b, bondType: 'muni' })); }

// Combined feed for the Bond Yields explorer. Bonds are benchmark yields, not
// carrier products, so there's no carrier join.
export function getBonds() {
  return [...getCorporateBonds(), ...getMunicipalBonds()];
}

export function getSubaccounts() { return subaccounts; }

export function getBenchmarks() { return benchmarks; }
export function getHistorical() { return historicalRates; }

// Aggregate data-trust stats for freshness/verification indicators in the UI.
export function getDataStats() {
  const products = [...fiaProducts, ...iulProducts, ...rilaProducts, ...vaProducts, ...vulProducts, ...glwbRiders, ...mygaProducts];
  const bonds = [...corporateBonds, ...municipalBonds];
  const dates = [];
  let verified = 0, partial = 0;
  // Products use `ratesVerified`; bonds use `yieldVerified` — count both flavors.
  for (const p of [...products, ...bonds]) {
    const flag = p.ratesVerified ?? p.yieldVerified;
    if (flag === true) verified++;
    else if (flag === 'partial') partial++;
    if (p.lastVerifiedDate) dates.push(p.lastVerifiedDate);
  }
  for (const s of subaccounts) if (s.lastVerifiedDate) dates.push(s.lastVerifiedDate);
  for (const c of carriers) if (c.lastVerifiedDate) dates.push(c.lastVerifiedDate);
  dates.sort();
  return {
    totalProducts: products.length,
    verifiedProducts: verified,
    partialProducts: partial,
    totalBonds: bonds.length,
    totalFunds: subaccounts.length,
    totalCarriers: carriers.length,
    latestVerifiedDate: dates.length ? dates[dates.length - 1] : null,
  };
}

export function getProduct(id) {
  const fia = fiaProducts.find(p => p.id === id);
  if (fia) return { ...fia, type: 'fia', carrier: carrierMap.get(fia.carrierId) };
  const glwb = glwbRiders.find(r => r.id === id);
  if (glwb) return { ...glwb, type: 'glwb', carrier: carrierMap.get(glwb.carrierId) };
  const iul = iulProducts.find(p => p.id === id);
  if (iul) return { ...iul, type: 'iul', carrier: carrierMap.get(iul.carrierId) };
  const rila = rilaProducts.find(p => p.id === id);
  if (rila) return { ...rila, type: 'rila', carrier: carrierMap.get(rila.carrierId) };
  const va = vaProducts.find(p => p.id === id);
  if (va) return { ...va, type: 'va', carrier: carrierMap.get(va.carrierId) };
  const vul = vulProducts.find(p => p.id === id);
  if (vul) return { ...vul, type: 'vul', carrier: carrierMap.get(vul.carrierId) };
  const myga = mygaProducts.find(p => p.id === id);
  if (myga) return { ...myga, type: 'myga', carrier: carrierMap.get(myga.carrierId) };
  const corp = corporateBonds.find(b => b.id === id);
  if (corp) return { ...corp, type: 'corp', bondType: 'corp' };
  const muni = municipalBonds.find(b => b.id === id);
  if (muni) return { ...muni, type: 'muni', bondType: 'muni' };
  return null;
}

export function getCarrierProducts(carrierId) {
  return {
    fia: fiaProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'fia', carrier: carrierMap.get(p.carrierId) })),
    glwb: glwbRiders.filter(r => r.carrierId === carrierId).map(r => ({ ...r, type: 'glwb', carrier: carrierMap.get(r.carrierId) })),
    iul: iulProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'iul', carrier: carrierMap.get(p.carrierId) })),
    rila: rilaProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'rila', carrier: carrierMap.get(p.carrierId) })),
    va: vaProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'va', carrier: carrierMap.get(p.carrierId) })),
    vul: vulProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'vul', carrier: carrierMap.get(p.carrierId) })),
    myga: mygaProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'myga', carrier: carrierMap.get(p.carrierId) }))
  };
}

// Ranked, fuzzy, multi-field search lives in ./search.js (re-exported for back-compat).
export { searchAll, searchGrouped, typeLabels, typeColors } from './search.js';
