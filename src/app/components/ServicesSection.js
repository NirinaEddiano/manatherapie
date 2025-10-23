
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Soins & Massages",
    description: "Plongez dans un état de relaxation profonde où chaque geste a un sens. Nos soins sont des rituels entièrement personnalisés, conçus pour dénouer les tensions physiques et émotionnelles. En combinant des techniques ancestrales et une approche intuitive, nous cherchons à rétablir une circulation énergétique fluide dans tout votre corps. C'est une invitation à vous reconnecter à vos sensations et à retrouver un sentiment durable de paix et d'harmonie intérieure.",
    link: "/soins",
    imageSrc: "/images/service-soins.jpg",
    layout: "left"
  },
  {
    title: "Académie en Ligne",
    description: "Devenez l'acteur principal de votre bien-être. Notre académie vous donne un accès exclusif à des formations vidéo, des guides pratiques et des ebooks conçus par des experts. Apprenez à votre propre rythme, où que vous soyez, et intégrez des outils puissants dans votre quotidien. Nous avons conçu chaque module pour être à la fois profond et accessible, vous donnant les clés pour transformer votre vie, pas à pas et en toute autonomie.",
    link: "/academie",
    imageSrc: "/images/service-academie.jpg",
    layout: "right"
  },
  {
    title: "Coaching & Ateliers",
    description: "Et si vous pouviez atteindre vos objectifs les plus ambitieux ? Nos programmes de coaching, en individuel ou en groupe, créent un espace de confiance et de bienveillance pour votre transformation. Nous vous aidons à clarifier votre vision, à surmonter les blocages qui vous freinent et à définir un plan d'action concret. Ensemble, nous explorons vos potentiels pour vous permettre de franchir un cap décisif dans votre vie personnelle et professionnelle.",
    link: "/coaching",
    imageSrc: "/images/service-coaching.jpg",
    layout: "left"
  }
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, duration: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-[#FFF7ED]"> 
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">Trois univers, une destination : Vous.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Chaque service est une porte d'entrée vers une meilleure version de vous-même.</p>
        </motion.div>

        <motion.div 
          className="space-y-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`group relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${service.layout === 'right' ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              {/* --- Image --- */}
              <div className="w-full md:w-1/2 h-80 md:h-[400px] relative overflow-hidden rounded-2xl">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="transition-transform duration-700 ease-in-out group-hover:scale-110 object-cover"
                />
                <div className="absolute inset-0 bg-[#C87A5E]/20 group-hover:bg-transparent transition-all duration-700"></div>
              </div>

              {/* --- Texte --- */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center text-lg font-semibold text-[#C87A5E] group-hover:text-[#b56b50]">
                  Explorer cet univers
                  <motion.span 
                    className="ml-2 transition-transform duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
