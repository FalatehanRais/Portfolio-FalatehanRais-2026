'use client';
import { useRef, useEffect, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up:    'translateY(32px)',
    down:  'translateY(-32px)',
    left:  'translateX(-32px)',
    right: 'translateX(32px)',
    scale: 'scale(0.94)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : (transforms[direction] ?? 'translateY(32px)'),
        transition: `opacity 0.6s ${delay}s ease, transform 0.65s ${delay}s ease`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
