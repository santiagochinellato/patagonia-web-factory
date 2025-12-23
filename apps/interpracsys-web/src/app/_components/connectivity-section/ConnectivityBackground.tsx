'use client';

import React from 'react';

export const ConnectivityBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
};
