'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState, useCallback } from 'react';
import { useLocale } from 'next-intl';

const MAPS_SHARE_URL = 'https://maps.app.goo.gl/34Ufnj4GUV4RybQx7';

const photoAltMap: Record<string, { src: string; alt: string }[]> = {
  fr: [
    { src: '/gallery/fontainesaintmichel (1).jpg', alt: 'Fontaine Saint-Michel - Vue principale à Paris, France' },
    { src: '/gallery/fontainesaintmichel (2).jpg', alt: 'Statue de l\'Archange Michel, Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (3).jpg', alt: 'Détail des colonnes corinthiennes, Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (4).jpg', alt: 'Illumination nocturne, Fontaine Saint-Michel Paris' },
    { src: '/gallery/fontainesaintmichel (5).jpg', alt: 'Statues de la Loi et de la Justice, Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (6).jpg', alt: 'Place Saint-Michel près de la Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (7).jpg', alt: 'Bassin de la Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (8).jpg', alt: 'Vue depuis le Boulevard Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (9).jpg', alt: 'Détail sculpté de la Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (10).jpg', alt: 'Groupe sculptural de l\'Archange, Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (11).jpg', alt: 'Angle latéral de la Fontaine Saint-Michel, Paris' },
    { src: '/gallery/fontainesaintmichel (12).jpg', alt: 'Archange terrassant le démon, Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (13).jpg', alt: 'Fontaine Saint-Michel et façons haussmanniennes' },
    { src: '/gallery/fontainesaintmichel (14).jpg', alt: 'Visiteurs à la Fontaine Saint-Michel, Paris' },
    { src: '/gallery/fontainesaintmichel (15).jpg', alt: 'Détail du socle de la Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (16).jpg', alt: 'Fontaine Saint-Michel au crépuscule, Paris' },
    { src: '/gallery/fontainesaintmichel (17).jpg', alt: 'Statues du couronnement, Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (18).jpg', alt: 'Fontaine Saint-Michel près de la Seine' },
    { src: '/gallery/fontainesaintmichel (19).jpg', alt: 'Rue parisienne et Fontaine Saint-Michel' },
  ],
  en: [
    { src: '/gallery/fontainesaintmichel (1).jpg', alt: 'Fontaine Saint-Michel - Main view in Paris, France' },
    { src: '/gallery/fontainesaintmichel (2).jpg', alt: 'Archangel Michael statue near Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (3).jpg', alt: 'Corinthian columns detail of Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (4).jpg', alt: 'Night illumination at Fontaine Saint-Michel, Paris' },
    { src: '/gallery/fontainesaintmichel (5).jpg', alt: 'Law and Justice statues at Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (6).jpg', alt: 'Place Saint-Michel near Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (7).jpg', alt: 'Basin of Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (8).jpg', alt: 'Boulevard view near Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (9).jpg', alt: 'Sculpture detail of Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (10).jpg', alt: 'Archangel sculptural group at Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (11).jpg', alt: 'Side angle of Fontaine Saint-Michel, Paris' },
    { src: '/gallery/fontainesaintmichel (12).jpg', alt: 'Archangel slaying the devil, Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (13).jpg', alt: 'Fontaine Saint-Michel with Haussmann facades' },
    { src: '/gallery/fontainesaintmichel (14).jpg', alt: 'Visitors at Fontaine Saint-Michel, Paris' },
    { src: '/gallery/fontainesaintmichel (15).jpg', alt: 'Plinth detail of Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (16).jpg', alt: 'Fontaine Saint-Michel at dusk, Paris' },
    { src: '/gallery/fontainesaintmichel (17).jpg', alt: 'Crowning statues at Fontaine Saint-Michel' },
    { src: '/gallery/fontainesaintmichel (18).jpg', alt: 'Fontaine Saint-Michel near the Seine' },
    { src: '/gallery/fontainesaintmichel (19).jpg', alt: 'Paris streetscape with Fontaine Saint-Michel' },
  ],
  zh: [
    { src: '/gallery/fontainesaintmichel (1).jpg', alt: '圣米歇尔喷泉 Fontaine Saint-Michel - 法国巴黎主景视角' },
    { src: '/gallery/fontainesaintmichel (2).jpg', alt: '圣米歇尔喷泉之大天使米歇尔雕像' },
    { src: '/gallery/fontainesaintmichel (3).jpg', alt: '圣米歇尔喷泉之科林斯柱细节' },
    { src: '/gallery/fontainesaintmichel (4).jpg', alt: '巴黎圣米歇尔喷泉之夜景灯光' },
    { src: '/gallery/fontainesaintmichel (5).jpg', alt: '圣米歇尔喷泉之法律与正义雕像' },
    { src: '/gallery/fontainesaintmichel (6).jpg', alt: '圣米歇尔喷泉旁的圣米歇尔广场' },
    { src: '/gallery/fontainesaintmichel (7).jpg', alt: '圣米歇尔喷泉之喷泉水池' },
    { src: '/gallery/fontainesaintmichel (8).jpg', alt: '圣米歇尔喷泉大道视角' },
    { src: '/gallery/fontainesaintmichel (9).jpg', alt: '圣米歇尔喷泉雕刻细节' },
    { src: '/gallery/fontainesaintmichel (10).jpg', alt: '圣米歇尔喷泉之大天使雕塑群' },
    { src: '/gallery/fontainesaintmichel (11).jpg', alt: '巴黎圣米歇尔喷泉侧面视角' },
    { src: '/gallery/fontainesaintmichel (12).jpg', alt: '圣米歇尔喷泉之大天使战魔鬼' },
    { src: '/gallery/fontainesaintmichel (13).jpg', alt: '圣米歇尔喷泉与奥斯曼建筑' },
    { src: '/gallery/fontainesaintmichel (14).jpg', alt: '巴黎游客与圣米歇尔喷泉' },
    { src: '/gallery/fontainesaintmichel (15).jpg', alt: '圣米歇尔喷泉基座细节' },
    { src: '/gallery/fontainesaintmichel (16).jpg', alt: '巴黎黄昏中的圣米歇尔喷泉' },
    { src: '/gallery/fontainesaintmichel (17).jpg', alt: '圣米歇尔喷泉顶部雕塑' },
    { src: '/gallery/fontainesaintmichel (18).jpg', alt: '塞纳河畔的圣米歇尔喷泉' },
    { src: '/gallery/fontainesaintmichel (19).jpg', alt: '巴黎街景与圣米歇尔喷泉' },
  ],
};

export default function Gallery() {
  const t = useTranslations('gallery');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const locale = useLocale();
  const photos = photoAltMap[locale] || photoAltMap.en;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {(showAll ? photos : photos.slice(0, 8)).map((photo, i) => (
                <div
                  key={i}
                  className={`gallery-item relative group cursor-pointer ${i === 0 && !showAll ? 'col-span-2 row-span-2' : ''}`}
                  onClick={() => {
                    setCurrentIndex(i);
                    openLightbox();
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: i === 0 ? '400px' : '180px' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="flex justify-center mt-6 gap-4 items-center">
              {!showAll && photos.length > 8 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-sm hover:underline font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('showAll') || `View All ${photos.length} Photos`}
                </button>
              )}
              {showAll && (
                <button
                  onClick={() => setShowAll(false)}
                  className="text-sm hover:underline font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('showLess') || 'Show Less'}
                </button>
              )}
              <a
                href={MAPS_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
