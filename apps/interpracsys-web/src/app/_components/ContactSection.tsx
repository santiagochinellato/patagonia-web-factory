'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Send } from 'lucide-react';
import { IPSettings, IPLandingPage } from '../../types/sanity';

export const ContactSection = ({
  contactInfo,
  data,
}: {
  contactInfo?: IPSettings['footer']['contactInfo'];
  data?: IPLandingPage['contactSection'];
}) => {
  return (
    <section
      id="support"
      className="py-24 w-full bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold tracking-wider mb-6 border border-brand-navy/20"
            >
              {data?.badge || 'HABLEMOS'}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-8"
            >
              {data?.titlePart1 || 'Estamos para'}{' '}
              <span className="text-transparent bg-clip-text bg-brand-gradient">
                {data?.titleHighlight || 'Potenciarte'}
              </span>
              .
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed"
            >
              {data?.description ||
                'Solicita tu demo hoy mismo o contáctanos para resolver cualquier duda. Nuestro equipo de expertos está listo para acompañarte.'}
            </motion.p>

            <div className="flex flex-col gap-4 items-start w-full">
              <ContactItem
                icon={<Phone size={24} aria-hidden="true" />}
                label={data?.phoneLabel || 'Teléfono / WhatsApp'}
                value={contactInfo?.phone || '+54 9 11 1234-5678'}
                href={`tel:${contactInfo?.phone || '+5491112345678'}`}
                delay={0.2}
                ariaLabel="Contactar por teléfono"
              />
              <ContactItem
                icon={<Instagram size={24} aria-hidden="true" />}
                label={data?.followUsLabel || 'Síguenos'}
                value="@interpracsys"
                href="https://instagram.com/interpracsys"
                delay={0.3}
                ariaLabel="Síguenos en Instagram"
              />
              <ContactItem
                icon={<Mail size={24} aria-hidden="true" />}
                label={data?.emailLabel || 'Email'}
                value={contactInfo?.email || 'contacto@interpracsys.com'}
                href={`mailto:${
                  contactInfo?.email || 'contacto@interpracsys.com'
                }`}
                delay={0.4}
                ariaLabel="Enviar un correo electrónico"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100"
            >
              <form
                className="flex flex-col gap-6"
                aria-label="Formulario de contacto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup
                    label={data?.formNameLabel || 'Nombre'}
                    placeholder={data?.formNamePlaceholder || 'Tu nombre'}
                    id="name"
                    autoComplete="name"
                  />
                  <InputGroup
                    label={data?.formOrgLabel || 'Laboratorio'}
                    placeholder={
                      data?.formOrgPlaceholder || 'Nombre del centro'
                    }
                    id="lab"
                    autoComplete="organization"
                  />
                </div>
                <InputGroup
                  label={data?.formEmailLabel || 'Email'}
                  placeholder={data?.formEmailPlaceholder || 'tu@email.com'}
                  type="email"
                  id="email"
                  autoComplete="email"
                />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-slate-700"
                  >
                    {data?.formMessageLabel || 'Mensaje'}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all resize-none text-slate-700"
                    placeholder={
                      data?.formMessagePlaceholder ||
                      '¿En qué podemos ayudarte?'
                    }
                    aria-label="Mensaje"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-gradient text-white font-bold shadow-lg shadow-brand-navy/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-2 focus:ring-4 focus:ring-brand-cyan/30 focus:outline-none"
                  aria-label="Enviar consulta"
                >
                  <span>{data?.formButtonText || 'Enviar Consulta'}</span>
                  <Send size={20} aria-hidden="true" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({
  icon,
  label,
  value,
  href,
  delay,
  ariaLabel,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
  ariaLabel?: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-lg hover:border-slate-100 border border-transparent transition-all w-full max-w-sm lg:max-w-none justify-start"
    aria-label={ariaLabel}
    role="link"
  >
    <div className="w-12 h-12 rounded-full bg-brand-blue50 text-brand-navy flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <p className="text-lg font-medium text-slate-800 group-hover:text-brand-navy transition-colors">
        {value}
      </p>
    </div>
  </motion.a>
);

const InputGroup = ({
  label,
  placeholder,
  type = 'text',
  id,
  autoComplete,
}: {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
  autoComplete?: string;
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-bold text-slate-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      autoComplete={autoComplete}
      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-slate-700"
      placeholder={placeholder}
    />
  </div>
);
