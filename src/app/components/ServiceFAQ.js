// src/app/components/ServiceFAQ.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Données par défaut. Vous pourrez les surcharger avec des props si besoin.
const defaultFaqData = [
    { 
      q: "Y a-t-il des contre-indications à connaître ?", 
      a: "Oui, certaines conditions comme la fièvre, les inflammations aiguës, les phlébites ou certains problèmes cardiaques peuvent être des contre-indications. Chaque séance débute par un bilan de santé pour garantir votre sécurité." 
    },
    { 
      q: "Comment dois-je me préparer avant une séance ?", 
      a: "Il est simplement recommandé de ne pas manger un repas trop lourd juste avant et de venir avec l'esprit ouvert. Nous nous occupons de tout pour que vous vous sentiez à l'aise dès votre arrivée." 
    },
    { 
      q: "Puis-je offrir un soin en cadeau ?", 
      a: "Bien sûr ! Nous proposons des cartes cadeaux personnalisables. C'est une excellente idée pour faire découvrir les bienfaits de nos soins à vos proches. Contactez-nous pour en savoir plus."
    },
    { 
      q: "Quelle est la fréquence idéale entre deux séances ?", 
      a: "Cela dépend de vos objectifs. Pour un problème chronique, une séance par semaine peut être conseillée au début. Pour de l'entretien, une séance par mois est un excellent rythme pour maintenir les bienfaits."
    },
];

const FAQItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 relative z-[2]">
        <button onClick={onClick} className="w-full text-left py-6 flex justify-between items-center gap-4">
            <span className="text-lg font-semibold text-[#1f2937]">{item.q}</span>
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronRight className="flex-shrink-0"/>
            </motion.div>
        </button>
        <AnimatePresence>
        {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <p className="pb-6 text-gray-600 leading-relaxed">{item.a}</p>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
);

const ServiceFAQ = ({ faqData = defaultFaqData }) => {
    const [openIndex, setOpenIndex] = useState(0); // Le premier est ouvert

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-bold text-[#1f2937] text-center mb-12">Vos Questions, Nos Réponses</h2>
                <div>
                    {faqData.map((item, index) => (
                        <FAQItem 
                          key={index} 
                          item={item} 
                          isOpen={openIndex === index} 
                          onClick={() => setOpenIndex(openIndex === index ? null : index)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;