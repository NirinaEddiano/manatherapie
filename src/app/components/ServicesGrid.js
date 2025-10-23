// src/app/components/ServicesGrid.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const servicesList = [
    {
        title: "Massages Thérapeutiques",
        category: "Détente & Harmonie",
        description: "Un voyage sensoriel pour dénouer les tensions musculaires et apaiser l'esprit en profondeur.",
        link: "/soins/massages",
        bookingLink: "/contact", // Lien de réservation générique pour l'instant
        imageSrc: "/images/soins-massage.jpg",
    },
    {
        title: "Drainage Lymphatique",
        category: "Détox & Légèreté",
        description: "Relancez votre énergie vitale, affinez votre silhouette et libérez votre corps des toxines.",
        link: "/soins/drainage",
        bookingLink: "/contact",
        imageSrc: "/images/soins-drainage.jpg",
    },
    {
        title: "Maderothérapie",
        category: "Sculpture & Fermeté",
        description: "Sculptez et tonifiez votre corps avec la puissance du bois pour une peau visiblement plus lisse.",
        link: "/soins/maderotherapie",
        bookingLink: "/contact",
        imageSrc: "/images/soins-madero.jpg",
    },
    {
        title: "Soins Spécialisés",
        category: "Approche Ciblée",
        description: "Une réponse thérapeutique précise pour des besoins spécifiques et un accompagnement sur-mesure.",
        link: "/soins/specialises",
        bookingLink: "/contact",
        imageSrc: "/images/soins-specialise.jpg",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" }}
};

const ServicesGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">Découvrez nos Rituels de Soin</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Chaque prestation est une expérience unique, pensée pour votre bien-être absolu.</p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {servicesList.map((service) => (
                        <motion.div key={service.title} variants={itemVariants}>
                            <div className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-96">
                                
                                <div className="absolute inset-0 h-3/5 group-hover:h-full transition-all duration-700 ease-in-out">
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="scale-105 group-hover:scale-100 transition-transform duration-700"
                                    />
                                    {/* --- DÉGRADÉ CRÈME POUR LA LISIBILITÉ --- */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#FFF7ED]/90 via-[#FFF7ED]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-[#FFF7ED] group-hover:bg-transparent transition-colors duration-500">
                                    <div className="transition-transform duration-700 ease-in-out group-hover:-translate-y-8">
                                        <p className="font-semibold text-[#C87A5E] mb-1">{service.category}</p>
                                        <h3 className="text-3xl font-bold text-[#1f2937]">{service.title}</h3>
                                        
                                        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                                            <p className="mt-2 text-[#1f2937]/80">
                                                {service.description}
                                            </p>
                                            <div className="mt-6 flex gap-4">
                                                <Link href={service.bookingLink} className="bg-[#C87A5E] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#1f2937] transition-all duration-300 transform hover:scale-105">
                                                    Réserver
                                                </Link>
                                                <Link href={service.link} className="border border-[#1f2937]/50 text-[#1f2937] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#1f2937] hover:text-white transition-all duration-300">
                                                    En savoir plus
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;