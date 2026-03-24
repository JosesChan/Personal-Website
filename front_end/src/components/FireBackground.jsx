import React, { useMemo } from 'react';

// Seeded pseudo-random so SSR/client renders are stable
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

const PARTICLE_COUNT = 40;

const FireBackground = () => {
  const particles = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const left = rand() * 100;           // % across the viewport
      const size = 3 + rand() * 10;        // px
      const duration = 3 + rand() * 5;     // seconds
      const delay = rand() * 6;            // seconds
      const hue = rand() > 0.6 ? 30 + rand() * 20 : 0; // mostly red, some orange
      const opacity = 0.3 + rand() * 0.55;
      return { id: i, left, size, duration, delay, hue, opacity };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {particles.map(({ id, left, size, duration, delay, hue, opacity }) => (
        <span
          key={id}
          className="fire-particle"
          style={{
            left: `${left}%`,
            width: size,
            height: size * 1.4,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            background: `radial-gradient(circle at 40% 30%, hsl(${hue + 40},100%,70%), hsl(${hue},100%,45%) 50%, transparent 80%)`,
            opacity,
            borderRadius: '50% 50% 30% 30%',
          }}
        />
      ))}
    </div>
  );
};

export default FireBackground;
