import {
  User,
  Building,
  BookOpen,
  Globe,
  Receipt,
} from '../components/Icons'

export const services = [
  {
    slug: 'individual',
    name: 'Individual & Family Tax',
    icon: User,
    img: '/services-img/individual.jpg',
    tagline: 'Accurate personal returns, every deduction maximized.',
    summary:
      "Whether you're a W-2 employee, freelancer with 1099s, multi-state remote worker, rental owner, RSU holder, or crypto trader — we file accurately and find every deduction you're owed.",
    price: 'From $175',
    features: [
      'Federal & multi-state returns',
      'W-2, 1099 & gig income',
      'Itemized deductions & credits',
      'Rental property & investments',
      'RSU & crypto reporting',
      'Reviewed & signed by a tax pro',
    ],
    who: ['W-2 employees', 'Freelancers & 1099 contractors', 'Multi-state / remote workers', 'Homeowners & investors'],
  },
  {
    slug: 'business',
    name: 'Business Tax & Compliance',
    icon: Building,
    img: '/services-img/business.jpg',
    tagline: 'Done-for-you filings for LLCs, S-corps & C-corps.',
    summary:
      'Support for LLCs, partnerships, S corporations, and C corporations — from year-end write-up to tax optimization and full business reviews.',
    price: 'From $650',
    features: [
      'Federal & state business returns',
      'LLC, S-corp, C-corp & partnership',
      'Year-end write-up',
      'Tax optimization & planning',
      'Multi-rental & K-1 income',
      'Combined business + personal filing',
    ],
    who: ['LLCs & corporations', 'Partnerships', 'Startups & small businesses', 'Multi-entity owners'],
  },
  {
    slug: 'bookkeeping',
    name: 'Bookkeeping & Accounting',
    icon: BookOpen,
    img: '/services-img/bookkeeping.jpg',
    tagline: 'Clean books, closed monthly — by dedicated experts.',
    summary:
      'Dedicated bookkeeping experts keep your books accurate and up to date, with monthly P&L and balance-sheet reporting and unlimited team communication.',
    price: 'From $349/mo',
    features: [
      'Dedicated bookkeeping team',
      'Monthly close, on time',
      'P&L & balance sheet reporting',
      'Catch-up bookkeeping',
      'Unlimited team communication',
      'Optional tax-filing add-on',
    ],
    who: ['Small businesses', 'Startups', 'Self-employed pros', 'Anyone behind on books'],
  },
  {
    slug: 'fbar',
    name: 'FBAR & FATCA Reporting',
    icon: Globe,
    img: '/services-img/fbar.jpg',
    tagline: 'Stay compliant on foreign accounts & income.',
    summary:
      'Expert guidance on FBAR, FATCA, and foreign income reporting so you meet every cross-border obligation and avoid steep penalties.',
    price: 'Custom quote',
    features: [
      'FBAR (FinCEN 114) filing',
      'FATCA (Form 8938)',
      'Foreign income reporting',
      'Foreign tax credits',
      'PFIC & foreign accounts',
      'Penalty-risk review',
    ],
    who: ['U.S. persons with foreign accounts', 'Dual citizens', 'Expats', 'Cross-border investors'],
  },
  {
    slug: 'nri',
    name: 'NRI & Cross-Border Tax',
    icon: Receipt,
    img: '/services-img/nri.jpg',
    tagline: 'Indian + U.S. tax, handled together.',
    summary:
      'Specialized cross-border support for NRIs — coordinating your U.S. and Indian tax filings, foreign income, and treaty benefits in one place.',
    price: 'Custom quote',
    features: [
      'U.S. & India tax filing',
      'Foreign income & DTAA treaty',
      'FBAR / FATCA for NRIs',
      'Repatriation & remittance',
      'RSU / ESPP across borders',
      'Dedicated NRI specialist',
    ],
    who: ['NRIs in the U.S.', 'Returning residents', 'Cross-border professionals', 'Indian-origin investors'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
