const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-max py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white border-opacity-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="font-bold">Kontrola dokumentů</span>
            </div>
            <p className="text-sm text-white text-opacity-70">
              Moderní kontrola dokumentace vašeho e-shopu za 300 Kč.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigace</h4>
            <ul className="space-y-2">
              <li>
                <a href="#documents" className="text-sm text-white text-opacity-70 hover:text-white transition-colors">
                  Co kontrolujeme
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-white text-opacity-70 hover:text-white transition-colors">
                  Jak to funguje
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-sm text-white text-opacity-70 hover:text-white transition-colors">
                  Proč kontrolovat
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-white text-opacity-70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Právní informace</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white text-opacity-70 hover:text-white transition-colors">
                  Ochrana osobních údajů
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white text-opacity-70 hover:text-white transition-colors">
                  Obchodní podmínky
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white text-opacity-70 hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Kontakt</h4>
            <ul className="space-y-2 text-sm text-white text-opacity-70">
              <li>Email: info@priklad.cz</li>
              <li>Telefon: +420 777 123 456</li>
              <li>IČO: 12345678</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white text-opacity-70">
          <p>
            © {currentYear} Kontrola dokumentů e-shopu. Všechna práva vyhrazena.
          </p>
          <p>
            Vytvořeno s ❤️ pro provozovatele e-shopů.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white bg-opacity-5 border-t border-white border-opacity-10">
        <div className="container-max py-6 text-xs text-white text-opacity-60 text-center">
          <p>
            Tato služba má informativní a konzultační charakter s cílem odhalit nejčastější rizika na e-shopu. Nejedná se o právní službu poskytovanou dle zákona o advokacii.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
