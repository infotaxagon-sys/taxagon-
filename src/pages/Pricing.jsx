import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Check, ArrowRight, Sparkles, BadgeCheck } from '../components/Icons'

const taxFiling = [
  {
    name: 'Individual',
    price: 175,
    ideal: ['You’re single or have a family', 'You rent or own a home', 'You want to maximize deductions'],
    complex: 'Complex returns from $350 — rental property, K-1 income, investments.',
  },
  {
    name: 'Self-Employed',
    price: 250,
    popular: true,
    ideal: ['Diverse income sources (1099)', 'You’re a homeowner', 'You’re a deduction seeker'],
    complex: 'Complex returns from $500.',
  },
  {
    name: 'Business',
    price: 650,
    ideal: ['You run a C corporation or LLC', 'You own multiple rentals', 'You want a business review'],
    complex: 'Complex plans include year-end write-up & tax optimization.',
  },
  {
    name: 'Business + Individual',
    price: 900,
    ideal: ['You run an S corporation or partnership', 'You need combined returns', 'You have multiple schedules'],
    complex: 'Covers both your business and personal filings.',
  },
]

const bookkeeping = [
  {
    name: 'Bookkeeping',
    price: 349,
    features: [
      'Dedicated bookkeeping experts',
      'Monthly books, accurate & on time',
      'P&L and balance sheet reporting',
      'Unlimited team communication',
    ],
  },
  {
    name: 'Bookkeeping & Tax',
    price: 499,
    popular: true,
    features: [
      'Everything in Bookkeeping',
      'Licensed tax pros file your return',
      'Corporate & individual filings',
      'Year-round tax planning',
    ],
  },
]

function FilingCard({ plan }) {
  return (
    <div
      className={`glass relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
        plan.popular ? 'ring-2 ring-primary' : ''
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow">
          Most popular
        </span>
      )}
      <h3 className="font-heading text-lg font-bold text-ink">{plan.name}</h3>
      <div className="mt-3 flex items-end gap-1">
        <span className="font-heading text-4xl font-extrabold text-ink">${plan.price}</span>
        <span className="mb-1 text-sm text-muted">/ return</span>
      </div>
      <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-accentPink/15 px-3 py-1 text-xs font-semibold text-accentViolet">
        <Sparkles className="h-3.5 w-3.5" /> 30% off at signup
      </span>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">Ideal if</p>
      <ul className="mt-3 flex-1 space-y-2.5">
        {plan.ideal.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-[15px] text-ink">
            <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-primary text-white">
              <Check className="h-3 w-3" />
            </span>
            {it}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-muted">{plan.complex}</p>
      <Link to="/get-started" className="btn-primary group mt-6 w-full py-3 text-sm">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing for"
        highlight="every tax situation"
        subtitle="Flat, upfront pricing with no surprises. Every return is reviewed and signed by a tax professional — and you save 30% when you sign up."
      />

      {/* Tax filing */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute left-[10%] top-10 -z-10 h-72 w-72 rounded-full bg-accentPink/10 blur-3xl" />
        <div className="container-x">
          <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Tax filing</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
              File with confidence
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {taxFiling.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <FilingCard plan={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bookkeeping */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute right-[8%] top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-x">
          <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Bookkeeping & accounting</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
              Keep your books closed & clean
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            {bookkeeping.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  className={`glass relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    p.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow">
                      Best value
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-ink">{p.name}</h3>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-heading text-4xl font-extrabold text-ink">${p.price}</span>
                    <span className="mb-1 text-sm text-muted">/ month</span>
                  </div>
                  <span className="mt-1 text-xs text-muted">billed annually</span>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[15px] text-ink">
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-primary text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/get-started" className="btn-primary group mt-7 w-full py-3 text-sm">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance band */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <Reveal className="glass mx-auto grid max-w-4xl gap-6 rounded-3xl p-8 sm:grid-cols-2 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-accentPink to-primary text-white shadow-glow">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-ink">AI assistant included</h3>
                <p className="mt-1 text-[15px] text-muted">Get instant answers to your tax questions, any time.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-primary to-accentViolet text-white shadow-glow">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-ink">Reviewed & signed by a pro</h3>
                <p className="mt-1 text-[15px] text-muted">Every return is checked and signed by a licensed tax professional.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
