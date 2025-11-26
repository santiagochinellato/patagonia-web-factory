'use client';

import React from 'react';

export interface BottomNavItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

export interface BottomNavigationProps {
  items: BottomNavItem[];
}

export function BottomNavigation({ items }: BottomNavigationProps) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-katz-gray-light shadow-lg z-40">
      <div className="flex items-center justify-around">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={item.onClick}
            className={`flex flex-col items-center justify-center py-2 sm:py-3 px-1 sm:px-2 md:px-4 min-h-[56px] sm:min-h-[64px] flex-1 transition-colors ${
              item.active
                ? 'text-katz-cta-primary'
                : 'text-katz-gray-medium hover:text-katz-cta-primary'
            }`}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 sm:mb-1">{item.icon}</div>
            <span className="text-[10px] sm:text-xs font-medium leading-tight text-center">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigation;
