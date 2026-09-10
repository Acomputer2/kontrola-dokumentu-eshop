'use client';

import { useEffect } from 'react';

const JsonLd = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Kontrola dokumentů e-shopu',
      description: 'Služba pro kontrolu dokumentace e-shopů - obchodní podmínky, GDPR zásady, reklamační řád a další.',
      url: 'https://kontrola-dokumentu-eshop.cz',
      telephone: '+420777123456',
      email: 'info@priklad.cz',
      areaServed: 'CZ',
      serviceType: 'Legal Consultation',
      offers: {
        '@type': 'Offer',
        price: '300',
        priceCurrency: 'CZK',
        description: 'Kontrola klíčové dokumentace e-shopu',
        availability: 'https://schema.org/InStock',
        url: 'https://kontrola-dokumentu-eshop.cz',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default JsonLd;
