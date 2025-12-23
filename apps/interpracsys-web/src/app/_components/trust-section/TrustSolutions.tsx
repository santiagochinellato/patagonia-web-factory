'use client';

import { motion } from 'framer-motion';
import React from 'react';
import {
  PawPrint,
  Leaf,
  FlaskConical,
  Bot,
  Zap,
  LucideIcon,
} from 'lucide-react';
import { IPLandingPage } from '../../../types/sanity';

const getIcon = (iconName: string): LucideIcon => {
  switch (iconName) {
    case 'PawPrint':
      return PawPrint;
    case 'Leaf':
      return Leaf;
    case 'FlaskConical':
      return FlaskConical;
    default:
      return FlaskConical;
  }
};

export const TrustSolutions = ({
  solutions,
  automationBadges,
}: {
  solutions?: IPLandingPage['specializedSolutions'];
  automationBadges?: string[];
}) => {
  const badgeList = automationBadges || [
    'Chatbot WhatsApp Integrado',
    'Automatización de Procesos',
  ];

  const cards = solutions?.cards || [
    {
      title: 'Clínicos',
      description: 'Para laboratorios de analisis clínicos humanos',
      icon: 'users',
    },
    {
      title: 'Veterinaria',
      description: 'Gestión optimizada para pacientes no humanos.',
      icon: 'PawPrint',
    },
    {
      title: 'Bromatología',
      description: 'Control de calidad y seguridad alimentaria.',
      icon: 'FlaskConical',
    },
    {
      title: 'Ambiental',
      description: 'Análisis de aguas, suelos y efluentes.',
      icon: 'Leaf',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/50 p-8 w-full max-w-5xl mt-8 mx-auto"
    >
      <div className="flex flex-col gap-8">
        <h3 className="text-center text-2xl font-bold text-slate-800 font-heading">
          {solutions?.title ||
            'Soluciones Especializadas para Todo Tipo de Laboratorio'}
        </h3>

        {/* Specialized Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((solution, index) => {
            const Icon = getIcon(solution.icon);
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/40 border border-white/30 hover:bg-white/60 transition-colors"
              >
                <div className="p-3 rounded-full bg-brand-cyan/10 text-brand-navy">
                  <Icon size={32} />
                </div>
                <h4 className="font-bold text-slate-700">{solution.title}</h4>
                <p className="text-sm text-slate-500 max-w-[200px]">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Automation Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-200/50">
          {badgeList.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10"
            >
              {i === 0 ? (
                <Bot size={20} className="text-brand-cyan" />
              ) : (
                <Zap size={20} className="text-brand-cyan" />
              )}
              <span className="text-sm font-semibold text-brand-navy">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
