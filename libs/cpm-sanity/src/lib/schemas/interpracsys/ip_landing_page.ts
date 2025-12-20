import { defineField, defineType } from 'sanity';

export const ip_landing_page = defineType({
  name: 'ip_landing_page',
  title: 'Página de Inicio (InterPracsys)',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Sección Hero (Portada)',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge (Superior)', type: 'string' }),
        defineField({ name: 'titlePrefix', title: 'Título (Prefijo)', type: 'string' }),
        defineField({ name: 'titleHighlight', title: 'Título (Destacado en gradiente)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtítulo', type: 'text' }),
        defineField({ name: 'primaryButton', title: 'Botón Primario (Texto)', type: 'string' }),
        defineField({ name: 'secondaryButton', title: 'Botón Secundario (Texto)', type: 'string' }),
        defineField({
            name: 'mapPins',
            title: 'Pines del Mapa',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
                    defineField({ name: 'x', title: 'Posición X (%)', type: 'number' }),
                    defineField({ name: 'y', title: 'Posición Y (%)', type: 'number' }),
                ]
            }]
        })
      ]
    }),
    defineField({
        name: 'features',
        title: 'Sección Características',
        type: 'object',
        fields: [
            defineField({ name: 'badge', title: 'Badge', type: 'string' }),
            defineField({ name: 'title', title: 'Título Principal', type: 'string' }),
            defineField({
                name: 'cards',
                title: 'Tarjetas de Características',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                         defineField({ name: 'title', title: 'Título', type: 'string' }),
                         defineField({ name: 'subtitle', title: 'Subtítulo (Superior)', type: 'string' }),
                         defineField({ name: 'description', title: 'Descripción', type: 'text' }),
                         defineField({ name: 'microQuote', title: 'Micro Cita (Inferior)', type: 'string' }),
                         defineField({ name: 'icon', title: 'Icono', type: 'image' }),
                    ]
                }]
            })
        ]
    }),
    defineField({
        name: 'trust',
        title: 'Sección Confianza',
        type: 'object',
        fields: [
             defineField({ name: 'badge', title: 'Badge', type: 'string' }),
             defineField({ name: 'titlePart1', title: 'Título Parte 1', type: 'string' }),
             defineField({ name: 'titleHighlight', title: 'Título Destacado', type: 'string' }),
             defineField({ name: 'description', title: 'Descripción', type: 'text' }),
             defineField({
                 name: 'stats',
                 title: 'Estadísticas',
                 type: 'array',
                 of: [{
                     type: 'object',
                     fields: [
                         defineField({ name: 'value', title: 'Valor', type: 'string' }),
                         defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
                     ]
                 }]
             }),
             defineField({
                 name: 'clientLogos',
                 title: 'Logos de Clientes',
                 type: 'array',
                 of: [{ type: 'image' }]
             }),
             defineField({
                 name: 'automationBadges',
                 title: 'Badges de Automatización',
                 type: 'array',
                 of: [{ type: 'string' }]
             })
        ]
    }),
    defineField({
        name: 'connectivity',
        title: 'Sección Conectividad',
        type: 'object',
        fields: [
            defineField({ name: 'badge', title: 'Badge', type: 'string' }),
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string' }),
            defineField({ name: 'subtitle2', title: 'Subtítulo Secundario', type: 'string' }),
            defineField({ name: 'description', title: 'Descripción', type: 'text' }),
            defineField({
                 name: 'features',
                 title: 'Lista de Características',
                 type: 'array',
                 of: [{
                     type: 'object',
                     fields: [
                         defineField({ name: 'title', title: 'Título', type: 'string' }),
                         defineField({ name: 'text', title: 'Texto', type: 'text' }),
                     ]
                 }]
            }),
             defineField({
                 name: 'machineLogos',
                 title: 'Logos de Máquinas',
                 type: 'array',
                 of: [{ 
                     type: 'object', 
                     fields: [
                         defineField({name: 'name', title: 'Nombre', type: 'string'}),
                         defineField({name: 'image', title: 'Logo', type: 'image'})
                     ]
                 }]
             }),
             defineField({ name: 'calloutText', title: 'Texto Destacado (Callout)', type: 'string' }),
             defineField({ name: 'protocolsNote', title: 'Nota de Protocolos', type: 'string' })
        ]
    }),
    defineField({
        name: 'specializedSolutions',
        title: 'Soluciones Especializadas (Trust Section)',
        type: 'object',
        fields: [
            defineField({ name: 'title', title: 'Título Principal', type: 'string' }),
            defineField({
                name: 'cards',
                title: 'Tarjetas de Soluciones',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Título', type: 'string' }),
                        defineField({ name: 'description', title: 'Descripción', type: 'text' }),
                        defineField({ name: 'icon', title: 'Icono (Nombre de Lucide)', type: 'string', description: 'Ej: PawPrint, Leaf, FlaskConical' }),
                    ]
                }]
            })
        ]
    }),
    defineField({
        name: 'contactSection',
        title: 'Sección de Contacto',
        type: 'object',
        fields: [
             defineField({ name: 'badge', title: 'Badge', type: 'string' }),
             defineField({ name: 'titlePart1', title: 'Título Parte 1', type: 'string' }),
             defineField({ name: 'titleHighlight', title: 'Título Destacado', type: 'string' }),
             defineField({ name: 'description', title: 'Descripción', type: 'text' }),
             defineField({ name: 'phoneLabel', title: 'Etiqueta Teléfono', type: 'string' }),
             defineField({ name: 'emailLabel', title: 'Etiqueta Email', type: 'string' }),
             defineField({ name: 'followUsLabel', title: 'Etiqueta Síguenos', type: 'string' }),
             defineField({ name: 'formNameLabel', title: 'Form: Label Nombre', type: 'string' }),
             defineField({ name: 'formNamePlaceholder', title: 'Form: Placeholder Nombre', type: 'string' }),
             defineField({ name: 'formOrgLabel', title: 'Form: Label Laboratorio', type: 'string' }),
             defineField({ name: 'formOrgPlaceholder', title: 'Form: Placeholder Laboratorio', type: 'string' }),
             defineField({ name: 'formEmailLabel', title: 'Form: Label Email', type: 'string' }),
             defineField({ name: 'formEmailPlaceholder', title: 'Form: Placeholder Email', type: 'string' }),
             defineField({ name: 'formMessageLabel', title: 'Form: Label Mensaje', type: 'string' }),
             defineField({ name: 'formMessagePlaceholder', title: 'Form: Placeholder Mensaje', type: 'string' }),
             defineField({ name: 'formButtonText', title: 'Texto Botón Enviar', type: 'string' }),
        ]
    })
  ]
});
