export interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

export interface IPSettings {
  general: {
    siteName: string;
    logo: SanityImage;
  };
  navigation: {
    links: { label: string; href: string }[];
    cta: { text: string; link: string };
  };
  footer: {
    description: string;
    exploreTitle?: string;
    legalTitle?: string;
    contactTitle?: string;
    social: { platform: string; url: string }[];
    contactInfo: { address: string; email: string; phone: string };
    legalLinks: { label: string; url: string }[];
    copyrightText?: string;
    developedByText?: string;
    developerName?: string;
    developerUrl?: string;
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    openGraphImage?: SanityImage;
    favicon?: SanityImage;
  };
}

export interface IPLandingPage {
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    mapPins?: { label: string; x: number; y: number }[];
  };
  features: {
    badge: string;
    title: string;
    cards: {
      title: string;
      subtitle: string;
      description: string;
      microQuote: string;
      icon: SanityImage;
    }[];
  };
  trust: {
      badge: string;
      titlePart1: string;
      titleHighlight: string;
      description: string;
      stats: { value: string; label: string }[];
      clientLogos: SanityImage[];
      automationBadges?: string[];
  };
  connectivity: {
      badge: string;
      title: string;
      subtitle: string;
      subtitle2?: string;
      description: string;
      features: { title: string; text: string }[];
      machineLogos: { name: string; image: SanityImage }[];
      calloutText?: string;
      protocolsNote?: string;
  };
  specializedSolutions: {
      title: string;
      cards: {
          title: string;
          description: string;
          icon: string;
      }[];
  };
  contactSection: {
      badge: string;
      titlePart1: string;
      titleHighlight: string;
      description: string;
      phoneLabel?: string;
      emailLabel?: string;
      followUsLabel?: string;
      formNameLabel?: string;
      formNamePlaceholder?: string;
      formOrgLabel?: string;
      formOrgPlaceholder?: string;
      formEmailLabel?: string;
      formEmailPlaceholder?: string;
      formMessageLabel?: string;
      formMessagePlaceholder?: string;
      formButtonText?: string;
  };
}
