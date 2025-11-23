import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="section-padding bg-black-soft/50" ref={ref}>
        <div className="container-custom max-w-4xl text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-green text-xs md:text-sm uppercase tracking-widest mb-3 font-mono">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white-pure mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-white-muted text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              From concept to launch, we turn ambitious visions into market-ready products. Share
              your idea, and let's explore how we can bring it to life together.
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
            className="relative bg-black-elevated border border-primary-green rounded-lg shadow-green-glow max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white-pure mb-2">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-white-muted text-sm">
                    Share your vision, and we'll map out the path to success. Typical response time: 24 hours.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white-soft hover:text-primary-green transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green rounded p-1"
                  aria-label="Close modal"
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
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="input-field w-full"
                  />
                  {errors.name && (
                    <p className="text-error text-xs mt-1">{errors.name}</p>
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
                    className="input-field w-full"
                  />
                  {errors.email && (
                    <p className="text-error text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budget" className="block text-white-soft text-sm font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field w-full"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                    <option value="not-sure">Not sure yet / Let's discuss</option>
                  </select>
                  {errors.budget && (
                    <p className="text-error text-xs mt-1">{errors.budget}</p>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="message" className="block text-white-soft text-sm font-medium mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your vision, goals, and what you're looking to build. Include any technical requirements, timeline expectations, or specific challenges you're facing."
                    rows="6"
                    maxLength="1000"
                    className="input-field w-full resize-none"
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-error text-xs">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <p className="text-white-dim text-xs">{formData.message.length}/1000</p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-base py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending Your Message...
                      </span>
                    ) : submitStatus === 'success' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent Successfully!
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <p className="text-error text-sm text-center">
                    Something went wrong. Please try again or email us directly at chaosgenesisnft@gmail.com
                  </p>
                )}
              </form>

              {/* ESC to Close */}
              <p className="text-white-dim text-xs text-center mt-6">
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
