import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const cardsRef = useRef([]);

  const cards = [
    { id: 1, rot: -9, depth: 14, img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=600&fit=crop&crop=faces&q=80' },
    { id: 2, rot: -5, depth: 10, img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=600&fit=crop&crop=faces&q=80' },
    { id: 3, rot: -2, depth: 8, img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=600&fit=crop&crop=faces&q=80' },
    { id: 4, rot: 3, depth: 12, img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=600&fit=crop&crop=faces&q=80' },
    { id: 5, rot: 0, depth: 6, img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=600&fit=crop&crop=faces&q=80' },
    { id: 6, rot: 4, depth: 11, img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=600&fit=crop&crop=faces&q=80' },
    { id: 7, rot: 7, depth: 9, img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=600&fit=crop&crop=faces&q=80' },
    { id: 8, rot: -4, depth: 13, img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=600&fit=crop&crop=faces&q=80' },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        card.style.transform = `translateY(${i * 10}px) rotate(${cards[i].rot}deg)`;
      }
    });
  }, []);

  const stats = [
    { icon: <Award className="w-5 h-5" />, value: '10,000+', label: 'Happy Patients' },
    { icon: <Award className="w-5 h-5" />, value: '15+', label: 'Years Experience' },
    { icon: <Award className="w-5 h-5" />, value: '4.9', label: 'Google Rating' },
    { icon: <Award className="w-5 h-5" />, value: '24/7', label: 'Emergency Care' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Banner Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=1080&fit=crop&q=80)',
            backgroundPosition: 'center 30%',
          }}
        />
        
        {/* Dark Overlay - Multiple layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B0A]/90 via-[#0D0B0A]/80 to-[#0D0B0A]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B0A]/70 via-transparent to-[#0D0B0A]/70" />
        
        {/* Gold Accent Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_70%)]" />
        
        {/* Bottom Gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0B0A] to-transparent" />
      </div>

      {/* Floating Particles - Gold */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A84C]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4B85C]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C9A84C]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <span className="text-[#C9A84C] font-medium">Welcome to Madina Dental Care</span>
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

          {/* Cards Row */}
          <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                ref={el => cardsRef.current[index] = el}
                initial={{ opacity: 0, y: 50, rotate: card.rot + 10 }}
                animate={{ opacity: 1, y: 0, rotate: card.rot }}
                transition={{ delay: 0.3 + index * 0.08 }}
                whileHover={{ scale: 1.08, zIndex: 20 }}
                className="absolute neu-gold overflow-hidden cursor-pointer"
                style={{
                  width: `${130 + (index % 3) * 20}px`,
                  height: `${180 + (index % 3) * 30}px`,
                  left: `${4 + index * 11}%`,
                  top: `${20 + (index % 4) * 15}px`,
                  zIndex: 10 - index % 3,
                  transform: `rotate(${card.rot}deg)`,
                  border: '1px solid rgba(201, 168, 76, 0.08)',
                }}
              >
                <img
                  src={card.img}
                  alt="Dental team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A]/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
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
    </section>
  );
};

export default Hero;