'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// Le composant accepte maintenant un 'targetId' pour le défilement
const BookingBar = ({ price, targetId }) => {
  const [isHidden, setIsHidden] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsHidden(latest < 400);
  });

   const handleScrollTo = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Fonction pour faire défiler en douceur vers la section des prix
  const scrollToPricing = (e) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-30"
      variants={{ visible: { y: 0 }, hidden: { y: "100%" } }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-white/80 backdrop-blur-md border-t border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <p className="font-bold text-xl md:text-2xl text-[#1f2937]">À partir de {price}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold text-[#af4d30]">Acompte requis</span></p>
          </div>
          <div>
            <button 
              onClick={handleScrollTo} 
              className="bg-[#af4d30] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#D0482B] transition-colors"
            >
               Voir les tarifs
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingBar;