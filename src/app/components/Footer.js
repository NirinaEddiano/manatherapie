
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-gray-300">
      <div className="container mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">Manatherapie</h3>
          <p className="text-gray-400 mb-6 max-w-xs">
            Votre espace dédié à l'harmonie du corps et de l'esprit.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#C87A_E] transition-colors"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-[#C87A_E] transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-[#C87A_E] transition-colors"><Linkedin /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-3">
            <li><Link href="/soins" className="hover:text-white transition-colors">Nos Soins</Link></li>
            <li><Link href="/academie" className="hover:text-white transition-colors">Académie</Link></li>
            <li><Link href="/coaching" className="hover:text-white transition-colors">Coaching</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Nos Soins</h4>
          <ul className="space-y-3">
            <li><Link href="/soins/massages" className="hover:text-white transition-colors">Massages</Link></li>
            <li><Link href="/soins/drainage" className="hover:text-white transition-colors">Drainage Lymphatique</Link></li>
            <li><Link href="/soins/maderotherapie" className="hover:text-white transition-colors">Maderothérapie</Link></li>
            <li><Link href="/soins/specialises" className="hover:text-white transition-colors">Soins Spécialisés</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contactez-nous</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <a href="mailto:contact@manatherapie.fr" className="hover:text-white transition-colors">contact@manatherapie.fr</a>
            </li>
            <li className="flex items-center gap-2">
              <a href="https://wa.me/33600000000" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>06 00 00 00 00</span>
            </li>
            <li className="flex items-center gap-2">
              <span>123 Rue du Bien-être, 75001 Paris</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-4 mt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Où nous trouver</h4>
            <div className="overflow-hidden rounded-xl h-64">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625693759!2d2.2922926156743123!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e29641f45c1%3A0x465c526437341fb7!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1672834000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter saturate-50 hue-rotate-[300deg] brightness-90 contrast-125"
                ></iframe>
            </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Manatherapie. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;