'use client';

import { motion } from 'framer-motion';
import { Network, RefreshCw, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { IPLandingPage } from '../../types/sanity';
import { urlFor } from '../../lib/sanity';

const LogoGrid = ({
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

export const ConnectivitySection = ({
  data,
}: {
  data?: IPLandingPage['connectivity'];
}) => {
  const logos = data?.machineLogos?.map((logo) => ({
    name: logo.name,
    src: logo.image ? urlFor(logo.image).url() : '',
  })) || [
    { name: 'Stago', src: '/logosMachines/stago.webp' },
    { name: 'Sysmex', src: '/logosMachines/Sysmex_company_logo.svg.webp' },
    { name: 'Mindray', src: '/logosMachines/mindray.webp' },
    { name: 'Gematec', src: '/logosMachines/gematec.webp' },
    { name: 'Metrolab', src: '/logosMachines/metrolab.webp' },
    { name: 'Diconex', src: '/logosMachines/diconex.webp' },
    {
      name: 'Beckman Coulter',
      src: '/logosMachines/Beckman_Coulter_Logo.svg.webp',
    },
    { name: 'Abbott', src: '/logosMachines/abbor.webp' },
    { name: 'Roche', src: '/logosMachines/roche.webp' },
  ];

  return (
    <section
      id="integrations"
      className="py-24 w-full bg-[#2E3192] relative overflow-hidden text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start text-center lg:text-left">
          {/* Left Column: Content */}
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

          {/* Right Column: Features */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Note: Icons are hardcoded because they are components, but text comes from Sanity */}
            {/* If data.features is present, map it, otherwise show defaults */}
            {data?.features && data.features.length > 0 ? (
              data.features.map((feature, i) => (
                <FeatureItem
                  key={i}
                  icon={
                    i === 0 ? (
                      <Network size={24} className="text-white" />
                    ) : i === 1 ? (
                      <RefreshCw size={24} className="text-white" />
                    ) : (
                      <ShieldCheck size={24} className="text-white" />
                    )
                  }
                  title={feature.title}
                  text={feature.text}
                  delay={0.3 + i * 0.1}
                />
              ))
            ) : (
              <>
                <FeatureItem
                  icon={<Network size={24} className="text-white" />}
                  title="Integración Universal"
                  text="Ya sea química clínica, hematología, inmunología o gases en sangre; nos comunicamos con todas las marcas líderes."
                  delay={0.3}
                />
                <FeatureItem
                  icon={<RefreshCw size={24} className="text-white" />}
                  title="Actualización Constante"
                  text="Nuestro equipo de desarrollo añade nuevos protocolos mensualmente. Tu inversión en software nunca queda obsoleta frente a una máquina nueva."
                  delay={0.4}
                />
                <FeatureItem
                  icon={<ShieldCheck size={24} className="text-white" />}
                  title="Cero Error de Trascripción"
                  text="La comunicación es bidireccional. La orden de trabajo va del sistema a la máquina, y el resultado vuelve al sistema. Sin intermediarios ni errores humanos."
                  delay={0.5}
                />
              </>
            )}
          </div>
        </div>

        {/* Logos Section */}
        <LogoGrid
          logos={logos}
          calloutText={data?.calloutText}
          protocolsNote={data?.protocolsNote}
        />
      </div>
    </section>
  );
};

const FeatureItem = ({
  icon,
  title,
  text,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
  >
    <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-brand-navy/50">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold font-heading mb-2 text-white">
        {title}
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">{text}</p>
    </div>
  </motion.div>
);
