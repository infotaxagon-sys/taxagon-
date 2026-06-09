/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#120733',
        primary: { DEFAULT: '#5622FF', dark: '#3A17AD' },
        violetTint: '#EEE9FF',
        muted: '#58516F',
        muted2: '#41395C',
        darkbg: '#1A0E3D',
        accentPink: '#FF5CE1',
        accentViolet: '#784EFF',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1150px',
      },
      boxShadow: {
        nav: '0 8px 30px rgba(18, 7, 51, 0.08)',
        card: '0 4px 24px rgba(18, 7, 51, 0.06)',
        cardHover: '0 16px 48px rgba(86, 34, 255, 0.16)',
        glow: '0 0 60px rgba(120, 78, 255, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.96)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        floatY: 'floatY 6s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
