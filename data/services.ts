export interface Service {
  id: string
  slug: string
  icon: string
  title: string
  tagline: string
  description: string
  benefits: string[]
  deliverables: string[]
  duration: string
  startingPrice: number
  category: 'creation' | 'feature' | 'growth'
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'vitrine',
    icon: 'Globe',
    title: 'Site vitrine premium',
    tagline: 'Une présence digitale à la hauteur de votre positionnement',
    description:
      "Création d'un site vitrine professionnel, responsive et optimisé pour la conversion. Chaque page est pensée pour transformer vos visiteurs en prospects.",
    benefits: [
      'Design sur-mesure, zéro template générique',
      'Optimisé pour la conversion (CTA, formulaires)',
      'SEO technique intégré dès la conception',
      'Chargement rapide sur mobile et desktop',
      'Accessible et compatible tous navigateurs',
    ],
    deliverables: [
      'Site web complet (5 à 8 pages)',
      'Design responsive mobile/tablette/desktop',
      'Formulaire de contact et leads',
      'SEO on-page',
      'Guide de mise à jour',
      '30 jours de support post-livraison',
    ],
    duration: '3 à 5 semaines',
    startingPrice: 2800,
    category: 'creation',
  },
  {
    id: '2',
    slug: 'refonte',
    icon: 'RefreshCw',
    title: 'Refonte web',
    tagline: 'Modernisez votre image sans repartir de zéro',
    description:
      "Refonte stratégique et graphique de votre site existant. Nous analysons vos données, identifions les frictions et rebuil your site pour performer.",
    benefits: [
      'Audit UX et performances avant toute décision',
      'Conservation du SEO existant (redirections 301)',
      'Design system cohérent et maintenable',
      'Amélioration mesurable du taux de conversion',
      'Migration de contenus incluse',
    ],
    deliverables: [
      'Audit de l\'existant',
      'Nouveau design complet',
      'Migration de contenus',
      'Redirections SEO',
      'Tests cross-browser',
      '60 jours de support',
    ],
    duration: '4 à 7 semaines',
    startingPrice: 3500,
    category: 'creation',
  },
  {
    id: '3',
    slug: 'reservation',
    icon: 'Calendar',
    title: 'Réservation en ligne',
    tagline: 'Acceptez des réservations 24h/24 sans décrocher le téléphone',
    description:
      "Système de réservation ou de prise de rendez-vous intégré à votre site. Gestion des créneaux, confirmations automatiques, relances et back-office.",
    benefits: [
      'Réservations 24h/24, 7j/7 sans intervention',
      'Confirmations et rappels automatisés par email',
      'Réduction des no-shows jusqu\'à 60%',
      'Back-office simple pour l\'équipe',
      'Intégration calendrier (Google Calendar)',
    ],
    deliverables: [
      'Module de réservation en ligne',
      'Gestion des disponibilités',
      'Emails automatisés (confirmation, rappel)',
      'Back-office de gestion',
      'Statistiques (taux de remplissage)',
    ],
    duration: '2 à 4 semaines',
    startingPrice: 2200,
    category: 'feature',
  },
  {
    id: '4',
    slug: 'devis',
    icon: 'FileText',
    title: 'Demande de devis',
    tagline: 'Qualifiez vos prospects avant même de leur parler',
    description:
      "Formulaire de demande de devis avancé avec estimation automatique de prix, récapitulatif, et génération de propositions commerciales PDF depuis votre admin.",
    benefits: [
      'Prospects qualifiés dès le premier contact',
      'Estimation automatique pour filtrer les budgets',
      'Gain de temps estimé à 3-5h par devis',
      'Historique et suivi des demandes centralisé',
      'Génération PDF en un clic depuis l\'admin',
    ],
    deliverables: [
      'Formulaire multi-étapes',
      'Estimation automatique en temps réel',
      'Notification admin par email',
      'Back-office de gestion des devis',
      'Génération PDF professionnelle',
      'Suivi des statuts',
    ],
    duration: '2 à 3 semaines',
    startingPrice: 1800,
    category: 'feature',
  },
  {
    id: '5',
    slug: 'backoffice',
    icon: 'LayoutDashboard',
    title: 'Back-office administrable',
    tagline: 'Gérez votre site sans dépendre d\'un développeur',
    description:
      "Interface d'administration sur-mesure pour gérer vos contenus, clients, commandes ou réservations. Simple, sécurisé, adapté à votre équipe.",
    benefits: [
      'Autonomie totale sur vos contenus',
      'Pas besoin de connaissances techniques',
      'Interface adaptée à votre équipe',
      'Accès multi-utilisateurs avec rôles',
      'Sécurisé (authentification, logs)',
    ],
    deliverables: [
      'Interface admin sur-mesure',
      'Gestion des contenus (CRUD)',
      'Authentification sécurisée',
      'Gestion des rôles utilisateurs',
      'Formation de l\'équipe incluse',
    ],
    duration: '3 à 6 semaines',
    startingPrice: 2500,
    category: 'feature',
  },
  {
    id: '6',
    slug: 'blog',
    icon: 'PenSquare',
    title: 'Blog administrable',
    tagline: 'Publiez vos articles sans toucher au code',
    description:
      "Mini-CMS de blog intégré à votre site : créez, modifiez et publiez vos articles depuis un back-office simple. Catégories, tags, images, prévisualisation.",
    benefits: [
      'Autonomie éditoriale complète',
      'SEO optimisé pour chaque article',
      'Gestion des brouillons et publications',
      'Catégories et tags configurables',
      'Temps de lecture automatique',
    ],
    deliverables: [
      'Blog avec liste et pages articles',
      'Back-office éditorial',
      'Gestion catégories/tags',
      'Système d\'images',
      'SEO par article',
      'Flux RSS',
    ],
    duration: '2 à 3 semaines',
    startingPrice: 1500,
    category: 'feature',
  },
  {
    id: '7',
    slug: 'email-automation',
    icon: 'Mail',
    title: 'Automatisation email',
    tagline: 'Restez en contact sans y penser',
    description:
      "Mise en place de séquences email automatisées : confirmation de contact, relances de devis, rappels de rendez-vous, onboarding client et newsletters.",
    benefits: [
      'Aucun suivi manuel des relances',
      'Taux de réponse amélioré de 40 à 60%',
      'Expérience client professionnelle',
      'Templates personnalisés à votre image',
      'Suivi des ouvertures et clics',
    ],
    deliverables: [
      'Séquences email configurées',
      'Templates HTML design',
      'Tests et validation',
      'Documentation des déclencheurs',
    ],
    duration: '1 à 2 semaines',
    startingPrice: 900,
    category: 'feature',
  },
  {
    id: '8',
    slug: 'seo',
    icon: 'TrendingUp',
    title: 'SEO technique',
    tagline: 'Être trouvé par les clients qui vous cherchent',
    description:
      "Audit et optimisation technique SEO : performances, structure, balisage, données structurées, sitemap. Fondations solides pour un référencement durable.",
    benefits: [
      'Audit complet des problèmes techniques',
      'Correction des erreurs d\'indexation',
      'Amélioration des Core Web Vitals',
      'Données structurées (Schema.org)',
      'Rapport mensuel d\'évolution',
    ],
    deliverables: [
      'Audit SEO technique',
      'Rapport de recommandations priorisées',
      'Corrections techniques',
      'Sitemap et robots.txt',
      'Données structurées',
      'Suivi pendant 3 mois',
    ],
    duration: '1 à 3 semaines',
    startingPrice: 1200,
    category: 'growth',
  },
  {
    id: '9',
    slug: 'maintenance',
    icon: 'Shield',
    title: 'Maintenance mensuelle',
    tagline: 'Votre site toujours à jour, performant et sécurisé',
    description:
      "Contrat de maintenance mensuel : mises à jour, sauvegardes, monitoring, corrections de bugs et support. Votre site entre de bonnes mains.",
    benefits: [
      'Monitoring de disponibilité 24/7',
      'Mises à jour des dépendances',
      'Sauvegardes quotidiennes vérifiées',
      'Corrections de bugs incluses',
      'Rapport mensuel de performance',
    ],
    deliverables: [
      'Monitoring disponibilité',
      'Mises à jour mensuelles',
      'Sauvegarde automatique',
      'Renouvellement SSL',
      'Rapport mensuel',
      '2h de corrections incluses/mois',
    ],
    duration: 'Engagement mensuel',
    startingPrice: 120,
    category: 'growth',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category)
}
