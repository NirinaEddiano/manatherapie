// src/app/components/ContactCTA.js
'use client';
import Link from 'next/link';
import Image from 'next/image';

const ContactCTA = () => (
    <section className="bg-[#FFF7ED]">
        <div className="container mx-auto px-6 py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-[#1f2937] mb-2">Une question ? Un doute ?</h2>
                    <p className="text-lg text-gray-600">Notre équipe est à votre écoute pour vous conseiller et vous guider vers le soin qui vous convient le mieux.</p>
                </div>
                <Link href="/contact" className="flex-shrink-0 bg-[#C87A5E] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1f2937] transition-colors">
                    Contactez-nous
                </Link>
            </div>
        </div>
    </section>
);
export default ContactCTA;