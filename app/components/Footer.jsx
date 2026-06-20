'use client';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>Falatehan.</div>
            <p className={styles.brandDesc}>
              Creative professional specializing in UI/UX, graphic design, and videography.
            </p>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className={styles.navLink}
                data-testid={`footer-link-${link}`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <p className={styles.contactText}>teanrais@gmail.com</p>
            <p className={styles.contactText}>+62 819 5800 0304</p>
            <p className={styles.contactText}>LinkedIn: @teanrais</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Copyright &copy; 2025 Falatehan Rais. All Rights Reserved.</p>
          <p>User Terms &amp; Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
