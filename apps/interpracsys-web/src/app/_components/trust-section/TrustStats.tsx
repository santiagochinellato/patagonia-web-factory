'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';

export const TrustStats = ({
  stats,
}: {
  stats: NonNullable<IPLandingPage['trust']>['stats'];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 p-0 w-full max-w-6xl mt-12 md:mt-20 overflow-hidden mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
        {stats?.map((stat, index) => (
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
  );
};
