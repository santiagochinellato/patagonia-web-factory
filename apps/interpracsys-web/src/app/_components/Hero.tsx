'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-32 pb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between bg-white max-w-7xl mx-auto px-6 gap-10">
      <div className="w-full md:w-[60%] flex flex-col items-start z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue50 text-brand-navy text-xs font-bold tracking-wider mb-6 border border-brand-navy/10">
            LÍDERES EN LIS ARGENTINA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.1] mb-6 text-left"
        >
          <span className="block mb-2">Precisión Clínica para</span>
          <span className="text-transparent bg-clip-text bg-brand-gradient inline-block relative">
            Laboratorios Modernos
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
          className="text-lg md:text-xl text-slate-500 max-w-lg mb-10 leading-relaxed text-left"
        >
          InterPracsys transforma la gestión de su laboratorio con estabilidad,
          trazabilidad total y un diseño pensado para la máxima eficiencia
          operativa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gradient text-white font-bold shadow-lg shadow-brand-cyan/20 hover:shadow-levitate-hover hover:-translate-y-1 transition-all duration-300 text-lg group">
            <span className="flex items-center gap-2">
              Comenzar Ahora
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            Ver Características
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
        <div className="relative w-full h-full max-w-[450px] transition-all duration-700">
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
                key={pin.id}
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

                {/* Label (Commented out) */}
                {/* <div
                  className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-bold text-brand-navy bg-white/95 px-3 py-1 rounded-lg shadow-levitate border border-brand-cyan/20 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.1 + 1}s` }}
                >
                  {pin.label}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const pins = [
  { id: 'jujuy', label: 'Jujuy', x: 40, y: 3 },
  { id: 'salta', label: 'Salta', x: 44, y: 11 },
  { id: 'tucuman', label: 'Tucumán', x: 43, y: 16 },
  { id: 'san-juan', label: 'San Juan', x: 29, y: 28 },
  { id: 'santa-fe', label: 'Santa Fe', x: 60, y: 31 },
  { id: 'buenos-aires', label: 'Buenos Aires', x: 70, y: 40 },
  { id: 'neuquen', label: 'Neuquén', x: 23, y: 50 },
  { id: 'rio-negro', label: 'Río Negro', x: 35, y: 56 },
  { id: 'tierra-del-fuego', label: 'Tierra del Fuego', x: 34, y: 98 },
  { id: 'la-pampa', label: 'La Pampa', x: 43, y: 46 },
];
