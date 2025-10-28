'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPostsDetails, blogPostsList } from '../blogData';
import { ArrowLeft, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlogPostPage({ params }) {
    const { slug } = params;
    const post = blogPostsDetails[slug];
    const otherPosts = blogPostsList.filter(p => p.slug !== slug);


    if (!post) {
        return <div className="text-center py-24">Article non trouvé</div>;
    }

    return (
        <main>
            {/* --- Hero de l'Article --- */}
            <section className="relative z-[2] h-[60vh] min-h-[400px] text-white ">
                <Image src={post.image} alt={post.title} fill className="object-cover "/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/90"></div>

                <div className="relative h-full flex flex-col justify-end">
                    <div className="container mx-auto px-6 pb-12">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <p className="font-semibold text-[#FADDAA]">{post.category}</p>
                            <h1 className="text-4xl md:text-6xl font-bold my-3 max-w-4xl">{post.title}</h1>
                            <div className="flex items-center gap-4 text-sm text-gray-300">
                                <span>Par {post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                                <span className="flex items-center gap-1"><Clock size={14}/> {post.readingTime}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Contenu de l'Article --- */}
             <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div 
                        className="text-lg leading-relaxed text-gray-700 space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {post.content.map((paragraph, index) => {
                            // Si le paragraphe commence par un numéro, on le stylise comme un titre de section
                            if (/^\d+\./.test(paragraph)) {
                                return (
                                    <h2 key={index} className="text-2xl font-bold text-[#1f2937] pt-6 !mt-12 border-t border-gray-200">
                                        {paragraph}
                                    </h2>
                                );
                            }
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </motion.div>
                </div>
            </section>
            
            

            {/* --- Section "Autres Articles" en Carrousel --- */}
             <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold">Continuez votre lecture</h2>
                        <div className="flex gap-2">
                            <button className="blog-swiper-prev p-2 rounded-full bg-white hover:bg-gray-200 transition shadow-md"><ChevronLeft/></button>
                            <button className="blog-swiper-next p-2 rounded-full bg-white hover:bg-gray-200 transition shadow-md"><ChevronRight/></button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.blog-swiper-next',
                            prevEl: '.blog-swiper-prev',
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="!pb-12" // Pour la pagination
                    >
                        {otherPosts.map((p, i) => (
                            <SwiperSlide key={i}>
                                <Link href={p.link} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                                    <div className="relative h-48">
                                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300"/>
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <p className="text-sm font-semibold text-[#af4d30]">{p.category}</p>
                                        <h3 className="font-bold my-2 flex-grow">{p.title}</h3>
                                        <span className="text-sm text-gray-500 mt-2 self-start">Lire la suite →</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}