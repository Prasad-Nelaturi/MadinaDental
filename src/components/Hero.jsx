import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const stats = [
    { icon: <Award className="w-5 h-5" />, value: '10,000+', label: 'Happy Patients' },
    { icon: <Award className="w-5 h-5" />, value: '15+', label: 'Years Experience' },
    { icon: <Award className="w-5 h-5" />, value: '4.9', label: 'Google Rating' },
    { icon: <Award className="w-5 h-5" />, value: '24/7', label: 'Emergency Care' },
  ];

  return (
<section
  id="home"
  className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20"
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0D0B0A]/10" />
      
      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B0A]/90 via-[#0D0B0A]/0 to-[#0D0B0A]/0" />

      {/* Content */}
      <div className="relative z-10 container-custom py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 neu-badge"
            >
              <span className="neu-dot" />
              <span className="text-[#C9A84C] font-medium">Welcome to Happy Smiles Dental Care</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-[#F5F3EF]">Your Smile,</span>
              <br />
              <span className="gold-gradient-text">Our Passion</span>
            </h1>

            <p className="text-lg text-[#D5D0C8] max-w-lg">
              Experience excellence in dentistry with advanced technology, personalized care and a gentle touch.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-primary flex items-center gap-2"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="btn-secondary"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="neu-card-pressed p-4 text-center">
                  <div className="flex justify-center mb-2 text-[#C9A84C]">{stat.icon}</div>
                  <p className="text-lg font-bold text-[#F5F3EF]">{stat.value}</p>
                  <p className="text-xs text-[#D5D0C8]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <Link to="about" smooth={true} duration={500}>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <span className="text-xs text-[#D5D0C8]">Scroll</span>
              <ChevronDown className="w-5 h-5 text-[#C9A84C] animate-bounce" />
            </div>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;