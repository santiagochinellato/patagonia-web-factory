'use client';

import React from 'react';
import { ServiceCard } from './service-card';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  onCta?: () => void;
}

export interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-katz-blue-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-katz-blue-deep mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-katz-teal mx-auto mb-6" />
          <p className="text-lg text-katz-gray-dark max-w-3xl mx-auto">
            Excelencia y tecnología de vanguardia en análisis clínicos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
