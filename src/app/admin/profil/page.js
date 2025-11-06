'use client';

import { motion } from 'framer-motion';
import { User, Mail, Lock, Edit, X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

// --- MODALE POUR ÉDITER LES INFOS DE L'ADMIN ---
const EditAdminProfileModal = ({ isOpen, setIsOpen }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black/30" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                            <Dialog.Title as="h3" className="text-xl font-bold flex justify-between items-center text-[#1f2937]">
                                Modifier le profil
                                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-gray-100 text-gray-500"><X size={20}/></button>
                            </Dialog.Title>
                            <form className="mt-4 space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Nom d'administrateur</label>
                                    <input type="text" defaultValue="Admin Manatherapy" className="mt-1 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af4d30]"/>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email de connexion</label>
                                    <input type="email" defaultValue="admin@manatherapy.fr" className="mt-1 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af4d30]"/>
                                </div>
                                <div className="mt-6 flex justify-end gap-3">
                                    <button type="button" onClick={() => setIsOpen(false)} className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">Annuler</button>
                                    <button type="submit" className="px-5 py-2 text-sm font-semibold text-white bg-[#af4d30] rounded-lg hover:bg-opacity-90">Enregistrer</button>
                                </div>
                            </form>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
);

// --- MODALE COMPLÈTE POUR CHANGER LE MOT DE PASSE DE L'ADMIN ---
const EditAdminPasswordModal = ({ isOpen, setIsOpen }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black/30" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                     <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                             <Dialog.Title as="h3" className="text-xl font-bold flex justify-between items-center text-[#1f2937]">
                                Changer le mot de passe
                                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-gray-100 text-gray-500"><X size={20}/></button>
                            </Dialog.Title>
                            <form className="mt-4 space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Mot de passe actuel</label>
                                    <input type="password" placeholder="••••••••" className="mt-1 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af4d30]"/>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                                    <input type="password" placeholder="••••••••" className="mt-1 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af4d30]"/>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Confirmer le nouveau mot de passe</label>
                                    <input type="password" placeholder="••••••••" className="mt-1 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af4d30]"/>
                                </div>
                                <div className="mt-6 flex justify-end gap-3">
                                    <button type="button" onClick={() => setIsOpen(false)} className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">Annuler</button>
                                    <button type="submit" className="px-5 py-2 text-sm font-semibold text-white bg-[#af4d30] rounded-lg hover:bg-opacity-90">Mettre à jour</button>
                                </div>
                            </form>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
);


export default function AdminProfilePage() {
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);

    return (
        <div>
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-[#1f2937] mb-8">
                Mon Compte Administrateur
            </motion.h1>

            <div className="space-y-8">
                {/* --- CARTE "INFORMATIONS DU COMPTE" --- */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Informations du Compte</h2>
                        <button onClick={() => setProfileModalOpen(true)} className="flex items-center gap-2 text-sm font-semibold text-[#af4d30] hover:underline">
                            <Edit size={16}/> Modifier
                        </button>
                    </div>
                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-center gap-4"><User className="text-gray-400"/><span className="font-semibold w-24">Nom :</span><span>Admin Manatherapy</span></div>
                        <div className="flex items-center gap-4"><Mail className="text-gray-400"/><span className="font-semibold w-24">Email :</span><span>admin@manatherapy.fr</span></div>
                    </div>
                </div>

                {/* --- CARTE "SÉCURITÉ" --- */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Sécurité</h2>
                            <p className="text-sm text-gray-500 mt-1">Il est recommandé de changer votre mot de passe régulièrement.</p>
                        </div>
                        <button onClick={() => setPasswordModalOpen(true)} className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-[#af4d30] hover:underline">
                            <Edit size={16}/> Changer le mot de passe
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MODALES (INVISIBLES PAR DÉFAUT) --- */}
            <EditAdminProfileModal isOpen={isProfileModalOpen} setIsOpen={setProfileModalOpen} />
            <EditAdminPasswordModal isOpen={isPasswordModalOpen} setIsOpen={setPasswordModalOpen} />
        </div>
    );
}