'use client';
import Reveal from './Reveal';
import styles from '../styles/Portfolio.module.css';

const works = [
  {
    title: 'Garasi Auto Clinic App',
    desc: 'Mobile application for automotive clinic management with real-time booking.',
    tags: ['Flutter', 'Firebase', 'Figma'],
    gradient: 'linear-gradient(135deg, #0f1b3d 0%, #1a1a2e 100%)',
    icon: 'fa-solid fa-mobile-screen',
  },
  {
    title: 'Ceritera Kita Branding',
    desc: 'Visual identity and video content for a storytelling platform.',
    tags: ['Color Grading', 'DaVinci', 'Content'],
    gradient: 'linear-gradient(135deg, #3d1a00 0%, #2d0a0a 100%)',
    icon: 'fa-solid fa-film',
  },
  {
    title: 'Poster Design Competition',
    desc: 'Award-winning competition poster with bold typographic composition.',
    tags: ['Poster', 'Illustrator', 'Photoshop'],
    gradient: 'linear-gradient(135deg, #1a003d 0%, #2a1040 100%)',
    icon: 'fa-solid fa-palette',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Portfolio</span>
          <h2 className="sectionTitle">Featured Work</h2>
        </div>

        <div className={styles.grid}>
          {works.map((work, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <div className={styles.card} data-testid={`portfolio-card-${i}`}>
                <div className={styles.thumbnail} style={{ background: work.gradient }}>
                  <i className={`${work.icon} ${styles.thumbIcon}`} />
                  <div className={styles.overlay}>
                    <button className={styles.overlayBtn}>View Case Study</button>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{work.title}</h3>
                  <p className={styles.cardDesc}>{work.desc}</p>
                  <div className={styles.tags}>
                    {work.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
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
