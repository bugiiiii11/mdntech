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

  const team = [
    {
      name: 'Founder',
      role: 'Project Management & Strategy',
      expertise: ['Project Management', 'Blockchain Solutions', 'AI Integration'],
      avatar: '/images/team/founder.png',
    },
    {
      name: 'CTO',
      role: 'Technical Leadership',
      expertise: ['20+ Years Development', 'Web & Mobile Apps', 'Enterprise Solutions'],
      avatar: '/images/team/cto.png',
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who We Are
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A Dubai-based development studio with decades of combined experience
            building digital products that matter.
          </p>
        </div>

        {/* Team Grid - Scale + Fade animation */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-20">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group relative transition-all duration-1500 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${index * 400 + 600}ms` }}
            >
              {/* Background glow orb - appears on hover */}
              <div className="absolute top-1/2 left-1/2 w-64 h-64 glow-orb-blue blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>

              {/* Card content */}
              <div className="relative bg-dark-elevated border border-gray-500/10 rounded-2xl p-8 text-center transition-all duration-700 group-hover:border-primary/30 group-hover:-translate-y-2">
                {/* Avatar with glowing ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  {/* Outer glow ring - animated on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-700 group-hover:scale-110 group-hover:glow-blue-md"></div>

                  {/* Avatar container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-dark border-2 border-gray-500/20 group-hover:border-primary/40 transition-all duration-700">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-primary/10">
                            <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        `;
                      }}
                    />
                  </div>

                  {/* Small decorative glow dots */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 glow-blue-sm"></div>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-500 group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-6">
                  {member.role}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-dark text-gray-400 text-xs rounded-full border border-gray-500/20 transition-all duration-500 group-hover:border-primary/40 group-hover:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Us - Cascade animation */}
        <div className="max-w-4xl mx-auto">
          <h3
            className={`text-2xl md:text-3xl font-bold text-white mb-12 text-center transition-all duration-1200 ease-out delay-1400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Why Work With Us
          </h3>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
                {
                  title: 'Full Lifecycle',
                  desc: 'From concept to deployment and beyond',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Modern Stack',
                  desc: 'Latest technologies, best practices',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )
                },
                {
                  title: 'Partner Approach',
                  desc: 'We invest in your success',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative text-center p-6 rounded-xl bg-dark-elevated border border-gray-500/10 transition-all duration-1200 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 300 + 1600}ms` }}
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 glow-orb-blue blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-xl"></div>

                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:glow-blue-sm transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-500">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
