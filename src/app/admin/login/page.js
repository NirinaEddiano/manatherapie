'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminLoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="relative z-[2] w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-2xl"
            >
                <div className="text-center">
                    <Link href="/" className="relative block h-16 w-16 mx-auto rounded-full overflow-hidden">
                        <Image src="/images/logo.jpeg" alt="manatherapy logo" fill className="object-cover"/>
                    </Link>
                    <h2 className="mt-6 text-3xl font-bold text-[#1f2937]">Espace Administrateur</h2>
                    <p className="mt-2 text-gray-600">Connectez-vous pour gérer votre activité.</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" name="email" type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg" placeholder="Adresse e-mail" />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Mot de passe</label>
                        <input id="password" name="password" type="password" required className="w-full px-4 py-3 border border-gray-200 rounded-lg" placeholder="Mot de passe" />
                    </div>
                    <div>
                        <Link href="/admin"> {/* Redirige vers le dashboard après connexion */}
                            <button type="submit" className="w-full py-3 px-4 text-white font-semibold bg-[#af4d30] rounded-lg hover:bg-opacity-90 transition">
                                Se Connecter
                            </button>
                        </Link>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}