import './global.css';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

import { client } from '../lib/sanity';
import { SETTINGS_QUERY } from '../lib/queries';
import { IPSettings } from '../types/sanity';
import { urlFor } from '../lib/sanity';

export async function generateMetadata() {
  const settings: IPSettings = await client.fetch(SETTINGS_QUERY);

  const title = settings?.general?.siteName
    ? {
        default: `${settings.general.siteName} | Sistema de Gestión para Laboratorios`,
        template: `%s | ${settings.general.siteName}`,
      }
    : {
        default: 'InterPracsys | Sistema de Gestión para Laboratorios (LIS)',
        template: '%s | InterPracsys',
      };

  const description =
    settings?.footer?.description ||
    'Transforme su laboratorio clínico con InterPracsys. LIS líder en Argentina con conectividad total, validación automática y soporte 24/7.';

  // This image logic could be improved if we had a dedicated OG image field in settings.
  // For now using logo or fallback.
  const images = settings?.general?.logo
    ? [urlFor(settings.general.logo).url()]
    : ['https://interpracsys.com/og-image.jpg'];

  return {
    title,
    description,
    keywords: [
      'LIS',
      'Sistema de Gestión de Laboratorio',
      'Software Laboratorio Análisis Clínicos',
      'InterPracsys',
      'Sistemas Bioquímicos',
      'Autoanalizadores',
      'Validación Automática',
      'Gestión Clínica',
      'Argentina',
      'Tecnología Médica',
    ],
    authors: [
      { name: 'InterPracsys Team' },
      {
        name: 'Santiago Chinellato',
        url: 'https://portfolio-santiago-chinellato.vercel.app/',
      },
    ],
    creator: 'Santiago Chinellato',
    publisher: 'InterPracsys',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: title.default,
      description,
      url: 'https://interpracsys.com',
      siteName: settings?.general?.siteName || 'InterPracsys',
      locale: 'es_AR',
      type: 'website',
      images: [
        {
          url: images[0],
          width: 1200,
          height: 630,
          alt: `${settings?.general?.siteName || 'InterPracsys'} Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title.default,
      description,
      images: images,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'technology',
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} antialiased bg-[#fff]`}
    >
      <body className="min-h-screen text-slate-600 font-sans">{children}</body>
    </html>
  );
}
