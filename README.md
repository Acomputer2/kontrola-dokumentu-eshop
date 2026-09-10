# Kontrola Dokumentů E-shop

Moderní webová aplikace pro kontrolu dokumentace e-shopů. Nechte si ověřit klíčové dokumenty vaší eshopu a získejte přehled o jejich aktuálnosti.

## 🚀 Technologie

- **Next.js 15** - React framework pro produkci
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **clsx** - Utility pro třídy
- **Vercel** - Hosting a deployment

## 📋 Funkčnosti

- ✅ Interaktivní formulář pro zadání URL e-shopu
- ✅ Přehledný náhled výsledků kontroly
- ✅ Responzivní design (mobile-first)
- ✅ Accessibility features (a11y)
- ✅ SEO optimalizace (sitemap, robots.txt, JSON-LD)
- ✅ Animace a micro-interactions
- ✅ Validace formulářů
- ✅ UI komponenty (Button, Badge, Alert)

## 📁 Struktura projektu

```
.
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React komponenty
│   ├── a11y/               # Accessibility komponenty
│   ├── ui/                 # UI komponenty
│   ├── forms/              # Form komponenty
│   ├── Hero.tsx            # Hero section
│   ├── Header.tsx          # Header
│   ├── Footer.tsx          # Footer
│   └── ...                 # Ostatní sekce
├── lib/                     # Utility funkce
│   ├── seo.ts              # SEO metadata
│   └── urlValidation.ts    # URL validace
├── public/                  # Statické soubory
│   ├── sitemap.xml         # XML sitemap
│   └── robots.txt          # Robots.txt
├── styles/                  # CSS soubory
└── tailwind.config.ts       # Tailwind CSS konfigurace
```

## 🛠️ Instalace a běh

### Prerequisites
- Node.js 20+
- npm nebo yarn

### Instalace

```bash
# Klonování repozitáře
git clone https://github.com/yourusername/kontrola-dokumentu-eshop.git
cd kontrola-dokumentu-eshop

# Instalace závislostí
npm install
```

### Vývoj

```bash
# Spuštění dev serveru
npm run dev

# Aplikace je dostupná na http://localhost:3000
```

### Build

```bash
# Production build
npm run build

# Spuštění production buildu
npm start
```

## 🌐 Deployment

Aplikace je optimalizovaná pro Vercel:

```bash
# Deploy na Vercel
vercel deploy
```

## 📝 Environment Variables

Vytvořte `.env.local` soubor (viz `.env.example`):

```env
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_key
# ... ostatní variables
```

## 🎨 Customizace

### Barvy

Barvy jsou definované v `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    blue: '#003366',
  },
  accent: '#FF6B6B',
  // ...
}
```

### Typografie

Typografie je definovaná v `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

## 🧪 Testing

```bash
# Unit testy (když budou přidány)
npm run test

# E2E testy (když budou přidány)
npm run test:e2e
```

## 🔍 SEO

- Metadata v `lib/seo.ts`
- Sitemap v `public/sitemap.xml`
- Robots.txt v `public/robots.txt`
- JSON-LD structured data v `components/JsonLd.tsx`
- Open Graph tags
- Twitter Card support

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Skip links
- ARIA labels
- Screen reader support
- Keyboard navigation
- Focus management

## 📄 Licence

MIT

## 👨‍💻 Autor

Acomputer2

## 📞 Support

info@kontrola-dokumentu-eshop.cz
