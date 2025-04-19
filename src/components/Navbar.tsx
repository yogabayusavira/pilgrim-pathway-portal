
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Packages", href: "#packages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-hajj-700 font-bold text-2xl">Al-Ihsan</span>
          <span className="text-gold-500 font-semibold">Travels</span>
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-hajj-700 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="bg-hajj-700 hover:bg-hajj-800 text-white flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="container-custom py-4">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-hajj-700 transition-colors font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button className="bg-hajj-700 hover:bg-hajj-800 text-white w-full flex items-center justify-center gap-2">
                <Phone size={16} />
                <span>+62 (812) 2995-5630</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
