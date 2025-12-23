'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';

export const HeroContent = ({
  data,
  contactLink,
}: {
  data?: IPLandingPage['hero'];
  contactLink: string;
}) => {
  return (
    <div className="w-full md:w-[60%] flex flex-col items-center md:items-start z-10 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue50 text-brand-navy text-xs font-bold tracking-wider mb-6 border border-brand-navy/10">
          {data?.badge || 'LÍDERES EN LIS ARGENTINA'}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-6 break-words"
      >
        <span className="block mb-2">
          {data?.titlePrefix || 'Precisión Clínica para'}
        </span>
        <span className="text-transparent bg-clip-text bg-brand-gradient inline-block relative">
          {data?.titleHighlight || 'Laboratorios Modernos'}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'circOut' }}
            className="absolute -bottom-2 left-0 w-full h-[6px] bg-brand-cyan/20 rounded-full origin-left"
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-slate-500 max-w-lg mb-10 leading-relaxed"
      >
        {data?.subtitle ||
          'InterPracsys transforma la gestión de su laboratorio con estabilidad, trazabilidad total y un diseño pensado para la máxima eficiencia operativa.'}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full"
      >
        <a
          href={contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full px-8 py-4 rounded-full bg-brand-gradient text-white font-bold shadow-lg shadow-brand-cyan/20 hover:shadow-levitate-hover hover:-translate-y-1 transition-all duration-300 text-lg group">
            <span className="flex items-center justify-center gap-2">
              {data?.primaryButton || 'SOLICITAR DEMO'}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </button>
        </a>
        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-50 text-slate-700 font-semibold border border-slate-200 hover:bg-white hover:border-brand-cyan/30 hover:text-brand-navy transition-all duration-300">
          {data?.secondaryButton || 'Ver Características'}
        </button>
      </motion.div>
    </div>
  );
};
