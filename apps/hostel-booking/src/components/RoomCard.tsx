'use client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/lib/navigation';

interface RoomContent {
  name: string;
  desc: string;
}

interface Room {
  id: string;
  type: 'private' | 'dorm';
  base_price: number;
  images: string[];
  content: Record<string, RoomContent>; // The JSONB field
}

export default function RoomCard({ room }: { room: Room }) {
  const locale = useLocale();
  const t = useTranslations('RoomCard');

  // 1. Extract content based on current locale
  // Fallback to 'es' or 'en' if key missing
  const content = room.content[locale] ||
    room.content['es'] || { name: 'Room', desc: '' };

  // 2. Format Currency (Satellite Task 1 Logic Placeholder)
  const currency = locale === 'es' ? 'ARS' : 'USD';
  // Use a simple formatter. Real app uses currency from context/cookie
  const price = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(room.base_price);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl h-full border border-stone-100 col-span-2">
      {/* Image Carousel / Hero */}
      <div className="relative h-64 w-full overflow-hidden bg-stone-200">
        {room.images?.[0] ? (
          <Image
            src={room.images[0]}
            alt={content.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-stone-400">
            No Image
          </div>
        )}
        <div className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-900 backdrop-blur-sm shadow-sm">
          {room.type === 'dorm' ? 'Social Vibes' : 'Quiet & Cozy'}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-bold text-teal-900 mb-3">
            {content.name}
          </h3>
          <p className="text-stone-600 line-clamp-4 text-base leading-relaxed">
            {content.desc}
          </p>
        </div>

        <div className="mt-8 flex items-end justify-between border-t border-stone-100 pt-6">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-1">
              {t('startPrice')}
            </span>
            <span className="text-2xl font-black text-orange-500">
              {price}{' '}
              <span className="text-sm font-medium text-stone-400">
                / {t('night')}
              </span>
            </span>
          </div>

          <button className="rounded-xl bg-teal-900 px-6 py-3 font-bold text-stone-50 transition-colors hover:bg-teal-800 shadow-lg shadow-teal-900/20 active:scale-95">
            {t('bookBtn')}
          </button>
        </div>
      </div>
    </div>
  );
}
