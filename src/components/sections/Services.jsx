import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      name: 'Web & App Development',
      tagline: 'Lightning-fast, scalable applications',
      brief:
        'Built with React, Tailwind CSS, and cutting-edge frameworks. From elegant landing pages to complex web3 platforms.',
      details: {
        expertise: '20 years of application development experience',
        tech: ['React 18+', 'Next.js', 'Tailwind CSS', 'Node.js', 'AWS', 'Docker'],
        highlights: [
          'Progressive Web Applications (PWAs)',
          'Web3 gaming interfaces & NFT marketplaces',
          'E-commerce with seamless payment integration',
          'Custom CMS and admin dashboards',
        ],
      },
    },
    {
      id: 2,
      name: 'Blockchain Solutions',
      tagline: '5 years of Web3 expertise',
      brief:
        'Smart contracts, DeFi protocols, NFT platforms, and Web3 integrations. Secure, scalable, and user-friendly decentralized solutions.',
      details: {
        expertise: 'From concept to mainnet deployment',
        tech: ['Solidity', 'Rust', 'Ethereum', 'Polygon', 'Solana', 'Arbitrum'],
        highlights: [
          'Smart Contract Development & Audits',
          'NFT Platform Architecture & Minting',
          'DeFi Protocol Development',
          'Web3 Wallet Integration',
        ],
      },
    },
    {
      id: 3,
      name: 'Social Media Management',
      tagline: '20+ accounts managed',
      brief:
        'Strategic social media management across all major platforms. We build engaged communities and amplify your brand voice.',
      details: {
        expertise: 'Data-driven strategy with authentic engagement',
        tech: ['Twitter/X', 'Instagram', 'LinkedIn', 'TikTok', 'Discord', 'Telegram'],
        highlights: [
          'Content Strategy & Planning',
          'Community Management & Growth',
          'Analytics & Performance Reporting',
          'Web3 Community Expertise',
        ],
      },
    },
    {
      id: 4,
      name: 'Content Creation',
      tagline: 'AI-powered content at scale',
      brief:
        'From stunning graphics to cinematic videos, SEO-optimized articles to social media copy. Content that captivates and performs.',
      details: {
        expertise: 'High-quality content with rapid turnaround',
        tech: ['VEO3 Video AI', 'SEO Tools', 'Design Suite', 'Copywriting AI'],
        highlights: [
          'AI-Generated Video Content',
          'Social Media Graphics & Animations',
          'SEO-Optimized Website Copy',
          'Technical Documentation',
        ],
      },
    },
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services" className="section-padding bg-black-soft/50 relative overflow-hidden" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary-green/5 blur-[120px] rounded-full" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-green text-xs md:text-sm uppercase tracking-widest mb-3 font-mono">
            WHAT WE DO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white-pure mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-white-muted text-base md:text-lg max-w-3xl mx-auto">
            From blockchain architecture to pixel-perfect interfaces, we deliver technical
            excellence across every digital touchpoint.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card container with enhanced styling */}
              <div
                className={`relative bg-black-card border rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-500 ${
                  expandedCard === service.id
                    ? 'border-primary-green shadow-green-glow-sm'
                    : 'border-white-soft/5 hover:border-primary-green/50'
                } ${hoveredCard === service.id && expandedCard !== service.id ? 'transform -translate-y-2' : ''}`}
                onClick={() => toggleCard(service.id)}
              >
                {/* Corner accent (appears on hover) */}
                <div
                  className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-green rounded-tl-lg transition-opacity duration-300 ${
                    hoveredCard === service.id || expandedCard === service.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-green rounded-br-lg transition-opacity duration-300 ${
                    hoveredCard === service.id || expandedCard === service.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Glow effect on hover */}
                {(hoveredCard === service.id || expandedCard === service.id) && (
                  <div className="absolute inset-0 bg-primary-green/5 rounded-lg -z-10 blur-xl" />
                )}

                {/* Service Name with number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary-green font-mono text-sm font-bold opacity-60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-primary-green/50 to-transparent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white-pure mb-2 group-hover:text-primary-green transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-primary-green text-sm font-mono">{service.tagline}</p>
                  </div>
                </div>

                {/* Brief Description */}
                <p className="text-white-muted text-sm md:text-base mb-6 leading-relaxed">
                  {service.brief}
                </p>

                {/* Expandable Details */}
                <AnimatePresence>
                  {expandedCard === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-primary-green/20 space-y-4">
                        {/* Expertise */}
                        <div>
                          <p className="text-primary-green text-xs uppercase tracking-wide mb-2 font-mono">
                            Expertise
                          </p>
                          <p className="text-white-soft text-sm">{service.details.expertise}</p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <p className="text-primary-green text-xs uppercase tracking-wide mb-2 font-mono">
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.details.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-black-elevated border border-primary-green/20 rounded-full text-white-muted text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Services */}
                        <div>
                          <p className="text-primary-green text-xs uppercase tracking-wide mb-2 font-mono">
                            Key Services
                          </p>
                          <ul className="space-y-2">
                            {service.details.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-white-dim text-sm">
                                <span className="text-primary-green mt-1">▸</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Learn More Button */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white-soft/5">
                  <button
                    className="group/btn flex items-center gap-2 text-primary-green hover:text-primary-green-light transition-all duration-300 relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(service.id);
                    }}
                  >
                    {/* Animated background */}
                    <span className="absolute inset-0 -left-2 -right-2 bg-primary-green/10 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                    {/* Text */}
                    <span className="relative font-medium text-sm">
                      {expandedCard === service.id ? 'Show Less' : 'Learn More'}
                    </span>

                    {/* Animated arrow */}
                    <svg
                      className={`relative w-4 h-4 transition-transform duration-300 ${
                        expandedCard === service.id ? 'rotate-180' : 'group-hover/btn:translate-x-1'
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {expandedCard === service.id ? (
                        <path d="M19 9l-7 7-7-7" />
                      ) : (
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      )}
                    </svg>

                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-green transition-all duration-300 group-hover/btn:w-full" />
                  </button>

                  {/* Status indicator */}
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-primary-green/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="w-0.5 h-0.5 rounded-full bg-primary-green/40 animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
