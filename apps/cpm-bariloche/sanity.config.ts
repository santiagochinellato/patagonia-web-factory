'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from '@patagonia-web-factory/cpm-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'nrfrw1wq'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    // Vision tool removed to prevent isomorphic-dompurify/jsdom ENOENT errors
    // You can query content using the Vision tool at manage.sanity.io if needed
  ],
})

export default config
