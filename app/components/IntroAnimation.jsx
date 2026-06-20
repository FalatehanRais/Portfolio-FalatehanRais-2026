'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/IntroAnimation.module.css';

export default function IntroAnimation() {
  const [phase, setPhase] = useState('entering'); // entering | holding | leaving | done

  useEffect(() => {
    // Phase 1: Letters animate in (handled by CSS delay)
    // Phase 2: Hold for a moment
    const holdTimer = setTimeout(() => setPhase('leaving'), 2000);
    // Phase 3: Wipe out, then unmount
    const doneTimer = setTimeout(() => setPhase('done'), 3200);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  const letters = ['F', 'a', 'l', 'a', 't', 'e', 'h', 'a', 'n', '.'];

  return (
    <div className={`${styles.overlay} ${phase === 'leaving' ? styles.leaving : ''}`}>
      {/* Animated red sweep panels */}
      <div className={styles.panelLeft} />
      <div className={styles.panelRight} />

      {/* Center content */}
      <div className={styles.content}>
        {/* Tagline */}
        <p className={styles.tagline}>Portfolio</p>

        {/* Brand name letter-by-letter */}
        <div className={styles.nameRow}>
          {letters.map((char, i) => (
            <span
              key={i}
              className={`${styles.letter} ${char === '.' ? styles.letterRed : ''}`}
              style={{ animationDelay: `${0.05 + i * 0.07}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Loading bar */}
        <div className={styles.loaderTrack}>
          <div className={styles.loaderBar} />
        </div>
      </div>
    </div>
  );
}
