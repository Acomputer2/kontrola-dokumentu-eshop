'use client';

import { useState } from 'react';
import clsx from 'clsx';
import UrlInput from './forms/UrlInput';
import { validateUrl, extractDomain } from '@/lib/urlValidation';

interface FormState {
  url: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  error?: string;
}

const Hero = () => {
  const [form, setForm] = useState<FormState>({
    url: '',
    status: 'idle',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateUrl(form.url);

    if (!validation.isValid) {
      setForm((prev) => ({
        ...prev,
        status: 'error',
        error: validation.error,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      status: 'loading',
      error: undefined,
    }));

    // Simulate processing
    setTimeout(() => {
      setForm((prev) => ({
        ...prev,
        status: 'success',
      }));
    }, 1500);
  };

  if (form.status === 'success') {
    const domain = extractDomain(form.url);

    return (
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success bg-opacity-10 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-h2 mb-4">URL jsme přijali ✓</h2>
            <p className="text-body text-text-muted mb-8">
              Váš e-shop <strong className="text-text">{domain}</strong> máme zaregistrován.
            </p>
            <div className="bg-background rounded-lg p-6 md:p-8 border border-border mb-8">
              <h3 className="text-h5 mb-6 text-left">Objednávka kontroly</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start justify-between pb-4 border-b border-border">
                  <div>
                    <p className="font-semibold text-text">Kontrola klíčové dokumentace</p>
                    <p className="text-caption text-text-muted">6 dokumentů, přehledný výsledek</p>
                  </div>
                  <p className="font-bold text-primary-blue">300 Kč</p>
                </div>
                <div className="flex items-center justify-between text-caption text-text-muted">
                  <span>Doba zpracování</span>
                  <span>Až 5 pracovních dní</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-h5 text-text mb-2">300 Kč <span className="text-caption text-text-muted font-normal">vč. DPH</span></p>
              </div>
            </div>
            <button
              onClick={() => {
                setForm({ url: '', status: 'idle' });
              }}
              className="px-8 py-3 bg-primary-blue text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-250 inline-block mb-4"
            >
              Pokračovat na platbu
            </button>
            <p className="text-caption text-text-muted">
              Vrátit se zpět a zadat jinou URL
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent bg-opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary-blue bg-opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text + Form */}
          <div className="md:col-span-2 animate-fade-up">
            <h1 className="text-h1 mb-6 leading-tight">
              Víte, jestli máte<br className="hidden sm:inline" /> dokumenty svého e-shopu<br className="hidden sm:inline" /> opravdu v pořádku?
            </h1>

            <p className="text-body text-text-muted mb-8 leading-relaxed">
              Nechte si rychle prověřit klíčovou dokumentaci e-shopu a zjistěte, kde mohou být slabá místa. Bez zbytečného právnického žargonu.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} id="hero-form" className="mb-8">
              <UrlInput
                value={form.url}
                onChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    url: value,
                    error: undefined,
                    status: prev.status === 'error' ? 'idle' : prev.status,
                  }))
                }
                onSubmit={handleSubmit}
                error={form.error}
                isLoading={form.status === 'loading'}
                disabled={form.status === 'loading'}
              />
              <div className="space-y-2 mt-6">
                <p className="text-caption font-semibold text-text">
                  <span className="text-primary-blue font-bold">300 Kč</span> vč. DPH
                </p>
                <p className="text-caption text-text-muted">
                  Částku vám při následné objednávce kompletnho balíčku odečteme.
                </p>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-caption text-text-muted">
                <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Výsledek do 5 dní
              </div>
              <div className="flex items-center gap-2 text-caption text-text-muted">
                <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bez právnického žargonu
              </div>
            </div>
          </div>

          {/* Right Column - Visualization */}
          <div className="md:col-span-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-white rounded-xl border border-border shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-h5 mb-2">Dokumentace e-shopu</h2>
                  <p className="text-caption text-text-muted">Náhled výsledků kontroly</p>
                </div>

                {/* Document List */}
                <div className="space-y-3">
                  {[
                    { name: 'Obchodní podmínky', status: 'ok' },
                    { name: 'Reklamační řád', status: 'ok' },
                    { name: 'GDPR zásady', status: 'warning' },
                    { name: 'Odstoupení od smlouvy', status: 'ok' },
                    { name: 'Cookies', status: 'warning' },
                    { name: 'Reklamační protokol', status: 'ok' },
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-opacity-70 transition-colors">
                      {doc.status === 'ok' ? (
                        <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-white">!</span>
                        </div>
                      )}
                      <span className="text-sm font-medium text-text">{doc.name}</span>
                    </div>
                  ))}
                </div>

                {/* Status Summary */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-caption font-semibold text-text-muted">Stav dokumentace</span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 rounded-lg bg-primary-blue bg-opacity-10 flex items-center justify-center">
                        <span className="text-h5 font-bold text-primary-blue">4/6</span>
                      </div>
                      <span className="text-sm text-text-muted">OK</span>
                    </div>
                  </div>
                  <p className="text-caption text-text-muted mt-3">
                    <strong>Pozor:</strong> 2 dokumenty vyžadují pozornost
                  </p>
                </div>

                {/* Badge */}
                <div className="pt-4 border-t border-border">
                  <p className="text-caption text-text-muted text-center italic">
                    Toto je ukázka výsledků. Po zadání vaší URL obdržíte detailní přehled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
