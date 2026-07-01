import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Doctors', to: 'doctors' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'neu-nav-scrolled' : 'neu-nav'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="neu-avatar p-3">
                <Stethoscope className="w-7 h-7 text-[#C9A84C]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#F5F3EF]">
                  <span>Madina</span>
                  <span className="text-[#C9A84C]">Dental</span>
                </h1>
                <p className="text-xs text-[#A09888]">Care Clinic</p>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveLink(link.to)}
                className="relative px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 text-sm font-medium"
                activeClass="neu-nav-link-active"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeLink === link.to ? 'text-[#C9A84C]' : 'text-[#A09888]'
                }`}>
                  {link.name}
                </span>
                {activeLink === link.to && (
                  <motion.div
                    layoutId="navActiveBackground"
                    className="absolute inset-0 rounded-xl neu-nav-active"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="appointment"
              smooth={true}
              duration={500}
              className="btn-primary flex items-center gap-2 text-sm ml-4"
            >
              <Phone size={16} />
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden neu-avatar p-3"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-[#C9A84C]" /> : <Menu size={24} className="text-[#C9A84C]" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 mt-4 neu-card">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    spy={true}
                    offset={-80}
                    onSetActive={() => setActiveLink(link.to)}
                    className="block px-4 py-3 rounded-xl transition-all duration-300 relative"
                    activeClass="neu-mobile-link-active"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      activeLink === link.to ? 'text-[#C9A84C]' : 'text-[#A09888]'
                    }`}>
                      {link.name}
                    </span>
                    {activeLink === link.to && (
                      <motion.div
                        layoutId="mobileActiveBackground"
                        className="absolute inset-0 rounded-xl neu-mobile-active"
                        transition={{ type: "spring", duration: 0.4 }}
                      />
                    )}
                  </Link>
                ))}
                <Link
                  to="appointment"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block text-center btn-primary mt-4"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;