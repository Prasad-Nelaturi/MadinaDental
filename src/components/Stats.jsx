import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Activity, Shield, Star } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: 10000, label: 'Happy Patients', suffix: '+' },
    { icon: <Award className="w-8 h-8" />, value: 15, label: 'Years Experience', suffix: '+' },
    { icon: <Activity className="w-8 h-8" />, value: 15000, label: 'Procedures Done', suffix: '+' },
    { icon: <Shield className="w-8 h-8" />, value: 10, label: 'Expert Doctors', suffix: '+' },
    { icon: <Star className="w-8 h-8" />, value: 4.9, label: 'Google Rating', suffix: '' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#121212] rounded-3xl p-8 md:p-12 shadow-[12px_12px_24px_#0a0a0a,_-12px_-12px_24px_#1a1a1a,_0_0_30px_rgba(201,168,76,0.1)] border border-[#C9A84C]/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-3 text-[#C9A84C] shadow-[inset_2px_2px_4px_#0a0a0a,_inset_-2px_-2px_4px_#1a1a1a]">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-white">
                  {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
                </p>
                <p className="text-sm text-[#A0A0A0] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;