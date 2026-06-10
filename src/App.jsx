import {
  CheckCircle2,
  MessageCircle,
  company,
  markets,
  navItems,
  process,
  services,
  socialGoals,
  strengths,
  trustPoints,
} from './content.js';

const ContactCard = ({ label, value, href }) => (
  <a className="contact-card" href={href}>
    <span>{label}</span>
    <strong>{value}</strong>
  </a>
);

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="PEAK ELITE home">
          <span>PE</span>
          <strong>{company.name}</strong>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Get a Quote</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-media" aria-hidden="true">
            <img src="/assets/peak-elite-hero.png" alt="" />
          </div>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Facility support and hospitality services in Bahrain</span>
              <h1>Reliable service teams for cleaner, smoother business operations.</h1>
              <p>
                {company.name} provides cleaning, facility maintenance support, hospitality staffing,
                event support, and general operational support for businesses and residential clients.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Request service support</a>
                <a className="button button-secondary" href="#services">View services</a>
              </div>
              <div className="trust-strip">
                {trustPoints.map((point) => (
                  <span key={point}><CheckCircle2 size={16} /> {point}</span>
                ))}
              </div>
            </div>
            <aside className="hero-panel">
              <span>Built for</span>
              <strong>Bahrain facilities, hospitality teams, events, and residential operations.</strong>
              <p>Professional support that helps clients stay clean, staffed, prepared, and operational.</p>
            </aside>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow dark">Core services</span>
              <h2>Practical support across cleaning, facilities, hospitality, and events.</h2>
              <p>
                The website is structured to convert visitors into enquiries while presenting PEAK ELITE
                as a professional Bahrain service partner.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ title, body, icon: Icon }) => (
                <article className="service-card" key={title}>
                  <div className="card-icon"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach-section" id="approach">
          <div className="container split-grid">
            <div>
              <span className="eyebrow dark">Service approach</span>
              <h2>From request to delivery, every job needs a clear operating path.</h2>
              <p>
                PEAK ELITE can use this site to explain its process, build trust with decision makers,
                and guide leads toward WhatsApp, phone, or form-based enquiries.
              </p>
            </div>
            <div className="process-list">
              {process.map((step, index) => (
                <div className="process-item" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="container strength-grid">
            {strengths.map(({ title, body, icon: Icon }) => (
              <article className="strength-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section markets-section" id="markets">
          <div className="container markets-layout">
            <div className="markets-copy">
              <span className="eyebrow dark">Who we support</span>
              <h2>Designed for Bahrain clients who need dependable operational help.</h2>
              <p>
                The messaging can expand once client photos, final contact details, and service packages
                are available.
              </p>
            </div>
            <div className="markets-grid">
              {markets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section marketing-section">
          <div className="container marketing-panel">
            <div>
              <span className="eyebrow">Website-ready marketing funnel</span>
              <h2>Prepared for social media traffic and WhatsApp Business leads.</h2>
              <p>
                The site aligns with campaigns across Instagram, TikTok, Facebook, and WhatsApp Business
                so visitors can quickly understand services and contact the team.
              </p>
            </div>
            <div className="social-grid">
              {socialGoals.map((channel) => (
                <span key={channel}>{channel}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow dark">Start a service request</span>
              <h2>Tell PEAK ELITE what support you need.</h2>
              <p>
                Replace the placeholder contact details once the client confirms phone, email,
                WhatsApp Business number, and preferred enquiry flow.
              </p>
              <div className="contact-cards">
                <ContactCard label="Email" value={company.email} href={`mailto:${company.email}`} />
                <ContactCard label="Phone" value={company.phone} href={`tel:${company.phone.replaceAll(' ', '')}`} />
                <ContactCard label="WhatsApp" value={company.whatsapp} href="#" />
              </div>
            </div>
            <form className="lead-form">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Company / property
                <input type="text" name="company" placeholder="Business or residence" />
              </label>
              <label>
                Service needed
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Briefly describe the requirement" />
              </label>
              <button className="button button-primary" type="button">
                <MessageCircle size={18} /> Prepare enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <strong>{company.name}</strong>
          <span>Facility support and hospitality services, {company.location}</span>
        </div>
      </footer>
    </div>
  );
}
