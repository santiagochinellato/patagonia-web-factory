'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { PawPrint, Leaf, FlaskConical, Bot, Zap } from 'lucide-react';
import { IPLandingPage } from '../../types/sanity';
import { urlFor } from '../../lib/sanity';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'PawPrint':
      return PawPrint;
    case 'Leaf':
      return Leaf;
    case 'FlaskConical':
      return FlaskConical;
    default:
      return FlaskConical;
  }
};

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

  // Fill array for carousel loop
  const allLogos = Array(10).fill(clientLogos).flat();

  return (
    <section
      id="trust"
      className="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col items-center justify-start py-10 pb-32"
    >
      {/* Background Logo Grid */}
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

      <div className="max-w-7xl lg:mx-auto px-6 relative z-20 w-full flex flex-col items-center pt-12 md:pt-20">
        <div className="max-w-4xl lg:mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-navy text-xs font-bold tracking-wider mb-4 shadow-sm"
          >
            {data?.badge || 'CONFIANZA Y PRESTIGIO'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold font-heading text-slate-900 tracking-tight pb-6 leading-tight break-words px-4 md:px-0"
          >
            {data?.titlePart1 ||
              'La Red de Diagnóstico más importante del país elige'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-cyan">
              {data?.titleHighlight || 'Interpracsys'}
            </span>
            <span className="text-brand-cyan">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl font-medium text-slate-500 mb-12 tracking-tight max-w-2xl mx-auto"
          >
            {data?.description ||
              'Nuestra experiencia y clientes validan nuestra trayectoria'}
          </motion.p>

          <div className="md:hidden w-full mb-12 relative z-20">
            <MobileLogoCarousel logos={clientLogos} direction="left" />
          </div>
        </div>

        {/* Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 p-0 w-full max-w-6xl mt-12 md:mt-20 overflow-hidden mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center justify-center p-8 md:px-4 md:py-8"
              >
                <div className="text-4xl md:text-5xl font-bold font-heading text-brand-navy mb-4 tracking-tighter whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-slate-600 leading-snug mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Expanded Ecosystem Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/50 p-8 w-full max-w-5xl mt-8 mx-auto"
        >
          <div className="flex flex-col gap-8">
            <h3 className="text-center text-2xl font-bold text-slate-800 font-heading">
              {solutions?.title ||
                'Soluciones Especializadas para Todo Tipo de Laboratorio'}
            </h3>

            {/* Specialized Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {(
                solutions?.cards || [
                  {
                    title: 'Clínicos',
                    description:
                      'Para laboratorios de analisis clínicos humanos',
                    icon: 'users',
                  },
                  {
                    title: 'Veterinaria',
                    description:
                      'Gestión optimizada para pacientes no humanos.',
                    icon: 'PawPrint',
                  },
                  {
                    title: 'Bromatología',
                    description: 'Control de calidad y seguridad alimentaria.',
                    icon: 'FlaskConical',
                  },
                  {
                    title: 'Ambiental',
                    description: 'Análisis de aguas, suelos y efluentes.',
                    icon: 'Leaf',
                  },
                ]
              ).map((solution, index) => {
                const Icon = getIcon(solution.icon);
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/40 border border-white/30 hover:bg-white/60 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-brand-cyan/10 text-brand-navy">
                      <Icon size={32} />
                    </div>
                    <h4 className="font-bold text-slate-700">
                      {solution.title}
                    </h4>
                    <p className="text-sm text-slate-500 max-w-[200px]">
                      {solution.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Automation Badges */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-200/50">
              {(
                data?.automationBadges || [
                  'Chatbot WhatsApp Integrado',
                  'Automatización de Procesos',
                ]
              ).map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10"
                >
                  {i === 0 ? (
                    <Bot size={20} className="text-brand-cyan" />
                  ) : (
                    <Zap size={20} className="text-brand-cyan" />
                  )}
                  <span className="text-sm font-semibold text-brand-navy">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MobileLogoCarousel = ({
  logos,
  direction = 'left',
}: {
  logos: string[];
  direction?: 'left' | 'right';
}) => {
  return (
    <div className="flex overflow-hidden w-full max-w-[100vw] mask-linear-fade relative">
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 60,
        }}
        className="flex gap-8 min-w-max"
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="relative w-24 h-16 shrink-0 opacity-80 grayscale hover:grayscale-0 transition-all"
          >
            <Image
              src={logo}
              alt="Cliente InterPracsys"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
