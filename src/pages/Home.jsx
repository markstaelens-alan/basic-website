import { Link } from 'react-router-dom';

const features = [
  {
    icon: '📬',
    title: 'Customer replies',
    text: 'Draft answers to common customer emails and messages in seconds.',
  },
  {
    icon: '🗂️',
    title: 'Busywork, handled',
    text: 'Automate data entry, invoices and scheduling so you can focus on growth.',
  },
  {
    icon: '📈',
    title: 'Content that sells',
    text: 'Generate product descriptions, social posts and newsletters on brand.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Try AI automation for your new business, free.</h1>
        <p className="lead">
          See what AI can take off your plate before you spend a cent. We help new
          businesses set up simple, practical automations and see real results.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">Start your free trial</Link>
          <Link to="/about" className="btn btn-secondary">Learn more</Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">What we can automate</h2>
        <div className="grid">
          {features.map((f) => (
            <div className="card" key={f.title}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="steps">
        <h2 className="section-title">How it works</h2>
        <ol>
          <li><strong>Tell us about your business.</strong> A short form, no commitment.</li>
          <li><strong>We pick one task to automate.</strong> Something that saves you time every week.</li>
          <li><strong>Try it free.</strong> Keep using it if it helps you.</li>
        </ol>
      </section>
    </>
  );
}
