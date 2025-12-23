'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const NavBrand = ({
  logoSrc,
  siteName,
}: {
  logoSrc: string;
  siteName: string;
}) => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src={logoSrc}
        alt={siteName}
        width={250}
        height={40}
        style={{ height: 'auto', maxHeight: '80px', width: 'auto' }}
        className="object-contain"
      />
    </Link>
  );
};
