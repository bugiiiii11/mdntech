import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 3D Wave Canvas Component
const WaveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw multiple wave layers for depth
      const layers = [
        { amplitude: 30, frequency: 0.008, speed: 0.015, opacity: 0.08, yOffset: 0.3 },
        { amplitude: 25, frequency: 0.012, speed: 0.02, opacity: 0.06, yOffset: 0.5 },
        { amplitude: 20, frequency: 0.015, speed: 0.025, opacity: 0.04, yOffset: 0.7 },
        { amplitude: 35, frequency: 0.006, speed: 0.01, opacity: 0.1, yOffset: 0.4 },
      ];

      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 3) {
          const y =
            height * layer.yOffset +
            Math.sin(x * layer.frequency + time * layer.speed) * layer.amplitude +
            Math.sin(x * layer.frequency * 1.5 + time * layer.speed * 0.7) * (layer.amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // Gradient fill
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, `rgba(0, 255, 65, ${layer.opacity})`);
        gradient.addColorStop(0.5, `rgba(0, 200, 80, ${layer.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(0, 150, 100, ${layer.opacity * 0.5})`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw flowing particles
      const particleCount = 15;
      for (let i = 0; i < particleCount; i++) {
        const x = ((time * 20 + i * (width / particleCount)) % (width + 50)) - 25;
        const baseY = height * (0.3 + (i % 4) * 0.15);
        const y = baseY + Math.sin(x * 0.01 + time * 0.02 + i) * 40;
        const size = 2 + Math.sin(time * 0.03 + i) * 1;
        const opacity = 0.3 + Math.sin(time * 0.02 + i * 0.5) * 0.2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        glowGradient.addColorStop(0, `rgba(0, 255, 65, ${opacity * 0.3})`);
        glowGradient.addColorStop(1, 'rgba(0, 255, 65, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fill();
      }

      time++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

const Growth = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 0,
      name: 'Social Media',
      description: 'Strategic presence across all platforms',
      platforms: ['Twitter/X', 'Discord', 'Telegram', 'Instagram', 'LinkedIn'],
      features: [
        'Community Management',
        'Content Strategy',
        'Analytics & Growth',
        'Brand Voice',
      ],
    },
    {
      id: 1,
      name: 'Content Creation',
      description: 'AI-powered content at scale',
      platforms: ['Video AI', 'Graphics', 'Copywriting', 'SEO'],
      features: [
        'AI Video Generation',
        'Social Graphics',
        'Website Copy',
        'Documentation',
      ],
    },
  ];

  // Sample portfolio items - replace with real content
  const portfolioItems = [
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      title: 'Brand Video',
      category: 'Video Production',
    },
    {
      type: 'graphic',
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
      title: 'NFT Collection',
      category: 'Digital Art',
    },
    {
      type: 'graphic',
      thumbnail: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop',
      title: 'Social Campaign',
      category: 'Marketing',
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
      title: 'Product Launch',
      category: 'Video Production',
    },
  ];

  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-black-elevated relative overflow-hidden" ref={ref}>
      {/* 3D Wave Background */}
      <WaveBackground />

      {/* === TOP TRANSITION: Receiving particles from Development === */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20">
        {/* Gradient fade from Development section */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(20, 20, 25, 1) 0%, rgba(20, 20, 25, 0.6) 50%, transparent 100%)',
          }}
        />

        {/* Incoming particles from above - continuing from the energy line */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-green rounded-full"
            style={{
              left: `${8 + (i * 6)}%`,
              top: '0px',
            }}
            animate={{
              y: [0, 40, 80],
              opacity: [0.6, 0.3, 0],
              scale: [1, 0.7, 0.3],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.12,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-pure/30 via-transparent to-black-pure/50 opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary-green" />
            <span className="text-primary-green text-sm font-mono">GROWTH</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary-green" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-pure">
            We <span className="text-primary-green">Create</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Service Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary-green text-black-pure'
                      : 'bg-white-soft/5 text-white-muted hover:bg-white-soft/10 hover:text-white-pure'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            {/* Service Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <p className="text-white-muted text-lg">
                  {services[activeTab].description}
                </p>

                {/* Platforms/Tools */}
                <div>
                  <h4 className="text-white-dim text-xs uppercase tracking-wider mb-4">
                    {activeTab === 0 ? 'Platforms' : 'Capabilities'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeTab].platforms.map((platform, i) => (
                      <motion.span
                        key={platform}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 bg-black-card border border-white-soft/10 rounded-full text-white-soft text-sm"
                      >
                        {platform}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white-dim text-xs uppercase tracking-wider mb-4">
                    What We Deliver
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services[activeTab].features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                        <span className="text-white-soft text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-primary-green hover:text-primary-green-light transition-colors duration-300 font-medium group"
                >
                  <span>Discuss your project</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-black-pure/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary-green/20 backdrop-blur-sm flex items-center justify-center border border-primary-green/50 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-primary-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-primary-green text-xs mb-1">{item.category}</p>
                    <h4 className="text-white-pure font-medium">{item.title}</h4>
                  </div>

                  {/* Border on hover */}
                  <div className="absolute inset-0 border-2 border-primary-green opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* View More */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white-dim hover:text-primary-green text-sm transition-colors duration-300"
              >
                View full portfolio →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
