'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const PricingSection = () => {
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

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <h2 className={clsx(
            'text-h2 mb-8 text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}>
            Za 300 Kč zjistíte, na čem jste.
          </h2>

          <div className={clsx(
            'bg-gradient-to-br from-primary-blue from-10% to-accent to-90% rounded-2xl p-1 mb-8 transition-all duration-700',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}>
            <div className="bg-white rounded-2xl p-12 md:p-16">
              <div className="text-center mb-12">
                <p className="text-caption text-text-muted mb-4">CENA ZA KONTROLU</p>
                <h3 className="text-7xl md:text-8xl font-bold text-primary-blue mb-4">
                  300<span className="text-4xl md:text-5xl">Kč</span>
                </h3>
                <span className="inline-block bg-background px-4 py-2 rounded-full text-caption font-semibold text-text-muted">
                  vč. DPH
                </span>
              </div>

              <div className="space-y-4 mb-12 py-8 border-y border-border">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-body text-text">Kontrola klíčové dokumentace (6 dokumentů)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-body text-text">Přehled zjištění a problémů</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-body text-text">Doporučení k úpravám dokumentů</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-body text-text">Výsledek do 5 pracovních dnů</span>
                </div>
              </div>

              <a
                href="#hero-form"
                className="w-full block text-center px-8 py-4 bg-gradient-to-r from-primary-blue to-accent text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-250 mb-4"
              >
                Zkontrolovat můj e-shop
              </a>

              <p className="text-caption text-text-muted text-center">
                Pokud si následně objednáte kompletní balíček dokumentů, <strong>300 Kč vám odečteme</strong> z ceny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
