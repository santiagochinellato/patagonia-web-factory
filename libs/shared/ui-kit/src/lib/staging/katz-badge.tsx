'use client';

import React from 'react';

export interface KatzBadgeProps {
  variant: '24h' | 'certified' | 'premium';
  children: React.ReactNode;
  className?: string;
}

export function KatzBadge({
  variant,
  children,
  className = '',
}: KatzBadgeProps) {
  const variants = {
    '24h': 'bg-katz-orange text-white px-3 py-1 text-sm font-semibold',
    certified:
      'bg-katz-teal-light text-katz-blue-deep px-3 py-1 text-sm font-medium',
    premium: 'bg-katz-blue-deep text-white px-3 py-1 text-sm font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default KatzBadge;
