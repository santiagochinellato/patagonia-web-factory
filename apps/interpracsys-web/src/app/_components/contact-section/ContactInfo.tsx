'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Instagram } from 'lucide-react';
import React from 'react';
import { IPSettings, IPLandingPage } from '../../../types/sanity';
import { ContactItem } from './ContactItem';

export const ContactInfo = ({
  contactInfo,
  data,
}: {
  contactInfo?: IPSettings['footer']['contactInfo'];
  data?: IPLandingPage['contactSection'];
}) => {
  return (
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

      <div className="flex flex-col gap-8 w-full">
        {/* Soporte Técnico */}
        <div>
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            Soporte Técnico
          </h3>
          <div className="flex flex-col gap-4">
            <ContactItem
              icon={<Mail size={24} aria-hidden="true" />}
              label={data?.emailLabel || 'Email'}
              value={contactInfo?.supportEmail || 'soporte@interpracsys.com'}
              href={`mailto:${
                contactInfo?.supportEmail || 'soporte@interpracsys.com'
              }`}
              delay={0.2}
              ariaLabel="Enviar correo a soporte"
            />
            <ContactItem
              icon={<Phone size={24} aria-hidden="true" />}
              label={data?.phoneLabel || 'Teléfono / WhatsApp'}
              value="+54 9 2942612020"
              href={`https://wa.me/2942612020`}
              delay={0.3}
              ariaLabel="Llamar a soporte técnico"
            />
          </div>
        </div>

        {/* Contacto General */}
        <div>
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            Contacto
          </h3>
          <div className="flex flex-col gap-4">
            <ContactItem
              icon={<Mail size={24} aria-hidden="true" />}
              label={data?.emailLabel || 'Email'}
              value={contactInfo?.email || 'info@interpracsys.com'}
              href={`mailto:${contactInfo?.email || 'info@interpracsys.com'}`}
              delay={0.4}
              ariaLabel="Enviar correo a contacto general"
            />
            <ContactItem
              icon={<Phone size={24} aria-hidden="true" />}
              label={data?.phoneLabel || 'Teléfono / WhatsApp'}
              value="+54 9 3815570606"
              href={`https://wa.me/+5493815570606`}
              delay={0.5}
              ariaLabel="Llamar a contacto general"
            />
          </div>
        </div>

        {/* Redes Sociales */}
        <div>
          <div className="flex flex-col gap-4">
            <ContactItem
              icon={<Instagram size={24} aria-hidden="true" />}
              label={data?.followUsLabel || 'Síguenos'}
              value="@interpracsys"
              href="https://instagram.com/interpracsys"
              delay={0.6}
              ariaLabel="Síguenos en Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
