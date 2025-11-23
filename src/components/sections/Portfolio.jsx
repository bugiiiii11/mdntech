import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      name: 'Swarm Resistance',
      description:
        'Web3 gaming platform featuring immersive NFT utility, cyberpunk aesthetics, and real-time multiplayer battles. Built on cutting-edge blockchain infrastructure with seamless wallet integration.',
      technologies: 'React · Three.js · Solidity · WebSocket',
      url: 'https://www.cryptomeda.tech/',
    },
    {
      id: 2,
      name: 'Chaos Genesis',
      description:
        'Perpetual crypto trading platform merged with fantasy gaming. Real-time market data, NFT character system, and decentralized exchange functionality wrapped in an epic fantasy interface.',
      technologies: 'Next.js · DeFi Protocols · NFT Minting · Real-time APIs',
      url: 'https://www.chaosgenesis.com/',
    },
    {
      id: 3,
      name: 'Royal Stroje',
      description:
        'Modern e-commerce platform for construction equipment rental. Intuitive inventory management, real-time availability tracking, and seamless booking system with elegant, professional design.',
      technologies: 'React · Tailwind CSS · AWS · Payment Integration',
      url: 'https://www.royalstroje.sk/',
    },
  ];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-primary-green/5 blur-[120px] rounded-full" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-green text-xs md:text-sm uppercase tracking-widest mb-3 font-mono">
            OUR WORK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white-pure mb-4">
            Projects That Push Boundaries
          </h2>
          <p className="text-white-muted text-base md:text-lg max-w-3xl mx-auto">
            From cyberpunk gaming platforms to elegant e-commerce solutions, we build digital
            experiences that set industry standards. Explore our latest launches.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card container with enhanced styling */}
              <div
                className={`relative bg-black-card border rounded-lg p-6 transition-all duration-500 h-full flex flex-col ${
                  hoveredCard === project.id
                    ? 'border-primary-green shadow-green-glow-sm transform -translate-y-2'
                    : 'border-white-soft/5 hover:border-primary-green/50'
                }`}
              >
                {/* Corner accents */}
                <div
                  className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-green rounded-tl-lg transition-opacity duration-300 ${
                    hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-green rounded-br-lg transition-opacity duration-300 ${
                    hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Glow effect on hover */}
                {hoveredCard === project.id && (
                  <div className="absolute inset-0 bg-primary-green/5 rounded-lg -z-10 blur-xl" />
                )}

                {/* Project Logo Placeholder */}
                <div className="aspect-video bg-black-elevated rounded-lg mb-6 flex items-center justify-center border border-white-soft/10 group-hover:border-primary-green/50 transition-colors">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-green/10 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-primary-green/20 transition-colors">
                      <span className="text-primary-green font-mono text-2xl font-bold">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-white-soft font-mono text-sm">{project.name}</p>
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="text-xl md:text-2xl font-bold text-white-pure mb-3 group-hover:text-primary-green transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-white-muted text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies Badge */}
                <p className="text-xs text-white-dim mb-6 font-mono">{project.technologies}</p>

                {/* View Project Link */}
                <div className="flex items-center justify-between pt-4 border-t border-white-soft/5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 text-primary-green hover:text-primary-green-light transition-all duration-300 relative"
                  >
                    {/* Animated background */}
                    <span className="absolute inset-0 -left-2 -right-2 bg-primary-green/10 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                    {/* Text */}
                    <span className="relative font-medium text-sm">View Project</span>

                    {/* Animated arrow */}
                    <svg
                      className="relative w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>

                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-green transition-all duration-300 group-hover/btn:w-full" />
                  </a>

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

export default Portfolio;
