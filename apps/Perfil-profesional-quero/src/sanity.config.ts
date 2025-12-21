'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {professional_profile} from '@patagonia-web-factory/cpm-sanity'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '87ka7bt2'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Perfil Dr. Martín Quero',
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [professional_profile],
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Perfil Profesional')
              .child(
                S.document()
                  .schemaType('professional_profile')
                  .documentId('professional_profile_singleton') // Singleton ID
                  .title('Editar Perfil')
              ),
              // Filter out the original type to avoid duplicates if treated as singleton
              ...S.documentTypeListItems().filter(
                (listItem) => listItem.getId() !== 'professional_profile'
              ),
          ]),
    }),
  ],
})

export default config
