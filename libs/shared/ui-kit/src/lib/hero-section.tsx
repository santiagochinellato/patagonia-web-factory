'use client';

import React from 'react';
import { Button } from './button';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText = 'Comenzar',
  onCtaClick,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-brand-dark text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {onCtaClick && (
          <Button
            onClick={onCtaClick}
            variant="primary"
            className="text-lg px-8 py-4"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
