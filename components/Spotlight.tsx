'use client';

import { useEffect } from 'react';

export default function Spotlight() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return <div className="spotlight-layer" aria-hidden="true" />;
}
