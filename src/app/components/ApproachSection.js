// src/app/components/ApproachSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Brain, Leaf } from 'lucide-react';

const principles = [
  { icon: <Heart/>, title: "Une Écoute Holistique", text: "Nous ne traitons pas un symptôme, mais une personne dans sa globalité. Chaque soin commence par une écoute attentive." },
  { icon: <Brain/>, title: "L'Expertise Technique", text: "Nos praticiens maîtrisent des techniques précises et éprouvées pour garantir des résultats visibles et durables." },
  { icon: <Leaf/>, title: "Des Produits Naturels", text: "Nous utilisons exclusivement des huiles végétales biologiques et des produits purs pour respecter votre corps et la nature." },
];

const ApproachSection = () => {
  return (
    <section className="py-24 bg-[#FFF7ED]">
      <div className="container mx-auto mt-[-40px] mb-[40px] px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] text-center mb-4">Notre Approche du Soin</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Chaque corps est unique. Notre philosophie est de créer pour vous une expérience sur-mesure qui allie expertise technique, intuition et bienveillance.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((p, i) => (
            <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#C87A5E]/10 text-[#C87A5E]">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;