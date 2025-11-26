'use client';

import { useState, useMemo } from 'react';
import { IndicacionesList } from './indicaciones-list';
import { Indicacion, IndicacionesDetail } from './indicaciones-detail';

interface IndicacionesContainerProps {
  initialData: Indicacion[];
}

export function IndicacionesContainer({
  initialData,
}: IndicacionesContainerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndicacion, setSelectedIndicacion] =
    useState<Indicacion | null>(null);

  const filteredIndicaciones = useMemo(() => {
    if (!searchTerm.trim()) return initialData;

    const lowerTerm = searchTerm.toLowerCase();
    return initialData.filter((item) =>
      item.title.toLowerCase().includes(lowerTerm)
    );
  }, [initialData, searchTerm]);

  const handleSelect = (indicacion: Indicacion) => {
    setSelectedIndicacion(indicacion);
    // On mobile, scroll to the detail view
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document
          .getElementById('detail-view')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="container  mx-auto px-4 h-[calc(100vh-100px)] flex flex-col pt-6 pb-4 ">
      <div className="mb-6 flex-shrink-0">
        <h1 className="text-3xl md:text-4xl font-bold text-katz-primary mb-2">
          Indicaciones
        </h1>
        <p className="text-base text-gray-600 max-w-2xl">
          Obtén información sobre cómo prepararte para tus análisis clínicos.
        </p>
      </div>

      <div className="flex-grow min-h-0 grid lg:grid-cols-12 gap-6 items-start h-full">
        {/* Left Column: Search & List */}
        <div className="lg:col-span-4 overflow-hidden flex flex-col h-full space-y-4">
          <div className="relative flex-shrink-0">
            <input
              type="text"
              placeholder="Buscar análisis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-katz-primary focus:ring-4 focus:ring-katz-primary/10 outline-none transition-all text-base shadow-sm"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="bg-white  rounded-2xl shadow-lg border border-gray-100 flex-grow overflow-y-auto custom-scrollbar p-4">
            <IndicacionesList
              indicaciones={filteredIndicaciones}
              selectedId={selectedIndicacion?.id || null}
              onSelect={handleSelect}
            />
          </div>
        </div>

        {/* Right Column: Detail View */}
        <div
          id="detail-view"
          className="lg:col-span-8 h-full flex flex-col overflow-y-auto"
        >
          <IndicacionesDetail indicacion={selectedIndicacion} />
        </div>
      </div>
    </div>
  );
}
