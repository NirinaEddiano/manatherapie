// src/app/components/CoachingFAQSection.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const faqData = [
    { q: "Le coaching, est-ce une thérapie ?", a: "Non. La thérapie explore souvent le 'pourquoi' en se basant sur le passé. Le coaching se concentre sur le 'comment' en se tournant vers l'avenir pour atteindre un objectif précis." },
    { q: "Quelle est la durée d'un accompagnement complet ?", a: "Un accompagnement efficace dure généralement entre 3 et 6 mois, avec des séances toutes les 2 à 3 semaines. C'est un format court et intense pour un maximum d'impact." },
    { q: "Je n'ai pas d'objectif clair, puis-je quand même être coaché(e) ?", a: "Absolument ! La première ou les deux premières séances sont souvent dédiées à clarifier votre objectif. C'est une partie intégrante du processus." },
    { q: "La confidentialité est-elle garantie ?", a: "Oui, à 100%. Tout ce qui est dit en séance est strictement confidentiel et soumis au secret professionnel, que ce soit en ligne ou en présentiel." },
];

const FAQItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button onClick={onClick} className="w-full text-left py-5 flex justify-between items-center">
            <span className="text-lg font-semibold text-[#1f2937]">{item.q}</span>
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}><ChevronRight/></motion.div>
        </button>
        <AnimatePresence>
        {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <p className="pb-5 text-gray-600 leading-relaxed">{item.a}</p>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
);

const CoachingFAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0); // Le premier est ouvert

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-bold text-[#1f2937] text-center mb-12">Les Réponses à Vos Questions</h2>
                <div>
                    {faqData.map((item, index) => (
                        <FAQItem key={index} item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoachingFAQSection;