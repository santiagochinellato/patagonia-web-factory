'use client';

import { useState } from 'react';
import { StaffMember } from '../types/sanity';
import { urlFor } from '../lib/sanity';
import { Mail, GraduationCap } from 'lucide-react';
import { cn } from './ui/shared';
import Image from 'next/image';

interface DirectorProfileCardProps {
  director: StaffMember;
}

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

export function DirectorProfileCard({ director }: DirectorProfileCardProps) {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const socialList = director.obrasSociales || [];
  // "Mostraremos todas las pildoras en el caso del director medico" -> No slicing
  const visibleSocials = socialList;

  // Helper to render portable text as plain text
  const bioText = Array.isArray(director.bio)
    ? director.bio
        .map((b: any) => b.children?.map((c: any) => c.text).join(''))
        .join('\n\n')
    : 'Especialista en Pediatría con amplia trayectoria.';

  return (
    <div className="bg-surface-light rounded-[3rem] p-8 md:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12 items-start relative overflow-hidden transition-all duration-500">
      {/* Left Column: Image & Call to Action */}
      <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-6">
        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl bg-white relative group">
          {director.foto ? (
            <Image
              src={urlFor(director.foto).width(800).height(800).url()}
              alt={director.nombre}
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-brand-blue flex items-center justify-center text-white text-6xl font-black">
              {director.nombre.charAt(0)}
            </div>
          )}
        </div>

        {/* "Pedir Turno" trasladalo abajo de la imagen */}
        <a
          href="/horarios"
          className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-cyan-500 text-white font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 text-center flex items-center justify-center"
        >
          Pedir Turno
        </a>
      </div>

      {/* Right Column: Content */}
      <div className="w-full lg:w-2/3 flex flex-col">
        <div className="mb-4">
          <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block mb-3">
            {director.cargo || 'Director Médico'}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark mb-4 drop-shadow-sm">
            {director.nombre}
          </h2>
        </div>

        {/* Bio Section with Inline "Ver más" */}
        <div className="relative mb-8 text-lg text-text-muted leading-relaxed">
          {isBioExpanded ? (
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
              <span className="whitespace-pre-line">{bioText}</span>
              <button
                onClick={() => setIsBioExpanded(false)}
                className="inline-block ml-2 text-brand-pink font-bold hover:underline text-base cursor-pointer sticky bottom-0 bg-white/80 backdrop-blur-sm px-2 rounded"
              >
                Ver menos
              </button>
            </div>
          ) : (
            <div>
              <span className="whitespace-pre-line">
                {bioText.substring(0, 300)}
                {bioText.length > 300 ? '...' : ''}
                {bioText.length > 300 && (
                  <button
                    onClick={() => setIsBioExpanded(true)}
                    className="inline-block ml-1 text-brand-pink font-bold hover:underline text-base cursor-pointer"
                  >
                    Ver más
                  </button>
                )}
              </span>
            </div>
          )}
        </div>

        {/* Obras Sociales - All visible */}
        <div className="mb-8">
          <h4 className="font-bold text-brand-dark mb-3 text-sm uppercase tracking-wider">
            Obras Sociales
          </h4>
          <div className="flex flex-wrap gap-2">
            {visibleSocials.map((os) => (
              <span
                key={os._id}
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
                  COLOR_MAP[os.color] || 'bg-gray-100 text-gray-600'
                )}
              >
                {os.nombre}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-auto">
          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-brand-blue flex items-center gap-2 mb-3">
              <GraduationCap size={20} /> Formación
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {director.formacion?.map((item, i) => (
                <li key={i}>
                  • {item.titulo}{' '}
                  {item.institucion ? `(${item.institucion})` : ''}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
            <h4 className="font-bold text-brand-blue flex items-center gap-2 mb-3">
              <Mail size={20} /> Contacto
            </h4>
            <p className="text-sm text-gray-600">diego@cpmbariloche.com.ar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
