import Reveal from './Reveal'
import { BadgeCheck, ShieldCheck } from './Icons'

const guarantees = [
  {
    icon: BadgeCheck,
    title: 'Calculation Error Guarantee',
    body: 'If you have a calculation error with your tax preparation that allows for a larger refund (or less liability) than the return we prepared, we will refund any fees you paid us to use our service to prepare that return, and you may use our service to amend your return at no additional charge.',
    badge: null,
  },
  {
    icon: ShieldCheck,
    title: 'Audit Protection & Error Coverage',
    body: 'If our tax preparation pro makes an arithmetic error that results in your paying a penalty or interest to the IRS that you would otherwise not have been required to pay, we will reimburse you up to a maximum of $10,000.',
    badge: 'up to $10,000',
  },
]

export default function Guarantees() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Peace of mind</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Backed by our guarantees
          </h2>
          <p className="mt-4 text-lg text-muted">
            Get peace of mind against penalties and legal issues — we stand
            behind every return we prepare.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {guarantees.map((g, i) => {
            const Icon = g.icon
            return (
              <Reveal
                key={g.title}
                delay={i * 100}
                className="relative flex h-full flex-col rounded-2xl border border-violetTint bg-violetTint/30 p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-to-br from-accentPink to-primary text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </span>
                  {g.badge && (
                    <span className="rounded-full bg-primary px-3 py-1.5 text-sm font-bold text-white">
                      {g.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-ink">{g.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted2">{g.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
