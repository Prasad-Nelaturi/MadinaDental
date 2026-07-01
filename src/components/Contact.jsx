import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Sparkles
} from 'lucide-react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: 'Ahmedabad, India' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91 123 456 7890' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'info@madinadental.com' },
    { icon: <Clock className="w-5 h-5" />, label: 'Working Hours', value: 'Mon-Sat: 9:00 AM - 8:00 PM' },
  ];

  const socialIcons = [
    { icon: <FaFacebook size={22} />, label: 'Facebook', color: '#1877f2' },
    { icon: <FaTwitter size={22} />, label: 'Twitter', color: '#1da1f2' },
    { icon: <FaInstagram size={22} />, label: 'Instagram', color: '#e4405f' },
    { icon: <FaYoutube size={22} />, label: 'Youtube', color: '#ff0000' },
    { icon: <FaLinkedinIn size={22} />, label: 'LinkedIn', color: '#0a66c2' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#0D0B0A] to-[#121212] relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4B85C]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A84C]/3 rounded-full blur-3xl" />
        
        {/* 3D Floating Orbs */}
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-[#C9A84C]/10 blur-2xl animate-float" />
        <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-[#D4B85C]/10 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full text-sm font-medium mb-6 border border-[#C9A84C]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
      {/* "Welcome To" - Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-12"
      >
        <div className="inline-block">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
            <Sparkles className="w-5 h-5 text-[#C9A84C] animate-pulse" />
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider">
            Contact Us
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-2" />
          <p className="text-xs md:text-sm text-[#A0A0A0] tracking-[0.3em] uppercase mt-4">
            We're here to help. Reach out to us for any questions or to schedule an appointment.
          </p>
        </div>
      </motion.div>
       
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info & Social - Equal Height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 space-y-4">
              {/* Contact Info Cards - 3D Neumorphism */}
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-5 rounded-2xl border border-[#2A2A2A] hover:border-[#C9A84C]/40 transition-all duration-500 flex items-start gap-4"
                    style={{
                      boxShadow: '12px 12px 30px rgba(0,0,0,0.5), -12px -12px 30px rgba(30,30,30,0.2), inset 0 1px 0 rgba(255,255,255,0.03)'
                    }}
                  >
                    {/* 3D Hover Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A84C]/20 via-transparent to-[#C9A84C]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon Container - 3D */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#D4B85C]/10 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#0A0A0A] transition-all duration-500 border border-[#C9A84C]/10 group-hover:border-[#C9A84C]/30"
                        style={{
                          boxShadow: '6px 6px 12px rgba(0,0,0,0.3), -6px -6px 12px rgba(30,30,30,0.1)'
                        }}
                      >
                        {item.icon}
                      </div>
                      {/* 3D Ring Effect */}
                      <div className="absolute -inset-1 rounded-xl bg-[#C9A84C]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-[#C9A84C] transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Icons Section - 3D Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-6 rounded-2xl border border-[#2A2A2A] hover:border-[#C9A84C]/40 transition-all duration-500"
                style={{
                  boxShadow: '12px 12px 30px rgba(0,0,0,0.5), -12px -12px 30px rgba(30,30,30,0.2), inset 0 1px 0 rgba(255,255,255,0.03)'
                }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A84C]/20 via-transparent to-[#C9A84C]/20 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#D4B85C] rounded-full" />
                    <h3 className="text-white font-bold text-lg">Connect With Us</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {socialIcons.map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ y: -6, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                        aria-label={social.label}
                      >
                        <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C9A84C] transition-all duration-500 group-hover:border-[#C9A84C]/40"
                          style={{
                            boxShadow: '8px 8px 16px rgba(0,0,0,0.4), -8px -8px 16px rgba(30,30,30,0.2)'
                          }}
                        >
                          {social.icon}
                        </div>
                        {/* 3D Hover Ring */}
                        <div className="absolute -inset-1 rounded-2xl bg-[#C9A84C]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="text-[10px] text-[#A0A0A0] whitespace-nowrap bg-[#1A1A1A] px-2 py-0.5 rounded-full border border-[#2A2A2A]">
                            {social.label}
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Social Stats - 3D */}
                  <div className="mt-5 pt-5 border-t border-[#2A2A2A] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {socialIcons.slice(0, 3).map((social, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-[#121212] flex items-center justify-center text-[10px] text-[#A0A0A0]"
                            style={{
                              boxShadow: '4px 4px 8px rgba(0,0,0,0.3), -4px -4px 8px rgba(30,30,30,0.1)'
                            }}
                          >
                            {social.icon}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-[#A0A0A0]">
                        <span className="text-[#C9A84C] font-bold">10K+</span> followers
                      </span>
                    </div>
                    <span className="text-xs text-[#A0A0A0]">Follow us</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form - 3D Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#C9A84C]/40 transition-all duration-500 h-full"
            style={{
              boxShadow: '20px 20px 50px rgba(0,0,0,0.5), -20px -20px 50px rgba(30,30,30,0.2), inset 0 1px 0 rgba(255,255,255,0.03)'
            }}
          >
            {/* 3D Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A84C]/20 via-transparent to-[#C9A84C]/20 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#D4B85C] rounded-full" />
                <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-[#A0A0A0] mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1A1A1A] px-4 py-3.5 text-white rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition border border-[#2A2A2A] focus:border-[#C9A84C]"
                    style={{
                      boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.3), inset -6px -6px 12px rgba(30,30,30,0.1)'
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#A0A0A0] mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1A1A1A] px-4 py-3.5 text-white rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition border border-[#2A2A2A] focus:border-[#C9A84C]"
                    style={{
                      boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.3), inset -6px -6px 12px rgba(30,30,30,0.1)'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#A0A0A0] mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1A1A1A] px-4 py-3.5 text-white rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition border border-[#2A2A2A] focus:border-[#C9A84C]"
                    style={{
                      boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.3), inset -6px -6px 12px rgba(30,30,30,0.1)'
                    }}
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#A0A0A0] mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-[#1A1A1A] px-4 py-3.5 text-white rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition border border-[#2A2A2A] focus:border-[#C9A84C] resize-none"
                    style={{
                      boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.3), inset -6px -6px 12px rgba(30,30,30,0.1)'
                    }}
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] hover:from-[#D4B85C] hover:to-[#E8D5A3] text-[#0A0A0A] py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                  style={{
                    boxShadow: '12px 12px 30px rgba(0,0,0,0.4), -12px -12px 30px rgba(30,30,30,0.2)'
                  }}
                >
                  <span className="relative z-10">Send Message</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4B85C] to-[#E8D5A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;