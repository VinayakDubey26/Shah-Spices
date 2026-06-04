import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { navLinks, whatsappLink } from '../data/siteData';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      let currentSection = 'Home';

      for (const link of navLinks) {
        const section = document.getElementById(link.toLowerCase().replace(' ', '-'));
        if (section && section.offsetTop <= window.scrollY + 140) {
          currentSection = link;
        }
      }

      setActiveLink(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={['navbar', isOpen ? 'menu-open' : '', isScrolled ? 'scrolled' : ''].filter(Boolean).join(' ')}>
      <a className="brand" href="#home" aria-label="Shah Spices home">
        <span className="logo-frame">
          <img className="brand-logo" src={logo} alt="Shah Spices" />
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen((value) => !value)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav id="primary-navigation" className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            className={activeLink === link ? 'active' : undefined}
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            onClick={() => {
              setActiveLink(link);
              setIsOpen(false);
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="whatsapp-pill" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </header>
  );
}
