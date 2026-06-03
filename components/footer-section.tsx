'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export function FooterSection() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio playback failed');
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* Decorative Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="h-1 w-full origin-center"
        style={{ background: 'linear-gradient(90deg, transparent, #A67C6B, transparent)' }}
      />

      {/* Footer */}
      <footer className="bg-background py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="text-center"
          >
            {/* Decorative Flower */}
            <motion.div
              variants={itemVariants}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex justify-center mb-6"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl">✿</div>
            </motion.div>

            {/* Main Message */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                With Love,
              </p>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#A67C6B' }}>Alan & Aneena</p>
            </motion.div>

            {/* Decorative Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div
                className="h-px flex-1"
                style={{ background: 'linear-gradient(90deg, transparent, #A67C6B)' }}
              />
              <span className="text-2xl">❤️</span>
              <div
                className="h-px flex-1"
                style={{ background: 'linear-gradient(90deg, #A67C6B, transparent)' }}
              />
            </motion.div>

            {/* Quote */}
            <motion.p variants={itemVariants} className="text-muted-foreground italic mb-8">
              &quot;Love is patient, love is kind...&quot; - 1 Corinthians 13:4
            </motion.p>

            {/* Music Toggle */}
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <motion.button
                onClick={toggleMusic}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass border-2 transition-all duration-300"
                style={{
                  background: isMusicPlaying
                    ? 'rgba(216, 165, 165, 0.3)'
                    : 'rgba(212, 180, 131, 0.15)',
                  borderColor: isMusicPlaying ? 'rgba(216, 165, 165, 0.5)' : 'rgba(212, 180, 131, 0.4)',
                }}
              >
                {isMusicPlaying ? (
                  <Volume2 className="w-5 h-5" style={{ color: '#D8A5A5' }} />
                ) : (
                  <VolumeX className="w-5 h-5" style={{ color: '#A67C6B' }} />
                )}
              </motion.button>
              <audio
                ref={audioRef}
                loop
                src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
              />
            </motion.div>

            {/* Copyright */}
            <motion.p variants={itemVariants} className="text-xs sm:text-sm text-muted-foreground">
              © 2026 Alan & Aneena. All moments are precious.
            </motion.p>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl"
          style={{ background: 'rgba(216, 165, 165, 0.3)' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl"
          style={{ background: 'rgba(212, 180, 131, 0.2)' }}
        />
      </footer>
    </>
  );
}
