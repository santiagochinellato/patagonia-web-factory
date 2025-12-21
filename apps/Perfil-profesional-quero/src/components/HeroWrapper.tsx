'use client';

import { SimplifiedHero } from '@patagonia-web-factory/ui-kit';

interface HeroWrapperProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  profileImage?: string;
}

export function HeroWrapper({
  title,
  subtitle,
  ctaText,
  ctaLink,
  profileImage,
}: HeroWrapperProps) {
  const handleCtaClick = () => {
    if (ctaLink) {
      window.open(ctaLink, '_blank');
    }
  };

  return (
    <SimplifiedHero
      title={title}
      subtitle={subtitle}
      primaryCta={{
        text: ctaText,
        onClick: handleCtaClick,
      }}
      image={profileImage}
    />
  );
}
