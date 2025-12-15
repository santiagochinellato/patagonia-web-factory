import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../global.css';

import { getTranslations } from 'next-intl/server';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://hostel-vanguardia.com';

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
        pt: `${baseUrl}/pt`,
      },
    },
  };
}

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
