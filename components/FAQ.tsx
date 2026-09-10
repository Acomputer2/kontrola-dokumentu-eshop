'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: FAQItem[] = [
    {
      question: 'Co přesně kontrolujete?',
      answer: 'Kontrolujeme šest klíčových dokumentů: obchodní podmínky, reklamační řád, formulář pro odstoupení, GDPR zásady, reklamační protokol a informace o cookies. Zaměřujeme se na jejich soulad s legislativou, srozumitelnost a úplnost.',
    },
    {
      question: 'Potřebuji vám posílat jednotlivé dokumenty?',
      answer: 'Ne. Stačí nám zadat URL vašeho e-shopu. Sami si dohledáme dokumenty na vašem webu a prověříme je.',
    },
    {
      question: 'Jak dlouho kontrola trvá?',
      answer: 'Zpracování trvá obvykle 3-5 pracovních dnů od zadání URL. Máte však 5 pracovních dnů na to, aby vám byl výsledek doručen.',
    },
    {
      question: 'Co dostanu jako výsledek?',
      answer: 'Dostanete detailní zprávu se stavem jednotlivých dokumentů, konkrétními nalezenými problémy a jasnými doporučeními, co je potřeba opravit.',
    },
    {
      question: 'Co když najdete problém?',
      answer: 'Pokud najdeme problém, jasně jej popíšeme a nabídneme vám řešení. Pokud si chcete nechat dokumenty opravit nebo vytvořit nové, cena 300 Kč za kontrolu se vám odečte z ceny kompletního balíčku.',
    },
    {
      question: 'Je kontrola vhodná pro každý e-shop?',
      answer: 'Kontrola je užitečná pro každý e-shop, který prodává v Česku. Bez ohledu na velikost, obor nebo typ prodeje.',
    },
    {
      question: 'Odečte se cena kontroly z ceny kompletního balíčku?',
      answer: 'Ano. Pokud se po přijetí výsledků rozhodnete objednat kompletní balíček nových dokumentů nebo jejich úpravu, 300 Kč za kontrolu se odečte z ceny.',
    },
    {
      question: 'Je kontrola právní službou?',
      answer: 'Tato služba má informativní a konzultační charakter s cílem odhalit nejčastější rizika. Nejedná se o právní službu poskytovanou dle zákona o advokacii.',
    },
    {
      question: 'Co když už mám dokumenty vytvořené?',
      answer: 'Kontrola je pro vás. Ověříme si, že vaše dokumenty jsou aktuální, legislativně správné a obsahují všechny potřebné informace.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 mb-12 text-center">
            Často kladené dotazy
          </h2>

          <div className="space-y-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-border overflow-hidden transition-all duration-250 hover:border-primary-blue"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 md:p-6 flex items-center justify-between text-left hover:bg-background transition-colors duration-250"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h3 className="text-body md:text-lg font-semibold text-text pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={clsx(
                      'w-6 h-6 text-primary-blue flex-shrink-0 transition-transform duration-250',
                      openIndex === idx ? 'rotate-180' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {openIndex === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 py-4 md:p-6 pt-0 md:pt-0 bg-white border-t border-border text-body text-text-muted leading-relaxed animate-fade-up"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
