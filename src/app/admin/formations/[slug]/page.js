'use client';

import { courses } from '@/app/academie/academyData';
import { adminData } from '../../adminData';
import { ArrowLeft, Check, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FormationDetailPage({ params }) {
    const { slug } = params;
    const course = courses.find(c => c.slug === slug);

    // Données factices des acheteurs pour cette formation
    const buyers = [
        { client: adminData.clients[0], status: 'accepté' },
        { client: adminData.clients[1], status: 'en attente' },
    ];

    if (!course) { return <div>Formation non trouvée</div>; }

    return (
        <div>
            <Link href="/admin/formations" className="flex items-center gap-2 text-gray-500 hover:text-[#1f2937] mb-6">
                <ArrowLeft size={18}/> Retour à la liste des formations
            </Link>
            
            <div className="flex items-start gap-8 mb-8">
                <div className="relative w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={course.image} alt={course.title} fill className="object-cover"/>
                </div>
                <div>
                    <p className="font-semibold text-[#af4d30]">{course.category}</p>
                    <h1 className="text-4xl font-bold">{course.title}</h1>
                    <p className="text-lg text-gray-500">{course.price}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- Colonne de gauche : Détails de la formation --- */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Détails de la formation</h2>
                    <div className="space-y-4">
                        <div><strong className="font-semibold">Description :</strong><p className="text-gray-600">{course.description}</p></div>
                        <div><strong className="font-semibold">Ce que l'on apprend :</strong>
                            <ul className="list-disc list-inside text-gray-600">
                                {course.whatYoullLearn.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div><strong className="font-semibold">Modules :</strong>
                            <ul className="list-decimal list-inside text-gray-600">
                                {course.modules.map((mod, i) => <li key={i}>{mod.title} ({mod.duration})</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- Colonne de droite : Liste des acheteurs --- */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Clients Inscrits ({buyers.length})</h2>
                    <div className="space-y-3">
                        {buyers.map(buyer => (
                            <div key={buyer.client.id} className="p-3 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold">{buyer.client.name}</p>
                                        <p className="text-sm text-gray-500">{buyer.client.email}</p>
                                    </div>
                                    {buyer.status === 'en attente' ? (
                                        <div className="flex gap-1">
                                            <button className="p-1.5 bg-red-100 text-red-600 rounded-md" title="Refuser"><X size={14}/></button>
                                            <button className="p-1.5 bg-green-100 text-green-600 rounded-md" title="Accepter"><Check size={14}/></button>
                                        </div>
                                    ) : (
                                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">Accepté</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}