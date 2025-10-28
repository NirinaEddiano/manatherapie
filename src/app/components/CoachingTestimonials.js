// src/app/components/CoachingTestimonials.js
'use client';

import { Star } from 'lucide-react';

// On utilise les données passées en props
const TestimonialCard = ({ name, role, text }) => (
  <div className=" flex-shrink-0 w-80 md:w-96 p-8 mx-4 bg-white border border-gray-100 rounded-2xl shadow-lg flex flex-col justify-between h-[280px]">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
      </div>
      <p className="text-gray-700 italic">"{text}"</p>
    </div>
    <div className="text-right mt-4">
      <p className="font-bold text-[#1f2937]">{name}</p>
      <p className="text-sm text-[#af4d30]">{role}</p>
    </div>
  </div>
);

const CoachingTestimonials = ({ testimonials }) => {
  // On duplique la liste pour la boucle
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative z-[2] marquee-container-coaching">
      <div className="marquee-track-coaching">
        {duplicatedTestimonials.map((t, i) => <TestimonialCard key={`coaching-${i}`} {...t} />)}
      </div>
    </div>
  );
};

export default CoachingTestimonials;