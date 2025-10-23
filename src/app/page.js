
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection"; 
import ServicesSection from "./components/ServicesSection";
import AcademyTeaser from "./components/AcademyTeaser";
import CoachingTeaser from "./components/CoachingTeaser";
import GallerySection from "./components/GallerySection";
import KeyServicesSection from "./components/KeyServicesSection";
import TestimonialsSection from "./components/TestimonialsSection"; 
import BlogSection from "./components/BlogSection"; 
import CTASection from "./components/CTASection";

export const metadata = {
  title: "Manatherapie - Accueil",
  description: "Découvrez Manatherapie, votre espace dédié à l'harmonie du corps et de l'esprit. Explorez nos soins, formations en ligne et programmes de coaching.",
};

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection /> 
      <ServicesSection />
      <KeyServicesSection />
      <AcademyTeaser /> 
      <CoachingTeaser />
      <GallerySection /> 
      <TestimonialsSection />
      <BlogSection /> 
      <CTASection />
    </main>
  );
}