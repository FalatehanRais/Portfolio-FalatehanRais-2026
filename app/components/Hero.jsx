'use client';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.css';

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 50 : 100
    );
    return () => clearTimeout(t);
  }, [subIndex, index, reverse, words]);

  return (
    <span className={styles.typewriterText}>
      {words[index].substring(0, subIndex)}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const frames = Math.round(duration / 16);
          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = frame / frames;
            setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
            if (frame === frames) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={styles.heroWrapper}>
      {/* Hero Section */}
      <section id="hero" className={styles.section}>
        <div className={styles.glow} />

        {/* ---- FLOATING OBJECTS ---- */}

        {/* 1. Pokéball */}
        <div className={`${styles.floatingObject} ${styles.pokeballWrap}`}>
          <div className={styles.pokeballInner}>
            <svg viewBox="0 0 100 100" className={styles.pokeball}>
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255, 51, 68, 0.8)" strokeWidth="2.5" />
              <path d="M 50,50 M 4,50 A 46,46 0 0,1 96,50 Z" fill="var(--red)" opacity="0.85" />
              <path d="M 50,50 M 4,50 A 46,46 0 0,0 96,50 Z" fill="rgba(255, 255, 255, 0.15)" opacity="0.85" />
              <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="3" />
              <circle cx="50" cy="50" r="14" fill="rgba(13, 13, 13, 0.9)" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="2" />
              <circle cx="50" cy="50" r="7" fill="#fff" />
              <circle cx="50" cy="50" r="3" fill="var(--red-ff)" />
            </svg>
          </div>
        </div>

        {/* 2. Gamepad */}
        <div className={`${styles.floatingObject} ${styles.gamepadWrap}`}>
          <div className={styles.gamepadInner}>
            <svg viewBox="0 0 100 100" className={styles.gamepad}>
              <path d="M 22,22 C 32,22 42,28 50,28 C 58,28 68,22 78,22 C 88,22 92,35 90,52 C 88,72 82,85 74,85 C 66,85 62,70 50,70 C 38,70 34,85 26,85 C 18,85 12,72 10,52 C 8,35 12,22 22,22 Z" fill="none" stroke="rgba(255, 51, 68, 0.85)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M 24,48 h 5 v -5 h 3 v 5 h 5 v 3 h -5 v 5 h -3 v -5 h -5 z" fill="rgba(255, 51, 68, 0.85)" />
              <circle cx="72" cy="40" r="2.5" fill="#fff" />
              <circle cx="66" cy="46" r="2.5" fill="var(--red-ff)" />
              <circle cx="78" cy="46" r="2.5" fill="var(--red-ff)" />
              <circle cx="72" cy="52" r="2.5" fill="#fff" />
              <line x1="41" y1="41" x2="45" y2="37" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="59" y1="41" x2="55" y2="37" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="38" cy="58" r="7" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />
              <circle cx="38" cy="58" r="2.5" fill="rgba(255, 51, 68, 0.85)" />
              <circle cx="62" cy="58" r="7" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />
              <circle cx="62" cy="58" r="2.5" fill="rgba(255, 51, 68, 0.85)" />
            </svg>
          </div>
        </div>

        {/* 3. Book */}
        <div className={`${styles.floatingObject} ${styles.bookWrap}`}>
          <div className={styles.bookInner}>
            <svg viewBox="0 0 100 100" className={styles.book}>
              <path d="M 50,28 L 12,33 A 2,2 0 0,0 10,35 L 10,78 A 2,2 0 0,0 12,80 L 50,75 L 88,80 A 2,2 0 0,0 90,78 L 90,35 A 2,2 0 0,0 88,33 Z" fill="rgba(255, 51, 68, 0.15)" stroke="rgba(255, 51, 68, 0.85)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 50,28 C 38,28 22,31 14,34 L 14,74 C 22,71 38,68 50,68 Z" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 50,28 C 62,28 78,31 86,34 L 86,74 C 78,71 62,68 50,68 Z" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="2" strokeLinejoin="round" />
              <line x1="50" y1="28" x2="50" y2="73" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" />
              <line x1="20" y1="44" x2="42" y2="44" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="50" x2="38" y2="50" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="56" x2="44" y2="56" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="62" x2="34" y2="62" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="58" y1="44" x2="80" y2="44" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="58" y1="50" x2="74" y2="50" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="58" y1="56" x2="80" y2="56" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="58" y1="62" x2="70" y2="62" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* 4. Film Reel (movie roller) */}
        <div className={`${styles.floatingObject} ${styles.filmReelWrap}`}>
          <div className={styles.filmReelInner}>
            <svg viewBox="0 0 100 100" className={styles.filmReel}>
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255, 51, 68, 0.8)" strokeWidth="3" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
              <line x1="50" y1="8" x2="50" y2="28" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
              <line x1="50" y1="72" x2="50" y2="92" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
              <line x1="8" y1="50" x2="28" y2="50" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
              <line x1="72" y1="50" x2="92" y2="50" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
              <line x1="20" y1="20" x2="34" y2="34" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="80" y1="20" x2="66" y2="34" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="80" x2="34" y2="66" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="80" y1="80" x2="66" y2="66" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="50" cy="50" r="8" fill="rgba(255, 51, 68, 0.85)" />
            </svg>
          </div>
        </div>

        {/* 5. Videogame Sword */}
        <div className={`${styles.floatingObject} ${styles.swordWrap}`}>
          <div className={styles.swordInner}>
            <svg viewBox="0 0 100 100" className={styles.sword}>
              <path d="M 50,10 L 58,30 L 55,30 L 54,45 L 60,50 L 54,55 L 55,70 L 58,70 L 50,90 L 42,70 L 45,70 L 46,55 L 40,50 L 46,45 L 45,30 L 42,30 Z"
                fill="rgba(255, 255, 255, 0.9)" stroke="rgba(255, 51, 68, 0.6)" strokeWidth="1.5" />
              <rect x="35" y="45" width="30" height="10" rx="2" fill="rgba(255, 51, 68, 0.85)" />
              <rect x="44" y="55" width="12" height="25" rx="3" fill="rgba(200, 200, 200, 0.6)" />
              <circle cx="50" cy="82" r="6" fill="rgba(255, 51, 68, 0.7)" />
              <circle cx="50" cy="82" r="3" fill="#fff" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* ---- END FLOATING OBJECTS ---- */}

        <div className={styles.topContent}>
          <div className={styles.badge}>
            <i className={`fa-solid fa-rocket ${styles.badgeIcon}`} />
            <span>Hello!</span>
          </div>

          <div className={styles.headingWrap}>
            <h1 className={styles.heading1}>
              <span className={styles.headingWhite}>I&apos;m </span>
              <span className={styles.headingRed}>Falatehan,</span>
            </h1>
            <h1 className={styles.heading2}>
              <Typewriter words={['UI/UX Designer', 'Graphic Designer', 'Videographer', 'Photographer']} />
            </h1>
          </div>

          <div className={styles.photoWrap}>
            <div className={styles.semicircle} />
            <div className={styles.ring} />
            <img
              src="/avatar.png"
              alt="Falatehan Rais"
              className={styles.photo}
              data-testid="hero-avatar"
            />
            <div className={styles.buttons}>
              <button
                onClick={() => scrollTo('portfolio')}
                className={styles.btnPrimary}
                data-testid="hero-portfolio-btn"
              >
                Portfolio <i className="fa-solid fa-arrow-right" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className={styles.btnSecondary}
                data-testid="hero-hire-btn"
              >
                Hire me
              </button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className={`${styles.floatCard} ${styles.leftCard}`}>
          <span className={styles.quoteChar}>&ldquo;</span>
          <p className={styles.quoteText}>
            Falatehan&apos;s design work transformed our product. Exceptional attention to detail.
          </p>
          <div className={styles.attribution}>
            <div className={styles.authorAvatar}>J</div>
            <span className={styles.authorName}>Jayesh P. &mdash; CEO, Lirante</span>
          </div>
        </div>

        <div className={`${styles.floatCard} ${styles.rightStat}`}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star" style={{ color: 'var(--red)', fontSize: '1rem' }} />
            ))}
          </div>
          <div className={styles.statBig}>3+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className={styles.statsStrip}>
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            {[
              { target: 3, suffix: '+', label: 'Years Experience' },
              { target: 4, suffix: '', label: 'Organizations' },
              { target: 2, suffix: '', label: 'Awards Won' },
              { target: 5, suffix: '+', label: 'Projects' },
            ].map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className={styles.statDesc}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}