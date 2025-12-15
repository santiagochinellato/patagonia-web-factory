import { defineField, defineType } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Configuración Global',
  type: 'document',
  fields: [
    defineField({
      name: 'sitio',
      title: 'Información del Sitio',
      type: 'object',
      fields: [
        defineField({ name: 'nombre', title: 'Nombre', type: 'string' }),
        defineField({ name: 'nombreCorto', title: 'Nombre Corto', type: 'string' }),
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'descripcion', title: 'Descripción', type: 'text' }),
      ],
    }),
    defineField({
      name: 'contacto',
      title: 'Información de Contacto',
      type: 'object',
      fields: [
        defineField({
          name: 'direccion',
          title: 'Dirección',
          type: 'object',
          fields: [
            defineField({ name: 'calle', title: 'Calle', type: 'string' }),
            defineField({ name: 'barrio', title: 'Barrio', type: 'string' }),
            defineField({ name: 'codigoPostal', title: 'Código Postal', type: 'string' }),
            defineField({ name: 'ciudad', title: 'Ciudad', type: 'string' }),
            defineField({ name: 'provincia', title: 'Provincia', type: 'string' }),
            defineField({ name: 'pais', title: 'País', type: 'string' }),
          ],
        }),
        defineField({
          name: 'telefonos',
          title: 'Teléfonos',
          type: 'object',
          fields: [
            defineField({ name: 'fijo', title: 'Fijo', type: 'string' }),
            defineField({ name: 'movil', title: 'Móviles', type: 'array', of: [{ type: 'string' }] }),
          ],
        }),
        defineField({
          name: 'emails',
          title: 'Emails',
          type: 'object',
          fields: [
            defineField({ name: 'recepcion', title: 'Recepción', type: 'string' }),
            defineField({ name: 'app', title: 'App Soporte', type: 'string' }),
          ],
        }),
        defineField({
          name: 'redesSociales',
          title: 'Redes Sociales',
          type: 'object',
          fields: [
            defineField({ name: 'facebook', title: 'Facebook ID/Link', type: 'string' }),
            defineField({ name: 'instagram', title: 'Instagram User', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
        name: 'disenio',
        title: 'Diseño Global',
        type: 'object',
        fields: [
             defineField({
                name: 'paleta',
                title: 'Paleta de Colores',
                type: 'object',
                fields: [
                    defineField({ name: 'azulCorporativo', title: 'Azul Corporativo', type: 'string' }),
                    defineField({ name: 'verdeAccion', title: 'Verde Acción', type: 'string' }),
                    defineField({ name: 'azulClaro', title: 'Azul Claro', type: 'string' }),
                ]
             })
        ]
    })
  ],
});
