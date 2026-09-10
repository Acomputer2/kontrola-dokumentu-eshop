import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const title = 'Kontrola dokumentů e-shopu | Zjistěte, zda máte dokumentaci v pořádku';
  const description = 'Nechte si zkontrolovat klíčové dokumenty svého e-shopu. Získejte přehled o jejich aktuálním stavu a doporučení k úpravám za 300 Kč. Výsledek do 5 dnů.';
  const url = 'https://kontrola-dokumentu-eshop.cz';
  const image = `${url}/og-image.png`;

  return {
    title,
    description,
    keywords: [
      'kontrola dokumentů e-shopu',
      'e-shop dokumentace',
      'obchodní podmínky',
      'GDPR zásady',
      'kontrola legislativy',
      'e-commerce dokumenty',
      'právní kontrola e-shopu',
    ],
    metadataBase: new URL(url),
    canonical: url,
    openGraph: {
      type: 'website',
      locale: 'cs_CZ',
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: url,
    },
  };
};

export const schemaOrg = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kontrola dokumentů e-shopu',
    description: 'Služba pro kontrolu dokumentace e-shopů - obchodní podmínky, GDPR zásady, reklamační řád a další.',
    url: 'https://kontrola-dokumentu-eshop.cz',
    telephone: '+420777123456',
    email: 'info@priklad.cz',
    areaServed: 'CZ',
    serviceType: 'Legal Consultation',
    priceRange: 'CZK',
    offers: {
      '@type': 'Offer',
      price: '300',
      priceCurrency: 'CZK',
      description: 'Kontrola klíčové dokumentace e-shopu',
    },
  };
};
