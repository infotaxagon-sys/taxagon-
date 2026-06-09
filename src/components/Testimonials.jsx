import Reveal from './Reveal'
import { Quote, Linkedin } from './Icons'

// NOTE: quote wording is from taxagon.co; names/roles and the AI-generated
// portrait photos in /public/testimonials are placeholders to match the
// requested layout — replace with real, consented customers + photos.
const testimonials = [
  {
    quote: 'Thanks to Taxagon, I can focus 100% on my work.',
    name: 'Marcus Reed',
    role: 'Founder at Northwind',
    img: '/testimonials/marcus.jpg',
    span: 'lg:col-span-4',
    photo: true,
    bg: 'bg-[#C9E1F7]',
    hex: '#C9E1F7',
    mark: 'text-[#2C6FB0]',
  },
  {
    quote: 'Taxagon helps me optimize my workload without sacrificing quality.',
    name: 'Elena Brooks',
    role: 'Owner, Brooks Design Co.',
    img: '/testimonials/elena.jpg',
    span: 'lg:col-span-2',
    photo: false,
    bg: 'bg-[#CDEBD2]',
    hex: '#CDEBD2',
    mark: 'text-[#3C7A48]',
  },
  {
    quote:
      "Without Taxagon, I don't think I would be able to do the work that I love.",
    name: 'Daniel Osei',
    role: 'Independent consultant',
    img: '/testimonials/daniel.jpg',
    span: 'lg:col-span-2',
    photo: false,
    bg: 'bg-[#E4DAFF]',
    hex: '#E4DAFF',
    mark: 'text-primary',
  },
  {
    quote:
      "I love working with Taxagon because I feel like I'm being handheld.",
    name: 'Priya Nair',
    role: 'Co-Founder at Vela',
    img: '/testimonials/priya.jpg',
    span: 'lg:col-span-4',
    photo: true,
    bg: 'bg-[#F7E6A0]',
    hex: '#F7E6A0',
    mark: 'text-[#9A7B1E]',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal variant="pop" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Loved by the people we serve
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className={t.span}>
              <figure
                className={`relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-3xl p-7 sm:p-8 ${t.bg}`}
              >
                <Quote className={`h-10 w-10 ${t.mark}`} />

                <blockquote
                  className={`mt-4 flex-1 text-lg font-medium leading-relaxed text-ink ${
                    t.photo ? 'pr-[38%] sm:pr-[42%]' : 'max-w-[40ch]'
                  }`}
                >
                  {t.quote}
                </blockquote>

                <figcaption
                  className={`relative z-10 mt-6 flex items-center gap-3 ${
                    t.photo ? 'pr-[38%] sm:pr-[42%]' : ''
                  }`}
                >
                  {t.photo ? (
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-md bg-[#0A66C2] text-white">
                      <Linkedin className="h-5 w-5" />
                    </span>
                  ) : (
                    <span className="relative flex-none">
                      <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        className="h-11 w-11 rounded-full object-cover object-[50%_20%] ring-2 ring-white"
                      />
                      <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded bg-[#0A66C2] text-white ring-2 ring-white">
                        <Linkedin className="h-3 w-3" />
                      </span>
                    </span>
                  )}
                  <div className="leading-tight">
                    <div className="font-bold text-ink">{t.name}</div>
                    <div className="text-sm text-ink/70">{t.role}</div>
                  </div>
                </figcaption>

                {t.photo && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-[40%] sm:w-[44%]">
                    <img
                      src={t.img}
                      alt={`Portrait of ${t.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-[50%_18%]"
                    />
                    <div
                      className="absolute inset-y-0 left-0 w-16 sm:w-24"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${t.hex}, ${t.hex}00)`,
                      }}
                    />
                  </div>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
