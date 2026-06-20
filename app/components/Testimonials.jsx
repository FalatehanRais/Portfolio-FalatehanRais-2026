'use client';
import Reveal from './Reveal';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  {
    text: "Falatehan's design work transformed our product completely. Exceptional attention to detail and creative problem-solving.",
    author: 'Jayesh Patil',
    role: 'CEO at Lirante',
    initials: 'JP',
  },
  {
    text: "Outstanding videography work that captured our brand story beautifully. Highly professional and creative.",
    author: 'Siti M.',
    role: 'Product Lead at Garasi Auto',
    initials: 'SM',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Testimonials</span>
          <h2 className="sectionTitle">What People Say</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={i} direction="scale" delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="fa-solid fa-star" />
                  ))}
                </div>
                <p className={styles.quote}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.footer}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div>
                    <div className={styles.author}>{t.author}</div>
                    <div className={styles.role}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
