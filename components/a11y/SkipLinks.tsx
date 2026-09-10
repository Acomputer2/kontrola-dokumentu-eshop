'use client';

import { useEffect } from 'react';

interface SkipLinksProps {
  links?: Array<{
    href: string;
    label: string;
  }>;
}

const SkipLinks: React.FC<SkipLinksProps> = ({
  links = [
    { href: '#main-content', label: 'Přejít na hlavní obsah' },
    { href: '#documents', label: 'Přejít na dokumenty' },
    { href: '#faq', label: 'Přejít na FAQ' },
  ],
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + S for skip links (or Cmd + S on Mac)
      if ((e.altKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        const skipLink = document.querySelector('[data-skip-link]') as HTMLAnchorElement;
        skipLink?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="sr-only">
      <nav aria-label="Skip links">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-skip-link
                className="focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary-blue focus:text-white focus:p-4 focus:m-2 focus:rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SkipLinks;
