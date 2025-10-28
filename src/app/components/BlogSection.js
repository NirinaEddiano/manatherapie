'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
// --- CORRECTION : IMPORTER Navigation ---
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPostsList } from '@/app/blog/blogData';

// --- IMPORTER LE CSS DE NAVIGATION ---
import 'swiper/css';
import 'swiper/css/navigation';

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
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-2">Inspirations & Conseils</h2>
            <p className="text-lg text-gray-600">Des ressources pour nourrir votre corps et votre esprit.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 mt-4 md:mt-0">
            <button ref={navigationPrevRef} className="p-3 rounded-full bg-white border border-gray-200 text-[#1f2937] hover:bg-[#af4d30] hover:text-white transition-all duration-300">
              <ArrowLeft size={24} />
            </button>
            <button ref={navigationNextRef} className="p-3 rounded-full bg-white border border-gray-200 text-[#1f2937] hover:bg-[#af4d30] hover:text-white transition-all duration-300">
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
            className="!pb-4"
          >
            {blogPostsList.map((post, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="group h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-56">
                      {/* --- CORRECTION : IMAGE MODERNISÉE --- */}
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm font-semibold text-[#af4d30] mb-2">{post.category}</p>
                      <h3 className="text-xl font-bold text-[#1f2937] mb-3 h-16">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <Link href={post.link} className="font-semibold text-[#1f2937] hover:text-[#af4d30] transition-colors self-start mt-auto">
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