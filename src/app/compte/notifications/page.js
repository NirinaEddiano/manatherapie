'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle, XCircle, Video, Trash2, BellOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'

const initialNotificationsData = [
    { id: 1, type: 'confirmé', text: "Votre RDV 'MANAXDRAIN' du 10/11 à 14h00 est confirmé.", time: "Hier", icon: <CheckCircle className="text-green-500"/>, isNew: true },
    { id: 2, type: 'lien', text: "Le lien pour votre 'Coaching en Ligne' est disponible. La séance commence dans 1 heure.", time: "Aujourd'hui", icon: <Video className="text-blue-500"/>, isNew: true, link: "#" },
    { id: 3, type: 'annulé', text: "Votre RDV 'MANAXFACE' du 05/11 a été annulé. Un remboursement a été initié.", time: "Il y a 3 jours", icon: <XCircle className="text-red-500"/> },
    { id: 4, type: 'rappel', text: "Rappel : vous avez un RDV 'Coaching en Ligne' demain à 10h00.", time: "Il y a 4 jours", icon: <Calendar className="text-amber-500"/> },
];


export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(initialNotificationsData);

    const deleteNotification = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
        toast.success("Notification supprimée.");
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, isNew: false })));
        toast.success("Toutes les notifications ont été marquées comme lues.");
    };

    const deleteAll = () => {
        setNotifications([]);
        toast.success("Toutes les notifications ont été supprimées.");
    };

    return (
        <div>
            <div className="relative z-[2]flex justify-between items-center mb-8">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-[#1f2937]">
                    Notifications
                </motion.h1>
                <div className="flex gap-4">
                    <button className="text-sm font-semibold text-gray-500 hover:text-[#af4d30] flex items-center gap-1"><BellOff size={16}/> Tout marquer comme lu</button>
                    <button className="text-sm font-semibold text-red-500 hover:text-red-700 flex items-center gap-1"><Trash2 size={16}/> Vider</button>
                </div>
            </div>

            <div className="relative z-[2] bg-white rounded-2xl shadow-sm">
                <ul className="divide-y divide-gray-200">
                    <AnimatePresence>
                    {notifications.length > 0 ? notifications.map((notif, i) => (
                        <motion.li 
                            key={notif.id} 
                            className={`p-6 flex items-start gap-4 transition-colors ${notif.isNew ? 'bg-[#FADDAA]/20' : 'hover:bg-gray-50'}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex-shrink-0 mt-1">{notif.icon}</div>
                            <div className="flex-grow">
                                <p className="text-gray-800">{notif.text}</p>
                                <p className="text-sm text-gray-500 mt-1">{notif.time}</p>
                                {notif.link && (
                                    <Link href={notif.link} className="mt-2 inline-block bg-[#af4d30] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-opacity-80">
                                        Rejoindre la session
                                    </Link>
                                )}
                            </div>
                            {notif.isNew && <div className="w-2.5 h-2.5 bg-[#af4d30] rounded-full flex-shrink-0 mt-1.5 animate-pulse"></div>}
                            <div className="flex-shrink-0 ml-4">
                                <button onClick={() => deleteNotification(notif.id)} className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50">
                                    <Trash2 size={16}/>
                                </button>
                            </div>
                        </motion.li>
                    )) : (
                            <p className="text-center text-gray-500 p-8">Vous n'avez aucune notification.</p>
                        )}
                    </AnimatePresence>
                </ul>
            </div>
        </div>
    );
}