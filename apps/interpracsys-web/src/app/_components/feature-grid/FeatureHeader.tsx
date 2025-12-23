'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';

export const FeatureHeader = ({
  data,
}: {
  data?: IPLandingPage['features'];
}) => {
  return (
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
  );
};
