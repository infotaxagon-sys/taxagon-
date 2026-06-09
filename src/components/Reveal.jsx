import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * GSAP + ScrollTrigger reveal.
 *  - variant="slide" (default): fade + slide-up once it enters the viewport.
 *  - variant="pop": scroll-scrubbed 3D "pop out of the screen" (translateZ /
 *    rotateX), tied to scroll position.
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  variant = 'slide',
  children,
  ...props
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { clearProps: 'all', opacity: 1 })
      return
    }

    const ctx = gsap.context(() => {
      if (variant === 'pop') {
        gsap.fromTo(
          el,
          { opacity: 0, z: -340, rotationX: 15, transformPerspective: 1100 },
          {
            opacity: 1,
            z: 0,
            rotationX: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'top 45%',
              scrub: 0.6,
            },
          },
        )
      } else {
        gsap.from(el, {
          opacity: 0,
          y: 42,
          duration: 0.85,
          delay: delay / 1000,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, ref)

    return () => ctx.revert()
  }, [variant, delay])

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}
