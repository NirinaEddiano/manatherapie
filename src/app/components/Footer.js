
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] z-[20] text-gray-300">
      <div className="container mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0">
        <div className="lg:col-span-2">
          <div className="flex gap-2 items-center">
          
    <Link href="/" className="relative h-28 w-28 rounded-full mb-4 block">
                        <Image src="/images/logo.jpeg" alt="manatherapy logo" fill className="object-cover"/>
                    </Link>

          <h3 className="text-2xl font-black tracking-wider text-[#af4d30] mb-4">manatherapy</h3>
          </div>
                    <p className="text-gray-400 mb-6 max-w-xs">Votre espace dédié à l'harmonie du corps et de l'esprit à Istres.</p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/manatherapy.mp" target="_blank" rel="noopener noreferrer" className="text-gray-400 flex gap-2 hover:text-[#af4d30] transition-colors"><Instagram />manatherapy.mp</a>
                    </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-3">
            <li><Link href="/soins" className="hover:text-[#af4d30] transition-colors">Nos Soins</Link></li>
            <li><Link href="/academie" className="hover:text-[#af4d30] transition-colors">Académie</Link></li>
            <li><Link href="/coaching" className="hover:text-[#af4d30] transition-colors">Coaching</Link></li>
            <li><Link href="/contact" className="hover:text-[#af4d30] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Nos Soins</h4>
           <ul className="space-y-3">
                        <li><Link href="/soins/manaxface" className="text-gray-400 hover:text-[#af4d30] transition-colors">MANAXFACE</Link></li>
                        <li><Link href="/soins/manaxdrain" className="text-gray-400 hover:text-[#af4d30] transition-colors">MANAXDRAIN</Link></li>
                        <li><Link href="/soins/manaxsculpt" className="text-gray-400 hover:text-[#af4d30] transition-colors">MANAXSCULPT</Link></li>
                        <li><Link href="/soins/maderoxdrain" className="text-gray-400 hover:text-[#af4d30] transition-colors">MADÉROXDRAIN</Link></li>
                        <li><Link href="/soins/maderoxice" className="text-gray-400 hover:text-[#af4d30] transition-colors">MADÉROXICE</Link></li>
                        <li><Link href="/soins/manafast" className="text-gray-400 hover:text-[#af4d30] transition-colors">MANAFAST</Link></li>
                    </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contactez-nous</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="mailto:Manatherapy.mp@gmail.com" className="hover:text-[#af4d30]">Manatherapy.mp@gmail.com</a></li>
                        <li><a href="tel:0769899612" className="hover:text-[#af4d30]">07 69 89 96 12</a></li>
                        <li><span>24 impasse de l’estivage, 13800 Istres</span></li>
                    </ul>
        </div>

         <div className="md:col-span-2 lg:col-span-4 mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Où nous trouver</h4>
                    <div className="overflow-hidden rounded-xl h-64">
                        <iframe
                            // --- LIEN MIS À JOUR POUR ISTRES ---
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.62537233816!2d4.98569881549000!3d43.571171879124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9f1b7e8d6f5a1%3A0x8e8b6f5d8e1a1e2b!2s24%20Impasse%20de%20l'Estivage%2C%2013800%20Istres%2C%20France!5e0!3m2!1sfr!2sfr!4v1672834000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="filter  invert(90%) sepia(60%) hue-rotate(-30deg) brightness(90%) contrast(140%)"
                        ></iframe>
                    </div>
                </div>
      </div>
      
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} manatherapy. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;