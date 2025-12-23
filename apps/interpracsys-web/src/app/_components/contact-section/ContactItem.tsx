'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const ContactItem = ({
  icon,
  label,
  value,
  href,
  delay,
  ariaLabel,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
  ariaLabel?: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg hover:border-slate-100 border border-transparent transition-all w-full max-w-sm lg:max-w-none justify-start"
    aria-label={ariaLabel}
    role="link"
  >
    <div className="w-12 h-12 rounded-full bg-brand-blue50 text-brand-navy flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <p className="text-lg font-medium text-slate-800 group-hover:text-brand-navy transition-colors">
        {value}
      </p>
    </div>
  </motion.a>
);
