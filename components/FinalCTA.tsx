'use client';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy via-navy to-primary-blue text-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent bg-opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-blue bg-opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h2 mb-6">
            Chraňte svůj e-shop dřív, než zjistíte problém.
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-12 leading-relaxed">
            Zadejte URL svého e-shopu a zjistěte, jak na tom vaše dokumentace skutečně je.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#hero-form"
              className="px-8 py-4 bg-white text-navy rounded-lg font-bold text-lg hover:bg-opacity-95 transition-all duration-250 shadow-lg hover:shadow-xl"
            >
              Zkontrolovat za 300 Kč
            </a>
          </div>

          <div className="space-y-3 text-white text-opacity-90 text-center">
            <p className="text-body">
              <strong>Výsledek do 5 pracovních dnů</strong>
            </p>
            <p className="text-caption text-opacity-80">
              300 Kč vám při objednávce kompletního balíčku dokumentů odečteme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
