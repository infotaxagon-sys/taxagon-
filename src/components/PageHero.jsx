import { Suspense, lazy } from 'react'

const Scene3D = lazy(() => import('./Scene3D'))

/** Inner-page hero: gradient + Three.js orbs behind a centered, glassy header. */
export default function PageHero({ eyebrow, title, highlight, subtitle, children }) {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-14 sm:pt-24 sm:pb-20">
      {/* gradient + blobs */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-violetTint/70 via-white to-white" />
        <div className="animate-blob absolute left-1/2 top-[-10%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,225,0.18),transparent)] blur-2xl" />
        <div className="animate-blob absolute right-[6%] top-[10%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(120,78,255,0.18),transparent)] blur-2xl" style={{ animationDelay: '-8s' }} />
      </div>

      {/* three.js orbs */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="container-x relative z-10">
        <div className="relative mx-auto max-w-3xl text-center [text-shadow:0_2px_22px_rgba(255,255,255,0.85)]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.5)_45%,transparent_72%)] blur-md" />
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {title}
            {highlight && (
              <>
                {' '}
                <span className="gradient-text">{highlight}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
