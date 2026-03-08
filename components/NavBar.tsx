'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  ['about', 'About'],
  ['work', 'Work'],
  ['publications', 'Publications'],
  ['skills', 'Skills'],
  ['contact', 'Contact']
] as const;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a href="#top" className="brand-mark" aria-label="Back to top">
        <span className="brand-dot" />
        <span>WADUD JOY / RESEARCHER </span>
      </a>

      <nav className={`site-nav ${open ? 'open' : ''}`}>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
        <button className="menu-toggle" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
