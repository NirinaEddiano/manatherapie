'use client';
import { BarChart, DollarSign, Users, Video } from 'lucide-react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const StatCard = ({ icon, title, value }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-4 mb-2">
            {icon}
            <p className="text-gray-500">{title}</p>
        </div>
        <p className="text-4xl font-bold">{value}</p>
    </div>
);

const barData = {
    labels: ["Automassage", "Plantes", "Détox", "Aromathérapie", "Sommeil"],
    datasets: [{
        label: '# de Ventes',
        data: [58, 42, 35, 28, 15],
        backgroundColor: 'rgba(175, 77, 48, 0.6)', // Couleur #af4d30 avec opacité
        borderColor: '#af4d30',
        borderWidth: 1,
        borderRadius: 5,
    }]
};

const lineData = {
    labels: ['Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov'],
    datasets: [{
        label: 'Revenus Mensuels',
        data: [1200, 1900, 2500, 2200, 3100, 4200],
        borderColor: '#af4d30',
        tension: 0.4,
    }]
};

export default function StatsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Statistiques de Vente</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard icon={<DollarSign/>} title="Revenu Total" value="12,345€"/>
                <StatCard icon={<Users/>} title="Clients Actifs" value="128"/>
                <StatCard icon={<Video/>} title="Formations Vendues" value="215"/>
                <StatCard icon={<BarChart/>} title="Taux de Conversion" value="3.4%"/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Top 5 des Formations</h2>
                    <ul className="space-y-2">
                        <li className="flex justify-between"><span>L'Art de l'Automassage</span><strong>58 ventes</strong></li>
                        <li className="flex justify-between"><span>Le Pouvoir des Plantes</span><strong>42 ventes</strong></li>
                        <li className="flex justify-between"><span>Guide de la Détox</span><strong>35 ventes</strong></li>
                        <li className="flex justify-between"><span>Bases de l'Aromathérapie</span><strong>28 ventes</strong></li>
                        <li className="flex justify-between"><span>Retrouver un Sommeil Réparateur</span><strong>15 ventes</strong></li>
                    </ul>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Revenus par Mois</h2>
                    {/* Ici, on intégrerait une librairie de graphiques comme Chart.js ou Recharts */}
                    <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg">
                        <p className="text-gray-400">(Graphique des revenus)</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Top 5 des Formations</h2>
                    <Bar data={barData} options={{ responsive: true }}/>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">Revenus par Mois</h2>
                    <Line data={lineData} options={{ responsive: true }}/>
                </div>
            </div>
        </div>
    );
}