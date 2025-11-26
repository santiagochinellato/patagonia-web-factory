'use client';
import dynamic from 'next/dynamic';
import { BranchCard, BranchCardProps } from './branch-card';
import { BranchSelectorList } from './branch-selector-list';
import { useState } from 'react';

// Dynamic import of the map to avoid SSR issues
const LeafletMap = dynamic(() => import('./leaflet-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-katz-gray-light text-katz-gray-medium">
      Cargando mapa...
    </div>
  ),
});

export interface Branch extends Omit<BranchCardProps, 'isActive' | 'onClose'> {
  position: [number, number];
}

export interface BranchesMapSectionProps {
  title: string;
  subtitle: string;
  branches: Branch[];
}

export function BranchesMapSection({
  title,
  subtitle,
  branches,
}: BranchesMapSectionProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(
    branches[0]?.id || null
  );

  const selectedBranch = branches.find((b) => b.id === selectedBranchId);
  const currentIndex = branches.findIndex((b) => b.id === selectedBranchId);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % branches.length;
    setSelectedBranchId(branches[nextIndex].id);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + branches.length) % branches.length;
    setSelectedBranchId(branches[prevIndex].id);
  };

  return (
    <section className="py-16 bg-white relative" id="sucursales">
      {/* Header */}
      <div className="container mx-auto px-6 mb-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-katz-primary mb-4">
            {title}
          </h2>
          <p className="text-katz-gray-body text-lg">{subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Grid Layout - Full viewport height minus header and padding on desktop, auto on mobile */}
        <div className="grid lg:grid-cols-[minmax(200px,_1fr)_minmax(340px,_400px)_2fr] gap-6 h-auto md:h-[calc(100vh-15rem)]">
          {/* Desktop: Branch Selector (Column 1) - with vertical scroll */}
          <div className="hidden lg:block max-h-full overflow-y-auto">
            <BranchSelectorList
              branches={branches}
              selectedBranchId={selectedBranchId}
              onSelectBranch={setSelectedBranchId}
            />
          </div>

          {/* Branch Detail Card (Column 2 on desktop, full width on mobile) with navigation arrows */}
          <div className="relative md:block h-full overflow-y-auto ring-2 ring-katz-cta-primary rounded-lg">
            {/* Left Arrow - visible only on mobile/tablet (< lg) positioned at image bottom */}
            <button
              onClick={goToPrevious}
              className="lg:hidden absolute left-2 top-[192px] -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-lg rounded-full p-2 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
              aria-label="Sucursal anterior"
            >
              <svg
                className="w-6 h-6 text-katz-primary hover:text-katz-cta-primary transition-colors"
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

            {selectedBranch && (
              <BranchCard {...selectedBranch} isActive={true} />
            )}

            {/* Right Arrow - visible only on mobile/tablet (< lg) positioned at image bottom */}
            <button
              onClick={goToNext}
              className="lg:hidden absolute right-2 top-[192px] -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-lg rounded-full p-2 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
              aria-label="Siguiente sucursal"
            >
              <svg
                className="w-6 h-6 text-katz-primary hover:text-katz-cta-primary transition-colors"
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

          {/* Map (Column 3 on desktop, hidden on mobile initially) */}
          <div className="hidden md:block relative rounded-xl overflow-hidden border border-katz-gray-border h-full shadow-inner bg-gray-100">
            <LeafletMap
              branches={branches}
              selectedBranchId={selectedBranchId}
              onSelectBranch={setSelectedBranchId}
            />
          </div>
        </div>

        {/* Mobile: Map below card */}
        <div className="md:hidden mt-6 h-[calc(100vh-40rem)] min-h-[300px] relative rounded-xl overflow-hidden border border-katz-gray-border shadow-inner bg-gray-100">
          <LeafletMap
            branches={branches}
            selectedBranchId={selectedBranchId}
            onSelectBranch={setSelectedBranchId}
          />
        </div>
      </div>
    </section>
  );
}
