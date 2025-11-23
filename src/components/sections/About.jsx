import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contentBlocks = [
    {
      id: 1,
      text: 'Founded in Dubai in 2021, M.D.N TECH was born from a 25-year friendship between visionary technologists who saw the future of digital innovation. As blockchain pioneers and AI enthusiasts, we have transformed from startup founders into the technical partners that ambitious startups rely on to bring their boldest ideas to life.',
    },
    {
      id: 2,
      text: 'We understand the startup journey because we have lived it. From that first spark of inspiration to the pressure of launch day, we have experienced every challenge, pivot, and breakthrough. This perspective shapes how we work—not as vendors, but as technical co-founders invested in your success. We build MVPs that scale, architect systems that grow, and deliver solutions that exceed expectations.',
    },
    {
      id: 3,
      text: 'Our expertise spans 20 years of application development, 5 years of blockchain specialization, and cutting-edge AI implementation. But technology is just the foundation. What sets us apart is our ability to see beyond code—to understand your vision, anticipate market needs, and architect solutions that dont just work today, but evolve with tomorrows opportunities. From Web3 gaming platforms to enterprise infrastructure, we transform ideas into digital realities that dominate their markets.',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary-green/5 blur-[120px] rounded-full" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-green text-xs md:text-sm uppercase tracking-widest mb-3 font-mono">
            WHO WE ARE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white-pure">
            Technical Excellence Meets Visionary Innovation
          </h2>
        </motion.div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {contentBlocks.map((block, index) => (
            <motion.div
              key={block.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredCard(block.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card container */}
              <div
                className={`relative bg-black-card border rounded-lg p-6 md:p-8 transition-all duration-500 ${
                  hoveredCard === block.id
                    ? 'border-primary-green shadow-green-glow-sm transform -translate-y-2'
                    : 'border-white-soft/5 hover:border-primary-green/50'
                }`}
              >
                {/* Corner accents */}
                <div
                  className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-green rounded-tl-lg transition-opacity duration-300 ${
                    hoveredCard === block.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-green rounded-br-lg transition-opacity duration-300 ${
                    hoveredCard === block.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Glow effect on hover */}
                {hoveredCard === block.id && (
                  <div className="absolute inset-0 bg-primary-green/5 rounded-lg -z-10 blur-xl" />
                )}

                {/* Text content */}
                <p className="text-white-muted text-base md:text-lg leading-relaxed">
                  {block.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
