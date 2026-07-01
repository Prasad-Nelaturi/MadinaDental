import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Aman Ganesh',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      text: 'I am very satisfied with my experience at Madina Dental. The team is professional, caring, and the results are amazing!',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face',
      text: 'The best dental clinic I have ever visited. My smile is now perfect and the staff made me feel so comfortable throughout.',
      rating: 5,
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Rahul Verma',
      location: 'Ahmedabad',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
      text: 'Excellent service and friendly staff. I highly recommend Madina Dental Care to everyone looking for quality dental treatment.',
      rating: 5,
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      location: 'Surat',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      text: 'Amazing experience! The doctors are very knowledgeable and the facilities are top-notch.',
      rating: 5,
      date: '1 week ago'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
      text: 'Professional, caring, and affordable. My entire family now comes to Madina Dental.',
      rating: 5,
      date: '2 months ago'
    },
    {
      id: 6,
      name: 'Ananya Reddy',
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
      text: 'The most comfortable dental experience I\'ve ever had. Highly recommended!',
      rating: 5,
      date: '3 days ago'
    }
  ];

  const itemsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    return testimonials.slice(start, end);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging, nextSlide]);

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#121212] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4B85C]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full text-sm font-medium mb-6 border border-[#C9A84C]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Patient Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from our happy patients about their transformative experiences
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonials Grid */}
          <div 
            ref={containerRef}
            className="overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative h-full bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#C9A84C]/40 transition-all duration-500"
                      style={{
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)'
                      }}
                    >
                      {/* Hover Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A84C]/10 via-transparent to-[#C9A84C]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <Quote className="w-12 h-12 text-[#C9A84C]" />
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-all duration-300">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          {/* Decorative Ring */}
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-[#C9A84C] transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-[#A0A0A0]">{testimonial.location}</p>
                          <p className="text-xs text-[#A0A0A0]">{testimonial.date}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? 'fill-[#C9A84C] text-[#C9A84C]'
                                : 'text-[#2A2A2A]'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[#C9A84C]'
                    : 'w-2 bg-[#2A2A2A] hover:bg-[#A0A0A0]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-[#1A1A1A] to-[#121212] px-8 sm:px-12 py-6 rounded-2xl border border-[#2A2A2A] hover:border-[#C9A84C]/30 transition-all duration-500"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((t, i) => (
                  <img 
                    key={i}
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] object-cover"
                  />
                ))}
              </div>
              <span className="text-[#A0A0A0] text-sm">
                <span className="text-white font-bold">500+</span> happy patients
              </span>
            </div>
            <button className="group bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] hover:from-[#D4B85C] hover:to-[#E8D5A3] text-[#0A0A0A] px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40 flex items-center gap-2">
              Share Your Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;