'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

export default function Counter({ value, suffix = '', label }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        let frame = 0;
        const totalFrames = 45;
        const tick = () => {
          frame += 1;
          const next = Math.round((value * frame) / totalFrames);
          setDisplay(next);
          if (frame < totalFrames) window.requestAnimationFrame(tick);
        };
        window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-card hover-card">
      <div className="stat-value">
        {display}
        {suffix}
      </div>
      <p>{label}</p>
    </div>
  );
}
