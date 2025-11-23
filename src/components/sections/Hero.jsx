import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding relative"
      ref={ref}
    >
      <motion.div
        className="container-custom text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white-pure"
        >
          Transform Your Vision
          <br />
          <span className="text-gradient-green">Into Digital Reality</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-white-muted mb-4 max-w-3xl mx-auto"
        >
          Expert web3 development, blockchain solutions, and AI-powered digital services.
          <br className="hidden md:block" />
          We turn startup visions into market-ready products.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-base md:text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Transform Your Vision
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>

        {/* Cyberpunk Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 md:mt-24"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="group relative flex flex-col items-center gap-4 mx-auto focus:outline-none"
            aria-label="Scroll to services"
          >
            {/* Label */}
            <div className="relative">
              <span className="text-xs uppercase tracking-widest text-white-dim group-hover:text-primary-green transition-colors duration-300 font-mono">
                Discover More
              </span>
              {/* Underline animation */}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-green transition-all duration-300 group-hover:w-full" />
            </div>

            {/* Cyberpunk Arrow Container */}
            <div className="relative w-16 h-16">
              {/* Outer hexagon frame */}
              <svg
                className="absolute inset-0 w-full h-full text-primary-green/30 group-hover:text-primary-green/60 transition-colors duration-300"
                viewBox="0 0 100 100"
                fill="none"
              >
                <polygon
                  points="50,5 90,30 90,70 50,95 10,70 10,30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="group-hover:stroke-primary-green transition-colors duration-300"
                />
              </svg>

              {/* Animated corner accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2">
                <div className="w-full h-full bg-primary-green rounded-full animate-pulse opacity-60" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2">
                <div className="w-full h-full bg-primary-green rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Rotating ring */}
              <div className="absolute inset-2 rounded-full border border-primary-green/20 group-hover:border-primary-green/40 transition-colors duration-300 animate-spin-slow" />

              {/* Center arrow with glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 blur-md bg-primary-green/30 group-hover:bg-primary-green/60 transition-all duration-300 rounded-full scale-150" />

                  {/* Arrow icon */}
                  <svg
                    className="relative w-8 h-8 text-primary-green group-hover:text-primary-green-light transition-all duration-300 group-hover:translate-y-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Scanning line effect */}
              <div className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary-green to-transparent animate-scan" />
              </div>
            </div>

            {/* Vertical guide lines */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-gradient-to-b from-primary-green/0 via-primary-green/30 to-primary-green/0" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-gradient-to-b from-primary-green/0 via-primary-green/30 to-primary-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
