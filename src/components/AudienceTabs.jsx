import { useState } from 'react'
import Reveal from './Reveal'
import { User, Building, Briefcase, Check, ArrowRight } from './Icons'

const audiences = [
  {
    id: 'individuals',
    tab: 'For Individuals',
    icon: User,
    img: '/audiences/individuals.jpg',
    desc: 'Reduce the taxes owed on your ordinary income, capital gains or something else.',
    services: ['Tax Filing', 'Tax Planning', 'Financial Planning', 'NRI Services'],
  },
  {
    id: 'business',
    tab: 'For Business Owners',
    icon: Building,
    img: '/audiences/business.jpg',
    desc: 'Done-for-you execution to set up your business entity, payroll, bookkeeping and taxes.',
    services: [
      'Tax Filing',
      'Company Formation',
      'Book Keeping',
      'Catchup Book Keeping',
      'Outsourced Accounting',
    ],
  },
  {
    id: 'self-employed',
    tab: 'For Self Employed',
    icon: Briefcase,
    img: '/audiences/self-employed.jpg',
    desc: 'The all-in-one financial solution for self-employed entrepreneurs.',
    services: ['Company Formation', 'Book Keeping', 'Tax Filing'],
  },
]

export default function AudienceTabs() {
  const [active, setActive] = useState('individuals')
  const current = audiences.find((a) => a.id === active)
  const Icon = current.icon

  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Who we help</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Built around the way you earn
          </h2>
          <p className="mt-4 text-lg text-muted">
            Whether you file solo, run a company, or work for yourself — there's
            a Taxagon plan made for you.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1.5 rounded-2xl border border-violetTint bg-violetTint/40 p-1.5">
            {audiences.map((a) => {
              const TabIcon = a.icon
              const isActive = active === a.id
              return (
                <button
                  key={a.id}
                  onClick={() => setActive(a.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-6 ${
                    isActive ? 'bg-white text-primary shadow-card' : 'text-muted hover:text-ink'
                  }`}
                  aria-pressed={isActive}
                >
                  <TabIcon className="h-4 w-4" />
                  {a.tab}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-4xl">
          <div className="grid overflow-hidden rounded-2xl border border-violetTint bg-white shadow-cardHover md:grid-cols-2">
            {/* photo */}
            <div className="relative min-h-[260px] md:min-h-[400px]">
              <img
                key={current.img}
                src={current.img}
                alt={current.tab}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent" />
            </div>

            {/* details */}
            <div className="p-7 sm:p-9">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accentPink to-primary text-white shadow-glow">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold text-ink">{current.tab}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{current.desc}</p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted">
                What's included
              </p>
              <ul className="mt-3 grid gap-2.5">
                {current.services.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-primary text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium text-ink">{s}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-primary group mt-7 px-6 py-3 text-[15px]">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
