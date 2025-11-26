# Prompt Template para IA - Patagonia Web Factory

Este prompt está diseñado para darle contexto a cualquier IA (Lovable, Claude, ChatGPT, Cursor, etc.) sobre cómo funciona nuestro proyecto.

---

## 📋 Prompt Base (Copia y pega esto)

```markdown
# Contexto: Patagonia Web Factory

Estoy trabajando en un monorepo Nx para construir sitios web de clientes de Patagonia.

## Stack Técnico

- **Monorepo**: Nx 22.1.0
- **Framework**: Next.js 15.5.6 (App Router)
- **React**: 19.0.0
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 3.x
- **CMS**: Sanity.io (planeado)

## Estructura del Proyecto
```

patagonia-web-factory/
├── apps/ # Apps de clientes
│ └── landing-template/ # Ejemplo Next.js
├── libs/shared/
│ ├── ui-kit/ # Componentes compartidos
│ │ └── src/lib/
│ │ ├── button.tsx
│ │ ├── hero-section.tsx
│ │ └── staging/ # Para código temporal de Lovable
│ └── content/ # Queries y tipos Sanity
└── tailwind-workspace-preset.js # Colores de marca compartidos

````

## Sistema de Diseño

### Colores de Marca (usar siempre que sea posible)
```javascript
brand-blue: '#003366'   // Patagonia Blue principal
brand-dark: '#002244'   // Azul oscuro
brand-light: '#E6F0FF'  // Azul claro/fondo
````

### Componentes Disponibles

#### Button

```tsx
import { Button } from '@patagonia-web-factory/ui-kit';

<Button variant="primary">Texto</Button>      // Azul sólido
<Button variant="secondary">Texto</Button>    // Azul claro
<Button variant="outline">Texto</Button>      // Borde azul
```

#### HeroSection

```tsx
import { HeroSection } from '@patagonia-web-factory/ui-kit';

<HeroSection
  title="Título Principal"
  subtitle="Descripción"
  ctaText="Comenzar"
  onCtaClick={() => {}}
  backgroundImage="/hero.jpg" // Opcional
/>;
```

## Convenciones de Código

1. **TypeScript**: Siempre tipado, definir interfaces para props
2. **'use client'**: Agregar al inicio de componentes interactivos (onClick, useState, etc.)
3. **Tailwind**: Usar clases de utilidad, preferir `brand-blue` sobre `bg-blue-500`
4. **Atomic Design**:
   - `atoms/`: Botones, inputs
   - `molecules/`: Cards, search bars
   - `organisms/`: Navbars, footers, heroes
5. **Exportación**: Todos los componentes exportados desde `libs/shared/ui-kit/src/index.ts`

## Workflow para Nuevos Componentes

1. Si vienes de Lovable → Pegar en `libs/shared/ui-kit/src/lib/staging/`
2. Refactorizar:
   - Reemplazar colores → Usar `brand-*`
   - Agregar TypeScript interfaces
   - Agregar `'use client'` si es interactivo
3. Mover a `libs/shared/ui-kit/src/lib/`
4. Exportar en `index.ts`

## Ejemplo de Componente Bien Hecho

```tsx
'use client';

import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onAction?: () => void;
}

export function Card({ title, description, imageUrl, onAction }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />}
      <h3 className="text-2xl font-bold text-brand-blue mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {onAction && (
        <button onClick={onAction} className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-dark">
          Ver más
        </button>
      )}
    </div>
  );
}
```

## Cómo Usar en una App

```tsx
// apps/mi-cliente/src/app/page.tsx
import { Button, HeroSection } from '@patagonia-web-factory/ui-kit';

export default function HomePage() {
  return (
    <main>
      <HeroSection title="Bienvenido a [Cliente]" subtitle="Descripción del servicio" onCtaClick={() => console.log('CTA clicked')} />

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-brand-blue mb-8">Nuestros Servicios</h2>
        {/* ... más contenido ... */}
      </section>
    </main>
  );
}
```

## Mi Tarea Específica

[AQUÍ DESCRIBES LO QUE QUIERES QUE LA IA HAGA]

Por ejemplo:

- "Crea un componente Card reutilizable para mostrar servicios"
- "Diseña una sección de testimonios usando nuestros colores de marca"
- "Genera una página completa para un hotel en Bariloche"

Por favor, genera código que:

1. Siga las convenciones de TypeScript y Tailwind
2. Use nuestros colores de marca (brand-\*)
3. Sea reutilizable y esté bien tipado
4. Incluya 'use client' si es interactivo
5. Se integre con nuestra arquitectura de monorepo

```

---

## 🎯 Prompts Específicos por Caso de Uso

### Para Lovable

```

Diseña un [tipo de componente] para un sitio web de [tipo de negocio] en Patagonia.

Usa estos colores:

- Primario: #003366 (azul Patagonia)
- Secundario: #002244 (azul oscuro)
- Fondo claro: #E6F0FF

Genera código React con TypeScript y Tailwind CSS.
Debe ser responsive y tener microinteracciones suaves.

```

### Para Crear Página Completa

```

[Pega el Prompt Base arriba]

Crea una landing page completa para [nombre del cliente - ej: Hotel Llao Llao].

La página debe tener:

1. Hero con imagen de fondo de la Patagonia
2. Sección de servicios (3 cards)
3. Galería de imágenes
4. Testimonios
5. Formulario de contacto
6. Footer

Usa los componentes existentes (Button, HeroSection) donde sea posible.
Para componentes nuevos, crea en estilo modular y reutilizable.

```

### Para Crear Componente Nuevo

```

[Pega el Prompt Base arriba]

Crea un componente [nombre - ej: Navbar] que:

- Sea responsive (mobile-first)
- Use nuestros colores de marca
- Tenga animaciones suaves
- Esté bien tipado con TypeScript
- Siga nuestras convenciones de código

Debe incluir:
[Lista de features específicas]

```

---

## 📝 Checklist Pre-Prompt

Antes de enviar tu prompt a la IA, verifica:

- [ ] Incluiste el contexto del stack (Nx, Next.js 15, React 19)
- [ ] Mencionaste los colores de marca
- [ ] Especificaste TypeScript + Tailwind
- [ ] Indicaste si necesita 'use client'
- [ ] Describiste claramente la tarea específica
- [ ] Mencionaste componentes existentes que puede reutilizar

---

## 💡 Tips para Mejores Resultados

1. **Sé específico**: "Crea un navbar con logo a la izquierda, 5 links centrados, y botón CTA a la derecha"
2. **Da ejemplos visuales**: "Similar a [sitio web de referencia]"
3. **Menciona el contexto**: "Para un hotel de lujo en Bariloche"
4. **Iteración**: Pide ajustes incrementales en lugar de rehacer todo
5. **Valida temprano**: Prueba el código generado en staging antes de refactorizar

---

**Archivo de referencia**: Ver `docs/STACK.md` para documentación completa del stack.
```
