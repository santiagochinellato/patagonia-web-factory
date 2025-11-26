'use client';

import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  onCta?: () => void;
}

export function ServiceCard({
  icon,
  title,
  description,
  ctaText,
  onCta,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-katz-blue-light p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center text-katz-teal group-hover:text-katz-teal-dark transition-colors">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-katz-blue-deep mb-3 text-center">
        {title}
      </h3>
      <p className="text-katz-gray-dark text-center mb-6 leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      {ctaText && onCta && (
        <button
          onClick={onCta}
          className="w-full bg-katz-teal hover:bg-katz-teal-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {ctaText}
        </button>
      )}
    </div>
  );
}

export default ServiceCard;
