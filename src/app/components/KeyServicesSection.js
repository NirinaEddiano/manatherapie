
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

const servicesData = [
     {
        title: "MANAXFACE",
        description: "Un drainage lymphatique exclusif du visage pour réduire les poches, sculpter l'ovale et révéler un éclat instantané.",
        link: "/soins/manaxface",
        image: "/images/hero-manaxface.jpg",
        bgColor: "bg-[#FADDAA]/80" 
    },
    {
        title: "MANAXDRAIN",
        description: "La méthode de drainage corporel pour détoxifier l'organisme, lutter contre la rétention d'eau et affiner la silhouette.",
        link: "/soins/manaxdrain",
        image: "/images/hero-manaxdrain.jpg",
        bgColor: "bg-[#FADDAA]/80" 
    },
    {
        title: "MANAXSCULPT",
        description: "Un remodelage manuel intense pour 'casser' la cellulite adipeuse, tonifier la peau et redessiner les formes.",
        link: "/soins/manaxsculpt",
        image: "/images/hero-manaxsculpt.jpg",
        bgColor: "bg-[#FADDAA]/80" 
    },
    {
        title: "MADÉROXDRAIN",
        description: "L'alliance de la maderothérapie et du drainage pour une double action anti-cellulite et une perte de centimètres visible.",
        link: "/soins/maderoxdrain",
        image: "/images/hero-maderoxdrain.jpg",
        bgColor: "bg-[#FADDAA]/80"
    },
    {
        title: "MADÉROXICE",
        description: "Le choc thermique du froid combiné au bois pour un effet tenseur et raffermissant immédiat sur la peau.",
        link: "/soins/maderoxice",
        image: "/images/hero-maderoxice.jpg",
        bgColor: "bg-[#FADDAA]/80"
    },
    {
        title: "Formations Vidéo & Ebooks",
        description: "Apprenez les gestes qui changent tout depuis chez vous. Nos formations vous rendent autonome dans votre pratique du bien-être.",
        link: "/academie",
        image: "/images/prestation-formations.jpg",
        bgColor: "bg-[#FADDAA]/80"
    },
    {
        title: "Coaching (En ligne & Présentiel)",
        description: "Un accompagnement personnalisé pour atteindre vos objectifs de vie. Révélez votre plein potentiel.",
        link: "/coaching",
        image: "/images/prestation-coaching.jpg",
        bgColor: "bg-[#FADDAA]/80"
    }
];

const AccordionItem = ({ service, isOpen, onClick }) => {
    return (
        <div className={`border-b border-gray-200 relative z-[2]  overflow-hidden transition-colors duration-500 ${isOpen ? service.bgColor : 'bg-white'}`}>
            <button onClick={onClick} className="w-full text-left p-8 flex justify-between items-center"> 
                <span className="text-2xl md:text-3xl font-bold text-[#1f2937]">{service.title}</span> 
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }}><ChevronRight size={32} /></motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                    <div className="p-8 pt-0 h-68  grid grid-cols-1 md:grid-cols-3 gap-8"> 
                        <div className=" relative  h-68 md:h-full rounded-xl overflow-hidden md:col-span-1"> 
                            <Image src={service.image} alt={service.title} fill className="object-cover"/>
                        </div>
                        <div className="flex flex-col justify-center md:col-span-2">
                            <p className="text-xl text-gray-700 mb-6">{service.description}</p> 
                            <Link href={service.link} className="group  relative inline-flex self-start items-center justify-center bg-[#af4d30] text-white px-8 py-3 rounded-full font-semibold overflow-hidden">
                                <span className="transition-transform duration-300 group-hover:-translate-x-3">En savoir plus</span>
                                <div className="absolute right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-4"><ArrowRight size={20} /></div>
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
          className=" rounded-2xl border border-gray-200 shadow-sm"
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
