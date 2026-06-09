import Reveal from './Reveal'
import { Coins, Clock, ShieldCheck } from './Icons'

const props = [
  {
    icon: Coins,
    title: 'Reduce Taxes',
    img: '/value/reduce-taxes.jpg',
    desc: 'Maximize your earnings with every dollar. With Taxagon, you can plan strategically, calculate your potential returns, and execute tax plan.',
  },
  {
    icon: Clock,
    title: 'Save Time & Labor',
    img: '/value/save-time.jpg',
    desc: 'Streamline your accounting processes and grow your wealth effortlessly with our expert outsourced accounting services.',
  },
  {
    icon: ShieldCheck,
    title: 'Get IRS Audit Protection',
    img: '/value/audit-protection.jpg',
    desc: 'Ensure compliance with local, state and federal and get peace of mind against penalties and legal issues.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Taxagon</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            A new accounting experience
          </h2>
          <p className="mt-4 text-lg text-muted">
            Use your time more efficiently and hit your goals with a full suite
            of accounting services.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {props.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-violetTint bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-cardHover"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col px-7 pb-7">
                  <span className="-mt-9 grid h-16 w-16 place-items-center rounded-2xl bg-violetTint text-primary ring-4 ring-white transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
