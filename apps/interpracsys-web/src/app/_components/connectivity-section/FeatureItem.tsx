'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const FeatureItem = ({
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
