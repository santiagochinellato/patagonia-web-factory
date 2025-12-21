import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '87ka7bt2';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error('Error: SANITY_TOKEN is missing.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-12-20',
});

async function verify() {
  console.log(`Verifying migration for Project ID: ${projectId}, Dataset: ${dataset}`);
  try {
    const doc = await client.getDocument('professional_profile_singleton');
    if (doc) {
      console.log('✅ Document found!');
      console.log('Title:', doc.title);
      console.log('Type:', doc._type);
      console.log('Personal Info:', doc.personalInfo ? 'Present' : 'Missing');
      console.log('Hero Section:', doc.heroSection ? 'Present' : 'Missing');
      console.log('Experience:', doc.experience ? 'Present' : 'Missing');
      if (doc.experience) {
        console.log('  - Current Positions:', doc.experience.currentPositions?.length || 0);
        console.log('  - Past Positions:', doc.experience.pastPositions?.length || 0);
      }
      console.log('Authority:', doc.authority ? 'Present' : 'Missing');
      if (doc.authority) {
         console.log('  - Institutions:', doc.authority.institutions?.length || 0);
      }
      console.log('CTA Section:', doc.ctaSection ? 'Present' : 'Missing');
    } else {
      console.error('❌ Document professional_profile_singleton NOT FOUND.');
    }
  } catch (error) {
    console.error('Verification failed:', error);
  }
}

verify();
