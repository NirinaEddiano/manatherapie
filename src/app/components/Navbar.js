
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const soinsSubMenu = [
    { title: "Massages Thérapeutiques", href: "/soins/massages" },
    { title: "Drainage Lymphatique", href: "/soins/drainage" },
    { title: "Maderothérapie", href: "/soins/maderotherapie" },
    { title: "Soins Spécialisés", href: "/soins/specialises" },
];

const NavLink = ({ href, children, isScrolled }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseTextColor = isScrolled ? 'text-[#1f2937]' : 'text-white'; 
  const activeTextColor = isScrolled ? 'text-[#C87A5E]' : 'text-white'; 
  const hoverColor = isScrolled ? 'hover:text-[#C87A5E]' : 'hover:text-white/80';

  return (
    <Link 
      href={href} 
      className={`relative group font-medium transition-colors duration-300 ${isActive ? activeTextColor : baseTextColor} ${hoverColor}`}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#C87A5E]" 
          layoutId="underline"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoinsOpen, setIsSoinsOpen] = useState(false); // État pour le sous-menu
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSoinsActive = pathname.startsWith('/soins');

  return (
    <nav className={`fixed w-full z-20 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        <Link href="/" className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#C87A5E]' : 'text-white'}`}>
          Manatherapie
        </Link>

        <div className="hidden md:flex items-center space-x-7 text-sm">
          <NavLink href="/" isScrolled={isScrolled}>Accueil</NavLink>
          <motion.div 
            onHoverStart={() => setIsSoinsOpen(true)}
            onHoverEnd={() => setIsSoinsOpen(false)}
            className="relative"
          >
            <div className={`relative group font-medium transition-colors duration-300 flex items-center gap-1 cursor-pointer ${isSoinsActive ? (isScrolled ? 'text-[#C87A5E]' : 'text-white') : (isScrolled ? 'text-[#1f2937]' : 'text-white')} hover:${isScrolled ? 'text-[#C87A5E]' : 'text-white/80'}`}>
              Nos Soins
              <motion.div animate={{ rotate: isSoinsOpen ? 180 : 0 }}>
                <ChevronDown size={16} />
              </motion.div>
            </div>
            {isSoinsActive && (
                 <motion.div
                 className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#C87A5E]"
                 layoutId="underline"
                 transition={{ type: 'spring', stiffness: 300, damping: 25 }}
               />
            )}
            <AnimatePresence>
              {isSoinsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute top-full mt-2 w-56 p-2 rounded-lg shadow-xl ${isScrolled ? 'bg-white' : 'bg-white/80 backdrop-blur-md'}`}
                >
                  <ul className="space-y-1">
                    {soinsSubMenu.map(item => (
                      <li key={item.href}>
                        <Link href={item.href} className="block px-4 py-2 text-sm text-[#1f2937] hover:bg-[#FFF7ED] hover:text-[#C87A5E] rounded-md transition-colors">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <NavLink href="/academie" isScrolled={isScrolled}>Académie</NavLink>
          <NavLink href="/coaching" isScrolled={isScrolled}>Coaching</NavLink>
          <NavLink href="/contact" isScrolled={isScrolled}>Contact</NavLink>
        </div>

        {/* --- SECTION DES BOUTONS ENTIÈREMENT CORRIGÉE AVEC COULEURS DIRECTES --- */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          {/* Bouton Secondaire : Se Connecter */}
          <Link 
            href="/auth/login" 
            className={`font-medium px-4 py-1.5 rounded-full border-2 transition-all duration-300 ${
              isScrolled 
                ? 'text-[#C87A5E] border-[#C87A5E]/40 hover:bg-[#C87A5E] hover:text-white' 
                : 'text-white border-white hover:bg-white hover:text-[#C87A5E]' // <-- CORRECTION CLÉ ICI
            }`}
          >
            Se Connecter
          </Link>

          {/* Bouton Principal : S'inscrire */}
          <a 
            href="/auth/register" 
            className={`font-medium px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              isScrolled 
                ? 'bg-[#C87A5E] text-white hover:bg-opacity-90' // <-- CORRECTION CLÉ ICI
                : 'bg-white text-[#C87A5E] hover:bg-white/90'   // <-- CORRECTION CLÉ ICI
            }`}
          >
            S'inscrire
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isScrolled ? 'text-[#1f2937]' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white shadow-lg overflow-hidden">
            <div className="px-6 pb-6 pt-2 flex flex-col space-y-4 text-center">
              <Link href="/" className="text-[#1f2937] hover:text-[#C87A5E]">Accueil</Link>
              <Link href="/soins" className="text-[#1f2937] hover:text-[#C87A5E]">Nos Soins</Link>
              <Link href="/academie" className="text-[#1f2937] hover:text-[#C87A5E]">Académie</Link>
              <Link href="/coaching" className="text-[#1f2937] hover:text-[#C87A5E]">Coaching</Link>
              <Link href="/contact" className="text-[#1f2937] hover:text-[#C87A5E]">Contact</Link>
              <div className="border-t border-gray-200 pt-4 flex flex-col space-y-3">
                 <Link href="/auth/login" className="text-center text-[#1f2937] font-medium py-2 rounded-full bg-gray-100 hover:bg-gray-200">Se Connecter</Link>
                 <a href="/auth/register" className="text-center bg-[#C87A5E] text-white px-5 py-2 rounded-full hover:bg-opacity-90">S'inscrire</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;