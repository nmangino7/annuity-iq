import { carriers } from './carriers.js';
import { fiaProducts } from './fia-products.js';
import { glwbRiders } from './glwb-riders.js';
import { iulProducts } from './iul-products.js';
import { rilaProducts } from './rila-products.js';
import { vaProducts } from './va-products.js';
import { vulProducts } from './vul-products.js';
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

export function getSubaccounts() { return subaccounts; }

export function getBenchmarks() { return benchmarks; }
export function getHistorical() { return historicalRates; }

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
  return null;
}

export function getCarrierProducts(carrierId) {
  return {
    fia: fiaProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'fia', carrier: carrierMap.get(p.carrierId) })),
    glwb: glwbRiders.filter(r => r.carrierId === carrierId).map(r => ({ ...r, type: 'glwb', carrier: carrierMap.get(r.carrierId) })),
    iul: iulProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'iul', carrier: carrierMap.get(p.carrierId) })),
    rila: rilaProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'rila', carrier: carrierMap.get(p.carrierId) })),
    va: vaProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'va', carrier: carrierMap.get(p.carrierId) })),
    vul: vulProducts.filter(p => p.carrierId === carrierId).map(p => ({ ...p, type: 'vul', carrier: carrierMap.get(p.carrierId) }))
  };
}

export function searchAll(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  const results = [];

  carriers.forEach(c => {
    if (c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q)) {
      results.push({ id: c.id, name: c.shortName, type: 'carrier', route: `/carriers/${c.id}` });
    }
  });

  fiaProducts.forEach(p => {
    if (p.name.toLowerCase().includes(q) || (carrierMap.get(p.carrierId)?.shortName || '').toLowerCase().includes(q)) {
      results.push({ id: p.id, name: `${carrierMap.get(p.carrierId)?.shortName || ''} ${p.name}`, type: 'fia', route: `/fia/${p.id}` });
    }
  });

  glwbRiders.forEach(r => {
    if (r.name.toLowerCase().includes(q) || (carrierMap.get(r.carrierId)?.shortName || '').toLowerCase().includes(q)) {
      results.push({ id: r.id, name: `${carrierMap.get(r.carrierId)?.shortName || ''} ${r.name}`, type: 'glwb', route: `/glwb/${r.id}` });
    }
  });

  iulProducts.forEach(p => {
    if (p.name.toLowerCase().includes(q) || (carrierMap.get(p.carrierId)?.shortName || '').toLowerCase().includes(q)) {
      results.push({ id: p.id, name: `${carrierMap.get(p.carrierId)?.shortName || ''} ${p.name}`, type: 'iul', route: `/iul/${p.id}` });
    }
  });

  rilaProducts.forEach(p => {
    if (p.name.toLowerCase().includes(q) || (carrierMap.get(p.carrierId)?.shortName || '').toLowerCase().includes(q)) {
      results.push({ id: p.id, name: `${carrierMap.get(p.carrierId)?.shortName || ''} ${p.name}`, type: 'rila', route: `/rila/${p.id}` });
    }
  });

  vaProducts.forEach(p => {
    if (p.name.toLowerCase().includes(q) || (carrierMap.get(p.carrierId)?.shortName || '').toLowerCase().includes(q)) {
      results.push({ id: p.id, name: `${carrierMap.get(p.carrierId)?.shortName || ''} ${p.name}`, type: 'va', route: `/va/${p.id}` });
    }
  });

  vulProducts.forEach(p => {
    if (p.name.toLowerCase().includes(q) || (carrierMap.get(p.carrierId)?.shortName || '').toLowerCase().includes(q)) {
      results.push({ id: p.id, name: `${carrierMap.get(p.carrierId)?.shortName || ''} ${p.name}`, type: 'vul', route: `/vul/${p.id}` });
    }
  });

  subaccounts.forEach(s => {
    if (s.name.toLowerCase().includes(q) || s.manager.toLowerCase().includes(q) || (s.ticker || '').toLowerCase().includes(q)) {
      results.push({ id: s.id, name: `${s.name}`, type: 'fund', route: `/funds/${s.id}` });
    }
  });

  return results.slice(0, 30);
}
