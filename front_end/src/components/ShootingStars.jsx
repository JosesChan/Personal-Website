import React, { useEffect, useRef } from 'react';

/**
 * ShootingStars – a full-screen canvas background that renders animated
 * shooting-star trails streaking diagonally from the top-left toward the
 * bottom-right, with a glowing red/white colour palette to match the
 * aggressive red-and-black site theme.
 *
 * Rendered on a <canvas> element positioned fixed behind all page content
 * (z-index: -1) so it never interferes with layout or accessibility.
 */

const STAR_COUNT = 18;
const ANGLE = Math.PI / 4; // 45° – top-left to bottom-right

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createStar(canvasWidth, canvasHeight) {
  // Spawn anywhere along the top edge or left edge so stars always enter from
  // the top-left region and travel toward the bottom-right.
  const spawnOnTop = Math.random() > 0.5;
  const x = spawnOnTop ? randomBetween(0, canvasWidth) : randomBetween(-canvasWidth * 0.3, 0);
  const y = spawnOnTop ? randomBetween(-canvasHeight * 0.3, 0) : randomBetween(0, canvasHeight);

  const speed = randomBetween(200, 520);       // px / second
  const length = randomBetween(80, 220);       // trail length in px
  const width = randomBetween(1, 2.5);         // stroke width
  const opacity = randomBetween(0.6, 1.0);

  // Pick a colour from the red-white spectrum
  const colours = [
    `rgba(255, 255, 255, ${opacity})`,
    `rgba(255, 200, 200, ${opacity})`,
    `rgba(255, 100, 80,  ${opacity})`,
    `rgba(220, 40,  40,  ${opacity})`,
  ];
  const colour = colours[Math.floor(Math.random() * colours.length)];

  return { x, y, speed, length, width, colour, opacity };
}

const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrameId;
    let lastTime = null;

    // ── resize handling ──────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── initialise stars ─────────────────────────────────────────────────────
    const stars = Array.from({ length: STAR_COUNT }, () =>
      createStar(canvas.width, canvas.height)
    );

    const dx = Math.cos(ANGLE);  // ≈ 0.707
    const dy = Math.sin(ANGLE);  // ≈ 0.707

    // ── animation loop ───────────────────────────────────────────────────────
    const draw = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const delta = Math.min((timestamp - lastTime) / 1000, 0.1); // seconds, capped
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, i) => {
        // Advance position
        star.x += dx * star.speed * delta;
        star.y += dy * star.speed * delta;

        // Recycle star once it leaves the canvas
        if (star.x - star.length > canvas.width || star.y - star.length > canvas.height) {
          stars[i] = createStar(canvas.width, canvas.height);
          return;
        }

        // Draw glowing trail: head bright, tail transparent
        const tailX = star.x - dx * star.length;
        const tailY = star.y - dy * star.length;

        const grad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, star.colour);

        ctx.save();
        ctx.shadowColor = star.colour;
        ctx.shadowBlur  = 8 + star.width * 4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = star.width;
        ctx.lineCap     = 'round';
        ctx.stroke();
        ctx.restore();
      });

      animFrameId = requestAnimationFrame(draw);
    };

    animFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: '#000',
      }}
    />
  );
};

export default ShootingStars;
