
import PageHero from '../components/PageHero';
import ServicesGrid from '../components/ServicesGrid';
import ApproachSection from '../components/ApproachSection'; 
import SoinsFAQSection from '../components/SoinsFAQSection';
import FloatingCtaButton from '../components/FloatingCtaButton'; 

export const metadata = {
  title: "Manatherapie - Soins",
  description: "Découvrez Manatherapie, votre espace dédié à l'harmonie du corps et de l'esprit. Explorez nos soins, formations en ligne et programmes de coaching.",
};

export default function SoinsPage() {
  return (
    <main>
      <PageHero 
        title="L'Art de Prendre Soin"
        text="Chaque soin est une conversation silencieuse avec votre corps, une invitation à retrouver votre équilibre naturel."
        imageSrc="/images/soins-hero-bg.jpg"
      />
      <ServicesGrid />
      <ApproachSection /> 
      <SoinsFAQSection />
      <FloatingCtaButton 
        href="/contact" 
        text="Réserver un Soin" 
      />
    </main>
  );
}