'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {defineConfig} from 'sanity'
// Trigger HMR update
import {structureTool} from 'sanity/structure'
import {ip_landing_page, ip_settings} from '@patagonia-web-factory/cpm-sanity'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z3higspz'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'InterPracsys',
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [ip_landing_page, ip_settings],
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('InterPracsys')
          .items([
            S.listItem()
              .title('Página de Inicio')
              .child(
                S.document()
                  .schemaType('ip_landing_page')
                  .documentId('ip_landing_page')
              ),
            S.listItem()
              .title('Configuración Global')
              .child(
                S.document()
                  .schemaType('ip_settings')
                  .documentId('ip_settings')
              ),
          ]),
    }),
    // Vision tool removed to prevent isomorphic-dompurify/jsdom ENOENT errors
    // You can query content using the Vision tool at manage.sanity.io if needed
  ],
})

export default config
