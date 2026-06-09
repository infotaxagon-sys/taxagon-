import { useEffect, useState } from 'react'
import Logo from './Logo'
import { ChevronDown, Menu, X } from './Icons'

const links = [
  { label: 'Individuals', hasMenu: true },
  { label: 'Business', hasMenu: true },
  { label: 'Pricing', hasMenu: false },
  { label: 'Company', hasMenu: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-4 pt-3">
      <div
        className={`container-x flex items-center justify-between rounded-2xl border border-white/60 bg-white/85 px-5 py-3 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-nav' : 'shadow-card'
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-ink lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href="#"
              className="group flex items-center gap-1 transition-colors hover:text-primary"
            >
              {l.label}
              {l.hasMenu && (
                <ChevronDown className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="btn-outline px-5 py-2 text-[15px]">Book a call</button>
          <button className="btn-primary px-5 py-2 text-[15px]">Get Started</button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-violetTint lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="container-x mt-2 overflow-hidden rounded-2xl border border-violetTint bg-white p-4 shadow-nav lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.label}
                href="#"
                className="flex items-center justify-between rounded-lg px-3 py-3 font-medium text-ink transition-colors hover:bg-violetTint"
                onClick={() => setOpen(false)}
              >
                {l.label}
                {l.hasMenu && <ChevronDown className="h-4 w-4 text-muted" />}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-violetTint pt-3">
            <button className="btn-outline w-full py-2.5">Book a call</button>
            <button className="btn-primary w-full py-2.5">Get Started</button>
          </div>
        </div>
      )}
    </header>
  )
}
