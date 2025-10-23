
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';

const blogPosts = [
  {
    image: '/images/blog-1.jpg',
    category: 'Bien-être',
    title: '5 Rituels du Matin pour une Journée Sereine',
    excerpt: 'Découvrez comment quelques minutes chaque matin peuvent transformer radicalement votre énergie et votre humeur...',
    link: '/blog/rituels-matin'
  },
  {
    image: '/images/blog-2.jpg',
    category: 'Soins du Corps',
    title: 'Comprendre le Drainage Lymphatique : Mythes et Réalités',
    excerpt: 'Ce soin puissant est souvent mal compris. Démêlons le vrai du faux pour révéler ses incroyables bienfaits...',
    link: '/blog/drainage-lymphatique'
  },
  {
    image: '/images/blog-3.jpg',
    category: 'Techniques',
    title: "L'Art de l'Automassage : Soulager les Tensions",
    excerpt: 'Pas le temps pour un rendez-vous ? Apprenez des gestes simples et efficaces pour vous soulager au bureau ou à la maison...',
    link: '/blog/automassage'
  },
  {
    image: '/images/blog-4.jpg',
    category: 'Harmonie',
    title: 'Comment Créer un Espace de Méditation chez Soi ?',
    excerpt: 'Votre sanctuaire personnel n\'a pas besoin d\'être grand. Quelques astuces pour créer un coin de paix qui vous ressemble...',
    link: '/blog/espace-meditation'
  },
  {
    image: '/images/blog-5.jpg',
    category: 'Aromathérapie',
    title: 'Les Huiles Essentielles : Votre Trousse de Secours',
    excerpt: 'Lavande, menthe poivrée, tea tree... Découvrez les indispensables à avoir toujours sous la main et comment les utiliser...',
    link: '/blog/huiles-essentielles'
  },
  {
    image: '/images/blog-6.png',
    category: 'Coaching',
    title: 'Définir ses Objectifs de Vie : La Méthode du Coaching',
    excerpt: 'Arrêtez de rêver votre vie et commencez à la vivre. Une méthode simple pour clarifier votre vision et passer à l\'action...',
    link: '/blog/objectifs-de-vie'
  },
    {
    image: '/images/blog-7.jpg',
    category: 'Sommeil',
    title: 'Mieux Dormir : 3 Techniques de Relaxation Efficaces',
    excerpt: 'Le sommeil est le pilier de la santé. Si vous avez du mal à vous endormir, ces techniques testées et approuvées sont pour vous...',
    link: '/blog/mieux-dormir'
  },
  {
    image: '/images/blog-8.jpg',
    category: 'Nutrition',
    title: 'Nutrition & Bien-être : Ce que votre Assiette dit de Vous',
    excerpt: 'L\'alimentation est notre premier médicament. Explorez le lien puissant entre ce que vous mangez et comment vous vous sentez...',
    link: '/blog/nutrition-bien-etre'
  },
];

const BlogSection = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="py-24 bg-[#FFFBF9]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-2">Inspirations & Conseils</h2>
            <p className="text-lg text-gray-600">Des ressources pour nourrir votre corps et votre esprit.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 mt-4 md:mt-0">
            <button ref={navigationPrevRef} className="p-3 rounded-full bg-white border border-gray-200 text-[#1f2937] hover:bg-[#C87A5E] hover:text-white transition-all duration-300">
              <ArrowLeft size={24} />
            </button>
            <button ref={navigationNextRef} className="p-3 rounded-full bg-white border border-gray-200 text-[#1f2937] hover:bg-[#C87A5E] hover:text-white transition-all duration-300">
              <ArrowRight size={24} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-4" // Ajoute un padding en bas pour l'ombre
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="group"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-56">
                      <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-semibold text-[#C87A5E] mb-2">{post.category}</p>
                      <h3 className="text-xl font-bold text-[#1f2937] mb-3 h-20">{post.title}</h3>
                      <p className="text-gray-600 mb-4 h-24">{post.excerpt}</p>
                      <Link href={post.link} className="font-semibold text-[#1f2937] hover:text-[#C87A5E] transition-colors">
                        Lire la suite →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;