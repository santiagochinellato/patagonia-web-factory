'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { IPLandingPage } from '../../types/sanity';
import { urlFor } from '../../lib/sanity';

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
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-navy text-xs font-bold tracking-wider mb-4 shadow-sm"
          >
            {data?.badge || 'ECOSISTEMA INTERPRACSYS'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight"
          >
            {data?.title || 'Soluciones de Vanguardia'}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`h-full bg-gradient-to-br ${
                  index % 2 === 0
                    ? 'from-[#00AEEF] to-[#2E3192]'
                    : 'from-[#2E3192] to-[#00AEEF]'
                } p-8 rounded-3xl shadow-levitate hover:shadow-levitate-hover hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden relative border border-white/10`}
              >
                <div className="relative z-10">
                  <div className="flex justify-start gap-4 items-center mb-6">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg border border-white/20 flex items-center justify-center w-16 h-16">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={40}
                        height={40}
                        className="group-hover:scale-110 transition-transform duration-500 w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div>
                        <p className="text-xs font-bold text-white/80 tracking-wider uppercase mb-1">
                          {card.subtitle}
                        </p>
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-white leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed mb-8 text-sm md:text-base">
                    {card.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-white/70 italic">
                    "{card.micro}"
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
