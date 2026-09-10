# Kontrola dokumentů e-shopu

Moderní web pro službu kontroly dokumentů e-shopu. Vytvořeno s Next.js + React + TypeScript + TailwindCSS.

## Struktura projektu

```
app/              - Next.js App Router
  layout.tsx      - Root layout
  page.tsx        - Hlavní stránka
  globals.css     - Globální styly
components/       - React komponenty
  Header          - Sticky navigace
  Hero            - Hero sekce s formulářem
  TrustBar        - Trust strip
  ProblemSection  - Problémy e-shopu
  DocumentsGrid   - Co kontrolujeme
  ProcessSteps    - Jak to funguje
  Benefits        - Benefity
  PricingSection  - Cena
  FAQ             - Často kladené dotazy
  FinalCTA        - Finální výzva
  Footer          - Footer
  forms/          - Formulářové komponenty
public/           - Statické soubory
```

## Instalace

```bash
npm install
```

## Spuštění

```bash
npm run dev
```

Válka bude dostupná na http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Design Principy

- **Moderní SaaS estetika** - čistý design, dostatek prostoru
- **Vysoká konverze** - jasné CTA, přesvědčivý obsah
- **Responsive** - mobile-first přístup
- **Accessibility** - WCAG compliance
- **Performance** - optimalizované assets

## Barvy

- Navy: `#071A3A`
- Primary Blue: `#155EEF`
- Accent: `#4F8CFF`
- Background: `#F7F9FC`
- Text: `#0F172A`
- Text Muted: `#64748B`
- Border: `#E2E8F0`
- Success: `#16A34A`

## Typografie

- Font: Inter
- H1: 64px
- H2: 48px
- H3: 32px
- Body: 18px
