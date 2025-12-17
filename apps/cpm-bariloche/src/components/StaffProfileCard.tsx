import Image from 'next/image';
import { StaffMember } from '../types/sanity';
import { urlFor } from '../lib/sanity';
import { cn } from './ui/shared';

const COLOR_MAP: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  pink: 'bg-pink-100 text-pink-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
  red: 'bg-red-100 text-red-700',
  gray: 'bg-gray-100 text-gray-700',
  primary: 'bg-brand-blue text-white',
  secondary: 'bg-brand-pink text-white',
};

export function StaffProfileCard({ staff }: { staff: StaffMember }) {
  const socialList = staff.obrasSociales || [];
  const visibleSocials = socialList.slice(0, 10);
  const remainingCount = socialList.length - 10;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-slate-50 flex flex-col h-full">
      <div className="aspect-[4/5] bg-surface-light relative overflow-hidden">
        {staff.foto ? (
          <Image
            src={urlFor(staff.foto).width(400).height(500).url()}
            alt={staff.nombre}
            width={400}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-blue opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )}

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2 font-body">
          {staff.especialidad}
        </p>
        <h3 className="text-xl font-heading font-bold text-text-main mb-3 leading-tight group-hover:text-brand-pink transition-colors">
          {staff.nombre}
        </h3>

        {/* Obras Sociales Pills */}
        {socialList.length > 0 && (
          <div className="mt-2 mb-4 flex flex-wrap gap-1.5">
            {visibleSocials.map((os) => (
              <span
                key={os._id}
                className={cn(
                  'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider',
                  COLOR_MAP[os.color] || 'bg-gray-100 text-gray-600'
                )}
              >
                {os.nombre}
              </span>
            ))}
            {remainingCount > 0 && (
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 cursor-help"
                title="Más obras sociales disponibles"
              >
                +{remainingCount} más
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-4">
          {staff.matricula && (
            <span className="text-xs text-text-muted font-bold bg-slate-100 px-2 py-1 rounded">
              {staff.matricula}
            </span>
          )}
          <a
            href={`/staff/${staff.slug.current}`}
            className="text-xs font-bold text-brand-pink hover:text-brand-blue transition-colors flex items-center gap-1 uppercase"
          >
            Perfil
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
