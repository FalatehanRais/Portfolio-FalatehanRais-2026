'use client';
import Reveal from './Reveal';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal className={styles.left} direction="left">
            <span className="sectionLabel">About Me</span>
            <h2 className={styles.heading}>Designing with purpose &amp; creativity.</h2>
            <div className={styles.bio}>
              <p>
                Every pixel, frame, and color choice has a story to tell. I approach design not just
                as creating something beautiful, but as solving problems elegantly.
              </p>
              <p>
                My diverse background across UI/UX, graphic design, and media production allows me
                to see the bigger picture of a brand&apos;s narrative and deliver cohesive, impactful
                experiences.
              </p>
            </div>
            <div className={styles.skills}>
              {['Figma', 'Adobe CC', 'DaVinci Resolve'].map((s) => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.card} direction="right" delay={0.1}>
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              <h3 className={styles.quote}>
                &ldquo;Creativity is intelligence having fun.&rdquo;
              </h3>
              <p className={styles.quoteAuthor}>&mdash; Albert Einstein</p>
              <hr className={styles.divider} />
              <div className={styles.profileRow}>
                <div className={styles.avatarWrap}>
                  <img
                    src="/avatar.png"
                    alt="Falatehan Rais"
                    className={styles.avatar}
                  />
                </div>
                <div>
                  <div className={styles.profileName}>Falatehan Rais</div>
                  <div className={styles.profileRole}>UI/UX &amp; Graphic Designer</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
