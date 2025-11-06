'use client';

import { motion } from 'framer-motion';
import { Calendar, Video, Clock } from 'lucide-react';
import Link from 'next/link';

// Données factices
const nextAppointment = {
    type: "Coaching en Ligne",
    date: "Lundi 10 Nov.",
    time: "14h00",
    link: "Lien disponible le jour J"
};
const lastPurchase = {
    title: "L'Art de l'Automassage",
    image: "/images/video-thumb-automassage.jpg"
};

export default function DashboardPage() {
    return (
        <div>
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-[#1f2937] mb-8">
                Bonjour, Marie!
            </motion.h1>

            <div className="relative z-[2]  grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- Carte Prochain Rendez-vous --- */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="font-bold text-xl mb-4">Votre prochain rendez-vous</h2>
                    <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-6">
                        <div className="bg-[#af4d30] text-white p-4 rounded-lg">
                            <Calendar size={28}/>
                        </div>
                        <div>
                            <p className="font-bold text-lg">{nextAppointment.type}</p>
                            <p className="text-gray-600 flex items-center gap-2"><Clock size={16}/> {nextAppointment.date} à {nextAppointment.time}</p>
                            <p className="text-sm text-blue-500 mt-1">{nextAppointment.link}</p>
                        </div>
                    </div>
                     <Link href="/compte/rendez-vous" className="mt-4 inline-block font-semibold text-[#af4d30] hover:underline">
                        Gérer tous mes rendez-vous →
                    </Link>
                </motion.div>

                {/* --- Carte Statistique Formations --- */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="font-bold text-xl mb-4">Vos Formations</h2>
                     <div className="text-center">
                        <p className="text-6xl font-extrabold text-[#af4d30]">5</p>
                        <p className="text-gray-600">Formations acquises</p>
                    </div>
                    <Link href="/compte/formations" className="mt-4 block text-center font-semibold text-[#af4d30] hover:underline">
                        Accéder à ma bibliothèque →
                    </Link>
                </motion.div>
            </div>

             <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="font-bold text-xl mb-4">Ma dernière activité</h2>
                <ul className="divide-y divide-gray-100">
                    <li className="py-3 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Achat de formation</p>
                            <p className="text-sm text-gray-500">"L'Art de l'Automassage"</p>
                        </div>
                        <span className="text-sm text-gray-500">Il y a 2 jours</span>
                    </li>
                    <li className="py-3 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">RDV confirmé</p>
                            <p className="text-sm text-gray-500">"MANAXDRAIN"</p>
                        </div>
                        <span className="text-sm text-gray-500">Il y a 5 jours</span>
                    </li>
                </ul>
                 <Link href="/compte/notifications" className="mt-4 inline-block font-semibold text-sm text-[#af4d30] hover:underline">
                    Voir toutes les notifications →
                </Link>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white mt-8 p-6 rounded-2xl shadow-sm">
    <h2 className="font-bold text-xl mb-4">Mes Factures</h2>
    <div className="space-y-2 text-sm">
        <a href="#" className="flex justify-between items-center text-gray-600 hover:text-[#af4d30]"><span>Facture #1024 - Achat</span> <span>Télécharger</span></a>
        <a href="#" className="flex justify-between items-center text-gray-600 hover:text-[#af4d30]"><span>Facture #1023 - Acompte</span> <span>Télécharger</span></a>
    </div>
</motion.div>

            {/* --- Suggestions et Accès Rapides --- */}
            <div className="mt-8">
                 <h2 className="font-bold text-xl mb-4">Accès rapide</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <Link href="/compte/rendez-vous" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                        <h3 className="font-bold text-lg">Prendre un nouveau rendez-vous</h3>
                        <p className="text-gray-500 text-sm">Consultez les disponibilités et réservez votre prochain soin ou coaching.</p>
                     </Link>
                     <Link href="/academie" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                         <h3 className="font-bold text-lg">Découvrir de nouvelles formations</h3>
                         <p className="text-gray-500 text-sm">Explorez le catalogue complet de l'académie pour continuer à vous former.</p>
                     </Link>
                 </div>
            </div>
        </div>
    );
}