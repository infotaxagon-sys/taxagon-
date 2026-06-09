# Taxagon — marketing landing page

A single-page marketing site for **Taxagon** ("your tax & bookkeeping done with AI &
experts"), built with **React + Vite + Tailwind CSS** and a **React Three Fiber** 3D hero.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5188
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Tech

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — design tokens live in `tailwind.config.js`
- **@react-three/fiber** + **@react-three/drei** + **three** — the floating 3D shapes
  in the hero (lazy-loaded, so Three.js never blocks first paint)
- Fonts: **Manrope** (headings) + **Inter** (body), loaded in `index.html`

## Structure

```
src/
  App.jsx                 # page composition (section order)
  index.css               # Tailwind layers + component classes + reveal/marquee animations
  components/
    Navbar.jsx            # sticky pill nav + mobile menu
    Hero.jsx              # headline, CTAs, gradient wave bg + lazy 3D layer
    Hero3D.jsx            # R3F canvas — viewport-aware floating shapes
    ProductTabs.jsx       # Books / Tax / Mailroom mock app panels
    LogoMarquee.jsx       # scrolling client logos
    PlatformDiagram.jsx   # orbital feature hub (desktop) / card grid (mobile)
    Testimonials.jsx      # 4 quote cards
    FeaturesDark.jsx      # dark section, vertical tabs + mock screenshot panel
    Blog.jsx              # 3-card blog grid
    CTABand.jsx           # gradient call-to-action band
    Footer.jsx            # light-violet footer card
    Reveal.jsx            # IntersectionObserver scroll-reveal wrapper
    Icons.jsx / Logo.jsx  # shared inline SVG icons + wordmark
```

## Design tokens (`tailwind.config.js`)

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#120733` | primary text |
| `primary` / `primary.dark` | `#5622FF` / `#3A17AD` | buttons, accents |
| `violetTint` | `#EEE9FF` | card / footer backgrounds |
| `muted` / `muted2` | `#58516F` / `#41395C` | secondary text |
| `darkbg` | `#1A0E3D` | dark section |
| `accentPink` / `accentViolet` | `#FF5CE1` / `#784EFF` | hero gradient + 3D |

## Notes

- The dev server is pinned to port **5188** (`strictPort`) in `vite.config.js` to avoid
  colliding with other local projects.
- `prefers-reduced-motion` disables the marquee, blob, float, and reveal animations.
