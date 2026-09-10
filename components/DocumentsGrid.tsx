'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface DocumentCard {
  number: string;
  title: string;
  description: string;
}

const DocumentsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const documents: DocumentCard[] = [
    {
      number: '01',
      title: 'Obchodní podmínky',
      description: 'Prověříme jejich soulad s legislativou, logiku a srozumitelnost pro zákazníky.',
    },
    {
      number: '02',
      title: 'Reklamační řád',
      description: 'Ověříme, že splňuje zákonné požadavky a pomáhá předcházet zbytečným sporům.',
    },
    {
      number: '03',
      title: 'Formulář pro odstoupení',
      description: 'Zkontrolujeme formální správnost a povinné údaje podle zákona.',
    },
    {
      number: '04',
      title: 'GDPR zásady',
      description: 'Posoudíme informace týkající se zpracování osobních údajů návštěvníků.',
    },
    {
      number: '05',
      title: 'Reklamační protokol',
      description: 'Zhodnotíme, zda dokument podporuje efektivní řešení reklamací.',
    },
    {
      number: '06',
      title: 'Informace o cookies',
      description: 'Prověříme informace o cookies a možnost volby pro návštěvníky.',
    },
  ];

  return (
    <section ref={ref} id="documents" className="section-padding bg-background">
      <div className="container-max">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className={clsx('text-h2 mb-4 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Co pro vás zkontrolujeme?
          </h2>
          <p className={clsx('text-body text-text-muted transition-all duration-700 delay-100', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Prověříme klíčové dokumenty, se kterými se zákazník vašeho e-shopu setkává.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className={clsx(
                'card card-hover p-6 md:p-8 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: isVisible ? `${idx * 80}ms` : '0ms',
              }}
            >
              <div className="mb-6">
                <p className="text-5xl font-bold text-primary-blue opacity-20 leading-none">{doc.number}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center text-accent mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h-3a1 1 0 000-2 2 2 0 00-2-2H6a2 2 0 00-2 2v1H4zm7 4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-h5 mb-3">{doc.title}</h3>
              <p className="text-body text-text-muted leading-relaxed">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsGrid;
