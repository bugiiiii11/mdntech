import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom Budget Dropdown Component
const BudgetDropdown = ({ value, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-plus', label: '$100,000+' },
    { value: 'not-sure', label: "Not sure yet / Let's discuss" },
  ];

  const selectedLabel = budgetOptions.find(opt => opt.value === value)?.label || 'Select budget range';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <label className="block text-white-soft text-sm font-medium mb-2">
        Project Budget
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-black-card border ${error ? 'border-red-400' : 'border-primary-green/20'} ${isOpen ? 'border-primary-green/60 ring-1 ring-primary-green/30' : ''} rounded-md text-left px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:border-primary-green/60 focus:ring-1 focus:ring-primary-green/30 cursor-pointer flex items-center justify-between`}
        >
          <span className={value ? 'text-white-pure' : 'text-white-dim'}>
            {selectedLabel}
          </span>
          <svg
            className={`w-4 h-4 text-primary-green transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 w-full mt-1 bg-black-card border border-primary-green/30 rounded-md shadow-lg overflow-hidden"
            >
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-all duration-150 ${
                    value === option.value
                      ? 'bg-primary-green/20 text-primary-green font-medium border-l-2 border-primary-green'
                      : 'text-white-pure hover:bg-primary-green/10 hover:text-primary-green'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="pt-20 md:pt-28 pb-24 md:pb-32 relative overflow-hidden" ref={ref}>
        {/* === TOP TRANSITION from About === */}
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(10, 10, 12, 1) 0%, rgba(10, 10, 12, 0.6) 50%, transparent 100%)',
            }}
          />
          {/* Incoming particles */}
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

        <div className="container-custom text-center max-w-5xl relative z-10">
          {/* Section Header - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white-pure">
              Ready to Build
              <br />
              <span className="text-gradient-green">Something Extraordinary?</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white-muted mb-10 max-w-3xl mx-auto">
              From concept to launch, we turn ambitious visions into market-ready products.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group/cta relative bg-black-card border-2 border-primary-green text-primary-green font-semibold rounded-md text-base md:text-lg px-8 py-4 inline-flex items-center gap-2 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background on hover */}
              <span className="absolute inset-0 bg-primary-green transform translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-out" />

              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-green opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-green opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />

              {/* Glow effect */}
              <span className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 blur-lg bg-primary-green/40 -z-10 transition-opacity duration-500" />

              {/* Text and Icon */}
              <span className="relative z-10 group-hover/cta:text-black-pure transition-colors duration-300">
                Start Your Project
              </span>
              <svg
                className="relative z-10 w-5 h-5 transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:text-black-pure"
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
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name or company name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // For MVP: Just log to console and show success
      console.log('Form submitted:', formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        budget: '',
        message: '',
      });

      // Auto-close after success
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black-pure/90 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative bg-black-elevated border border-primary-green/30 rounded-lg shadow-green-glow max-w-lg w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-primary-green/20">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary-green/60" />
                  <div className="w-3 h-3 rounded-full bg-primary-green/40" />
                  <div className="w-3 h-3 rounded-full bg-primary-green/20" />
                </div>
                <h3 className="text-lg font-bold text-white-pure">
                  Start Your <span className="text-primary-green">Project</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-white-soft hover:text-primary-green transition-colors p-1"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-white-muted text-sm mb-5">
                Share your vision and we'll get back to you within 24 hours.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name/Company */}
                <div>
                  <label htmlFor="name" className="block text-white-soft text-sm font-medium mb-2">
                    Name or Company
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name or company name"
                    className="w-full bg-black-card border border-primary-green/20 focus:border-primary-green/60 rounded-md text-white-pure placeholder-white-dim px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary-green/30"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white-soft text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-black-card border border-primary-green/20 focus:border-primary-green/60 rounded-md text-white-pure placeholder-white-dim px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary-green/30"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Budget Range - Custom Dropdown */}
                <BudgetDropdown
                  value={formData.budget}
                  onChange={(value) => {
                    setFormData((prev) => ({ ...prev, budget: value }));
                    if (errors.budget) {
                      setErrors((prev) => ({ ...prev, budget: '' }));
                    }
                  }}
                  error={errors.budget}
                />

                {/* Project Description */}
                <div>
                  <label htmlFor="message" className="block text-white-soft text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your vision, goals, and what you're looking to build..."
                    rows="4"
                    maxLength="1000"
                    className="w-full bg-black-card border border-primary-green/20 focus:border-primary-green/60 rounded-md text-white-pure placeholder-white-dim px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary-green/30 resize-none"
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-red-400 text-xs">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <p className="text-white-dim text-xs">{formData.message.length}/1000</p>
                  </div>
                </div>

                {/* Submit Button - matching website style */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/cta relative w-full bg-black-card border-2 border-primary-green text-primary-green font-semibold rounded-md text-base py-3 inline-flex items-center justify-center gap-2 transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Animated background on hover */}
                  <span className="absolute inset-0 bg-primary-green transform translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-out" />

                  {/* Text */}
                  <span className="relative z-10 group-hover/cta:text-black-pure transition-colors duration-300">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : submitStatus === 'success' ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                  <svg
                    className="relative z-10 w-5 h-5 transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:text-black-pure"
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

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or email us at chaosgenesisnft@gmail.com
                  </p>
                )}
              </form>

              {/* Footer hint */}
              <p className="text-white-dim text-xs text-center mt-4">
                Press ESC to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
