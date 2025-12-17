# Patagonia Web Factory - Quick Start

## 🚀 Desarrollo

### Comando Recomendado

```bash
cd patagonia-web-factory
npx nx dev cpm-bariloche
```

**Dev Server**: http://localhost:3000

### Versión de Next.js

- **Actual**: Next.js 15.5.6
- **Nota**: Downgradeamos desde v16 debido a incompatibilidad de Turbopack con Nx monorepo

## 📂 Estructura del Proyecto

```
patagonia-web-factory/
├── apps/
│   └── landing-template/      # App Next.js de ejemplo
├── libs/
│   └── shared/
│       ├── ui-kit/            # Componentes (Button, HeroSection)
│       └── content/           # Lógica Sanity (Types, Queries)
├── docs/
│   ├── LOVABLE_WORKFLOW.md    # Workflow Lovable → Producción
│   └── TROUBLESHOOTING.md     # Soluciones a problemas comunes
└── tailwind-workspace-preset.js # Colores de marca compartidos
```

## 🎨 Componentes Compartidos

```tsx
// En cualquier app Next.js
import { Button, HeroSection } from '@patagonia-web-factory/ui-kit';

export default function Page() {
  return (
    <>
      <HeroSection title="Mi Título" subtitle="Subtítulo" ctaText="Comenzar" onCtaClick={() => console.log('Clicked!')} />
      <Button variant="primary">Click me</Button>
    </>
  );
}
```

## 🔧 Comandos Útiles

```bash
# Laboratorios Katz
npm run dev:katz          # Servidor de desarrollo
npm run build:katz        # Build de producción
npm run start:katz        # Servidor de producción
npm run share:katz        # Compartir con ngrok (automático)

# Build librerías compartidas
npx nx build shared-ui-kit
npx nx build shared-content

# Linting
npx nx lint landing-template

# Reset caché de Nx
npx nx reset

# Ver graph de dependencias
npx nx graph
```

## 🌐 Compartir con Cliente (ngrok)

### Opción 1: Automático

```bash
npm run share:katz
```

### Opción 2: Manual

```bash
# Terminal 1: Inicia el servidor
npm run dev:katz

# Terminal 2: Inicia ngrok
./scripts/ngrok-quick.sh
# o simplemente: ngrok http 3000
```

**📋 Más información**: Ver [docs/NGROK_SETUP.md](./docs/NGROK_SETUP.md)

## 📖 Documentación

- [Lovable Workflow](./docs/LOVABLE_WORKFLOW.md) - Cómo integrar código de Lovable
- [Troubleshooting](./docs/TROUBLESHOOTING.md) - Soluciones a problemas comunes
- [ngrok Setup](./docs/NGROK_SETUP.md) - Compartir tu web con clientes usando ngrok

## ⚠️ Problemas Resueltos

1. **Next.js 16 + Turbopack + Nx**: ✅ RESUELTO - Downgradeado a Next.js 15
2. **Module not found (Angular DevKit)**: ✅ RESUELTO - Dependencias instaladas
3. **'use client' missing**: ✅ RESUELTO - Directivas agregadas a componentes

## 🤝 Workflow Recomendado

1. Diseña en **Lovable**
2. Pega el código en `libs/shared/ui-kit/src/lib/staging/`
3. Prueba localmente
4. Refactoriza a componentes atómicos
5. Exporta en `libs/shared/ui-kit/src/index.ts`
6. Usa en cualquier app con `import { Component } from '@patagonia-web-factory/ui-kit'`
