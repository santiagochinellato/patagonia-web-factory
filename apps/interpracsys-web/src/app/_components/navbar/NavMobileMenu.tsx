'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export const NavMobileMenu = ({
  isOpen,
  setIsOpen,
  links,
  supportLink,
  contactLink,
  ctaText,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  links: { name: string; href: string }[];
  supportLink: string;
  contactLink: string;
  ctaText: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center pt-8 gap-6"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 w-full px-8">
            <Link
              href={supportLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <button className="w-full px-8 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow-lg hover:bg-emerald-600 transition-colors">
                Servicio Técnico
              </button>
            </Link>
            <Link
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <button className="w-full px-8 py-3 rounded-full bg-brand-gradient text-white font-semibold shadow-lg">
                {ctaText}
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
