export const servicesDetails = {
    manaxface: {
        slug: 'manaxface',
        title: "MANAXFACE",
        subtitle: "Le drainage lymphatique du visage pour un éclat instantané.",
        heroImage: '/images/hero-manaxface.jpg',
        introText: "Le MANAXFACE est un protocole exclusif de drainage lymphatique manuel du visage. Il vise à désengorger les tissus, réduire les poches et les cernes, et sculpter l'ovale du visage pour un effet liftant naturel et un teint lumineux.",
        idealFor: ["Visage gonflé, poches et cernes", "Teint terne et fatigué", "Perte de fermeté de l'ovale du visage", "Désir d'un 'glow up' naturel avant un événement"],
        benefits: ["Effet 'bonne mine' immédiat", "Traits du visage redessinés", "Peau détoxifiée et éclatante", "Réduction des signes de fatigue"],
        process: [
            { title: "Nettoyage & Préparation", description: "La peau est délicatement nettoyée et préparée avec une huile végétale neutre pour débuter le soin.", image: "/images/process-visage-nettoyage.jpg" },
            { title: "Manœuvres Drainantes", description: "Des pompages et des mouvements lents sont effectués du décolleté vers le visage pour stimuler les ganglions lymphatiques.", image: "/images/process-visage-drainage.jpg" },
            { title: "Modelage & 'Lifting'", description: "Des gestes plus appuyés viennent sculpter les contours, notamment les pommettes et la mâchoire.", image: "/images/process-visage-modelage.jpg" },
            { title: "Hydratation Finale", description: "Application d'un soin hydratant pour apaiser, protéger la peau et révéler son éclat.", image: "/images/process-visage-hydratation.jpg" }
        ],
        quote: {
            text: "Révélez la lumière naturelle de votre visage.",
            bgImage: "/images/process-visage-nettoyage.jpg"
        },
        pricing: {
            options: [
                { name: "Séance unique", price: "30€", duration: "25 min" },
                { name: "Cure de 3 séances", price: "80€", duration: "3 x 25 min" },
                { name: "Cure de 6 séances", price: "140€", duration: "6 x 25 min" }
            ],
            details: "La cure est idéale pour des résultats durables et une amélioration visible de la qualité de la peau."
        },
        gallery: ['/images/hero-manaxface.jpg','/images/gallery-visage-1.jpg', '/images/gallery-visage-2.jpg', '/images/gallery-visage-3.jpg'],
        fullGallery: [
            '/images/hero-manaxface.jpg', '/images/process-visage-nettoyage.jpg', '/images/gallery-visage-1.jpg', 
            '/images/process-visage-drainage.jpg', '/images/gallery-visage-2.jpg', '/images/process-visage-modelage.jpg',
            '/images/gallery-visage-3.jpg', '/images/process-visage-hydratation.jpg'
        ],
        subServices: [] // Pas de sous-service pour celui-ci
    },
    manaxdrain: {
        slug: 'manaxdrain',
        title: "MANAXDRAIN",
        subtitle: "Le drainage lymphatique corps pour une détox profonde.",
        heroImage: '/images/hero-manaxdrain.jpeg',
        introText: "Le MANAXDRAIN est une méthode de drainage lymphatique manuel du corps entier qui vise à stimuler la circulation de la lymphe pour détoxifier l'organisme, réduire la rétention d'eau et la cellulite aqueuse. Une véritable remise à zéro pour votre corps.",
        idealFor: ["Sensation de jambes lourdes", "Rétention d'eau, œdème", "Ballonnements et transit lent", "Besoin d'une détox globale du corps"],
        benefits: ["Sensation de légèreté immédiate", "Silhouette affinée et dégonflée", "Amélioration du système immunitaire", "Bien-être digestif"],
        process: [
            { title: "Diagnostic Personnalisé", description: "Nous évaluons les zones de rétention et définissons les objectifs de la séance.", image: "/images/process-corps-bilan.jpeg" },
            { title: "Manœuvres Drainantes", description: "Des mouvements de pompage lents et rythmés sont appliqués sur le corps pour stimuler la circulation.", image: "/images/process-corps-drainage.jpg" },
            { title: "Focus Zones Ciblées", description: "Une attention particulière est portée aux jambes, au ventre et aux bras pour maximiser les résultats.", image: "/images/process-corps-focus.jpg" },
            { title: "Recommandations", description: "Nous vous donnons des conseils d'hydratation pour optimiser et prolonger les effets du drainage.", image: "/images/process-corps-conseils.jpg" }
        ],
        quote: {
            text: "La légèreté n'est pas une absence de poids, mais une présence de fluidité.",
            bgImage: "/images/process-corps-drainage.jpg"
        },
        pricing: {
            options: [
                { name: "Séance unique", price: "60€", duration: "50 min" },
                { name: "Cure de 3 séances", price: "160€", duration: "3 x 50 min" },
                { name: "Cure de 6 séances", price: "310€", duration: "6 x 50 min" }
            ],
            details: "Pour des résultats visibles sur la cellulite et la rétention d'eau, une cure est fortement recommandée."
        },
        gallery: ['/images/gallery-corps-1.jpg', '/images/gallery-corps-2.jpg', '/images/gallery-corps-3.jpg'],
        fullGallery: [
            '/images/hero-manaxdrain.jpeg', '/images/process-corps-bilan.jpg', '/images/gallery-corps-1.jpg',
            '/images/process-corps-drainage.jpg', '/images/gallery-corps-2.jpg', '/images/process-corps-focus.jpg',
            '/images/gallery-corps-3.jpg', '/images/process-corps-conseils.jpg'
        ],
        subServices: []
    },
    // ... Continuez de remplir les autres services sur ce modèle complet ...
    // MANAXSCULPT
    manaxsculpt: {
        slug: 'manaxsculpt',
        title: "MANAXSCULPT",
        subtitle: "Le remodelage manuel pour redessiner votre silhouette.",
        heroImage: '/images/hero-manaxsculpt.jpg',
        introText: "Le MANAXSCULPT est un massage remodelant intense qui vise à 'casser' les amas graisseux et la cellulite adipeuse. Les manœuvres sont fermes et rapides pour sculpter le corps, affiner la taille et tonifier la peau.",
        idealFor: ["Cellulite installée (adipeuse, fibreuse)", "Manque de fermeté", "Remodelage post-partum (après avis médical)", "Redessiner des zones spécifiques"],
        benefits: ["Peau plus lisse et ferme", "Réduction de l'aspect 'peau d'orange'", "Silhouette visiblement sculptée", "Activation de la circulation sanguine"],
        process: [
            { title: "Analyse des Tissus", description: "Nous identifions la nature de votre cellulite et les zones à travailler en priorité.", image: "/images/process-sculpt-bilan.jpg" },
            { title: "Pétrissage & Palper-Rouler", description: "Des manœuvres manuelles intenses sont appliquées pour déloger les graisses profondes.", image: "/images/process-sculpt-soin.jpg" },
            { title: "Lissage & Drainage", description: "La séance se termine par des mouvements de lissage pour drainer les toxines libérées et unifier la peau.", image: "/images/process-sculpt-lissage.jpg" },
            { title: "Conseils de Suivi", description: "Des recommandations sur le mode de vie vous sont données pour maintenir les résultats.", image: "/images/process-sculpt-conseils.jpg" }
        ],
        quote: { text: "Reprenez le pouvoir sur les formes de votre corps.", bgImage: "/images/quote-texture-argile.jpg" },
        pricing: {
            options: [
                { name: "Corps entier", price: "70€", duration: "50 min" },
                { name: "Cure de 3 (Corps)", price: "200€", duration: "3 x 50 min" },
                { name: "Cure de 6 (Corps)", price: "380€", duration: "6 x 50 min" },
                { name: "Zone ciblée", price: "40€", duration: "30 min" },
                { name: "Cure de 3 (Zone)", price: "110€", duration: "3 x 30 min" },
                { name: "Cure de 6 (Zone)", price: "220€", duration: "6 x 30 min" }
            ],
            details: "Le travail par zone (ex: ventre/taille ou cuisses/fessiers) est idéal pour un besoin très localisé."
        },
        gallery: ['/images/gallery-sculpt-1.jpg', '/images/gallery-sculpt-2.jpg', '/images/gallery-sculpt-3.jpg'],
        fullGallery: [
            '/images/hero-manaxsculpt.jpg', '/images/process-sculpt-bilan.jpg', '/images/gallery-sculpt-1.jpg',
            '/images/process-sculpt-soin.jpg', '/images/gallery-sculpt-2.jpg', '/images/process-sculpt-lissage.jpg',
            '/images/gallery-sculpt-3.jpg', '/images/process-sculpt-conseils.jpg'
        ],
        subServices: []
    },
    // MADÉROXDRAIN
    maderoxdrain: {
        slug: 'maderoxdrain',
        title: "MADÉROXDRAIN",
        subtitle: "L'alliance du bois et du drainage pour un résultat optimisé.",
        heroImage: '/images/hero-maderoxdrain.jpg',
        introText: "Le MADÉROXDRAIN combine le meilleur des deux mondes : la puissance de la Maderothérapie pour casser la cellulite et remodeler, suivie d'un drainage lymphatique manuel pour éliminer les toxines et l'eau. C'est le soin combiné le plus efficace pour une transformation complète.",
        idealFor: ["Cellulite mixte (aqueuse et adipeuse)", "Recherche de résultats rapides et visibles", "Préparation avant l'été ou un événement", "Action anti-gonflement et sculptante"],
        benefits: ["Double action anti-cellulite", "Perte de centimètres visible", "Peau lissée et tonifiée", "Sensation de légèreté intense"],
        process: [
            { title: "Phase 1 : Maderothérapie", description: "Nous commençons par un travail intense avec les outils en bois sur les zones ciblées.", image: "/images/process-madero-soin.jpg" },
            { title: "Phase 2 : Drainage Manuel", description: "Nous enchaînons avec les manœuvres douces du drainage pour évacuer ce qui a été délogé.", image: "/images/process-corps-drainage.jpg" },
        ],
        quote: { text: "Deux techniques, une synergie, des résultats décuplés.", bgImage: "/images/quote-texture-bois.jpg" },
        pricing: {
            options: [
                { name: "Corps entier", price: "70€", duration: "60 min" },
                { name: "Cure de 3 (Corps)", price: "200€", duration: "3 x 60 min" },
                { name: "Cure de 6 (Corps)", price: "390€", duration: "6 x 60 min" },
                { name: "Zone ciblée", price: "40€", duration: "30 min" },
                { name: "Cure de 3 (Zone)", price: "110€", duration: "3 x 30 min" },
                { name: "Cure de 6 (Zone)", price: "220€", duration: "6 x 30 min" }
            ],
            details: "La combinaison parfaite pour une action globale et en profondeur."
        },
        gallery: ['/images/gallery-madero-1.jpg', '/images/gallery-madero-2.jpg', '/images/gallery-madero-3.jpg'],
        fullGallery: [
            '/images/hero-maderoxdrain.jpg', '/images/gallery-madero-1.jpg', '/images/gallery-corps-1.jpg',
            '/images/gallery-madero-2.jpg', '/images/gallery-corps-2.jpg', '/images/gallery-madero-3.jpg',
            '/images/gallery-corps-3.jpg', '/images/process-madero-soin.jpg'
        ],
        subServices: []
    },
    // MADÉROXICE
    maderoxice: {
        slug: 'maderoxice',
        title: "MADÉROXICE",
        subtitle: "L'effet tenseur du froid allié à la puissance du bois.",
        heroImage: '/images/hero-maderoxice.jpg',
        introText: "Le MADÉROXICE est une innovation qui combine la Maderothérapie traditionnelle à l'application d'un gel cryogénique ou d'outils glacés. Le choc thermique créé par le froid intense provoque une vasoconstriction qui raffermit instantanément les tissus, booste la circulation et tonifie la peau.",
        idealFor: ["Peau relâchée, manque de tonicité", "Jambes lourdes et mauvaise circulation", "Recherche d'un effet 'coup de fouet' tenseur", "Récupération sportive"],
        benefits: ["Effet tenseur et raffermissant immédiat", "Peau plus tonique et élastique", "Soulagement instantané des jambes lourdes", "Amélioration de la texture de la peau"],
        process: [
            { title: "Phase 1 : Maderothérapie Classique", description: "Un premier passage avec les outils en bois à température ambiante pour préparer les tissus.", image: "/images/process-madero-soin.jpg" },
            { title: "Phase 2 : Application du Froid", description: "Nous utilisons ensuite des outils spécifiques préalablement glacés ou un gel cryoactif pour créer le choc thermique.", image: "/images/process-ice-soin.jpg" },
        ],
        quote: { text: "Le feu du bois rencontre la glace pour une peau revitalisée.", bgImage: "/images/quote-texture-givre.jpg" },
        pricing: {
            options: [
                { name: "Corps entier", price: "70€", duration: "60 min" },
                { name: "Cure de 3 séances", price: "200€", duration: "3 x 60 min" },
                { name: "Cure de 6 séances", price: "390€", duration: "6 x 60 min" }
            ],
            details: "L'expérience est intense et les résultats sur la fermeté sont spectaculaires."
        },
        gallery: ['/images/gallery-ice-1.jpg', '/images/gallery-ice-2.jpg', '/images/gallery-ice-3.jpg'],
        fullGallery: [
            '/images/hero-maderoxice.jpg', '/images/gallery-madero-1.jpg', '/images/gallery-ice-1.jpg',
            '/images/gallery-madero-2.jpg', '/images/gallery-ice-2.jpg', '/images/gallery-madero-3.jpg',
            '/images/gallery-ice-3.jpg', '/images/process-ice-soin.jpg'
        ],
        subServices: []
    },
    // MANAFAST
    manafast: {
        slug: 'manafast',
        title: "MANAFAST",
        subtitle: "Le soin express pour une zone ciblée.",
        heroImage: '/images/hero-manafast.jpg',
        introText: "Le MANAFAST est un soin rapide et ultra-ciblé de 20-25 minutes, idéal pour ceux et celles qui ont peu de temps. Choisissez une zone (dos, jambes ou ventre) et bénéficiez d'un protocole intensif pour un soulagement ou un résultat express.",
        idealFor: ["Personnes pressées", "Besoin d'un soulagement rapide sur une zone (dos bloqué...)", "Entretien entre deux séances de cure", "Découverte de nos techniques à petit prix"],
        benefits: ["Soulagement rapide des tensions", "Action ciblée et efficace", "Idéal pour un emploi du temps chargé", "Résultats visibles sur une petite zone"],
        process: [
            { title: "Choix de la Zone", description: "Vous choisissez la zone à traiter : dos, jambes ou ventre.", image: "/images/process-fast-bilan.jpg" },
            { title: "Soin Intensif", description: "Nous appliquons un protocole rapide et puissant adapté à la zone choisie.", image: "/images/process-fast-soin.jpg" },
        ],
        quote: { text: "Le bien-être n'attend pas. 25 minutes pour vous recentrer.", bgImage: "/images/quote-texture-sable.jpg" },
        pricing: {
            options: [
                { name: "Dos", price: "40€", duration: "25 min" },
                { name: "Jambes", price: "40€", duration: "25 min" },
                { name: "Ventre", price: "40€", duration: "25 min" }
            ],
            details: "Le soin parfait pour la pause déjeuner ou pour un besoin urgent."
        },
        gallery: ['/images/gallery-fast-dos.jpg', '/images/gallery-fast-jambes.jpg', '/images/gallery-fast-ventre.jpg'],
        fullGallery: [
            '/images/hero-manafast.jpg', '/images/gallery-fast-dos.jpg', '/images/gallery-fast-jambes.jpg',
            '/images/gallery-fast-ventre.jpg', '/images/process-fast-bilan.jpg', '/images/process-fast-soin.jpg'
        ],
        subServices: []
    },
};