'use client';

import { useRef } from 'react';

export interface BranchSelectorProps {
  branches: Array<{
    id: string;
    name: string;
    address: string;
    is24h: boolean;
    localidad: string;
  }>;
  selectedBranchId: string | null;
  onSelectBranch: (id: string) => void;
}

export function BranchSelectorList({
  branches,
  selectedBranchId,
  onSelectBranch,
}: BranchSelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop: Vertical scrollable list */}
      <div className="hidden lg:flex flex-col gap-3 h-full overflow-y-auto pr-2 ">
        {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => onSelectBranch(branch.id)}
            className={`text-left p-4 rounded-lg border transition-all min-h-[142px] ${
              selectedBranchId === branch.id
                ? 'bg-katz-primary text-white border-katz-primary shadow-md'
                : 'bg-white text-katz-gray-body border-katz-gray-border hover:border-katz-cta-primary hover:shadow-sm'
            }`}
          >
            <h4
              className={`font-bold text-sm mb-1 ${
                selectedBranchId === branch.id
                  ? 'text-white'
                  : 'text-katz-primary'
              }`}
            >
              {branch.name}
            </h4>
            <p
              className={`text-xs ${
                selectedBranchId === branch.id
                  ? 'text-white/90'
                  : 'text-katz-gray-label'
              }`}
            >
              {branch.address} - {branch.localidad}
            </p>
            {branch.is24h && (
              <span
                className={`inline-block mt-2 text-xs px-2 py-0.5 rounded font-medium ${
                  selectedBranchId === branch.id
                    ? 'bg-white/20 text-white'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                Emergencias 24hs
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Mobile: Horizontal scrollable chips with arrows */}
      <div className="lg:hidden flex items-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="flex-shrink-0 bg-white/95 hover:bg-white shadow-lg rounded-full p-2 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
          aria-label="Scroll left"
        >
          <svg
            className="w-5 h-5 text-katz-primary hover:text-katz-cta-primary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide scroll-smooth flex-1"
        >
          {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => onSelectBranch(branch.id)}
            className={`flex-shrink-0 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-all max-w-[180px] sm:max-w-[220px] md:max-w-none ${
              selectedBranchId === branch.id
                ? 'bg-katz-primary text-white border-katz-primary shadow-md'
                : 'bg-white text-katz-gray-body border-katz-gray-border'
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-center">
              <span
                className={`font-semibold text-[11px] sm:text-xs md:text-sm leading-tight line-clamp-2 ${
                  selectedBranchId === branch.id
                    ? 'text-white'
                    : 'text-katz-primary'
                }`}
              >
                {branch.name}
              </span>
              {branch.is24h && (
                <span
                  className={`text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded whitespace-nowrap ${
                    selectedBranchId === branch.id
                      ? 'bg-white/20 text-white'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  24h
                </span>
              )}
            </div>
          </button>
        ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="flex-shrink-0 bg-white/95 hover:bg-white shadow-lg rounded-full p-2 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
          aria-label="Scroll right"
        >
          <svg
            className="w-5 h-5 text-katz-primary hover:text-katz-cta-primary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
