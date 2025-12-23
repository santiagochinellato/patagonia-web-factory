'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const FeatureCard = ({
  card,
  index,
}: {
  card: {
    title: string;
    subtitle: string;
    description: string;
    micro: string;
    icon: string;
    gradient: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`h-full bg-gradient-to-br ${
          index % 2 === 0
            ? 'from-[#00AEEF] to-[#2E3192]'
            : 'from-[#2E3192] to-[#00AEEF]'
        } p-8 rounded-3xl shadow-levitate hover:shadow-levitate-hover hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden relative border border-white/10`}
      >
        <div className="relative z-10">
          <div className="flex justify-start gap-4 items-center mb-6">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg border border-white/20 flex items-center justify-center w-16 h-16">
              <Image
                src={card.icon}
                alt={card.title}
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-500 w-10 h-10"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <p className="text-xs font-bold text-white/80 tracking-wider uppercase mb-1">
                  {card.subtitle}
                </p>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white leading-tight">
                {card.title}
              </h3>
            </div>
          </div>

          <p className="text-white/90 leading-relaxed mb-8 text-sm md:text-base">
            {card.description}
          </p>
        </div>

        <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-between mt-auto">
          <span className="text-xs font-semibold text-white/70 italic">
            "{card.micro}"
          </span>
        </div>
      </div>
    </motion.div>
  );
};
