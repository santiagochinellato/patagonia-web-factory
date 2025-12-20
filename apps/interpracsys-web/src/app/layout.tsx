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
import { generateSeoMetadata } from '../lib/seo';

export async function generateMetadata() {
  const settings: IPSettings = await client.fetch(SETTINGS_QUERY);
  return generateSeoMetadata(settings);
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
