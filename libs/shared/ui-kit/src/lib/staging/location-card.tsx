'use client';

import React from 'react';
import { KatzBadge } from './katz-badge';

export interface LocationCardProps {
  name: string;
  address: string;
  phone: string[];
  email: string;
  hours: string;
  has24h?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  isHighlighted?: boolean;
}

export function LocationCard({
  name,
  address,
  phone,
  email,
  hours,
  has24h = false,
  onHover,
  onLeave,
  isHighlighted = false,
}: LocationCardProps) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
        isHighlighted ? 'border-katz-teal scale-105' : 'border-transparent'
      }`}
    >
      {/* Header with Badge */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-katz-blue-deep pr-4">{name}</h3>
        {has24h && <KatzBadge variant="24h">24hs</KatzBadge>}
      </div>

      {/* Address */}
      <div className="flex items-start mb-3">
        <svg
          className="w-5 h-5 text-katz-teal mt-0.5 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="text-sm text-katz-gray-dark">{address}</p>
      </div>

      {/* Phone */}
      {phone.map((num, idx) => (
        <div key={idx} className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-katz-teal mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a
            href={`tel:${num}`}
            className="text-sm text-katz-gray-dark hover:text-katz-teal transition-colors"
          >
            {num}
          </a>
        </div>
      ))}

      {/* Email */}
      <div className="flex items-center mb-3">
        <svg
          className="w-5 h-5 text-katz-teal mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <a
          href={`mailto:${email}`}
          className="text-sm text-katz-gray-dark hover:text-katz-teal transition-colors"
        >
          {email}
        </a>
      </div>

      {/* Hours */}
      <div className="flex items-start pt-3 border-t border-katz-blue-light">
        <svg
          className="w-5 h-5 text-katz-teal mr-2 mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-katz-gray-medium">{hours}</p>
      </div>

      {/* Call Button for Mobile */}
      {phone.length > 0 && (
        <a
          href={`tel:${phone[0]}`}
          className="mt-4 block w-full bg-katz-blue-deep hover:bg-katz-blue-medium text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-200 md:hidden"
        >
          Llamar ahora
        </a>
      )}
    </div>
  );
}

export default LocationCard;
