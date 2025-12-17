import './global.css';

import { Inter, Nunito } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true, // Preload for faster initial render
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-heading', // Defined as 'heading' in tailwind config mapping to --font-heading? Check config.
  display: 'swap',
});

export const metadata = {
  title: 'CPM Bariloche | Centro Pediátrico Melipal',
  description: 'Atención pediátrica y medicina general en Bariloche.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${nunito.variable}`}>
      <body className="flex flex-col min-h-screen font-body bg-white text-text-main antialiased">
        {children}
      </body>
    </html>
  );
}
