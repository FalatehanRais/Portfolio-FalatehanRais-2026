'use client';
import Reveal from './Reveal';
import styles from '../styles/Achievements.module.css';

const achievements = [
  {
    icon: 'fa-solid fa-trophy',
    title: '1st Place – Poster Design',
    subtitle: 'Management Festival 2023',
    desc: 'Awarded first place in the national poster design competition.',
  },
  {
    icon: 'fa-solid fa-trophy',
    title: '1st Place – Informatic Festival 3.0',
    subtitle: 'Poster Competition',
    desc: 'Top position in the informatics poster design category.',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Bachelor of Information Systems',
    subtitle: 'GPA 3.62 / 4.00, 2021–2025',
    desc: 'Information Systems undergraduate with honors.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Achievements</span>
          <h2 className="sectionTitle">From My Journey</h2>
        </div>

        <div className={styles.list}>
          {achievements.map((ach, i) => (
            <Reveal key={i} direction="left" delay={i * 0.1}>
              <div className={styles.item}>
                <div className={styles.iconWrap}>
                  <i className={ach.icon} style={{ fontSize: '1.25rem', color: 'var(--red)' }} />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{ach.title}</h3>
                  <div className={styles.subtitle}>{ach.subtitle}</div>
                  <p className={styles.desc}>{ach.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
