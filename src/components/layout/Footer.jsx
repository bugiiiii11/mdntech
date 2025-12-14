const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Project', id: 'project' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-dark border-t border-gray-500/10">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-secondary font-bold text-xl text-white mb-3">
              M.D.N Tech
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your Vision, Engineered.<br />
              Dubai-based development studio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-primary transition-colors text-sm text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:chaosgenesisnft@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors block"
              >
                chaosgenesisnft@gmail.com
              </a>
              <p className="text-gray-500 text-xs mt-3">
                Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-500/10 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} M.D.N Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
