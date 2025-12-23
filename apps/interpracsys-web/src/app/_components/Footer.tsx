'use client';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { IPSettings } from '../../types/sanity';
import { urlFor } from '../../lib/sanity';

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

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'facebook':
        return <Facebook size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      default:
        return <Linkedin size={20} />; // Fallback
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src={logoSrc}
                alt={settings?.general?.siteName || 'InterPracsys Laboratorios'}
                width={200}
                height={40}
                style={{ height: 'auto' }}
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              {description}
            </p>
            <div className="flex items-center gap-4">
              {social.map((s) => (
                <SocialLink
                  key={s.platform}
                  href={s.url}
                  icon={getSocialIcon(s.platform)}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6">
              {settings?.footer?.exploreTitle || 'Explorar'}
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-brand-navy text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6">
              {settings?.footer?.legalTitle || 'Legales'}
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    className="text-slate-600 hover:text-brand-navy text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Short */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6">
              {settings?.footer?.contactTitle || 'Contacto'}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600 items-center md:items-start">
              <p>{contactInfo?.address || 'Bariloche, Argentina'}</p>
              <p>{contactInfo?.email || 'contacto@interpracsys.com'}</p>
              <p>{contactInfo?.phone || '+54 9 294 2612020'}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {currentYear}{' '}
            {settings?.footer?.copyrightText ||
              'InterPracsys. Todos los derechos reservados.'}
          </p>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <span>{settings?.footer?.developedByText || 'Creado por'}</span>
            <a
              href={
                settings?.footer?.developerUrl ||
                'https://portfolio-santiago-chinellato.vercel.app/'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy font-bold hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              {settings?.footer?.developerName || 'Santiago Chinellato'}
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
}) => {
  // Extract platform name from href for aria-label (simple heuristic)
  const platform = href.includes('instagram')
    ? 'Instagram'
    : href.includes('linkedin')
    ? 'LinkedIn'
    : href.includes('facebook')
    ? 'Facebook'
    : href.includes('twitter')
    ? 'Twitter'
    : 'Social Media';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar nuestro perfil en ${platform}`}
      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-navy hover:border-brand-navy/30 hover:bg-brand-navy/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
};
