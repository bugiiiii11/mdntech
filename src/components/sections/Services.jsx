import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Generate stable matrix characters once
const generateMatrixChars = (length) => {
  const chars = ['0', '1', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', '0', '1', '0', '1'];
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]);
};

// Pre-generate columns data to prevent re-renders
const matrixColumns = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  delay: i * 0.2,
  duration: 6 + (i % 5),
  left: i * 5 + (i % 3),
  chars: generateMatrixChars(25),
}));

// Matrix rain column component - memoized
const MatrixColumn = ({ delay, duration, left, chars }) => {
  return (
    <motion.div
      className="absolute top-0 text-primary-green font-mono text-sm leading-tight select-none pointer-events-none"
      style={{ left: `${left}%` }}
      initial={{ y: '-100%' }}
      animate={{ y: '100%' }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {chars.map((char, i) => (
        <div
          key={i}
          style={{ opacity: 0.1 + (i / 25) * 0.4 }}
        >
          {char}
        </div>
      ))}
    </motion.div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 0,
      name: 'Web & App',
      description: 'Full-stack development for modern web applications and mobile apps. We architect scalable solutions using cutting-edge frameworks, implement responsive designs, and deploy to cloud infrastructure.',
      features: [
        'Custom web applications & SPAs',
        'Mobile apps (React Native, Flutter)',
        'REST APIs & GraphQL backends',
        'Database design (PostgreSQL, MongoDB)',
        'Cloud infrastructure (AWS, Vercel)',
        'CI/CD pipelines & DevOps',
      ],
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      id: 1,
      name: 'Blockchain',
      description: 'End-to-end blockchain development from smart contracts to dApp interfaces. We build secure, audited solutions on major networks with seamless Web3 integration. Our team has hands-on experience launching production-ready projects across multiple chains.',
      features: [
        'Custom smart contracts',
        'Multi-chain deployment',
        'Web3 login & wallet integration',
        'Tokenomics',
        'On-chain randomization',
        'NFT platforms & marketplaces',
      ],
      tech: ['Solidity', 'Rust', 'Chainlink VRF', 'Web3.js', 'EVM Chains & Solana'],
    },
  ];


  return (
    <section id="services" className="pt-24 md:pt-32 pb-56 md:pb-64 bg-black-pure relative overflow-hidden" ref={ref}>
      {/* === TOP TRANSITION: Scan line at section boundary === */}
      {/* Scan line effect - positioned at the very top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] z-30 pointer-events-none"
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

      {/* Gradient fade below scan line */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Matrix rain background - more visible */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {matrixColumns.map((col) => (
          <MatrixColumn
            key={col.id}
            delay={col.delay}
            duration={col.duration}
            left={col.left}
            chars={col.chars}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary-green" />
            <span className="text-primary-green text-sm font-mono">DEVELOPMENT</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary-green" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-pure mb-6">
            We <span className="text-primary-green">Code</span>
          </h2>
          {/* Subtitle */}
          <p className="text-white-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We build websites, applications, and blockchain projects completely from scratch.
            From idea to deployment—analysis, implementation, testing, and delivery—we handle
            the entire development lifecycle, including infrastructure setup.
          </p>
        </motion.div>

        {/* Main Terminal Interface */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Service Tabs */}
          <div className="flex gap-2 mb-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-8 py-4 font-mono text-base md:text-lg rounded-t-lg border-t border-l border-r transition-all duration-300 ${
                  activeService === index
                    ? 'bg-black-elevated border-primary-green/50 text-primary-green'
                    : 'bg-black-card/50 border-white-soft/10 text-white-dim hover:text-primary-green'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Terminal Window */}
          <div className="bg-black-elevated rounded-lg border border-primary-green/20 overflow-hidden shadow-green-glow-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-black-card border-b border-primary-green/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-green/60" />
                <div className="w-3 h-3 rounded-full bg-primary-green/40" />
                <div className="w-3 h-3 rounded-full bg-primary-green/20" />
              </div>
              <span className="text-primary-green/60 text-xs font-mono">mdn-cli v2.0</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8">
              <motion.div
                key={activeService}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Service Description */}
                <p className="text-white-muted text-base md:text-lg leading-relaxed mb-6">
                  {services[activeService].description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <div className="text-white-soft text-sm md:text-base font-mono mb-3 uppercase tracking-wider">What we deliver:</div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {services[activeService].features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 text-white-soft"
                      >
                        <span className="text-primary-green font-mono text-sm">{`>`}</span>
                        <span className="text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-5 border-t border-primary-green/10">
                  <div className="text-white-soft text-sm md:text-base font-mono mb-3 uppercase tracking-wider">Tech stack:</div>
                  <div className="flex flex-wrap gap-2.5">
                    {services[activeService].tech.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 bg-primary-green/10 border border-primary-green/30 rounded text-primary-green text-base font-mono"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 pt-5">
                  <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                  <span className="text-primary-green text-sm font-mono">READY TO BUILD</span>
                </div>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* === BOTTOM TRANSITION: Glowing energy line to Growth === */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
        {/* Gradient fade out */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(20, 20, 25, 0.5) 50%, rgba(20, 20, 25, 1) 100%)',
          }}
        />

        {/* Data flow particles around center line */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={`data-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${8 + (i * 6)}%`,
              top: '62px',
              background: 'radial-gradient(circle, rgba(0, 255, 65, 0.9) 0%, rgba(0, 255, 65, 0) 70%)',
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.6)',
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2 + (i % 3) * 0.5,
              repeat: Infinity,
              delay: i * 0.12,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Central glowing energy line - positioned in middle of particles */}
        <motion.div
          className="absolute left-[10%] right-[10%] h-[2px]"
          style={{
            top: '102px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 65, 0.6) 20%, rgba(0, 255, 65, 1) 50%, rgba(0, 255, 65, 0.6) 80%, transparent 100%)',
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.3)',
          }}
          animate={{
            scaleX: [0.85, 1, 0.85],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
};

export default Services;
