import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import {
  User,
  Clock,
  Globe,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from '../components/Icons'

const stats = [
  { value: '2,500+', label: 'Clients served' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '50+', label: 'States covered' },
]

const values = [
  {
    icon: User,
    title: 'Personalized guidance',
    desc: 'We review your documents carefully and guide you based on your exact tax situation — not a one-size-fits-all template.',
  },
  {
    icon: Clock,
    title: 'Year-round planning',
    desc: 'We think beyond filing season, helping you plan ahead for savings all year long.',
  },
  {
    icon: Globe,
    title: 'Cross-border expertise',
    desc: 'FBAR, FATCA, foreign income, and NRI / India tax filing handled with specialist care.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & reviewed',
    desc: 'A secure online process, and every return reviewed and signed by a licensed tax professional.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="IRS Registered · Austin, Texas"
        title="Your tax situation deserves"
        highlight="more than basic filing"
        subtitle="Taxagon helps individuals, families, self-employed professionals, and businesses file accurately, stay compliant, and plan ahead for savings — backed by real experts."
      />

      {/* stats */}
      <section className="py-8 sm:py-12">
        <div className="container-x">
          <Reveal className="glass mx-auto grid max-w-4xl gap-6 rounded-3xl p-8 sm:grid-cols-3 sm:p-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm font-medium text-muted">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* mission + image */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute left-[8%] top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-x">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Reveal className="glass overflow-hidden rounded-3xl p-2">
              <img
                src="/about-hero.jpg"
                alt="The Taxagon team at work"
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />
            </Reveal>
            <Reveal delay={100} className="glass rounded-3xl p-8 sm:p-10">
              <span className="eyebrow">Our mission</span>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-ink">
                Expert-driven tax support, built around you
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Whether you're a W-2 employee, freelancer with 1099s, multi-state remote worker, rental
                property owner, RSU holder, crypto trader, small business, or navigating FBAR / FATCA
                cross-border obligations — Taxagon delivers expert support tailored exactly to you.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Based in Austin, Texas and serving clients across all 50 states, we combine an AI
                assistant for instant answers with licensed professionals who review and sign every return.
              </p>
              <Link to="/services" className="btn-primary group mt-7 px-6 py-3 text-sm">
                Explore our services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Taxagon</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 80} className="glass flex h-full flex-col rounded-3xl p-6">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-violetTint text-primary">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{v.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* trust strip */}
      <section className="pb-16">
        <div className="container-x">
          <Reveal className="glass flex flex-col items-center justify-between gap-4 rounded-3xl p-7 sm:flex-row sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accentPink to-primary text-white">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <p className="font-heading text-lg font-bold text-ink">
                Trusted by 2,500+ clients across the U.S.
              </p>
            </div>
            <Link to="/get-started" className="btn-primary px-6 py-3 text-sm">
              Get Started Today
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
