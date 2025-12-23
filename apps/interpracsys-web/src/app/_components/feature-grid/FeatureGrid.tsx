'use client';

import React from 'react';
import { IPLandingPage } from '../../../types/sanity';
import { urlFor } from '../../../lib/sanity';
import { FeatureCard } from './FeatureCard';
import { FeatureHeader } from './FeatureHeader';

export const FeatureGrid = ({ data }: { data?: IPLandingPage['features'] }) => {
  const cards = data?.cards?.map((card) => ({
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    micro: card.microQuote,
    icon: card.icon ? urlFor(card.icon).url() : '/modulos/lispro.svg',
    // Gradient logic can be dynamic or hardcoded based on index if not in schema.
    // For now I'll alternate them based on index as before, or I could add it to schema.
    // I will use alternating logic here.
    gradient: 'from-[#00AEEF] to-[#2E3192]',
  })) || [
    {
      title: 'LIS PRO+',
      subtitle: 'El Corazón del Lab',
      description:
        'Gestión integral para laboratorios de media y alta complejidad. Control total desde la recepción hasta la validación de resultados con trazabilidad absoluta.',
      micro: 'Productividad sin límites.',
      icon: '/modulos/lispro.svg',
      gradient: 'from-[#00AEEF] to-[#2E3192]',
    },
    {
      title: 'INTERPRACSYS WEB',
      subtitle: 'El Puente al Cliente',
      description:
        'Centralizá la información en un solo lugar. Permití que pacientes, médicos y laboratorios derivantes consulten resultados en tiempo real, 24/7.',
      micro: 'Tu laboratorio, siempre accesible.',
      icon: '/modulos/web.svg',
      gradient: 'from-[#2E3192] to-[#00AEEF]',
    },
    {
      title: 'ASISTENTE VIRTUAL',
      subtitle: 'Innovación en Atención',
      description:
        'Automatizá la atención vía WhatsApp. Respuestas automáticas para entrega de resultados, horarios e indicaciones, sin intervención humana.',
      micro: 'Atención 24/7 sin esfuerzo.',
      icon: '/modulos/asistente.svg',
      gradient: 'from-[#00AEEF] to-[#2E3192]',
    },
    {
      title: 'INTERPRACSYS LINK',
      subtitle: 'Conectividad Total',
      description:
        'Interconexión directa con todos los autoanalizadores del mercado. Edición, cálculo y reporte de resultados con adaptabilidad total a cualquier sistema.',
      micro: 'Comunicación inteligente.',
      icon: '/modulos/link.svg',
      gradient: 'from-[#2E3192] to-[#00AEEF]',
    },
  ];

  return (
    <section
      id="features"
      className="py-24 w-full bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] transform-gpu translate-z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[120px] transform-gpu translate-z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FeatureHeader data={data} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <FeatureCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
