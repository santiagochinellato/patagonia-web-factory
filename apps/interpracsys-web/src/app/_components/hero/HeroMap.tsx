'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { IPLandingPage } from '../../../types/sanity';

export const HeroMap = ({ data }: { data?: IPLandingPage['hero'] }) => {
  const pins = data?.mapPins || [
    { label: 'Jujuy', x: 40, y: 3 },
    { label: 'Salta', x: 44, y: 11 },
    { label: 'Tucumán', x: 41, y: 16 },
    { label: 'San Juan', x: 29, y: 28 },
    { label: 'Santa Fe', x: 62, y: 31 },
    { label: 'Buenos Aires', x: 70, y: 45 },
    { label: 'Neuquén', x: 23, y: 50 },
    { label: 'Río Negro', x: 35, y: 56 },
    { label: 'Tierra del Fuego', x: 30, y: 98 },
    { label: 'La Pampa', x: 43, y: 46 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full md:w-[40%] h-[400px] md:h-[calc(100vh-200px)] relative flex items-center justify-center pointer-events-none perspective-1000"
    >
      <div className="relative h-full w-auto aspect-[2540/4889] max-w-[450px] transition-all duration-700">
        <Image
          src="/argentina.svg"
          alt="Mapa de Argentina"
          fill
          className="object-contain drop-shadow-[0_0_10px_rgba(46,49,146,0.5)]"
          priority
        />
        <Image
          src="/malvinas.svg"
          alt="Islas Malvinas"
          width={70}
          height={70}
          className="absolute w-[13%] h-auto drop-shadow-sm opacity-90 hover:opacity-100 transition-opacity"
          style={{
            left: '66%', // Slightly adjusted for better visual alignment with percentage width
            top: '89%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* Pins Overlay */}
        <div className="absolute inset-0 w-full h-full">
          {pins.map((pin, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Ripple effect - Enhanced & Multi-layered */}
              <div
                className="absolute w-11 h-11 -left-[18px] -top-[18px] rounded-full bg-brand-cyan/40 animate-ripple mix-blend-multiply"
                style={{ animationDelay: `${index * 0.3}s` }}
              />
              <div
                className="absolute w-11 h-11 -left-[18px] -top-[18px] rounded-full bg-brand-navy/30 animate-ripple"
                style={{
                  animationDelay: `${index * 0.3 + 0.5}s`,
                  animationDuration: '4s',
                }}
              />

              {/* Center dot - Pulsing */}
              <div className="relative w-3 h-3 rounded-full bg-brand-gradient shadow-[0_0_15px_rgba(0,174,239,0.8)] flex items-center justify-center z-10 animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
