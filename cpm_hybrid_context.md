# Contexto de Proyecto: CPM Bariloche (Estrategia de Diseño Híbrido)

Este documento unifica la visión original ("Prompt Maestro") con la nueva estrategia de **Diseño Híbrido**, sirviendo como fuente de verdad para el desarrollo visual y funcional del sitio.

## 1. Visión y Estrategia

**Objetivo:** Crear una experiencia digital que combine el **Rigor Médico (E-A-T)** necesario para un centro de salud con la **Calidez y Modernidad** de un diseño orgánico.

- **Cliente:** Centro Pediátrico Melipal (CPM Bariloche).
- **Enfoque:** "Tu Tranquilidad en Bariloche". Confianza, cercanía y eficiencia professional.

## 2. Stack Tecnológico (Patagonia Web Factory)

- **Framework:** Next.js 15.5.6 (App Router).
- **Gestión de Estado/Build:** Nx Monorepo.
- **Estilos:** Tailwind CSS (Configuración personalizada).
- **CMS:** Sanity.io (Headless).
- **Lenguaje:** TypeScript / React 19.

## 3. Identidad Visual (Diseño Híbrido)

### Paleta de Colores

| Propósito                | Color          | Código    | Uso Estratégico                                                           |
| :----------------------- | :------------- | :-------- | :------------------------------------------------------------------------ |
| **Principal (Rigor)**    | `brand-blue`   | `#003366` | Textos principales, Headers, Navbar. Aporta sobriedad y confianza médica. |
| **Secundario (Calidez)** | `brand-light`  | `#E6F0FF` | Fondos de secciones orgánicas (Horarios, Banners). Aporta suavidad.       |
| **Acento (Acción)**      | `action-coral` | `#FF7F50` | Botones (CTAs), iconos de urgencia, detalles de "juego".                  |
| **Fondo General**        | `gray-soft`    | `#F7FAFC` | Fondo base de la aplicación para evitar el blanco clínico puro.           |

### Tipografía

- **Títulos (Headings):** `Poppins` (Sans-serif redondeada). Aporta modernidad y cercanía.
- **Cuerpo (Body):** `Inter` (Sans-serif geométrica). Maximiza la legibilidad en bloques de texto.

### Lenguaje de Diseño (Formas)

- **Orgánico:** Uso de curvas suaves (`CurvedSection`) para dividir secciones, evitando la rigidez de bloques rectangulares.
- **Flotante:** Elementos como tarjetas (`StaffProfileCard`) utilizan sombras suaves (`shadow-smooth`) y bordes muy redondeados (`rounded-[2rem]`) para sentirse amigables y modernos.

## 4. Componentes Clave

### A. CurvedSection (Molécula)

- **Función:** Contenedor con bordes curvos (SVG clip-path) en la parte superior o inferior.
- **Uso:** Enmarca secciones como "Horarios" o "App Banner" para romper la monotonía visual.
- **Estilo:** Usa `bg-brand-light` predominantemente.

### B. ScheduleTabs (Organismo funcional)

- **Función:** Visualización de horarios semanales interactiva.
- **Rediseño:** Tabs estilo "pastilla" (Pill). Estado activo con `bg-brand-blue` y sombra.
- **Urgencias:** El ítem de "Demanda Espontánea" se destaca sutilmente con `action-coral` (borde o badge), sin ser alarmante.

### C. StaffProfileCard (Organismo de confianza)

- **Función:** Presentación del equipo médico.
- **Rediseño:**
  - Esquinas muy redondeadas.
  - Sombra `shadow-smooth` que aumenta al hacer hover (efecto flotante).
  - Tipografía `Poppins` para el nombre del profesional.
  - Énfasis en la foto del profesional como elemento de conexión humana.

### D. Global Layout (Navbar & Footer)

- **Navbar:** Sobria, priorizando el CTA "PEDIR TURNO" (`action-coral`).
- **Footer:** Integrado visualmente con curvas, ofreciendo accesos rápidos y datos de contacto claros.

## 5. Arquitectura de Información (Sitemap)

1.  **HOME (`/`)**:
    - **Hero:** Promesa de valor + CTA.
    - **Horarios:** Bloque crítico de utilidad inmediata (Curved).
    - **Staff Preview:** Credibilidad médica.
    - **App Banner:** Conversión digital.
2.  **STAFF (`/staff`)**: Listado completo. Profiles individuales (`/staff/[slug]`) con bio y matrícula.
3.  **HORARIOS (`/horarios`)**: Vista detallada de la agenda.
4.  **INSTITUCIONAL (`/sobre-el-cpm`)**: Misión, Vacunatorio, Filosofía.
5.  **CONTACTO (`/contacto`)**: Mapa, teléfonos, formulario.
6.  **ESPECIALIDADES (`/especialidades/[slug]`)**: Landing pages SEO para patologías específicas (Dermatología, Neurología, etc.).

## 6. Modelo de Datos (Sanity.io)

Los esquemas de Sanity alimentan el frontend:

- **Settings:** Configuración global (sitio, redes, contacto).
- **StaffMember:** Perfiles profesionales.
- **Schedule:** Datos para el componente `ScheduleTabs`.
- **Novedad:** Blog y noticias institucionales.

---

_Este documento define la dirección actual del desarrollo para CPM Bariloche._
