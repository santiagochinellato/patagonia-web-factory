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

export const metadata = {
  title: {
    default: 'InterPracsys | Sistema de Gestión para Laboratorios (LIS)',
    template: '%s | InterPracsys',
  },
  description:
    'Transforme su laboratorio clínico con InterPracsys. LIS líder en Argentina con conectividad total, validación automática y soporte 24/7. Solicite su demo hoy.',
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
    title: 'InterPracsys | Innovación en Gestión de Laboratorios',
    description:
      'Optimice su flujo de trabajo con el software más robusto del mercado. Conectividad universal con autoanalizadores y trazabilidad total.',
    url: 'https://interpracsys.com',
    siteName: 'InterPracsys',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: 'https://interpracsys.com/og-image.jpg', // Placeholder, user should provide real one eventually
        width: 1200,
        height: 630,
        alt: 'InterPracsys Dashboard Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InterPracsys | LIS de Vanguardia',
    description:
      'La solución definitiva para la gestión de laboratorios clínicos. Eficiencia, control y soporte real.',
    images: ['https://interpracsys.com/twitter-image.jpg'], // Placeholder
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
