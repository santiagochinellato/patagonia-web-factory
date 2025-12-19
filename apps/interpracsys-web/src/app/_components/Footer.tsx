'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Soluciones', href: '#features' },
    { name: 'Integraciones', href: '#integrations' },
    { name: 'Clientes', href: '#trust' },
    { name: 'Soporte', href: '#support' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-levitate-hover transition-all duration-300">
                I
              </div>
              <span className="font-heading font-bold text-xl text-slate-900 tracking-tight">
                InterPracsys
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Transformando la gestión de laboratorios con tecnología de
              vanguardia, conectividad total y soporte experto.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink
                href="https://instagram.com/interpracsys"
                icon={<Instagram size={20} />}
              />
              <SocialLink
                href="https://linkedin.com/company/interpracsys"
                icon={<Linkedin size={20} />}
              />
              {/* Add more if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6">Explorar</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-brand-navy text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6">Legales</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-brand-navy text-sm font-medium transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-brand-navy text-sm font-medium transition-colors"
                >
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Short */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600 items-center md:items-start">
              <p>Buenos Aires, Argentina</p>
              <p>contacto@interpracsys.com</p>
              <p>+54 9 11 1234-5678</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {currentYear} InterPracsys. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <span>Creado por</span>
            <a
              href="https://portfolio-santiago-chinellato.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy font-bold hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              Santiago Chinellato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-navy hover:border-brand-navy/30 hover:bg-brand-navy/5 transition-all duration-300"
  >
    {icon}
  </a>
);
