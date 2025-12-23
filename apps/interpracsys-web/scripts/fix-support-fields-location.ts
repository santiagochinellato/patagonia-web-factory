import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-12-20';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('Error: SANITY_API_TOKEN not found.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

async function fixSupportFields() {
  try {
    console.log('Fetching ip_settings document...');
    const settings = await client.fetch('*[_type == "ip_settings"][0]');

    if (!settings) {
      console.error('Error: ip_settings document not found.');
      return;
    }

    console.log('Current settings keys:', Object.keys(settings));

    const patch = client.patch(settings._id);
    let hasUpdates = false;

    // Check for misplaced fields at root
    if (settings.supportEmail || settings.supportPhone) {
      console.log('Found misplaced fields at root!');
      
      const newContactInfo = {
        ...(settings.footer?.contactInfo || {}),
      };

      if (settings.supportEmail) {
        console.log(`Moving supportEmail: ${settings.supportEmail}`);
        newContactInfo.supportEmail = settings.supportEmail;
        patch.unset(['supportEmail']);
        hasUpdates = true;
      }

      if (settings.supportPhone) {
        console.log(`Moving supportPhone: ${settings.supportPhone}`);
        newContactInfo.supportPhone = settings.supportPhone;
        patch.unset(['supportPhone']);
        hasUpdates = true;
      }

      // Ensure footer and contactInfo structure exists
      if (!settings.footer) {
        patch.set({ footer: { contactInfo: newContactInfo } });
      } else {
        patch.set({ 'footer.contactInfo': newContactInfo });
      }
    } else {
      console.log('No misplaced supportEmail or supportPhone found at root.');
    }

    // Also verify if they are missing from footer.contactInfo but we have values we want to enforce?
    // The user request implies they are just misplaced.
    // If they are NOT at root, maybe they are somewhere else?
    // Let's assume root based on "Unknown fields" in the main document view.

    if (hasUpdates) {
      console.log('Committing changes...');
      const result = await patch.commit();
      console.log('Fix successful!', result);
    } else {
      console.log('No changes needed.');
    }

  } catch (error) {
    console.error('Fix failed:', error);
  }
}

fixSupportFields();
