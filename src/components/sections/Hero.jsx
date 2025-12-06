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
      className="min-h-screen flex flex-col justify-center section-padding relative pt-32"
      ref={ref}
    >
      <motion.div
        className="container-custom text-center max-w-5xl mt-16 md:mt-24"
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
          We turn startup visions into market-ready products.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <button
            onClick={() => scrollToSection('contact')}
            className="group/cta relative bg-black-card border-2 border-primary-green text-primary-green font-semibold rounded-md transition-all duration-500 overflow-hidden text-base md:text-lg px-8 py-4 inline-flex items-center gap-2 shadow-green-glow-sm"
          >
            {/* Animated background on hover */}
            <span className="absolute inset-0 bg-primary-green transform translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-out" />

            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary-green opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary-green opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />

            {/* Text */}
            <span className="relative z-10 group-hover/cta:text-black-pure transition-colors duration-300">
              Transform Your Vision
            </span>
            <svg
              className="w-5 h-5 relative z-10 group-hover/cta:text-black-pure transition-colors duration-300"
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

        {/* Scroll Indicator - Double Chevron */}
        <motion.div
          variants={itemVariants}
          className="mt-20 md:mt-28"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="group relative flex flex-col items-center mx-auto focus:outline-none"
            aria-label="Scroll to services"
          >
            {/* Double Chevron Arrow - scales up on hover */}
            <div className="relative flex flex-col items-center transition-transform duration-300 ease-out group-hover:scale-125">
              {/* First chevron */}
              <motion.svg
                className="w-8 h-8 text-primary-green transition-colors duration-300 group-hover:text-primary-green-light"
                viewBox="0 0 24 24"
                fill="none"
                animate={{
                  y: [0, 4, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M5 9L12 16L19 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Second chevron */}
              <motion.svg
                className="w-8 h-8 text-primary-green -mt-4 transition-colors duration-300 group-hover:text-primary-green-light"
                viewBox="0 0 24 24"
                fill="none"
                animate={{
                  y: [0, 4, 0],
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
              >
                <path
                  d="M5 9L12 16L19 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
