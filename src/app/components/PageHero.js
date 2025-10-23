// src/app/components/PageHero.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Le composant accepte maintenant des props pour le titre, le texte et l'image
const PageHero = ({ title, text, imageSrc }) => {
  return (
    <section className="relative h-[50vh] min-h-[350px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 animate-slowZoom">
        <Image
          src={imageSrc} // Utilise la prop imageSrc
          alt={`Arrière-plan pour la page ${title}`} // Alt text dynamique
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div 
        className="relative z-10 px-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          {title} {/* Utilise la prop title */}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mt-4 max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          {text} {/* Utilise la prop text */}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PageHero;