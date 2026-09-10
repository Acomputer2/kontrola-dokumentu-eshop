import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kontrola dokumentů e-shopu | Zjistěte, zda máte dokumentaci v pořádku',
  description: 'Nechte si zkontrolovat klíčové dokumenty svého e-shopu. Získejte přehled o jejich aktuálním stavu a doporučení k úpravám za 300 Kč.',
  openGraph: {
    title: 'Kontrola dokumentů e-shopu',
    description: 'Nechte si zkontrolovat klíčové dokumenty svého e-shopu. Získejte přehled o jejich aktuálním stavu a doporučení k úpravám za 300 Kč.',
    url: 'https://kontrola-dokumentu-eshop.cz',
    type: 'website',
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-text antialiased">
        {children}
      </body>
    </html>
  );
}
