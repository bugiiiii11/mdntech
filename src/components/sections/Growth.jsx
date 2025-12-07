import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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

      ctx.clearRect(0, 0, width, height);

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

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, `rgba(0, 255, 65, ${layer.opacity})`);
        gradient.addColorStop(0.5, `rgba(0, 200, 80, ${layer.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(0, 150, 100, ${layer.opacity * 0.5})`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Portfolio showcase items - videos
  const showcaseItems = [
    { id: 1, src: '/vid1.mp4' },
    { id: 2, src: '/vid2.mp4' },
    { id: 3, src: '/vid3.mp4' },
    { id: 4, src: '/vid4.mp4' },
  ];

  return (
    <section id="growth" className="pt-12 md:pt-16 pb-32 md:pb-40 bg-black-elevated relative overflow-hidden" ref={ref}>
      {/* 3D Wave Background */}
      <WaveBackground />

      {/* === TOP TRANSITION === */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(20, 20, 25, 1) 0%, rgba(20, 20, 25, 0.6) 50%, transparent 100%)',
          }}
        />
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

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-pure/30 via-transparent to-black-pure/50 opacity-50" />

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
            <span className="text-primary-green text-sm font-mono">GROWTH</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary-green" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-pure mb-6">
            We <span className="text-primary-green">Create</span>
          </h2>

          {/* Subtitle - explaining the value proposition */}
          <p className="text-white-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with stunning visuals and strategic social presence.
            We craft compelling content that captures attention and build engaged communities
            that drive real growth for your project.
          </p>
        </motion.div>

        {/* Two Service Cards - Cyberpunk Style */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">

          {/* Content Creation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-black-pure/80 backdrop-blur-sm border border-primary-green/20 p-8 hover:border-primary-green/50 transition-all duration-500"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
            }}
          >
            {/* Corner accents - always visible */}
            <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-primary-green to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-primary-green to-transparent" />
            <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-primary-green to-transparent" />
            <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-primary-green to-transparent" />

            {/* Glowing line accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Section number */}
            <div className="absolute top-4 right-6 font-mono text-primary-green/30 text-sm">01</div>

            <h3 className="text-2xl font-bold text-white-pure mb-1 tracking-wide">Content Creation</h3>
            <div className="w-12 h-[2px] bg-primary-green mb-4" />

            <p className="text-white-muted mb-6 leading-relaxed">
              Eye-catching graphics, engaging videos, and scroll-stopping visuals designed
              to make your project stand out across all platforms.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {['Motion graphics & animations', 'Social media visuals', 'Promotional videos', 'Brand identity assets'].map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-white-soft font-light"
                >
                  <span className="text-primary-green font-mono text-xs">{`>`}</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom scan line effect on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-green to-transparent opacity-0 group-hover:opacity-60"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-black-pure/80 backdrop-blur-sm border border-primary-green/20 p-8 hover:border-primary-green/50 transition-all duration-500"
            style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
            }}
          >
            {/* Corner accents - always visible */}
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-primary-green to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-primary-green to-transparent" />
            <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-primary-green to-transparent" />
            <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-primary-green to-transparent" />

            {/* Glowing line accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Section number */}
            <div className="absolute top-4 right-6 font-mono text-primary-green/30 text-sm">02</div>

            <h3 className="text-2xl font-bold text-white-pure mb-1 tracking-wide">Social Media</h3>
            <div className="w-12 h-[2px] bg-primary-green mb-4" />

            <p className="text-white-muted mb-6 leading-relaxed">
              Build a powerful online presence with strategic content planning,
              active community management, and consistent engagement that grows your audience.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {['Content strategy & planning', 'Community management', 'Regular posts & articles', 'Active moderation team'].map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 text-white-soft font-light"
                >
                  <span className="text-primary-green font-mono text-xs">{`>`}</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom scan line effect on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-green to-transparent opacity-0 group-hover:opacity-60"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>

        {/* Video Showcase Grid - 4 squares for videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-black-card border border-primary-green/20 hover:border-primary-green/50 transition-all duration-300"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                }}
              >
                {/* Video - plays only on hover */}
                <video
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-primary-green/50" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-primary-green/50" />
                <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-primary-green/50" />
                <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-primary-green/50" />

                {/* Video number indicator */}
                <div className="absolute bottom-3 left-3 text-xs font-mono text-primary-green/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #{String(index + 1).padStart(2, '0')}
                </div>

                {/* Scan line on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[1px] bg-primary-green/60 opacity-0 group-hover:opacity-100"
                  animate={{ y: [0, 200, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* === BOTTOM TRANSITION to About === */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
        {/* Gradient fade out */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 12, 0.5) 50%, rgba(10, 10, 12, 1) 100%)',
          }}
        />

        {/* Data flow particles */}
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

        {/* Central glowing energy line */}
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

export default Growth;
