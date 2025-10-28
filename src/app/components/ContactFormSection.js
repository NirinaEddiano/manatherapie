
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const ContactFormSection = () => {
  return (
    <section className=" bg-[#FADDAA] py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-12 rounded-2xl shadow-xl overflow-hidden min-h-[90vh]">
          <motion.div 
            className="lg:col-span-7 h-96 lg:h-full clip-wave-right"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625693759!2d2.2922926156743123!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x47e66e29641f45c1%3A0x465c526437341fb7!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1672834000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter saturate(60%) hue-rotate(-45deg) brightness(95%) contrast(120%)"
            ></iframe>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 bg-white p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }} // Animation depuis la droite
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-[#1f2937] mb-4">Entrons en contact</h2>
            <p className="text-gray-600 mb-8">
              Utilisez le formulaire ou contactez-nous directement. Nous sommes impatients de vous lire.
            </p>
            
            <form action="#" method="POST" className="space-y-5">
              <div>
                <input type="text" name="name" id="name" placeholder="Votre nom" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#C87A5E] focus:border-[#C87A5E] transition" />
              </div>
              <div>
                <input type="email" name="email" id="email" placeholder="Votre email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#C87A5E] focus:border-[#C87A5E] transition" />
              </div>
              <div>
                <textarea name="message" id="message" rows="5" placeholder="Votre message" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#C87A5E] focus:border-[#C87A5E] transition"></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#af4d30] text-white px-6 py-3 rounded-lg font-semibold text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-[#1f2937] mb-4">Nos coordonnées</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#af4d30]" />
                  <a href="mailto:Manatherapy.mp@gmail.com" className="hover:text-[#af4d30] transition-colors">Manatherapy.mp@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#af4d30]" />
                  <a href="tel:0769899612" className="hover:text-[#af4d30]">07 69 89 96 12</a>
                </li>
                 <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#af4d30]" />
                  <span>24 impasse de l’estivage, 13800 Istres</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;