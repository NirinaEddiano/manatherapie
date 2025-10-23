
import PageHero from '../components/PageHero';
import ContactFormSection from '../components/ContactFormSection';

export const metadata = {
  title: "Manatherapie - Contact",
  description: "Découvrez Manatherapie, votre espace dédié à l'harmonie du corps et de l'esprit. Explorez nos soins, formations en ligne et programmes de coaching.",
};

export default function ContactPage() {
  return (
    <main>
       <PageHero 
        title="Faisons connaissance."
        text="Nous sommes là pour répondre à vos questions et vous guider vers le chemin qui vous correspond le mieux."
        imageSrc="/images/contact-hero-bg.jpg"
      />
       <ContactFormSection />
    </main>
  );
}