'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';

export const TrustHeader = ({ data }: { data?: IPLandingPage['trust'] }) => {
  return (
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
    </div>
  );
};
