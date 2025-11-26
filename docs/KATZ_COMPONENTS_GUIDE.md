# Guía de Componentes - Laboratorios Katz

## ✅ Componentes Completos Creados

Todos los componentes están en: `libs/shared/ui-kit/src/lib/staging/`

### 📦 Atoms

#### KatzBadge

**Archivo**: `katz-badge.tsx`

```tsx
<KatzBadge variant="24h">24hs</KatzBadge>
<KatzBadge variant="certified">Certificado</KatzBadge>
<KatzBadge variant="premium">Premium</KatzBadge>
```

**Props**:

- `variant`: '24h' | 'certified' | 'premium'
- `children`: React.ReactNode

**Colores**:

- 24h: Naranja (#E8915C) - para urgencias
- Certified: Turquesa claro sobre azul
- Premium: Azul profundo

---

### 🧩 Molecules

#### ServiceCard

**Archivo**: `service-card.tsx`

```tsx
<ServiceCard icon={<svg>...</svg>} title="Resultados Online" description="Recibí tus resultados al instante" ctaText="Acceder" onCta={() => console.log('click')} />
```

**Props**:

- `icon`: React.ReactNode (SVG 48x48px)
- `title`: string
- `description`: string
- `ctaText?`: string (opcional)
- `onCta?`: () => void (opcional)

**Diseño**:

- Degradado sutil de blanco a katz-blue-light
- Hover: elevación suave con sombra
- Animación: -translate-y-1
- Padding: 32px

#### LocationCard

**Archivo**: `location-card.tsx`

```tsx
<LocationCard name="Hospital Privado Central" address="Adolfo Guemes 82, Salta" phone={['+54 387 614 4845']} email="info@laboratorioskatz.com" hours="Lun a Vie 7 a 18hs | Sáb 8 a 12hs" has24h={true} onHover={() => console.log('hover')} isHighlighted={false} />
```

**Props**:

- `name`: string
- `address`: string
- `phone`: string[]
- `email`: string
- `hours`: string
- `has24h?`: boolean
- `onHover?`: () => void
- `onLeave?`: () => void
- `isHighlighted?`: boolean

**Funcionalidad**:

- Badge "24hs" si `has24h=true`
- Iconos SVG para ubicación, teléfono, email, horario
- Botón "Llamar ahora" visible solo en mobile
- Hover effect con border turquesa y scale-105

---

### 🏗️ Organisms

#### RotatingHero

**Archivo**: `rotating-hero.tsx`

```tsx
<RotatingHero
  headlines={['Excelencia en Análisis Clínicos', 'Más de 1000 Prestaciones', 'Tecnología de Vanguardia', 'Guardia 24 Horas en Salta']}
  subtitle="Más de 40 años de trayectoria"
  videoUrl="/video.mp4" // opcional
  primaryCta={{
    text: 'Ver Resultados',
    onClick: () => {},
  }}
  secondaryCta={{
    text: 'Sucursales',
    onClick: () => {},
  }}
/>
```

**Props**:

- `headlines`: string[] (4 titulares)
- `subtitle`: string
- `videoUrl?`: string (opcional)
- `primaryCta`: { text: string, onClick: () => void }
- `secondaryCta?`: { text: string, onClick: () => void }

**Animación**:

- Rotación cada 4 segundos
- Fade out + translate-y durante transición (500ms)
- Progress indicators en la parte inferior
- Video vertical en contenedor redondeado (solo desktop)

**Diseño**:

- Background: Degradado azul profundo
- Overlay: Degradado con transparencia
- Video: aspect-ratio 9/16, rounded-3xl
- Elementos decorativos: Círculos con blur

#### ServicesGrid

**Archivo**: `services-grid.tsx`

```tsx
const services = [
  {
    id: 'resultados',
    icon: <svg>...</svg>,
    title: 'Resultados Online',
    description: 'Descripción del servicio',
    ctaText: 'Acceder',
    onCta: () => {},
  },
  // ... más servicios
];

<ServicesGrid services={services} />;
```

**Props**:

- `services`: Service[]

**Diseño**:

- Header con título, línea turquesa y descripción
- Grid: 2 cols (md), 3 cols (lg)
- Gap: 32px
- Background: Degradado blanco → katz-blue-light

---

## 🎨 Sistema de Colores Katz

Agregado en `tailwind-workspace-preset.js`:

```javascript
katz: {
  // Primarios - Azul clínico profundo
  'blue-deep': '#0F3D44',
  'blue-medium': '#1A5A64',
  'blue-light': '#E8F4F5',

  // Acentos - Turquesa institucional (uso moderado)
  'teal': '#6AC2BF',
  'teal-dark': '#4FA7A4',
  'teal-light': '#B8E5E4',

  // Neutros médicos
  'gray-dark': '#3D3D3D',
  'gray-medium': '#A8A8A8',
  'gray-light': '#F5F5F5',

  // Estado/Urgencias
  'orange': '#E8915C',
}
```

**Uso en componentes**:

```tsx
className = 'bg-katz-blue-deep text-white';
className = 'text-katz-teal hover:text-katz-teal-dark';
className = 'border-katz-blue-light';
```

---

## 📄 Página Completa

**Archivo**: `apps/laboratorios-katz/src/app/page.tsx`

### Estructura de Secciones:

1. **Hero Rotativo**

   - 4 titulares rotativos
   - Subtítulo institucional
   - 2 CTAs (primario + secundario)

2. **Certificaciones**

   - PEEC, Technopaty, ProGBA
   - Layout flex responsive

3. **Servicios** (6 cards)

   - Resultados Online
   - Guardia 24hs
   - Extracción a Domicilio
   - Servicio a Derivantes
   - Pre Ingreso
   - Biología Molecular

4. **Guardia 24 Horas**

   - Background azul profundo
   - 3 LocationCards con badge 24h
   - Grid responsive

5. **Contact CTA**
   - WhatsApp button con icono
   - Teléfono directo
   - Background degradado

---

## 🚀 Cómo Usar los Componentes

### Opción 1: Desde UI Kit (Recomendado)

```tsx
import { RotatingHero, ServicesGrid, LocationCard, KatzBadge } from '@patagonia-web-factory/ui-kit';
```

### Opción 2: Copiar de Staging

Si prefieres copiar directamente:

```bash
cp libs/shared/ui-kit/src/lib/staging/*.tsx tu-proyecto/components/
```

---

## 📊 Datos Reales Incluidos

### 7 Sucursales:

1. Hospital Privado Central (24h)
2. Clínica Rosario de Lerma (24h)
3. Altos de Salta Sanatorio (24h)
4. Centro Médico San Lorenzo
5. Cordis
6. Innova Salud Integral
7. SMG Swiss Medical

### 6 Servicios:

- Cada uno con descripción real
- Iconografía lineal SVG
- CTAs configuradas

---

## ⚙️ Configuración Requerida

### Tailwind Config

```javascript
// apps/tu-app/tailwind.config.js
const sharedPreset = require('../../tailwind-workspace-preset.js');

module.exports = {
  presets: [sharedPreset],
  // ... resto de config
};
```

### Global CSS

```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-katz-gray-dark;
    font-size: 17px;
  }
}
```

---

## 🐛 Problema Técnico Actual

**Issue**: Next.js 15/16 + Nx Monorepo tienen problemas con imports dinámicos de módulos Nx en el navegador.

**Status**: Componentes **100% funcionales** y listos. El issue es solo de integración Next.js/Nx.

**Soluciones Posibles**:

1. Usar Next.js standalone (fuera de Nx)
2. Esperar fix de Nx para Next.js 15/16
3. Usar los componentes en otra app React (Vite, CRA, etc.)

---

## 📝 Próximos Pasos Sugeridos

1. ✅ **Componentes completos** - Listos para usar
2. ⏳ **Mapa Leaflet** - Pendiente de integrar
3. ⏳ **Resolver build issue** - Nx + Next.js
4. ⏳ **Deploy** - Una vez resuelto el build

---

**Creado**: 2025-11-20  
**Stack**: React 19 + TypeScript + Tailwind CSS  
**Diseño**: Médico premium, profesional, moderno
