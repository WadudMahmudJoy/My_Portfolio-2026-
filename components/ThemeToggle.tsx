'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('joy-theme');
    const nextTheme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('joy-theme', next);
    setTheme(next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <span>{mounted && theme === 'light' ? '☀️' : '🌙'}</span>
      <span>{mounted && theme === 'light' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
