import { motion, type Variants } from 'framer-motion';
import {
  Check,
  ClipboardList,
  Mail,
  Phone,
} from 'lucide-react';
import { IndiaMap } from './components/IndiaMap';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';
import logo from '../assets/logo.png';
import whatsappIcon from '../assets/whatsapp.svg';
import {
  contactDetails,
  phoneNumber,
  processSteps,
  products,
  supplyBenefits,
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
                  <Reveal className="why-card" key={item.title} delay={index * 0.07}>
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

        <section id="process" className="section-pad muted-section">
          <div className="container process-section">
            <SectionHeading
              eyebrow="PROCESS"
              title="From sourcing to dispatch, every stage is business-ready"
              description="A structured process built to support consistent quality, packaging requirements and dependable bulk supply."
            />
            <motion.div
              className="timeline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div
                className="timeline-line"
                initial={{ scaleX: 0, scaleY: 0 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
              />
              {processSteps.map((step, index) => (
                <motion.article className="timeline-step" key={step.title} variants={heroItemVariant}>
                  <span className="timeline-step-icon">
                    <step.icon size={21} />
                  </span>
                  <span className="timeline-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container supply-grid supply-section">
            <Reveal className="supply-copy">
              <span className="eyebrow">PAN INDIA SUPPLY</span>
              <h2>Serving Businesses Across India</h2>
              <p>
                Supplying premium chilli products to manufacturers, distributors and wholesalers across multiple
                states with reliable dispatch planning and scalable packaging options.
              </p>
              <motion.div
                className="supply-benefits"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }}
              >
                {supplyBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                  <motion.span key={benefit.label} className="supply-benefit-pill" variants={heroItemVariant}>
                    <Icon size={17} />
                    {benefit.label}
                  </motion.span>
                  );
                })}
              </motion.div>
            </Reveal>
            <Reveal className="supply-map-wrap" delay={0.12}>
              <IndiaMap />
            </Reveal>
          </div>
        </section>

        <section className="section-pad cta-section">
          <div className="container">
            <Reveal className="cta-panel">
              <span className="eyebrow">Request a quote</span>
              <h2>Need Bulk Chilli Products For Your Business?</h2>
              <p>
                Connect with Shah Spices for premium quality chilli products, dependable supply and competitive bulk pricing.
              </p>
              <div className="cta-row centered">
                <a className="btn primary" href="#contact">
                  Request Bulk Quote
                  <ClipboardList size={18} />
                </a>
                <a className="btn secondary" href={whatsappLink} target="_blank" rel="noreferrer">
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
                <input name="name" type="text" autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                Company Name
                <input name="company" type="text" autoComplete="organization" placeholder="Company / firm name" />
              </label>
              <label>
                Phone Number
                <input name="phone" type="tel" autoComplete="tel" placeholder={phoneNumber} />
              </label>
              <label>
                Requirement
                <textarea name="requirement" placeholder="Product, quantity, packaging and delivery requirement" />
              </label>
              <a className="btn primary full" href={whatsappLink} target="_blank" rel="noreferrer">
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
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp Shah Spices">
        <img className="floating-whatsapp-icon" src={whatsappIcon} alt="" aria-hidden="true" />
      </a>
    </div>
  );
}

const heroItemVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
};

const heroTrustBadges = ['Manufacturer Direct', 'Export Quality', 'Custom Packaging', 'Competitive Pricing'];

export default App;
