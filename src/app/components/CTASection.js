
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';
import Image from 'next/image';

const FloatingParticle = () => {
    const style = useMemo(() => ({
        position: 'absolute',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10 + 2}px`,
        height: `${Math.random() * 8 + 1}px`,
        backgroundColor: 'rgba(255, 247, 237, 0.5)',
        borderRadius: '50%',
      }), []);
    
      const animation = useMemo(() => ({
        x: [0, Math.random() * 40 - 20, 0],
        y: [0, Math.random() * 40 - 20, 0],
        scale: [1, Math.random() * 0.8 + 1, 1],
        opacity: [0, 1, 0],
      }), []);
    
      return (
        <motion.div
          style={style}
          animate={animation}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
        />
      );
};


const CTASection = () => {
  return (
    <section className="relative py-24 bg-[#1f2937] overflow-hidden">
      <Image
        src="/images/cta-background.jpg"
        alt="Texture de fond apaisante"
        fill
        className="opacity-20 object-cover" 
      />

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => <FloatingParticle key={i} />)}
      </div>

      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(200, 122, 94, 0.15) 0%, transparent 60%)'
        }}
      ></div>

      <motion.div 
        className="relative container mx-auto px-6 text-center flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Votre transformation commence ici.
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-300 max-w-xl mx-auto mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          Le plus grand voyage est celui que l'on fait à l'intérieur de soi. Permettez-nous de vous accompagner sur le premier pas.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        >
          <Link 
            href="/soins" 
            className="bg-white text-[#1f2937] px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-200"
          >
            Réserver une Séance
          </Link>
          <Link 
            href="/academie" 
            className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white hover:text-[#1f2937]"
          >
            Explorer nos Formations
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
