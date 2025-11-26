'use client';

import { useRef } from 'react';

interface DescriptionStep {
  id: number;
  order: number;
  text: string;
  subitems?: string[];
}

interface Note {
  id: number;
  order: number;
  text: string;
}

export interface Indicacion {
  id: number;
  title: string;
  notes: string | Note[] | null;
  categoria: string;
  description: DescriptionStep[];
}

interface IndicacionesDetailProps {
  indicacion: Indicacion | null;
}

export function IndicacionesDetail({ indicacion }: IndicacionesDetailProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  if (!indicacion) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Seleccioná un análisis
        </h3>
        <p className="text-gray-500 max-w-xs">
          Elegí un estudio del listado para ver sus indicaciones y preparación.
        </p>
      </div>
    );
  }

  // Helper to normalize notes since the API returns string or array
  const renderNotes = () => {
    if (!indicacion.notes) return null;

    if (typeof indicacion.notes === 'string') {
      return <p className="text-gray-600 mb-4">{indicacion.notes}</p>;
    }

    if (Array.isArray(indicacion.notes)) {
      return (
        <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-600">
          {indicacion.notes.map((note) => (
            <li key={note.id}>{note.text}</li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <div className="relative h-full flex flex-col">
      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-white border border-gray-200 hover:border-katz-primary text-gray-600 hover:text-katz-primary px-4 py-2 rounded-lg transition-all shadow-sm print:hidden"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
        <span className="font-medium">Imprimir</span>
      </button>

      {/* Prescription Card */}
      <div
        ref={printRef}
        className="bg-white rounded-2xl shadow-medical border border-gray-100 print:shadow-none print:border-none h-full flex flex-col overflow-hidden"
        id="printable-area"
      >
        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-8 print:p-0 print:overflow-visible">
          {/* Header with Logo (Visible only on print) */}
          <div className="hidden print:block mb-6 border-b pb-4">
            <img
              src="https://i.ibb.co/HxHHDQB/KATZ.png"
              alt="Laboratorios Katz"
              className="h-10 w-auto object-contain mb-2"
            />
            <p className="text-xs text-gray-500">www.laboratorioskatz.com</p>
          </div>

          <div className="mb-6 pr-16 print:pr-0">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-katz-light text-katz-primary text-[10px] font-bold uppercase tracking-wider mb-2 print:hidden">
              {indicacion.categoria}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              {indicacion.title}
            </h2>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600">
            {/* Notes Section */}
            {indicacion.notes && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 rounded-r-lg print:bg-transparent print:border-l-2 print:border-gray-300 print:p-0 print:pl-4">
                <h4 className="text-yellow-800 font-bold text-xs uppercase tracking-wide mb-1 print:text-gray-900">
                  Importante
                </h4>
                <div className="text-yellow-900 print:text-gray-700 text-sm">
                  {renderNotes()}
                </div>
              </div>
            )}

            {/* Instructions Steps */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-3">
                Instrucciones de Preparación
              </h3>

              {indicacion.description
                .sort((a, b) => a.order - b.order)
                .map((step, index) => (
                  <div key={step.id} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-katz-primary text-white flex items-center justify-center font-bold text-xs print:border print:border-gray-300 print:bg-white print:text-gray-900">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 leading-relaxed font-medium text-sm">
                        {step.text}
                      </p>
                      {step.subitems && step.subitems.length > 0 && (
                        <ul className="mt-1.5 space-y-1 pl-3 border-l-2 border-gray-100">
                          {step.subitems.map((sub, idx) => (
                            <li key={idx} className="text-gray-600 text-xs">
                              • {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Footer for Print */}
          <div className="hidden print:block mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
            <p>Laboratorios Katz - Tu salud, nuestra prioridad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
