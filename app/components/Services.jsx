'use client';
import Reveal from './Reveal';
import styles from '../styles/Services.module.css';

const services = [
  { icon: 'fa-solid fa-pen-ruler',  title: 'UI/UX Design',   desc: 'Creating intuitive and beautiful user interfaces that delight users.' },
  { icon: 'fa-solid fa-pen-fancy',  title: 'Graphic Design', desc: 'Crafting visual identities, posters, and brand materials.' },
  { icon: 'fa-solid fa-video',      title: 'Videography',    desc: 'Producing cinematic video content for brands and events.' },
  { icon: 'fa-solid fa-camera',     title: 'Photography',    desc: 'Capturing moments with artistic precision and storytelling.' },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">What I Do</span>
          <h2 className="sectionTitle">My Services</h2>
          <p className={styles.desc}>
            Comprehensive creative solutions tailored to elevate your brand and engage your audience.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((srv, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <div className={styles.card} data-testid={`service-card-${i}`}>
                <div className={styles.iconWrap}>
                  <i className={srv.icon} style={{ fontSize: '1.8rem', color: 'var(--red)' }} />
                </div>
                <h3 className={styles.cardTitle}>{srv.title}</h3>
                <p className={styles.cardDesc}>{srv.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
