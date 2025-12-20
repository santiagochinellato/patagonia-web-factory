'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IPLandingPage } from '../../types/sanity';

export const Hero = ({ data }: { data?: IPLandingPage['hero'] }) => {
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
    <section className="w-full min-h-screen pt-32 pb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between bg-white max-w-7xl mx-auto px-6 gap-10">
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
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gradient text-white font-bold shadow-lg shadow-brand-cyan/20 hover:shadow-levitate-hover hover:-translate-y-1 transition-all duration-300 text-lg group">
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
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-50 text-slate-700 font-semibold border border-slate-200 hover:bg-white hover:border-brand-cyan/30 hover:text-brand-navy transition-all duration-300">
            {data?.secondaryButton || 'Ver Características'}
          </button>
        </motion.div>
      </div>

      {/* Map Image Side by Side with Pins */}
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
    </section>
  );
};
