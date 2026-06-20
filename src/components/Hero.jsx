import { Suspense, lazy, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Sparkles, Star } from './Icons'

gsap.registerPlugin(ScrollTrigger)

const Hero3D = lazy(() => import('./Hero3D'))

const avatars = [
  '/testimonials/marcus.jpg',
  '/testimonials/elena.jpg',
  '/testimonials/daniel.jpg',
  '/testimonials/priya.jpg',
  '/avatars/a5.jpg',
  '/avatars/a6.jpg',
]

export default function Hero() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const waveRef = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true }
      // headline block drifts up and fades as you scroll past the hero
      gsap.to(contentRef.current, { y: -70, opacity: 0.2, ease: 'none', scrollTrigger: st })
      // wave layer parallaxes slower (downward) for depth
      gsap.to(waveRef.current, { y: 90, ease: 'none', scrollTrigger: st })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-28"
    >
      {/* Animated gradient wave background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="animate-blob absolute left-1/2 top-[-12%] h-[540px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,225,0.22),transparent)] blur-2xl" />
        <div
          className="animate-blob absolute left-[6%] top-[18%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(120,78,255,0.22),transparent)] blur-2xl"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="animate-blob absolute right-[4%] top-[6%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(closest-side,rgba(86,34,255,0.16),transparent)] blur-2xl"
          style={{ animationDelay: '-12s' }}
        />
        {/* faint grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,7,51,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,7,51,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      {/* 3D floating shapes */}
      <div ref={waveRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      <div ref={contentRef} className="container-x relative z-10">
        {/* readability backdrop behind the headline */}
        <div className="relative mx-auto max-w-3xl text-center [text-shadow:0_2px_24px_rgba(255,255,255,0.9)]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[78%] w-[118%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.55)_45%,transparent_70%)] blur-md" />

          <span className="eyebrow animate-fadeUp opacity-0" style={{ animationDelay: '40ms' }}>
            <Sparkles className="h-4 w-4" />
            Individuals · Businesses · Self-employed
          </span>

          <h1
            className="animate-fadeUp mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-ink opacity-0 sm:text-5xl md:text-6xl"
            style={{ animationDelay: '120ms' }}
          >
            One team for all your{' '}
            <span className="gradient-text">accounting needs</span>
          </h1>

          <p
            className="animate-fadeUp mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            Comprehensive bookkeeping, tax planning, and filing services for
            individuals, self-employed professionals, and growing businesses.
          </p>

          <div
            className="animate-fadeUp mt-9 flex flex-col items-center justify-center gap-3 opacity-0 sm:flex-row"
            style={{ animationDelay: '280ms' }}
          >
            <button className="btn-primary group rounded-full px-5 py-2.5 text-sm sm:rounded-lg sm:px-7 sm:py-3.5 sm:text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </button>
            <button className="btn-outline rounded-full px-5 py-2.5 text-sm sm:rounded-lg sm:px-7 sm:py-3.5 sm:text-base">
              Book a call
            </button>
          </div>

          <div
            className="animate-fadeUp mt-10 flex flex-col items-center justify-center gap-3 opacity-0 sm:flex-row"
            style={{ animationDelay: '360ms' }}
          >
            <div className="flex -space-x-3">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-accentViolet">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm font-medium text-muted">
                Trustworthy accounting service with quick response
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
