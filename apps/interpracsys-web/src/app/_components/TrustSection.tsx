'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const stats = [
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

const logos = [
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
];

// Duplicate logos to ensure we fill the screen
const allLogos = [...logos, ...logos, ...logos, ...logos];

export const TrustSection = () => {
  return (
    <section
      id="trust"
      className="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col items-center justify-start py-10"
    >
      {/* Background Logo Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/30 z-10" />{' '}
        {/* Reduced wash to make logos visible */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 p-4 pt-10 grayscale pointer-events-none">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="relative h-20 w-full flex items-start justify-center mix-blend-multiply opacity-70"
            >
              <Image
                src={`/logosClientes/${logo}`}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white via-35% to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex flex-col items-center pt-12 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-navy text-xs font-bold tracking-wider mb-4 shadow-sm"
          >
           CONFANZA Y PRESTIGIO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading text-slate-900 tracking-tight pb-6 leading-tight"
          >
            La Red de Diagnóstico más importante del país elige{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-cyan">
              Interpracsys
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
            Nuestra experiencia y clientes validan nuestra trayectoria
          </motion.p>
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
      </div>
    </section>
  );
};
