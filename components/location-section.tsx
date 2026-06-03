'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Where We&apos;ll Celebrate
          </h2>
          <div
            className="h-1 w-20 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #D8A5A5, #A67C6B)' }}
          />
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-xl overflow-hidden soft-shadow border-2"
          style={{ borderColor: 'rgba(212, 180, 131, 0.4)' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1234567890!2d76.2345!3d10.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5c1234567%3A0x1234567890abcdef!2sKanhiradukam!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>

        {/* Location Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl glass soft-shadow border-2"
            style={{
              borderColor: 'rgba(212, 180, 131, 0.4)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Address</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              St. George Church
              <br />
              Kanhiradukam
              <br />
              Kerala, India
            </p>
          </motion.div>

          {/* Directions */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            href="https://maps.google.com/?q=St+George+Church+Kanhiradukam"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl backdrop-blur-md border-2 text-center cursor-pointer hover:border-primary transition-all duration-300"
            style={{
              background: 'rgba(244, 212, 232, 0.3)',
              borderColor: 'rgba(196, 149, 111, 0.2)',
            }}
          >
            <h3 className="font-semibold text-foreground mb-2">Get Directions</h3>
            <p className="text-sm text-muted-foreground">Open in Google Maps</p>
          </motion.a>

          {/* Transportation Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl backdrop-blur-md border-2"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'rgba(196, 149, 111, 0.2)',
            }}
          >
            <h3 className="font-semibold text-foreground mb-3">Transportation</h3>
            <p className="text-sm text-muted-foreground">
              Parking will be available at the venue. We recommend carpooling when possible.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
