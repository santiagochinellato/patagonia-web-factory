'use client';

import { useMemo } from 'react';
import { Indicacion } from './indicaciones-detail';

interface IndicacionesListProps {
  indicaciones: Indicacion[];
  selectedId: number | null;
  onSelect: (indicacion: Indicacion) => void;
}

export function IndicacionesList({
  indicaciones,
  selectedId,
  onSelect,
}: IndicacionesListProps) {
  // Group indications by category
  const groupedIndicaciones = useMemo(() => {
    const groups: Record<string, Indicacion[]> = {};

    indicaciones.forEach((item) => {
      const category = item.categoria || 'OTROS';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
    });

    // Sort categories: SANGRE, ORINA, MATERIA FECAL, EXUDADOS, OTROS
    const orderedCategories = [
      'SANGRE',
      'ORINA',
      'MATERIA FECAL',
      'EXUDADOS',
      'OTROS',
    ];

    return Object.keys(groups)
      .sort((a, b) => {
        const indexA = orderedCategories.indexOf(a);
        const indexB = orderedCategories.indexOf(b);

        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
      })
      .reduce((acc, key) => {
        acc[key] = groups[key];
        return acc;
      }, {} as Record<string, Indicacion[]>);
  }, [indicaciones]);

  if (indicaciones.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No se encontraron análisis con ese nombre.
      </div>
    );
  }

  return (
    <div className="space-y-6 ">
      {Object.entries(groupedIndicaciones).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-sm font-bold text-katz-primary uppercase tracking-wider border-b border-katz-light pb-1 mb-2">
            {category}
          </h3>
          <div className="space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium
                  ${
                    selectedId === item.id
                      ? 'bg-katz-primary text-white shadow-sm transform scale-[1.01]'
                      : 'bg-gray-50 text-gray-700 hover:bg-white hover:shadow-sm hover:text-katz-primary'
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
