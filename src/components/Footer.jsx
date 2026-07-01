import React from 'react';
import { Stethoscope, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Doctors', to: 'doctors' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  const services = [
    'Teeth Whitening',
    'Dental Implants',
    'Braces & Aligners',
    'Smile Makeover',
    'Root Canal Treatment',
    'Kids Dentistry',
  ];

  const socialIcons = [
    { icon: <FaFacebook size={18} />, label: 'Facebook' },
    { icon: <FaTwitter size={18} />, label: 'Twitter' },
    { icon: <FaInstagram size={18} />, label: 'Instagram' },
    { icon: <FaYoutube size={18} />, label: 'Youtube' },
    { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#121212] shadow-[8px_8px_16px_#0a0a0a,_-8px_-8px_16px_#1a1a1a]">
                <Stethoscope className="w-7 h-7 text-[#C9A84C]" />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-white">Happy Smiles</span>
                  <span className="text-[#C9A84C]">Dental</span>
                </h2>
                <p className="text-xs text-[#A0A0A0]">Care Clinic</p>
              </div>
            </div>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
              Providing exceptional dental care with a gentle touch. Your journey to a perfect smile starts here.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-10 h-10 rounded-xl bg-[#121212] flex items-center justify-center text-[#A0A0A0] hover:text-[#C9A84C] transition-all duration-300 shadow-[4px_4px_8px_#0a0a0a,_-4px_-4px_8px_#1a1a1a] hover:shadow-[2px_2px_4px_#0a0a0a,_-2px_-2px_4px_#1a1a1a]"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-[#A0A0A0] hover:text-[#C9A84C] transition flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <ArrowRight size={14} className="text-[#C9A84C]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="text-[#A0A0A0] hover:text-[#C9A84C] transition flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <ArrowRight size={14} className="text-[#C9A84C]" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#A0A0A0]">Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm text-[#A0A0A0]">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm text-[#A0A0A0]">info@happysmilesdentalcare.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-[#A0A0A0]">
                  <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2A2A] mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#A0A0A0]">
            © {new Date().getFullYear()} Prasad Nelaturi. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-[#A0A0A0] hover:text-[#C9A84C] transition">Privacy Policy</button>
            <button className="text-[#A0A0A0] hover:text-[#C9A84C] transition">Terms & Conditions</button>
            <button className="text-[#A0A0A0] hover:text-[#C9A84C] transition">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;