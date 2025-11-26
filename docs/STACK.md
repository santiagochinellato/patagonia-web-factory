# Stack Técnico - Patagonia Web Factory

## 🏗️ Arquitectura General

**Tipo**: Nx Monorepo  
**Propósito**: Fábrica de sitios web para clientes de Patagonia con componentes reutilizables

## 📦 Tecnologías

### Core

- **Monorepo**: Nx 22.1.0
- **Framework**: Next.js 15.5.6 (App Router)
- **Lenguaje**: TypeScript
- **Gestor de paquetes**: npm

### Frontend

- **React**: 19.0.0
- **Estilos**: Tailwind CSS 3.x
- **Componentes**: Librería compartida en `@patagonia-web-factory/ui-kit`

### Testing

- **Unit Tests**: Jest
- **Linter**: ESLint

### CMS

- **Headless CMS**: Sanity.io (planeado)
- **Content Library**: `@patagonia-web-factory/content`

## 📂 Estructura del Monorepo

```
patagonia-web-factory/
├── apps/
│   └── landing-template/          # App Next.js de ejemplo
│       ├── src/
│       │   └── app/
│       │       ├── page.tsx       # Página principal
│       │       ├── layout.tsx
│       │       └── global.css
│       ├── next.config.js
│       └── tailwind.config.js     # Extiende preset compartido
│
├── libs/
│   └── shared/
│       ├── ui-kit/                # Componentes reutilizables
│       │   └── src/
│       │       ├── index.ts       # Exporta todos los componentes
│       │       └── lib/
│       │           ├── button.tsx
│       │           ├── hero-section.tsx
│       │           └── staging/   # Para código de Lovable
│       │
│       └── content/               # Lógica Sanity
│           └── src/
│               └── lib/
│                   ├── queries.ts
│                   └── types.ts
│
├── docs/
│   ├── LOVABLE_WORKFLOW.md       # Workflow Lovable → Producción
│   ├── TROUBLESHOOTING.md        # Soluciones a problemas
│   └── STACK.md                  # Este archivo
│
├── tailwind-workspace-preset.js   # Preset compartido (colores de marca)
├── nx.json                        # Config Nx
├── tsconfig.base.json            # Config TypeScript base
└── package.json                   # Dependencias root
```

## 🎨 Sistema de Diseño

### Tailwind Preset Compartido

Archivo: `tailwind-workspace-preset.js`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#003366', // Patagonia Blue
          dark: '#002244',
          light: '#E6F0FF',
        },
      },
    },
  },
};
```

**Cómo se usa**: Todas las apps y librerías extienden este preset en su `tailwind.config.js`:

```javascript
const sharedPreset = require('../../tailwind-workspace-preset.js');

module.exports = {
  presets: [sharedPreset],
  content: [
    /* ... */
  ],
};
```

## 🧩 Componentes Compartidos

### Ubicación

`libs/shared/ui-kit/src/lib/`

### Componentes Actuales

#### Button

```tsx
import { Button } from '@patagonia-web-factory/ui-kit';

<Button variant="primary">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

**Props**:

- `variant`: 'primary' | 'secondary' | 'outline'
- Todos los props HTML de `<button>`

#### HeroSection

```tsx
import { HeroSection } from '@patagonia-web-factory/ui-kit';

<HeroSection
  title="Título Principal"
  subtitle="Descripción"
  ctaText="Comenzar"
  onCtaClick={() => console.log('Clicked!')}
  backgroundImage="/path/to/image.jpg" // Opcional
/>;
```

**Props**:

- `title`: string (requerido)
- `subtitle`: string (requerido)
- `ctaText`: string (opcional, default: "Comenzar")
- `onCtaClick`: () => void (opcional)
- `backgroundImage`: string (opcional)

### Convenciones de Componentes

1. **Directiva 'use client'**: Todos los componentes interactivos deben tener `'use client';` al inicio
2. **TypeScript**: Definir interfaces para props
3. **Tailwind**: Usar clases de utilidad, preferir `brand-*` sobre colores hardcoded
4. **Exportación**: Exportar desde `libs/shared/ui-kit/src/index.ts`

## 🔄 Workflow: Crear Nueva App

### 1. Generar App

```bash
npx nx g @nx/next:app apps/nombre-cliente --style=tailwind
```

### 2. Configurar Tailwind

Editar `apps/nombre-cliente/tailwind.config.js`:

```javascript
const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');
const { join } = require('path');
const sharedPreset = require('../../tailwind-workspace-preset.js');

module.exports = {
  presets: [sharedPreset],
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
};
```

### 3. Importar Componentes

```tsx
// apps/nombre-cliente/src/app/page.tsx
import { Button, HeroSection } from '@patagonia-web-factory/ui-kit';

export default function Page() {
  return (
    <div>
      <HeroSection title="Bienvenido a [Nombre Cliente]" subtitle="..." onCtaClick={() => {}} />
      <Button variant="primary">Contactar</Button>
    </div>
  );
}
```

