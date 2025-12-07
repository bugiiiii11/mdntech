import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animated counter component
const StatCounter = ({ number, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = number;
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
  }, [inView, number]);

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-green font-mono">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 20, suffix: '+', label: 'Years', sublabel: 'App Development' },
    { number: 5, suffix: '+', label: 'Years', sublabel: 'Blockchain' },
    { number: 20, suffix: '+', label: 'Accounts', sublabel: 'Managed' },
    { number: 3, suffix: '', label: 'Active', sublabel: 'Projects' },
  ];

  return (
    <section id="about" className="pt-12 md:pt-16 pb-32 md:pb-40 bg-[#0a0a0c] relative overflow-hidden" ref={ref}>
      {/* === TOP TRANSITION from Growth === */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 10, 12, 1) 0%, rgba(10, 10, 12, 0.6) 50%, transparent 100%)',
          }}
        />
        {/* Incoming particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-green rounded-full"
            style={{ left: `${8 + (i * 6)}%`, top: '0px' }}
            animate={{ y: [0, 40, 80], opacity: [0.6, 0.3, 0], scale: [1, 0.7, 0.3] }}
            transition={{ duration: 2.5 + (i % 3), repeat: Infinity, delay: i * 0.12, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary-green/5 blur-[150px] rounded-full" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary-green" />
            <span className="text-primary-green text-sm font-mono">ABOUT</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary-green" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-pure mb-4">
            Who We <span className="text-primary-green">Are</span>
          </h2>
          <p className="text-white-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Dubai-based tech studio founded by visionary developers with decades of combined experience.
            We transform startup ideas into market-ready digital products.
          </p>
        </motion.div>

        {/* Stats Grid - Cyberpunk Style */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative bg-black-pure/60 backdrop-blur-sm border border-primary-green/20 p-6 md:p-8 hover:border-primary-green/50 transition-all duration-500"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-primary-green to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-8 bg-gradient-to-b from-primary-green to-transparent" />
              <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-gradient-to-l from-primary-green to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-gradient-to-t from-primary-green to-transparent" />

              {/* Stat number */}
              <div className="text-center mb-2">
                <StatCounter number={stat.number} suffix={stat.suffix} inView={inView} />
              </div>

              {/* Label */}
              <div className="text-center">
                <div className="text-white-soft text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-white-dim text-xs uppercase tracking-wide">
                  {stat.sublabel}
                </div>
              </div>

              {/* Pulse indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-primary-green animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-black-pure/60 backdrop-blur-sm border border-primary-green/20 p-8 hover:border-primary-green/50 transition-all duration-500"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-primary-green to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-primary-green to-transparent" />
            <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-primary-green to-transparent" />
            <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-primary-green to-transparent" />

            <div className="absolute top-4 right-6 font-mono text-primary-green/30 text-sm">01</div>

            <h3 className="text-2xl font-bold text-white-pure mb-1 tracking-wide">Our Story</h3>
            <div className="w-12 h-[2px] bg-primary-green mb-4" />

            <p className="text-white-muted leading-relaxed mb-4">
              Founded by technologists with a 25-year friendship who saw the future of digital innovation.
              We've transformed from startup founders into technical partners that ambitious projects rely on.
            </p>
            <p className="text-white-muted leading-relaxed">
              We understand the startup journey because we've lived it—every challenge, pivot, and breakthrough.
              This shapes how we work: not as vendors, but as invested partners in your success.
            </p>
          </motion.div>

          {/* Right Column - Our Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative bg-black-pure/60 backdrop-blur-sm border border-primary-green/20 p-8 hover:border-primary-green/50 transition-all duration-500"
            style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-primary-green to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-primary-green to-transparent" />
            <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-primary-green to-transparent" />
            <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-primary-green to-transparent" />

            <div className="absolute top-4 right-6 font-mono text-primary-green/30 text-sm">02</div>

            <h3 className="text-2xl font-bold text-white-pure mb-1 tracking-wide">Our Expertise</h3>
            <div className="w-12 h-[2px] bg-primary-green mb-4" />

            <p className="text-white-muted leading-relaxed mb-4">
              20 years of application development. 5 years of blockchain specialization.
              Cutting-edge AI implementation. But technology is just the foundation.
            </p>
            <p className="text-white-muted leading-relaxed">
              What sets us apart is seeing beyond code—understanding your vision, anticipating market needs,
              and architecting solutions that evolve with tomorrow's opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === BOTTOM TRANSITION to Contact === */}
      {/* Gradient fade out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(5, 5, 8, 0.5) 50%, rgba(5, 5, 8, 1) 100%)',
          }}
        />
      </div>

      {/* Scan line effect - positioned at the very bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 65, 0.8) 50%, transparent 100%)',
          boxShadow: '0 0 20px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3)',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
};

export default About;
