'use client';

import React from 'react';

interface StatItem {
  value: string | number;
  label: string;
}

interface StatsComponentProps {
  stats: StatItem[];
  title?: string;
}

export function StatsComponent({ stats, title }: StatsComponentProps) {
  return (
    <section className="py-16 bg-slate-850 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute left-0 top-0 w-64 h-64 bg-secondary-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {title && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-300 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
