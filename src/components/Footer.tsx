import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-dark py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Peer Mentor Admissions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;