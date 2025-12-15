'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const MENU_ITEMS = [
  { label: 'SOBRE EL CPM', href: '/sobre-el-cpm' },
  { label: 'HORARIOS', href: '/horarios' },
  { label: 'STAFF', href: '/staff' },
  { label: 'CONTACTO', href: '/contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-brand-blue text-white text-xs py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
              <MapPin size={14} className="text-action-coral" />
              Av. de los Pioneros 3928, Bariloche
            </span>
            <span className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
              <Phone size={14} className="text-action-coral" />
              0294 444-1141
            </span>
          </div>
          <div className="flex gap-4">
            <Link
              href="/novedades"
              className="hover:text-action-coral transition-colors"
            >
              Novedades
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="text-2xl font-black text-brand-blue tracking-tighter group-hover:text-brand-dark transition-colors">
                CPM
              </span>
              <span className="text-sm font-bold text-gray-500 tracking-widest group-hover:text-action-coral transition-colors">
                BARILOCHE
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-gray-600 hover:text-brand-blue transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://docturno.com" // Replace with actual link from JSON/Sanity later
                target="_blank"
                rel="noopener noreferrer"
                className="bg-action-coral text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-orange-600 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                PEDIR TURNO
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brand-blue p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-50 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 mt-4">
              <a
                href="https://docturno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-action-coral text-white py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                PEDIR TURNO
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
