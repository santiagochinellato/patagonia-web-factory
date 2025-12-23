'use client';

import React from 'react';
import { IPSettings, IPLandingPage } from '../../../types/sanity';
import { HeroContent } from './HeroContent';
import { HeroMap } from './HeroMap';

export const Hero = ({
  data,
  contactInfo,
}: {
  data?: IPLandingPage['hero'];
  contactInfo?: IPSettings['footer']['contactInfo'];
}) => {
  const contactPhone = '+5493815570606';
  const sanitizePhone = (phone: string) => phone.replace(/\D/g, '');
  const contactLink = `https://wa.me/${sanitizePhone(contactPhone)}`;

  return (
    <section
      id="hero"
      className="w-full min-h-screen pt-32 pb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between bg-white max-w-7xl mx-auto px-6 gap-10"
    >
      <HeroContent data={data} contactLink={contactLink} />
      <HeroMap data={data} />
    </section>
  );
};
