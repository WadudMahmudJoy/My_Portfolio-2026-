'use client';

import { useState } from 'react';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState('sending');
    // Simulate send — replace with real API call (Formspree, EmailJS, etc.)
    await new Promise((res) => setTimeout(res, 1400));
    setState('sent');
  };

  return (
    <article className="contact-form-card hover-card">
      <span className="section-mini">Send a message</span>
      <h3 className="form-heading">Drop me a line directly</h3>
      <p className="form-sub">I usually respond within 24–48 hours.</p>

      {state === 'sent' ? (
        <div className="form-success">
          <div className="success-icon">✓</div>
          <h4>Message received!</h4>
          <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
          <button className="btn btn-secondary" onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setState('idle'); }}>
            Send another
          </button>
        </div>
      ) : (
        <div className="form-fields">
          <div className="field-group two-col">
            <div className="field">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
              <option value="">Select a topic...</option>
              <option value="research">Research Collaboration</option>
              <option value="job">Job / Internship Opportunity</option>
              <option value="ml">ML Project Discussion</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about the opportunity, collaboration, or just say hello..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className={`btn btn-primary form-submit ${state === 'sending' ? 'loading' : ''}`}
            onClick={handleSubmit}
            disabled={state === 'sending'}
          >
            {state === 'sending' ? (
              <span className="spinner-row">
                <span className="spinner" />
                Sending...
              </span>
            ) : (
              'Send Message ↗'
            )}
          </button>

          {state === 'error' && (
            <p className="form-error">Something went wrong. Please email me directly.</p>
          )}
        </div>
      )}
    </article>
  );
}
