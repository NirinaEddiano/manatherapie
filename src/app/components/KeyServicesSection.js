
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: "Massages & Soins Profonds",
    description: "Libérez les tensions accumulées avec nos rituels sur-mesure. Chaque soin est une expérience unique conçue pour restaurer l'harmonie entre votre corps et votre esprit.",
    link: "/soins/massages",
    image: "/images/prestation-massage.jpg",
    bgColor: "bg-[#FFF7ED]" 
  },
  {
    title: "Drainage Lymphatique",
    description: "Relancez votre système immunitaire, affinez votre silhouette et retrouvez une sensation de légèreté inégalée grâce à une méthode douce et puissante.",
    link: "/soins/drainage",
    image: "/images/prestation-drainage.jpg",
    bgColor: "bg-[#FDE2E4]" 
  },
  {
    title: "Maderothérapie",
    description: "Cette technique ancestrale utilise des outils en bois pour sculpter le corps, réduire visiblement la cellulite et raffermir la peau en profondeur.",
    link: "/soins/maderotherapie",
    image: "/images/prestation-madero.jpg",
    bgColor: "bg-[#E0E7FF]"
  },
  {
    title: "Formations Vidéo & Ebooks",
    description: "Apprenez les gestes qui changent tout depuis chez vous. Nos formations vous rendent autonome dans votre pratique quotidienne du bien-être.",
    link: "/academie",
    image: "/images/prestation-formations.jpg",
    bgColor: "bg-[#D1FAE5]" 
  },
  {
    title: "Coaching (En ligne & Présentiel)",
    description: "Un accompagnement personnalisé pour atteindre vos objectifs de vie. Révélez votre plein potentiel et devenez l'architecte de votre propre succès.",
    link: "/coaching",
    image: "/images/prestation-coaching.jpg",
    bgColor: "bg-[#FEF3C7]" 
  }
];

const AccordionItem = ({ service, isOpen, onClick }) => {
  return (
    <div className={`border-b border-gray-200 overflow-hidden transition-colors duration-500 ${isOpen ? service.bgColor : 'bg-white'}`}>
      <button onClick={onClick} className="w-full text-left p-8 flex justify-between items-center"> 
        <span className="text-2xl md:text-3xl font-bold text-[#1f2937]">{service.title}</span> 
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronRight size={32} /> 
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-8 pt-0 grid grid-cols-1 md:grid-cols-3 gap-8"> 
              <div className="relative h-48 md:h-full rounded-xl overflow-hidden md:col-span-1"> 
                <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
              </div>
              <div className="flex flex-col justify-center md:col-span-2">
                <p className="text-xl text-gray-700 mb-6">{service.description}</p> 
                
                <Link 
                  href={service.link} 
                  className="group relative inline-flex self-start items-center justify-center bg-[#C87A5E] text-white px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300"
                >
                  <motion.span className="transition-transform duration-300 group-hover:-translate-x-3">
                    En savoir plus
                  </motion.span>
                  <motion.div 
                    className="absolute right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-4"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const KeyServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 mt-[-80px] bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">Nos Soins Phares</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Découvrez le soin ou l'accompagnement qui est fait pour vous.</p>
        </motion.div>

        <motion.div 
          className="rounded-2xl border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          {servicesData.map((service, index) => (
            <AccordionItem 
              key={index} 
              service={service} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? null : index)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyServicesSection;