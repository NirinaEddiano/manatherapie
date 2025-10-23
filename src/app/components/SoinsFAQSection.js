// src/app/components/SoinsFAQSection.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const faqData = [
    { q: "Quelle est la durée d'une séance type ?", a: "La plupart de nos soins durent entre 50 et 60 minutes, mais cela peut être ajusté. Le plus important est de prendre le temps nécessaire pour un soin de qualité." },
    { q: "Dois-je me déshabiller complètement ?", a: "Votre confort est notre priorité. Vous ne retirez que les vêtements nécessaires au soin de la zone concernée, et vous êtes toujours couvert(e) par un drap ou une serviette." },
    { q: "Y a-t-il des contre-indications ?", a: "Oui, certaines conditions (fièvre, phlébite, problèmes cardiaques...) peuvent être des contre-indications. C'est pourquoi chaque séance commence par un bilan de santé." },
    { q: "Combien de séances faut-il pour voir des résultats ?", a: "Vous ressentirez des bienfaits dès la première séance. Pour des résultats durables sur des problématiques chroniques, une cure de plusieurs séances est souvent recommandée." },
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
                <p className="pb-5 text-gray-600">{item.a}</p>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
);

const SoinsFAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 mt-[-100px] bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-bold text-[#1f2937] text-center mb-12">Vos Questions Fréquentes</h2>
                <div>
                    {faqData.map((item, index) => (
                        <FAQItem key={index} item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoinsFAQSection;