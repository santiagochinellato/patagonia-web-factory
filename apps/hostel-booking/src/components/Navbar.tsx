'use client';
import { useTranslations } from 'next-intl';
import { Link } from '../lib/navigation';
import LocaleSwitcher from './LocaleSwitcher';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-teal-900/95 shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          HOSTEL<span className="text-orange-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-stone-200 hover:text-white transition-colors"
          >
            {t('home')}
          </Link>
          <Link
            href="#rooms"
            className="text-sm font-medium text-stone-200 hover:text-white transition-colors"
          >
            {t('rooms')}
          </Link>
          <Link
            href="#amenities"
            className="text-sm font-medium text-stone-200 hover:text-white transition-colors"
          >
            {t('services')}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-stone-200 hover:text-white transition-colors"
          >
            {t('contact')}
          </Link>

          <div className="pl-4 border-l border-stone-700">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
