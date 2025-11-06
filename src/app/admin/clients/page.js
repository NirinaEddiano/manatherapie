'use client';

import { Users, Search, ArrowDownUp } from 'lucide-react';
import { adminData } from '../adminData';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';


export default function ClientsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name-asc');

    const sortedClients = useMemo(() => {
        const filtered = adminData.clients.filter(client => 
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name-asc': return a.name.localeCompare(b.name);
                case 'name-desc': return b.name.localeCompare(a.name);
                case 'date-new': return new Date(b.joinDate) - new Date(a.joinDate);
                case 'date-old': return new Date(a.joinDate) - new Date(b.joinDate);
                default: return 0;
            }
        });
    }, [searchTerm, sortBy]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Gestion des Clients</h1>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    {/* --- BARRE DE RECHERCHE --- */}
                    <div className="relative w-full md:w-1/3">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input 
                            type="text" 
                            placeholder="Rechercher par nom ou email..." 
                            className="w-full pl-10 py-2 border rounded-lg"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {/* --- FILTRE DE TRI --- */}
                    <div className="flex items-center gap-2">
                         <label htmlFor="sort" className="text-sm font-semibold text-gray-600">Trier par :</label>
                         <select 
                            id="sort"
                            className="py-2 px-3 border rounded-lg text-sm"
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="name-asc">Nom (A-Z)</option>
                            <option value="name-desc">Nom (Z-A)</option>
                            <option value="date-new">Plus récents</option>
                            <option value="date-old">Plus anciens</option>
                         </select>
                    </div>
                </div>

                {/* --- TABLEAU DES CLIENTS --- */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="p-3">Nom</th>
                                <th className="p-3">Email</th>
                                <th className="p-3 text-center">Formations</th>
                                <th className="p-3 text-center">Rendez-vous</th>
                                <th className="p-3 text-center">Panier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedClients.map(client => (
                                <tr key={client.id} className="border-b hover:bg-gray-50" >
                                    <td className="p-3 font-bold"><Link href={`/admin/clients/${client.id}`} className="hover:underline text-[#af4d30]">{client.name}</Link></td>
                                    <td className="p-3 text-gray-600"><Link href={`/admin/clients/${client.id}`} className="hover:underline ">{client.email}</Link></td>
                                    <td className="p-3 text-center text-gray-600"><Link href={`/admin/clients/${client.id}`} className="hover:underline ">{client.formations.accepted} ({client.formations.pending} att.)</Link></td>
                                    <td className="p-3 text-center text-gray-600"><Link href={`/admin/clients/${client.id}`} className="hover:underline ">{client.appointments.accepted} ({client.appointments.pending} att.)</Link></td>
                                    <td className="p-3 text-center text-gray-600"><Link href={`/admin/clients/${client.id}`} className="hover:underline ">{client.cartItems}</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}