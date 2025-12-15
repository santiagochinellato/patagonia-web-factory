import { defineField, defineType } from 'sanity';

export const schedule = defineType({
  name: 'schedule',
  title: 'Horario de Atención',
  type: 'document', // Or object if used inside another document, but prompt implies a list
  fields: [
    defineField({
        name: 'profesional',
        title: 'Profesional',
        type: 'reference',
        to: [{type: 'staffMember'}],
        description: 'Selecciona el profesional (si aplica)'
    }),
    defineField({
        name: 'nombrePersonalizado',
        title: 'Nombre Personalizado',
        type: 'string',
        description: 'Usar si no es un profesional específico (Ej: Demanda Espontánea)'
    }),
    defineField({
        name: 'especialidad',
        title: 'Especialidad',
        type: 'string'
    }),
    defineField({
        name: 'lunes',
        title: 'Lunes',
        type: 'string', // '09:00-14:00'
    }),
    defineField({
        name: 'martes',
        title: 'Martes',
        type: 'string',
    }),
    defineField({
        name: 'miercoles',
        title: 'Miércoles',
        type: 'string',
    }),
    defineField({
        name: 'jueves',
        title: 'Jueves',
        type: 'string',
    }),
    defineField({
        name: 'viernes',
        title: 'Viernes',
        type: 'string',
    }),
    defineField({
        name: 'sabado',
        title: 'Sábado',
        type: 'string',
    }),
    defineField({
        name: 'domingo',
        title: 'Domingo',
        type: 'string',
    }),
    defineField({
      name: 'orden',
      title: 'Orden de Visualización',
      type: 'number',
      initialValue: 0
    })
  ],
  preview: {
    select: {
      profesionalName: 'profesional.nombre',
      customName: 'nombrePersonalizado',
      especialidad: 'especialidad'
    },
    prepare({ profesionalName, customName, especialidad }) {
      return {
        title: profesionalName || customName || 'Sin Nombre',
        subtitle: especialidad
      }
    }
  }
});
