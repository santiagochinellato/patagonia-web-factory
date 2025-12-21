'use client';

import React from 'react';
import { ServiceArea } from '@patagonia-web-factory/cpm-sanity';

interface FeatureGridProps {
  services: ServiceArea[];
  title?: string;
  subtitle?: string;
}

export function FeatureGrid({ services, title, subtitle }: FeatureGridProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4"
              style={{ borderColor: service.color || '#0ea5e9' }}
            >
              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${service.color}20`,
                    color: service.color,
                  }}
                >
                  {/** Simple icon placeholder based on service.icon string or default **/}
                  <span className="text-3xl">✦</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-slate-600 mb-6">{service.description}</p>
              </div>

              {service.specificServices && (
                <ul className="space-y-2">
                  {service.specificServices
                    .slice(0, 5)
                    .map((item: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <span className="mr-2 text-primary-500">•</span>
                        {item}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
