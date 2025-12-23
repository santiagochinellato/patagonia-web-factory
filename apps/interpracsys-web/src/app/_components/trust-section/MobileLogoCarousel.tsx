'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const MobileLogoCarousel = ({
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
