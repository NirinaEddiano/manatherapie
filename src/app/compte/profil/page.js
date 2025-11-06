'use client';

import { motion } from 'framer-motion';
import { User, Mail,Phone, Lock, Edit, X , MapPin } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

// --- MODALE POUR ÉDITER LES INFOS ---
const EditProfileModal = ({ isOpen, setIsOpen }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black/30" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 flex justify-between items-center">
                                Modifier mes informations
                                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-gray-100"><X size={20}/></button>
                            </Dialog.Title>
                            <div className="mt-4">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium">Prénom</label>
                                            <input type="text" defaultValue="Marie" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium">Nom</label>
                                            <input type="text" defaultValue="Dubois" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Email</label>
                                        <input type="email" defaultValue="marie.dubois@email.com" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Adresse</label>
                                        <input type="email" defaultValue="123 Rue du Bien-être, 75001 Paris" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Téléphone</label>
                                        <input type="number" defaultValue="06 00 00 00 00" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                    <div className="mt-6 flex justify-end gap-2">
                                        <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200">Annuler</button>
                                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-[#af4d30] border border-transparent rounded-md hover:bg-opacity-90">Enregistrer</button>
                                    </div>
                                </form>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
);

const EditPasswordModal = ({ isOpen, setIsOpen }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black/30" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 flex justify-between items-center">
                                Changer le mot de passe
                                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-gray-100"><X size={20}/></button>
                            </Dialog.Title>
                            <div className="mt-4">
                               <form className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium">Mot de passe actuel</label>
                                        <input type="password" placeholder="••••••••" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Nouveau mot de passe</label>
                                        <input type="password" placeholder="••••••••" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                     <div>
                                        <label className="text-sm font-medium">Confirmer le nouveau</label>
                                        <input type="password" placeholder="••••••••" className="mt-1 w-full p-2 border border-gray-300 rounded-md"/>
                                    </div>
                                    <div className="mt-6 flex justify-end gap-2">
                                        <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200">Annuler</button>
                                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-[#1f2937] border border-transparent rounded-md hover:bg-opacity-90">Mettre à jour</button>
                                    </div>
                                </form>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
);


export default function ProfilPage() {
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);

    return (
        <div>
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-[#1f2937] mb-8">
                Mon Profil
            </motion.h1>

            <div className=" space-y-8">
                {/* --- CARTE "MES INFORMATIONS" AVEC BOUTON D'ÉDITION --- */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="relative z-[2]  flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Mes Informations</h2>
                        <button onClick={() => setProfileModalOpen(true)} className="relative z-[2]  flex items-center gap-2 text-sm font-semibold text-[#af4d30] hover:underline">
                            <Edit size={16}/> Modifier
                        </button>
                    </div>
                    <div className="relative z-[2]  space-y-4 text-gray-700">
                        <div className="flex items-center gap-4"><User className="text-gray-400"/><span className="font-semibold w-24">Nom :</span><span>Marie Dubois</span></div>
                        <div className="flex items-center gap-4"><Mail className="text-gray-400"/><span className="font-semibold w-24">Email :</span><span>marie.dubois@email.com</span></div>
                        <div className="flex items-center gap-4"><Phone className="text-gray-400"/><span className="font-semibold w-24">Téléphone :</span><span>06 00 00 00 00</span></div>
                          <div className="flex items-center gap-4"><MapPin className="text-gray-400"/><span className="font-semibold w-24">Adresse :</span><span>123 Rue du Bien-être, 75001 Paris</span></div>

                    </div>
                </div>

                {/* --- CARTE "SÉCURITÉ" AVEC BOUTON D'ÉDITION --- */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="relative z-[2]  flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">Sécurité</h2>
                        <button onClick={() => setPasswordModalOpen(true)} className="flex items-center gap-2 text-sm font-semibold text-[#af4d30] hover:underline">
                            <Edit size={16}/> Changer le mot de passe
                        </button>
                    </div>
                </div>
                
                <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Préférences de Notification</h2>
    <div className="space-y-3">
        <div className="flex justify-between items-center">
            <label htmlFor="notif-email">Recevoir les rappels de RDV par e-mail</label>
            <input type="checkbox" id="notif-email" className="h-4 w-4 rounded text-[#af4d30] focus:ring-[#af4d30]" defaultChecked />
        </div>
        <div className="flex justify-between items-center">
            <label htmlFor="notif-newsletter">S'inscrire à la newsletter</label>
            <input type="checkbox" id="notif-newsletter" className="h-4 w-4 rounded text-[#af4d30] focus:ring-[#af4d30]" />
        </div>
    </div>
</div>
            </div>

            {/* --- LES MODALES SONT ICI (INVISIBLES PAR DÉFAUT) --- */}
            <EditProfileModal isOpen={isProfileModalOpen} setIsOpen={setProfileModalOpen} />
            <EditPasswordModal isOpen={isPasswordModalOpen} setIsOpen={setPasswordModalOpen} />
        </div>
    );
}