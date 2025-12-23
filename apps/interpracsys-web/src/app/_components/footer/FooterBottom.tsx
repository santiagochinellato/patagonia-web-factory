'use client';

import React from 'react';
import { IPSettings } from '../../../types/sanity';

export const FooterBottom = ({
  settings,
  currentYear,
}: {
  settings?: IPSettings;
  currentYear: number;
}) => {
  return (
    <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <p className="text-slate-500 text-sm">
        © {currentYear}{' '}
        {settings?.footer?.copyrightText ||
          'InterPracsys. Todos los derechos reservados.'}
      </p>
      <div className="flex items-center gap-1.5 text-sm text-slate-500">
        <span>{settings?.footer?.developedByText || 'Creado por'}</span>
        <a
          href={
            settings?.footer?.developerUrl ||
            'https://portfolio-santiago-chinellato.vercel.app/'
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-navy font-bold hover:text-brand-cyan transition-colors flex items-center gap-1"
        >
          {settings?.footer?.developerName || 'Santiago Chinellato'}
        </a>
      </div>
    </div>
  );
};
