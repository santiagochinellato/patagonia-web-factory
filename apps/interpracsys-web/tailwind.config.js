// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// The above utility import will not work if you are using Next.js' --turbo.
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          500: '#64748B',
          600: '#475569',
          900: '#0F172A',
        },
        brand: {
          cyan: '#00AEEF',
          navy: '#2E3192',
          blue50: '#F0F9FF', // Approximate light blue for hover/backgrounds
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'clean-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'levitate': '0 4px 20px -2px rgba(46, 49, 146, 0.1)',
        'levitate-hover': '0 10px 25px -5px rgba(0, 174, 239, 0.2)', // Cyan glow
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00AEEF 0%, #2E3192 100%)',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-40%)' },
          '100%': { opacity: '1', transform: 'translateY(-50%)' },
        }
      },
      animation: {
        ripple: 'ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
    },
  },
  plugins: [],
};
