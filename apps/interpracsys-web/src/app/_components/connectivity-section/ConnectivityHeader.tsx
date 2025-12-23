'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';

export const ConnectivityHeader = ({
  data,
}: {
  data?: IPLandingPage['connectivity'];
}) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold tracking-wider mb-6 border border-[#00AEEF]/20"
      >
        {data?.badge || 'CONECTIVIDAD TOTAL'}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight"
      >
        {data?.title || 'Conectividad'} <br />
        <span className="text-[#00AEEF]">
          {data?.subtitle || 'Sin Límites'}
        </span>
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl md:text-2xl text-white/90 font-medium mb-6"
      >
        {data?.subtitle2 ||
          'Tu laboratorio, integrado y automatizado de punta a punta.'}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
      >
        {data?.description ||
          'Sabemos que la tecnología médica evoluciona rápido. Por eso, Interpracsys está diseñado para ser universalmente compatible. Nos conectamos con todos los autoanalizadores del mercado actual y, lo más importante: si incorporás tecnología nueva, nosotros la integramos.'}
      </motion.p>
    </div>
  );
};
