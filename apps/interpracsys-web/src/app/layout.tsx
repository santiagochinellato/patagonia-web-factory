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
  title: 'InterPracsys - Laboratory Information System',
  description:
    'Precision, Stability, and Modernization for Clinical Laboratories.',
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
