'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Address */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tighter block">
                CPM
              </span>
              <span className="text-sm font-bold opacity-75 tracking-widest block">
                BARILOCHE
              </span>
            </div>
            <address className="not-italic text-sm text-blue-100 leading-relaxed">
              <p>Av. de los Pioneros 3928</p>
              <p>CP R8402AMS - Barrio Melipal</p>
              <p>San Carlos de Bariloche, Río Negro</p>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-action-coral">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <span className="block opacity-50 text-xs">Teléfono Fijo</span>
                <a
                  href="tel:02944441141"
                  className="hover:text-white transition-colors"
                >
                  0294 444-1141
                </a>
              </li>
              <li>
                <span className="block opacity-50 text-xs">WhatsApp</span>
                <a
                  href="https://wa.me/5492944327185"
                  className="hover:text-white transition-colors"
                >
                  +54 9 294 432-7185
                </a>
              </li>
              <li>
                <span className="block opacity-50 text-xs">Email</span>
                <a
                  href="mailto:recepcion@cpmbariloche.com.ar"
                  className="hover:text-white transition-colors"
                >
                  recepcion@cpmbariloche.com.ar
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-action-coral">Menú</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link
                  href="/staff"
                  className="hover:text-white hover:underline"
                >
                  Profesionales
                </Link>
              </li>
              <li>
                <Link
                  href="/horarios"
                  className="hover:text-white hover:underline"
                >
                  Horarios de Atención
                </Link>
              </li>
              <li>
                <Link
                  href="/vacunatorio"
                  className="hover:text-white hover:underline"
                >
                  Vacunatorio
                </Link>
              </li>
              <li>
                <Link
                  href="/novedades"
                  className="hover:text-white hover:underline"
                >
                  Novedades
                </Link>
              </li>
            </ul>
          </div>

          {/* Horarios Summary */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-action-coral">
              Horarios
            </h3>
            <div className="text-sm text-blue-100 space-y-2">
              <p className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="font-bold">08:00 - 20:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sábados</span>
                <span className="font-bold">09:00 - 13:00</span>
              </p>
              <div className="mt-4 pt-4 border-t border-blue-800">
                <p className="text-xs text-action-coral font-bold uppercase tracking-wide">
                  Demanda Espontánea
                </p>
                <p>Consultar días disponibles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
          <p>
            &copy; {currentYear} Centro Pediátrico Melipal. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span>
              Diseño:{' '}
              <a href="#" className="hover:text-white">
                El Brvjo
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
