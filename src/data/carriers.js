export const carriers = [
  {
    id: "allianz-life",
    name: "Allianz Life Insurance Company of North America",
    shortName: "Allianz Life",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 94
    },
    yearsInBusiness: 130,
    foundedYear: 1896,
    headquarters: "Minneapolis, MN",
    totalAssets: "$260B",
    productCategories: ["fia", "glwb", "iul"],
    website: "https://www.allianzlife.com"
  },
  {
    id: "nationwide",
    name: "Nationwide Life Insurance Company",
    shortName: "Nationwide",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 93
    },
    yearsInBusiness: 98,
    foundedYear: 1928,
    headquarters: "Columbus, OH",
    totalAssets: "$280B",
    productCategories: ["fia", "glwb", "iul", "va", "vul"],
    website: "https://www.nationwide.com"
  },
  {
    id: "north-american",
    name: "North American Company for Life and Health Insurance",
    shortName: "North American (Sammons)",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 90
    },
    yearsInBusiness: 138,
    foundedYear: 1886,
    headquarters: "Sioux Falls, SD",
    totalAssets: "$38B",
    productCategories: ["fia", "glwb", "iul", "va", "rila"],
    website: "https://www.northamericancompany.com"
  },
  {
    id: "athene",
    name: "Athene Annuity and Life Company",
    shortName: "Athene",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: { rating: "A+", outlook: "Stable" },
      comdex: 90
    },
    yearsInBusiness: 15,
    foundedYear: 2009,
    headquarters: "West Des Moines, IA",
    totalAssets: "$290B",
    productCategories: ["fia", "myga", "spia"],
    website: "https://www.athene.com"
  },
  {
    id: "american-equity",
    name: "American Equity Investment Life Insurance Company",
    shortName: "American Equity",
    ratings: {
      amBest: { rating: "A-", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: null,
      comdex: 72
    },
    yearsInBusiness: 29,
    foundedYear: 1995,
    headquarters: "West Des Moines, IA",
    totalAssets: "$70B",
    productCategories: ["fia", "glwb", "myga"],
    website: "https://www.american-equity.com"
  },
  {
    id: "fandg",
    name: "Fidelity & Guaranty Life Insurance Company",
    shortName: "F&G",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A-", outlook: "Stable" },
      moodys: { rating: "Baa1", outlook: "Stable" },
      fitch: { rating: "A-", outlook: "Stable" },
      comdex: 76
    },
    yearsInBusiness: 65,
    foundedYear: 1959,
    headquarters: "Des Moines, IA",
    totalAssets: "$50B",
    productCategories: ["fia", "glwb", "iul", "myga", "rila", "va"],
    website: "https://www.fglife.com"
  },
  {
    id: "pacific-life",
    name: "Pacific Life Insurance Company",
    shortName: "Pacific Life",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 95
    },
    yearsInBusiness: 158,
    foundedYear: 1868,
    headquarters: "Newport Beach, CA",
    totalAssets: "$200B",
    productCategories: ["fia", "glwb", "iul", "va", "vul"],
    website: "https://www.pacificlife.com"
  },
  {
    id: "lincoln-financial",
    name: "Lincoln National Life Insurance Company",
    shortName: "Lincoln Financial",
    ratings: {
      amBest: { rating: "A+", outlook: "Negative" },
      sAndP: { rating: "A+", outlook: "Negative" },
      moodys: { rating: "A1", outlook: "Negative" },
      fitch: { rating: "A+", outlook: "Negative" },
      comdex: 88
    },
    yearsInBusiness: 119,
    foundedYear: 1905,
    headquarters: "Radnor, PA",
    totalAssets: "$350B",
    productCategories: ["fia", "glwb", "iul", "va", "vul", "rila", "term"],
    website: "https://www.lincolnfinancial.com"
  },
  {
    id: "prudential",
    name: "Prudential Insurance Company of America",
    shortName: "Prudential",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: { rating: "AA-", outlook: "Stable" },
      comdex: 95
    },
    yearsInBusiness: 150,
    foundedYear: 1875,
    headquarters: "Newark, NJ",
    totalAssets: "$900B",
    productCategories: ["fia", "iul", "va", "term", "whole-life", "vul"],
    website: "https://www.prudential.com"
  },
  {
    id: "jackson-national",
    name: "Jackson National Life Insurance Company",
    shortName: "Jackson National",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: { rating: "A+", outlook: "Stable" },
      comdex: 89
    },
    yearsInBusiness: 63,
    foundedYear: 1961,
    headquarters: "Lansing, MI",
    totalAssets: "$340B",
    productCategories: ["fia", "glwb", "iul", "va", "rila"],
    website: "https://www.jackson.com"
  },
  {
    id: "great-american",
    name: "Great American Life Insurance Company",
    shortName: "Great American",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 88
    },
    yearsInBusiness: 152,
    foundedYear: 1872,
    headquarters: "Cincinnati, OH",
    totalAssets: "$55B",
    productCategories: ["fia", "glwb", "myga"],
    website: "https://www.greatamericaninsurancegroup.com"
  },
  {
    id: "midland-national",
    name: "Midland National Life Insurance Company",
    shortName: "Midland National",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 90
    },
    yearsInBusiness: 118,
    foundedYear: 1906,
    headquarters: "Sioux Falls, SD",
    totalAssets: "$48B",
    productCategories: ["fia", "glwb", "iul", "myga"],
    website: "https://www.midlandnational.com"
  },
  {
    id: "securian",
    name: "Securian Financial Group",
    shortName: "Securian",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 93
    },
    yearsInBusiness: 144,
    foundedYear: 1880,
    headquarters: "St. Paul, MN",
    totalAssets: "$95B",
    productCategories: ["fia", "iul", "term", "whole-life", "vul"],
    website: "https://www.securian.com"
  },
  {
    id: "transamerica",
    name: "Transamerica Life Insurance Company",
    shortName: "Transamerica",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 93
    },
    yearsInBusiness: 98,
    foundedYear: 1928,
    headquarters: "Cedar Rapids, IA",
    totalAssets: "$250B",
    productCategories: ["fia", "glwb", "iul", "va", "vul", "rila"],
    website: "https://www.transamerica.com"
  },
  {
    id: "global-atlantic",
    name: "Global Atlantic Financial Group",
    shortName: "Global Atlantic",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A", outlook: "Stable" },
      moodys: null,
      fitch: { rating: "A-", outlook: "Stable" },
      comdex: 82
    },
    yearsInBusiness: 20,
    foundedYear: 2004,
    headquarters: "New York, NY",
    totalAssets: "$160B",
    productCategories: ["fia", "glwb", "myga", "rila", "va"],
    website: "https://www.globalatlantic.com"
  },
  {
    id: "protective-life",
    name: "Protective Life Insurance Company",
    shortName: "Protective Life",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 93
    },
    yearsInBusiness: 117,
    foundedYear: 1907,
    headquarters: "Birmingham, AL",
    totalAssets: "$120B",
    productCategories: ["fia", "iul", "term", "va", "vul", "rila"],
    website: "https://www.protective.com"
  },
  {
    id: "brighthouse-financial",
    name: "Brighthouse Life Insurance Company",
    shortName: "Brighthouse Financial",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A", outlook: "Stable" },
      moodys: { rating: "A3", outlook: "Stable" },
      fitch: null,
      comdex: 80
    },
    yearsInBusiness: 9,
    foundedYear: 2017,
    headquarters: "Charlotte, NC",
    totalAssets: "$240B",
    productCategories: ["fia", "glwb", "va", "vul"],
    website: "https://www.brighthousefinancial.com"
  },
  {
    id: "massmutual",
    name: "Massachusetts Mutual Life Insurance Company",
    shortName: "MassMutual",
    ratings: {
      amBest: { rating: "A++", outlook: "Stable" },
      sAndP: { rating: "AA+", outlook: "Stable" },
      moodys: { rating: "Aa3", outlook: "Stable" },
      fitch: { rating: "AA+", outlook: "Stable" },
      comdex: 98
    },
    yearsInBusiness: 175,
    foundedYear: 1851,
    headquarters: "Springfield, MA",
    totalAssets: "$780B",
    productCategories: ["whole-life", "term", "iul", "va", "rila", "vul"],
    website: "https://www.massmutual.com"
  },
  {
    id: "new-york-life",
    name: "New York Life Insurance Company",
    shortName: "New York Life",
    ratings: {
      amBest: { rating: "A++", outlook: "Stable" },
      sAndP: { rating: "AA+", outlook: "Stable" },
      moodys: { rating: "Aaa", outlook: "Stable" },
      fitch: { rating: "AAA", outlook: "Stable" },
      comdex: 98
    },
    yearsInBusiness: 181,
    foundedYear: 1845,
    headquarters: "New York, NY",
    totalAssets: "$400B",
    productCategories: ["whole-life", "term", "fia", "iul", "va", "vul"],
    website: "https://www.newyorklife.com"
  },
  {
    id: "equitable",
    name: "Equitable Financial Life Insurance Company",
    shortName: "Equitable",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 91
    },
    yearsInBusiness: 165,
    foundedYear: 1859,
    headquarters: "New York, NY",
    totalAssets: "$300B",
    productCategories: ["fia", "iul", "va", "vul", "rila", "term"],
    website: "https://www.equitable.com"
  },
  {
    id: "delaware-life",
    name: "Delaware Life Insurance Company",
    shortName: "Delaware Life",
    ratings: {
      amBest: { rating: "A-", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: null,
      comdex: 70
    },
    yearsInBusiness: 95,
    foundedYear: 1929,
    headquarters: "Waltham, MA",
    totalAssets: "$40B",
    productCategories: ["fia", "glwb", "va"],
    website: "https://www.delawarelife.com"
  },
  {
    id: "eagle-life",
    name: "Eagle Life Insurance Company",
    shortName: "Eagle Life",
    ratings: {
      amBest: { rating: "A-", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: null,
      comdex: 71
    },
    yearsInBusiness: 27,
    foundedYear: 1997,
    headquarters: "West Des Moines, IA",
    totalAssets: "$8B",
    productCategories: ["fia", "myga"],
    website: "https://www.eagle-lifeco.com"
  },
  {
    id: "symetra",
    name: "Symetra Life Insurance Company",
    shortName: "Symetra",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 82
    },
    yearsInBusiness: 67,
    foundedYear: 1957,
    headquarters: "Bellevue, WA",
    totalAssets: "$50B",
    productCategories: ["fia", "glwb", "myga", "va", "rila", "vul"],
    website: "https://www.symetra.com"
  },
  {
    id: "american-national",
    name: "American National Insurance Company",
    shortName: "American National",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 82
    },
    yearsInBusiness: 121,
    foundedYear: 1905,
    headquarters: "Galveston, TX",
    totalAssets: "$30B",
    productCategories: ["fia", "iul", "term", "whole-life"],
    website: "https://www.americannational.com"
  },
  {
    id: "mutual-of-omaha",
    name: "Mutual of Omaha Insurance Company",
    shortName: "Mutual of Omaha",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 93
    },
    yearsInBusiness: 117,
    foundedYear: 1909,
    headquarters: "Omaha, NE",
    totalAssets: "$45B",
    productCategories: ["iul", "term", "whole-life"],
    website: "https://www.mutualofomaha.com"
  },
  {
    id: "corebridge-financial",
    name: "Corebridge Financial (formerly AIG Life & Retirement)",
    shortName: "Corebridge Financial",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: { rating: "A2", outlook: "Stable" },
      fitch: null,
      comdex: 85
    },
    yearsInBusiness: 103,
    foundedYear: 1921,
    headquarters: "Houston, TX",
    totalAssets: "$380B",
    productCategories: ["fia", "glwb", "va", "iul", "vul"],
    website: "https://www.corebridgefinancial.com"
  },
  {
    id: "integrity-life",
    name: "Integrity Life Insurance Company",
    shortName: "Integrity Life",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: null,
      comdex: 85
    },
    yearsInBusiness: 60,
    foundedYear: 1966,
    headquarters: "Cincinnati, OH",
    totalAssets: "$12B",
    productCategories: ["fia", "glwb", "myga"],
    website: "https://www.integritylife.com"
  },
  {
    id: "ameritas",
    name: "Ameritas Life Insurance Corp.",
    shortName: "Ameritas",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: null,
      comdex: 79
    },
    yearsInBusiness: 137,
    foundedYear: 1887,
    headquarters: "Lincoln, NE",
    totalAssets: "$30B",
    productCategories: ["fia", "iul", "term", "vul"],
    website: "https://www.ameritas.com"
  },
  {
    id: "john-hancock",
    name: "John Hancock Life Insurance Company",
    shortName: "John Hancock",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 94
    },
    yearsInBusiness: 164,
    foundedYear: 1862,
    headquarters: "Boston, MA",
    totalAssets: "$290B",
    productCategories: ["iul", "term", "whole-life", "fia", "vul"],
    website: "https://www.johnhancock.com"
  },
  {
    id: "penn-mutual",
    name: "Penn Mutual Life Insurance Company",
    shortName: "Penn Mutual",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 91
    },
    yearsInBusiness: 179,
    foundedYear: 1847,
    headquarters: "Horsham, PA",
    totalAssets: "$32B",
    productCategories: ["iul", "whole-life", "term", "va", "vul"],
    website: "https://www.pennmutual.com"
  },
  {
    id: "principal-financial",
    name: "Principal Life Insurance Company",
    shortName: "Principal Financial",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 90
    },
    yearsInBusiness: 147,
    foundedYear: 1879,
    headquarters: "Des Moines, IA",
    totalAssets: "$300B",
    productCategories: ["fia", "iul", "term", "va", "vul", "rila"],
    website: "https://www.principal.com"
  },
  {
    id: "sammons-financial",
    name: "Sammons Financial Group",
    shortName: "Sammons Financial",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 90
    },
    yearsInBusiness: 138,
    foundedYear: 1886,
    headquarters: "Cedar Rapids, IA",
    totalAssets: "$58B",
    productCategories: ["fia", "glwb", "iul", "myga"],
    website: "https://www.sammonsfinancialgroup.com"
  },
  {
    id: "minnesota-life",
    name: "Minnesota Life Insurance Company",
    shortName: "Minnesota Life",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 93
    },
    yearsInBusiness: 144,
    foundedYear: 1880,
    headquarters: "St. Paul, MN",
    totalAssets: "$55B",
    productCategories: ["fia", "iul", "term", "whole-life"],
    website: "https://www.securian.com"
  },
  {
    id: "american-general",
    name: "American General Life Insurance Company",
    shortName: "American General",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: { rating: "A2", outlook: "Stable" },
      fitch: null,
      comdex: 85
    },
    yearsInBusiness: 164,
    foundedYear: 1860,
    headquarters: "Houston, TX",
    totalAssets: "$180B",
    productCategories: ["fia", "glwb", "iul", "va"],
    website: "https://www.corebridgefinancial.com"
  },
  {
    id: "gaig",
    name: "Great American Insurance Group",
    shortName: "GAIG",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 88
    },
    yearsInBusiness: 152,
    foundedYear: 1872,
    headquarters: "Cincinnati, OH",
    totalAssets: "$60B",
    productCategories: ["fia", "glwb", "myga", "spia"],
    website: "https://www.greatamericaninsurancegroup.com"
  },
  {
    id: "riversource",
    name: "RiverSource Life Insurance Company",
    shortName: "RiverSource (Ameriprise)",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: { rating: "A1", outlook: "Stable" },
      fitch: null,
      comdex: 90
    },
    yearsInBusiness: 68,
    foundedYear: 1958,
    headquarters: "Minneapolis, MN",
    totalAssets: "$1.6T",
    productCategories: ["va", "rila", "vul"],
    website: "https://www.riversource.com"
  },
  {
    id: "security-benefit",
    name: "Security Benefit Life Insurance Company",
    shortName: "Security Benefit",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: null,
      comdex: 78
    },
    yearsInBusiness: 132,
    foundedYear: 1892,
    headquarters: "Topeka, KS",
    totalAssets: "$50B",
    productCategories: ["va", "fia"],
    website: "https://www.securitybenefit.com"
  },
  {
    id: "tiaa",
    name: "TIAA-CREF Life Insurance Company",
    shortName: "TIAA",
    ratings: {
      amBest: { rating: "A++", outlook: "Stable" },
      sAndP: { rating: "AA+", outlook: "Stable" },
      moodys: { rating: "Aa1", outlook: "Stable" },
      fitch: { rating: "AAA", outlook: "Stable" },
      comdex: 99
    },
    yearsInBusiness: 106,
    foundedYear: 1918,
    headquarters: "New York, NY",
    totalAssets: "$1.3T",
    productCategories: ["va", "fia"],
    website: "https://www.tiaa.org"
  },
  {
    id: "empower",
    name: "Empower Annuity Insurance Company of America",
    shortName: "Empower (Great-West)",
    ratings: {
      amBest: { rating: "A", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 82
    },
    yearsInBusiness: 133,
    foundedYear: 1891,
    headquarters: "Greenwood Village, CO",
    totalAssets: "$1.5T",
    productCategories: ["va"],
    website: "https://www.empower.com"
  },
  {
    id: "fidelity-life",
    name: "Fidelity Investments Life Insurance Company",
    shortName: "Fidelity (FILI)",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: null,
      comdex: 85
    },
    yearsInBusiness: 39,
    foundedYear: 1985,
    headquarters: "Smithfield, RI",
    totalAssets: "$30B",
    productCategories: ["va"],
    website: "https://www.fidelity.com"
  },
  {
    id: "silac",
    name: "SILAC Insurance Company",
    shortName: "SILAC",
    ratings: {
      amBest: { rating: "B", outlook: "Stable" },
      sAndP: null,
      moodys: null,
      fitch: { rating: "BBB-", outlook: "Stable" },
      comdex: 32,
      kbra: { rating: "BBB", outlook: "Stable" }
    },
    yearsInBusiness: 91,
    foundedYear: 1935,
    headquarters: "Salt Lake City, UT",
    totalAssets: "$10B",
    productCategories: ["fia", "glwb", "myga"],
    website: "https://www.silacins.com"
  },
  {
    id: "northwestern-mutual",
    name: "Northwestern Mutual Life Insurance Company",
    shortName: "Northwestern Mutual",
    ratings: {
      amBest: { rating: "A++", outlook: "Stable" },
      sAndP: { rating: "AA+", outlook: "Stable" },
      moodys: { rating: "Aaa", outlook: "Stable" },
      fitch: { rating: "AAA", outlook: "Stable" },
      comdex: 99
    },
    yearsInBusiness: 167,
    foundedYear: 1857,
    headquarters: "Milwaukee, WI",
    totalAssets: "$350B",
    productCategories: ["whole-life", "term", "vul"],
    website: "https://www.northwesternmutual.com"
  },
  {
    id: "thrivent",
    name: "Thrivent Financial for Lutherans",
    shortName: "Thrivent",
    ratings: {
      amBest: { rating: "A++", outlook: "Stable" },
      sAndP: { rating: "AA+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 97
    },
    yearsInBusiness: 122,
    foundedYear: 1902,
    headquarters: "Minneapolis, MN",
    totalAssets: "$180B",
    productCategories: ["whole-life", "term", "iul", "vul"],
    website: "https://www.thrivent.com"
  },
  {
    id: "guardian",
    name: "Guardian Life Insurance Company of America",
    shortName: "Guardian",
    ratings: {
      amBest: { rating: "A++", outlook: "Stable" },
      sAndP: { rating: "AA+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 97
    },
    yearsInBusiness: 164,
    foundedYear: 1860,
    headquarters: "New York, NY",
    totalAssets: "$90B",
    productCategories: ["whole-life", "term", "vul"],
    website: "https://www.guardianlife.com"
  },
  {
    id: "metlife",
    name: "Metropolitan Life Insurance Company",
    shortName: "MetLife",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "AA-", outlook: "Stable" },
      moodys: { rating: "Aa3", outlook: "Stable" },
      fitch: { rating: "AA-", outlook: "Stable" },
      comdex: 96
    },
    yearsInBusiness: 158,
    foundedYear: 1868,
    headquarters: "New York, NY",
    totalAssets: "$750B",
    productCategories: ["vul", "term", "whole-life"],
    website: "https://www.metlife.com"
  },
  {
    id: "mutual-of-america",
    name: "Mutual of America Life Insurance Company",
    shortName: "Mutual of America",
    ratings: {
      amBest: { rating: "A+", outlook: "Stable" },
      sAndP: { rating: "A+", outlook: "Stable" },
      moodys: null,
      fitch: null,
      comdex: 89
    },
    yearsInBusiness: 81,
    foundedYear: 1945,
    headquarters: "New York, NY",
    totalAssets: "$25B",
    productCategories: ["vul", "va"],
    website: "https://www.mutualofamerica.com"
  }
];
