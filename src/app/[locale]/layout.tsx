import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import {
  BASE_URL,
  HERO_IMAGE,
  MAPS_SHARE_URL,
  PARIS_CITY_URL,
  buildAlternates,
  localeUrl,
} from '@/lib/seo';
import type { Metadata } from 'next';

const LATITUDE = 48.8532372;
const LONGITUDE = 2.3437736;
const POSTAL_CODE = '75005';
const COUNTRY_CODE = 'FR';

const SEO_DATA = {
  fr: {
    name: 'Fontaine Saint-Michel',
    alternateName: ['Fontaine Saint-Michel', 'Fontaine Saint-Michel Paris'],
    description: 'Guide complet du visiteur pour Fontaine Saint-Michel à Paris, Île-de-France, France.',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
    govtTourism: 'https://www.visitparisregion.com/fr',
    faqItems: [
      {
        question: 'Où se situe Fontaine Saint-Michel ?',
        answer: 'Fontaine Saint-Michel se situe Place Saint-Michel, dans le 5e arrondissement de Paris, Île-de-France, France. (Adresse : Pl. Saint-Michel, 75005 Paris, France)',
      },
      {
        question: 'La visite de Fontaine Saint-Michel est-elle gratuite ?',
        answer: "Oui, Fontaine Saint-Michel est un espace public entièrement gratuit et accessible toute l'année, 24h/24 et 7j/7. Aucun billet n'est requis.",
      },
    ],
    ogImageAlt: 'Fontaine Saint-Michel à Paris, France',
  },
  en: {
    name: 'Fontaine Saint-Michel',
    alternateName: ['Fontaine Saint-Michel', 'Fontaine Saint-Michel Paris'],
    description: 'Comprehensive visitor guide to Fontaine Saint-Michel in Paris, Île-de-France, France.',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
    govtTourism: 'https://www.visitparisregion.com/en',
    faqItems: [
      {
        question: 'Where is Fontaine Saint-Michel located?',
        answer: 'Fontaine Saint-Michel is located on Place Saint-Michel in the 5th arrondissement of Paris, Île-de-France, France. (Address: Pl. Saint-Michel, 75005 Paris, France)',
      },
      {
        question: 'Is Fontaine Saint-Michel free to visit?',
        answer: 'Yes, Fontaine Saint-Michel is a public space and is free to visit year-round, 24 hours a day, 7 days a week. No ticket is required.',
      },
    ],
    ogImageAlt: 'Fontaine Saint-Michel in Paris, France',
  },
  zh: {
    name: '圣米歇尔喷泉 Fontaine Saint-Michel',
    alternateName: ['圣米歇尔喷泉', 'Fontaine Saint-Michel', '巴黎圣米歇尔喷泉'],
    description: '法国法兰西岛大区巴黎圣米歇尔喷泉（Fontaine Saint-Michel）综合游客指南。',
    addressLocality: '巴黎',
    addressRegion: '法兰西岛大区',
    addressCountry: 'FR',
    govtTourism: 'https://www.visitparisregion.com/cn',
    faqItems: [
      {
        question: '圣米歇尔喷泉位于哪里？',
        answer: '圣米歇尔喷泉（Fontaine Saint-Michel）位于法国法兰西岛大区巴黎第五区圣米歇尔广场。（地址：Pl. Saint-Michel, 75005 Paris, France）',
      },
      {
        question: '参观圣米歇尔喷泉是否免费？',
        answer: '是的，圣米歇尔喷泉是公共空间，全年免费开放，24小时全天候均可参观，无需购票。',
      },
    ],
    ogImageAlt: '法国巴黎圣米歇尔喷泉（Fontaine Saint-Michel）',
  },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const seo = SEO_DATA[locale as keyof typeof SEO_DATA] || SEO_DATA.en;

  const selfUrl = localeUrl(locale);
  const ogLocale = locale === 'zh' ? 'zh_CN' : locale === 'en' ? 'en_US' : 'fr_FR';

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    metadataBase: new URL(BASE_URL),
    alternates: buildAlternates(locale),
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: seo.name,
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: HERO_IMAGE,
          width: 1200,
          height: 800,
          alt: seo.ogImageAlt,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [HERO_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const seo = SEO_DATA[locale as keyof typeof SEO_DATA] || SEO_DATA.en;
  const langAttr = locale === 'zh' ? 'zh-CN' : locale === 'fr' ? 'fr' : 'en';
  const pageUrl = localeUrl(locale);

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: `${BASE_URL}/`,
    name: 'Fontaine Saint-Michel',
    inLanguage: routing.locales,
    publisher: { '@id': `${BASE_URL}/#attraction` },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: (messages as any).meta?.title,
    description: (messages as any).meta?.description,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#attraction` },
    inLanguage: langAttr,
  };

  const attractionSchema = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LandmarksOrHistoricalBuildings'],
    '@id': `${BASE_URL}/#attraction`,
    name: seo.name,
    alternateName: seo.alternateName,
    description: seo.description,
    url: `${BASE_URL}/`,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pl. Saint-Michel',
      addressLocality: seo.addressLocality,
      addressRegion: seo.addressRegion,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [
      MAPS_SHARE_URL,
      PARIS_CITY_URL,
      'https://fr.wikipedia.org/wiki/Fontaine_Saint-Michel',
      'https://www.wikidata.org/wiki/Q3076727',
      seo.govtTourism,
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seo.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <html lang={langAttr} suppressHydrationWarning>
      <head>
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:image:alt" content={seo.ogImageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/jpeg" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .entity-em {
                font-weight: 600;
                color: var(--text-primary);
                letter-spacing: 0.002em;
              }
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
