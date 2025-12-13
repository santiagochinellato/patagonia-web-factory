'use client';
import { useTranslations } from 'next-intl';

export default function Amenities() {
  const t = useTranslations('Amenities');

  const items = [
    {
      key: 'wifi',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" x2="12.01" y1="20" y2="20" />
        </svg>
      ),
    },
    {
      key: 'bar',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 21h8" />
          <path d="M12 21v-8" />
          <path d="M6.5 7a6.5 6.5 0 0 0 11 0" />
          <path d="M6 20h12" />
          <path d="M6 20v-2a6 6 0 1 1 12 0v2" />
          <line x1="12" x2="12" y1="4" y2="4" />
        </svg>
        // Placeholder looking glass/cocktail
      ),
    },
    {
      key: 'tours',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 15 6 6m-6-6v4.8m0-4.8H9m0 0-6 6m6-6V9.6m0 5.4h4.8M9 9l6-6" />
          <path d="M12 3v18" />
        </svg>
        // Placeholder map/compass
      ),
    },
    {
      key: 'kitchen',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2" />
          <path d="M21 15v5a2 2 0 0 1-2 2H5" />
        </svg>
        // Fork/Kitchen
      ),
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-12">
          {t('title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 rounded-full bg-stone-100 text-teal-900 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-stone-700">{t(item.key)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
