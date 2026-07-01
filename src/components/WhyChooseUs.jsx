import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, Award, Phone, Sparkles, CheckCircle, ArrowRight, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and digital dentistry for precise, comfortable treatments.",
      detail: ["3D Imaging", "Laser Dentistry", "Digital Scanning"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our specialist dentists bring years of experience and continuous education to every procedure.",
      detail: ["10+ Years", "Continuous Training", "Specialized Care"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient-Centered Care",
      description: "We listen to your concerns and create personalized treatment plans that fit your needs.",
      detail: ["Custom Plans", "Gentle Approach", "Clear Communication"]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Premium Safety",
      description: "Exceeding sterilization standards with hospital-grade protocols for your complete peace of mind.",
      detail: ["Sterile Environment", "Advanced Protocols", "Your Safety First"]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Affordable Excellence",
      description: "Premium dental care at transparent prices with flexible payment options for everyone.",
      detail: ["Competitive Pricing", "Insurance Welcome", "Payment Plans"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Emergency Care",
      description: "Round-the-clock support for dental emergencies when you need immediate attention.",
      detail: ["24/7 Available", "Fast Response", "Expert Care"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D4B85C]/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C9A84C]/3 blur-3xl" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-[#C9A84C]/10 blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#D4B85C]/10 blur-xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full text-sm font-medium mb-6 border border-[#C9A84C]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Your Smile,</span>
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">Our Priority</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience dental care that combines cutting-edge technology with a gentle, personalized touch
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Organic Card Shape */}
              <div className="relative h-full bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-[2rem] p-8 border border-[#2A2A2A] hover:border-[#C9A84C]/40 transition-all duration-500 overflow-hidden"
                style={{
                  boxShadow: '0 15px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
                  borderRadius: '2rem'
                }}
              >
                {/* Organic Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                
                {/* Soft Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A84C]/20 via-transparent to-[#C9A84C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-xl" />

                {/* Number Badge - Circular */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center text-xs font-bold text-[#C9A84C]/50 group-hover:bg-[#C9A84C]/20 group-hover:text-[#C9A84C] transition-all duration-300 border border-[#C9A84C]/10">
                  {index + 1}
                </div>

                {/* Icon - Circular */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A84C]/15 to-[#D4B85C]/5 flex items-center justify-center text-[#C9A84C] group-hover:text-white group-hover:from-[#C9A84C] group-hover:to-[#D4B85C] transition-all duration-500 border border-[#C9A84C]/10 group-hover:border-[#C9A84C]/30"
                    style={{
                      boxShadow: '0 8px 30px rgba(201,168,76,0.05)'
                    }}
                  >
                    {feature.icon}
                  </div>
                  {/* Pulsing Ring */}
                  <div className="absolute -inset-1 rounded-full bg-[#C9A84C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>

                {/* Detail Tags - Rounded */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.detail.map((item, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-4 py-1.5 rounded-full bg-[#1A1A1A] text-[#B0B0B0] border border-[#2A2A2A] group-hover:border-[#C9A84C]/20 group-hover:text-[#C9A84C] transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Organic Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Organic Shape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-gradient-to-br from-[#1A1A1A] to-[#121212] px-8 sm:px-12 py-6 rounded-full border border-[#2A2A2A] hover:border-[#C9A84C]/30 transition-all duration-300"
            style={{
              boxShadow: '0 15px 50px rgba(0,0,0,0.3)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center animate-pulse">
                <Heart className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <span className="text-[#A0A0A0] text-sm sm:text-base">Ready for your perfect smile?</span>
            </div>
            <button className="group bg-[#C9A84C] hover:bg-[#D4B85C] text-[#0A0A0A] px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40 flex items-center gap-2">
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators - Organic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {[
            { icon: <Star className="w-5 h-5" />, label: "4.9 Rating", count: "500+ Reviews" },
            { icon: <Users className="w-5 h-5" />, label: "10,000+", count: "Happy Patients" },
            { icon: <Award className="w-5 h-5" />, label: "15+ Years", count: "Experience" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A1A1A]/50 border border-[#2A2A2A] backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="text-xs text-[#A0A0A0]">{item.count}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;