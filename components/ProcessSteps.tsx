'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const ProcessSteps = () => {
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

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Zašlete nám odkaz',
      description: 'Zadejte URL svého e-shopu. Dokumenty si dohledáme a analyzujeme.',
    },
    {
      number: '02',
      title: 'Do 5 dnů získáte výsledek',
      description: 'Zpracujeme přehledné hodnocení současné dokumentace včetně doporučení.',
    },
    {
      number: '03',
      title: 'Rozhodnete se, co dál',
      description: 'Pokud chcete nové dokumenty na míru, cena 300 Kč se odečte z balíčku.',
    },
  ];

  return (
    <section ref={ref} id="process" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className={clsx('text-h2 mb-4 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Od URL k jasnému výsledku
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={clsx(
                  'transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{
                  transitionDelay: isVisible ? `${idx * 100}ms` : '0ms',
                }}
              >
                {/* Connection Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-20 left-1/2 w-8 h-1 bg-gradient-to-r from-primary-blue to-transparent ml-16 -z-10" />
                )}

                <div className="relative">
                  {/* Circle */}
                  <div className="w-20 h-20 rounded-full bg-primary-blue bg-opacity-10 border-2 border-primary-blue flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary-blue">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-h5 mb-3 text-center">{step.title}</h3>
                  <p className="text-body text-text-muted text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={clsx(
                'flex gap-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : '0ms',
              }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary-blue bg-opacity-10 border-2 border-primary-blue flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-blue">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-h5 mb-2">{step.title}</h3>
                <p className="text-body text-text-muted leading-relaxed">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-primary-blue to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
