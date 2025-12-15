'use client';

import { useState } from 'react';

import { twMerge } from 'tailwind-merge';

interface ScheduleItem {
  profesional?: string;
  especialidad: string;
  horario: string;
  isEsponanea?: boolean;
}

interface DailySchedule {
  day: string;
  items: ScheduleItem[];
}

// Mock data based on JSON - will be replaced by Sanity data
const mockSchedule: DailySchedule[] = [
  {
    day: 'Lunes',
    items: [
      {
        profesional: 'Dra. Claudia Rosales',
        especialidad: 'Medicina General',
        horario: '09:00-14:00',
      },
      {
        profesional: 'Dr. Fernando Risso',
        especialidad: 'Pediatría',
        horario: '14:30-18:30',
      },
    ],
  },
  {
    day: 'Martes',
    items: [
      {
        profesional: 'Dra. Ana Eisner',
        especialidad: 'Pediatría',
        horario: '09:00-12:00',
      },
      {
        profesional: 'Dr. Diego Schnaiderman',
        especialidad: 'Pediatría',
        horario: '15:00-18:30',
      },
    ],
  },
  {
    day: 'Miércoles',
    items: [
      {
        profesional: 'Dra. Mariana Bailac',
        especialidad: 'Pediatría',
        horario: '09:00-12:00',
      },
      {
        profesional: 'Dra. María Caprile',
        especialidad: 'Odontología',
        horario: '09:00-13:30',
      },
    ],
  },
  {
    day: 'Jueves',
    items: [
      {
        profesional: 'Dra. Haydeé Comar',
        especialidad: 'Pediatría',
        horario: '09:00-14:00',
      },
      {
        profesional: 'Demanda Espontánea',
        especialidad: 'Pediatría',
        horario: '10:00-18:00',
        isEsponanea: true,
      },
    ],
  },
  {
    day: 'Viernes',
    items: [
      {
        profesional: 'Dra. Gabriela Giannini',
        especialidad: 'Pediatría',
        horario: '14:30-18:30',
      },
      {
        profesional: 'Enf. Sofía Castilla',
        especialidad: 'Vacunatorio',
        horario: '13:00-18:00',
      },
    ],
  },
];

export function ScheduleTabs() {
  const [activeDay, setActiveDay] = useState('Lunes');

  const activeSchedule = mockSchedule.find((s) => s.day === activeDay);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-brand-blue mb-6 border-b-2 border-action-coral inline-block">
        Horarios de Atención
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {mockSchedule.map((schedule) => (
          <button
            key={schedule.day}
            onClick={() => setActiveDay(schedule.day)}
            className={twMerge(
              'px-5 py-2 rounded-full text-sm font-bold transition-all duration-300',
              activeDay === schedule.day
                ? 'bg-brand-blue text-white shadow-md transform scale-105'
                : 'bg-brand-light text-brand-blue hover:bg-blue-100 hover:scale-105'
            )}
          >
            {schedule.day}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid gap-4 md:grid-cols-2">
        {activeSchedule?.items.map((item, idx) => (
          <div
            key={idx}
            className={twMerge(
              'p-6 rounded-2xl bg-white border shadow-sm transition-all hover:shadow-md group',
              item.isEsponanea
                ? 'border-l-4 border-l-action-coral border-gray-100 ring-1 ring-action-coral/10'
                : 'border-white hover:border-brand-light'
            )}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                {item.profesional}
              </h3>
              {item.isEsponanea && (
                <span className="px-3 py-1 bg-orange-50 text-action-coral text-xs font-black rounded-full uppercase tracking-wider">
                  Urgencia
                </span>
              )}
            </div>
            <p className="text-brand-blue font-medium mb-1">
              {item.especialidad}
            </p>
            <div className="flex items-center text-gray-500 text-sm mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {item.horario}
            </div>
          </div>
        ))}

        {!activeSchedule?.items.length && (
          <div className="col-span-2 text-center py-10 text-gray-500">
            No hay horarios registrados para este día.
          </div>
        )}
      </div>
    </div>
  );
}
