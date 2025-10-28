// src/app/components/FloatingCtaButton.js
'use client'; 

import { motion } from 'framer-motion';
import Link from 'next/link';

const FloatingCtaButton = ({ href, text }) => {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-20"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Link href={href} className="bg-[#af4d30] text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:bg-[#b56b50] transition-colors flex items-center gap-2">
        {text}
      </Link>
    </motion.div>
  );
};

export default FloatingCtaButton;