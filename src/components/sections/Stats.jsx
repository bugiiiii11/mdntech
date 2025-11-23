import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 20, suffix: '+', label: 'YEARS APP', sublabel: 'DEVELOPMENT' },
    { number: 5, suffix: '+', label: 'YEARS', sublabel: 'BLOCKCHAIN EXPERTISE' },
    { number: 20, suffix: '+', label: 'SOCIAL ACCOUNTS', sublabel: 'MANAGED' },
    { number: 3, suffix: '', label: 'ACTIVE PROJECTS', sublabel: 'IN BUILD' },
  ];

  return (
    <section className="section-padding bg-black-soft/50 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-primary-green/5 blur-[120px] rounded-full" />

      <div className="container-custom relative">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white-pure">
            Experience That Delivers Results
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              stat={stat}
              inView={inView}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ stat, inView, delay }) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.number]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container with enhanced styling */}
      <div
        className={`relative bg-black-card border rounded-lg p-8 transition-all duration-500 h-full flex flex-col items-center justify-center ${
          isHovered
            ? 'border-primary-green shadow-green-glow-sm transform -translate-y-2'
            : 'border-white-soft/5 hover:border-primary-green/50'
        }`}
      >
        {/* Corner accents */}
        <div
          className={`absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary-green rounded-tl-lg transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary-green rounded-br-lg transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Glow effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-primary-green/5 rounded-lg -z-10 blur-xl" />
        )}

        {/* Decorative line on top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px]">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-green to-transparent opacity-50" />
        </div>

        {/* Number with animation */}
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-green font-mono mb-4 relative">
          {/* Glow effect behind number */}
          <div className="absolute inset-0 text-primary-green blur-md opacity-50">
            {count}
            {stat.suffix}
          </div>
          {/* Actual number */}
          <div className="relative">
            {count}
            {stat.suffix}
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div className="text-xs md:text-sm text-white-soft uppercase tracking-widest font-semibold">
            {stat.label}
          </div>
          <div className="text-xs text-white-muted uppercase tracking-wide mt-1">
            {stat.sublabel}
          </div>
        </div>

        {/* Status indicator at bottom */}
        <div className="absolute bottom-4 flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-primary-green animate-pulse" />
          <div className="w-0.5 h-0.5 rounded-full bg-primary-green/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Decorative line on bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px]">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-green to-transparent opacity-50" />
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
