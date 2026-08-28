import { setRequestLocale } from 'next-intl/server';
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <NoticeBanner />
        <RestorationUpdate />
        <Intro />
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
        <VisitorAmenitiesSection />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
