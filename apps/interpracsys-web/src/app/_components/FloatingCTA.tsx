'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('support');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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
          onClick={scrollToContact}
          className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full bg-brand-gradient text-white font-bold shadow-2xl shadow-brand-navy/30 flex items-center gap-2 border border-white/20 backdrop-blur-md hover:scale-105 transition-transform"
          aria-label="Solicitar Demo"
        >
          <span>Solicitar Demo</span>
          <ChevronUp size={20} className="animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
