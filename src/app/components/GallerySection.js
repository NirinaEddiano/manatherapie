
'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';


const allSoinsImages = [
    '/images/gallery-massage-1.jpg', '/images/gallery-massage-2.jpg', '/images/gallery-massage-3.jpg',
    '/images/process-bilan.jpg', '/images/process-soin.jpg',
    '/images/gallery-drainage-1.jpg', '/images/gallery-drainage-2.jpg',
    '/images/gallery-drainage-3.jpg', '/images/process-drainage-soin.jpg',
    '/images/gallery-massage-1.jpg', '/images/gallery-massage-2.jpg', '/images/gallery-massage-3.jpg',
    '/images/process-bilan.jpg', '/images/process-soin.jpg',
    '/images/gallery-drainage-1.jpg', '/images/gallery-drainage-2.jpg',
    '/images/gallery-drainage-3.jpg', '/images/process-drainage-soin.jpg',
];

// Les autres univers restent inchangés mais dupliqués pour la boucle
const galleryContent = [
  {
    title: "L'univers des Soins",
    images: allSoinsImages,
    direction: 'left',
  },
  {
    title: "L'univers de l'Académie",
    images: ["/images/academie-1.jpg", "/images/academie-2.jpg", "/images/academie-3.jpg", "/images/video-thumb-automassage.jpg", "/images/video-thumb-meditation.jpg", "/images/video-thumb-aromatherapie.jpg","/images/video-thumb-posture.jpg"],
    direction: 'right'
  },
  {
    title: "L'univers du Coaching",
    images: ["/images/coaching-1.jpg", "/images/coaching-2.jpg", "/images/coaching-3.jpg", "/images/coaching-1.jpg", "/images/coaching-2.jpg", "/images/coaching-3.jpg"],
    direction: 'left'
  }
];

const HorizontalScroller = ({ images, direction, title }) => { 
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const xBase = useTransform(scrollYProgress, [0, 1], direction === 'left' ? ["0%", "-50.5%"] : ["-50.5%", "0%"]);
  const smoothX = useSpring(xBase, { stiffness: 400, damping: 90 });

  
  return (
    <motion.div 
      ref={targetRef} 
      className="relative h-[300px] md:h-[400px] group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        style={{ x: isHovered ? smoothX.get() : smoothX }} 
        className="absolute flex gap-4"
      >
        {images.map((src, i) => (
          <div key={`${title}-${i}`} className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <Image src={src} alt={`Galerie ${title} image ${i}`} fill className="rounded-xl object-cover"/>
          </div>
        ))}
      </motion.div>
     
    </motion.div>
  );
};

const GallerySection = () => {
    return (
        <section className="py-24 bg-white">
             <div className="container mx-auto px-6 text-center mb-16">
                <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    Plongez dans nos univers.
                </motion.h2>
                <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    Chaque image est une fenêtre sur l'expérience qui vous attend.
                </motion.p>
            </div>
            <div className="space-y-16">
                {galleryContent.map((item, index) => (
                <div key={index} className="overflow-hidden">
                    <h3 className="text-2xl font-bold text-[#1f2937] text-center mb-6">{item.title}</h3>
                    <HorizontalScroller images={item.images} direction={item.direction} title={item.title} />
                </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
