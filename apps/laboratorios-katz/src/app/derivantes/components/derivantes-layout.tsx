'use client';

import {
  StickyHeader,
  SimplifiedFooter,
  FloatingContactButton,
} from '@patagonia-web-factory/ui-kit';

export function DerivantesLayout({ children }: { children: React.ReactNode }) {
  const headerLogo = (
    <div className="flex items-center gap-3">
      <img
        src="https://i.ibb.co/HxHHDQB/KATZ.png"
        alt="Laboratorios Katz"
        className="h-10 w-auto object-contain"
      />
    </div>
  );

  const headerLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Indicaciones', href: '/indicaciones' },
    { label: 'Sucursales', href: '/#sucursales' },
            {
      label: 'guardias 24hs',
      href: '/#guardias',
    },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Contacto', href: '/#contacto' },
    { label: 'Derivantes', href: '/derivantes' },
  ];

  const footerContacts = [
    { type: 'phone' as const, value: '+54 387 2422554', label: '0387 2422554' },
    {
      type: 'whatsapp' as const,
      value: '+54 387 614 4845',
      label: 'WhatsApp: 387 614 4845',
    },
    {
      type: 'email' as const,
      value: 'info@laboratorioskatz.com',
      label: 'info@laboratorioskatz.com',
    },
  ];

  const footerLinks = [
    { label: 'Resultados', href: '/resultados' },
    { label: 'Indicaciones', href: '/indicaciones' },
    { label: 'Sucursales', href: '/#sucursales' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Políticas de Privacidad', href: '/#privacidad' },
  ];

  const footerCertifications = ['PEEC', 'Technopaty', 'ProGBA', 'ISO 9001'];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StickyHeader
        logo={headerLogo}
        links={headerLinks}
        ctaButton={{
          text: 'Resultados',
          onClick: () =>
            window.open(
              '/resultados',
    
            ),
        }}
      />
      <main className="flex-grow">{children}</main>
      <SimplifiedFooter
        contacts={footerContacts}
        quickLinks={footerLinks}
        certifications={footerCertifications}
      />
      <FloatingContactButton
        label="¿Consultas? Chateá con nosotros"
        onClick={() => window.open('https://wa.me/5493876144845', '_blank')}
      />
    </div>
  );
}
