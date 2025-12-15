import { defineField, defineType } from 'sanity';

export const novedad = defineType({
  name: 'novedad',
  title: 'Novedad / Artículo',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date', // Or string, but date is better for sorting
      options: {
        dateFormat: 'DD MMM YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
            { title: 'Novedades', value: 'novedades' },
            { title: 'Vacunación', value: 'vacunacion' },
            { title: 'Aviso', value: 'aviso' },
            { title: 'Institucional', value: 'institucional' }
        ]
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'contacto',
      title: 'Email de Contacto (Opcional)',
      type: 'string',
    }),
    defineField({
      name: 'enlaces',
      title: 'Enlaces Externos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'texto', title: 'Texto del Enlace', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
  ],
});
