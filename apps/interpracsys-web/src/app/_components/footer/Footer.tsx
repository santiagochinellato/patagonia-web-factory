'use client';

import React from 'react';
import { IPSettings } from '../../../types/sanity';
import { urlFor } from '../../../lib/sanity';
import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterContact } from './FooterContact';
import { FooterBottom } from './FooterBottom';

export const Footer = ({ settings }: { settings?: IPSettings }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = settings?.navigation?.links || [
    { label: 'Inicio', href: '#hero' },
    { label: 'Soluciones', href: '#features' },
    { label: 'Conectividad', href: '#integrations' },
    { label: 'Clientes', href: '#trust' },
    { label: 'Contacto', href: '#support' },
  ];

  const logoSrc = settings?.general?.logo
    ? urlFor(settings.general.logo).url()
    : '/logo.webp';
  const description =
    settings?.footer?.description ||
    'Transformando la gestión de laboratorios con tecnología de vanguardia, conectividad total y soporte experto.';
  const contactInfo = settings?.footer?.contactInfo;
  const social = settings?.footer?.social || [
    { platform: 'Instagram', url: 'https://instagram.com/interpracsys' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/interpracsys' },
  ];
  const legalLinks = settings?.footer?.legalLinks || [
    { label: 'Política de Privacidad', url: '#' },
    { label: 'Términos de Servicio', url: '#' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          <FooterBrand
            logoSrc={logoSrc}
            siteName={
              settings?.general?.siteName || 'InterPracsys Laboratorios'
            }
            description={description}
            social={social}
          />
          <FooterLinks
            title={settings?.footer?.exploreTitle || 'Explorar'}
            links={footerLinks}
          />
          <FooterLinks
            title={settings?.footer?.legalTitle || 'Legales'}
            links={legalLinks}
          />
          <FooterContact
            title={settings?.footer?.contactTitle || 'Contacto'}
            contactInfo={contactInfo}
          />
        </div>
        <FooterBottom settings={settings} currentYear={currentYear} />
      </div>
    </footer>
  );
};
