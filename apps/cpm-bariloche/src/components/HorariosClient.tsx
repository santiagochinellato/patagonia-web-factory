'use client';
import { useState } from 'react';
import { PageHeader, Section } from '@/components/ui/shared';
import { Clock, Search } from 'lucide-react';
import { Schedule } from '@/types/sanity';

// Type for valid day keys from Schedule type
type DayKey =
  | 'lunes'
  | 'martes'
  | 'miercoles'
  | 'jueves'
  | 'viernes'
  | 'sabado'
  | 'domingo';

const DAYS: { key: DayKey; label: string }[] = [
  { key: 'lunes', label: 'Lun' },
  { key: 'martes', label: 'Mar' },
  { key: 'miercoles', label: 'Mié' },
  { key: 'jueves', label: 'Jue' },
  { key: 'viernes', label: 'Vie' },
  { key: 'sabado', label: 'Sáb' },
  { key: 'domingo', label: 'Dom' },
];

// Get current day as DayKey
function getTodayKey(): DayKey {
  const dayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
  const dayMap: DayKey[] = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
  ];
  return dayMap[dayIndex];
}

interface HorariosClientProps {
  scheduleData: Schedule[];
  vaccinationText?: string;
}

export default function HorariosClient({
  scheduleData,
  vaccinationText,
}: HorariosClientProps) {
  const [filter, setFilter] = useState('');
  const today = getTodayKey();

  const filteredSchedule = scheduleData.filter((item) => {
    const professionalName =
      item.nombrePersonalizado || item.profesional?.nombre || '';
    const specialidad = item.especialidad || '';
    return (
      professionalName.toLowerCase().includes(filter.toLowerCase()) ||
      specialidad.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const defaultVaccinationText =
    'Realizamos todas las vacunas del Calendario Nacional y opcionales. Recordá traer siempre la Libreta de Salud.';
  const displayVaccinationText = vaccinationText || defaultVaccinationText;

  return (
    <div className="bg-white min-h-screen">
      <Section>
        <PageHeader
          title="Horarios de Atención"
          subtitle="Consultá la disponibilidad de nuestros profesionales. La atención es con turno previo."
        />

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input
            type="text"
            placeholder="Buscar médico o especialidad..."
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all shadow-sm outline-none font-bold text-gray-700"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Responsive Table/Grid */}
        <div className="mx-auto space-y-4">
          {/* Desktop Headers */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-brand-blue text-white rounded-2xl font-bold uppercase text-xs tracking-wider mb-2 ">
            <div className="col-span-4">Profesional</div>
            {DAYS.map((day) => (
              <div
                key={day.key}
                className={`col-span-1 text-center transition-colors py-1 ${
                  day.key === today
                    ? 'text-[#FFF]  bg-brand-pink rounded-full '
                    : ''
                }`}
              >
                {day.label}
              </div>
            ))}
          </div>

          {filteredSchedule.map((item) => {
            const professionalName =
              item.nombrePersonalizado || item.profesional?.nombre || 'N/A';
            const especialidad = item.especialidad || '';
            const isUrgency =
              especialidad.toLowerCase().includes('urgencias') ||
              especialidad.toLowerCase().includes('demanda espontánea');
            return (
              <div
                key={item._id}
                className={`
                          border rounded-3xl p-4 md:p-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center transition-all hover:shadow-md
                          ${
                            isUrgency
                              ? 'bg-orange-50 border-orange-100 hover:shadow-orange-100'
                              : 'bg-white border-slate-100'
                          }
                      `}
              >
                {/* Professional Info */}
                <div className="col-span-4 flex items-center gap-3 md:gap-4">
                  <div
                    className={`
                              w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0
                              ${
                                isUrgency
                                  ? 'bg-action-coral text-white'
                                  : 'bg-brand-light text-brand-blue'
                              }
                          `}
                  >
                    {professionalName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4
                      className={`font-bold text-sm md:text-base truncate ${
                        isUrgency ? 'text-action-coral' : 'text-brand-dark'
                      }`}
                    >
                      {professionalName}
                    </h4>
                    <span className="text-[10px] md:text-xs uppercase font-bold tracking-wider text-gray-400 block truncate">
                      {especialidad}
                    </span>
                  </div>
                </div>

                {/* Desktop Days */}
                {DAYS.map((day) => (
                  <div
                    key={day.key}
                    className={`hidden md:block col-span-1 text-center text-xs font-bold transition-colors ${
                      day.key === today ? 'text-brand-pink' : 'text-gray-600'
                    }`}
                  >
                    {item[day.key] || '-'}
                  </div>
                ))}

                {/* Mobile Days */}
                <div className="md:hidden grid grid-cols-1 gap-2 mt-3 pt-3 border-t border-gray-100 w-full">
                  {DAYS.map((day) => {
                    const hours = item[day.key];
                    if (!hours) return null;
                    const isToday = day.key === today;
                    return (
                      <div
                        key={day.key}
                        className={`flex items-center justify-between text-sm py-1.5 px-3 rounded-xl transition-colors ${
                          isToday ? 'bg-brand-pink/10' : ''
                        }`}
                      >
                        <span
                          className={`font-bold transition-colors text-xs uppercase tracking-wide ${
                            isToday ? 'text-brand-pink' : 'text-gray-500'
                          }`}
                        >
                          {day.label}
                        </span>
                        <span
                          className={`font-bold transition-colors text-sm ${
                            isToday ? 'text-brand-pink' : 'text-brand-blue'
                          }`}
                        >
                          {hours}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredSchedule.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No se encontraron resultados para tu búsqueda.
            </div>
          )}
        </div>
        {/* Vacunatorio Section */}
        <div
          id="vacunatorio"
          className="bg-surface-light rounded-[3rem] p-8 md:p-12"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-black text-brand-dark mb-4">
              Vacunatorio Oficial
            </h2>
            <p className="text-text-muted">{displayVaccinationText}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-6 flex items-center gap-2">
                <Clock className="text-brand-blue" /> Horarios de Vacunación
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-gray-500 font-bold">
                    Lunes a Viernes
                  </span>
                  <span className="font-bold text-brand-blue">
                    13:00 - 18:00
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-gray-500 font-bold">Sábados</span>
                  <span className="font-bold text-brand-blue">
                    10:00 - 12:00
                  </span>
                </li>
              </ul>
              <div className="mt-6 bg-blue-50 p-4 rounded-xl text-xs text-brand-blue font-bold text-center">
                Atención por orden de llegada
              </div>
            </div>

            <div className="space-y-4">
              {/* Acordeon / FAQ simulated using <details> for simplicity */}
              <details className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50 group cursor-pointer">
                <summary className="font-bold text-brand-dark flex justify-between items-center list-none outline-none">
                  ¿Qué debo llevar?
                  <span className="transition-transform group-open:rotate-180 ml-auto">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-text-muted text-sm">
                  Libreta de salud y DNI. Si es una vacuna privada, también la
                  orden médica.
                </p>
              </details>
              <details className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50 group cursor-pointer">
                <summary className="font-bold text-brand-dark flex justify-between items-center list-none outline-none">
                  ¿Atienden obras sociales?
                  <span className="transition-transform group-open:rotate-180 ml-auto">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-text-muted text-sm">
                  Sí, trabajamos con la mayoría de las obras sociales y
                  prepagas. Consultá el listado en recepción.
                </p>
              </details>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
