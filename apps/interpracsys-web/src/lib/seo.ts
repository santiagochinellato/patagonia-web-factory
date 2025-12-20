
import { Metadata } from 'next';
import { IPSettings } from '../types/sanity';
import { urlFor } from './sanity';

export function generateSeoMetadata(settings: IPSettings): Metadata {
  const seo = settings?.seo;
  const general = settings?.general;

  const siteName = general?.siteName || 'InterPracsys';
  const title = seo?.metaTitle || `${siteName} | Software de Gestión para Laboratorios`;
  const description =
    seo?.metaDescription ||
    'InterPracsys es el LIS líder en Argentina. Conectividad total, gestión integral y soporte experto para laboratorios de análisis clínicos.';
  
  const keywords = seo?.metaKeywords || [
    'LIS',
    'Laboratorio',
    'Bioquímica',
    'Software de Laboratorio',
    'InterPracsys',
    'Argentina',
    'Gestión Clínica',
    'Autoanalizadores'
  ];

  const ogImage = seo?.openGraphImage
    ? urlFor(seo.openGraphImage).width(1200).height(630).url()
    : undefined;

  const favicon = seo?.favicon
    ? urlFor(seo.favicon).width(32).height(32).url()
    : '/favicon.ico';

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description: description,
    keywords: keywords,
    authors: [{ name: 'InterPracsys' }],
    creator: 'InterPracsys',
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: 'https://interpracsys.com', // Replace with actual URL if known or env var
      siteName: siteName,
      title: title,
      description: description,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ogImage ? [ogImage] : [],
    },
    icons: {
      icon: favicon,
      apple: favicon, // Could use a larger size for apple icon if specific field added
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
