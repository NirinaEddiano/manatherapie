'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { courses } from '@/app/academie/academyData';
import { PlayCircle, Download, Search, Video, BookOpen, Clock } from 'lucide-react';

const purchasedCourses = [
    { ...courses[0], status: 'terminé' }, // Formation déjà validée
    { ...courses[3], status: 'terminé' },
    { ...courses[5], status: 'en attente' }, // Nouvelle formation en attente
];
const recommendedCourses = courses.filter(c => !purchasedCourses.find(pc => pc.id === c.id)).slice(0, 4);

// Mini-carte pour les recommandations
const RecommendedCourseCard = ({ course }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
        <div className="relative h-40"><Image src={course.image} alt={course.title} fill className="object-cover"/></div>
        <div className="p-4">
            <h4 className="font-bold text-md mb-2 truncate">{course.title}</h4>
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-[#1f2937]">{course.price}</p>
                <Link href={`/academie/${course.slug}`} className="text-sm font-semibold text-[#af4d30] hover:underline">Voir</Link>
            </div>
        </div>
    </div>
);


export default function FormationsPage() {

     const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    const filteredPurchased = useMemo(() => purchasedCourses.filter(c => 
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterType === 'all' || c.type === filterType)
    ), [searchTerm, filterType]);
    return (
        <div>
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-[#1f2937] mb-8">
                Mes Formations
            </motion.h1>

            {/* --- Section des formations achetées --- */}
            <div className="relative z-[2]  bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold mb-6">Ma Bibliothèque</h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                     <div className="relative flex-grow">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input type="text" placeholder="Rechercher dans mes formations..." className="w-full pl-10 pr-4 py-2 border rounded-lg" onChange={e => setSearchTerm(e.target.value)}/>
                    </div>
                     <div className="flex-shrink-0 flex gap-1 bg-gray-100 p-1 rounded-lg">
                        <button onClick={() => setFilterType('all')} className={`px-3 py-1 rounded-md text-sm font-semibold transition ${filterType === 'all' ? 'bg-white shadow-sm text-[#1f2937]' : 'text-gray-600'}`}>Tous</button>
                        <button onClick={() => setFilterType('video')} className={`px-3 py-1 rounded-md text-sm font-semibold transition ${filterType === 'video' ? 'bg-white shadow-sm text-[#1f2937]' : 'text-gray-600'}`}><Video size={16} className="inline mr-1"/> Vidéos</button>
                        <button onClick={() => setFilterType('ebook')} className={`px-3 py-1 rounded-md text-sm font-semibold transition ${filterType === 'ebook' ? 'bg-white shadow-sm text-[#1f2937]' : 'text-gray-600'}`}><BookOpen size={16} className="inline mr-1"/> Ebooks</button>
                    </div>
                </div>
                
               <div className="space-y-4">
                    {filteredPurchased.length > 0 ? filteredPurchased.map(course => (
                        // --- CORRECTION DE L'AFFICHAGE CONDITIONNEL ---
                        <div key={course.id} className={`p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 transition-colors ${course.status === 'en attente' ? 'bg-amber-50' : 'bg-gray-50'}`}>
                            <div className="relative h-16 w-full sm:w-28 rounded-md overflow-hidden flex-shrink-0">
                                <Image src={course.image} alt={course.title} fill className="object-cover"/>
                            </div>
                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="font-bold">{course.title}</h3>
                                <p className="text-sm text-gray-500">{course.category}</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 flex-shrink-0">
                                {course.status === 'terminé' ? (
                                    <>
                                        {course.type === 'video' && (
                                            <>
                                                {/* Bouton Principal : Regarder */}
                                                <button className="flex items-center gap-2 bg-[#af4d30] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-opacity-90">
                                                    <PlayCircle size={16}/><span>Regarder</span>
                                                </button>
                                                {/* Bouton Secondaire : Télécharger (conditionnel) */}
                                                {course.hasDownloads && (
                                                    <button className="flex items-center gap-2 bg-gray-200 text-[#1f2937] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-300">
                                                        <Download size={16}/>
                                                    </button>
                                                )}
                                            </>
                                        )}
                                        {course.type === 'ebook' && (
                                            <button className="flex items-center gap-2 bg-gray-200 text-[#1f2937] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-300">
                                                <Download size={16}/><span>Télécharger</span>
                                            </button>
                                        )}
                                    </>
                                ) : (
                                    <span className="flex items-center gap-2 text-sm font-semibold text-amber-700">
                                        <Clock size={16}/>
                                        Vérification...
                                    </span>
                                )}
                            </div>

                        </div>
                    )) : (
                        <p className="text-center text-gray-500 py-8">Aucune formation ne correspond à vos filtres.</p>
                    )}
                </div>
            </div>

            {/* --- Section pour acheter d'autres formations --- */}
            <div className="mt-12">
                <h2 className="text-xl font-bold mb-6">Continuer à vous former</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recommendedCourses.map(course => (
                        <RecommendedCourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href="/academie" className="bg-[#1f2937] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#af4d30] transition-colors">
                        Voir tout le catalogue
                    </Link>
                </div>
            </div>
        </div>
    );
}