import { HeroSection } from '@/components/hero-section';
import { OurStorySection } from '@/components/our-story-section';
import { EventDetailsSection } from '@/components/event-details-section';
import { LocationSection } from '@/components/location-section';
import { FooterSection } from '@/components/footer-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alan & Aneena - Wedding Ceremony',

  description:
    'Join us on 29 June 2026 as Alan and Aneena begin their beautiful journey together.',

  openGraph: {
    title: 'Alan & Aneena - Wedding Ceremony',

    description:
      'Join us for our wedding celebration at St. George Church, Kanhiradukam',

    url: 'https://alan-aneena.abm.mom/wedding',

    siteName: 'Alan & Aneena Wedding',

    type: 'website',

    images: [
      {
        url: 'https://alan-aneena.abm.mom/wedding-share-2026.png',
        width: 1200,
        height: 630,
        alt: 'Alan & Aneena Wedding',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Alan & Aneena - Wedding Ceremony',

    description:
      'Join us for our wedding celebration at St. George Church, Kanhiradukam',

    images: [
      'https://alan-aneena.abm.mom/wedding-share-2026.png',
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