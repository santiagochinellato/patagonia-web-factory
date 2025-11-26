'use client';

import React from 'react';

export interface SimplifiedHeroProps {
  title: string;
  subtitle: string;
  primaryCta: { text: string; onClick: () => void };
  secondaryCta?: { text: string; onClick: () => void };
  image?: string;
}

export function SimplifiedHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
}: SimplifiedHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-katz-primary via-katz-cta-primary to-katz-primary min-h-screen flex items-center pt-24 md:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-katz-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-katz-cta-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>

            <p className="text-xl md:text-2xl text-katz-relief leading-relaxed">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={primaryCta.onClick}
                className="bg-katz-cta-secondary hover:bg-katz-relief text-katz-primary font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 min-h-[56px]"
              >
                {primaryCta.text}
              </button>

              {secondaryCta && (
                <button
                  onClick={secondaryCta.onClick}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border-2 border-white/30 backdrop-blur-sm transition-all min-h-[56px]"
                >
                  {secondaryCta.text}
                </button>
              )}
            </div>
          </div>

          {/* Image (Desktop only) */}
          {image && (
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-katz-primary/50 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default SimplifiedHero;
