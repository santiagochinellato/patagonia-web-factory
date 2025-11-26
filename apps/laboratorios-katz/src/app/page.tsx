'use client';

import { useState } from 'react';
import {
  StickyHeader,
  BottomNavigation,
  ServiceAccessCard,
  FloatingContactButton,
  SimplifiedFooter,
  BranchesMapSection,
  InstitutionalSection,
} from '@patagonia-web-factory/ui-kit';
import { HERO_DATA, SERVICES_DATA, BRANCHES_DATA } from './data';

export default function HomePage() {
  const [activeNav, setActiveNav] = useState('home');

  // Header Configuration
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
    {
      label: 'Sucursales',
      href: '#sucursales',
      onClick: () => setActiveNav('sucursales'),
    },
    {
      label: 'Servicios',
      href: '#servicios',
      onClick: () => setActiveNav('servicios'),
    },
    {
      label: 'Guardias 24hs',
      href: '#guardias',
      onClick: () => setActiveNav('guardias'),
    },
    {
      label: 'Contacto',
      href: '#contacto',
      onClick: () => setActiveNav('contacto'),
    },
  ];

  // Map Services Data to Cards
  const serviceCards = SERVICES_DATA.map((service) => ({
    icon: (
      <img
        src={service.icon}
        alt={service.title}
        className="w-16 h-16 object-contain"
      />
    ),
    title: service.title,
    description: service.description,
    ctaText: service.ctaText,
    onCta: () => {
      if (service.url.startsWith('http')) {
        window.open(service.url, '_blank');
      } else {
        const element = document.querySelector(service.url);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  // Map Branches Data for Map Section
  const mapBranches = BRANCHES_DATA.map((branch) => ({
    id: branch.id,
    name: branch.nombre,
    address: branch.direccion,
    phone: branch.contacto.telefonos[0] || '',
    whatsapp: branch.contacto.whatsapps[0] || '',
    email: branch.contacto.emails[0] || '',
    googleMapsUrl: branch.urlgooglemaps,
    hours: branch.horario,
    localidad: branch.localidad,
    is24h: branch.guardia24horas || false,
    hasOnlineBooking: false, // Not in data, default to false
    images: branch.images,
    position: [branch.latitud, branch.longitud] as [number, number],
  }));

  // Filter 24h Locations for the specific section
  const main24hLocations = BRANCHES_DATA.filter((b) => b.guardia24horas).map(
    (branch) => ({
      name: branch.nombre,
      address: branch.direccion,
      phone: branch.contacto.telefonos,
      email: branch.contacto.emails[0],
      hours: branch.horario,
      googleMapsUrl: branch.urlgooglemaps,
      has24h: true,
    })
  );

  // Footer Configuration
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
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sucursales', href: '#sucursales' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Políticas de Privacidad', href: '#privacidad' },
  ];

  const footerCertifications = ['PEEC', 'Technopaty', 'ProGBA', 'ISO 9001'];

  // Bottom Nav Items
  const bottomNavItems = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      label: 'Inicio',
      onClick: () => {
        setActiveNav('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activeNav === 'home',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
        </svg>
      ),
      label: 'Sucursales',
      onClick: () => {
        setActiveNav('sucursales');
        const element = document.querySelector('#sucursales');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeNav === 'sucursales',

    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      label: 'Servicios',
      onClick: () => {
        setActiveNav('servicios');
        const element = document.querySelector('#servicios');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeNav === 'servicios',
    },
          {
        icon: (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        label: 'Guardias',
        onClick: () => {
          setActiveNav('guardias');
          const element = document.querySelector('#guardias');
          element?.scrollIntoView({ behavior: 'smooth' });
        },
        active: activeNav === 'guardias',
      },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: 'Contacto',
      onClick: () => {
        setActiveNav('contacto');
        const element = document.querySelector('#contacto');
        element?.scrollIntoView({ behavior: 'smooth' });
      },
      active: activeNav === 'contacto',
    },
  ];

  return (
    <div className="min-h-screen bg-white mb-16 md:mb-0">
      {/* Sticky Header */}
      <StickyHeader
        logo={headerLogo}
        links={headerLinks}
        ctaButton={{
          text: 'Resultados',
          onClick: () =>
            window.open(
              '/resultados',
              '_blank'
            ),
        }}
        secondaryCtaButton={{
          text: 'Derivantes',
          onClick: () =>
            window.open(
              '/derivantes',
              '_blank'
            ),
        }}
      />

      {/* Institutional Hero Section */}
      <InstitutionalSection
        blocks={HERO_DATA.texts.map((t) => ({
          id: t.id,
          title: t.title,
          description: t.description,
          logos: t.logos,
        }))}
        videoSrc={HERO_DATA.video}
        cta={{
          text: 'Resultados',
          onClick: () =>
            window.open(
              '/resultados',
              '_blank'
            ),
        }}
      />

      {/* Branches Map Section */}
      <section id="sucursales">
        <BranchesMapSection
          title="Nuestras Sucursales"
          subtitle="Encontrá el laboratorio más cercano a tu domicilio. Contamos con múltiples sedes estratégicamente ubicadas en Salta."
          branches={mapBranches}
        />
      </section>
          {/* Guardia 24 Horas */}
      <section id="guardias" className="py-24 bg-gradient-to-b from-katz-primary to-[#0B4F57] text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-katz-cta-primary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="container mx-auto relative z-10 px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium tracking-wide uppercase text-green-300">
                Servicio Activo Ahora
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 tracking-tight">
              Guardia 24 Horas
            </h2>
            <p className="text-xl text-katz-relief/90 max-w-2xl mx-auto leading-relaxed">
              Atención de urgencias y análisis clínicos permanentes en nuestras
              sedes principales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {main24hLocations.map((location, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-katz-cta-primary to-katz-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex justify-between items-start mb-6">
                  <div className="bg-katz-light p-3 rounded-2xl group-hover:bg-katz-primary/10 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-katz-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-green-200">
                    Abierto 24hs
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-katz-primary transition-colors">
                  {location.name}
                </h3>
                <p className="text-gray-500 mb-8 flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-katz-cta-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {location.address}
                </p>

                <div className="space-y-3">
                  <a
                    href={`tel:${location.phone[0]}`}
                    className="flex items-center justify-center w-full bg-katz-primary hover:bg-katz-cta-primary text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-katz-primary/30 group-hover:scale-[1.02]"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Llamar Ahora
                  </a>

                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-white border-2 border-katz-gray-light hover:border-katz-primary text-katz-gray-body hover:text-katz-primary font-bold py-4 rounded-xl transition-all duration-300 group-hover:bg-gray-50"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7"
                      />
                    </svg>
                    Cómo llegar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Access Cards */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-katz-primary mb-4">
              Nuestros Servicios
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <ServiceAccessCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

  

      {/* Formulario de Contacto Rápido */}
      <section id="contacto" className="py-20 bg-katz-relief">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-katz-primary mb-4">
                ¿Tenés Consultas?
              </h2>
            </div>
            <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-katz-gray-dark font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-katz-gray-light focus:border-katz-cta-primary outline-none transition-colors text-lg"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-katz-gray-dark font-medium mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-katz-gray-light focus:border-katz-cta-primary outline-none transition-colors text-lg"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              <div>
                <label className="block text-katz-gray-dark font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-katz-gray-light focus:border-katz-cta-primary outline-none transition-colors text-lg"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-katz-gray-dark font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-katz-gray-light focus:border-katz-cta-primary outline-none transition-colors text-lg"
                  placeholder="387 123 4567"
                />
              </div>
              <div>
                <label className="block text-katz-gray-dark font-medium mb-2">
                  Consulta
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-katz-gray-light focus:border-katz-cta-primary outline-none transition-colors text-lg"
                  placeholder="Escribí tu consulta..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-katz-cta-primary hover:bg-katz-primary text-white font-bold text-lg py-4 rounded-lg transition-colors min-h-[56px]"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SimplifiedFooter
        contacts={footerContacts}
        quickLinks={footerLinks}
        certifications={footerCertifications}
      />

      {/* Floating Contact Button */}
      <FloatingContactButton
        onClick={() => window.open('https://wa.me/5493876144845', '_blank')}
        label="¿Consultas? Chateá con nosotros"
      />

      {/* Bottom Navigation (Mobile Only) */}
      <BottomNavigation items={bottomNavItems} />
    </div>
  );
}
