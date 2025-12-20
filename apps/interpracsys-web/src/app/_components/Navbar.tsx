'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { IPSettings } from '../../types/sanity';
import { urlFor } from '../../lib/sanity';

export const Navbar = ({ settings }: { settings?: IPSettings }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = settings?.navigation?.links?.map((link) => ({
    name: link.label,
    href: link.href,
  })) || [
    { name: 'Soluciones', href: '#features' },
    { name: 'Integraciones', href: '#integrations' },
    { name: 'Clientes', href: '#trust' },
    { name: 'Soporte', href: '#support' },
  ];

  const logoSrc = settings?.general?.logo
    ? urlFor(settings.general.logo).url()
    : '/logo.webp';
  const ctaText = settings?.navigation?.cta?.text || 'Solicitar Demo';
  const ctaLink = settings?.navigation?.cta?.link || '#';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 my-2 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={logoSrc}
              alt={settings?.general?.siteName || 'InterPracsys Laboratorios'}
              width={250}
              height={40}
              style={{ height: 'auto', maxHeight: '80px', width: 'auto' }}
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href={ctaLink}>
              <button className="px-6 py-2.5 rounded-full bg-brand-gradient text-white text-sm font-semibold shadow-lg hover:shadow-levitate-hover hover:-translate-y-0.5 transition-all duration-300">
                {ctaText}
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-slate-600 hover:text-brand-navy p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menú de navegación"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center pt-8 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href={ctaLink} onClick={() => setIsMobileMenuOpen(false)}>
              <button className="mt-4 px-8 py-3 rounded-full bg-brand-gradient text-white font-semibold shadow-lg">
                {ctaText}
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
