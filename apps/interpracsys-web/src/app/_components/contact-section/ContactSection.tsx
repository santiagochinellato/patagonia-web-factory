'use client';

import React from 'react';
import { IPSettings, IPLandingPage } from '../../../types/sanity';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const ContactSection = ({
  contactInfo,
  data,
}: {
  contactInfo?: IPSettings['footer']['contactInfo'];
  data?: IPLandingPage['contactSection'];
}) => {
  return (
    <section
      id="support"
      className="py-24 w-full bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <ContactInfo contactInfo={contactInfo} data={data} />
          <ContactForm data={data} />
        </div>
      </div>
    </section>
  );
};
