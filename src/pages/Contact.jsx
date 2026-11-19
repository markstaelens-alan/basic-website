import { useState } from 'react';
import { supabase } from '../supabase.js';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!supabase) {
      setStatus('unconfigured');
      return;
    }
    setStatus('sending');
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    try {
      // Add one row to the contact_messages table.
      const { error } = await supabase.from('contact_messages').insert({
        name: data.name.trim(),
        email: data.email.trim(),
        business: data.business.trim() || null,
        message: data.message.trim(),
      });
      if (error) throw error;
      form.reset();
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
          <input name="name" type="text" required maxLength={200} autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required maxLength={320} autoComplete="email" />
        </label>
        <label>
          Business name
          <input name="business" type="text" maxLength={200} autoComplete="organization" />
        </label>
        <label>
          What would you like to automate?
          <textarea name="message" rows="5" required maxLength={5000} />
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
