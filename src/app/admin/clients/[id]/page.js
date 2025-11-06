'use client';

import { clientDetail } from '../../adminData';
import { ArrowLeft, Send, Check, X, Link as LinkIcon, Video, MapPin, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';

// --- NOUVEAU: Composant Modale de Confirmation ---
const ConfirmationModal = ({ isOpen, setIsOpen, onConfirm, title, message, confirmText, isDestructive }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                        <Dialog.Title as="h3" className="text-lg font-bold flex items-center gap-2"><AlertTriangle className={isDestructive ? "text-red-500" : "text-amber-500"}/> {title}</Dialog.Title>
                        <div className="mt-2"><p className="text-sm text-gray-500">{message}</p></div>
                        <div className="mt-4 flex justify-end gap-4">
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium border rounded-md">Annuler</button>
                            <button type="button" onClick={() => { onConfirm(); setIsOpen(false); }} className={`px-4 py-2 text-sm font-medium text-white rounded-md ${isDestructive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>{confirmText}</button>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    </Transition>
);


export default function ClientDetailPage({ params }) {
    // Dans un vrai projet, on utiliserait params.id pour fetch les données
    const client = clientDetail;
    const [meetLink, setMeetLink] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState({});

    const handleAction = (action, itemTitle) => {
        setModalConfig({
            title: `Confirmer l'action`,
            message: `Êtes-vous sûr de vouloir ${action.toLowerCase()} la commande "${itemTitle}" ? Cette action notifiera le client.`,
            confirmText: action,
            onConfirm: () => console.log(`Action: ${action}, Item: ${itemTitle}`),
            isDestructive: action === "Annuler"
        });
        setIsModalOpen(true);
    };

    return (
        <div>
            <Link href="/admin/clients" className="flex items-center gap-2 text-gray-500 hover:text-[#1f2937] mb-6">
                <ArrowLeft size={18}/> Retour à la liste des clients
            </Link>
            <div className="mb-8">
                <h1 className="text-4xl font-bold">{client.name}</h1>
                <p className="text-gray-500">{client.email}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* --- Colonne Principale (Gauche) --- */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 space-y-8">
                    
                    {/* --- Section Rendez-vous --- */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Rendez-vous ({client.appointments.length})</h2>
                        <div className="space-y-2">
                            {client.appointments.map(rdv => (
                                <div key={rdv.id} className="p-3 border-b last:border-b-0">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold flex items-center gap-2">{rdv.type === "Présentiel" ? <MapPin size={16} className="text-gray-400"/> : <Video size={16} className="text-gray-400"/>} {rdv.title}</p>
                                            <p className="text-sm text-gray-500 ml-8">{rdv.date}</p>
                                        </div>
                                        {rdv.status === 'en attente' ? (
                                            <div className="flex gap-2">
                                                <button onClick={() => handleAction("Annuler", rdv.title)} className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-md font-semibold hover:bg-red-200 transition-colors">Annuler</button>
                                                <button onClick={() => handleAction("Accepter", rdv.title)} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-md font-semibold hover:bg-green-200 transition-colors">Accepter</button>
                                            </div>
                                        ) : <span className="text-xs font-bold uppercase px-2 py-1 rounded-full bg-green-100 text-green-700">{rdv.status}</span>}
                                    </div>
                                    {/* --- CHAMP POUR LIEN MEET/ZOOM --- */}
                                    {rdv.type === 'Live' && rdv.status === 'accepté' && (
                                        <div className="mt-3 ml-8 flex gap-2">
                                            <div className="relative flex-grow">
                                                <LinkIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                                                <input type="text" placeholder="Coller le lien de la session..." className="w-full pl-9 py-1.5 border rounded-lg text-sm" value={meetLink} onChange={(e) => setMeetLink(e.target.value)}/>
                                            </div>
                                            <button className="text-xs bg-blue-500 text-white px-4 py-1 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Envoyer</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    

                    {/* --- Section Formations --- */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Formations Achetées ({client.formations.length})</h2>
                        <div className="space-y-2">
                            {client.formations.map(form => (
                                <div key={form.id} className="flex justify-between items-center p-3 border-b last:border-b-0">
                                    <p className="font-semibold">{form.title}</p>
                                    {form.status === 'en attente' ? (
                                        <div className="flex gap-2">
                                            <button onClick={() => handleAction("Annuler", form.title)} className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-md font-semibold hover:bg-red-200 transition-colors">Annuler</button>
                                            <button onClick={() => handleAction("Accepter", form.title)} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-md font-semibold hover:bg-green-200 transition-colors">Accepter</button>
                                        </div>
                                    ) : <span className="text-xs font-bold uppercase px-2 py-1 rounded-full bg-green-100 text-green-700">{form.status}</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>
                
                {/* --- Colonne de Droite --- */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8 lg:sticky top-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Notifier le client</h2>
                        <textarea placeholder="Votre message... ex: Le lien pour votre session a été ajouté." className="w-full p-2 border rounded-lg mb-2 text-sm" rows="4"></textarea>
                        <button className="w-full flex items-center justify-center gap-2 bg-[#af4d30] text-white py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"><Send size={16}/> Envoyer la Notification</button>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Panier Actuel ({client.cart.length})</h2>
                        {client.cart.length > 0 ? (
                            <ul className="space-y-2 list-disc list-inside text-gray-600">
                                {client.cart.map(item => <li key={item.title}>{item.title}</li>)}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-500 text-center py-4">Le panier de ce client est vide.</p>
                        )}
                    </div>
                </motion.div>
            </div>

            <ConfirmationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} {...modalConfig} />
        </div>
    );
}