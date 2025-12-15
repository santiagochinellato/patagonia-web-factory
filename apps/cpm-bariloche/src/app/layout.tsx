import './global.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
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
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen font-sans bg-white text-gray-base antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
