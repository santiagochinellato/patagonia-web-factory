'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return <Instagram size={20} />;
    case 'linkedin':
      return <Linkedin size={20} />;
    case 'facebook':
      return <Facebook size={20} />;
    case 'twitter':
      return <Twitter size={20} />;
    default:
      return <Linkedin size={20} />; // Fallback
  }
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  // Extract platform name from href for aria-label (simple heuristic)
  const platform = href.includes('instagram')
    ? 'Instagram'
    : href.includes('linkedin')
    ? 'LinkedIn'
    : href.includes('facebook')
    ? 'Facebook'
    : href.includes('twitter')
    ? 'Twitter'
    : 'Social Media';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar nuestro perfil en ${platform}`}
      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-navy hover:border-brand-navy/30 hover:bg-brand-navy/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
};

export const FooterBrand = ({
  logoSrc,
  siteName,
  description,
  social,
}: {
  logoSrc: string;
  siteName: string;
  description: string;
  social: { platform: string; url: string }[];
}) => {
  return (
    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
      <Link href="/" className="flex items-center gap-2 mb-4 group">
        <Image
          src={logoSrc}
          alt={siteName}
          width={200}
          height={40}
          style={{ height: 'auto' }}
        />
      </Link>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
        {description}
      </p>
      <div className="flex items-center gap-4">
        {social.map((s) => (
          <SocialLink
            key={s.platform}
            href={s.url}
            icon={getSocialIcon(s.platform)}
          />
        ))}
      </div>
    </div>
  );
};
