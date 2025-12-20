import { groq } from 'next-sanity';

export const SETTINGS_QUERY = groq`
  *[_type == "ip_settings"][0] {
    general,
    navigation,
    footer,
    seo
  }
`;

export const LANDING_PAGE_QUERY = groq`
  *[_type == "ip_landing_page"][0] {
    hero,
    features,
    trust,
    connectivity,
    specializedSolutions,
    contactSection
  }
`;
