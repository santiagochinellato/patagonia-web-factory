'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/cpmLogoduetone.webp"
              alt="CPM Bariloche Logo"
              width={120}
              height={40}
              priority
              className="w-[120px] h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-text-main font-medium hover:text-brand-blue transition-colors font-body text-sm xl:text-base"
            >
              Inicio
            </Link>
            <Link
              href="/sobre-el-cpm"
              className="text-text-main font-medium hover:text-brand-blue transition-colors font-body text-sm xl:text-base"
            >
              Sobre CPM
            </Link>
            <Link
              href="/horarios"
              className="text-text-main font-medium hover:text-brand-blue transition-colors font-body text-sm xl:text-base"
            >
              Horarios
            </Link>
            <Link
              href="/staff"
              className="text-text-main font-medium hover:text-brand-blue transition-colors font-body text-sm xl:text-base"
            >
              Staff
            </Link>
            <Link
              href="/novedades"
              className="text-text-main font-medium hover:text-brand-blue transition-colors font-body text-sm xl:text-base"
            >
              Novedades
            </Link>
            <Link
              href="/contacto"
              className="text-text-main font-medium hover:text-brand-blue transition-colors font-body text-sm xl:text-base"
            >
              Contacto
            </Link>

            <a
              href="https://docturno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-pink text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-glow-pink hover:bg-pink-500 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              SACAR TURNO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {[
              { name: 'Inicio', href: '/' },
              { name: 'Sobre CPM', href: '/sobre-el-cpm' },
              { name: 'Horarios', href: '/horarios' },
              { name: 'Staff', href: '/staff' },
              { name: 'Novedades', href: '/novedades' },
              { name: 'Contacto', href: '/contacto' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-text-main py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://docturno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-pink text-white px-6 py-3 rounded-full font-bold shadow-lg mt-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              SACAR TURNO
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
