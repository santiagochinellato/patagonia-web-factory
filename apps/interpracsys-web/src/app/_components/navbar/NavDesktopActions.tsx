'use client';

import Link from 'next/link';
import React from 'react';

export const NavDesktopActions = ({
  supportLink,
  contactLink,
  ctaText,
}: {
  supportLink: string;
  contactLink: string;
  ctaText: string;
}) => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link href={supportLink} target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-lg hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300">
          Servicio Técnico
        </button>
      </Link>
      <Link href={contactLink} target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-2.5 rounded-full bg-brand-gradient text-white text-sm font-semibold shadow-lg hover:shadow-levitate-hover hover:-translate-y-0.5 transition-all duration-300">
          {ctaText}
        </button>
      </Link>
    </div>
  );
};
