import { useEffect, useRef, useState } from 'react';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrollableDistance = windowHeight + sectionHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="project" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We're Building
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A look at our current project in development
          </p>
        </div>

        {/* Project Card - Split animation */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Project Info - Slides from left */}
            <div
              className={`p-8 lg:p-12 flex flex-col justify-center relative transition-all duration-1500 ease-out delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-0 w-64 h-64 glow-orb-blue blur-3xl -translate-y-1/2 opacity-30"></div>

              <div className="relative z-10">
                {/* Project Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full w-fit mb-6 border border-primary/20 glow-blue-sm">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  In Development
                </div>

                {/* Project Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Swarm Resistance
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  A blockchain-based strategy game featuring unique NFT characters, 
                  upgradable weapons, digital lands and AI-driven economy. Built with smart contracts
                  using Chainlink VRF for provably fair randomization.
                </p>

                {/* Tech Used */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Blockchain', 'Gaming', 'AI', 'NFT'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-dark-elevated text-gray-400 text-sm rounded-lg border border-gray-500/20 transition-all duration-500 hover:border-primary/50 hover:text-primary hover:glow-blue-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {[
                    'Smart contract game mechanics',
                    'NFT character collection',
                    'On-chain randomization',
                    'Cross-chain compatibility',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Character Art - Slides from right */}
            <div
              className={`relative bg-gradient-to-br from-dark to-dark p-8 lg:p-12 flex items-center justify-center min-h-[400px] lg:min-h-[500px] transition-all duration-1500 ease-out delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              {/* Subtle pulsing glow orb behind character */}
              <div
                className="absolute top-1/2 left-1/2 w-80 h-80 glow-orb-blue blur-3xl -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: 'subtleGlow 4s ease-in-out infinite',
                }}
              ></div>

              {/* Character Image - Simple fade in with subtle glow and parallax */}
              <div
                className="relative z-10"
                style={{
                  transform: `translateY(${scrollProgress * 120}px) scale(${1 + scrollProgress * 0.3})`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <img
                  src="/images/swarm/character-warrior2.png"
                  alt="Swarm Resistance Character"
                  className={`max-h-[350px] lg:max-h-[400px] w-auto object-contain relative z-10 transition-all duration-1500 ease-out delay-1000 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    filter: isVisible ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' : 'none',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />

                {/* Fallback placeholder */}
                <div className="hidden flex-col items-center justify-center text-center p-8">
                  <div className="w-64 h-64 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center glow-blue-md">
                    <svg className="w-24 h-24 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm mt-4">Character art coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes subtleGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Project;
