'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // New: scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div
          className={styles.logo}
          onClick={scrollToTop}
          data-testid="nav-logo"
          style={{ cursor: 'pointer' }}
        >
          Falatehan.
        </div>

        <div className={styles.links}>
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={styles.link}
              data-testid={`nav-link-${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={styles.mobileLink}
              data-testid={`nav-mobile-link-${item}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}