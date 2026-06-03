'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  guests: string;
  dietary?: string;
  message?: string;
}

export function RSVPSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    guests: '1',
    dietary: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('RSVP Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', guests: '1', dietary: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            We Would Love Your Company
          </h2>
          <p className="text-muted-foreground text-lg">Please confirm your attendance</p>
          <div
            className="h-1 w-16 mx-auto rounded-full mt-4"
            style={{ background: 'linear-gradient(90deg, #c4956f, #d4a5a5)' }}
          />
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl backdrop-blur-md border-2"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(196, 149, 111, 0.3)',
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 0.6 }}>
                <Heart className="w-12 h-12 text-accent fill-accent mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Thank You for Your RSVP!
              </h3>
              <p className="text-muted-foreground">We look forward to celebrating with you!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary transition-all"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dietary Preferences */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Dietary Preferences
                </label>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                  placeholder="Any dietary restrictions or preferences"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Special Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  placeholder="Share a special message or wish for us"
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-opacity-90 transition-all"
              >
                Confirm My Attendance
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
