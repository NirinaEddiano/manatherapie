
'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const topRowTestimonials = [
  { name: "Clara D.", service: "Cliente en Soins", quote: "J'ai quitté la séance en flottant. Ce n'était pas juste un massage, c'était une véritable reconnexion avec mon corps." },
  { name: "Julien R.", service: "Participant Coaching", quote: "Le coaching a changé ma perspective. J'avais les réponses en moi, Manatherapie m'a juste aidé à les trouver." },
  { name: "Sophie L.", service: "Adepte des Massages", quote: "Après des mois de tensions au dos, j'ai enfin trouvé un soulagement durable. Une technique incroyable et une écoute rare." },
  { name: "Marc T.", service: "Élève de l'Académie", quote: "Les formations sont d'une clarté bluffante. J'applique les techniques apprises tous les jours, c'est un vrai cadeau." },
  { name: "Émilie B.", service: "Cliente en Drainage", quote: "Je me sens plus légère, physiquement et mentalement. Les résultats ont dépassé toutes mes attentes." },
  { name: "Thomas P.", service: "Participant Ateliers", quote: "Un atelier qui m'a ouvert les yeux. L'énergie du groupe et la bienveillance de l'accompagnement sont puissantes." },
  { name: "Laura M.", service: "Cliente en Soins", quote: "L'ambiance, les odeurs, le soin... tout est pensé pour une déconnexion totale. C'est ma bulle d'oxygène." },
  { name: "Alexandre G.", service: "Élève de l'Académie", quote: "Enfin un contenu qui va à l'essentiel, sans blabla. C'est concret, applicable et ça change la vie." },
];

const bottomRowTestimonials = [
    { name: "Isabelle F.", service: "Participante Coaching", quote: "J'étais bloquée dans ma carrière. En quelques séances, j'ai retrouvé confiance et j'ai osé le changement. Infinie gratitude." },
    { name: "David C.", service: "Adepte des Massages", quote: "Le meilleur investissement pour ma santé. Le stress a littéralement fondu, et mon sommeil s'est amélioré." },
    { name: "Manon V.", service: "Élève de l'Académie", quote: "Je ne pensais pas pouvoir apprendre autant en ligne. Les vidéos sont d'une qualité exceptionnelle." },
    { name: "Hugo S.", service: "Client en Soins", quote: "Une approche très humaine et respectueuse. On se sent immédiatement en confiance, c'est précieux." },
    { name: "Chloé N.", service: "Participante Ateliers", quote: "J'ai rencontré des personnes formidables et j'ai appris des outils que j'utilise pour toute ma famille." },
    { name: "Mathieu L.", service: "Client en Drainage", quote: "Les effets sur la circulation et la rétention d'eau sont visibles très rapidement. Je recommande à 100%." },
    { name: "Fanny P.", service: "Cliente en Coaching", quote: "Ce n'est pas une thérapie passive. On est acteur de son changement, et c'est ce qui fait toute la différence." },
    { name: "Vincent A.", service: "Adepte des Massages", quote: "Chaque séance est unique, parfaitement adaptée à mon état du moment. C'est du sur-mesure absolu." },
    { name: "Juliette G.", service: "Élève de l'Académie", quote: "Le support est très réactif. On ne se sent jamais seul face aux modules, c'est très rassurant pour progresser." },
    { name: "Antoine D.", service: "Client en Soins", quote: "Une parenthèse enchantée dans un quotidien chargé. C'est devenu mon rituel indispensable pour tenir le rythme." },
];

const TestimonialCard = ({ name, service, quote }) => (
  <div className="flex-shrink-0 z-[20] w-80 md:w-96 p-6 mx-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="flex items-center mb-3">
      {[...Array(4)].map((_, i) => <Star key={`fill-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />)}
      <Star className="w-5 h-5 text-yellow-400" />
    </div>
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <div>
      <p className="font-bold text-[#1f2937]">{name}</p>
      <p className="text-sm text-[#af4d30]">{service}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-0 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">Leurs histoires, notre fierté.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Nous ne changeons pas des vies, nous aidons simplement les gens à révéler la leur.</p>
        </motion.div>
      </div>

      <motion.div 
        className="relative z-[20] marquee-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="marquee-track-left">
          {[...topRowTestimonials, ...topRowTestimonials].map((t, i) => <TestimonialCard key={`top-${i}`} {...t} />)}
        </div>
        <div className="marquee-track-right mt-8">
          {[...bottomRowTestimonials, ...bottomRowTestimonials].map((t, i) => <TestimonialCard key={`bottom-${i}`} {...t} />)}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;