'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/wedding-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay - 32% opacity for readability */}
      <div className="absolute inset-0 bg-black/32" />

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl"
        style={{ background: 'rgba(196, 149, 111, 0.3)' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl"
        style={{ background: 'rgba(244, 212, 232, 0.2)' }}
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
      >
        {/* Save The Date Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full glass soft-shadow"
          style={{
            border: '1.5px solid rgba(212, 180, 131, 0.4)',
          }}
        >
          <span className="text-sm sm:text-base font-semibold tracking-wide" style={{ color: '#D4B483' }}>
            ✨ SAVE THE DATE ✨
          </span>
        </motion.div>

        {/* Names */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <h1 className="text-6xl sm:text-8xl font-bold text-shadow-md mb-3 sm:mb-4" style={{ color: '#FFFDF8' }}>
            Alan
          </h1>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center my-4 sm:my-6"
          >
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-current" style={{ color: '#D8A5A5' }} />
          </motion.div>
          <h1 className="text-6xl sm:text-8xl font-bold text-shadow-md" style={{ color: '#FFFDF8' }}>
            Aneena
          </h1>
        </motion.div>

        {/* Quote */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-white/95 mb-8 sm:mb-10 font-light max-w-2xl mx-auto text-shadow-sm leading-relaxed"
        >
          &quot;We found love in each other, and now we begin a beautiful journey together. With joyful
          hearts, we invite you to celebrate the day our two lives become one.&quot;
        </motion.p>

        {/* Date Highlight - Champagne Glass Effect */}
        <motion.div
          variants={itemVariants}
          className="inline-block px-8 sm:px-10 py-4 sm:py-5 rounded-xl glass soft-shadow backdrop-blur-lg"
          style={{
            border: '2px solid rgba(212, 180, 131, 0.5)',
            background: 'rgba(244, 230, 215, 0.4)',
          }}
        >
          <p className="text-2xl sm:text-3xl font-bold tracking-wide" style={{ color: '#A67C6B' }}>
            29 June 2026
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 flex justify-center"
        >
          <div className="text-white/60 text-sm">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
