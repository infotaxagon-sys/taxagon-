import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import {
  Receipt,
  Globe,
  Calculator,
  FileText,
  FileCheck,
  CalendarClock,
  ArrowUpRight,
  ArrowRight,
} from '../components/Icons'

const tools = [
  {
    icon: FileCheck,
    tag: 'IRS Official',
    title: 'Federal Refund Status',
    desc: "Check where your federal refund is on the IRS's official “Where's My Refund?” portal.",
    href: 'https://www.irs.gov/wheres-my-refund',
  },
  {
    icon: Receipt,
    tag: 'Secure & Free',
    title: 'IRS Direct Pay',
    desc: 'Make secure federal tax payments directly from your bank — no fees, no card required.',
    href: 'https://www.irs.gov/payments/direct-pay',
  },
  {
    icon: Globe,
    tag: 'All States',
    title: 'State Portal Links',
    desc: 'Find your state tax agency for refund tracking and payment options.',
    href: 'https://www.taxadmin.org/fta-members/',
  },
  {
    icon: Calculator,
    tag: 'Planning',
    title: 'Tax Withholding Estimator',
    desc: 'Estimate the right amount of tax to withhold from your paycheck.',
    href: 'https://www.irs.gov/individuals/tax-withholding-estimator',
  },
  {
    icon: FileText,
    tag: 'Records',
    title: 'Get IRS Transcript',
    desc: 'Access your tax records, wage statements, and account transcripts online.',
    href: 'https://www.irs.gov/individuals/get-transcript',
  },
  {
    icon: FileCheck,
    tag: 'Free',
    title: 'IRS Free File',
    desc: 'See if you qualify to file your federal taxes for free.',
    href: 'https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free',
  },
]

function daysToDeadline() {
  const now = new Date()
  const year = now.getMonth() > 3 || (now.getMonth() === 3 && now.getDate() > 15) ? now.getFullYear() + 1 : now.getFullYear()
  const deadline = new Date(year, 3, 15) // April 15
  return { days: Math.ceil((deadline - now) / 86400000), year }
}

export default function TaxTools() {
  const { days, year } = daysToDeadline()

  return (
    <>
      <PageHero
        eyebrow="Online resources"
        title="Official tax tools,"
        highlight="one click away"
        subtitle="Fast, direct access to the official IRS and state resources you need — refund tracking, secure payments, records, and planning tools."
      />

      {/* deadline countdown */}
      <section className="py-8 sm:py-10">
        <div className="container-x">
          <Reveal className="glass mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-3xl p-7 text-center sm:flex-row sm:p-8 sm:text-left">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-to-br from-accentPink to-primary text-white shadow-glow">
                <CalendarClock className="h-7 w-7" />
              </span>
              <div>
                <p className="font-heading text-lg font-bold text-ink">
                  {days} days until the {year} filing deadline
                </p>
                <p className="text-sm text-muted">Federal returns are due April 15, {year}. Beat the rush.</p>
              </div>
            </div>
            <Link to="/get-started" className="btn-primary group px-6 py-3 text-sm">
              File with Taxagon
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* tools grid */}
      <section className="relative overflow-hidden py-10 sm:py-14">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[640px] -translate-x-1/2 rounded-full bg-violetTint/40 blur-3xl" />
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t, i) => {
              const Icon = t.icon
              return (
                <Reveal key={t.title} delay={i * 70}>
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violetTint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-muted">{t.tag}</span>
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-ink">{t.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{t.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Open tool
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            Existing client? <Link to="/get-started" className="font-semibold text-primary hover:text-primary-dark">Access your documents and returns</Link> in the client portal.
          </p>
        </div>
      </section>
    </>
  )
}
