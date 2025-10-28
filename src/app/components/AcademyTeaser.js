'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { courses } from '../academie/academyData'; // On réutilise nos données
import { Star } from 'lucide-react';

const bestSellers = courses.slice(0, 5); // On prend les 5 premiers comme "best-sellers"

const AcademyTeaser = () => (
    <section className="py-24 bg-[#FADDAA]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#1f2937] mb-4">Devenez votre propre expert(e)</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Nos formations les plus populaires, conçues pour vous donner les clés de votre bien-être.</p>
        </div>
        <div className="relative overflow-hidden z-[20]">
            {/* On utilise la même logique "marquee" que pour les témoignages */}
            <div className="marquee-container-coaching z-[20]">
                <div className="marquee-track-coaching " style={{ animationDuration: '60s' }}>
                    {[...bestSellers, ...bestSellers].map((course, i) => (
                        <Link href={`/academie/${course.slug}`} key={i} className="flex-shrink-0 w-80 z-[20] mx-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 group">
                            <div className="relative h-48"><Image src={course.image} alt={course.title} fill className="object-cover rounded-t-2xl"/></div>
                            <div className="p-5 text-left">
                                <p className="text-sm text-[#af4d30] font-semibold">{course.category}</p>
                                <h3 className="font-bold text-lg my-1 truncate">{course.title}</h3>
                                <div className="flex items-center gap-1 text-sm"><Star size={16} className="text-amber-400 fill-current"/>{course.rating} ({course.reviews} avis)</div>
                                <p className="text-2xl font-bold text-[#1f2937] mt-3">{course.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="text-center mt-12 mb-4">
                 <Link href="/academie" className="bg-[#af4d30] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b56b50] transition-colors">
                    Explorer toutes les formations
                </Link>
            </div>
        </div>
    </section>
);

export default AcademyTeaser;