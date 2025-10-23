'use client';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Video } from 'lucide-react';

const steps = [
    { icon: <Search/>, title: "1. Explorez", text: "Parcourez notre catalogue et trouvez la formation qui résonne avec vos besoins actuels." },
    { icon: <ShoppingCart/>, title: "2. Achetez", text: "Ajoutez à votre panier et payez en toute sécurité via notre plateforme de confiance." },
    { icon: <Video/>, title: "3. Apprenez", text: "Accédez à vie à vos vidéos et ebooks depuis votre espace personnel, à votre propre rythme." },
];

const HowItWorksSection = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12">Comment ça marche ?</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {steps.map((step, i) => (
                    <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                        <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#FFF7ED] text-[#C87A5E]">{step.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorksSection;