'use client';

import React from 'react';
import { IPSettings } from '../../../types/sanity';

export const FooterContact = ({
  title,
  contactInfo,
}: {
  title: string;
  contactInfo?: IPSettings['footer']['contactInfo'];
}) => {
  return (
    <div className="col-span-1">
      <h4 className="font-bold text-slate-900 mb-6">{title}</h4>
      <div className="flex flex-col gap-3 text-sm text-slate-600 items-center md:items-start">
        <p>{contactInfo?.address || 'Bariloche, Argentina'}</p>
        <p>{contactInfo?.email || 'contacto@interpracsys.com'}</p>
        <p>{contactInfo?.phone || '+54 9 294 2612020'}</p>
      </div>
    </div>
  );
};
