import { useEffect, useState, useMemo } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate light rays configuration (excluding horizontal)
  const rays = [
    // Top rays
    { angle: -30, delay: 0, duration: 4, color: 'blue' },
    { angle: -15, delay: 0.5, duration: 5, color: 'white' },
    { angle: 15, delay: 1, duration: 4.5, color: 'blue' },
    { angle: 30, delay: 0.3, duration: 5.5, color: 'cyan' },
    // Bottom rays
    { angle: 150, delay: 0.8, duration: 4.2, color: 'blue' },
    { angle: 165, delay: 0.2, duration: 5.2, color: 'white' },
    { angle: -150, delay: 1.2, duration: 4.8, color: 'cyan' },
    { angle: -165, delay: 0.6, duration: 5, color: 'blue' },
    // Side rays (angled, not horizontal)
    { angle: 45, delay: 0.4, duration: 4.6, color: 'white' },
    { angle: -45, delay: 0.9, duration: 5.1, color: 'blue' },
    { angle: 135, delay: 0.7, duration: 4.4, color: 'cyan' },
    { angle: -135, delay: 1.1, duration: 4.9, color: 'blue' },
  ];

  // Generate star field - memoized to prevent re-renders
  const stars = useMemo(() =>
    [...Array(80)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      twinkleDuration: 2 + Math.random() * 3,
      twinkleDelay: Math.random() * 2,
    })), []
  );

  const getGradientColor = (color) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500/20 via-blue-400/5';
      case 'cyan':
        return 'from-cyan-400/15 via-cyan-300/5';
      case 'white':
        return 'from-white/10 via-white/3';
      default:
        return 'from-blue-500/20 via-blue-400/5';
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background base gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dark via-dark to-dark-card opacity-50" />

      {/* Star field background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Center darker area for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 20, 25, 0.95) 0%, rgba(15, 20, 25, 0.7) 40%, transparent 70%)',
        }}
      />

      {/* Central glow pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Outer glow */}
        <div
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
            animation: 'centralPulse 4s ease-in-out infinite',
          }}
        />
        {/* Inner glow */}
        <div
          className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)',
            animation: 'centralPulse 4s ease-in-out 0.5s infinite',
          }}
        />
        {/* Core glow */}
        <div
          className="absolute w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%)',
            animation: 'centralPulse 3s ease-in-out 0.2s infinite',
          }}
        />
      </div>

      {/* Premium horizontal glow line */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
        {/* Base layer - wide soft glow */}
        <div
          className="absolute inset-x-0 h-[120px] -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.03) 20%, rgba(96, 165, 250, 0.08) 50%, rgba(59, 130, 246, 0.03) 80%, transparent 100%)',
            filter: 'blur(30px)',
            animation: 'horizontalGlow 5s ease-in-out infinite',
          }}
        />

        {/* Middle layer - medium glow */}
        <div
          className="absolute inset-x-0 h-[60px] -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.05) 15%, rgba(96, 165, 250, 0.15) 50%, rgba(59, 130, 246, 0.05) 85%, transparent 100%)',
            filter: 'blur(15px)',
            animation: 'horizontalGlow 5s ease-in-out 0.3s infinite',
          }}
        />

        {/* Core layer - bright center line */}
        <div
          className="absolute inset-x-0 h-[20px] -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.1) 10%, rgba(191, 219, 254, 0.25) 50%, rgba(147, 197, 253, 0.1) 90%, transparent 100%)',
            filter: 'blur(8px)',
            animation: 'horizontalGlow 5s ease-in-out 0.5s infinite',
          }}
        />

        {/* Sharp accent line */}
        <div
          className="absolute inset-x-0 h-[2px] -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.2) 20%, rgba(191, 219, 254, 0.5) 50%, rgba(96, 165, 250, 0.2) 80%, transparent 100%)',
            animation: 'horizontalGlowIntense 4s ease-in-out infinite',
          }}
        />

        {/* Single animated light travel effect - left to right */}
        <div
          className="absolute h-[60px] w-[300px] -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(191, 219, 254, 0.4) 0%, rgba(96, 165, 250, 0.2) 40%, transparent 70%)',
            filter: 'blur(15px)',
            animation: 'lightTravel 6s linear infinite',
          }}
        />
      </div>

      {/* Animated converging light rays */}
      <div className="absolute inset-0 overflow-hidden">
        {rays.map((ray, index) => (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 w-[200%] h-[2px] origin-left bg-gradient-to-r ${getGradientColor(ray.color)} to-transparent`}
            style={{
              transform: `rotate(${ray.angle}deg) translateX(-50%)`,
              animation: `rayPulse ${ray.duration}s ease-in-out ${ray.delay}s infinite`,
            }}
          />
        ))}

        {/* Additional wider rays for depth */}
        {rays.slice(0, 6).map((ray, index) => (
          <div
            key={`wide-${index}`}
            className={`absolute top-1/2 left-1/2 w-[150%] h-[60px] origin-left bg-gradient-to-r ${getGradientColor(ray.color)} to-transparent blur-2xl`}
            style={{
              transform: `rotate(${ray.angle + 5}deg) translateX(-50%)`,
              animation: `rayPulse ${ray.duration + 1}s ease-in-out ${ray.delay + 0.5}s infinite`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Corner accent glows - top corners only, more visible */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[130px] translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <div className="container-custom text-center relative z-10">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Your Vision,{' '}
            <span className="text-primary">Engineered</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We build custom web applications, mobile apps, and blockchain solutions
            that drive your business forward.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-base px-8 py-4"
            >
              Start Your Project
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-base px-8 py-4"
            >
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes rayPulse {
          0%, 100% {
            opacity: 0.3;
            transform: rotate(var(--angle)) translateX(-50%) scaleX(0.8);
          }
          50% {
            opacity: 0.8;
            transform: rotate(var(--angle)) translateX(-50%) scaleX(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0.5;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes centralPulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes horizontalGlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes horizontalGlowIntense {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes lightTravel {
          0% {
            left: -10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }

        @keyframes lightTravelReverse {
          0% {
            right: -10%;
            left: auto;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            right: 110%;
            left: auto;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
