'use client';

import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

export function OurStorySection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
          <div className="flex justify-center mb-4">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity }}>
              <Flower2 className="w-8 h-8" style={{ color: '#A67C6B' }} />
            </motion.div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Story</h2>
          <div
            className="h-1 w-20 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #D8A5A5, #A67C6B)' }}
          />
        </motion.div>

        {/* Story Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Story Cards */}
          {[
            {
              title: 'Our Beginning',
              description: 'Our love story began with a chance meeting that felt like destiny. Every moment since has been a gift.',
            },
            {
              title: 'Growing Together',
              description: 'Through laughter, support, and endless love, we discovered our soulmate in each other.',
            },
            {
              title: 'Forever Starts Now',
              description: 'As we join our families and hearts, we embark on our greatest adventure together.',
            },
          ].map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl glass soft-shadow border-2 text-center hover:shadow-lg transition-all"
              style={{
                borderColor: 'rgba(212, 180, 131, 0.4)',
              }}
            >
              <div className="flex justify-center mb-4">
                <Flower2 className="w-6 h-6" style={{ color: '#D8A5A5' }} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{story.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Story Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 sm:p-10 rounded-2xl glass soft-shadow border-2"
          style={{
            borderColor: 'rgba(212, 180, 131, 0.4)',
            background: 'rgba(244, 230, 215, 0.4)',
          }}
        >
          <p className="text-lg text-foreground leading-relaxed font-light">
            A Christian union built on faith, love, and commitment. We believe that our marriage is not
            just a celebration of our love for each other, but also a testament to God&apos;s grace and
            blessings in our lives. We invite you to witness and celebrate this sacred union as we
            promise to love, cherish, and support each other through all the seasons of life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
