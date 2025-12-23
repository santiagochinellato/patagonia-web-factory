'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IPSettings } from '../../types/sanity';

export const FloatingCTA = ({ settings }: { settings?: IPSettings }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ctaText = settings?.navigation?.cta?.text || 'Solicitar Demo';

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactPhone =
    settings?.footer?.contactInfo?.supportPhone || '+5493815570606';
  const sanitizePhone = (phone: string) => phone.replace(/\D/g, '');
  const contactLink = `https://wa.me/${sanitizePhone(contactPhone)}`;

  const handleClick = () => {
    window.open(contactLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full bg-brand-gradient text-white font-bold shadow-2xl shadow-brand-navy/30 flex items-center gap-2 border border-white/20 backdrop-blur-md hover:scale-105 transition-transform"
          aria-label={ctaText}
        >
          <span>{ctaText}</span>
          <ChevronUp size={20} className="animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
