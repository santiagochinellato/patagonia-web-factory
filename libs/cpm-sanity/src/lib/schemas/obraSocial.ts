import { defineField, defineType } from 'sanity';

export const obraSocial = defineType({
  name: 'obraSocial',
  title: 'Obra Social',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color de Etiqueta',
      type: 'string',
      options: {
        list: [
          { title: 'Azul (Principal)', value: 'blue' },
          { title: 'Rosa (Marca)', value: 'pink' },
          { title: 'Verde', value: 'green' },
          { title: 'Naranja', value: 'orange' },
          { title: 'Rojo', value: 'red' },
          { title: 'Gris (Secundario)', value: 'gray' },
        ],
      },
      initialValue: 'blue',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'prioridad',
        title: 'Prioridad',
        type: 'number',
        description: 'Mayor número aparece primero. Usar para destacar las más importantes.',
        initialValue: 0
    })
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'color'
    }
  }
});
