import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop', title: 'Modern Clinic' },
    { id: 2, src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop', title: 'Treatment Room' },
    { id: 3, src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop', title: 'Dental Equipment' },
    { id: 4, src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop', title: 'Waiting Area' },
    { id: 5, src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop', title: 'Surgery Room' },
    { id: 6, src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop', title: 'Reception' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full text-sm font-semibold mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Our</span>
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#D4B85C] to-[#C9A84C] bg-clip-text text-transparent">Facility</span>
          </h2>
          <p className="text-[#A0A0A0] mt-4">
            Take a tour of our modern dental clinic with state-of-the-art equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121212] rounded-3xl overflow-hidden shadow-[12px_12px_24px_#0a0a0a,_-12px_-12px_24px_#1a1a1a] border border-[#C9A84C]/10 group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full bg-[#121212] rounded-3xl shadow-[12px_12px_24px_#0a0a0a,_-12px_-12px_24px_#1a1a1a] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 z-10 bg-[#121212] p-2 rounded-xl shadow-[4px_4px_8px_#0a0a0a,_-4px_-4px_8px_#1a1a1a] text-white hover:text-[#C9A84C] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="p-4 text-center">
                <p className="text-white font-semibold text-lg">{selectedImage.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;