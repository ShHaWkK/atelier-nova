export interface Project {
  id: string
  slug: string
  title: string
  client: string
  sector: string
  sectorIcon: string
  tagline: string
  description: string
  problem: string
  solution: string
  approach: string
  features: string[]
  stack: string[]
  results: { label: string; value: string; description: string }[]
  deliverables: string[]
  duration: string
  status: 'published' | 'draft'
  featured: boolean
  color: string
  colorDark: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'archipel-events',
    title: 'Archipel Events',
    client: 'Archipel Events SARL',
    sector: 'Événementiel',
    sectorIcon: '🎭',
    tagline: 'Plateforme de réservation pour agence événementielle',
    description:
      "Refonte complète du site web et création d'un système de réservation en ligne pour une agence événementielle parisienne spécialisée dans les séminaires d'entreprise et soirées privées.",
    problem:
      "Archipel Events gérait 100% de ses demandes par email et téléphone. Chaque demande nécessitait plusieurs échanges avant d'obtenir un devis, entraînant des délais de réponse trop longs et des opportunités perdues. Le site existant ne reflétait pas le positionnement premium de l'agence.",
    solution:
      "Nous avons conçu une plateforme qui permet aux prospects de soumettre une demande détaillée directement en ligne, avec choix de date, type d'événement et budget. L'agence reçoit une notification instantanée et peut répondre avec un devis personnalisé depuis son back-office.",
    approach:
      "L'approche UX a été centrée sur la réduction du temps de qualification des prospects. Chaque formulaire est conçu pour collecter l'information nécessaire dès le premier contact, sans friction inutile. Le design s'inspire des agences événementielles haut de gamme internationales.",
    features: [
      'Formulaire de demande multi-étapes avec estimation de budget',
      'Système de réservation avec gestion des disponibilités',
      'Back-office complet : leads, devis, calendrier',
      'Génération automatique de propositions commerciales PDF',
      'Portfolio de réalisations avec galerie photos',
      'Témoignages clients vérifiés',
      'Section presse & médias',
      'Newsletter automatisée',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Auth.js', 'Nodemailer', 'jsPDF'],
    results: [
      { label: 'Demandes mensuelles', value: '+340%', description: 'vs email seul' },
      { label: 'Taux de conversion', value: '28%', description: 'demande → contrat signé' },
      { label: 'Temps de réponse', value: '−70%', description: 'grâce à la qualification auto' },
    ],
    deliverables: [
      'Site vitrine 8 pages',
      'Système de réservation',
      'Back-office administrateur',
      'Génération PDF',
      'Formation client incluse',
    ],
    duration: '6 semaines',
    status: 'published',
    featured: true,
    color: '#6B5CE7',
    colorDark: '#4F46E5',
  },
  {
    id: '2',
    slug: 'meridiem-conseil',
    title: 'Méridiem Conseil',
    client: 'Méridiem Conseil SAS',
    sector: 'Conseil & Stratégie',
    sectorIcon: '📊',
    tagline: 'Site institutionnel pour cabinet de conseil en stratégie',
    description:
      "Création d'un site institutionnel sobre et haut de gamme pour un cabinet de conseil en stratégie et management, avec système de prise de rendez-vous pour les partenaires.",
    problem:
      "Le cabinet Méridiem fonctionnait avec un site vieillissant qui ne reflétait ni la qualité de ses interventions ni la séniorité de ses consultants. La prise de contact passait exclusivement par le bouche-à-oreille, sans canal digital structuré.",
    solution:
      "Design éditorial premium inspiré des meilleurs cabinets internationaux. Mise en valeur des expertises sectorielles, des références clients (anonymisées) et des consultants seniors. Système de prise de rendez-vous directement depuis le site.",
    approach:
      "Chaque décision de design a été motivée par la crédibilité : typographie serif élégante pour les accroches, palette sobre et professionnelle, sections études de cas structurées. Aucune image générique — tout est en CSS/SVG ou illustrations sur-mesure.",
    features: [
      'Design institutionnel premium',
      'Présentation des 4 pôles d\'expertise',
      'Études de cas sectorielles anonymisées',
      'Profils des consultants seniors',
      'Système de prise de rendez-vous',
      'Newsletter mensuelle automatisée',
      'Section insights & publications',
      'Formulaire de contact sécurisé',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'SQLite', 'Prisma', 'Auth.js', 'Nodemailer'],
    results: [
      { label: 'Demandes entrantes', value: '+180%', description: 'en 3 mois post-lancement' },
      { label: 'Taux de rebond', value: '−45%', description: 'vs ancien site' },
      { label: 'Durée de session', value: '4m32s', description: 'moyenne vs 1m20s avant' },
    ],
    deliverables: [
      'Site institutionnel 7 pages',
      'Système RDV intégré',
      'Back-office simplifié',
      'Guide édito',
      'SEO technique',
    ],
    duration: '5 semaines',
    status: 'published',
    featured: true,
    color: '#1A1A2E',
    colorDark: '#2D2D4E',
  },
  {
    id: '3',
    slug: 'osteria-campo',
    title: 'Osteria Campo',
    client: 'Restaurant Osteria Campo',
    sector: 'Restauration',
    sectorIcon: '🍝',
    tagline: 'Site restaurant avec réservation de table en ligne',
    description:
      "Création du site vitrine et du système de réservation de table pour un restaurant italien gastronomique dans le Marais, avec gestion des menus et des événements spéciaux.",
    problem:
      "Le restaurant perdait des réservations chaque semaine faute de système en ligne. Les clients devaient appeler pendant les heures d'ouverture, et les demandes laissées sur répondeur n'étaient pas toujours traitées. L'absence de présence digitale claire nuisait à la visibilité.",
    solution:
      "Plateforme avec réservation de table en temps réel, gestion des créneaux disponibles, menus saison consultables en ligne, et back-office pour que l'équipe gère ses réservations depuis n'importe quel appareil.",
    approach:
      "Design warm et chaleureux, inspiré de l'esthétique italienne contemporaine. Photographies stylisées des plats intégrées en CSS (placeholders réalistes). Menu consulable en ligne avec filtres allergènes. Mobile-first car 70% du trafic est sur mobile.",
    features: [
      'Réservation de table en ligne temps réel',
      'Menu interactif avec filtres allergènes',
      'Galerie des plats signatures',
      'Gestion des événements spéciaux',
      'Back-office : calendrier des réservations',
      'Relances automatiques par email',
      'Liste d\'attente intelligente',
      'Intégration Google My Business',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Nodemailer'],
    results: [
      { label: 'Réservations en ligne', value: '68%', description: 'du total vs 0% avant' },
      { label: 'No-shows', value: '−60%', description: 'grâce aux rappels auto' },
      { label: 'Avis Google', value: '+4.7★', description: 'score moyen amélioré' },
    ],
    deliverables: [
      'Site vitrine 5 pages',
      'Module réservation',
      'Gestion des menus',
      'Back-office tablette-friendly',
      'Intégrations email',
    ],
    duration: '4 semaines',
    status: 'published',
    featured: false,
    color: '#D4511C',
    colorDark: '#B84016',
  },
  {
    id: '4',
    slug: 'proxima-formation',
    title: 'Proxima Formation',
    client: 'Proxima Formation SARL',
    sector: 'Formation professionnelle',
    sectorIcon: '🎓',
    tagline: 'Catalogue de formations avec espace apprenant',
    description:
      "Plateforme de présentation et de réservation de formations professionnelles pour un organisme certifié Qualiopi, avec espace apprenant simplifié et demande de financement OPCO.",
    problem:
      "Proxima Formation gérait son catalogue sur un PDF envoyé par email. Les demandes d'inscription et de prise en charge OPCO étaient traitées manuellement avec des risques d'erreur importants. Aucune visibilité sur les formations les plus demandées.",
    solution:
      "Catalogue de formations structuré avec moteur de recherche, fiche détaillée par formation, formulaire d'inscription avec aide au financement OPCO, et tableau de bord pour le suivi des demandes.",
    approach:
      "Interface claire et rassurante pour des apprenants peu habitués aux interfaces numériques. Parcours de navigation simplifié : trouver une formation → comprendre le contenu → s'inscrire → obtenir un financement. Accessibilité WCAG 2.1 prise en compte.",
    features: [
      'Catalogue formations avec recherche et filtres',
      'Fiches formations détaillées (programme, durée, prérequis)',
      'Formulaire d\'inscription multi-étapes',
      'Aide au financement OPCO intégrée',
      'Espace apprenant simplifié',
      'Back-office : gestion des sessions',
      'Statistiques : inscriptions, taux de remplissage',
      'Export CSV pour la comptabilité',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Auth.js', 'Nodemailer'],
    results: [
      { label: 'Inscriptions en ligne', value: '100%', description: 'vs 0% avant (papier)' },
      { label: 'Temps admin', value: '−8h/sem', description: 'pour la responsable formation' },
      { label: 'Taux de remplissage', value: '+35%', description: 'sessions mieux visibles' },
    ],
    deliverables: [
      'Site + catalogue formations',
      'Système d\'inscription',
      'Espace apprenant',
      'Back-office complet',
      'Formation équipe incluse',
    ],
    duration: '7 semaines',
    status: 'published',
    featured: true,
    color: '#059669',
    colorDark: '#047857',
  },
  {
    id: '5',
    slug: 'sentinel-cyber',
    title: 'Sentinel Cyber',
    client: 'Sentinel Cyber SAS',
    sector: 'Cybersécurité',
    sectorIcon: '🛡️',
    tagline: 'Site institutionnel et outil de demande d\'audit',
    description:
      "Site institutionnel premium pour une société de conseil en cybersécurité, avec formulaire de demande d'audit sécurisé, ressources téléchargeables et espace clients.",
    problem:
      "Sentinel Cyber avait une forte expertise technique mais une présence digitale inexistante. Les prospects trouvaient difficilement les informations sur les prestations d'audit et de conseil. La génération de leads reposait entièrement sur les salons professionnels.",
    solution:
      "Site technique et rassurant avec présentation claire des expertises (pentest, audit, RGPD, SOC), formulaire de demande d'audit structuré pour qualifier les prospects, et espace ressources avec livres blancs téléchargeables.",
    approach:
      "Design sombre et sérieux, inspiré des outils de sécurité informatique (terminal, code). Palette bleu marine / accent cyan. Chaque section répond à une objection client classique : compétence, confidentialité, méthodologie, références.",
    features: [
      'Site institutionnel 8 pages',
      'Formulaire de demande d\'audit qualifié',
      'Espace ressources (livres blancs, guides)',
      'Formulaire RGPD avec signature électronique simple',
      'Espace client sécurisé (rapports d\'audit)',
      'Blog technique (vulnérabilités, actualités sécu)',
      'Indicateurs de confiance : certifications, références',
      'Formulaire de contact chiffré',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Auth.js', 'Nodemailer', 'jsPDF'],
    results: [
      { label: 'Leads qualifiés/mois', value: '+12', description: 'en 2 mois post-lancement' },
      { label: 'Livres blancs téléchargés', value: '340+', description: 'en 60 jours' },
      { label: 'Nouveau contrat signé', value: '×3', description: 'vs trimestre précédent' },
    ],
    deliverables: [
      'Site institutionnel',
      'Module demande d\'audit',
      'Espace ressources',
      'Blog technique',
      'Back-office complet',
    ],
    duration: '8 semaines',
    status: 'published',
    featured: false,
    color: '#0F172A',
    colorDark: '#020617',
  },
  {
    id: '6',
    slug: 'nova-crm',
    title: 'Nova CRM',
    client: 'Usage interne studio',
    sector: 'Outil métier',
    sectorIcon: '⚙️',
    tagline: 'Mini CRM client développé en interne',
    description:
      "Outil de gestion de la relation client développé pour notre usage interne : suivi des prospects, devis, projets en cours et facturation. Exemple d'application métier sur-mesure.",
    problem:
      "La gestion des projets freelance nécessite un suivi précis des prospects, devis envoyés, projets actifs et paiements attendus. Les outils généralistes (Notion, Excel) manquent d'intégration et de personnalisation.",
    solution:
      "Application web interne avec pipeline commercial visuel (Kanban), gestion des devis avec génération PDF, suivi des projets par étapes, et tableau de bord financier mensuel.",
    approach:
      "Interface minimaliste inspirée des outils Basecamp et Linear. Tout est optimisé pour la rapidité de saisie : raccourcis clavier, actions batch, filtres persistants. Responsive pour une utilisation mobile lors des déplacements.",
    features: [
      'Pipeline commercial Kanban',
      'Gestion des devis avec génération PDF',
      'Suivi des projets par étapes',
      'Base de données clients',
      'Tableau de bord financier',
      'Rappels automatiques (relances)',
      'Import/export CSV',
      'Recherche globale',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'SQLite', 'Prisma', 'Auth.js'],
    results: [
      { label: 'Temps de suivi', value: '−5h/sem', description: 'vs Excel + email' },
      { label: 'Devis non relancés', value: '−90%', description: 'grâce aux rappels auto' },
      { label: 'Visibilité CA', value: '100%', description: 'tableau de bord en temps réel' },
    ],
    deliverables: [
      'Application web complète',
      'Pipeline Kanban',
      'Module devis/factures',
      'Dashboard financier',
      'Documentation technique',
    ],
    duration: '5 semaines',
    status: 'published',
    featured: false,
    color: '#6B5CE7',
    colorDark: '#4F46E5',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.status === 'published')
}

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.status === 'published')
}
