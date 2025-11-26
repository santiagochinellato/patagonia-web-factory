/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '3rem',  // 48px on mobile
          sm: '3rem',       // 48px on small screens
          md: '4rem',       // 64px on medium screens
          lg: '6rem',       // 96px on large screens (1024px+)
          xl: '8rem',       // 128px on xl screens (1280px+)
          '2xl': '10rem',   // 160px on 2xl screens (1536px+)
        },
      },
      colors: {
        brand: {
          blue: '#003366', // Patagonia Blue
          dark: '#002244',
          light: '#E6F0FF',
        },
        katz: {
          // V2 Palette - Professional Medical
          'primary': '#106973',      // Titles, Hero, Main Icons
          'cta-primary': '#307C86',  // Primary Buttons, Links
          'cta-secondary': '#7AC3B1', // Secondary elements (kept for compatibility, check usage)
          'accent': '#FFA500',       // Badges/Alerts (Vibrant Orange)
          
          // Neutrals
          'white': '#FFFFFF',
          'gray-light': '#F5F9FA',   // Alternating sections
          'gray-border': '#E0E0E0',  // Borders
          'gray-body': '#666666',    // Body text
          'gray-label': '#555555',   // Labels
          'gray-helper': '#999999',  // Helpers
          
          // Legacy mappings for compatibility (mapped to new palette)
          'relief': '#F5F9FA',       // Mapped to gray-light
          'orange': '#FFA500',       // Mapped to accent
          'gray-dark': '#666666',    // Mapped to gray-body
          'gray-medium': '#999999',  // Mapped to gray-helper
        },
      },
    },
  },
  plugins: [],
};
