import Reveal from './Reveal'
import { ArrowRight, MessageCircle, Mail, Users } from './Icons'

const contacts = [
  { icon: MessageCircle, label: 'Contact on WhatsApp', href: '#' },
  { icon: Mail, label: 'Email us', href: 'mailto:info@taxagon.co' },
  { icon: Users, label: 'Join Community', href: '#' },
]

export default function CTABand() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#5326E6] to-accentViolet px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
          {/* decorative glows */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accentPink/40 blur-3xl" />
            <div className="absolute -bottom-12 -right-8 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
              Ready to take the next step?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
              One team for all your accounting needs — comprehensive
              bookkeeping, tax planning, and filing, handled for you.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="group inline-flex w-full items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button className="w-full rounded-lg border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
                Book a call
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {contacts.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
