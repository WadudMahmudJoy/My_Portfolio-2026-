'use client';

import { useMemo, useState } from 'react';

type Project = {
  title: string;
  category: string;
  stack: string[];
  summary: string;
  impact: string;
  badge: string;
  github?: string | null;
  demo?: string | null;
};

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);

  const filtered = active === 'All' ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="filter-row" role="tablist" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${active === category ? 'active' : ''}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <article key={project.title} className="project-card hover-card reveal-card">
            <div className="card-topline">
              <span className="status-pill">{project.badge}</span>
              <span className="meta-kicker">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="impact-box">
              <strong>Why it matters</strong>
              <span>{project.impact}</span>
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link demo">
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
