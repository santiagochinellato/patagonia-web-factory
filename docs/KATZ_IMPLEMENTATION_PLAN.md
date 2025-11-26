# Implementation Plan - Laboratorios Katz Website

## Goal

Diseñar y desarrollar una web médica premium para Laboratorios Katz con estética clínica moderna, mapa interactivo, hero rotativo con video, y componentes reutilizables en Atomic Design.

## Design System

### Color Palette

```typescript
// Agregar a tailwind-workspace-preset.js
colors: {
  katz: {
    // Primarios
    'blue-deep': '#0F3D44',      // Azul profundo clínico (primary)
    'blue-medium': '#1A5A64',    // Azul medio
    'blue-light': '#E8F4F5',     // Azul muy claro (fondos)

    // Acentos
    'teal': '#6AC2BF',           // Turquesa institucional (acento)
    'teal-dark': '#4FA7A4',      // Turquesa oscuro
    'teal-light': '#B8E5E4',     // Turquesa claro

    // Neutros
    'gray-dark': '#3D3D3D',      // Textos principales
    'gray-medium': '#A8A8A8',    // Textos secundarios
    'gray-light': '#F5F5F5',     // Fondos

    // Estado
    'orange': '#E8915C',         // Urgencias/CTA
  },
}
```

### Typography Stack

- **Headings**: Inter Bold (700-800)
- **Body**: Inter Regular (400), 17-18px base
- **CTA**: Inter SemiBold (600)

### Spacing System

- Base: 32-48px entre secciones
- Cards: 24-32px padding
- Elementos: 16-24px gaps

## Component Structure (Atomic Design)

### Atoms (`libs/shared/ui-kit/src/lib/atoms/`)

#### 1. KatzBadge

```tsx
'use client';

interface KatzBadgeProps {
  variant: '24h' | 'certified' | 'premium';
  children: React.ReactNode;
}
```

**Uso**: Badges de "Guardia 24hs", certificaciones

#### 2. KatzIcon

```tsx
interface KatzIconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

**Uso**: Iconografía lineal uniforme (42-48px)

### Molecules (`libs/shared/ui-kit/src/lib/molecules/`)

#### 1. ServiceCard

```tsx
'use client';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  ctaText?: string;
  onCta?: () => void;
}
```

**Diseño**:

- Fondo degradado sutil
- Icono lineal 48px
- Hover: elevación suave
- Padding generoso

#### 2. LocationCard

```tsx
'use client';

interface LocationCardProps {
  name: string;
  address: string;
  phone: string[];
  email: string;
  hours: string;
  has24h?: boolean;
  onHover?: () => void;
}
```

**Diseño**:

- Badge 24h si aplica
- Hover: resalta en mapa
- Jerarquía clara
- Botón "Llamar ahora" mobile

### Organisms (`libs/shared/ui-kit/src/lib/organisms/`)

#### 1. RotatingHero

```tsx
'use client';

interface RotatingHeroProps {
  headlines: string[];
  subtitle: string;
  videoUrl?: string;
  primaryCta: { text: string; onClick: () => void };
  secondaryCta?: { text: string; onClick: () => void };
}
```

**Funcionalidad**:

- 4 titulares rotativos (fade + slide vertical)
- Video vertical en contenedor redondeado
- Overlay degradado
- Animación cada 4s
- Mobile-first

#### 2. LocationsMap

```tsx
'use client';

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  has24h: boolean;
  // ...resto de datos
}

interface LocationsMapProps {
  locations: Location[];
  onMarkerClick?: (id: string) => void;
  onCardHover?: (id: string | null) => void;
}
```

**Funcionalidad**:

- Leaflet integration
- Markers custom (especial para 24h)
- Hover card → destaca marker
- Click marker → scroll a card
- Filtros: zona, 24h

#### 3. ServicesGrid

```tsx
interface ServicesGridProps {
  services: Service[];
}
```

**Diseño**:

- Grid 2-3 cols
- ServiceCard components
- Espaciado generoso

## Pages Structure

### Homepage (`apps/laboratorios-katz/src/app/page.tsx`)

```tsx
export default function HomePage() {
  return (
    <>
      <RotatingHero {...heroProps} />
      <section className="py-20"> {/* Certificaciones */} </section>
      <LocationsMap {...locationsProps} />
      <ServicesGrid {...servicesProps} />
      <section className="bg-katz-blue-deep text-white py-20">{/* Guardia 24hs destacada */}</section>
      <ContactForm />
    </>
  );
}
```

## Technical Implementation

### 1. New App Generation

```bash
npx nx g @nx/next:app laboratorios-katz --style=tailwind --directory=apps
```

### 2. Dependencies

```bash
npm install leaflet react-leaflet
npm install -D @types/leaflet
```

### 3. Tailwind Config

```javascript
// apps/laboratorios-katz/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');
const { join } = require('path');
const sharedPreset = require('../../tailwind-workspace-preset.js');

module.exports = {
  presets: [sharedPreset],
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
};
```

### 4. Update Workspace Preset

```javascript
// tailwind-workspace-preset.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          /* existing */
        },
        katz: {
          /* new colors */
        },
      },
    },
  },
};
```

## Content Strategy

### Hero Headlines (Rotating)

1. "Excelencia en Análisis Clínicos desde 1980"
2. "Más de 1000 Prestaciones de Alta Complejidad"
3. "Tecnología de Vanguardia para tu Salud"
4. "Guardia 24 Horas en Salta Capital"

### Services (6 cards)

1. **Resultados Online** - Acceso inmediato 24/7
2. **Guardia 24hs** - Atención permanente
3. **Extracción a Domicilio** - Comodidad y cuidado
4. **Servicio a Derivantes** - Profesionales bioquímicos
5. **Pre Ingreso** - Agilidad en proceso
6. **Biología Molecular** - Diagnóstico avanzado

### Locations (7 sucursales)

- Hospital Privado Central (24h)
- Clínica Rosario de Lerma (24h)
- Altos de Salta Sanatorio (24h)
- Centro Médico San Lorenzo
- Cordis
- Innova Salud Integral
- SMG Swiss Medical

## Verification Plan

### Functional Tests

- [ ] Hero animation rotates correctly
- [ ] Map markers load and interact
- [ ] Hover effects work (card ↔ marker)
- [ ] Filters work (zona, 24h)
- [ ] Mobile responsive
- [ ] CTAs functional

### Design Tests

- [ ] Colors match spec (#0F3D44, #6AC2BF)
- [ ] Typography hierarchy clear
- [ ] Spacing generous (32-48px)
- [ ] Contrast ratio AA compliant
- [ ] Premium medical feel

### Performance

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] Images optimized
- [ ] Lazy loading works

## Next Steps

1. Create implementation plan ✓
2. Update Tailwind preset with Katz colors
3. Generate new Next.js app
4. Create atomic components in staging
5. Build pages with real content
6. Integrate Leaflet map
7. Test and refine
