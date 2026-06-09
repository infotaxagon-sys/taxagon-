import Reveal from './Reveal'
import {
  FileCheck,
  Calculator,
  BookOpen,
  Building,
  Users,
  TrendingUp,
} from './Icons'

const services = [
  { label: 'Tax Filing', icon: FileCheck, desc: 'Federal & state returns, filed for you' },
  { label: 'Tax Planning', icon: Calculator, desc: 'Strategically lower what you owe' },
  { label: 'Book Keeping', icon: BookOpen, desc: 'Clean, up-to-date books' },
  { label: 'Company Formation', icon: Building, desc: 'Set up your business entity' },
  { label: 'Outsourced Accounting', icon: Users, desc: 'Your finance team, on demand' },
  { label: 'Financial Planning', icon: TrendingUp, desc: 'Plan and grow your wealth' },
]

// Position 6 nodes evenly around a circle (start at top, go clockwise).
const RADIUS = 38 // % of the square container
const positions = services.map((_, i) => {
  const angle = ((i * 360) / services.length - 90) * (Math.PI / 180)
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  }
})

function ServiceCard({ icon: Icon, label, desc, className = '' }) {
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border border-violetTint bg-white p-3.5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-cardHover ${className}`}
    >
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-violetTint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-heading font-bold leading-tight text-ink">{label}</p>
        <p className="truncate text-xs text-muted">{desc}</p>
      </div>
    </div>
  )
}

export default function ServicesDiagram() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our services</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Everything handled, under one roof
          </h2>
          <p className="mt-4 text-lg text-muted">
            From formation to filing, one team covers the full accounting
            lifecycle — so you never have to juggle vendors again.
          </p>
        </Reveal>

        {/* Orbit diagram — large screens */}
        <Reveal delay={120} className="relative mx-auto mt-16 hidden aspect-square w-full max-w-[620px] lg:block">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="#EEE9FF" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
            {positions.map((p, i) => (
              <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="#D7CCFF" strokeWidth="0.4" />
            ))}
          </svg>

          {/* center hub */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary to-accentViolet text-white shadow-glow ring-8 ring-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 L16 8" />
                <path d="M10.5 8 L16 8 L16 13.5" />
              </svg>
            </span>
            <span className="mt-2 font-heading text-lg font-extrabold tracking-tight text-white">
              Taxagon
            </span>
            <span className="text-[11px] font-medium text-white/70">one team</span>
          </div>

          {/* orbiting nodes */}
          {services.map((s, i) => (
            <div
              key={s.label}
              className="absolute w-56 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
            >
              <ServiceCard {...s} />
            </div>
          ))}
        </Reveal>

        {/* Card grid — small screens */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {services.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
