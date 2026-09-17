import React, { useMemo } from 'react';

// Seeded pseudo-random so SSR/client renders are stable
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

const PARTICLE_COUNT = 54;

const FireBackground = () => {
  const particles = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const left = rand() * 100;
      const size = 10 + rand() * 20;
      const duration = 10 + rand() * 13;
      const delay = rand() * 18;
      const opacity = 0.2 + rand() * 0.45;
      const driftA = (rand() * 22 - 11).toFixed(2);
      const driftB = (rand() * 34 - 17).toFixed(2);
      const spinStart = Math.round(rand() * 160 - 80);
      const spinEnd = spinStart + Math.round(rand() * 190 - 95);
      const hue = 335 + rand() * 32;
      const lightness = 56 + rand() * 18;
      const shape = i % 4;

      const petalRadius = [
        '58% 42% 64% 36% / 78% 78% 22% 22%',
        '46% 54% 60% 40% / 80% 72% 28% 20%',
        '65% 35% 52% 48% / 84% 84% 16% 16%',
        '52% 48% 66% 34% / 74% 82% 18% 26%',
      ][shape];

      const petalClip = [
        'ellipse(48% 50% at 50% 42%)',
        'polygon(50% 0%, 84% 28%, 76% 72%, 50% 100%, 22% 72%, 14% 30%)',
        'ellipse(43% 52% at 50% 48%)',
        'polygon(50% 2%, 88% 32%, 70% 78%, 50% 100%, 30% 78%, 12% 32%)',
      ][shape];

      return {
        id: i,
        left,
        size,
        duration,
        delay,
        opacity,
        driftA,
        driftB,
        spinStart,
        spinEnd,
        hue,
        lightness,
        petalRadius,
        petalClip,
      };
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
      {particles.map(({ id, left, size, duration, delay, opacity, driftA, driftB, spinStart, spinEnd, hue, lightness, petalRadius, petalClip }) => (
        <span
          key={id}
          className="background-petal"
          style={{
            left: `${left}%`,
            width: size,
            height: size * 1.7,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            background: `radial-gradient(120% 120% at 28% 22%, hsla(${hue + 10}, 90%, ${Math.min(lightness + 16, 88)}%, 0.95), hsla(${hue}, 78%, ${lightness}%, 0.88) 54%, hsla(${hue - 12}, 72%, ${Math.max(lightness - 18, 24)}%, 0.56) 100%)`,
            opacity,
            borderRadius: petalRadius,
            clipPath: petalClip,
            boxShadow: `0 0 ${Math.round(size * 0.35)}px hsla(${hue}, 80%, ${Math.min(lightness + 8, 84)}%, 0.22)`,
            '--start-opacity': opacity,
            '--drift-a': `${driftA}vw`,
            '--drift-b': `${driftB}vw`,
            '--spin-start': `${spinStart}deg`,
            '--spin-end': `${spinEnd}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default FireBackground;
