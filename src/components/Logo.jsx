import { Link } from 'react-router-dom'

export default function Logo({ className = '', dark = false }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Taxagon home"
    >
      <img
        src="/logo.png"
        alt="Taxagon"
        className={`h-8 w-auto ${dark ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  )
}
