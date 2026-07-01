import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/911234567890', '_blank');
  };

  return (
    <>
      {/* Back to Top Button - Left Side */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#121212] rounded-2xl shadow-[12px_12px_24px_#0a0a0a,_-12px_-12px_24px_#1a1a1a,_0_0_30px_rgba(201,168,76,0.1)] border border-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] hover:text-[#D4B85C] hover:scale-110 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              <span className="text-xs text-white bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-[#2A2A2A]">
                Back to top
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button - Right Side with Blink Effect */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            onClick={openWhatsApp}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.6)] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group"
            aria-label="Contact on WhatsApp"
          >
            {/* Blink Effect Rings */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full animate-ping-slow bg-[#25D366]/40" />
              <div className="absolute inset-0 rounded-full animate-ping-slower bg-[#25D366]/20" />
              <div className="absolute inset-0 rounded-full animate-ping-slowest bg-[#25D366]/10" />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
            
            {/* WhatsApp Icon - Better Icon with Shadow */}
            <FaWhatsapp size={32} className="relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            
            {/* Pulse Ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-[#25D366]/20 animate-pulse-ring" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0">
              <div className="flex items-center gap-2 text-xs text-white bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#2A2A2A] shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Chat with us on WhatsApp</span>
              </div>
            </div>

            {/* Notification Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-red-500/50"
            >
              <span className="animate-pulse-badge">1</span>
            </motion.div>

            {/* Small Decorative Dots */}
            <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-[#25D366]/30 animate-pulse" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-[#25D366]/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes ping-slowest {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(3.2); opacity: 0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        @keyframes pulse-badge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-ping-slow {
          animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slowest {
          animation: ping-slowest 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .animate-pulse-badge {
          animation: pulse-badge 1s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default BackToTop;