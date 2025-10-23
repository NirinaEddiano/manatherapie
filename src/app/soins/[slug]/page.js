// src/app/soins/[slug]/page.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesDetails } from '../servicesData';
import PageHero from '@/app/components/PageHero';
import BookingBar from '@/app/components/BookingBar';
import { CheckCircle, ArrowRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const QuoteSection = ({ quote }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <section ref={targetRef} className="relative h-[60vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0">
                 <Image src={quote.bgImage} alt="Texture de fond" layout="fill" objectFit="cover" className="opacity-30"/>
            </motion.div>
             <div className="absolute inset-0 bg-black/30"></div>
             <div className="relative h-full flex items-center justify-center">
                <motion.p 
                    className="text-3xl md:text-4xl font-serif italic text-white max-w-3xl mx-auto text-center px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    "{quote.text}"
                </motion.p>
             </div>
        </section>
    );
}

export default function SoinDetailPage({ params }) {
    const { slug } = params;
    const service = servicesDetails[slug];

    // Si le service n'existe pas dans nos données
    if (!service) {
        return (
            <div className="text-center py-24">
                <h1 className="text-4xl font-bold">Service non trouvé</h1>
                <p className="mt-4">Ce service n'existe pas. Veuillez retourner à la page des soins.</p>
                <Link href="/soins" className="mt-6 inline-block bg-[#C87A5E] text-white px-6 py-2 rounded-full">
                    Voir tous les soins
                </Link>
            </div>
        );
    }

    return (
        <main>

            {service.pricing.price !== "Sur devis" && (
              <BookingBar price={service.pricing.price} duration={service.pricing.duration} />
            )}
            
            <PageHero title={service.title} text={service.subtitle} imageSrc={service.heroImage} />

            {/* Section Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl font-bold text-[#1f2937] mb-6">En quoi consiste ce soin ?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{service.introText}</p>
                    </motion.div>
                    <motion.div className="relative h-96 rounded-2xl overflow-hidden" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <Image src={service.gallery[0]} alt={service.title} layout="fill" objectFit="cover" />
                    </motion.div>
                </div>
            </section>

             <section className="py-24 bg-[#FFF7ED]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-4">Ce soin est fait pour vous si...</h2>
                    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Vous vous reconnaîtrez peut-être dans l'une de ces situations.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {service.idealFor.map((item, index) => (
                            <motion.div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-gray-200 hover:shadow-lg transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#C87A5E]/10 p-2 rounded-full">
                                        <CheckCircle size={24} className="text-[#C87A5E]" />
                                    </div>
                                    <p className="font-semibold text-gray-800 text-lg mt-1">{item}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-40 bg-gray-800">
                 <Image src={service.quote.bgImage} alt="Texture de fond" layout="fill" objectFit="cover" className="opacity-10"/>
                 <div className="relative container mx-auto px-6 text-center">
                    <motion.p 
                        className="text-3xl md:text-4xl font-serif italic text-white max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        "{service.quote.text}"
                    </motion.p>
                 </div>
            </section>


            {/* Section Bienfaits */}
             <section className="py-30 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#1f2937] mb-12">Les Bienfaits Clés</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.benefits.map((benefit, index) => (
                             <motion.div key={index} className="bg-gray-50 p-8 rounded-2xl text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <Award className="mx-auto text-[#C87A5E] mb-4" size={40} />
                                <h3 className="text-lg font-bold text-[#1f2937]">{benefit}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Section Déroulement (Timeline) */}
           <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#1f2937] mb-16 text-center">Le Déroulement de la Séance</h2>
                    {service.process.map((step, index) => (
                         <motion.div 
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                         >
                            <div className={`relative h-80 rounded-2xl overflow-hidden ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                                <Image src={step.image} alt={step.title} layout="fill" objectFit="cover"/>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-bold text-[#C87A5E]/30">0{index + 1}</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#1f2937] mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                         </motion.div>
                    ))}
                </div>
            </section>

              <section className="py-24 bg-white">
                <div className="w-full"> {/* Conteneur pleine largeur */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={true}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next-gallery',
                                prevEl: '.swiper-button-prev-gallery',
                            }}
                            pagination={{ clickable: true }}
                            className="cinematic-swiper !py-8"
                        >
                            {service.fullGallery.map((img, index) => (
                               <SwiperSlide key={index} className="!w-[500px] !max-w-[600px] sm:!max-w-[320px] md:!max-w-[400px]">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                        <Image src={img} alt={`Galerie ${service.title} ${index + 1}`} fill className="object-cover"/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Flèches de navigation personnalisées */}
                        <div className="swiper-button-prev-gallery absolute left-4 md:left-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/70 hover:bg-white transition shadow-md cursor-pointer text-[#1f2937]"><ChevronLeft size={32}/></div>
                        <div className="swiper-button-next-gallery absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/70 hover:bg-white transition shadow-md cursor-pointer text-[#1f2937]"><ChevronRight size={32}/></div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#FFF7ED]">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="relative bg-white max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="font-semibold text-[#C87A5E] uppercase tracking-wider">Tarif & Durée</p>
                                <p className="text-6xl font-bold text-[#1f2937] my-3">{service.pricing.price}</p>
                                <p className="text-xl text-gray-600">~{service.pricing.duration}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-gray-600">{service.pricing.details}</p>
                                <Link href="/contact" className="group mt-2 w-full relative inline-flex items-center justify-center bg-[#1f2937] text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300">
                                    <span className="transition-transform duration-300 group-hover:-translate-x-3">Prendre Rendez-vous</span>
                                    <div className="absolute right-8 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-6"><ArrowRight size={20} /></div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* CTA Flottant pour la réservation */}
            <motion.div 
                className="fixed bottom-6 right-6 z-20"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <Link href="/contact" className="bg-[#C87A5E] text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:bg-[#b56b50] transition-colors flex items-center gap-2">
                    Réserver ce Soin
                </Link>
            </motion.div>
        </main>
    );
}