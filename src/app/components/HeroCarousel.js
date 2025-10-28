
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const slides = [
  {
    image: '/images/hero-soins.jpg',
    title: "L'Art du Toucher. La Science du Bien-être.",
    text: "Explorez nos soins conçus pour réaligner votre corps et apaiser votre esprit.",
    buttonText: "Découvrir nos soins",
    buttonLink: "/soins",
    layout: 'left' 
  },
  {
    image: '/images/hero-academie.jpg',
    title: "Devenez Maître de Votre Pratique.",
    text: "Accédez à nos formations complètes en ligne et apprenez à votre rythme, où que vous soyez.",
    buttonText: "Explorer l'académie",
    buttonLink: "/academie",
    layout: 'center' 
  },
  {
    image: '/images/hero-coaching.jpg',
    title: "Révélez Votre Potentiel. Ensemble.",
    text: "Nos programmes de coaching vous accompagnent pour atteindre vos objectifs personnels et professionnels.",
    buttonText: "Commencer le coaching",
    buttonLink: "/coaching",
    layout: 'right' 
  }
];

// --- Animations pour le texte ---
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const HeroCarousel = () => {
  return (
    <div className="h-screen w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full w-full bg-black/40 bg-blend-multiply flex items-center">
                <div className="container mx-auto px-6 text-white">
                  
                  <motion.div 
                    className={`max-w-2xl ${slide.layout === 'center' ? 'mx-auto text-center' : 'text-left'}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.3 }}
                  >
                    <motion.h1 
                      className="text-4xl md:text-6xl font-bold leading-tight mb-4"
                      variants={textVariants}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      className="text-lg md:text-xl mb-8"
                      variants={textVariants}
                    >
                      {slide.text}
                    </motion.p>
                    
                    <motion.div variants={textVariants}>
                      <Link 
                        href={slide.buttonLink} 
                        className="inline-block bg-[#af4d30] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b56b50] transition-colors duration-300 transform hover:scale-105"
                      >
                        {slide.buttonText}
                      </Link>
                    </motion.div>
                  </motion.div>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;