'use client';
import { PlusCircle, Search, Trash2, Edit, Eye, X } from 'lucide-react';
import { courses } from '@/app/academie/academyData';
import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

const CreateFormationModal = ({ isOpen, setIsOpen }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-3xl transform rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-[#1f2937] flex justify-between items-center">
                            Créer une nouvelle formation
                            <button onClick={() => setIsOpen(false)}><X/></button>
                        </Dialog.Title>
                        <form className="mt-6 space-y-4 max-h-[70vh] overflow-y-auto pr-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="title" placeholder="Titre de la formation" className="w-full p-3 border rounded-lg col-span-2"/>
                                <select name="type" className="w-full p-3 border rounded-lg"><option>Vidéo</option><option>Ebook</option></select>
                                <input type="text" name="category" placeholder="Catégorie (ex: Massage)" className="w-full p-3 border rounded-lg"/>
                                <input type="text" name="price" placeholder="Prix (ex: 49.99€)" className="w-full p-3 border rounded-lg"/>
                                <input type="text" name="slug" placeholder="Slug URL (ex: art-automassage)" className="w-full p-3 border rounded-lg"/>
                            </div>
                            <textarea name="description" placeholder="Description courte (pour la page de détail)" className="w-full p-3 border rounded-lg" rows="3"></textarea>
                            <div>
                                <label className="text-sm font-semibold">Image de couverture</label>
                                <input type="file" className="w-full text-sm mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#af4d30]/10 file:text-[#af4d30] hover:file:bg-[#af4d30]/20 cursor-pointer"/>
                            </div>
                            <textarea name="whatYoullLearn" placeholder="Ce que vous allez apprendre (un par ligne)" className="w-full p-3 border rounded-lg" rows="4"></textarea>
                             <textarea name="modules" placeholder="Modules (ex: Titre 1, 15 min)" className="w-full p-3 border rounded-lg" rows="4"></textarea>
                             <div className="pt-4 flex justify-end gap-4 border-t">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-5 py-2 border rounded-lg font-semibold">Annuler</button>
                                <button type="submit" className="px-5 py-2 bg-[#af4d30] text-white rounded-lg font-semibold">Créer la formation</button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    </Transition>
);


export default function FormationsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    // On simule le nombre d'acheteurs
    const coursesWithBuyers = useMemo(() => {
        return courses.map(c => ({ ...c, buyers: Math.floor(Math.random() * 100) }))
            .filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Gestion des Formations</h1>
                <button className="flex items-center gap-2 bg-[#af4d30] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 cusror-pointer" onClick={() => setIsModalOpen(true)}>
                    <PlusCircle size={20}/>
                    <span>Créer une formation</span>
                </button>
            </div>
            
           <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between mb-4">
                    <div className="relative w-full md:w-1/3">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input type="text" placeholder="Rechercher une formation..." className="w-full pl-10 py-2 border rounded-lg" onChange={e => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className="space-y-3">
                    {coursesWithBuyers.map(course => (
                        <motion.div 
                            key={course.id} 
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-6 items-center p-3 bg-gray-50 rounded-lg"
                        >
                            <div className="col-span-3 flex items-center gap-4">
                                <div className="relative w-20 h-14 rounded-md overflow-hidden"><Image src={course.image} alt={course.title} fill className="object-cover"/></div>
                                <div>
                                    <p className="font-bold">{course.title}</p>
                                    <p className="text-sm text-gray-500">{course.category}</p>
                                </div>
                            </div>
                            <p className="text-gray-600">{course.price}</p>
                            <p className="text-gray-600"><strong>{course.buyers}</strong> clients</p>
                            <div className="flex justify-end gap-2">
                                <Link href={`/admin/formations/${course.slug}`} className="p-2 text-gray-500 hover:bg-gray-200 rounded-md" title="Voir les détails et les acheteurs">
                                    <Eye size={18}/>
                                </Link>
                                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md" title="Éditer" onClick={() => setIsModalOpen(true)}>
                                    <Edit size={18}/>
                                </button>
                                <button 
                                    className={`p-2 rounded-md ${course.buyers > 0 ? 'text-gray-300 cursor-not-allowed' : 'text-red-500 hover:bg-red-100'}`} 
                                    disabled={course.buyers > 0}
                                    title={course.buyers > 0 ? "Impossible de supprimer" : "Supprimer"}
                                >
                                    <Trash2 size={18}/>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <CreateFormationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
        </div>
    );
}