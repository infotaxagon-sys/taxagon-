import { useState } from 'react'
import Reveal from './Reveal'
import { Check, ArrowRight } from './Icons'

const situations = [
  'I have high ordinary income',
  'I am selling public stock',
  'I am selling crypto currency',
  'I need help with financial planning',
  'I need help with NRI services',
  'I am a parent/guardian',
  'I am a business owner',
  "I work for myself / I'm a gig worker",
  'I am a student',
  'I am retired',
  'I am unemployed',
  'I made money in other ways',
  'Other tax situations',
]

export default function TaxSituation() {
  const [selected, setSelected] = useState(() => new Set())

  const toggle = (s) =>
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(s) ? next.delete(s) : next.add(s)
      return next
    })

  return (
    <section className="relative overflow-hidden bg-darkbg py-20 sm:py-28">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[12%] top-0 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-accentPink/15 blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80">
            Tax planning
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Reduce the taxes on your income,
            <br className="hidden sm:block" /> no matter what kind
          </h2>
          <p className="mt-4 text-lg text-white/65">
            Tell us your situation — select everything that applies and we'll
            build a plan around it.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {situations.map((s) => {
            const on = selected.has(s)
            return (
              <button
                key={s}
                onClick={() => toggle(s)}
                aria-pressed={on}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  on
                    ? 'border-transparent bg-gradient-to-r from-accentPink to-primary text-white shadow-glow'
                    : 'border-white/15 bg-white/5 text-white/75 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                <span
                  className={`grid h-4 w-4 place-items-center rounded-full border transition-colors ${
                    on ? 'border-white bg-white/25' : 'border-white/40'
                  }`}
                >
                  {on && <Check className="h-3 w-3" />}
                </span>
                {s}
              </button>
            )
          })}
        </Reveal>

        <Reveal delay={200} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="btn-primary group w-full px-7 py-3.5 text-base sm:w-auto">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button className="w-full rounded-lg border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
            Book a call
          </button>
          {selected.size > 0 && (
            <span className="text-sm font-medium text-white/60">
              {selected.size} selected
            </span>
          )}
        </Reveal>
      </div>
    </section>
  )
}
