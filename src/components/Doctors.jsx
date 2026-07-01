import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Star, Users, Sparkles, ArrowRight, ChevronRight, Heart } from 'lucide-react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Doctors = () => {
  const [liked, setLiked] = useState({});

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Ahmed',
      specialization: 'Orthodontist',
      experience: '12 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      education: 'DDS, MS',
      rating: 4.9,
      patients: 1250,
      about: 'Leading orthodontist specializing in invisible aligners and modern braces.',
      availability: 'Mon-Fri'
    },
    {
      id: 2,
      name: 'Dr. Raj Patel',
      specialization: 'Oral Surgeon',
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      education: 'DDS, PhD',
      rating: 4.8,
      patients: 980,
      about: 'Expert oral surgeon with advanced training in complex dental procedures.',
      availability: 'Mon-Sat'
    },
    {
      id: 3,
      name: 'Dr. Priya Singh',
      specialization: 'Cosmetic Dentist',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
      education: 'DDS, FAGD',
      rating: 4.9,
      patients: 870,
      about: 'Award-winning cosmetic dentist creating beautiful smiles with artistry.',
      availability: 'Tue-Sat'
    },
    {
      id: 4,
      name: 'Dr. Amit Kumar',
      specialization: 'Pediatric Dentist',
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      education: 'DDS, MS',
      rating: 4.7,
      patients: 1100,
      about: 'Gentle pediatric dentist making dental visits fun for children.',
      availability: 'Mon-Fri'
    },
  ];

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="doctors" className="py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#0D0B0A] to-[#0A0A0A] relative overflow-hidden">
      {/* Ultra-modern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4B85C]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A84C]/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Modern */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#C9A84C]/20 to-[#D4B85C]/10 text-[#C9A84C] rounded-full text-sm font-medium mb-6 border border-[#C9A84C]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Expert Team
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Meet Our</span>
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">Specialists</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            World-class dental professionals dedicated to transforming your smile
          </p>
        </motion.div>

        {/* Doctors Grid - Ultra Modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Glass Morphism Card */}
              <div className="relative h-full bg-gradient-to-br from-[#1A1A1A]/80 to-[#121212]/80 backdrop-blur-xl rounded-3xl p-6 border border-[#2A2A2A]/50 hover:border-[#C9A84C]/40 transition-all duration-500"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)'
                }}
              >
                {/* Hover Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A84C]/20 via-transparent to-[#C9A84C]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(doctor.id)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#A0A0A0] hover:text-[#ff6b6b] transition-all duration-300 hover:border-[#ff6b6b]/30"
                >
                  <Heart className={`w-4 h-4 transition-all duration-300 ${liked[doctor.id] ? 'fill-[#ff6b6b] text-[#ff6b6b]' : ''}`} />
                </button>

                {/* Image Container - Modern Circle */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Animated Ring */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-spin-slow" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#C9A84C]/20 group-hover:border-[#C9A84C] transition-all duration-500">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs">
                  <Star className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]" />
                  <span className="text-white font-medium">{doctor.rating}</span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-[#C9A84C] text-sm font-medium">{doctor.specialization}</p>
                  <p className="text-[#A0A0A0] text-xs mt-1">{doctor.education}</p>
                  
                  {/* Stats */}
                  <div className="flex justify-center gap-6 mt-4 py-3 border-y border-[#2A2A2A]">
                    <div>
                      <p className="text-xs text-[#A0A0A0]">Patients</p>
                      <p className="text-sm font-bold text-white">{doctor.patients}+</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#A0A0A0]">Experience</p>
                      <p className="text-sm font-bold text-white">{doctor.experience}</p>
                    </div>
                  </div>

                  {/* About */}
                  <p className="text-xs text-[#A0A0A0] mt-3 leading-relaxed">
                    {doctor.about}
                  </p>

                  {/* Availability */}
                  <div className="flex items-center justify-center gap-2 mt-3 text-xs">
                    <Calendar className="w-3 h-3 text-[#C9A84C]" />
                    <span className="text-[#A0A0A0]">{doctor.availability}</span>
                  </div>

                  {/* Social Icons - Modern */}
                  <div className="flex justify-center gap-2 mt-4">
                    {[Mail, Phone, FaInstagram, FaTwitter].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all duration-300 hover:scale-110"
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>

                  {/* Book Button - Modern */}
                  <button className="w-full mt-4 group/btn relative overflow-hidden bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] text-[#0A0A0A] px-4 py-3 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2">
                    <span className="relative z-10">Book Appointment</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4B85C] to-[#E8D5A3] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-[#1A1A1A] to-[#121212] px-8 sm:px-12 py-6 rounded-2xl border border-[#2A2A2A] hover:border-[#C9A84C]/30 transition-all duration-500 backdrop-blur-sm"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C9A84C]/20 to-[#D4B85C]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">Join 10,000+ Happy Patients</p>
                <p className="text-xs text-[#A0A0A0]">Find your perfect dentist today</p>
              </div>
            </div>
            <button className="group bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] hover:from-[#D4B85C] hover:to-[#E8D5A3] text-[#0A0A0A] px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40 flex items-center gap-2">
              View All Doctors
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Doctors;