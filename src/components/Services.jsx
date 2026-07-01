import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles,
  Smile,
  Syringe,
  Activity,
  Microscope,
  ChevronRight,
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Teeth Whitening",
      description: "Professional teeth whitening treatment that removes stains and brightens your smile by several shades using advanced technology.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      features: ["Safe Procedure", "Instant Results", "Long-lasting", "Pain-free"],
      price: "$199",
      duration: "60 min"
    },
    {
      id: 2,
      icon: <Activity className="w-8 h-8" />,
      title: "Dental Implants",
      description: "Permanent replacement teeth that look, feel, and function like natural teeth. Restore your smile with confidence.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
      features: ["Natural Look", "Durable", "Comfortable", "Bone Health"],
      price: "$999",
      duration: "90 min"
    },
    {
      id: 3,
      icon: <Smile className="w-8 h-8" />,
      title: "Braces & Aligners",
      description: "Straighten your teeth with traditional braces or invisible aligners for a beautiful, confident smile.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      features: ["Clear Aligners", "Comfortable", "Effective", "Custom Treatment"],
      price: "$299",
      duration: "45 min"
    },
    {
      id: 4,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smile Makeover",
      description: "Complete smile transformation combining multiple cosmetic procedures for the perfect smile you've always wanted.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
      features: ["Custom Design", "Natural Results", "Confidence Boost", "Comprehensive"],
      price: "$1,499",
      duration: "120 min"
    },
    {
      id: 5,
      icon: <Microscope className="w-8 h-8" />,
      title: "Root Canal Treatment",
      description: "Save your natural teeth with advanced pain-free root canal therapy using modern technology and techniques.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      features: ["Pain-free", "High Success", "Fast Recovery", "Preserve Natural Tooth"],
      price: "$499",
      duration: "75 min"
    },
    {
      id: 6,
      icon: <Syringe className="w-8 h-8" />,
      title: "Kids Dentistry",
      description: "Specialized gentle dental care for children and teenagers in a fun, friendly environment.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
      features: ["Gentle Care", "Child-friendly", "Preventive Focus", "Positive Experience"],
      price: "$149",
      duration: "30 min"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Complete Dental Solutions</span>
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#D4B85C] to-[#C9A84C] bg-clip-text text-transparent">For Your Family</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 text-base sm:text-lg">
            We offer a wide range of dental treatments using the latest technology to ensure patients receive and enjoy lasting results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#121212] rounded-3xl overflow-hidden shadow-[12px_12px_24px_#0a0a0a,_-12px_-12px_24px_#1a1a1a,_0_0_30px_rgba(201,168,76,0.1)] border border-[#C9A84C]/10 group flex flex-col h-full"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Image - Fixed Height */}
              <div className="relative h-48 flex-shrink-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-[#121212] p-2 rounded-xl shadow-[4px_4px_8px_#0a0a0a,_-4px_-4px_8px_#1a1a1a]">
                  <div className={`transition-all duration-300 ${
                    hoveredService === service.id ? 'text-[#C9A84C]' : 'text-[#A0A0A0]'
                  }`}>
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content - Flexible Height */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features - Fixed Height Container */}
                <div className="h-10 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#1A1A1A] px-2.5 py-1 rounded-full text-[#A0A0A0] border border-[#2A2A2A] shadow-[inset_2px_2px_4px_#0a0a0a,_inset_-2px_-2px_4px_#1a1a1a]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons - Fixed at Bottom */}
                <div className="flex gap-3 mt-auto pt-2">
                  <button className="flex-1 bg-[#C9A84C] hover:bg-[#D4B85C] text-[#0A0A0A] px-4 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm shadow-[8px_8px_16px_#0a0a0a,_-8px_-8px_16px_#1a1a1a] hover:shadow-[4px_4px_8px_#0a0a0a,_-4px_-4px_8px_#1a1a1a]">
                    Book Now
                  </button>
                  <button className="border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] px-4 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm flex items-center gap-1 shadow-[8px_8px_16px_#0a0a0a,_-8px_-8px_16px_#1a1a1a] group/btn">
                    Details
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;