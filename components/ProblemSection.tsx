'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface ProblemCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProblemSection = () => {
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

  const problems: ProblemCard[] = [
    {
      title: 'Neaktuální dokumenty',
      description: 'Obsah nemůže odpovídat současnému stavu vašeho prodeje a legislativy.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Nejasná pravidla',
      description: 'Zákazník nemůže dostat všechny nezbytné informace pro bezpečný nákup.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Dokumenty na různých místech',
      description: 'Obtížně se kontroluje, zda všechny pokyny dávají dohromady smysl.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Nejistota',
      description: 'Majitel e-shopu často neví, zda je všechno opravdu v pořádku a co chybí.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4v2m0-6a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className={clsx('text-h2 mb-4 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Dokumenty e-shopu se nemají jen někde "nacházet"
          </h2>
          <p className={clsx('text-body text-text-muted transition-all duration-700 delay-100', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Důležité je, aby odpovídaly současnému způsobu vašeho prodeje a obsahovaly potřebné informace pro vaše zákazníky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className={clsx(
                'card card-hover p-6 md:p-8 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : '0ms',
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue to-accent flex items-center justify-center text-white mb-4">
                {problem.icon}
              </div>
              <h3 className="text-h5 mb-3">{problem.title}</h3>
              <p className="text-body text-text-muted leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
