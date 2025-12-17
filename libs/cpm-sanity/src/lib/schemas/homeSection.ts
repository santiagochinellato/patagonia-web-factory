import { defineField, defineType } from 'sanity';

export const homeSection = defineType({
  name: 'homeSection',
  title: 'Home Section',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título Principal',
      type: 'string',
      description: 'Ej: Tu salud en buenas manos, cerca de casa.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bajada',
      title: 'Bajada / Subtítulo',
      type: 'text',
      description: 'Ej: Atención médica integral con más de 20 años de trayectoria.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageHero',
      title: 'Imagen Principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'bajada',
      media: 'imageHero',
    },
  },
});
