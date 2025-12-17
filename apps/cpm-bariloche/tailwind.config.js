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
        // Colores de Marca CPM (Rediseño)
        'brand-pink': '#FC6C93',
        'brand-blue': '#46C9F3',
        
        // Colores de UI Modernos
        'surface-light': '#F8FAFC', // Gris muy claro (Slate 50) para fondos alternativos
        'text-main': '#1F2937',     // Gris oscuro para lectura cómoda (no negro puro)
        'text-muted': '#6B7280',    // Gris medio para subtítulos
      },
      fontFamily: {
        // 'Nunito': Redondeada y amigable (para Títulos)
        heading: ['Nunito', 'system-ui', 'sans-serif'],
        // 'Inter': Limpia y legible (para Textos)
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Sombra difusa y suave estilo "Clean UI"
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'glow-pink': '0 4px 20px -5px rgba(252, 108, 147, 0.4)',
      },
      borderRadius: {
        '4xl': '2.5rem', // Bordes extra curvos para secciones orgánicas
      }
    },
  },
  plugins: [],
};