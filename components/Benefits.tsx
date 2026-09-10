'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Benefits = () => {
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

  const benefits: BenefitCard[] = [
    {
      title: 'Méně nejistoty',
      description: 'Získáte přehled o současném stavu dokumentace svého e-shopu.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Jasná doporučení',
      description: 'Nebudete muset hledat problémy sami. Dostanete přesnou zprávu co chybí.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Bez právnického žargonu',
      description: 'Výsledek je srozumitelný i pro běžného provozovatele e-shopu.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001c0 5.591 3.824 10.29 9 11.622m0-13c5.5 0 10 4.745 10 10.999 0 5.591-3.824 10.29-9 11.622" />
        </svg>
      ),
    },
    {
      title: 'Specifické pro váš prodej',
      description: 'Kontrola zohledňuje konkrétní typ vašeho e-shopu a jeho zákazníky.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} id="benefits" className="section-padding bg-background">
      <div className="container-max">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className={clsx('text-h2 mb-4 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Proč kontrolu udělat právě teď?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={clsx(
                'card card-hover p-8 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : '0ms',
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-blue to-accent flex items-center justify-center text-white mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-h5 mb-3">{benefit.title}</h3>
              <p className="text-body text-text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
