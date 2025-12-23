import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';
import path from 'path';

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

    // Check if fields are already set to avoid overwriting user changes
    const patchData: any = {};
    if (!settings.footer?.contactInfo?.email) patchData['footer.contactInfo.email'] = 'info@interpracsys.com';
    
    // Force update phone numbers
    patchData['footer.contactInfo.phone'] = '+54 9 3815570606';
    patchData['footer.contactInfo.supportPhone'] = '+54 9 2942612020';

    if (!settings.footer?.contactInfo?.supportEmail) patchData['footer.contactInfo.supportEmail'] = 'soporte@interpracsys.com';
    if (!settings.footer?.contactInfo?.address) patchData['footer.contactInfo.address'] = 'Bariloche, Argentina';

    if (Object.keys(patchData).length === 0) {
        console.log('All fields already populated, skipping update.');
        return;
    }

    console.log('Updating missing contact info...', patchData);
    const result = await client
      .patch(settings._id)
      .set(patchData)
      .commit();

    console.log('Migration successful!', result);
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateContactInfo();
