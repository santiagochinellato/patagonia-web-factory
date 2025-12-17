'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-light border-t border-slate-100 pt-16 pb-8 text-text-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl leading-none text-brand-blue">
                  Melipal
                </span>
                <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                  Consultorios
                </span>
              </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Atención médica de excelencia con un enfoque humano y cercano para
              toda la comunidad de Bariloche.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white rounded-full text-brand-blue hover:text-brand-pink shadow-sm transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-full text-brand-blue hover:text-brand-pink shadow-sm transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading font-bold text-lg text-brand-pink mb-6">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-start gap-3">
                <MapPin
                  className="text-brand-blue flex-shrink-0 mt-1"
                  size={18}
                />
                <span>
                  Av. de los Pioneros 4960
                  <br />
                  San Carlos de Bariloche
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-blue flex-shrink-0" size={18} />
                <span>+54 9 294 444-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-blue flex-shrink-0" size={18} />
                <a
                  href="mailto:info@cpmbariloche.com"
                  className="hover:text-brand-blue"
                >
                  info@cpmbariloche.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-heading font-bold text-lg text-brand-pink mb-6">
              Accesos Rápidos
            </h3>
            <ul className="space-y-3 text-sm font-body">
              <li>
                <Link
                  href="/staff"
                  className="hover:text-brand-blue transition-colors"
                >
                  Nuestros Profesionales
                </Link>
              </li>
              <li>
                <Link
                  href="/especialidades"
                  className="hover:text-brand-blue transition-colors"
                >
                  Especialidades Médicas
                </Link>
              </li>
              <li>
                <Link
                  href="/obras-sociales"
                  className="hover:text-brand-blue transition-colors"
                >
                  Obras Sociales
                </Link>
              </li>
              <li>
                <Link
                  href="/portal-paciente"
                  className="hover:text-brand-blue transition-colors"
                >
                  Portal del Paciente
                </Link>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="font-heading font-bold text-lg text-brand-pink mb-6">
              Horarios
            </h3>
            <ul className="space-y-3 text-sm font-body">
              <li className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="font-bold text-text-main">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span className="font-bold text-text-main">09:00 - 13:00</span>
              </li>
              <li className="mt-4 pt-4 border-t border-slate-200">
                <span className="block text-brand-blue font-bold mb-1">
                  Urgencias
                </span>
                <span className="text-xs">
                  Atención por demanda espontánea disponible en horario hábil.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Consultorios Médicos Melipal.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-brand-blue">
              Política de Privacidad
            </Link>
            <Link href="/legales" className="hover:text-brand-blue">
              Legales
            </Link>
          </div>
          <p className="opacity-50">Design by Patagonia Web Factory</p>
        </div>
      </div>
    </footer>
  );
}
