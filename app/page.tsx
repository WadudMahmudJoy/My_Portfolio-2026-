import BackgroundMesh from '@/components/BackgroundMesh';
import Counter from '@/components/Counter';
import NavBar from '@/components/NavBar';
import ProjectFilters from '@/components/ProjectFilters';
import ScrollProgress from '@/components/ScrollProgress';
import Spotlight from '@/components/Spotlight';
import ContactForm from '@/components/ContactForm';
import GitHubStats from '@/components/GitHubStats';
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  publications,
  references,
  researchFocus,
  skillGroups,
  stats
} from '@/data/portfolio';

export default function HomePage() {
  return (
    <main id="top">
      <BackgroundMesh />
      <ScrollProgress />
      <Spotlight />
      <NavBar />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero-shell">
        <div className="hero-grid container">

          {/* LEFT — Identity + Headline */}
          <div className="hero-copy reveal-card">

            {/* Name + Designation */}
            <div className="hero-identity">
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-designation">{profile.role}</p>
            </div>

            {/* Tagline headline — smaller, punchy */}
            <div className="hero-tagline-block">
              <h2 className="hero-tagline">
                Building <span className="accent-text">research-grade</span> AI systems — measurable, explainable &amp; production-ready.
              </h2>
            </div>

            {/* Bio */}
            <p className="hero-text">{profile.summary}</p>

            {/* Skill badges */}
            <div className="hero-badges">
              <span>Medical AI</span>
              <span>Computer Vision</span>
              <span>Time-Series Analytics</span>
              <span>Reliable Evaluation</span>
            </div>

            {/* CTA buttons */}
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">Explore My Work</a>
              <a className="btn btn-cv" href="/Joy_CV.pdf" download="Wadud_Mahmud_Joy_CV.pdf" target="_blank" rel="noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
              <a className="btn btn-secondary" href="#contact">Get In Touch</a>
              <a className="btn btn-outline" href={`mailto:${profile.email}`}>✉ Email Me</a>
            </div>

            {/* Quick stats row */}
            <div className="hero-quick-stats">
              <div className="quick-stat">
                <strong>3.70<span>/4.00</span></strong>
                <span>CGPA</span>
              </div>
              <div className="quick-stat-divider" />
              <div className="quick-stat">
                <strong>3</strong>
                <span>Publications</span>
              </div>
              <div className="quick-stat-divider" />
              <div className="quick-stat">
                <strong>14</strong>
                <span>Kaggle Courses</span>
              </div>
              <div className="quick-stat-divider" />
              <div className="quick-stat">
                <strong>3+</strong>
                <span>Research Tracks</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Big Profile Photo */}
          <div className="hero-photo-side reveal-card">
            <div className="hero-photo-frame">
              <div className="hero-photo-glow" />
              <div className="hero-photo-border">
                <img
                  src="/joy-profile.jpg"
                  alt="Md. Wadud Mahmud Joy —  Researcher & ML Engineer"
                  className="hero-photo-img"
                />
              </div>
              {/* Floating badges */}
              <div className="hero-float-badge badge-top">
                <span className="badge-dot" />
                Open to Research &amp; ML Roles
              </div>
              <div className="hero-float-badge badge-bottom">
                <span className="badge-icon">🎓</span>
                IUBAT &bull; CSE &bull; 2026
              </div>
              {/* Decorative rings */}
              <div className="deco-ring ring-1" />
              <div className="deco-ring ring-2" />
            </div>

            {/* Social links under photo */}
            <div className="hero-social-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
              <a href={profile.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.978 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                Scholar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="section container">
        <div className="section-intro wide">
          <span className="section-kicker">Overview</span>
          <h2>A CSE graduate with real research depth in AI &amp; machine learning.</h2>
          <p>
            My profile combines academic research, applied machine learning, and software engineering.
            This site leads with signal: what I study, what I build, what I publish, and why the work matters.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item) => (
            <Counter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </div>

        <div className="overview-grid">
          <article className="glass-card hover-card">
            <span className="section-mini">Research focus</span>
            <ul className="bullet-list">
              {researchFocus.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          </article>

          <article className="glass-card hover-card">
            <span className="section-mini">Education snapshot</span>
            <div className="identity-list">
              <div>
                <span>Degree</span>
                <strong>{profile.degree}</strong>
              </div>
              <div>
                <span>Institution</span>
                <strong>{profile.university}</strong>
              </div>
              <div>
                <span>Academic Standing</span>
                <strong>CGPA {profile.cgpa}</strong>
              </div>
              <div>
                <span>Nationality</span>
                <strong>{profile.nationality}</strong>
              </div>
            </div>
          </article>

          <article className="glass-card hover-card">
            <span className="section-mini">Career direction</span>
            <p className="lead-paragraph">
              Targeting roles where strong ML evaluation, research thinking, and engineering discipline work together.
            </p>
            <div className="tag-row left">
              <span className="tag">AI Research</span>
              <span className="tag">ML Engineering</span>
              <span className="tag">Computer Vision</span>
              <span className="tag">Data Science</span>
            </div>
          </article>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────── */}
      <section id="work" className="section container">
        <div className="section-intro">
          <span className="section-kicker">Selected work</span>
          <h2>Research projects, public-health analytics, and software systems.</h2>
          <p>
            Intentionally mixed - showing depth in AI research, breadth in software development, and the ability to frame models around real-world use.
          </p>
        </div>
        <ProjectFilters projects={projects} />
      </section>

      {/* ── PUBLICATIONS + EDUCATION ───────────────────────── */}
      <section id="publications" className="section container publication-layout">
        <div className="publication-column">
          <div className="section-intro left-inline">
            <span className="section-kicker">Publications</span>
            <h2>Academic output that supports the research profile.</h2>
          </div>

          <div className="publication-stack">
            {publications.map((paper) => (
              <article key={paper.title} className="publication-card hover-card">
                <div className="card-topline">
                  <span className={`status-pill ${paper.status === 'Published' ? 'published' : ''}`}>{paper.status}</span>
                  <span className="meta-kicker">{paper.role}</span>
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.venue}</p>
                {paper.link && (
                  <a href={paper.link} target="_blank" rel="noreferrer" className="paper-link">
                    View Paper ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="side-column">
          <article className="glass-card hover-card timeline-card">
            <span className="section-mini">Education timeline</span>
            {education.map((item) => (
              <div key={item.title} className="timeline-entry">
                <div className="timeline-dot" />
                <div>
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <strong>{item.detail}</strong>
                  {item.extras?.map((extra) => <small key={extra}>{extra}</small>)}
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* ── EXPERIENCE + CERTIFICATIONS ────────────────────── */}
      <section className="section container two-column-grid">
        <div>
          <div className="section-intro left-inline">
            <span className="section-kicker">Experience</span>
            <h2>Mentoring that strengthened communication and teaching.</h2>
          </div>
          {experience.map((item) => (
            <article key={item.title} className="glass-card hover-card experience-card">
              <div className="card-topline">
                <span className="status-pill">Experience</span>
                <span className="meta-kicker">{item.period}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.org}</p>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div>
          <div className="section-intro left-inline">
            <span className="section-kicker">Certifications</span>
            <h2>Structured learning on top of formal academics.</h2>
          </div>
          <div className="stack-column">
            {certifications.map((item) => (
              <article key={item.title} className="glass-card hover-card cert-card">
                <div className="card-topline">
                  <span className="status-pill">Credential</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.org}</p>
                <small>{item.meta}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────── */}
      <section id="skills" className="section container">
        <div className="section-intro wide">
          <span className="section-kicker">Skill stack</span>
          <h2>Programming, model development, research tooling, and practical workflow skills.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card hover-card">
              <span className="section-mini">{group.title}</span>
              <div className="tag-row left">
                {group.items.map((item) => (
                  <span key={item} className="tag skill-tag">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <GitHubStats username="WadudMahmudJoy" />
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section id="contact" className="section container contact-layout">
        <article className="contact-panel hover-card">
          <span className="section-kicker">Contact</span>
          <h2>Let&apos;s connect for research, ML, or software opportunities.</h2>
          <p>
            Reach out for collaboration, research discussion, project opportunities, or early-career AI and software roles. I&apos;m always open to meaningful conversations.
          </p>

          <div className="contact-grid">
            <div>
              <span>Email</span>
              <strong className="break-value">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </strong>
            </div>
            <div>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong className="status-available">🟢 Open to opportunities</strong>
            </div>
          </div>

          {/* Social links in contact */}
          <div className="contact-cv-row">
            <a href="/Joy_CV.pdf" download="Wadud_Mahmud_Joy_CV.pdf" target="_blank" rel="noreferrer" className="btn btn-cv contact-cv-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full CV (PDF)
            </a>
          </div>

          <div className="contact-social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn Profile
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub Projects
            </a>
            <a href={profile.scholar} target="_blank" rel="noreferrer" className="contact-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.978 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
              Google Scholar
            </a>
          </div>

          {/* Academic References */}
          <div className="references-inline">
            <span className="section-mini" style={{ marginTop: '1.6rem', display: 'inline-flex' }}>Academic References</span>
            <div className="reference-list-inline">
              {references.map((ref) => (
                <div key={ref.name} className="reference-item">
                  <h3>{ref.name}</h3>
                  <p>{ref.role}</p>
                  <small>{ref.meta}</small>
                  <strong className="break-value">{ref.email}</strong>
                  <span>{ref.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        <ContactForm />
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="site-footer-bar">
        <div className="container footer-inner">

          <a href="#top" className="footer-brand">
            <span className="brand-dot" />
            <span>WADUD JOY / RESEARCHER</span>
          </a>

          {/* Footer social icons */}
          <div className="footer-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <span>GitHub</span>
            </a>
            <a href={profile.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar" className="footer-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.978 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
              <span>Scholar</span>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="footer-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>Email</span>
            </a>
          </div>

          <p className="footer-copy">© {new Date().getFullYear()} Md. Wadud Mahmud Joy &bull; Dhaka, Bangladesh</p>
        </div>
      </footer>
    </main>
  );
}
