'use client';

import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { blogPostsList } from '@/app/blog/blogData';
import { Dialog, Transition } from '@headlessui/react';

import TiptapEditor from '@/app/components/TiptapEditor';

const BlogEditorModal = ({ isOpen, setIsOpen }) => {
    const [content, setContent] = useState('<p>Commencez à écrire votre article ici...</p>');
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-4xl transform rounded-2xl bg-white p-8 text-left align-middle shadow-xl">
                            <Dialog.Title as="h3" className="text-2xl font-bold">Créer / Éditer un Article</Dialog.Title>
                            <form className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Titre */}
                                    <div>
                                        <label className="text-sm font-semibold">Titre de l'article</label>
                                        <input type="text" placeholder="5 Rituels pour..." className="w-full mt-1 p-3 border rounded-lg"/>
                                    </div>
                                    {/* Catégorie */}
                                    <div>
                                        <label className="text-sm font-semibold">Catégorie</label>
                                        <input type="text" placeholder="Bien-être" className="w-full mt-1 p-3 border rounded-lg"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Temps de lecture */}
                                    <div>
                                         <label className="text-sm font-semibold">Temps de lecture</label>
                                         <input type="text" placeholder="ex: 5 min de lecture" className="w-full mt-1 p-3 border rounded-lg"/>
                                    </div>
                                    {/* Image de couverture */}
                                    <div>
                                        <label className="text-sm font-semibold">Image de couverture</label>
                                        <input type="file" className="w-full text-sm mt-1 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-[#af4d30]/10 file:text-[#af4d30] hover:file:bg-[#af4d30]/20 cursor-pointer"/>
                                    </div>
                                </div>
                                
                                {/* Éditeur de Texte Riche */}
                                <div>
                                    <label className="text-sm font-semibold mb-1 block">Contenu de l'article</label>
                                    <TiptapEditor content={content} onChange={setContent} />
                                </div>

                                <div className="pt-4 flex justify-end gap-4 border-t">
                                    <button type="button" onClick={() => setIsOpen(false)} className="px-5 py-2 border rounded-lg font-semibold">Annuler</button>
                                    <button type="submit" className="px-5 py-2 bg-[#af4d30] text-white rounded-lg font-semibold">Publier l'article</button>
                                </div>
                            </form>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};


export default function BlogAdminPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Gestion du Blog</h1>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#af4d30] text-white px-5 py-2.5 rounded-lg font-semibold">
                    <PlusCircle size={20}/>
                    <span>Nouvel Article</span>
                </button>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="space-y-3">
                    {blogPostsList.map(post => (
                        <div key={post.slug} className="grid grid-cols-4 items-center p-3 bg-gray-50 rounded-lg">
                            <div className="col-span-2"><p className="font-bold">{post.title}</p></div>
                            <p className="text-gray-500">{post.category}</p>
                            <div className="flex justify-end gap-2">
                                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md" onClick={() => setIsModalOpen(true)}><Edit size={18}/></button>
                                <button className="p-2 text-red-500 hover:bg-red-100 rounded-md"><Trash2 size={18}/></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BlogEditorModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
    );
}