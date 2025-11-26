# Lovable Integration Workflow

## Filosofía: De Lovable a Producción

Lovable es excelente para prototipar visualmente, pero su código suele ser verboso y específico. Este workflow te permite **iterar rápido** sin comprometer la arquitectura del monorepo.

## El Flujo en 3 Pasos

### 1️⃣ **Staging** - Pegar y Probar

Cuando diseñas algo en Lovable que te gusta:

```bash
# Copia el JSX/Tailwind desde Lovable
# Pega directamente en:
libs/shared/ui-kit/src/lib/staging/<nombre-componente>.tsx
```

**Reglas del Staging:**

- ✅ Usa este espacio para experimentar rápido
- ✅ El código puede estar "crudo" (clases inline, hardcoded)
- ❌ **NO importes desde staging en apps de producción**

### 2️⃣ **Refactorización** - Atomic Design

Cuando el componente está funcionando en staging:

1. **Identifica las piezas reutilizables**:

   - ¿El botón se puede compartir? → `button.tsx`
   - ¿La card tiene un patrón repetible? → `card.tsx`

2. **Extrae a componentes atómicos**:

   ```bash
   libs/shared/ui-kit/src/lib/
   ├── atoms/       # Button, Input, Badge
   ├── molecules/   # Card, SearchBar
   └── organisms/   # HeroSection, Navbar
   ```

3. **Reemplaza valores hardcoded por props**:

   ```tsx
   // ❌ Lovable (hardcoded)
   <div className="bg-blue-500">Hola</div>

   // ✅ Producción (reutilizable)
   <Button variant="primary">{children}</Button>
   ```

### 3️⃣ **Exportación** - Disponibilizar

Una vez refactorizado:

```typescript
// libs/shared/ui-kit/src/index.ts
export * from './lib/atoms/button';
export * from './lib/organisms/hero-section';
```

Ahora **todas las apps** pueden importar:

```tsx
import { Button, HeroSection } from '@patagonia-web-factory/ui-kit';
```

---

## Ejemplo Práctico

### Escenario:

Diseñaste un "Feature Card" espectacular en Lovable.

#### Paso 1: Staging

```tsx
// libs/shared/ui-kit/src/lib/staging/feature-card.tsx
export function FeatureCardRaw() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl shadow-2xl">
      <h3 className="text-white text-2xl font-bold">Velocidad</h3>
      <p className="text-gray-100">Construye sitios en horas, no semanas</p>
    </div>
  );
}
```

#### Paso 2: Refactorización

```tsx
// libs/shared/ui-kit/src/lib/molecules/feature-card.tsx
export interface FeatureCardProps {
  title: string;
  description: string;
  variant?: 'blue' | 'purple' | 'patagonia';
}

export function FeatureCard({ title, description, variant = 'patagonia' }: FeatureCardProps) {
  const gradients = {
    blue: 'from-blue-500 to-blue-700',
    purple: 'from-purple-500 to-purple-700',
    patagonia: 'from-brand-blue to-brand-dark', // ← Usa el preset
  };

  return (
    <div className={`bg-gradient-to-br ${gradients[variant]} p-8 rounded-xl shadow-2xl`}>
      <h3 className="text-white text-2xl font-bold">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </div>
  );
}
```

#### Paso 3: Exportación

```typescript
// libs/shared/ui-kit/src/index.ts
export * from './lib/molecules/feature-card';
```

---

## Tips Pro

### ✅ Mantén la Consistencia

- **Siempre usa el preset de Tailwind**: Prefiere `bg-brand-blue` sobre `bg-blue-500`.
- **Props sobre hardcoding**: Si un valor puede cambiar, hazlo prop.

### 🔥 Velocidad vs. Calidad

- **Staging**: Máxima velocidad. Copia, pega, ajusta.
- **Producción**: Máxima reutilización. Componentes genéricos y bien tipados.

### 📦 Cuándo NO refactorizar

Si un componente es **ultra específico** para un solo cliente (ej: "Navbar de Hotel Llao Llao con logo animado"):

- Déjalo en `apps/hotel-llaollao/components/custom-navbar.tsx`
- NO lo muevas a `libs/shared/ui-kit`

---

## Resumen Visual

```
Lovable → Staging → Refactorización → Exportación → Apps
  🎨        📋          🔧              📦           🚀
(Diseño)  (Prueba)  (Limpieza)      (Compartir) (Producción)
```

**Regla de oro**: Si lo vas a usar en 2+ apps, **refactorízalo a `libs/`**. Sino, déjalo en `apps/<cliente>/components`.
