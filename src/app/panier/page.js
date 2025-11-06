'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Tag } from 'lucide-react';

// Données factices pour simuler le contenu du panier
const cartItems = [
  {
    id: 1,
    title: "L'Art de l'Automassage",
    type: "video",
    image: "/images/video-thumb-automassage.jpg",
    price: 49.99,
    quantity: 1,
  },
  {
    id: 2,
    title: "Le Guide de la Détox en 7 Jours",
    type: "ebook",
    image: "/images/ebook-thumb-detox.jpg",
    price: 19.99,
    quantity: 1,
  },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shipping = 0; // Pas de frais de port pour des produits numériques
const total = subtotal + shipping;

export default function PanierPage() {
    return (
        <main className="bg-[#afd30]">
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center overflow-hidden">
                {/* Fond avec le motif animé */}
                <div className="absolute inset-0 animate-pattern-scroll"></div>
                {/* Superposition sombre */}
                <div className="absolute inset-0 bg-[#1f2937]/80"></div>
                
                <div className="relative container mx-auto px-6">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-3"
                    >
                        Votre Panier
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300"
                    >
                        Vérifiez vos articles avant de finaliser votre commande.
                    </motion.p>
                </div>
            </section>
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <p className="text-gray-600 mb-8">Vous avez {cartItems.length} articles dans votre panier.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* --- Colonne de Gauche : Liste des articles --- */}
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
                            <div className="relative z-[2] bg-white rounded-2xl shadow-sm">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center p-6 border-b border-gray-100 last:border-b-0">
                                        <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image src={item.image} alt={item.title} fill className="object-cover"/>
                                        </div>
                                        <div className="ml-6 flex-grow">
                                            <h3 className="font-bold text-[#1f2937]">{item.title}</h3>
                                            <p className="text-sm text-gray-500">{item.type === 'video' ? 'Formation Vidéo' : 'Ebook'}</p>
                                        </div>
                                        <div className="flex items-center gap-4 mx-6">
                                            <button className="p-1 rounded-full text-gray-400 hover:bg-gray-100"><Minus size={16}/></button>
                                            <span>{item.quantity}</span>
                                            <button className="p-1 rounded-full text-gray-400 hover:bg-gray-100"><Plus size={16}/></button>
                                        </div>
                                        <p className="font-bold w-20 text-right">{item.price.toFixed(2)}€</p>
                                        <button className="ml-6 text-gray-400 hover:text-red-500"><X size={20}/></button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* --- Colonne de Droite : Récapitulatif --- */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                            <div className="relative z-[2] bg-white rounded-2xl shadow-sm p-8 sticky top-28">
                                <h2 className="text-2xl font-bold text-[#1f2937] mb-6">Récapitulatif</h2>
                                <div className="space-y-4 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Sous-total</span>
                                        <span className="font-semibold">{subtotal.toFixed(2)}€</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Frais de livraison</span>
                                        <span className="font-semibold">{shipping.toFixed(2)}€</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="flex justify-between items-baseline font-bold text-[#1f2937]">
                                        <span className="text-lg">Total</span>
                                        <span className="text-3xl">{total.toFixed(2)}€</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="relative">
                                        <input type="text" placeholder="Code promo" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"/>
                                        <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                                    </div>
                                </div>
                                <Link href="#" className="block w-full text-center mt-6 bg-[#af4d30] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
                                    Procéder au paiement
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}