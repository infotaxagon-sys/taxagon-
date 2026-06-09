import Reveal from './Reveal'
import { BadgeCheck, Zap, TrendingUp } from './Icons'

const items = [
  {
    icon: BadgeCheck,
    title: 'The Most Reliable',
    desc: 'Trustworthy accounting service with quick response.',
  },
  {
    icon: Zap,
    title: 'The Most Experienced',
    desc: 'Say goodbye to slow responses and missed deadlines.',
  },
  {
    icon: TrendingUp,
    title: 'The Most Scalable',
    desc: "No matter how your needs evolve, we've got you covered.",
  },
]

export default function TrustBand() {
  return (
    <section className="border-y border-violetTint/70 bg-white py-12 sm:py-14">
      <div className="container-x grid gap-6 sm:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon
          return (
            <Reveal
              key={it.title}
              delay={i * 90}
              className="flex items-start gap-4 rounded-2xl px-2 py-2 sm:px-4"
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-violetTint text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-ink">{it.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{it.desc}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
