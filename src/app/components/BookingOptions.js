// src/app/components/BookingOptions.js
// Ce composant remplace CoachingTeaser pour être plus général
'use client';
import Link from 'next/link';

const BookingOptions = () => (
    <section className="py-24 bg-[#FFF7ED]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#1f2937] mb-12">Flexibilité & Proximité</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Soins & Coaching en Présentiel</h3>
                    <p className="text-gray-600 mb-6">Retrouvez-moi dans un cocon de bien-être pour une expérience immersive et un contact direct.</p>
                    <Link href="/contact" className="font-bold text-[#C87A5E]">Voir l'adresse & réserver</Link>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Coaching en Ligne</h3>
                    <p className="text-gray-600 mb-6">Où que vous soyez, bénéficiez d'un accompagnement sur-mesure grâce à la visioconférence.</p>
                    <Link href="/coaching" className="font-bold text-[#C87A5E]">Découvrir le coaching en ligne</Link>
                </div>
            </div>
        </div>
    </section>
);
export default BookingOptions;