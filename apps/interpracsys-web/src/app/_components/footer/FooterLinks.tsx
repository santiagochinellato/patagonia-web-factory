'use client';

import Link from 'next/link';
import React from 'react';

export const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href?: string; url?: string }[];
}) => {
  return (
    <div className="col-span-1">
      <h4 className="font-bold text-slate-900 mb-6">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href || link.url || '#'}
              className="text-slate-600 hover:text-brand-navy text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
