import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every 6 months for regular check-ups and cleanings. However, your dentist may suggest a different schedule based on your specific oral health needs."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "During your first visit, we'll conduct a comprehensive examination including X-rays, oral cancer screening, and a thorough cleaning. We'll also discuss your dental history and any concerns you may have."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our team will verify your coverage and help you understand your benefits before any treatment begins."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last 20 years or more. They are designed to be a permanent solution for missing teeth."
    },
    {
      question: "What payment options do you offer?",
      answer: "We offer various payment options including cash, credit/debit cards, and flexible payment plans. We also accept most dental insurance plans."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#D4B85C] to-[#C9A84C] bg-clip-text text-transparent">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121212] rounded-3xl shadow-[8px_8px_16px_#0a0a0a,_-8px_-8px_16px_#1a1a1a] border border-[#C9A84C]/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:text-[#C9A84C] transition-colors"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#C9A84C]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#A0A0A0]" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-[#A0A0A0] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;