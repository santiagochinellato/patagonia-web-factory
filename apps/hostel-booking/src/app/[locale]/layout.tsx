import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../global.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-stone-50 font-sans text-stone-800 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
