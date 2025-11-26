'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export interface NavLink {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface StickyHeaderProps {
  logo: React.ReactNode;
  links: NavLink[];
  ctaButton: { text: string; onClick: () => void };
  secondaryCtaButton?: { text: string; onClick: () => void };
}

export function StickyHeader({ logo, links, ctaButton, secondaryCtaButton }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">{logo}</div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={link.onClick}
                className="text-katz-gray-dark hover:text-katz-cta-primary font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Always visible */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <button
              onClick={ctaButton.onClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors shadow-md hover:shadow-lg whitespace-nowrap text-xs sm:text-sm md:text-base"
            >
              {ctaButton.text}
            </button>
            {secondaryCtaButton && (
              <button
                onClick={secondaryCtaButton.onClick}
                className="bg-katz-primary hover:bg-katz-primary/90 text-white font-semibold px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors border-2 border-katz-primary hover:border-katz-cta-primary shadow-md hover:shadow-lg whitespace-nowrap text-xs sm:text-sm md:text-base"
              >
                {secondaryCtaButton.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default StickyHeader;
