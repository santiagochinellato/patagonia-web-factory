'use client';

import { useRef, useEffect, useState } from 'react';
// import { Button } from '../../button';

interface Logo {
  src: string;
  alt: string;
  className?: string;
}

interface TextBlock {
  id: number;
  title: string;
  description: string;
  logos?: Logo[];
}

export interface InstitutionalSectionProps {
  blocks: TextBlock[];
  videoSrc: string;
  cta?: {
    text: string;
    onClick: () => void;
  };
}

export function InstitutionalSection({
  blocks,
  videoSrc,
  cta,
}: InstitutionalSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error: unknown) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % blocks.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [blocks.length]);

  const currentBlock = blocks[currentIndex];

  return (
    <section className="relative py-12 lg:py-12 bg-katz-gray-light overflow-hidden min-h-screen lg:h-screen lg:max-h-screen flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-katz-gray-light to-katz-primary/5" />

      <div className="container relative z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div
            className={`space-y-12 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="min-h-[200px] flex flex-col justify-center">
              <div
                className={`transition-all duration-500 transform ${
                  isAnimating
                    ? 'opacity-0 -translate-y-4'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-1 bg-katz-cta-primary rounded-full" />
                  <span className="text-katz-cta-primary font-bold tracking-wider uppercase text-sm">
                    Laboratorios Katz
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-katz-primary leading-tight mb-6">
                  {currentBlock.title}
                </h1>

                <p className="text-xl text-katz-gray-body leading-relaxed max-w-xl mb-8">
                  {currentBlock.description}
                </p>

                {/* Logos de certificaciones */}
                {currentBlock.logos && currentBlock.logos.length > 0 && (
                  <div className="flex flex-wrap items-center gap-6 pt-4">
                    {currentBlock.logos.map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo.src}
                        alt={logo.alt}
                        className={
                          logo.className || 'h-12 w-auto object-contain'
                        }
                      />
                    ))}
                  </div>
                )}
                {/* {cta && (
                  <div className="pt-10">
                    <Button
                      variant="primary"
                      onClick={cta.onClick}
                      className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all px-8 py-4 text-lg rounded-xl"
                    >
                      {cta.text}
                    </Button>
                  </div>
                )} */}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-3">
              {blocks.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentIndex
                      ? 'w-12 bg-katz-cta-primary'
                      : 'w-3 bg-katz-gray-medium hover:bg-katz-cta-primary/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Video */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-katz-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-katz-cta-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-black aspect-[9/16] max-w-md max-h-[60vh] lg:max-h-[70vh] mx-auto lg:mx-0 lg:ml-auto transform hover:scale-[1.02] transition-transform duration-500">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
