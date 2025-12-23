'use client';

import Link from 'next/link';
import React from 'react';

export const NavDesktopLinks = ({
  links,
}: {
  links: { name: string; href: string }[];
}) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
