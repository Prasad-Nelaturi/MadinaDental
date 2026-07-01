import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Shield, Users, Sparkles, ArrowRight, Stethoscope } from 'lucide-react';
import { Link } from 'react-scroll';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { icon: <Users className="w-5 h-5" />, value: 5000, label: 'Happy Patients', suffix: '+' },
    { icon: <Award className="w-5 h-5" />, value: 15, label: 'Years Experience', suffix: '+' },
    { icon: <Heart className="w-5 h-5" />, value: 98, label: 'Satisfaction Rate', suffix: '%' },
    { icon: <Shield className="w-5 h-5" />, value: 10, label: 'Expert Doctors', suffix: '+' },
  ];

  const images = [
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop"
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#0D0B0A] to-[#121212] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4B85C]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A84C]/3 rounded-full blur-3xl" />
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
            Welcome To
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-2" />
          <p className="text-xs md:text-sm text-[#A0A0A0] tracking-[0.3em] uppercase mt-2">
            Excellence in Dentistry
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Unique Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl group ${
                    index % 2 === 0 ? 'lg:-translate-y-6' : 'lg:translate-y-6'
                  }`}
                  style={{
                    height: index % 2 === 0 ? '450px' : '450px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)'
                  }}
                >
                  <div className="w-full h-full overflow-hidden rounded-2xl border border-[#2A2A2A] hover:border-[#C9A84C]/30 transition-all duration-500">
                    <img
                      src={img}
                      alt={`Dental clinic ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-xs font-medium bg-[#0A0A0A]/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                        View Gallery
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 lg:absolute lg:-bottom-6 lg:-right-6 bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-2xl p-4 border border-[#C9A84C]/20 backdrop-blur-xl hidden lg:block"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-[#C9A84C]/20 blur-sm animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">15+ Years</p>
                  <p className="text-xs text-[#A0A0A0]">Of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">About</span>
                <br />
                <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">Madina Dental Care</span>
              </h2>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-[#A0A0A0] leading-relaxed text-base">
                  Welcome to Madina Dental Care, where your smile is our passion. We are committed to providing exceptional dental care in a comfortable and welcoming environment.
                </p>
                <p className="text-[#A0A0A0] leading-relaxed text-base">
                  With over 15 years of experience and advanced technology, we deliver personalized treatments that give you the confident, healthy smile you deserve.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-4 rounded-2xl text-center border border-[#2A2A2A] hover:border-[#C9A84C]/30 transition-all duration-300"
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-2 text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#0A0A0A] transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="text-xl font-bold text-white">
                      {inView && <CountUp end={item.value} duration={2.5} suffix={item.suffix} />}
                    </p>
                    <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] text-[#0A0A0A] px-8 py-4 rounded-full font-semibold transition-all duration-300"
                style={{
                  boxShadow: '0 10px 30px rgba(201,168,76,0.2)'
                }}
              >
                <span className="relative z-10">Read More</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4B85C] to-[#E8D5A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
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

export default About;