'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Church } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';

export function EventDetailsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Wedding Details
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
          className="mb-16 p-8 sm:p-10 rounded-2xl glass soft-shadow border-2"
          style={{
            borderColor: 'rgba(212, 180, 131, 0.3)',
          }}
        >
          <p className="text-center text-primary mb-6 font-semibold tracking-wide">Time Until Our Special Day</p>
          <CountdownTimer />
        </motion.div>

        {/* Details Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Wedding Date Card */}
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
                <h3 className="text-lg font-bold text-foreground mb-2">Wedding Date</h3>
                <p className="text-foreground font-semibold">29 June 2026</p>
                <p className="text-sm text-muted-foreground mt-1">Saturday</p>
              </div>
            </div>
          </motion.div>

          {/* Venue Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-xl glass soft-shadow border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
            style={{
              borderColor: 'rgba(212, 180, 131, 0.4)',
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg" style={{ background: 'rgba(216, 165, 165, 0.15)' }}>
                <Church className="w-6 h-6" style={{ color: '#A67C6B' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Venue</h3>
                <p className="text-foreground font-semibold">St. George Church</p>
                <p className="text-sm text-muted-foreground mt-1">Kanhiradukam</p>
              </div>
            </div>
          </motion.div>

          {/* Ceremony Location */}
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
                <h3 className="text-lg font-bold text-foreground mb-2">Location Details</h3>
                <p className="text-foreground leading-relaxed">
                  We will be celebrating our marriage at the beautiful St. George Church in Kanhiradukam.
                  Join us for a day filled with love, joy, and cherished moments with our family and
                  friends.
                </p>
                <a
                  href="https://maps.google.com/?q=St+George+Church+Kanhiradukam"
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
  );
}
