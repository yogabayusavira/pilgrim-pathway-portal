
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Umrah Packages", href: "#packages" },
    { name: "Hajj Packages", href: "#packages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Umrah Guide", href: "#" },
    { name: "Hajj Guide", href: "#" },
    { name: "Prayer Times", href: "#" },
    { name: "Visa Requirements", href: "#" },
    { name: "FAQ", href: "#faq" },
    { name: "Travel Tips", href: "#" },
  ];

  return (
    <footer className="bg-hajj-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-white font-bold text-2xl">Al-Ihsan</span>
              <span className="text-gold-500 font-semibold">Travels</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for Hajj and Umrah services, providing meaningful spiritual journeys with care and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-hajj-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-hajj-800 pb-2">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-hajj-800 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1"><Mail size={18} className="text-gray-300" /></div>
                <div>
                  <p className="text-gray-300">info@alihsantravels.com</p>
                  <p className="text-gray-300">booking@alihsantravels.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1"><Phone size={18} className="text-gray-300" /></div>
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">+1 (555) 765-4321</p>
                </div>
              </div>
              <div>
                <p className="text-gray-300">123 Pilgrim Street</p>
                <p className="text-gray-300">New York, NY 10001, USA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-hajj-800 text-center md:flex md:justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Al-Ihsan Travels. All rights reserved.
          </p>
          <div className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
