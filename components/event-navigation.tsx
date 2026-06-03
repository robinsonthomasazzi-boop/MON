'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function EventNavigation() {
  const pathname = usePathname();
  
  const isWedding = pathname.includes('/wedding');
  const isEngagement = pathname.includes('/engagement');

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b-2"
      style={{ borderColor: 'rgba(212, 180, 131, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8 py-4">
          {/* Wedding Link */}
          <Link href="/wedding" className="relative group">
            <motion.span
              className="text-lg font-semibold transition-colors"
              style={{
                color: isWedding ? '#A67C6B' : '#8b8b8b',
              }}
              whileHover={{ color: '#A67C6B' }}
            >
              Wedding Ceremony
            </motion.span>
            {isWedding && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ background: '#A67C6B' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </Link>

          {/* Engagement Link */}
          <Link href="/engagement" className="relative group">
            <motion.span
              className="text-lg font-semibold transition-colors"
              style={{
                color: isEngagement ? '#A67C6B' : '#8b8b8b',
              }}
              whileHover={{ color: '#A67C6B' }}
            >
              Engagement Celebration
            </motion.span>
            {isEngagement && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ background: '#A67C6B' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
