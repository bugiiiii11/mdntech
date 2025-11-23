import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'shadow-green-glow-sm'
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        background: isScrolled
          ? 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 20, 10, 0.95) 100%)'
          : 'transparent',
      }}
    >
      {/* Animated tech border on scroll */}
      {isScrolled && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top border gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 65, 0.5) 20%, rgba(0, 255, 65, 0.8) 50%, rgba(0, 255, 65, 0.5) 80%, transparent 100%)',
            }}
          />

          {/* Bottom border gradient line with pulse */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] animate-pulse-green"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 65, 0.3) 10%, rgba(0, 255, 65, 0.6) 30%, rgba(0, 255, 65, 0.8) 50%, rgba(0, 255, 65, 0.6) 70%, rgba(0, 255, 65, 0.3) 90%, transparent 100%)',
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-full opacity-30">
            <div
              className="h-full"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 255, 65, 0.1) 0%, transparent 100%)',
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-20 h-full opacity-30">
            <div
              className="h-full"
              style={{
                background: 'linear-gradient(270deg, rgba(0, 255, 65, 0.1) 0%, transparent 100%)',
              }}
            />
          </div>

          {/* Scan line effect */}
          <div
            className="absolute top-0 left-0 right-0 h-full opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 65, 0.02) 1px, rgba(0, 255, 65, 0.02) 2px)',
            }}
          />
        </div>
      )}

      <div className="container-custom">
        <div className={`flex items-center justify-between px-6 transition-all duration-500 relative ${
          isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
        }`}>
          {/* Logo with tech accent */}
          <div className="relative">
            {isScrolled && (
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-green rounded-full opacity-80 shadow-green-glow" />
            )}
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-mono font-semibold tracking-tight hover:text-primary-green-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-black-pure rounded relative ${
                isScrolled
                  ? 'text-primary-green text-base md:text-lg'
                  : 'text-primary-green text-lg md:text-xl'
              }`}
              aria-label="M.D.N TECH Home"
            >
              {isScrolled && (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary-green rounded-full animate-pulse" />
              )}
              M.D.N TECH
            </button>
          </div>

          {/* Desktop Navigation with enhanced styling */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-primary-green transition-all duration-300 text-sm font-medium relative group focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-black-pure rounded px-2 py-1 ${
                  isScrolled ? 'text-white-muted' : 'text-white-soft'
                }`}
                style={{
                  transitionDelay: isScrolled ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full shadow-green-glow" />
                {isScrolled && (
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button with enhanced styling */}
          <div className="flex items-center gap-4 relative">
            <button
              onClick={() => scrollToSection('contact')}
              className={`group/cta relative bg-black-card border-2 border-primary-green text-primary-green font-semibold rounded-md transition-all duration-500 overflow-hidden ${
                isScrolled
                  ? 'text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5'
                  : 'text-sm md:text-base px-4 py-2 md:px-6 md:py-3'
              }`}
            >
              {/* Animated background on hover */}
              <span className="absolute inset-0 bg-primary-green transform translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-out" />

              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary-green opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary-green opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />

              {/* Glow effect */}
              <span className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 blur-md bg-primary-green/30 -z-10 transition-opacity duration-500" />

              {/* Text */}
              <span className="relative z-10 group-hover/cta:text-black-pure transition-colors duration-300">
                Start Project
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden text-white-soft hover:text-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-black-pure rounded p-2 transition-all ${
                isScrolled ? 'bg-black-card/30 border border-primary-green/20' : ''
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
          style={{
            background: isScrolled
              ? 'linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(0, 20, 10, 0.98) 100%)'
              : 'rgba(20, 20, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 255, 65, 0.2)',
          }}
        >
          <nav className="container-custom px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white-soft hover:text-primary-green transition-colors text-left py-2 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-black-elevated rounded px-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
