'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IPSettings } from '../../../types/sanity';
import { urlFor } from '../../../lib/sanity';
import { NavBrand } from './NavBrand';
import { NavDesktopLinks } from './NavDesktopLinks';
import { NavDesktopActions } from './NavDesktopActions';
import { NavMobileMenu } from './NavMobileMenu';

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
    { name: 'Inicio', href: '#hero' },
    { name: 'Soluciones', href: '#features' },
    { name: 'Conectividad', href: '#integrations' },
    { name: 'Clientes', href: '#trust' },
    { name: 'Contacto', href: '#support' },
  ];

  const logoSrc = settings?.general?.logo
    ? urlFor(settings.general.logo).url()
    : '/logo.webp';
  const ctaText = settings?.navigation?.cta?.text || 'Solicitar Demo';

  // FIXME: Revert to dynamic values once Sanity cache issues are resolved
  // const supportPhone = settings?.footer?.contactInfo?.supportPhone || '+5492942612020';
  // const contactPhone = settings?.footer?.contactInfo?.phone || '+5493815570606';
  const supportPhone = '+5492942612020';
  const contactPhone = '+5493815570606';

  const sanitizePhone = (phone: string) => phone.replace(/\D/g, '');

  const supportLink = `https://wa.me/${sanitizePhone(supportPhone)}`;
  const contactLink = `https://wa.me/${sanitizePhone(contactPhone)}`;

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
          <NavBrand
            logoSrc={logoSrc}
            siteName={
              settings?.general?.siteName || 'InterPracsys Laboratorios'
            }
          />

          <NavDesktopLinks links={navLinks} />

          <NavDesktopActions
            supportLink={supportLink}
            contactLink={contactLink}
            ctaText={ctaText}
          />

          <button
            className="md:hidden text-slate-600 hover:text-brand-navy p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menú de navegación"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <NavMobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        links={navLinks}
        supportLink={supportLink}
        contactLink={contactLink}
        ctaText={ctaText}
      />
    </>
  );
};
