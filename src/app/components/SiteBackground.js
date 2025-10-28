// src/app/components/SiteBackground.js
'use client';
import Image from 'next/image';

const SiteBackground = () => {
  return (
    <div className="fixed inset-0 z-[1] opacity-20">
      <Image
        src="/images/manatherapy-pattern.jpg"
        alt="Motifs de bien-être en arrière-plan"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default SiteBackground;