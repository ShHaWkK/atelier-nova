import { formatDate } from '@/lib/utils'

export interface Lead {
  id: string
  name: string
  email: string
  company: string
  type: string
  date: string
  status: 'new' | 'contacted' | 'waiting' | 'converted' | 'lost'
  priority: 'high' | 'normal' | 'low'
  notes?: string
}

export interface Quote {
  id: string
  quoteNumber: string
  clientName: string
  email: string
  company: string
  projectType: string
  estimateMin: number
  estimateMax: number
  status: 'draft' | 'to-send' | 'sent' | 'accepted' | 'refused'
  createdAt: string
  features: string[]
  budget: string
}

export interface Booking {
  id: string
  clientName: string
  email: string
  date: string
  time: string
  meetingType: string
  status: 'planned' | 'confirmed' | 'cancelled' | 'completed'
  notes?: string
}

export const mockLeads: Lead[] = [
  { id: '1', name: 'Cabinet Dumont & Associés', email: 'contact@dumont-asso.fr', company: 'Dumont & Associés', type: 'Refonte site', date: '2025-11-20', status: 'new', priority: 'high', notes: 'Projet urgent, réunion prévue la semaine prochaine' },
  { id: '2', name: 'Restaurant Le Jardin', email: 'info@lejardin.fr', company: 'SARL Le Jardin', type: 'Réservation en ligne', date: '2025-11-18', status: 'contacted', priority: 'normal' },
  { id: '3', name: 'FormaPro Lyon', email: 'rh@formapro.fr', company: 'FormaPro SARL', type: 'Site + CMS', date: '2025-11-15', status: 'converted', priority: 'high' },
  { id: '4', name: 'Marie Leblanc', email: 'marie@freelance.fr', company: 'Freelance', type: 'Site vitrine', date: '2025-11-14', status: 'waiting', priority: 'low' },
  { id: '5', name: 'Tech Innov SAS', email: 'ceo@techinnov.fr', company: 'Tech Innov SAS', type: 'Application web', date: '2025-11-12', status: 'contacted', priority: 'high' },
  { id: '6', name: 'Agence Événements Plus', email: 'contact@eventsplus.fr', company: 'Événements Plus', type: 'Réservation', date: '2025-11-10', status: 'new', priority: 'normal' },
  { id: '7', name: 'Clinique du Bien-être', email: 'direction@clinique-bienetre.fr', company: 'Clinique du Bien-être', type: 'Site + prise de RDV', date: '2025-11-08', status: 'lost', priority: 'normal', notes: 'Budget insuffisant' },
  { id: '8', name: 'Paul Moreau Consulting', email: 'paul@moreau-consulting.fr', company: 'Paul Moreau Consulting', type: 'Site institutionnel', date: '2025-11-05', status: 'converted', priority: 'normal' },
]

export const mockQuotes: Quote[] = [
  {
    id: '1',
    quoteNumber: 'DEV-2025-4821',
    clientName: 'Cabinet Dumont & Associés',
    email: 'contact@dumont-asso.fr',
    company: 'Dumont & Associés',
    projectType: 'Refonte + back-office',
    estimateMin: 6500,
    estimateMax: 8500,
    status: 'draft',
    createdAt: '2025-11-20',
    features: ['Back-office', 'Blog', 'SEO technique'],
    budget: '6000-12000',
  },
  {
    id: '2',
    quoteNumber: 'DEV-2025-4820',
    clientName: 'Restaurant Le Jardin',
    email: 'info@lejardin.fr',
    company: 'SARL Le Jardin',
    projectType: 'Site + réservation',
    estimateMin: 4200,
    estimateMax: 5800,
    status: 'sent',
    createdAt: '2025-11-18',
    features: ['Réservation', 'Menu en ligne'],
    budget: '3000-6000',
  },
  {
    id: '3',
    quoteNumber: 'DEV-2025-4815',
    clientName: 'FormaPro Lyon',
    email: 'rh@formapro.fr',
    company: 'FormaPro SARL',
    projectType: 'Site formation + CMS',
    estimateMin: 7200,
    estimateMax: 9500,
    status: 'accepted',
    createdAt: '2025-11-15',
    features: ['CMS', 'Inscriptions', 'Back-office', 'SEO'],
    budget: '6000-12000',
  },
  {
    id: '4',
    quoteNumber: 'DEV-2025-4810',
    clientName: 'Tech Innov SAS',
    email: 'ceo@techinnov.fr',
    company: 'Tech Innov SAS',
    projectType: 'Application web',
    estimateMin: 12000,
    estimateMax: 18000,
    status: 'to-send',
    createdAt: '2025-11-12',
    features: ['Dashboard', 'API', 'Auth', 'Mobile responsive'],
    budget: 'gt12000',
  },
  {
    id: '5',
    quoteNumber: 'DEV-2025-4805',
    clientName: 'Clinique du Bien-être',
    email: 'direction@clinique-bienetre.fr',
    company: 'Clinique du Bien-être',
    projectType: 'Site + prise de RDV',
    estimateMin: 4500,
    estimateMax: 6000,
    status: 'refused',
    createdAt: '2025-11-08',
    features: ['Réservation', 'Blog'],
    budget: '3000-6000',
  },
]

export const mockBookings: Booking[] = [
  { id: '1', clientName: 'Thomas Bergeron', email: 'thomas@bergeron.fr', date: '2025-11-25', time: '10:00', meetingType: 'Découverte projet', status: 'confirmed' },
  { id: '2', clientName: 'Sophie Martinet', email: 'sophie@martinet.com', date: '2025-11-25', time: '14:30', meetingType: 'Revue de devis', status: 'planned' },
  { id: '3', clientName: 'Marc Delacroix', email: 'm.delacroix@tech.fr', date: '2025-11-26', time: '09:30', meetingType: 'Découverte projet', status: 'confirmed', notes: 'Client référé par FormaPro' },
  { id: '4', clientName: 'Julie Renaud', email: 'j.renaud@agence.fr', date: '2025-11-27', time: '15:00', meetingType: 'Point technique', status: 'planned' },
  { id: '5', clientName: 'Antoine Garnier', email: 'a.garnier@startup.fr', date: '2025-11-20', time: '11:00', meetingType: 'Découverte projet', status: 'completed', notes: 'Intéressé — devis à envoyer' },
  { id: '6', clientName: 'Camille Rousseau', email: 'c.rousseau@conseil.fr', date: '2025-11-19', time: '14:00', meetingType: 'Découverte projet', status: 'cancelled', notes: 'Annulation client' },
]

export const dashboardStats = {
  newLeads: 3,
  pendingQuotes: 2,
  upcomingBookings: 4,
  unreadMessages: 5,
  conversionRate: 28,
  estimatedRevenue: 32500,
  weeklyLeads: [
    { week: 'Sem. 1', count: 4 },
    { week: 'Sem. 2', count: 7 },
    { week: 'Sem. 3', count: 3 },
    { week: 'Sem. 4', count: 8 },
    { week: 'Sem. 5', count: 5 },
    { week: 'Sem. 6', count: 6 },
  ],
  projectTypes: [
    { name: 'Site vitrine', value: 35 },
    { name: 'Refonte', value: 25 },
    { name: 'Back-office', value: 20 },
    { name: 'Réservation', value: 12 },
    { name: 'Autre', value: 8 },
  ],
}
