import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { services } from '../data/services'
import { ArrowRight } from '../components/Icons'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Expert tax support,"
        highlight="tailored to you"
        subtitle="From simple W-2 returns to complex cross-border filings, Taxagon delivers expert-driven support for individuals, businesses, and everyone in between."
      />

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[700px] -translate-x-1/2 rounded-full bg-violetTint/40 blur-3xl" />
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group glass flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative flex flex-1 flex-col p-6">
                      <span className="-mt-12 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accentPink to-primary text-white shadow-glow ring-4 ring-white/70">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h3 className="mt-4 font-heading text-xl font-bold text-ink">{s.name}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.tagline}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm font-bold text-primary">{s.price}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
