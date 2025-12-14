import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
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

  const handleMouseMove = (e, index) => {
    if (hoveredCard !== index || expandedCard !== null) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = (index) => {
    if (expandedCard === null) {
      setHoveredCard(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
    setHoveredCard(null);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Applications',
      description: 'Custom web solutions built for scale. From complex dashboards to full-stack platforms, we deliver fast, secure, and maintainable applications.',
      features: ['React & Next.js', 'Node.js backends', 'Database design', 'Cloud deployment'],
      expandedContent: {
        intro: 'Transform your business with modern web applications that handle millions of users. We build scalable solutions that grow with your success.',
        process: [
          { step: 'Discovery', detail: 'We analyze your needs and create a technical roadmap' },
          { step: 'Design', detail: 'UI/UX design focused on conversion and user experience' },
          { step: 'Development', detail: 'Agile development with weekly demos and iterations' },
          { step: 'Launch', detail: 'Deployment, monitoring, and ongoing optimization' },
        ],
        technologies: ['TypeScript', 'React/Next.js', 'Node.js/Express', 'PostgreSQL', 'Redis', 'AWS/Vercel'],
        cta: 'Start Your Web Project',
      },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Applications',
      description: 'Native and cross-platform apps that users love. Clean architecture, smooth performance, and seamless deployment to App Store and Google Play.',
      features: ['React Native', 'Cross-platform', 'Native performance', 'Store deployment'],
      expandedContent: {
        intro: 'Reach millions of users on iOS and Android with a single codebase. 60% faster development, native performance, lower costs.',
        process: [
          { step: 'Strategy', detail: 'Define features, user flows, and platform requirements' },
          { step: 'Prototype', detail: 'Interactive mockups to validate UX before development' },
          { step: 'Build', detail: 'Cross-platform development with native modules when needed' },
          { step: 'Release', detail: 'App Store submission, optimization, and user acquisition' },
        ],
        technologies: ['React Native', 'Expo', 'Native Modules', 'Push Notifications', 'App Analytics', 'CI/CD'],
        cta: 'Build Your Mobile App',
      },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Blockchain Solutions',
      description: 'Smart contracts, DeFi integrations, and Web3 infrastructure. We navigate the complexity so you can focus on your product.',
      features: ['Smart contracts', 'DeFi & NFTs', 'Web3 integration', 'Multi-chain support'],
      expandedContent: {
        intro: 'Launch your Web3 project with battle-tested smart contracts and seamless blockchain integration. Security audits included.',
        process: [
          { step: 'Architecture', detail: 'Design tokenomics, contract structure, and security model' },
          { step: 'Smart Contracts', detail: 'Solidity development with comprehensive test coverage' },
          { step: 'Integration', detail: 'Web3 frontend, wallet connection, transaction handling' },
          { step: 'Audit & Deploy', detail: 'Security review, testnet deployment, mainnet launch' },
        ],
        technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'Chainlink', 'Multi-chain'],
        cta: 'Launch Your Web3 Project',
      },
    },
  ];

  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Build
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end development services from concept to deployment
          </p>
        </div>

        {/* Services Grid - Always visible */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card flex flex-col h-full transition-all duration-1500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              } ${expandedCard === index ? 'ring-2 ring-primary/50' : ''}`}
              style={{
                transitionDelay: `${index * 250 + 400}ms`,
                transform: hoveredCard === index && expandedCard === null
                  ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.05)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                transition: hoveredCard === index && expandedCard === null
                  ? 'transform 0.1s ease-out'
                  : `all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 250 + 400}ms`,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Icon with animation */}
              <div
                className={`w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{
                  transitionDelay: `${index * 250 + 600}ms`,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 min-h-[28px]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed text-[15px] flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-gray-400 text-sm transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{
                      transitionDelay: `${index * 250 + 800 + featureIndex * 100}ms`,
                    }}
                  >
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button
                onClick={() => toggleExpand(index)}
                className={`mt-auto flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 group ${
                  expandedCard === index ? 'text-white' : 'text-primary hover:text-white'
                }`}
              >
                <span>{expandedCard === index ? 'Show Less' : 'Learn More'}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedCard === index ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Expanded Content Below - Full Width */}
        {expandedCard !== null && (
          <div className="animate-slideDown">
            <div className="card p-8 lg:p-10">
              {/* Header with close button */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {services[expandedCard].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {services[expandedCard].title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {services[expandedCard].description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(expandedCard)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Intro */}
              <div className="mb-8 p-6 bg-primary/5 border border-primary/20 rounded-lg glow-blue-sm">
                <p className="text-white text-lg leading-relaxed">
                  {services[expandedCard].expandedContent.intro}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Development Process */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Our Process
                  </h4>
                  <div className="space-y-4">
                    {services[expandedCard].expandedContent.process.map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-sm font-semibold">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="text-white font-medium mb-1">{item.step}</h5>
                          <p className="text-gray-400 text-sm">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & CTA */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technologies We Use
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {services[expandedCard].expandedContent.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-dark-elevated text-gray-300 text-sm rounded-lg border border-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Section */}
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">Ready to get started?</h5>
                    <p className="text-gray-400 text-sm mb-4">
                      Let's discuss your project and create something amazing together.
                    </p>
                    <button
                      onClick={scrollToContact}
                      className="btn-primary w-full"
                    >
                      {services[expandedCard].expandedContent.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;
