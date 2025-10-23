// src/app/academie/academyData.js

export const courses = [
  { 
    id: 1, type: 'video', slug: 'art-automassage',
    title: "L'Art de l'Automassage", category: 'Massage', price: '49.99€', 
    image: '/images/video-thumb-automassage.jpg', rating: 4.8, reviews: 124,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "3h 20min", level: "Débutant",
    description: "Apprenez à soulager vos propres tensions, à améliorer votre circulation et à vous reconnecter à votre corps grâce à des techniques d'automassage simples et puissantes que vous pouvez pratiquer n'importe où.",
    whatYoullLearn: [
        "Identifier et soulager les points de tension dans la nuque, les épaules et le dos.",
        "Utiliser des techniques de respiration pour approfondir la relaxation.",
        "Créer votre propre routine de bien-être de 10 minutes par jour.",
        "Comprendre les bases de l'anatomie musculaire."
    ],
    modules: [
        { title: "Introduction & Bienfaits", duration: "15 min" },
        { title: "Techniques pour la Nuque & les Épaules", duration: "45 min" },
        { title: "Soulager le Bas du Dos", duration: "40 min" },
        { title: "Automassage des Mains & Pieds", duration: "30 min" },
        { title: "Créer sa Routine", duration: "20 min" },
        { title: "Bonus : Méditation Guidée", duration: "10 min" },
    ]
  },
  { 
    id: 3, type: 'video', slug: 'meditation-guidee-debutants',
    title: "Méditation Guidée pour Débutants", category: 'Bien-être', price: '39.99€', 
    image: '/images/video-thumb-meditation.jpg', rating: 4.7, reviews: 98,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "2h 45min", level: "Débutant",
    description: "Découvrez les fondements de la méditation de pleine conscience. Ce cours vous guide pas à pas pour calmer votre esprit, réduire le stress et cultiver une présence attentive au quotidien.",
    whatYoullLearn: [
        "Maîtriser les postures de méditation de base.",
        "Utiliser le souffle comme ancre pour l'attention.",
        "Gérer les pensées distrayantes sans jugement.",
        "Intégrer de courtes pauses méditatives dans votre journée."
    ],
    modules: [
        { title: "Qu'est-ce que la Pleine Conscience ?", duration: "20 min" },
        { title: "La Posture et le Souffle", duration: "30 min" },
        { title: "Méditation Assise Guidée", duration: "45 min" },
        { title: "Le Scan Corporel", duration: "40 min" },
        { title: "Méditer au Quotidien", duration: "30 min" },
    ]
  },
  { 
    id: 5, type: 'video', slug: 'bases-aromatherapie',
    title: "Bases de l'Aromathérapie", category: 'Nature', price: '59.99€', 
    image: '/images/video-thumb-aromatherapie.jpg', rating: 4.9, reviews: 180,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "4h 10min", level: "Intermédiaire",
    description: "Plongez dans le monde fascinant des huiles essentielles. Ce cours complet vous apprend à les utiliser en toute sécurité pour votre bien-être physique et émotionnel.",
    whatYoullLearn: [
        "Différencier les huiles essentielles, hydrolats et huiles végétales.",
        "Connaître les 10 huiles essentielles indispensables et leurs propriétés.",
        "Maîtriser les différentes voies d'administration (diffusion, cutanée...).",
        "Créer vos propres synergies pour le sommeil, le stress ou l'énergie."
    ],
    modules: [
        { title: "Introduction à l'Aromathérapie Scientifique", duration: "30 min" },
        { title: "Les Précautions d'Emploi", duration: "30 min" },
        { title: "Top 10 des Huiles Essentielles", duration: "1h 30min" },
        { title: "Les Huiles Végétales, vos Alliées", duration: "40 min" },
        { title: "Atelier Pratique : Créer ses Synergies", duration: "1h" },
    ]
  },
  { 
    id: 7, type: 'video', slug: 'introduction-nutrition-intuitive',
    title: "Introduction à la Nutrition Intuitive", category: 'Nutrition', price: '49.99€', 
    image: '/images/video-thumb-nutrition.jpg', rating: 4.7, reviews: 89,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "3h", level: "Débutant",
    description: "Libérez-vous de la culture des régimes et réapprenez à écouter votre corps. Ce cours vous donne les clés pour faire la paix avec la nourriture et retrouver une relation saine avec votre alimentation.",
    whatYoullLearn: [
        "Comprendre les 10 principes de l'alimentation intuitive.",
        "Reconnaître et honorer vos signaux de faim et de satiété.",
        "Abandonner la mentalité 'bons' vs 'mauvais' aliments.",
        "Gérer vos émotions sans utiliser la nourriture."
    ],
    modules: [
        { title: "Sortir de la Culture des Régimes", duration: "30 min" },
        { title: "Écouter sa Faim et sa Satiété", duration: "45 min" },
        { title: "Faire la Paix avec les Aliments", duration: "45 min" },
        { title: "Manger pour le Bien-être, pas pour le Poids", duration: "30 min" },
        { title: "Le Mouvement Intuitif", duration: "30 min" },
    ]
  },
  { 
    id: 9, type: 'video', slug: 'corriger-posture-bureau',
    title: "Corriger sa Posture au Bureau", category: 'Bien-être', price: '29.99€', 
    image: '/images/video-thumb-posture.jpg', rating: 4.5, reviews: 75,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "1h 30min", level: "Débutant",
    description: "Le mal de dos n'est pas une fatalité. Découvrez des exercices simples et des ajustements ergonomiques pour transformer votre espace de travail et préserver votre santé posturale.",
    whatYoullLearn: [
        "Régler correctement votre chaise et votre écran.",
        "Pratiquer des étirements discrets directement à votre bureau.",
        "Renforcer les muscles profonds du dos et de la sangle abdominale.",
        "Adopter les bons réflexes pour vous lever et vous asseoir."
    ],
    modules: [
        { title: "L'Ergonomie du Poste de Travail", duration: "25 min" },
        { title: "Exercices d'Éveil Musculaire", duration: "20 min" },
        { title: "Étirements pour la Nuque et les Épaules", duration: "25 min" },
        { title: "Routine de 5 minutes à faire chaque heure", duration: "20 min" },
    ]
  },
  // --- Ebooks ---
  { 
    id: 2, type: 'ebook', slug: 'guide-detox-7-jours',
    title: "Le Guide de la Détox en 7 Jours", category: 'Nutrition', price: '19.99€', 
    image: '/images/ebook-thumb-detox.jpg', rating: 4.9, reviews: 210,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "82 pages", level: "Débutant",
    description: "Un guide complet pour nettoyer votre organisme en douceur. Inclus : des recettes gourmandes, des listes de courses et des conseils pour chaque jour de votre semaine de détox.",
    whatYoullLearn: [
        "Les principes d'une détox saine et sans danger.",
        "Quels aliments privilégier et lesquels éviter.",
        "Des recettes faciles pour le petit-déjeuner, le déjeuner et le dîner.",
        "Comment gérer les fringales et maintenir sa motivation."
    ],
    modules: [
        { title: "Chapitre 1 : Préparer sa Détox", duration: "10 pages" },
        { title: "Chapitre 2 : La Liste de Courses Idéale", duration: "5 pages" },
        { title: "Chapitre 3 : Jour 1 à 7 - Menus & Recettes", duration: "50 pages" },
        { title: "Chapitre 4 : L'Après-Détox", duration: "10 pages" },
        { title: "Bonus : Recettes de Jus & Smoothies", duration: "7 pages" },
    ]
  },
  { 
    id: 4, type: 'ebook', slug: 'retrouver-sommeil-reparateur',
    title: "Retrouver un Sommeil Réparateur", category: 'Sommeil', price: '24.99€', 
    image: '/images/ebook-thumb-sommeil.jpg', rating: 4.8, reviews: 156,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "110 pages", level: "Débutant",
    description: "Explorez les mécanismes du sommeil et découvrez des stratégies concrètes pour vaincre l'insomnie. Ce guide est une feuille de route complète pour des nuits enfin paisibles.",
    whatYoullLearn: [
        "Comprendre les cycles du sommeil et leur importance.",
        "Créer un environnement propice au repos (le 'sanctuaire du sommeil').",
        "Les aliments et plantes qui favorisent l'endormissement.",
        "Des techniques de relaxation à pratiquer avant de dormir."
    ],
    modules: [
        { title: "Chapitre 1 : La Science du Sommeil", duration: "20 pages" },
        { title: "Chapitre 2 : Votre Chambre, un Sanctuaire", duration: "25 pages" },
        { title: "Chapitre 3 : Alimentation & Sommeil", duration: "30 pages" },
        { title: "Chapitre 4 : Rituels du Soir", duration: "25 pages" },
        { title: "Bonus : Journal de Sommeil à Remplir", duration: "10 pages" },
    ]
  },
  { 
    id: 6, type: 'ebook', slug: 'gerer-stress-quotidien',
    title: "Gérer son Stress au Quotidien", category: 'Bien-être', price: '19.99€', 
    image: '/images/ebook-thumb-stress.jpg', rating: 4.6, reviews: 112,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "95 pages", level: "Débutant",
    description: "Le stress n'est pas votre ennemi. Apprenez à le comprendre, à l'apprivoiser et à le transformer en énergie positive grâce à des outils pratiques issus des thérapies cognitives et comportementales.",
    whatYoullLearn: [
        "Identifier vos sources de stress personnelles.",
        "Des exercices de respiration à faire en 5 minutes pour calmer une crise.",
        "La technique de la 'cohérence cardiaque'.",
        "Comment organiser votre temps pour réduire la charge mentale."
    ],
    modules: [
        { title: "Chapitre 1 : Comprendre le Mécanisme du Stress", duration: "15 pages" },
        { title: "Chapitre 2 : La Respiration, votre Ancre", duration: "25 pages" },
        { title: "Chapitre 3 : Gérer ses Pensées", duration: "30 pages" },
        { title: "Chapitre 4 : Un Mode de Vie Anti-Stress", duration: "25 pages" },
    ]
  },
  { 
    id: 8, type: 'ebook', slug: 'pouvoir-plantes-medicinales',
    title: "Le Pouvoir des Plantes Médicinales", category: 'Nature', price: '29.99€', 
    image: '/images/ebook-thumb-plantes.jpg', rating: 4.9, reviews: 250,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "150 pages", level: "Intermédiaire",
    description: "Ce guide complet est une véritable encyclopédie moderne de l'herboristerie. Découvrez les portraits détaillés de 50 plantes, leurs bienfaits et comment les utiliser en toute sécurité (tisanes, macérats, cataplasmes...).",
    whatYoullLearn: [
        "Les bases de la cueillette et du séchage.",
        "Créer sa propre pharmacie naturelle pour les maux du quotidien.",
        "Les fiches détaillées de 50 plantes essentielles.",
        "Des recettes de tisanes, baumes et sirops."
    ],
    modules: [
        { title: "Partie 1 : L'Herboristerie pour Débutants", duration: "30 pages" },
        { title: "Partie 2 : Monographies de 50 Plantes", duration: "100 pages" },
        { title: "Partie 3 : L'Atelier de l'Herboriste (Recettes)", duration: "20 pages" },
    ]
  },
  { 
    id: 10, type: 'ebook', slug: 'booster-energie-naturellement',
    title: "Booster son Énergie Naturellement", category: 'Bien-être', price: '19.99€', 
    image: '/images/ebook-thumb-energie.jpg', rating: 4.8, reviews: 198,
    author: "Laura M.", authorImage: "/images/author.jpg",
    duration: "78 pages", level: "Débutant",
    description: "Fatigué(e) des coups de barre de l'après-midi ? Découvrez des stratégies simples et naturelles basées sur l'alimentation, le mouvement et la gestion du rythme circadien pour retrouver une énergie stable et durable.",
    whatYoullLearn: [
        "Les aliments 'coup de fouet' et ceux qui vous plombent.",
        "L'importance de la lumière naturelle sur votre horloge biologique.",
        "La méthode de la 'sieste flash' pour recharger les batteries.",
        "Des routines matinales et vespérales pour optimiser votre énergie."
    ],
    modules: [
        { title: "Chapitre 1 : L'Énergie, comment ça marche ?", duration: "15 pages" },
        { title: "Chapitre 2 : L'Alimentation Énergétique", duration: "25 pages" },
        { title: "Chapitre 3 : Le Mouvement et la Lumière", duration: "20 pages" },
        { title: "Chapitre 4 : Bâtir ses Rituels", duration: "18 pages" },
    ]
  }
];

// NOUVEAU: Données pour les faux commentaires
export const fakeReviews = [
    { name: "Sophie D.", rating: 5, comment: "Incroyable ! J'ai appris des gestes qui ont changé mon quotidien. La formatrice est très pédagogue." },
    { name: "Julien M.", rating: 5, comment: "Contenu de très haute qualité. Les vidéos sont claires, concises et vont droit au but. Je recommande à 100%." },
    { name: "Chloé L.", rating: 4, comment: "Une excellente formation. J'aurais juste aimé un module supplémentaire sur les jambes, mais le contenu existant est déjà très riche." },
];