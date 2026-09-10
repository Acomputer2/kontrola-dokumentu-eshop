'use client';

import { useEffect, useRef } from 'react';

interface A11yAnnouncerProps {
  message: string;
  politeness?: 'polite' | 'assertive';
  id?: string;
}

const A11yAnnouncer: React.FC<A11yAnnouncerProps> = ({
  message,
  politeness = 'polite',
  id = 'announcer',
}) => {
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && regionRef.current) {
      // Clear previous content
      regionRef.current.textContent = '';
      // Add new message
      regionRef.current.textContent = message;
    }
  }, [message]);

  return (
    <div
      ref={regionRef}
      id={id}
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
      role="status"
    />
  );
};

export default A11yAnnouncer;
