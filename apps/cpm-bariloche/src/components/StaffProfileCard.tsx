'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StaffMember } from '../types/sanity';
import { urlFor } from '../lib/sanity';
import { cn } from './ui/shared';
import { Calendar, Contact, Info, ChevronDown } from 'lucide-react';

const COLOR_MAP: Record<string, string> = {
  blue: 'bg-white text-blue-700 hover:bg-slate-50',
  pink: 'bg-white text-pink-700 hover:bg-slate-50',
  green: 'bg-white text-green-700 hover:bg-slate-50',
  orange: 'bg-white text-orange-700 hover:bg-slate-50',
  red: 'bg-white text-red-700 hover:bg-slate-50',
  gray: 'bg-white text-gray-700 hover:bg-slate-50',
  primary: 'bg-white text-brand-blue hover:bg-slate-50',
  secondary: 'bg-white text-brand-pink hover:bg-slate-50',
};

export function StaffProfileCard({ staff }: { staff: StaffMember }) {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isSocialsExpanded, setIsSocialsExpanded] = useState(false);

  const socialList = staff.obrasSociales || [];
  const INITIAL_LIMIT = 4;
  const visibleSocials = isSocialsExpanded
    ? socialList
    : socialList.slice(0, INITIAL_LIMIT);
  const remainingCount = Math.max(0, socialList.length - INITIAL_LIMIT);

  // Helper to get text from Portable Text
  const bioText = Array.isArray(staff.bio)
    ? staff.bio
        .map((b: any) => b.children?.map((c: any) => c.text).join(''))
        .join('\n\n')
    : 'Profesional del Centro Pediátrico Melipal.';

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 border border-slate-50 flex flex-col h-full">
      {/* Image Area */}
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
            {/* Fallback Icon */}
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

        {/* Gradient Overlay for Image Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Bio Overlay - "Half height from bottom with gradient" */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end transition-all duration-500 ease-in-out',
            isBioOpen
              ? 'top-0 bg-white/95 backdrop-blur-md'
              : 'translate-y-full opacity-0 pointer-events-none'
            /* 
                   Wait, "el cuadro de la bio debe ser desde abajo hasta la mitad con un degrade a transparencia"
                   If opened: It should be "From Bottom to Halfway".
                   If closed: Hidden.
                   So when `isBioOpen` is true, it shouldn't be `top-0` (full cover), but maybe `top-[40%]` or `h-[60%] bottom-0`.
                   And it needs a "gradient to transparency" at the top edge? Or the background itself checks out as a gradient?
                   "desde abajo hasta la mitad con un degrade a transparencia" implies the background of the text box fades out at the top?
                   Or the text fades?
                   Usually means the container background is a gradient from white (bottom) to transparent (top). 
                   BUT, if it has text, text needs contrast.
                   Maybe they mean: The container is white, but it only goes halfway up. 
                   Re-reading: "el cuadro de la bio debe ser desde abajo hasta la mitad con un degrade a transparencia"
                   Let's try: A container fixed to bottom, height 50-60%, with a white background that might fade at the very top edge? 
                   OR, the user means the 'closed' state? No, "cuando esta abierta la bio".
                   Let's assume a panel that slides up from bottom to about 60% height, with a white background.
                   The "degrade a transparencia" might refer to the "masking" of the text at the top, or the background itself.
                   Given "white text on image" or "black text on white"?
                   Design says "BIOGRAFIA" title + text. Usually dark text on light bg.
                   I will implement a white panel sliding up 60%, with a soft gradient mask at the top edge of the panel to blend it?
                   Or just a gradient background white->transparent? That would make top text unreadable.
                   Likely: Solid white/blur background for the actual content area, maybe fading out at the top of the *text* scroll?
                   Or maybe the panel *itself* has a gradient background.
                   Let's go with: Bottom sheet, white background, ~60% height.
                */
          )}
        >
          {/* If we want a gradient to transparency:
                 We can make the bg `bg-gradient-to-t from-white via-white to-white/0`
                 But then text at top needs to be careful.
                 Let's stick to a solid/blur background for readability as priority, but maybe style it as requested if I can visualize.
                 "desde abajo hasta la mitad" -> h-[50%] absolute bottom-0.
             */}
          <div
            className={cn(
              'absolute bottom-0 left-0 right-0 max-h-[70%] bg-gradient-to-t from-white via-white/95 to-white/0 pt-12 pb-6 px-6 overflow-hidden flex flex-col', // extended top gradient padding
              isBioOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0 pointer-events-none'
            )}
          >
            {/* Close/Toggle Button inside? User said "el boton mas info debe cerrar y abrir". So maybe no X button needed inside if the main button does it. */}

            <div className="overflow-y-auto custom-scrollbar relative z-10">
              <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2 sticky top-0">
                Biografía
              </h4>
              <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                {bioText}
              </p>
            </div>
          </div>
        </div>

        {/* Obras Sociales Pills - Overlay on Bottom of Image */}
        {/* Only show if Bio is NOT open (to avoid clutter?) or always? User didn't specify hiding. 
            "el boton mas info debe cerrar y abrir el cuadro de la bio".
            If Bio is open (halfway), pills at bottom might overlap or be covered. 
            The Bio is "desde abajo". So it covers the pills. 
        */}
        {!isBioOpen && socialList.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <div
              className={cn(
                'flex flex-wrap items-end content-end gap-1.5 transition-all duration-300 w-full'
                // If expanded, we show more.
              )}
            >
              {visibleSocials.map((os) => (
                <span
                  key={os._id}
                  className={cn(
                    'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md',
                    COLOR_MAP[os.color] ||
                      'bg-white text-slate-600 hover:bg-slate-50'
                  )}
                >
                  {os.nombre}
                </span>
              ))}

              {!isSocialsExpanded && remainingCount > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSocialsExpanded(true);
                  }}
                  className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-pink text-white hover:bg-brand-pink/90 transition-colors uppercase tracking-wider flex items-center gap-0.5 shadow-sm"
                >
                  Ver más
                </button>
              )}

              {/* 
                   "cuando las pildoras se esten mostrando el boton 'ver mas' al lado de las pildoras mostrara las siguientes"
                   This implies we might render the *next* batch? Or just expand all?
                   "Ver más" implies expanding.
                   If SocialsExpanded is true, we show all (visibleSocials = all).
                   Is there a "Ver menos"? User didn't ask for it explicitly here but "reemplazando las que se ven en un inicio" might imply pagination.
                   Let's stick to "Show All" for now.
                */}
            </div>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow relative bg-white z-20">
        <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-1 font-body">
          {staff.especialidad}
        </p>
        <h3 className="text-lg font-heading font-black text-brand-dark mb-4 leading-tight group-hover:text-brand-pink transition-colors">
          {staff.nombre}
        </h3>

        {/* Buttons Action Row */}
        <div className="mt-auto pt-4 border-t border-slate-50 grid grid-cols-3 gap-2">
          {/* 1. Obras Sociales */}
          <button
            onClick={() => setIsSocialsExpanded(!isSocialsExpanded)}
            className="flex flex-col items-center justify-center gap-1 group/btn p-1 outline-none"
            title="Ver Obras Sociales"
          >
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                isSocialsExpanded
                  ? 'bg-brand-blue text-white'
                  : 'bg-blue-50 text-brand-blue group-hover/btn:bg-brand-blue group-hover/btn:text-white'
              )}
            >
              <Contact size={14} strokeWidth={2.5} />
            </div>
            <span
              className={cn(
                'text-[9px] font-bold transition-colors uppercase text-center leading-tight',
                isSocialsExpanded
                  ? 'text-brand-blue'
                  : 'text-slate-400 group-hover/btn:text-brand-blue'
              )}
            >
              Obras Soc.
            </span>
          </button>

          {/* 2. Más Info (Bio) */}
          <button
            onClick={() => setIsBioOpen(!isBioOpen)}
            className="flex flex-col items-center justify-center gap-1 group/btn p-1 outline-none"
            title={isBioOpen ? 'Cerrar Biografía' : 'Ver Biografía'}
          >
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                isBioOpen
                  ? 'bg-brand-pink text-white'
                  : 'bg-pink-50 text-brand-pink group-hover/btn:bg-brand-pink group-hover/btn:text-white'
              )}
            >
              {isBioOpen ? (
                <ChevronDown size={16} strokeWidth={2.5} />
              ) : (
                <Info size={14} strokeWidth={2.5} />
              )}
            </div>
            <span
              className={cn(
                'text-[9px] font-bold transition-colors uppercase text-center leading-tight',
                isBioOpen
                  ? 'text-brand-pink'
                  : 'text-slate-400 group-hover/btn:text-brand-pink'
              )}
            >
              {isBioOpen ? 'Menos Info' : 'Más Info'}
            </span>
          </button>

          {/* 3. Pedir Turno */}
          <a
            href="/horarios"
            className="flex flex-col items-center justify-center gap-1 group/btn p-1 outline-none"
            title="Solicitar Turno"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-cyan-500 text-white flex items-center justify-center shadow-md group-hover/btn:shadow-lg group-hover/btn:scale-110 transition-all duration-300">
              <Calendar size={14} strokeWidth={2.5} />
            </div>
            <span className="text-[9px] font-bold text-slate-400 group-hover/btn:text-brand-blue transition-colors uppercase text-center leading-tight">
              Turnos
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
