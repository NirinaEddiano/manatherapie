
'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const BookingBar = ({ price, duration }) => {
  const [isHidden, setIsHidden] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-30"
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-white/80 backdrop-blur-md border-t border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <p className="font-bold text-xl md:text-2xl text-[#1f2937]">{price}</p>
            <p className="text-sm text-gray-600">Pour ~{duration} | <span className="font-semibold text-[#C87A5E]">Acompte requis</span></p>
          </div>
          <div>
            <Link href="/contact" className="bg-[#C87A5E] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#b56b50] transition-colors">
              Réserver
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingBar;