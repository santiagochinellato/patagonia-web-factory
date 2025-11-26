import './global.css';

import { SEO_CONFIG } from './data';

export const metadata = {
  title: SEO_CONFIG.defaultSeo.title,
  description: SEO_CONFIG.defaultSeo.description,
  keywords: SEO_CONFIG.defaultSeo.keywords,
  openGraph: {
    title: SEO_CONFIG.defaultSeo.title,
    description: SEO_CONFIG.defaultSeo.description,
    images: [
      {
        url: SEO_CONFIG.defaultSeo.image,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.defaultSeo.siteName,
      },
    ],
    locale: SEO_CONFIG.defaultSeo.locale,
    type: 'website',
  },
  twitter: {
    card: SEO_CONFIG.defaultSeo.twitter.cardType,
    site: SEO_CONFIG.defaultSeo.twitter.handle,
    title: SEO_CONFIG.defaultSeo.title,
    description: SEO_CONFIG.defaultSeo.description,
    images: [SEO_CONFIG.defaultSeo.image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
