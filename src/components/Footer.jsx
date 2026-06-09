import Logo from './Logo'
import { X, Linkedin, Instagram, Star, Sparkles, Mail } from './Icons'

const columns = [
  {
    title: 'For Individuals',
    links: ['Tax Filing', 'Tax Planning', 'Financial Planning', 'NRI Services'],
  },
  {
    title: 'For Business',
    links: [
      'Tax Filing',
      'Company Formation',
      'Book Keeping',
      'Catchup Book Keeping',
      'Outsourced Accounting',
    ],
  },
  {
    title: 'For Self-Employed',
    links: ['Company Formation', 'Book Keeping', 'Tax Filing'],
  },
  {
    title: 'Company',
    links: ['About Taxagon', 'Pricing', 'Newsletter', 'Get in touch'],
  },
]

const socials = [
  { Icon: X, label: 'Twitter' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Instagram, label: 'Instagram' },
]

// Abstract "ask an AI assistant" marks (not official brand logos).
function Asterisk({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
    </svg>
  )
}
function Hexagon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4z" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  )
}
const aiTools = [
  { label: 'ChatGPT', Icon: Sparkles },
  { label: 'Claude', Icon: Asterisk },
  { label: 'Perplexity', Icon: Hexagon },
]

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="container-x space-y-4">
        {/* Newsletter + AI summary */}
        <div className="rounded-3xl bg-violetTint p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink">
                Join our newsletter
              </h2>
              <form
                className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-xl border border-white bg-white px-5 py-3.5 text-sm text-ink outline-none transition-shadow placeholder:text-muted focus:ring-2 focus:ring-primary/40"
                />
                <button className="rounded-xl bg-ink px-7 py-3.5 font-semibold text-white transition-colors hover:bg-ink/90">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="lg:justify-self-end">
              <p className="font-heading text-2xl font-bold leading-snug text-ink">
                Get an AI summary
                <br className="hidden sm:block" /> of Taxagon
              </p>
              <div className="mt-4 flex gap-3">
                {aiTools.map(({ label, Icon }) => (
                  <button
                    key={label}
                    aria-label={`Summarize Taxagon with ${label}`}
                    title={`Summarize Taxagon with ${label}`}
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:text-primary hover:shadow-card"
                  >
                    <Icon className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand + socials */}
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-3xl bg-violetTint px-8 py-7 lg:col-span-8">
            <Logo />
            <span className="hidden h-8 w-px bg-ink/15 sm:block" />
            <span className="font-medium text-ink/80">
              US tax &amp; accounting, done for you
            </span>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white bg-white px-4 py-2.5">
              <div className="flex text-accentViolet">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">Loved by founders</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:col-span-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid place-items-center rounded-3xl bg-violetTint py-7 text-ink transition-colors hover:bg-primary hover:text-white"
              >
                <Icon className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title} className="rounded-3xl bg-violetTint p-7">
              <h3 className="font-heading text-lg font-bold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[15px] text-muted2 transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 px-2 pt-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Taxagon. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a href="mailto:info@taxagon.co" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
              <Mail className="h-4 w-4" />
              info@taxagon.co
            </a>
            <a href="#" className="transition-colors hover:text-primary">Privacy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
