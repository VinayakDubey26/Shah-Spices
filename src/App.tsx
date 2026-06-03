import { motion, type Variants } from 'framer-motion';
import {
  Check,
  ClipboardList,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { IndiaMap } from './components/IndiaMap';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';
import logo from '../assets/logo.png';
import {
  contactDetails,
  industries,
  phoneNumber,
  processSteps,
  products,
  trustBarItems,
  whatsappLink,
  whyUs,
} from './data/siteData';

function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <motion.div
                className="hero-copy"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <motion.span
                  className="eyebrow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
                >
                  Manufacturer & Bulk Supplier
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.68, delay: 0.16, ease: 'easeOut' }}
                >
                  Premium Chilli Products For Manufacturers, Distributors & Wholesalers
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.24, ease: 'easeOut' }}
                >
                  Manufacturer of premium whole red chillies, chilli powder and chilli seeds. Supplying export-quality
                  products with competitive pricing, custom packaging and dependable supply across India.
                </motion.p>
                <motion.div
                  className="cta-row"
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.34 } } }}
                >
                  <motion.a className="btn primary" href="#contact" variants={heroItemVariant}>
                    Talk To Sales
                  </motion.a>
                  <motion.a className="btn secondary" href={whatsappLink} target="_blank" rel="noreferrer" variants={heroItemVariant}>
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </motion.a>
                </motion.div>
                <motion.div
                  className="trust-badges"
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.48 } } }}
                >
                  {heroTrustBadges.map((badge) => (
                    <motion.span key={badge} variants={heroItemVariant}>
                      <Check size={15} />
                      {badge}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="trust-bar" aria-label="Business trust highlights">
          <div className="container trust-scroll">
            {trustBarItems.map((item) => (
              <span key={item}>
                <Check size={16} />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="products" className="section-pad">
          <div className="container">
            <SectionHeading
              eyebrow="PRODUCT PORTFOLIO"
              title="Bulk chilli products for serious business buyers"
              description="Focused product lines designed for manufacturers, distributors, wholesalers and retailers who value consistency."
            />
            <div className="product-grid">
              {products.map((product, index) => (
                <Reveal key={product.title} delay={index * 0.08}>
                  <ProductCard {...product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section-pad muted-section">
          <div className="container why-section">
            <SectionHeading
              eyebrow="WHY SHAH SPICES"
              title="Commercial advantages built around bulk supply"
              description="A practical, supplier-first approach for buyers who need pricing clarity, quality discipline and dependable fulfilment."
            />
            <div className="card-grid four why-grid">
              {whyUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal className="premium-card why-card" key={item.title} delay={index * 0.07}>
                    <span className="why-card-icon">
                      <Icon size={22} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container industries-section">
            <SectionHeading
              eyebrow="INDUSTRIES WE SERVE"
              title="Supplying chilli products across trade channels"
              description="Shah Spices supports bulk chilli requirements for businesses across manufacturing, distribution and retail supply chains."
            />
            <div className="industry-grid">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Reveal className={`industry-card ${industry.tone}`} key={industry.title} delay={index * 0.06}>
                    <div className="industry-visual" aria-hidden="true">
                      <span className="industry-surface" />
                      <span className="industry-shape industry-shape-one" />
                      <span className="industry-shape industry-shape-two" />
                      <span className="industry-detail" />
                    </div>
                    <div className="industry-overlay">
                      <span className="industry-icon">
                        <Icon size={18} />
                      </span>
                      <span>{industry.title}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="section-pad muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Process"
              title="From sourcing to dispatch, every stage is business-ready"
            />
            <Reveal className="timeline">
              <motion.div
                className="timeline-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
              />
              {processSteps.map((step, index) => (
                <div className="timeline-step" key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-pad">
          <div className="container supply-grid">
            <Reveal>
              <span className="eyebrow">Pan India supply</span>
              <h2>Serving Businesses Across India</h2>
              <p>
                Shah Spices supports growing trade requirements with reliable dispatch planning, scalable packaging
                options and quote-led procurement conversations.
              </p>
              <span className="export-tag">Export Ready</span>
            </Reveal>
            <Reveal delay={0.12}>
              <IndiaMap />
            </Reveal>
          </div>
        </section>

        <section className="section-pad cta-section">
          <div className="container">
            <Reveal className="cta-panel">
              <span className="eyebrow">Request a quote</span>
              <h2>Looking For A Reliable Chilli Products Partner?</h2>
              <p>
                Connect with Shah Spices for premium quality products, competitive pricing and dependable supply.
              </p>
              <div className="cta-row centered">
                <a className="btn primary" href="#contact">
                  Request Quote
                  <ClipboardList size={18} />
                </a>
                <a className="btn secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="container contact-grid">
            <Reveal>
              <span className="eyebrow">Contact</span>
              <h2>Send your bulk requirement</h2>
              <p>
                Share your product, quantity and packaging needs. The form is visual for now, with WhatsApp as the
                fastest inquiry channel.
              </p>
              <div className="contact-list">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label}>
                      <Icon size={20} />
                      <span>{detail.label}</span>
                      {detail.label === 'Email' ? (
                        <a href="mailto:info@shahspices.com">{detail.value}</a>
                      ) : (
                        <strong>{detail.value}</strong>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>
            <Reveal className="quote-form" delay={0.12}>
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Company Name
                <input type="text" placeholder="Company / firm name" />
              </label>
              <label>
                Phone Number
                <input type="tel" placeholder={phoneNumber} />
              </label>
              <label>
                Requirement
                <textarea placeholder="Product, quantity, packaging and delivery requirement" />
              </label>
              <a className="btn primary full" href={whatsappLink} target="_blank" rel="noreferrer">
                <Send size={18} />
                Request Quote on WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand" href="#home">
              <span className="footer-logo-frame">
                <img className="footer-logo" src={logo} alt="Shah Spices" />
              </span>
            </a>
            <p>Manufacturer and supplier of Whole Red Chillies, Chilli Powder and Chilli Seeds.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#products">Products</a>
            <a href="#why-us">Why Us</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Products</h4>
            {products.map((product) => (
              <a key={product.title} href="#products">{product.title}</a>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${phoneNumber.replaceAll(' ', '')}`}>
              <Phone size={15} />
              {phoneNumber}
            </a>
            <a href="mailto:info@shahspices.com">
              <Mail size={15} />
              info@shahspices.com
            </a>
          </div>
        </div>
        <div className="container copyright">Copyright 2026 Shah Spices. All rights reserved.</div>
      </footer>
    </div>
  );
}

const heroItemVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
};

const heroTrustBadges = ['Manufacturer Direct', 'Export Quality', 'Custom Packaging', 'Competitive Pricing'];

export default App;
