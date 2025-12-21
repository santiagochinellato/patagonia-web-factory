
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '87ka7bt2',
  dataset: 'production',
  useCdn: false, // Ensure we get fresh data
  apiVersion: '2024-12-20',
});

async function verify() {
  const query = '*[_type == "professional_profile"][0]';
  const data = await client.fetch(query);
  console.log('Sanity Data Found:', !!data);
  if (data) {
    console.log('Title:', data.title);
    console.log('Hero Tagline:', data.heroSection?.tagline);
  } else {
    console.log('No document found for type "professional_profile"');
  }
}

verify();
