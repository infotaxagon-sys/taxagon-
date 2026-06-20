import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { services } from '../data/services'
import { ChevronDown, Menu, X } from './Icons'

const navLinks = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'Tax Tools', to: '/tax-tools' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const linkClass = ({ isActive }) =>
  `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-ink'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
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

        <nav className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
          {/* Services dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-ink transition-colors group-hover:text-primary">
              Services
              <ChevronDown className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-primary" />
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="glass w-72 rounded-2xl p-2">
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/70"
                    >
                      <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-violetTint text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-ink">{s.name}</span>
                    </Link>
                  )
                })}
                <Link
                  to="/services"
                  className="mt-1 block rounded-xl px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white/70"
                >
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-outline px-5 py-2 text-[15px]">
            Book a call
          </Link>
          <Link to="/get-started" className="btn-primary px-5 py-2 text-[15px]">
            Get Started
          </Link>
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
            <button
              className="flex items-center justify-between rounded-lg px-3 py-3 font-medium text-ink transition-colors hover:bg-violetTint"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className={`h-4 w-4 text-muted transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="ml-3 flex flex-col border-l border-violetTint pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="rounded-lg px-3 py-2.5 text-sm text-muted2 transition-colors hover:bg-violetTint hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="rounded-lg px-3 py-3 font-medium text-ink transition-colors hover:bg-violetTint"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-violetTint pt-3">
            <Link to="/contact" className="btn-outline w-full py-2.5" onClick={() => setOpen(false)}>
              Book a call
            </Link>
            <Link to="/get-started" className="btn-primary w-full py-2.5" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
