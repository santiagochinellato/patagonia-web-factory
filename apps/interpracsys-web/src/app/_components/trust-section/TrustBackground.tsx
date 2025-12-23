'use client';

import Image from 'next/image';
import React from 'react';

export const TrustBackground = ({ logos }: { logos: string[] }) => {
  // Fill array for carousel loop
  const allLogos = Array(10).fill(logos).flat();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* White wash only for desktop grid */}
      <div className="hidden md:block absolute inset-0 bg-white/30 z-10" />

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 md:grid-cols-8 gap-8 p-4 pt-10 grayscale pointer-events-none">
        {allLogos.slice(0, 80).map((logo, index) => (
          <div
            key={index}
            className="relative h-20 w-full flex items-start justify-center mix-blend-multiply opacity-70"
          >
            <Image src={logo} alt="" fill className="object-contain" />
          </div>
        ))}
      </div>

      {/* Desktop Gradient: Solid white top for text readability */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-white via-white via-30% to-transparent z-10" />
    </div>
  );
};
