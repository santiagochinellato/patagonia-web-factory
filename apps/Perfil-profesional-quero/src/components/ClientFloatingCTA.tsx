'use client';

import React from 'react';
import { FloatingContactButton } from '@patagonia-web-factory/ui-kit';

export function ClientFloatingCTA() {
  return (
    <FloatingContactButton
      onClick={() => window.open('https://wa.me/5491112345678', '_blank')}
    />
  );
}
