
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const content = {
  title: "Plus qu'une thérapie, une philosophie de vie.",
  text: "Chez Manatherapie, nous croyons que chaque individu possède en lui les clés de son propre épanouissement. Notre approche unique combine des techniques ancestrales et des méthodes de coaching modernes pour vous guider sur le chemin de l'harmonie intérieure. Nous ne traitons pas seulement les symptômes, nous vous aidons à construire des fondations solides pour une vie plus sereine et équilibrée.",
  button1_text: "Notre Mission",
  button1_link: "/mission",
  button2_text: "Prendre Rendez-vous",
  button2_link: "/contact",
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }}
};

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' }}
};

const imageGroupHoverVariants = {
  rest: { },
  hover: { }
};

const imageHoverVariants = {
  rest: { x: 0, y: 0 },
  hover: (custom) => ({ ...custom, transition: { type: 'spring', stiffness: 200, damping: 15 } })
};

const AboutSection = () => {
  return (
     <section className="relative z-[2] py-24">
      <motion.div 
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* --- Partie Gauche : Texte --- */}
        <div className="flex flex-col justify-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1f2937] leading-tight mb-6"
            variants={textVariants}
          >
            {content.title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed mb-8"
            variants={textVariants}
          >
            {content.text}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={textVariants}>
            <Link href={content.button1_link} className="bg-transparent z-[20] border-2 border-[#af4d30] text-[#af4d30] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#af4d30] hover:text-white transition-all duration-300 text-center">
                {content.button1_text}
            </Link>
            <Link href={content.button2_link} className="bg-[#af4d30] z-[20] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#b56b50] transition-colors duration-300 transform hover:scale-105 text-center">
                {content.button2_text}
            </Link>
          </motion.div>
        </div>

        {/* --- Partie Droite : Images Animées --- */}
        <motion.div 
          className="relative h-96 lg:h-[500px] z-[20]"
          variants={imageContainerVariants}
        >
          <motion.div
            className="absolute w-full h-full"
            variants={imageGroupHoverVariants}
            initial="rest"
            whileHover="hover"
          >
            {/* Photo 1 (Gauche) */}
            <motion.div 
              className="absolute top-0 left-0  w-3/5 h-4/5 shadow-xl"
              variants={imageHoverVariants}
              custom={{ y: 20 }} 
            >
             <Image src="/images/about-portrait.jpg" alt="Portrait de la thérapeute" fill className="object-cover rounded-2xl border-4 border-white"/>
            </motion.div>

            
            {/* Photo 2 (Droite) */}
            <motion.div 
              className="absolute top-[10%] right-0 w-1/2 h-3/5 shadow-xl"
              variants={imageHoverVariants}
              custom={{ x: -20 }} 
            >
               <Image src="/images/about-action.jpg" alt="Séance de thérapie" fill className="object-cover rounded-2xl border-4 border-white"/>
            </motion.div>
            
            {/* Photo 3 (Bas) */}
            <motion.div 
              className="absolute bottom-0 left-[10%] w-4/5 h-2/5 shadow-xl"
              variants={imageHoverVariants}
              custom={{ x: 20 }} 
            >
              <Image src="/images/about-detail.jpg" alt="Détail zen de l'espace" fill className="object-cover rounded-2xl border-4 border-white"/>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;