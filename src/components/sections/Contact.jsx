import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappNumber = '971582283256';
  const whatsappMessage = encodeURIComponent('Hi, I\'m interested in discussing a project with M.D.N Tech.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailAddress = 'chaosgenesisnft@gmail.com';
  const emailSubject = 'Project Inquiry - M.D.N Tech';
  const emailBody = encodeURIComponent('Hi M.D.N Tech team,\n\nI would like to discuss a project with you.\n\n');
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden" ref={sectionRef}>
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-orb-blue blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-orb-blue blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Reach out and let's discuss your project.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/5 border border-[#25D366]/20 rounded-2xl p-8 lg:p-10 transition-all duration-1000 ease-out hover:border-[#25D366]/50 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Background glow on hover */}
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#25D366]/30 blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#25D366]/20 text-[#25D366] mb-6 border border-[#25D366]/30 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-500">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#25D366] transition-colors duration-500">
                WhatsApp
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                Get instant responses. Message us directly for quick discussions and immediate feedback.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[#25D366] font-medium group-hover:gap-3 transition-all duration-300">
                <span>Start Chat</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={emailLink}
            className={`group relative bg-dark-elevated border border-gray-500/10 rounded-2xl p-8 lg:p-10 transition-all duration-1000 ease-out hover:border-primary/50 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {/* Background glow on hover */}
            <div className="absolute top-1/2 left-1/2 w-64 h-64 glow-orb-blue blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 border border-primary/20 group-hover:glow-blue-md transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-500">
                Email
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                For detailed inquiries. Send us an email and we'll respond within 24 hours.
              </p>

              {/* Email Address */}
              <div className="mb-4 text-sm text-gray-500 font-mono">
                {emailAddress}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                <span>Send Email</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ease-out delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-dark-elevated border border-gray-500/10 rounded-xl p-8">
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What Happens Next?</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We'll respond within 24 hours to schedule a discovery call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Discuss your project requirements and goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive a detailed proposal and timeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
