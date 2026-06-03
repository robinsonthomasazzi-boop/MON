'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  eventDate?: Date;
}

export function CountdownTimer({ eventDate = new Date('2026-06-29T00:00:00') }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = eventDate.getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({
    value,
    label,
    index,
  }: {
    value: number;
    label: string;
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div
        className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg glass soft-shadow border-2"
        style={{
          borderColor: 'rgba(212, 180, 131, 0.4)',
          background: 'rgba(244, 230, 215, 0.5)',
        }}
      >
        <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#A67C6B' }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-widest">
        {label}
      </p>
    </motion.div>
  );

  return (
    <div className="flex gap-4 sm:gap-6 justify-center items-end flex-wrap">
      <TimeUnit value={timeLeft.days} label="Days" index={0} />
      <div className="text-2xl font-bold mb-2" style={{ color: '#A67C6B' }}>:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" index={1} />
      <div className="text-2xl font-bold mb-2" style={{ color: '#A67C6B' }}>:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" index={2} />
      <div className="text-2xl font-bold mb-2" style={{ color: '#A67C6B' }}>:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" index={3} />
    </div>
  );
}
