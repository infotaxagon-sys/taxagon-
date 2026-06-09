export default function Logo({ className = '', dark = false }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center ${className}`}
      aria-label="Taxagon home"
    >
      <img
        src="/logo.png"
        alt="Taxagon"
        className={`h-8 w-auto ${dark ? 'brightness-0 invert' : ''}`}
      />
    </a>
  )
}
