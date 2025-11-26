'use client';

import React, { useState, useEffect } from 'react';

export interface RotatingHeroProps {
  headlines: string[];
  subtitle: string;
  videoUrl?: string;
  primaryCta: { text: string; onClick: () => void };
  secondaryCta?: { text: string; onClick: () => void };
}

export function RotatingHero({
  headlines,
  subtitle,
  videoUrl,
  primaryCta,
  secondaryCta,
}: RotatingHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % headlines.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-katz-blue-deep via-katz-blue-medium to-katz-blue-deep overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-katz-blue-deep/90 via-katz-blue-deep/70 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Rotating Headlines */}
            <div className="h-32 md:h-40 flex items-center overflow-hidden">
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-500 ${
                  isAnimating
                    ? 'opacity-0 translate-y-4'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                {headlines[currentIndex]}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-katz-teal-light max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={primaryCta.onClick}
                className="bg-katz-teal hover:bg-katz-teal-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {primaryCta.text}
              </button>

              {secondaryCta && (
                <button
                  onClick={secondaryCta.onClick}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  {secondaryCta.text}
                </button>
              )}
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 pt-6">
              {headlines.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === currentIndex
                      ? 'w-12 bg-katz-teal'
                      : 'w-6 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Video Container */}
          {videoUrl && (
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Video Container with Rounded Corners */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] bg-katz-blue-medium">
                  <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Video Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-katz-blue-deep/50 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-katz-teal/20 rounded-full blur-3xl" />
                <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-katz-teal/30 rounded-full blur-3xl" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
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

export default RotatingHero;
