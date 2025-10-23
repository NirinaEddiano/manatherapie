// src/app/academie/[slug]/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { courses, fakeReviews } from '../academyData';
import { Star, Clock, BarChart, Check, Video, BookOpen, ShoppingCart } from 'lucide-react';
import PageHero from '@/app/components/PageHero';

const SimilarCourseCard = ({ course }) => (
    <Link href={`/academie/${course.slug}`} key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
        <div className="relative h-40 overflow-hidden">
            <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-md mb-1 truncate">{course.title}</h3>
            <p className="text-lg font-bold text-[#1f2937]">{course.price}</p>
        </div>
    </Link>
);


export default function CourseDetailPage({ params }) {
    const { slug } = params;
    const course = courses.find(c => c.slug === slug);

    const similarCourses = courses.filter(
        c => c.category === course.category && c.id !== course.id
    ).slice(0, 4);

    if (!course) { return <div>Formation non trouvée</div>; }

    return (
        <main>
            {/* --- Section Hero du Cours (inspirée d'Udemy) --- */}
            <section className="bg-[#1f2937] text-white py-16">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                     <Image src={course.image} alt={course.title} width={500} height={300} className="w-full rounded-lg object-cover"/>
                    <div className="lg:col-span-2">
                        <p className="font-semibold text-[#C87A5E]">{course.category}</p>
                        <h1 className="text-4xl md:text-5xl font-bold my-4">{course.title}</h1>
                        <p className="text-lg text-gray-300 max-w-3xl">{course.description}</p>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-amber-400">{course.rating}</span>
                                <Star size={16} className="text-amber-400 fill-current"/>
                            </div>
                            <span>({course.reviews} avis)</span>
                            <span className="text-gray-400">Créé par {course.author}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Colonne principale & Colonne d'achat "sticky" --- */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* --- Colonne de Gauche : Contenu du cours --- */}
                    <div className="lg:col-span-2">
                        
                        {/* Ce que vous allez apprendre */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-gray-200 rounded-lg p-6 mb-8">
                            <h2 className="text-2xl font-bold mb-4">Ce que vous allez apprendre</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                {course.whatYoullLearn.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3"><Check size={20} className="text-green-500 mt-1 flex-shrink-0"/><span>{item}</span></li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Modules du cours (Accordéon) */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Contenu de la formation</h2>
                            <div className="border border-gray-200 rounded-lg">
                                {course.modules.map((mod, i) => (
                                    <div key={i} className="border-b last:border-b-0 border-gray-200">
                                        <div className="p-4 bg-gray-50 flex justify-between items-center">
                                            <span className="font-semibold">{i+1}. {mod.title}</span>
                                            <span className="text-sm text-gray-500">{mod.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Avis des clients */}
                        <div>
                             <h2 className="text-2xl font-bold mb-4">Avis de nos élèves</h2>
                             <div className="space-y-6">
                                {fakeReviews.map((review, i) => (
                                    <div key={i} className="border-b border-gray-200 pb-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            {[...Array(review.rating)].map((_, r) => <Star key={r} size={16} className="text-amber-400 fill-current"/>)}
                                        </div>
                                        <p className="italic text-gray-700">"{review.comment}"</p>
                                        <p className="text-right font-semibold mt-2">- {review.name}</p>
                                    </div>
                                ))}
                             </div>
                        </div>

                    </div>
                    
                    {/* --- Colonne de Droite : Carte d'achat "sticky" --- */}
                    <div className="relative">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="lg:sticky top-28">
                             <div className="rounded-lg shadow-2xl overflow-hidden border border-gray-200">
                                 <Image src={course.image} alt={course.title} width={500} height={300} className="w-full object-cover"/>
                                <div className="p-6 bg-white">
                                    <p className="text-4xl font-bold mb-4">{course.price}</p>
                                    <div className="space-y-3">
                                        <button className="w-full text-center block bg-[#C87A5E] text-white py-3 rounded-lg font-bold hover:bg-[#b56b50] transition-colors">Acheter maintenant</button>
                                        <button className="w-full text-center block border-2 border-[#1f2937] text-[#1f2937] py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Ajouter au panier</button>
                                    </div>
                                    <p className="text-xs text-center text-gray-500 mt-2">Garantie satisfait ou remboursé 30 jours</p>
                                </div>
                                 <div className="p-6 bg-gray-50 border-t border-gray-200">
                                    <h3 className="font-bold mb-3 text-[#1f2937]">Cette formation inclut :</h3>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center gap-2"><Video size={16}/>{course.duration} de contenu</li>
                                        <li className="flex items-center gap-2"><BookOpen size={16}/>Accès illimité à vie</li>
                                        <li className="flex items-center gap-2"><BarChart size={16}/>Niveau {course.level}</li>
                                    </ul>
                                </div>
                             </div>
                        </motion.div>
                    </div>

                </div>
            </div>
            
            {/* Section Autres Formations */}
            <section className="py-16 bg-gray-50 border-t border-gray-200">
                 <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Formations similaires qui pourraient vous plaire</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {similarCourses.map(c => <SimilarCourseCard course={c} />)}
                     </div>
                 </div>
            </section>

        </main>
    );
}