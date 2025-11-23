import { useState } from 'react';
import { FaTwitter, FaTelegramPlane, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaTelegramPlane, label: 'Telegram', href: '#' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: '#' },
  ];

  const quickLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-black-soft border-t border-primary-green/20 relative overflow-hidden">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-green/50 to-transparent" />

      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary-green/5 blur-[120px] rounded-full" />

      <div className="container-custom px-6 py-6 md:py-8 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-6">
          {/* Left Column - Brand */}
          <div className="md:col-span-1">
            <div className="relative inline-block group">
              <h3 className="text-primary-green font-mono text-2xl font-bold mb-2 relative cursor-default">
                M.D.N TECH
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-green group-hover:w-full transition-all duration-500" />
              </h3>
            </div>
            <p className="text-white-soft text-sm mb-6 leading-relaxed">
              Transforming Visions Into Digital Reality
            </p>

            {/* Decorative line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-primary-green to-transparent mb-6" />

            {/* Email */}
            <div className="group">
              <p className="text-white-dim text-xs uppercase tracking-wider mb-2 font-mono">
                Email
              </p>
              <a
                href="mailto:chaosgenesisnft@gmail.com"
                className="text-white-soft hover:text-primary-green transition-colors text-sm inline-block relative group"
              >
                <span className="relative">
                  chaosgenesisnft@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-green group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white-soft text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group relative text-white-muted hover:text-primary-green transition-all duration-300 text-sm text-left w-fit"
                >
                  {/* Animated arrow */}
                  <span
                    className={`inline-block mr-2 transition-all duration-300 ${
                      hoveredLink === link.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                    }`}
                  >
                    →
                  </span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-green group-hover:w-full transition-all duration-300" />
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column - Social Media */}
          <div className="md:col-span-1">
            <h4 className="text-white-soft text-sm font-semibold mb-4 uppercase tracking-wider">
              Join the Community
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <div
                    key={social.label}
                    className="relative group"
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <span
                      className={`relative flex items-center gap-3 px-4 py-3 border rounded-md text-white-soft cursor-not-allowed transition-all duration-300 ${
                        hoveredSocial === social.label
                          ? 'border-primary-green/50 bg-primary-green/5'
                          : 'border-white-soft/10 bg-black-card/50'
                      }`}
                      title={`${social.label} (Coming soon)`}
                      aria-label={`${social.label} link (Coming soon)`}
                    >
                      {/* Corner accents on hover */}
                      <span
                        className={`absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary-green rounded-tl-md transition-opacity duration-300 ${
                          hoveredSocial === social.label ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary-green rounded-br-md transition-opacity duration-300 ${
                          hoveredSocial === social.label ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      <Icon
                        size={18}
                        className={`transition-transform duration-300 ${
                          hoveredSocial === social.label ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <span className="text-xs font-medium">{social.label}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          {/* Decorative top border with gradient */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-green/50 to-transparent" />

          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white-dim text-xs">
              © 2025 M.D.N TECH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