### 4. Run Dev Server

```bash
npx nx dev nombre-cliente
```

## 🎨 Workflow: Integración con Lovable

### Contexto para Lovable

Cuando uses Lovable para diseñar componentes, dale este contexto:

```
Estoy usando un monorepo Nx con Next.js 15 y Tailwind CSS.

Tengo un preset compartido con estos colores de marca:
- brand-blue: #003366
- brand-dark: #002244
- brand-light: #E6F0FF

Por favor, usa estos colores en lugar de colores genéricos.
También tengo componentes base: Button, HeroSection.

Genera código React con TypeScript y Tailwind CSS.
```

### Proceso de Integración

1. **Diseña en Lovable** → Obtén el JSX/Tailwind
2. **Pega en staging**: `libs/shared/ui-kit/src/lib/staging/mi-componente-raw.tsx`
3. **Prueba localmente**: Importa desde staging en una app
4. **Refactoriza**:
   - Extraer componentes reutilizables
   - Reemplazar colores hardcoded por `brand-*`
   - Agregar TypeScript interfaces
   - Agregar `'use client'` si es necesario
5. **Producción**: Mueve a `libs/shared/ui-kit/src/lib/mi-componente.tsx`
6. **Exporta**: Agrega a `libs/shared/ui-kit/src/index.ts`

## 🗂️ Sanity CMS (Planeado)

### Estructura

```
libs/shared/content/src/lib/
├── queries.ts      # Queries GROQ
├── types.ts        # Interfaces TypeScript
└── client.ts       # Cliente Sanity (futuro)
```

### Ejemplo de Query

```typescript
// libs/shared/content/src/lib/queries.ts
export const GET_ALL_POSTS = `*[_type == "post"] {
  title,
  slug,
  publishedAt,
  mainImage
}`;
```

### Ejemplo de Tipo

```typescript
// libs/shared/content/src/lib/types.ts
export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: SanityImage;
}
```

## 🚀 Comandos Útiles

```bash
# Dev server
npx nx dev landing-template

# Lint
npx nx lint landing-template

# Test
npx nx test ui-kit

# Reset cache (si hay problemas)
npx nx reset
rm -rf apps/*/·next

# Ver dependencias
npx nx graph

# Generar nueva librería
npx nx g @nx/react:library nueva-lib --directory=libs/shared/nueva-lib
```

## 📝 Prompt Template para IA

Usa este template cuando pidas a una IA (Lovable, Cursor, etc.) que cree código para este proyecto:

```
Contexto del Proyecto:
- Monorepo Nx con Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS con preset compartido (brand-blue: #003366, brand-dark: #002244, brand-light: #E6F0FF)
- Componentes compartidos en `@patagonia-web-factory/ui-kit`

Componentes disponibles:
- Button (variants: primary, secondary, outline)
- HeroSection (con title, subtitle, CTA)

Convenciones:
- Usar 'use client' para componentes interactivos
- Preferir clases Tailwind `brand-*` sobre colores hardcoded
- TypeScript con interfaces tipadas
- Atomic Design (atoms, molecules, organisms)

Tarea:
[Describe lo que quieres que la IA haga]

Por favor, genera código que siga estas convenciones y se integre con nuestra arquitectura.
```

## 🔧 Configuración Especial

### Next.js

- **Versión**: 15.5.6 (downgradeado desde 16 por incompatibilidad Turbopack + Nx)
- **Modo**: Webpack (no Turbopack)
- **App Router**: Sí
- **Server Components**: Por defecto (marcar con 'use client' cuando sea necesario)

### Nx

- **Caché**: Habilitado (`.nx/cache/`)
- **Affected**: Detecta automáticamente qué cambió
- **Parallel**: Builds en paralelo habilitados

## 📚 Documentación Relacionada

- [Lovable Workflow](./LOVABLE_WORKFLOW.md) - Cómo integrar código de Lovable
- [Troubleshooting](./TROUBLESHOOTING.md) - Soluciones a problemas comunes
- [README](../README.md) - Quick start guide
- [Walkthrough](../.gemini/antigravity/brain/*/walkthrough.md) - Registro completo del proyecto

## 🎯 Principios de la Fábrica

1. **Reutilización Máxima**: Si algo se usa 2+ veces, va a `libs/shared/`
2. **Consistencia Visual**: Un cambio en el preset afecta todas las apps
3. **Velocidad**: Lovable para diseño → Staging → Refactorización → Producción
4. **Tipos Compartidos**: Sanity types en `@patagonia-web-factory/content`
5. **Apps Tontas**: Las apps solo ensamblan componentes, la lógica está en libs

---

**Versión**: 1.0  
**Última actualización**: 2025-11-20  
**Mantenedor**: Tech Lead de Patagonia Web Factory
