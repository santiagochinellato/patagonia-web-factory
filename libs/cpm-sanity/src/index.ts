import { settings } from './lib/schemas/settings.js';
import { staffMember } from './lib/schemas/staffMember.js';
import { schedule } from './lib/schemas/schedule.js';
import { novedad } from './lib/schemas/novedad.js';
import { obraSocial } from './lib/schemas/obraSocial.js';
import { homeSection } from './lib/schemas/homeSection.js';

export const schemaTypes = [homeSection, settings, staffMember, schedule, novedad, obraSocial];

export { homeSection, settings, staffMember, schedule, novedad, obraSocial };
