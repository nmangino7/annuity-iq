#!/usr/bin/env node
// Render smoke test: imports every data-driven page and renders it (plus a detail
// view of each type) against the REAL data, with a minimal DOM stub. Catches the
// "white screen" class of bugs (undefined derefs during render / _pageInit) that
// unit tests don't, without needing a browser. Exits non-zero on any throw.

// ── Minimal DOM / browser stubs ──────────────────────────────────────────────
const fakeEl = () => ({
  innerHTML: '', textContent: '', value: '', style: {},
  classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
  setAttribute() {}, removeAttribute() {}, addEventListener() {}, removeEventListener() {},
  appendChild() {}, remove() {}, scrollIntoView() {},
  querySelector: () => fakeEl(), querySelectorAll: () => [],
});
globalThis.window = globalThis.window || {};
globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.document = {
  getElementById: () => fakeEl(), querySelector: () => fakeEl(), querySelectorAll: () => [],
  createElement: () => fakeEl(), addEventListener() {}, body: fakeEl(),
  documentElement: { classList: { contains: () => false }, className: '' },
};
globalThis.ApexCharts = function () { return { render() {}, updateOptions() {}, destroy() {} }; };
globalThis.location = { hash: '' };

const {
  getFIAProducts, getIULProducts, getRILAProducts, getVAProducts, getVULProducts,
  getGLWBRiders, getMYGAProducts, getBonds, getSubaccounts, getCarriers,
} = await import('../src/data/index.js');

const id = (arr) => (arr()[0]?.id);

const cases = [];
const add = (name, fn) => cases.push({ name, fn });

const D = await import('../src/pages/Dashboard.js');           add('Dashboard', () => D.renderDashboard());
const FIA = await import('../src/pages/FIAExplorer.js');       add('FIAExplorer', () => FIA.renderFIAExplorer());
const IUL = await import('../src/pages/IULExplorer.js');       add('IULExplorer', () => IUL.renderIULExplorer());
const GLWB = await import('../src/pages/GLWBExplorer.js');     add('GLWBExplorer', () => GLWB.renderGLWBExplorer());
const RILA = await import('../src/pages/RILAExplorer.js');     add('RILAExplorer', () => RILA.renderRILAExplorer());
const VA = await import('../src/pages/VAExplorer.js');         add('VAExplorer', () => VA.renderVAExplorer());
const VUL = await import('../src/pages/VULExplorer.js');       add('VULExplorer', () => VUL.renderVULExplorer());
const FUND = await import('../src/pages/FundExplorer.js');     add('FundExplorer', () => FUND.renderFundExplorer());
const MYGA = await import('../src/pages/MYGAExplorer.js');     add('MYGAExplorer', () => MYGA.renderMYGAExplorer());
const BOND = await import('../src/pages/BondExplorer.js');     add('BondExplorer', () => BOND.renderBondExplorer());
const PD = await import('../src/pages/ProductDetail.js');
const CAR = await import('../src/pages/Carriers.js');          add('Carriers', () => CAR.renderCarriers());
const CP = await import('../src/pages/CarrierProfile.js');
const SCR = await import('../src/pages/Screener.js');          add('Screener', () => SCR.renderScreener());
const CMP = await import('../src/pages/CompareView.js');       add('CompareView', () => CMP.renderCompare());
const BM = await import('../src/pages/Benchmark.js');          add('Benchmark', () => BM.renderBenchmark());
const HIS = await import('../src/pages/History.js');           add('History', () => HIS.renderHistory());
const CALC = await import('../src/pages/Calculator.js');       add('Calculator', () => CALC.renderCalculator());

// Detail views with a real id of each type
add('FIA detail', () => PD.renderProductDetail(id(getFIAProducts), 'fia'));
add('IUL detail', () => PD.renderProductDetail(id(getIULProducts), 'iul'));
add('GLWB detail', () => PD.renderProductDetail(id(getGLWBRiders), 'glwb'));
add('RILA detail', () => RILA.renderRILADetail(id(getRILAProducts)));
add('VA detail', () => VA.renderVADetail(id(getVAProducts)));
add('VUL detail', () => VUL.renderVULDetail(id(getVULProducts)));
add('Fund detail', () => FUND.renderFundDetail(id(getSubaccounts)));
add('MYGA detail', () => MYGA.renderMYGADetail(id(getMYGAProducts)));
add('Bond detail', () => BOND.renderBondDetail(id(getBonds)));
add('Carrier profile', () => CP.renderCarrierProfile(id(getCarriers)));

let failed = 0;
for (const { name, fn } of cases) {
  try {
    const html = fn();
    if (typeof html !== 'string' || html.length < 20) throw new Error('empty/short render output');
    // Exercise deferred page-init (table builders) if the page registered one.
    if (typeof window._pageInit === 'function') { window._pageInit(); window._pageInit = undefined; }
    console.log(`  ✓ ${name}`);
  } catch (e) {
    failed++;
    console.log(`  ✖ ${name}: ${e.message}`);
  }
}

console.log(failed ? `\nFAILED: ${failed}/${cases.length} pages threw` : `\n✓ all ${cases.length} pages rendered`);
process.exit(failed ? 1 : 0);
