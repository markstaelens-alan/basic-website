import { useState } from 'react';
import { FORMSPREE_FORM_ID } from '../config.js';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!FORMSPREE_FORM_ID) {
      setStatus('unconfigured');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (!res.ok) throw new Error('Request failed');
      e.target.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="page">
      <h1>Contact us</h1>
      <p className="lead">
        Tell us a little about your business and we'll get back to you about your
        free AI automation trial.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Business name
          <input name="business" type="text" autoComplete="organization" />
        </label>
        <label>
          What would you like to automate?
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'sent' && (
          <p className="form-note success">Thanks! We'll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p className="form-note error">Something went wrong. Please try again.</p>
        )}
        {status === 'unconfigured' && (
          <p className="form-note">The contact form is coming soon. Please check back shortly.</p>
        )}
      </form>
    </section>
  );
}
