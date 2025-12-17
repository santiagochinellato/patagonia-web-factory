import { defineField, defineType } from 'sanity';

export const staffMember = defineType({
  name: 'staffMember',
  title: 'Profesional / Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nombre',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
      description: 'Ej: Director Médico',
    }),
    defineField({
      name: 'especialidad',
      title: 'Especialidad',
      type: 'string', // Could be a reference to a Specialty document if we promoted specialties to documents
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'matricula',
      title: 'Matrícula',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biografía',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'formacion',
      title: 'Formación Académica',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'institucion', title: 'Institución', type: 'string' }),
            defineField({ name: 'anio', title: 'Año', type: 'number' }),
            defineField({ name: 'periodo', title: 'Periodo', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'experiencia',
      title: 'Experiencia Laboral',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'cargo', title: 'Cargo', type: 'string' }),
            defineField({ name: 'institucion', title: 'Institución', type: 'string' }),
            defineField({ name: 'periodo', title: 'Periodo', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'logros',
      title: 'Logros y Reconocimientos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'obrasSociales',
      title: 'Obras Sociales que atiende',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'obraSocial' }] }],
      description: 'Seleccionar las obras sociales que atiende este profesional.',
    }),
  ],
});
