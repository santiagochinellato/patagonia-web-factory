'use client';
import { motion } from 'framer-motion';

export default function HeroVibe({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle: string;
  cta: string;
}) {
  return (
    <div className="relative flex h-[90vh] items-center justify-center overflow-hidden bg-stone-900">
      {/* Video Background Placeholder - In prod use real video */}
      <div className="absolute inset-0 h-full w-full bg-teal-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 to-stone-900/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-xl font-light text-stone-100 md:text-2xl drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-shadow hover:shadow-orange-500/50"
        >
          {cta}
        </motion.button>
      </div>
    </div>
  );
}
