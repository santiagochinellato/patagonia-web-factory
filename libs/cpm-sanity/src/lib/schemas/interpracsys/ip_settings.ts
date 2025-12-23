import { defineField, defineType } from 'sanity';

export const ip_settings = defineType({
  name: 'ip_settings',
  title: 'Configuración InterPracsys',
  type: 'document',
  fields: [
    defineField({
      name: 'general',
      title: 'General',
      type: 'object',
      fields: [
        defineField({ name: 'siteName', title: 'Nombre del Sitio', type: 'string' }),
        defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Navegación',
      type: 'object',
      fields: [
        defineField({
          name: 'links',
          title: 'Links del Menú',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
                defineField({ name: 'href', title: 'Enlace (#id o /url)', type: 'string' }),
              ],
            },
          ],
        }),
        defineField({
          name: 'cta',
          title: 'Botón CTA Navbar',
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Texto', type: 'string' }),
            defineField({ name: 'link', title: 'Enlace', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({ name: 'description', title: 'Descripción de Marca', type: 'text', rows: 3 }),
        defineField({ name: 'exploreTitle', title: 'Título: Explorar', type: 'string' }),
        defineField({ name: 'legalTitle', title: 'Título: Legales', type: 'string' }),
        defineField({ name: 'contactTitle', title: 'Título: Contacto', type: 'string' }),
        defineField({
          name: 'social',
          title: 'Redes Sociales',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'platform', title: 'Plataforma', type: 'string', options: { list: ['Instagram', 'LinkedIn', 'Facebook', 'Twitter'] } }),
                defineField({ name: 'url', title: 'URL', type: 'url' }),
              ],
            },
          ],
        }),
        defineField({
            name: 'contactInfo',
            title: 'Información de Contacto',
            type: 'object',
            fields: [
                defineField({ name: 'address', title: 'Dirección', type: 'string' }),
                defineField({ name: 'email', title: 'Email (General)', type: 'string' }),
                defineField({ name: 'phone', title: 'Teléfono (General)', type: 'string' }),
                defineField({ name: 'supportEmail', title: 'Email Soporte', type: 'string' }),
                defineField({ name: 'supportPhone', title: 'Teléfono Soporte', type: 'string' }),
            ]
        }),
        defineField({
             name: 'legalLinks',
             title: 'Links Legales',
             type: 'array',
             of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
                        defineField({ name: 'url', title: 'URL', type: 'string' }),
                    ]
                }
             ]
        }),
        defineField({ name: 'copyrightText', title: 'Texto Copyright', type: 'string' }),
        defineField({ name: 'developedByText', title: 'Texto "Creado por"', type: 'string' }),
        defineField({ name: 'developerName', title: 'Nombre Desarrollador', type: 'string' }),
        defineField({ name: 'developerUrl', title: 'URL Desarrollador', type: 'url' }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadatos',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Título (Browser Tab)', type: 'string', validation: Rule => Rule.max(60).warning('Idealmente menos de 60 caracteres') }),
        defineField({ name: 'metaDescription', title: 'Meta Descripción', type: 'text', rows: 3, validation: Rule => Rule.max(160).warning('Idealmente menos de 160 caracteres') }),
        defineField({ name: 'metaKeywords', title: 'Palabras Clave (Keywords)', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'openGraphImage', title: 'Imagen OpenGraph (Facebook/LinkedIn)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'favicon', title: 'Favicon / Icono (32x32)', type: 'image' }),
      ]
    })
  ],
});
