'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const LogoGrid = ({
  logos,
  calloutText,
  protocolsNote,
}: {
  logos: { name: string; src: string }[];
  calloutText?: string;
  protocolsNote?: string;
}) => {
  return (
    <div className="w-full mt-16">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-80 mix-blend-screen">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative w-32 md:w-40 h-12 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain brightness-0 invert opacity-70 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8"
      >
        <div className="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
          </span>
          <span className="text-white text-sm font-medium">
            {calloutText || '¿No ves tu marca? La integramos en tiempo récord'}
          </span>
        </div>
        <p className="text-white/40 text-xs md:text-sm text-center md:text-right font-mono">
          {protocolsNote ||
            'Protocolos Soportados: Comunicación fluida y segura bajo estándares ASTM y HL7.'}
        </p>
      </motion.div>
    </div>
  );
};
