import { useParams, Link, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { getService, services } from '../data/services'
import { Check, ArrowRight } from '../components/Icons'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <Navigate to="/services" replace />

  const Icon = service.icon
  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow="Service" title={service.name} subtitle={service.tagline} />

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute right-[6%] top-10 -z-10 h-72 w-72 rounded-full bg-accentPink/10 blur-3xl" />
        <div className="container-x">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* image */}
            <Reveal className="glass overflow-hidden rounded-3xl p-2">
              <img
                src={service.img}
                alt={service.name}
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />
            </Reveal>

            {/* summary + who */}
            <Reveal delay={100} className="glass rounded-3xl p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accentPink to-primary text-white shadow-glow">
                <Icon className="h-7 w-7" />
              </span>
              <p className="mt-5 text-lg leading-relaxed text-ink">{service.summary}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted">Who it’s for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.who.map((w) => (
                  <span key={w} className="rounded-full bg-violetTint px-3 py-1.5 text-sm font-medium text-primary-dark">
                    {w}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link to="/get-started" className="btn-primary group px-6 py-3 text-sm">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-lg font-bold text-primary">{service.price}</span>
              </div>
            </Reveal>
          </div>

          {/* what's included */}
          <Reveal className="mt-8">
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-bold text-ink">What’s included</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 rounded-2xl bg-white/50 p-4">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium text-ink">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* other services */}
          <div className="mt-14">
            <h2 className="font-heading text-xl font-bold text-ink">Explore other services</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {others.map((s) => {
                const OIcon = s.icon
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group glass flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-violetTint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <OIcon className="h-5 w-5" />
                    </span>
                    <span className="font-heading text-sm font-bold text-ink">{s.name}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
