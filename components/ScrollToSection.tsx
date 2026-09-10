'use client';

import React, { useEffect } from 'react';

interface ScrollToSectionProps {
  children?: React.ReactNode;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({ children }) => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return <>{children}</>;
};

export default ScrollToSection;
