'use client';
import moment from 'moment';
import { motion } from 'framer-motion';
import { DollarSign, Users, Calendar, Video, Clock, CheckCircle, X, Check } from 'lucide-react';
import { adminData } from './adminData';
import Link from 'next/link';

const StatCard = ({ icon, title, value, color }) => (
    <div className={`bg-white p-6 rounded-2xl shadow-sm flex items-center gap-6 border-l-4 ${color}`}>
        <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('border-', 'bg-')}`}>{icon}</div>
        <div>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-gray-500">{title}</p>
        </div>
    </div>
);

export default function AdminDashboard() {
    const pendingAppointments = adminData.appointments.filter(a => a.status === 'en attente');
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Tableau de Bord</h1>
            {/* Statistiques clés */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard icon={<DollarSign/>} title="Revenus (30j)" value={`${adminData.stats.revenue}€`} color="border-green-500"/>
                <StatCard icon={<Users/>} title="Nouveaux Clients (30j)" value={adminData.stats.newClients} color="border-blue-500"/>
                <StatCard icon={<Calendar/>} title="RDV en attente" value={adminData.stats.pendingAppointments} color="border-amber-500"/>
                <StatCard icon={<Video/>} title="Formations vendues (30j)" value={adminData.stats.coursesSold} color="border-indigo-500"/>
            </div>

            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Actions rapides : {pendingAppointments.length} RDV en attente</h2>
                    <div className="space-y-3">
                        {pendingAppointments.length > 0 ? pendingAppointments.slice(0, 3).map(rdv => (
                             <div key={rdv.id} className="grid grid-cols-4 items-center p-3 bg-gray-50 rounded-lg">
                                <div><p className="font-bold">{rdv.service}</p><p className="text-sm text-gray-500">{rdv.clientName}</p></div>
                                <p className="text-sm text-gray-600">{moment(rdv.date).format('D MMM YYYY, HH:mm')}</p>
                                <span className="text-xs font-bold uppercase text-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{rdv.status}</span>
                                <div className="flex justify-end gap-2">
                                    <button className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200" title="Annuler"><X size={16}/></button>
                                    <button className="p-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200" title="Accepter"><Check size={16}/></button>
                                </div>
                            </div>
                        )) : <p className="text-gray-500 text-center py-4">Aucun rendez-vous en attente.</p>}
                    </div>
                    <Link href="/admin/rendez-vous" className="mt-4 inline-block font-semibold text-sm text-[#af4d30] hover:underline">
                        Voir tous les rendez-vous →
                    </Link>
                </div>

            {/* Activités Récentes & RDV à venir */}
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8">
                
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Rendez-vous à venir</h2>
                    <div className="space-y-4">
                        {adminData.appointments.slice(0, 3).map(rdv => (
                             <div key={rdv.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-bold">{rdv.service}</p>
                                    <p className="text-sm text-gray-500">{rdv.clientName} - {moment(rdv.date).format('D MMM, HH:mm')}</p>
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${rdv.status === 'en attente' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{rdv.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Activité récente</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm"><CheckCircle size={16} className="text-green-500"/>RDV de J. Martin accepté</li>
                        <li className="flex items-center gap-3 text-sm"><Users size={16} className="text-blue-500"/>Nouveau client: S. Dubois</li>
                        <li className="flex items-center gap-3 text-sm"><Video size={16} className="text-indigo-500"/>Nouvel achat: L'Art de l'Automassage</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}