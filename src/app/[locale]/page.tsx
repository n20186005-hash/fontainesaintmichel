import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import NoticeBanner from '@/components/NoticeBanner';
import Hero from '@/components/Hero';
import RestorationUpdate from '@/components/RestorationUpdate';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import NearbyLandmarksSection from '@/components/NearbyLandmarksSection';
import VisitorAmenitiesSection from '@/components/VisitorAmenitiesSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import TopicExplore from '@/components/TopicExplore';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const editorial = await getTranslations('editorial');

  return (
    <>
      <Header />
      <main>
        <Hero />
        <NoticeBanner />
        <RestorationUpdate />
        <Intro />
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {editorial('title')}
            </h2>
            <div className="w-12 h-0.5 mb-5" style={{ background: 'var(--accent)' }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {editorial('text')}
            </p>
          </div>
        </section>
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <PhotoSpotsSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <NearbyLandmarksSection />
        <TopicExplore />
        <VisitorAmenitiesSection />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
