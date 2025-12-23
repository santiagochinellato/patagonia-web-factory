import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-12-20';
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
    console.error('Error: NEXT_PUBLIC_SANITY_PROJECT_ID not found');
    process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

async function verifyData() {
  try {
    console.log('Fetching ip_settings...');
    const query = '*[_type == "ip_settings"][0] { footer }';
    const result = await client.fetch(query);
    
    console.log('Result:', JSON.stringify(result, null, 2));
    
    if (result?.footer?.contactInfo) {
        console.log('Contact Info:', result.footer.contactInfo);
        console.log('Support Email:', result.footer.contactInfo.supportEmail);
        console.log('Support Phone:', result.footer.contactInfo.supportPhone);
    } else {
        console.log('Contact Info is MISSING in footer');
    }

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

verifyData();
