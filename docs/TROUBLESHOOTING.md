# Troubleshooting - Build Issues

## Problem: Module Not Found Errors with Next.js/Nx

### Síntomas

- Errores `Module not found: Can't resolve '@angular-devkit/*'`
- Errores `Module not found: Can't resolve '@swc/wasm'`
- Errores de resolución dinámica con Turbopack

### Causa

Next.js 16 con Turbopack habilitado tiene problemas con las importaciones dinámicas de Nx, además de dependencias faltantes en el workspace.

### Solución Aplicada

#### 1. Instalar dependencias faltantes

```bash
npm install -D @angular-devkit/architect @angular-devkit/core @angular-devkit/schematics @swc/wasm @swc/core @swc/helpers rxjs
```

#### 2. Deshabilitar Turbopack

Modificado `apps/landing-template/next.config.js`:

```javascript
const nextConfig = {
  nx: {},
  experimental: {
    turbo: undefined, // Deshabilita Turbopack
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };
    }
    return config;
  },
};
```

### Comandos para Desarrollo

#### Dev Server (Recomendado)

```bash
npx nx dev landing-template
```

#### Build de Producción

```bash
npx nx build landing-template
```

### Notas

- Este es un problema conocido con Nx + Next.js 16
- Turbopack será re-habilitado cuando Nx tenga mejor soporte
- El dev server estándar con Webpack funciona perfectamente
