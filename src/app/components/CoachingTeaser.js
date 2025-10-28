// src/app/components/CoachingTeaser.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const CoachingTeaser = () => (
    <section className="relative py-32 z-[20] bg-[#1f2937] text-white text-center overflow-hidden">
        <Image src="/images/hero-coaching.jpg" alt="Paysage inspirant" fill className="object-cover opacity-20 scale-110"/>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative z-10 container mx-auto px-6">
            <p className="font-semibold text-[#C87A5E] uppercase tracking-wider">Accompagnement Personnalisé</p>
            <h2 className="text-4xl md:text-6xl font-bold my-4">Et si votre plus grand projet, c'était vous ?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">Le coaching est un espace pour clarifier votre vision, dépasser vos blocages et construire la vie qui vous ressemble vraiment.</p>
            <div className="flex justify-center gap-4">
                 <Link href="/coaching" className="bg-white text-[#1f2937] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">Découvrir le Coaching</Link>
                 <Link href="/contact" className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1f2937] transition-colors">Réserver un appel</Link>
            </div>
        </motion.div>
    </section>
);

export default CoachingTeaser;