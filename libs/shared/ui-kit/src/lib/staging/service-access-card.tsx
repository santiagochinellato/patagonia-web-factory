'use client';

import React from 'react';

export interface ServiceAccessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  onCta: () => void;
}

export function ServiceAccessCard({
  icon,
  title,
  description,
  ctaText,
  onCta,
}: ServiceAccessCardProps) {
  return (
    <div className="flex flex-col justify-between  bg-katz-relief hover:bg-katz-cta-secondary/20 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center text-katz-cta-primary group-hover:text-katz-primary transition-colors">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-katz-primary mb-3 text-center">
        {title}
      </h3>
      <p className="text-katz-gray-dark text-center mb-6 leading-relaxed text-lg">
        {description}
      </p>

      {/* CTA */}
      <button
        onClick={onCta}
        className="w-full bg-katz-cta-primary hover:bg-katz-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base"
      >
        {ctaText}
      </button>
    </div>
  );
}

export default ServiceAccessCard;
