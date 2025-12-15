const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003366', 
        'brand-dark': '#002244', 
        'brand-light': '#E6F0FF', // Background for organic sections
        'action-coral': '#FF7F50', 
        'action-success': '#4BB543', 
        'gray-base': '#4A5568', 
        'gray-soft': '#F7FAFC', // Background for general sections
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'], // For Headings
      },
      boxShadow: {
        'smooth': '0 20px 40px -10px rgba(0, 51, 102, 0.15)', 
      }
    },
  },
  plugins: [],
};