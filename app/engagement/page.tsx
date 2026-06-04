'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar } from 'lucide-react';
import { CountdownTimer } from '@/components/countdown-timer';
import { FooterSection } from '@/components/footer-section';
import type { Metadata } from 'next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function EngagementPage() {
  return (
    <main className="w-full">
      {/* Hero Section - Engagement */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url(/wedding-hero.png)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/21" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full glass soft-shadow"
            style={{
              border: '1.5px solid rgba(212, 180, 131, 0.4)',
            }}
          >
            <span className="text-sm sm:text-base font-semibold tracking-wide" style={{ color: '#D4B483' }}>
              ✨ ENGAGEMENT CELEBRATION ✨
            </span>
          </motion.div>

          {/* Names */}
          <motion.div className="mb-6 sm:mb-8">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-white/95 mb-8 sm:mb-10 font-light max-w-2xl mx-auto text-shadow-sm leading-relaxed"
          >
            &quot;Two souls, one promise, a beautiful beginning. Join us as we celebrate our engagement and the journey ahead.&quot;
          </motion.p>

          {/* Date Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block px-8 sm:px-10 py-4 sm:py-5 rounded-xl glass soft-shadow backdrop-blur-lg"
            style={{
              border: '2px solid rgba(212, 180, 131, 0.5)',
              background: 'rgba(244, 230, 215, 0.4)',
            }}
          >
            <p className="text-2xl sm:text-3xl font-bold tracking-wide" style={{ color: '#A67C6B' }}>
              27 June 2026
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Engagement Details Section */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Celebration Details
            </h2>
            <div
              className="h-1 w-20 mx-auto rounded-full"
              style={{ background: 'linear-gradient(90deg, #A67C6B, #D8A5A5)' }}
            />
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 p-8 sm:p-10 rounded-2xl glass soft-shadow border-2"
            style={{
              borderColor: 'rgba(212, 180, 131, 0.3)',
            }}
          >
            <p className="text-center text-primary mb-6 font-semibold tracking-wide">Time Until Our Engagement Celebration</p>
            <CountdownTimer eventDate={new Date('2026-06-27')} />
          </motion.div>

          {/* Details Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Date Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-xl glass soft-shadow border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
              style={{
                borderColor: 'rgba(212, 180, 131, 0.4)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(216, 165, 165, 0.15)' }}>
                  <Calendar className="w-6 h-6" style={{ color: '#A67C6B' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Engagement Date</h3>
                  <p className="text-foreground font-semibold">27 June 2026</p>
                  <p className="text-sm text-muted-foreground mt-1">Saturday</p>
                </div>
              </div>
            </motion.div>

            {/* Venue Card - Ceremony */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-xl glass soft-shadow border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
              style={{
                borderColor: 'rgba(212, 180, 131, 0.4)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(216, 165, 165, 0.15)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#A67C6B' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Ceremony</h3>
                  <p className="text-foreground font-semibold">St. George Church</p>
                  <p className="text-sm text-muted-foreground mt-1">Paduppu</p>
                </div>
              </div>
            </motion.div>

            {/* Reception Venue */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-xl glass soft-shadow border-2 hover:border-primary transition-all duration-300 hover:shadow-xl md:col-span-2"
              style={{
                borderColor: 'rgba(212, 180, 131, 0.4)',
                background: 'rgba(244, 230, 215, 0.4)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(212, 180, 131, 0.25)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#A67C6B' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Reception Venue</h3>
                  <p className="text-foreground leading-relaxed">
                    PKN Paradise Auditorium, Paduppu. We will celebrate this joyous occasion with the people closest to our hearts.
                  </p>
                  <a
                    href="https://maps.google.com/?q=PKN+Paradise+Auditorium+Paduppu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                    style={{
                      background: '#A67C6B',
                      color: '#FFFDF8',
                    }}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
