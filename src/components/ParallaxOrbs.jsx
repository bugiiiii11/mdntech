import { useEffect, useState } from 'react';

const ParallaxOrbs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define floating orbs with different speeds
  const orbs = [
    { id: 1, size: 300, speed: 0.15, x: '10%', y: '15%', opacity: 0.15 },
    { id: 2, size: 250, speed: 0.25, x: '85%', y: '25%', opacity: 0.12 },
    { id: 3, size: 350, speed: 0.1, x: '20%', y: '60%', opacity: 0.18 },
    { id: 4, size: 200, speed: 0.3, x: '75%', y: '70%', opacity: 0.1 },
    { id: 5, size: 280, speed: 0.2, x: '50%', y: '40%', opacity: 0.14 },
    { id: 6, size: 220, speed: 0.35, x: '90%', y: '85%', opacity: 0.11 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full blur-3xl glow-orb-blue"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: orb.x,
            top: `calc(${orb.y} + ${scrollY * orb.speed}px)`,
            opacity: orb.opacity,
            transition: 'top 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxOrbs;
