import { settings } from './lib/schemas/settings.js';
import { staffMember } from './lib/schemas/staffMember.js';
import { schedule } from './lib/schemas/schedule.js';
import { novedad } from './lib/schemas/novedad.js';
import { obraSocial } from './lib/schemas/obraSocial.js';
import { homeSection } from './lib/schemas/homeSection.js';
import { ip_settings } from './lib/schemas/interpracsys/ip_settings.js';
import { ip_landing_page } from './lib/schemas/interpracsys/ip_landing_page.js';

export const schemaTypes = [
  homeSection, 
  settings, 
  staffMember, 
  schedule, 
  novedad, 
  obraSocial,
  ip_settings,
  ip_landing_page
];

export { 
  homeSection, 
  settings, 
  staffMember, 
  schedule, 
  novedad, 
  obraSocial,
  ip_settings,
  ip_landing_page
};
