const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    './apps/Perfil-profesional-quero/src/**/*.{js,ts,jsx,tsx,mdx}',
    './libs/shared/ui-kit/src/**/*.{js,ts,jsx,tsx}', 
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         // 'hero-pattern': "url('/images/hero-bg.jpg')", // Keeping placeholder if needed
      }
    },
  },
  plugins: [],
};

