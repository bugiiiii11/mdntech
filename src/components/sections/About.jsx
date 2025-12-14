import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const stats = [
    { number: '20+', label: 'Websites Created' },
    { number: '15+', label: 'Mobile Apps launched' },
    { number: '30+', label: 'Smart Contracts Deployed' },
  ];

  const expertise = [
    {
      title: 'Enterprise-Grade Solutions',
      description: 'Built for scale from day one. Our architecture handles millions of users and transactions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Modern Technology Stack',
      description: 'React, Node.js, blockchain, AI integration. We use cutting-edge tools that ensure future-proof solutions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Dubai-Based, Global Reach',
      description: 'Strategic location in UAE with international expertise. We understand both local and global markets.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Full Lifecycle Support',
      description: 'From initial concept to post-launch optimization. We partner with you at every stage of your journey.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 glow-orb-blue blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Building Digital Excellence
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A Dubai-based development studio specializing in web applications, mobile apps,
            and blockchain solutions. We transform complex ideas into scalable products.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto mb-24 transition-all duration-1500 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ transitionDelay: `${index * 200 + 600}ms` }}
            >
              <div className="relative inline-block mb-3">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                  {stat.number}
                </div>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`group relative bg-dark-elevated border border-gray-500/10 rounded-xl p-8 transition-all duration-1500 ease-out hover:border-primary/30 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 200 + 1000}ms` }}
            >
              {/* Background glow on hover */}
              <div className="absolute top-1/2 left-1/2 w-64 h-64 glow-orb-blue blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5 border border-primary/20 group-hover:glow-blue-sm transition-all duration-500">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
