import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Mail, MessageCircle, Phone, Building, ArrowRight } from '../components/Icons'

const methods = [
  {
    icon: Mail,
    title: 'Email us',
    value: 'info@taxagon.co',
    href: 'mailto:info@taxagon.co',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat with a tax expert',
    href: '#',
  },
  {
    icon: Phone,
    title: 'Book a call',
    value: 'Schedule a free consult',
    href: '#',
  },
  {
    icon: Building,
    title: 'Visit',
    value: 'Austin, Texas',
    href: '#',
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s talk"
        highlight="taxes"
        subtitle="Based in Austin, Texas and serving clients across all 50 states. Reach out and a real expert will get back to you — usually within one business day."
      />

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute right-[6%] top-0 -z-10 h-80 w-80 rounded-full bg-accentPink/10 blur-3xl" />
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            {/* methods */}
            <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {methods.map((m) => {
                const Icon = m.icon
                return (
                  <a
                    key={m.title}
                    href={m.href}
                    className="group glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-accentPink to-primary text-white shadow-glow">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-heading font-bold text-ink">{m.title}</p>
                      <p className="text-sm text-muted">{m.value}</p>
                    </div>
                  </a>
                )
              })}
            </Reveal>

            {/* form */}
            <Reveal delay={120} className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-bold text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-muted">Tell us about your tax situation and we’ll point you in the right direction.</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" type="text" placeholder="Jane Doe" />
                  <Field label="Email" type="email" placeholder="jane@email.com" />
                </div>
                <div>
                  <Label>What do you need help with?</Label>
                  <select className="w-full rounded-xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-shadow focus:ring-2 focus:ring-primary/40">
                    <option>Individual tax filing</option>
                    <option>Business tax & compliance</option>
                    <option>Bookkeeping</option>
                    <option>FBAR / FATCA</option>
                    <option>NRI / cross-border tax</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <Label>Message</Label>
                  <textarea
                    rows={4}
                    placeholder="A few details about your situation…"
                    className="w-full resize-none rounded-xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-shadow placeholder:text-muted focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <button className="btn-primary group w-full py-3.5 text-base">
                  Send message
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function Label({ children }) {
  return <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">{children}</label>
}

function Field({ label, type, placeholder }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-shadow placeholder:text-muted focus:ring-2 focus:ring-primary/40"
      />
    </div>
  )
}
