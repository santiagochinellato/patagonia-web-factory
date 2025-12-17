import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'nrfrw1wq';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-03-20';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for fast cached reads - fresh data ensured by ISR revalidation
  perspective: 'published', // Only fetch published content in production
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
