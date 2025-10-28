// src/app/components/SignatureSoins.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const signatureSoins = [
  {
    title: "MANAXFACE",
    subtitle: "Éclat & Lifting Naturel",
    text: "Le soin signature pour un visage visiblement dégonflé, lifté et lumineux. L'effet 'avant/après' est immédiat.",
    image: "/images/hero-manaxface.jpg",
    link: "/soins/manaxface"
  },
  {
    title: "MADÉROXDRAIN",
    subtitle: "Détox & Sculpture",
    text: "L'alliance ultime de la maderothérapie et du drainage pour attaquer la cellulite et remodeler le corps en profondeur.",
    image: "/images/hero-maderoxdrain.jpg",
    link: "/soins/maderoxdrain"
  },
];

const SoinCard = ({ soin }) => {
    return (
        <Link href={soin.link} className="group z-[20] relative block h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image src={soin.image} alt={soin.title} fill className="object-cover  transition-transform duration-500 ease-in-out group-hover:scale-105"/>
            
            {/* Filtre de couleur qui se retire au survol */}
            <div className="absolute  inset-0 bg-[#af4d30]/30 group-hover:bg-black/20 transition-all duration-500"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <p className="font-semibold text-white/80">{soin.subtitle}</p>
                <h3 className="text-3xl font-bold my-2">{soin.title}</h3>
                <p className="text-gray-200 mb-4 max-w-sm">{soin.text}</p>
                
                {/* Le lien apparaît au survol */}
                <motion.div 
                    className="flex items-center gap-2 font-bold text-white mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span>Découvrir ce soin</span>
                    <ArrowRight size={20}/>
                </motion.div>
            </div>
        </Link>
    );
};

const SignatureSoins = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold text-center text-[#1f2937] mb-4">Une Approche Sur-Mesure</h2>
                <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Nous avons développé des protocoles d'exception pour les besoins que nous rencontrons le plus souvent.</p>
            </motion.div>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {signatureSoins.map((soin, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                         <SoinCard soin={soin} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default SignatureSoins;