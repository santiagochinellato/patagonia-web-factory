const { createClient } = require('next-sanity');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z3higspz';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-12-20';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('Error: SANITY_API_TOKEN not found in environment variables.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // We want fresh data
  token,
});

async function migrateContactInfo() {
  try {
    console.log('Fetching ip_settings document...');
    const query = '*[_type == "ip_settings"][0]';
    const settings = await client.fetch(query);

    if (!settings) {
      console.error('Error: ip_settings document not found.');
      return;
    }

    console.log('Updating contact info...');
    const result = await client
      .patch(settings._id)
      .set({
        contactInfo: {
          ...settings.contactInfo, // Keep address if it exists
          email: 'info@interpracsys.com',
          phone: '+54 9 2942612020',
          supportEmail: 'soporte@interpracsys.com',
          supportPhone: '+54 9 3815570606',
        }
      })
      .commit();

    console.log('Migration successful!', result);
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateContactInfo();
