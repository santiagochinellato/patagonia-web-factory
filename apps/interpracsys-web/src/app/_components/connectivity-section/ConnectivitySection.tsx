'use client';

import React from 'react';
import { IPLandingPage } from '../../../types/sanity';
import { urlFor } from '../../../lib/sanity';
import { ConnectivityBackground } from './ConnectivityBackground';
import { ConnectivityHeader } from './ConnectivityHeader';
import { FeatureList } from './FeatureList';
import { LogoGrid } from './LogoGrid';

export const ConnectivitySection = ({
  data,
}: {
  data?: IPLandingPage['connectivity'];
}) => {
  const logos = data?.machineLogos?.map((logo) => ({
    name: logo.name,
    src: logo.image ? urlFor(logo.image).url() : '',
  })) || [
    { name: 'Stago', src: '/logosMachines/stago.webp' },
    { name: 'Sysmex', src: '/logosMachines/Sysmex_company_logo.svg.webp' },
    { name: 'Mindray', src: '/logosMachines/mindray.webp' },
    { name: 'Gematec', src: '/logosMachines/gematec.webp' },
    { name: 'Metrolab', src: '/logosMachines/metrolab.webp' },
    { name: 'Diconex', src: '/logosMachines/diconex.webp' },
    {
      name: 'Beckman Coulter',
      src: '/logosMachines/Beckman_Coulter_Logo.svg.webp',
    },
    { name: 'Abbott', src: '/logosMachines/abbor.webp' },
    { name: 'Roche', src: '/logosMachines/roche.webp' },
  ];

  return (
    <section
      id="integrations"
      className="py-24 w-full bg-[#2E3192] relative overflow-hidden text-white"
    >
      <ConnectivityBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start text-center lg:text-left">
          <ConnectivityHeader data={data} />
          <FeatureList features={data?.features} />
        </div>

        <LogoGrid
          logos={logos}
          calloutText={data?.calloutText}
          protocolsNote={data?.protocolsNote}
        />
      </div>
    </section>
  );
};
