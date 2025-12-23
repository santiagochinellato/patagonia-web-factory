'use client';

import React from 'react';
import { IPLandingPage } from '../../../types/sanity';
import { urlFor } from '../../../lib/sanity';
import { TrustBackground } from './TrustBackground';
import { TrustHeader } from './TrustHeader';
import { MobileLogoCarousel } from './MobileLogoCarousel';
import { TrustStats } from './TrustStats';
import { TrustSolutions } from './TrustSolutions';

export const TrustSection = ({
  data,
  solutions,
}: {
  data?: IPLandingPage['trust'];
  solutions?: IPLandingPage['specializedSolutions'];
}) => {
  const stats = data?.stats || [
    {
      value: '+20',
      label: 'Años evolucionando junto al sector bioquímico.',
    },
    {
      value: '100%',
      label: 'Conexión total con autoanalizadores.',
    },
    {
      value: '24/7',
      label: 'Soporte técnico real. Estamos cuando tu laboratorio abre.',
    },
    {
      value: '+100',
      label: 'Centros optimizaron su gestión este año.',
    },
  ];

  const clientLogos =
    data?.clientLogos?.map((l) => urlFor(l).url()) ||
    [
      'amtec.jpg',
      'auad.png',
      'biosis.jpg',
      'biotis.png',
      'ciblab.png',
      'cigeba.png',
      'dibio.png',
      'diversa.png',
      'fertility.png',
      'imac.png',
      'imba.jpg',
      'katz.png',
      'labac.jpg',
      'laboratoriosar.png',
      'labtres.png',
      'lacvi.png',
      'loop.jpg',
      'microgen.png',
      'pediahome.png',
      'redlab.jpg',
      'vitae.png',
    ].map((l) => `/logosClientes/${l}`); // Keep default path if no data

  return (
    <section
      id="trust"
      className="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col items-center justify-start py-10 pb-32"
    >
      <TrustBackground logos={clientLogos} />

      <div className="max-w-7xl lg:mx-auto px-6 relative z-20 w-full flex flex-col items-center pt-12 md:pt-20">
        <TrustHeader data={data} />

        <div className="md:hidden w-full mb-12 relative z-20">
          <MobileLogoCarousel logos={clientLogos} direction="left" />
        </div>

        <TrustStats stats={stats} />

        <TrustSolutions
          solutions={solutions}
          automationBadges={data?.automationBadges}
        />
      </div>
    </section>
  );
};
