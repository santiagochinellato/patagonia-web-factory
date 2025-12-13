'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '../lib/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div>
      <label className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-white hover:bg-white/20 transition-colors">
        <span className="sr-only">{t('label')}</span>
        <select
          defaultValue={locale}
          className="bg-transparent py-1 uppercase text-sm font-bold focus:outline-none cursor-pointer [&>option]:text-stone-900"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
          <option value="pt">PT</option>
        </select>
      </label>
    </div>
  );
}
