import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Handshake,
  Home,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { company, faqs, markets, process, services, stats, strengths } from './content.js';

function ContactForm({ services, company }) {
  const [form, setForm] = useState({ name: '', property: '', service: '', message: '' });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const sendToWhatsApp = () => {
    const { name, property, service, message } = form;
    const text = [
      `Hello PEAK ELITE! 👋`,
      ``,
      `*Name:* ${name || '—'}`,
      `*Property / Company:* ${property || '—'}`,
      `*Service Needed:* ${service || '—'}`,
      `*Message:* ${message || '—'}`,
    ].join('\n');
    window.open(`https://wa.me/${company.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact-sect" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="sect-label">Get in Touch</p>
          <h2 className="contact-h">Let's work<br />together.</h2>
          <p>Tell us what you need and we'll have a plan ready within 24 hours.</p>
          <nav className="cinfo" aria-label="Contact details">
            <a href={`tel:${company.phone.replaceAll(' ','')}`}><Phone size={14}/>{company.phone}</a>
            <a href={`mailto:${company.email}`}><Mail size={14}/>{company.email}</a>
            <span><MessageCircle size={14}/>{company.whatsapp}</span>
            <span><MapPin size={14}/>{company.location}</span>
          </nav>
        </div>
        <div className="cform">
          <div className="cform-header">
            <h3>Send an Enquiry</h3>
            <p>We'll reply via WhatsApp within the hour.</p>
          </div>
          <div className="cform-body">
            <div className="cform-2">
              <div className="cfield">
                <label htmlFor="cf-name">Your Name</label>
                <input id="cf-name" type="text" placeholder="Full name" value={form.name} onChange={set('name')} />
              </div>
              <div className="cfield">
                <label htmlFor="cf-property">Property / Company</label>
                <input id="cf-property" type="text" placeholder="Home or business" value={form.property} onChange={set('property')} />
              </div>
            </div>
            <div className="cfield">
              <label htmlFor="cf-service">Service Needed</label>
              <select id="cf-service" value={form.service} onChange={set('service')}>
                <option value="" disabled>Select a service</option>
                {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div className="cfield">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" rows={4} placeholder="Describe your requirement…" value={form.message} onChange={set('message')} />
            </div>
            <button type="button" className="cform-btn" onClick={sendToWhatsApp}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const PeakLogo = () => (
  <img src="/assets/logo-icon.png" alt="Peak Elite logo icon" className="peak-logo-img" />
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.10, rootMargin: '0px 0px -30px 0px' }
    );
    const observe = () =>
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
    observe();
    // re-observe after any lazy content loads
    const t = setTimeout(observe, 400);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="topbar-contacts">
            <a href={`tel:${company.phone.replaceAll(' ', '')}`}>
              <Phone size={12} />{company.phone}
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail size={12} />{company.email}
            </a>
          </div>
          <div className="topbar-right">
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="topbar-ig" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="ig-username">@peakelitebh</span>
            </a>
            <span className="topbar-location"><MapPin size={12} />{company.location}</span>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}`} id="top">
        <div className="wrap hdr-inner">
          <a className="hdr-logo" href="#top" aria-label="Peak Elite home">
            <PeakLogo />
            <div className="hdr-wordmark">
              <strong>PEAK ELITE</strong>
              <span>W.L.L · Bahrain</span>
            </div>
          </a>
          <nav className="hdr-nav" aria-label="Primary">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#quality">Quality</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="hdr-cta" href="#contact">
            <Phone size={13} /> Get a Quote
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="wrap hero-content">
            <p className="hero-eyelet">Professional Facility Services in Bahrain</p>
            <h1 className="hero-h">
              <span><em>PEAK ELITE</em> Cleaning.</span>
              <span><em>PEAK ELITE</em> Maintenance.</span>
              <span><em>PEAK ELITE</em> Events.</span>
            </h1>
            <p className="hero-sub">
              Facility support and hospitality services for Bahrain's businesses
              and residences — backed by elite standards and a trusted team.
            </p>
            <div className="hero-actions">
              <a className="btn-teal" href="#contact">
                Get a Free Consultation <ArrowRight size={16} />
              </a>
              <a className="btn-outline-white" href="#services">View Services</a>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="about-sect" id="about">
          <div className="wrap about-grid">
            <div className="about-photos reveal">
              <div className="photo-a">
                <img src="/assets/peak-elite-hero.jpg" alt="Peak Elite professional team" loading="lazy" decoding="async" />
              </div>
              <div className="photo-b" style={{ backgroundImage: 'url(/assets/uniform-single.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
              <div className="photo-c" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="about-badge">
                <strong>100%</strong>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
            <div className="about-copy reveal">
              <p className="sect-label">About Us</p>
              <h2 className="about-h">Service at the<br />highest level.</h2>
              <p>
                PEAK ELITE W.L.L provides professional facility support and
                hospitality-related services to high quality standards. Our
                trained teams keep properties clean, well-maintained, and
                running smoothly — with reliable and flexible service.
              </p>
              <p>
                Our vision is to be Bahrain's most trusted facility partner —
                for businesses, residences, hospitality venues, and events.
              </p>
              <a className="btn-navy" href="#contact">Contact Us</a>
            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <div className="stats-band reveal-stagger">
          {stats.map(({ value, label }) => (
            <div key={label} className="sband-item">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* ── TRANSFORMATION ── */}
        <section className="transform-sect" id="transformation">
          <div className="wrap transform-grid">
            <div className="transform-copy reveal">
              <p className="sect-label">Before &amp; After</p>
              <h2 className="transform-h">From clutter<br />to <em>calm.</em></h2>
              <p>
                Whether it's a wardrobe in chaos or a space that needs a complete
                reset — our trained teams deliver results you can see and feel.
              </p>
              <ul className="transform-list">
                {[
                  'Decluttering & deep organisation',
                  'Professional cleaning & sanitisation',
                  'Wardrobe & cabinet arranging',
                  'Facility maintenance & upkeep',
                ].map(pt => (
                  <li key={pt}><CheckCircle2 size={15} /><span>{pt}</span></li>
                ))}
              </ul>
              <a className="btn-teal" href="#contact">Book a Service <ArrowRight size={15} /></a>
            </div>
            <div className="ba-wrap reveal">
              <div className="ba-panel">
                <div className="ba-img ba-img-before" />
                <span className="ba-tag ba-tag-before">Before</span>
              </div>
              <div className="ba-panel">
                <div className="ba-img ba-img-after" />
                <span className="ba-tag ba-tag-after">After</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="services-sect" id="services">
          <div className="wrap">
            <div className="sect-head-center reveal">
              <h2>Our Services</h2>
              <p>
                PEAK ELITE provides professional facility support and hospitality
                services to the highest standards — with trained teams and
                dependable processes.
              </p>
            </div>
            <div className="svc-grid reveal-stagger">
              {services.map(({ title, body, icon: Icon, img }) => (
                <div
                  className="svc-card"
                  key={title}
                  role="img"
                  aria-label={`${title} in Bahrain`}
                  style={img ? { backgroundImage: `url(${img})` } : {}}
                >
                  <div className="svc-card-inner">
                    <div className="svc-icon-wrap">
                      <Icon size={26} />
                    </div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <a className="svc-link" href="#contact">
                      Enquire <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUALITY / WHY US ── */}
        <section className="quality-sect" id="quality">
          <div className="wrap quality-grid">
            <div className="quality-copy reveal">
              <p className="sect-label-lt">Quality Promises</p>
              <h2 className="quality-h">
                What you can<br />expect from<br />us.
              </h2>
              <p>
                Every client is managed with the same high standard —
                thorough, reliable, and transparent.
              </p>
              <a className="btn-teal" href="#contact">
                Contact Us <ArrowRight size={15} />
              </a>
            </div>
            <div className="quality-cards reveal-stagger">
              {strengths.map(({ title, body, icon: Icon }) => (
                <article className="quality-card" key={title}>
                  <div className="quality-ico"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
              <article className="quality-card">
                <div className="quality-ico"><CheckCircle2 size={20} /></div>
                <h3>Uniformed professionals</h3>
                <p>Every team member arrives in uniform — presenting Peak Elite's corporate standard on every visit.</p>
              </article>
              <article className="quality-card">
                <div className="quality-ico"><ClipboardList size={20} /></div>
                <h3>Transparent service plans</h3>
                <p>Clear scope, agreed delivery, no surprises — what we promise is what you receive.</p>
              </article>
              <article className="quality-card">
                <div className="quality-ico"><Phone size={20} /></div>
                <h3>Direct point of contact</h3>
                <p>One dedicated contact for questions, adjustments, and new requirements — always accessible.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── WHO WE SERVE ── */}
        <section className="markets-sect" id="markets">
          <div className="wrap">
            <div className="sect-head-center">
              <p className="sect-label-dk">Who We Serve</p>
              <h2>Who we work for.</h2>
              <p>Every environment in Bahrain — served to the same elite standard.</p>
            </div>
            <div className="markets-grid reveal-stagger">
              {markets.map(({ label, icon: Icon, img }) => (
                <div className="market-card" key={label} role="img" aria-label={`${label} we serve in Bahrain`} style={{ backgroundImage: `url(${img})` }}>
                  <div className="market-card-overlay" />
                  <div className="market-card-inner">
                    <div className="market-ico"><Icon size={22} /></div>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="process-sect" id="approach">
          <div className="wrap">
            <div className="process-head">
              <p className="sect-label-lt">How It Works</p>
              <h2>Simple. Clear.<br />Dependable.</h2>
              <p>A clear path from your first request to a fully delivered service.</p>
            </div>
            <div className="steps-row reveal-stagger">
              {[
                { n: '01', title: 'Requirement Review',  desc: 'We listen to what you need and assess the scope.' },
                { n: '02', title: 'Service Plan',        desc: 'A tailored plan with a clear timeline and costs.' },
                { n: '03', title: 'Team Coordination',   desc: 'The right team is assigned and fully briefed.' },
                { n: '04', title: 'On-Site Delivery',    desc: 'Professional execution to our highest standards.' },
                { n: '05', title: 'Follow-Up',           desc: 'We check in to make sure you are satisfied.' },
              ].map(({ n, title, desc }, i, arr) => (
                <div className="step" key={n} data-step={n}>
                  <span className="step-n">{n}</span>
                  <h3>{title}</h3>
                  <p className="step-desc">{desc}</p>
                  {i < arr.length - 1 && <span className="step-arrow"><ArrowRight size={16} /></span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-sect" id="faq">
          <div className="wrap">
            <div className="sect-head-center reveal">
              <p className="sect-label-dk">Frequently Asked Questions</p>
              <h2>Common questions,<br />answered.</h2>
              <p>Everything you need to know about PEAK ELITE's services in Bahrain.</p>
            </div>
            <div className="faq-list reveal-stagger">
              {faqs.map(({ q, a }) => (
                <details className="faq-item" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <ContactForm services={services} company={company} />

        {/* ── LOCATION ── */}
        <section className="location-sect" id="location">
          <div className="wrap location-head reveal">
            <p className="sect-label-dk">Find Us</p>
            <h2>Visit us in Bahrain.</h2>
          </div>
          <div className="location-map reveal">
            <a href="https://www.google.com/maps?q=26.215328,50.594311" target="_blank" rel="noopener noreferrer" className="location-map-link">
              <img src="/assets/googlemaps.jpg" alt="Peak Elite office location in Bahrain" loading="lazy" decoding="async" />
              <div className="location-map-overlay">
                <MapPin size={20} /> Open in Google Maps
              </div>
            </a>
          </div>
          <div className="location-bar">
            <div className="location-bar-inner wrap">
              <div className="lbar-item">
                <span className="lbar-label">Address</span>
                <span className="lbar-val">Adliya Building, Gulf Executive Offices<br />9th Floor, Office 9002, El Azzab Group</span>
              </div>
              <div className="lbar-item">
                <span className="lbar-label">Phone</span>
                <span className="lbar-val">{company.phone}</span>
              </div>
              <div className="lbar-item">
                <span className="lbar-label">Email</span>
                <span className="lbar-val">{company.email}</span>
              </div>
              <div className="lbar-item">
                <span className="lbar-label">Hours</span>
                <span className="lbar-val">Available 24 hours</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── WHATSAPP FLOATING ── */}
      <a
        className="wa-btn"
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap footer-body">
          <div className="footer-brand">
            <PeakLogo />
            <div>
              <strong>PEAK ELITE W.L.L</strong>
              <span>Cleaning · Maintenance · Hospitality · Events</span>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#quality">Quality</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="footer-ig" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </nav>
        </div>
        <div className="footer-base">
          <div className="wrap footer-base-row">
            <span>© {new Date().getFullYear()} PEAK ELITE W.L.L. All rights reserved. · <a href="https://www.webiqq.com" target="_blank" rel="noopener noreferrer" className="footer-credit">Built by Webiqq</a></span>
            <span>{company.location}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
