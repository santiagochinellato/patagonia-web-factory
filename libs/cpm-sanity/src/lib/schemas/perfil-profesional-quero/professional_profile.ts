
import { defineField, defineType } from 'sanity';

export const professional_profile = defineType({
  name: 'professional_profile',
  title: 'Perfil Profesional (Dr. Quero)',
  type: 'document',
  fields: [
    // 1. Información Personal
    defineField({
      name: 'personalInfo',
      title: 'Información Personal',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({ name: 'fullName', title: 'Nombre Completo', type: 'string' }),
        defineField({ name: 'preferredName', title: 'Nombre Preferido', type: 'string' }),
        defineField({ name: 'mainTitle', title: 'Título Principal', type: 'string' }),
        defineField({
          name: 'subtitles',
          title: 'Subtítulos / Roles',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({ name: 'dni', title: 'DNI', type: 'string' }),
        defineField({ name: 'birthDate', title: 'Fecha de Nacimiento', type: 'string' }),
        defineField({ name: 'age', title: 'Edad', type: 'number' }),
        defineField({ name: 'nationality', title: 'Nacionalidad', type: 'string' }),
        defineField({
          name: 'location',
          title: 'Ubicación',
          type: 'object',
          fields: [
            defineField({ name: 'city', title: 'Ciudad', type: 'string' }),
            defineField({ name: 'province', title: 'Provincia', type: 'string' }),
            defineField({ name: 'country', title: 'País', type: 'string' }),
            defineField({ name: 'previousAddress', title: 'Dirección Anterior', type: 'string' }),
            defineField({ name: 'postalCode', title: 'Código Postal', type: 'string' })
          ]
        }),
        defineField({
          name: 'contact',
          title: 'Información de Contacto',
          type: 'object',
          fields: [
            defineField({ name: 'phone', title: 'Teléfono', type: 'string' }),
            defineField({ name: 'emailMain', title: 'Email Principal', type: 'string' }),
            defineField({ name: 'emailUniversity', title: 'Email Universitario', type: 'string' }),
            defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'string' })
          ]
        })
      ]
    }),

    // 2. Propuesta de Valor (Hero)
    defineField({
      name: 'heroSection',
      title: 'Propuesta de Valor (Home/Hero)',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'shortDescription', title: 'Descripción Corta', type: 'text' }),
        defineField({ name: 'extendedDescription', title: 'Descripción Extendida', type: 'text' }),
        defineField({
          name: 'profilePhoto',
          title: 'Foto de Perfil',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Texto Alternativo', type: 'string' })
          ]
        }),
        defineField({
          name: 'cta',
          title: 'Botón CTA Hero',
          type: 'object',
          fields: [
            defineField({ name: 'buttonText', title: 'Texto del Botón', type: 'string' }),
            defineField({ name: 'whatsappLink', title: 'Enlace WhatsApp', type: 'url' }),
            defineField({ name: 'defaultMessage', title: 'Mensaje Predeterminado', type: 'string' })
          ]
        })
      ]
    }),

    // 3. Experiencia y Formación
    defineField({
      name: 'experience',
      title: 'Experiencia Laboral',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'currentPositions',
          title: 'Posiciones Actuales',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'position', title: 'Cargo', type: 'string' }),
              defineField({ name: 'institution', title: 'Institución / Empresa', type: 'string' }),
              defineField({ name: 'area', title: 'Área', type: 'string' }),
              defineField({ name: 'chair', title: 'Cátedra', type: 'string' }),
              defineField({ name: 'period', title: 'Periodo', type: 'string' }),
              defineField({ name: 'description', title: 'Descripción', type: 'text' }),
              defineField({
                name: 'responsibilities',
                title: 'Responsabilidades',
                type: 'array',
                of: [{ type: 'string' }]
              }),
              defineField({
                name: 'reference',
                title: 'Referencia',
                type: 'object',
                fields: [
                  defineField({ name: 'name', title: 'Nombre', type: 'string' }),
                  defineField({ name: 'position', title: 'Cargo', type: 'string' }),
                  defineField({ name: 'phone', title: 'Teléfono', type: 'string' })
                ]
              }),
              // Field for 'empresa' object details if needed, but 'institution' covers it mostly.
              // Adding specific fields from JSON just in case:
              defineField({ name: 'type', title: 'Tipo (Privado/Público)', type: 'string' }),
              defineField({ name: 'sector', title: 'Sector', type: 'string' })
            ]
          }]
        }),
        defineField({
          name: 'pastPositions',
          title: 'Posiciones Anteriores',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'position', title: 'Cargo', type: 'string' }),
              defineField({ name: 'institution', title: 'Institución / Empresa', type: 'string' }),
              defineField({ name: 'period', title: 'Periodo', type: 'string' }),
              defineField({ name: 'closureReason', title: 'Motivo Cierre', type: 'string' }),
              defineField({ name: 'type', title: 'Tipo', type: 'string' }),
              defineField({ name: 'sector', title: 'Sector', type: 'string' }),
               defineField({ name: 'carrera', title: 'Carrera (si aplica)', type: 'string' }),
               defineField({ name: 'catedra', title: 'Cátedra (si aplica)', type: 'string' }),
              defineField({
                name: 'responsibilities',
                title: 'Responsabilidades',
                type: 'array',
                of: [{ type: 'string' }]
              }),
              defineField({
                name: 'achievements',
                title: 'Logros',
                type: 'array',
                of: [{ type: 'string' }]
              }),
               defineField({
                name: 'reference',
                title: 'Referencia',
                type: 'object',
                fields: [
                  defineField({ name: 'name', title: 'Nombre', type: 'string' }),
                  defineField({ name: 'position', title: 'Cargo', type: 'string' }),
                  defineField({ name: 'phone', title: 'Teléfono', type: 'string' })
                ]
              })
            ]
          }]
        })
      ]
    }),

    defineField({
      name: 'education',
      title: 'Formación Académica',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'formalEducation',
          title: 'Educación Formal',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'level', title: 'Nivel', type: 'string' }),
              defineField({ name: 'title', title: 'Título', type: 'string' }),
              defineField({ name: 'institution', title: 'Institución', type: 'string' }),
              defineField({ name: 'faculty', title: 'Facultad', type: 'string' }),
              defineField({ name: 'period', title: 'Periodo', type: 'string' }),
              defineField({ name: 'finalGrade', title: 'Nota Final / Promedio', type: 'string' }),
              defineField({ name: 'distinction', title: 'Distinción', type: 'string' }),
              defineField({ name: 'highlighted', title: 'Destacado', type: 'boolean' }),
              defineField({ name: 'icon', title: 'Icono', type: 'string' })
            ]
          }]
        }),
        defineField({
          name: 'complementaryEducation',
          title: 'Titulaciones Complementarias',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Título', type: 'string' }),
              defineField({ name: 'institution', title: 'Institución', type: 'string' }),
              defineField({ name: 'period', title: 'Periodo', type: 'string' }),
              defineField({ name: 'endorsedBy', title: 'Avalado Por', type: 'string' }),
              defineField({ name: 'highlighted', title: 'Destacado', type: 'boolean' }),
              defineField({ name: 'icon', title: 'Icono', type: 'string' })
            ]
          }]
        })
      ]
    }),

    // 4. Autoridad y Logros
    defineField({
      name: 'authority',
      title: 'Autoridad Institucional',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({ name: 'title', title: 'Título Sección', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtítulo Sección', type: 'string' }),
        defineField({
          name: 'institutions',
          title: 'Instituciones',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'name', title: 'Nombre', type: 'string' }),
              defineField({ name: 'fullName', title: 'Nombre Completo', type: 'string' }),
              defineField({ name: 'type', title: 'Tipo', type: 'string' }),
              defineField({ name: 'logo', title: 'Logo', type: 'image' }),
              defineField({ name: 'description', title: 'Descripción', type: 'string' }),
              defineField({ name: 'link', title: 'Vínculo / Rol', type: 'string' })
            ]
          }]
        }),
        defineField({
          name: 'memberships',
          title: 'Membresías',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'organization', title: 'Organización', type: 'string' }),
              defineField({ name: 'type', title: 'Tipo de Membresía', type: 'string' }),
              defineField({ name: 'since', title: 'Desde (Año)', type: 'number' })
            ]
          }]
        })
      ]
    }),

    defineField({
      name: 'scientificPublications',
      title: 'Publicaciones Científicas',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'summary',
          title: 'Resumen',
          type: 'object',
          fields: [
            defineField({ name: 'total', title: 'Total Publicaciones', type: 'number' }),
            defineField({ name: 'indexedJournals', title: 'Revistas Indexadas', type: 'number' }),
            defineField({ name: 'impactFactor', title: 'Factor de Impacto (Texto)', type: 'string' })
          ]
        }),
        defineField({
          name: 'articles',
          title: 'Artículos',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'authors', title: 'Autores', type: 'string' }),
              defineField({ name: 'title', title: 'Título', type: 'string' }),
              defineField({ name: 'journal', title: 'Revista', type: 'string' }),
              defineField({ name: 'volume', title: 'Volumen', type: 'string' }),
              defineField({ name: 'pages', title: 'Páginas', type: 'string' }),
              defineField({ name: 'year', title: 'Año', type: 'number' }),
              defineField({ name: 'doi', title: 'DOI', type: 'string' }),
              defineField({ name: 'category', title: 'Categoría', type: 'string' })
            ]
          }]
        })
      ]
    }),

    defineField({
      name: 'awardsAndRecognitions',
      title: 'Premios y Reconocimientos',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({ name: 'total', title: 'Total Premios', type: 'number' }),
        defineField({
          name: 'awards',
          title: 'Premios',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'award', title: 'Nombre del Premio', type: 'string' }),
              defineField({ name: 'event', title: 'Evento', type: 'string' }),
              defineField({ name: 'place', title: 'Lugar', type: 'string' }),
              defineField({ name: 'year', title: 'Año', type: 'number' }),
              defineField({ name: 'institution', title: 'Institución', type: 'string' }),
              defineField({ name: 'description', title: 'Descripción', type: 'string' }),
              defineField({ name: 'type', title: 'Tipo', type: 'string' }),
              defineField({ name: 'highlighted', title: 'Destacado', type: 'boolean' })
            ]
          }]
        }),
        defineField({
          name: 'grants',
          title: 'Becas (Grants)',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'grant', title: 'Nombre de la Beca', type: 'string' }),
              defineField({ name: 'project', title: 'Proyecto', type: 'string' }),
              defineField({ name: 'period', title: 'Periodo', type: 'string' }),
              defineField({ name: 'director', title: 'Director', type: 'string' }),
              defineField({ name: 'codirector', title: 'Co-Director', type: 'string' }),
              defineField({ name: 'description', title: 'Descripción', type: 'string' }),
              defineField({ name: 'highlighted', title: 'Destacado', type: 'boolean' })
            ]
          }]
        })
      ]
    }),

    // 5. Conversión y Navegación
    defineField({
      name: 'services',
      title: 'Servicios (Trilogía de Valor)',
      type: 'object',
      fields: [
        defineField({
          name: 'generalDescription',
          title: 'Descripción General',
          type: 'text',
        }),
        defineField({
          name: 'areas',
          title: 'Áreas de Servicio',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'id',
                  title: 'ID',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                }),
                defineField({
                  name: 'subtitle',
                  title: 'Subtítulo',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Descripción',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icono',
                  type: 'string',
                }),
                defineField({
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                }),
                defineField({
                  name: 'specificServices',
                  title: 'Servicios Específicos',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'benefits',
                  title: 'Beneficios',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Sección CTA (Conversión)',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'primary',
          title: 'CTA Principal',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string' }),
            defineField({
              name: 'mainButton',
              title: 'Botón Principal',
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Texto', type: 'string' }),
                defineField({ name: 'type', title: 'Tipo', type: 'string' }),
                defineField({ name: 'link', title: 'Link / Acción', type: 'url' }),
                defineField({ name: 'message', title: 'Mensaje (WhatsApp)', type: 'string' })
              ]
            }),
            defineField({
              name: 'secondaryButton',
              title: 'Botón Secundario',
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Texto', type: 'string' }),
                defineField({ name: 'type', title: 'Tipo', type: 'string' }),
                defineField({ name: 'file', title: 'Archivo (PDF)', type: 'file' })
              ]
            })
          ]
        }),
        defineField({
          name: 'secondary',
          title: 'CTA Secundario',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({
              name: 'button',
              title: 'Botón',
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Texto', type: 'string' }),
                defineField({ name: 'link', title: 'Link (Mail)', type: 'string' })
              ]
            })
          ]
        })
      ]
    }),

    defineField({
      name: 'navigation',
      title: 'Navegación',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'menu',
          title: 'Menú Principal',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'id', title: 'ID', type: 'string' }),
              defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
              defineField({ name: 'href', title: 'Enlace', type: 'string' }),
              defineField({ name: 'order', title: 'Orden', type: 'number' })
            ]
          }]
        }),
        defineField({
          name: 'footer',
          title: 'Footer',
          type: 'object',
          fields: [
            defineField({
              name: 'columns',
              title: 'Columnas',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'title', title: 'Título de Columna', type: 'string' }),
                  defineField({
                    name: 'links',
                    title: 'Enlaces',
                    type: 'array',
                    of: [{
                      type: 'object',
                      fields: [
                        defineField({ name: 'text', title: 'Texto', type: 'string' }),
                        defineField({ name: 'href', title: 'Enlace', type: 'string' })
                      ]
                    }]
                  })
                ]
              }]
            }),
            defineField({ name: 'copyright', title: 'Copyright', type: 'string' }),
            defineField({ name: 'legalNotice', title: 'Aviso Legal', type: 'string' })
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'personalInfo.fullName',
      subtitle: 'personalInfo.mainTitle'
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Perfil Profesional',
        subtitle: subtitle || 'Dr. Quero'
      }
    }
  }
});
