// src/app/soins/servicesData.js

export const servicesDetails = {
    massages: {
        slug: 'massages',
        title: "Massages Thérapeutiques",
        subtitle: "Une reconnexion profonde avec votre corps.",
        heroImage: '/images/hero-massage.jpg',
        introText: "Plus qu'une simple relaxation, nos massages thérapeutiques sont des protocoles de soin profonds conçus pour libérer les blocages physiques et émotionnels, restaurer la mobilité et apaiser le système nerveux. Chaque séance est une expérience unique, entièrement adaptée à vos besoins du moment.",
        // NOUVEAU: section "Idéal pour..."
        idealFor: [
            "Stress chronique et anxiété",
            "Tensions musculaires (dos, nuque)",
            "Fatigue et troubles du sommeil",
            "Besoin de lâcher-prise"
        ],
        benefits: ["Relâchement musculaire profond", "Clarté mentale retrouvée", "Sommeil réparateur", "Circulation améliorée"],
        process: [
            { title: "Échange & Bilan", description: "Un temps d'écoute pour comprendre vos besoins et définir ensemble l'intention du soin." },
            { title: "Le Soin sur Mesure", description: "Vous recevez le massage avec des huiles végétales biologiques adaptées à votre peau et vos besoins." },
            { title: "Intégration & Repos", description: "Un temps de calme vous est accordé après le soin pour permettre à votre corps d'intégrer pleinement les bienfaits." },
            { title: "Conseils Personnalisés", description: "Nous terminons par une tisane, et des conseils pour prolonger les effets de la séance chez vous." }
        ],
        quote: {
            text: "Le corps parle une langue que l'esprit a parfois oubliée. Nous sommes là pour traduire.",
            bgImage: "/images/quote-massage-bg.jpg"
        },
        pricing: {
            duration: "60 min",
            price: "80€",
            details: "Possibilité de cure de 5 séances pour un travail en profondeur."
        },
        gallery: ['/images/gallery-massage-1.jpg', '/images/gallery-massage-2.jpg', '/images/gallery-massage-3.jpg'],
        fullGallery: [
            '/images/hero-massage.jpg',
            '/images/gallery-massage-1.jpg',
            '/images/process-soin.jpg',
            '/images/gallery-massage-2.jpg',
            '/images/process-repos.jpg',
            '/images/gallery-massage-3.jpg',
            '/images/process-bilan.jpg',
            '/images/process-conseils.jpg'
        ],
        process: [
    { title: "Échange & Bilan", description: "Ce premier temps d'échange est essentiel pour comprendre vos besoins et vos attentes.[1] Un bilan personnalisé est effectué afin de déterminer les zones à traiter et d'adapter le soin qui vous sera prodigué.", image: "/images/process-bilan.jpg" },
    { title: "Le Soin sur Mesure", description: "À la suite du bilan, un soin entièrement personnalisé est créé pour répondre spécifiquement aux besoins de votre peau.[2] Ce soin sur mesure peut être purifiant, hydratant ou encore régénérant, grâce à des produits hautement concentrés en actifs pour un résultat visible.", image: "/images/process-soin.jpg" },
    { title: "Intégration & Repos", description: "Après le soin, un temps de repos est nécessaire pour permettre à votre corps d'intégrer pleinement les bienfaits du traitement. Cette phase de relaxation favorise une régénération en profondeur.", image: "/images/process-repos.jpg" },
    { title: "Conseils Personnalisés", description: "Pour prolonger les bénéfices du soin, des conseils personnalisés vous sont proposés.[4] Il est recommandé de suivre une routine de soins à domicile adaptée pour maintenir les résultats obtenus et prendre soin de votre peau au quotidien.", image: "/images/process-conseils.jpg" }
]
    },
    drainage: {
        slug: 'drainage',
        title: "Drainage Lymphatique",
        subtitle: "Relancez votre énergie, retrouvez la légèreté.",
        heroImage: '/images/hero-drainage.jpg',
        introText: "Notre méthode de drainage lymphatique est une technique manuelle douce qui stimule la circulation de la lymphe pour détoxifier l'organisme, renforcer le système immunitaire et affiner la silhouette. C'est le soin idéal pour lutter contre la rétention d'eau, la cellulite et retrouver une sensation de bien-être global.",
        idealFor: [
            "Rétention d'eau et jambes lourdes",
            "Cellulite aqueuse",
            "Détox post-excès ou saisonnière",
            "Récupération post-opératoire (sur avis médical)"
        ],
        benefits: ["Silhouette affinée", "Peau plus lisse", "Système immunitaire renforcé", "Bien-être digestif"],
        process: [
    { title: "Diagnostic Personnalisé", description: "Nous évaluons les zones à traiter et définissons les objectifs de la séance.", image: "/images/process-drainage-bilan.jpg" },
    { title: "Manœuvres Douces", description: "Des mouvements lents, rythmés et précis sont appliqués sur le corps pour stimuler les ganglions et la circulation.", image: "/images/process-drainage-soin.jpg" },
    { title: "Phase de Repos & Hydratation", description: "Un temps de repos et un grand verre d'eau permettent au système de s'activer et de commencer son travail de nettoyage.", image: "/images/process-drainage-repos.jpg" },
    { title: "Recommandations", description: "Nous vous donnons des conseils d'hydratation et de nutrition pour optimiser les résultats du drainage.", image: "/images/process-drainage-conseils.jpg" }
],
        quote: {
            text: "La légèreté n'est pas une absence de poids, mais une présence de fluidité.",
            bgImage: "/images/quote-drainage-bg.jpg"
        },
        pricing: {
            duration: "50 min",
            price: "90€",
            details: "Cure de 5 ou 10 séances recommandée pour des résultats optimaux et durables."
        },
        gallery: ['/images/gallery-drainage-1.jpg', '/images/gallery-drainage-2.jpg', '/images/gallery-drainage-3.jpg'],
        fullGallery: [
            '/images/hero-drainage.jpg',
            '/images/gallery-drainage-1.jpg',
            '/images/process-drainage-soin.jpg',
            '/images/gallery-drainage-2.jpg',
            '/images/process-drainage-repos.jpg',
            '/images/gallery-drainage-3.jpg',
            '/images/process-drainage-bilan.jpg',
            '/images/process-drainage-conseils.jpg'
        ]
    },
    // --- NOUVEAUX SERVICES AJOUTÉS ---
    maderotherapie: {
        slug: 'maderotherapie',
        title: "Maderothérapie",
        subtitle: "La puissance du bois pour sculpter votre corps.",
        heroImage: '/images/hero-madero.jpg',
        introText: "La Maderothérapie est une technique colombienne ancestrale qui utilise des instruments en bois spécialement conçus pour masser, remodeler et raffermir le corps. Ce soin intense agit en profondeur sur les amas graisseux et la cellulite, tout en stimulant la circulation sanguine et lymphatique pour une peau visiblement plus tonique.",
        idealFor: [
            "Cellulite fibreuse et adipeuse",
            "Perte de fermeté cutanée",
            "Remodelage de la silhouette (hanches, cuisses, ventre)",
            "Désir d'un soin intense et tonifiant"
        ],
        benefits: ["Réduction visible de la cellulite", "Peau raffermie et tonifiée", "Silhouette sculptée", "Activation du métabolisme"],
        process: [
    { title: "Préparation de la Peau", description: "La séance débute par une application d'huiles spécifiques pour préparer la peau et faciliter le passage des instruments.", image: "/images/process-madero-bilan.jpg" },
    { title: "Travail avec les Instruments", description: "Chaque instrument en bois est utilisé avec une technique précise pour casser les adipocytes, drainer et lisser.", image: "/images/process-madero-soin.jpg" },
    { title: "Massage Manuel Final", description: "Un massage manuel termine la séance pour apaiser la peau, drainer et harmoniser les résultats.", image: "/images/process-madero-final.jpg" },
    { title: "Protocole de Suivi", description: "Nous établissons ensemble un plan de séances et des conseils d'auto-massage pour atteindre vos objectifs.", image: "/images/process-madero-conseils.jpg" }
],
        quote: {
            text: "La nature nous offre les outils pour sculpter l'harmonie de nos propres formes.",
            bgImage: "/images/quote-madero-bg.jpg"
        },
        pricing: {
            duration: "45 min",
            price: "75€",
            details: "Très efficace en cure pour une transformation visible de la silhouette."
        },
        gallery: ['/images/gallery-madero-1.jpg', '/images/gallery-madero-2.jpg', '/images/gallery-madero-3.jpg'],
        fullGallery: [
            '/images/hero-madero.jpg',
            '/images/gallery-madero-1.jpg',
            '/images/process-madero-soin.jpg',
            '/images/gallery-madero-2.jpg',
            '/images/process-madero-final.jpg',
            '/images/gallery-madero-3.jpg',
            '/images/process-madero-bilan.jpg',
            '/images/process-madero-conseils.jpg'
        ]

    },
    specialises: {
        slug: 'specialises',
        title: "Soins Spécialisés",
        subtitle: "Une approche thérapeutique pour des besoins ciblés.",
        heroImage: '/images/hero-specialise.jpg',
        introText: "Cette gamme de soins s'adresse à des problématiques spécifiques, nécessitant une approche et des connaissances approfondies. Qu'il s'agisse d'accompagner des pathologies (avec accord médical), de préparer une épreuve sportive ou de soulager des douleurs chroniques, nous mettons en place un protocole entièrement personnalisé pour vous.",
        idealFor: [
            "Douleurs chroniques (fibromyalgie, endométriose...)",
            "Accompagnement de pathologies lourdes",
            "Préparation et récupération sportive",
            "Recherche d'un soin hautement personnalisé"
        ],
        benefits: ["Soulagement ciblé de la douleur", "Amélioration de la qualité de vie", "Soutien du corps et de l'esprit", "Performance sportive optimisée"],
         process: [
    { title: "Consultation Approfondie", description: "Une anamnèse complète est réalisée pour comprendre parfaitement votre situation, vos antécédents et vos objectifs.", image: "/images/process-specialise-bilan.jpg" },
    { title: "Élaboration du Protocole", description: "Nous choisissons et combinons les techniques les plus adaptées à votre problématique unique.", image: "/images/process-specialise-protocole.jpg" },
    { title: "Application du Soin Personnalisé", description: "Le soin est réalisé avec une attention constante à vos ressentis et à l'évolution de votre état.", image: "/images/process-specialise-soin.jpg" },
    { title: "Suivi et Ajustement", description: "Nous faisons le point après chaque séance pour ajuster le protocole si nécessaire et assurer une progression optimale.", image: "/images/process-specialise-suivi.jpg" }
],
        quote: {
            text: "Chaque douleur est une histoire. Notre rôle est de l'écouter avec précision et bienveillance.",
            bgImage: "/images/quote-specialise-bg.jpg"
        },
        pricing: {
            duration: "Sur mesure",
            price: "Sur devis",
            details: "Le tarif et la durée sont établis lors de la consultation initiale."
        },
        gallery: ['/images/gallery-specialise-1.jpg', '/images/gallery-specialise-2.jpg', '/images/gallery-specialise-3.jpg'],
         fullGallery: [
            '/images/hero-specialise.jpg',
            '/images/gallery-specialise-1.jpg',
            '/images/process-specialise-soin.jpg',
            '/images/gallery-specialise-2.jpg',
            '/images/process-specialise-protocole.jpg',
            '/images/gallery-specialise-3.jpg',
            '/images/process-specialise-bilan.jpg',
            '/images/process-specialise-suivi.jpg'
        ]
    },
};