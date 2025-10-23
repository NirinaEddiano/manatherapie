// src/app/components/TransformationSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const transformations = [
  { from: "Le Doute", to: "La Confiance" },
  { from: "La Stagnation", to: "L'Action" },
  { from: "Le Brouillard", to: "La Clarté" },
  { from: "La Peur", to: "L'Audace" },
  { from: "Le Stress", to: "La Sérénité" },
  { from: "L'Épuisement", to: "L'Énergie" },
  { from: "La Confusion", to: "La Vision" },
  { from: "Les Blocages", to: "La Liberté" },
  { from: "Le Bruit", to: "Le Calme" },
  { from: "La Procrastination", to: "L'Accomplissement" },
];

// --- NOUVEAU: Tableau de positions pour chaque badge ---
const badgePositions = [
  // Positions pour grand écran (md:)
  { top: '5%', left: '15%' },
  { top: '25%', right: '5%' },
  { top: '50%', left: '0%' },
  { top: '50%', right: '15%' },
  { bottom: '25%', left: '25%' },
  { top: '0%', right: '20%' },
  { bottom: '25%', right: '0%' },
  { top: '85%', left: '5%' },
  { top: '30%', left: '20%' },
  { bottom: '15%', right: '20%' },
];

const TransformationSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f2937] mb-4">Le Chemin de la Transformation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Le coaching est un processus qui transforme les obstacles en opportunités.</p>
        </div>

        {/* Augmentation de la hauteur pour accommoder plus de badges */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* --- L'image centrale --- */}
            <motion.div 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <Image 
                    src="/images/transformation-center.jpg" 
                    alt="Image symbolisant la transformation" 
                    fill 
                    className="object-cover"
                />
            </motion.div>

            {/* --- Boucle dynamique pour afficher TOUS les badges --- */}
            {transformations.slice(0, 10).map((item, index) => (
                <motion.div 
                    key={index}
                    className="absolute bg-white p-3 sm:p-4 rounded-full shadow-lg flex items-center gap-2"
                    // On applique la position dynamiquement
                    style={{
                        top: badgePositions[index].top,
                        bottom: badgePositions[index].bottom,
                        left: badgePositions[index].left,
                        right: badgePositions[index].right,
                    }}
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.1 * index }} // Délai en cascade
                >
                    <span className="text-sm sm:text-base font-semibold text-gray-400 line-through">{item.from}</span>
                    <ArrowRight className="text-[#C87A5E] flex-shrink-0" size={18}/>
                    <span className="text-sm sm:text-base font-bold text-[#1f2937]">{item.to}</span>
                </motion.div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default TransformationSection;