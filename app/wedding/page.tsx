import { HeroSection } from '@/components/hero-section';
import { OurStorySection } from '@/components/our-story-section';
import { EventDetailsSection } from '@/components/event-details-section';
import { LocationSection } from '@/components/location-section';
import { FooterSection } from '@/components/footer-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alan & Aneena - Wedding Ceremony',
  description: 'Join us on 29 June 2026 as Alan and Aneena begin their beautiful journey together at St. George Church, Kanhiradukam.',
  openGraph: {
    title: 'Alan & Aneena - Wedding Ceremony',
    description: 'Join us for our wedding celebration at St. George Church, Kanhiradukam',
    images: [
      {
        url: 'https://alan-aneena.abm.mom/og-wedding.png',
        width: 1200,
        height: 630,
        alt: 'Alan & Aneena Wedding',
      },
    ],
  },
};

export default function WeddingPage() {
  return (
    <main className="w-full">
      <HeroSection />
      <OurStorySection />
      <EventDetailsSection />
      <LocationSection />
      <FooterSection />
    </main>
  );
}
