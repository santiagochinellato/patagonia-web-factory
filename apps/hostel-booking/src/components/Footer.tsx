'use client';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer id="contact" className="bg-stone-900 py-12 text-stone-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-stone-800 pb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              HOSTEL<span className="text-orange-500">.</span>
            </h3>
            <p className="text-sm">{t('address')}</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t('followUs')}
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs">{t('copyright')}</div>
      </div>
    </footer>
  );
}
