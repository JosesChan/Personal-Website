import React, { useEffect, useRef, useState } from 'react';

const FireH3 = ({ children, className = '', style, ...props }) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h3
      ref={ref}
      className={`${revealed ? 'fire-reveal' : 'fire-h3-hidden'} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h3>
  );
};

export default FireH3;
