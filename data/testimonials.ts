export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  sector: string
  message: string
  rating: number
  avatar: string
  published: boolean
  featured: boolean
  projectSlug?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Camille Bergerac',
    role: 'Directrice générale',
    company: 'Archipel Events',
    sector: 'Événementiel',
    message:
      "Nous avions besoin d'un site qui reflète notre positionnement premium tout en générant de vraies demandes. Atelier Nova a livré exactement ça — et plus. Notre nombre de demandes a triplé en 3 mois. Le back-office est tellement simple que mon assistante l'utilise sans formation.",
    rating: 5,
    avatar: 'CB',
    published: true,
    featured: true,
    projectSlug: 'archipel-events',
  },
  {
    id: '2',
    name: 'Philippe Morteau',
    role: 'Associé fondateur',
    company: 'Méridiem Conseil',
    sector: 'Conseil & Stratégie',
    message:
      "Ce qui m'a convaincu, c'est la rigueur dans la réflexion amont. Avant d'écrire une ligne de code, l'équipe a étudié notre positionnement et nos clients cibles. Le site qui en résulte est à notre image : sobre, sérieux, efficace. Les prospects qui nous contactent sont qualifiés.",
    rating: 5,
    avatar: 'PM',
    published: true,
    featured: true,
    projectSlug: 'meridiem-conseil',
  },
  {
    id: '3',
    name: 'Laura Casini',
    role: 'Gérante',
    company: 'Osteria Campo',
    sector: 'Restauration',
    message:
      "Je n'avais aucune compétence technique et j'avais peur que ce soit compliqué à gérer. En réalité, je mets à jour le menu en 5 minutes depuis mon téléphone. Et les réservations arrivent maintenant 24h/24 — même la nuit, pendant le service. C'est un vrai changement.",
    rating: 5,
    avatar: 'LC',
    published: true,
    featured: false,
    projectSlug: 'osteria-campo',
  },
  {
    id: '4',
    name: 'Nathalie Fournel',
    role: 'Responsable formation',
    company: 'Proxima Formation',
    sector: 'Formation professionnelle',
    message:
      "Nous passions des heures chaque semaine à traiter les demandes d'inscription et les dossiers OPCO par email. Maintenant, tout est centralisé dans un seul outil. Le gain de temps est réel — environ 8 heures par semaine pour moi seule.",
    rating: 5,
    avatar: 'NF',
    published: true,
    featured: true,
    projectSlug: 'proxima-formation',
  },
  {
    id: '5',
    name: 'David Mercier',
    role: 'CEO',
    company: 'Sentinel Cyber',
    sector: 'Cybersécurité',
    message:
      "Dans notre secteur, la confiance se construit sur la forme autant que le fond. Atelier Nova a compris que notre site devait être aussi rigoureux que nos prestations d'audit. Le résultat : un site qui parle à nos clients DSI et RSSI dès la première page.",
    rating: 5,
    avatar: 'DM',
    published: true,
    featured: false,
    projectSlug: 'sentinel-cyber',
  },
  {
    id: '6',
    name: 'Antoine Labé',
    role: 'Consultant indépendant',
    company: 'Freelance RH',
    sector: 'Ressources humaines',
    message:
      "J'avais un site Squarespace basique que je n'osais plus montrer à mes prospects. La refonte par Atelier Nova m'a ouvert des portes que je n'aurais pas franchies autrement. J'ai signé 2 nouveaux contrats dans les 6 semaines suivant le lancement.",
    rating: 4,
    avatar: 'AL',
    published: true,
    featured: false,
  },
]

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured && t.published)
}

export function getPublishedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.published)
}
