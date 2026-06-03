import Link from 'next/link'
import {
  ArrowRight, Check, Star, Zap, Globe, Calendar, FileText,
  LayoutDashboard, Shield, TrendingUp, ChevronRight,
  Users, Clock, BarChart2, Award, MessageSquare,
  Building2, Utensils, GraduationCap, Briefcase, Heart, ShoppingBag,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { getFeaturedProjects } from '@/data/projects'
import { getFeaturedTestimonials } from '@/data/testimonials'

const stats = [
  { value: '48+', label: 'Projets livrés', icon: Award },
  { value: '96%', label: 'Clients satisfaits', icon: Star },
  { value: '3.2×', label: 'Augmentation des leads', icon: TrendingUp },
  { value: '4.8 sem.', label: 'Délai moyen de livraison', icon: Clock },
]

const services = [
  {
    icon: Globe,
    title: 'Site vitrine premium',
    desc: 'Un site professionnel qui reflète votre expertise et convertit vos visiteurs.',
    href: '/services#vitrine',
    color: '#6B5CE7',
    bg: '#EDE9FF',
  },
  {
    icon: LayoutDashboard,
    title: 'Back-office administrable',
    desc: 'Gérez vos contenus, clients et commandes sans dépendre d\'un développeur.',
    href: '/services#backoffice',
    color: '#1A1A2E',
    bg: '#F0EDE8',
  },
  {
    icon: Calendar,
    title: 'Réservation en ligne',
    desc: 'Acceptez des réservations 24h/24 avec confirmations et rappels automatiques.',
    href: '/services#reservation',
    color: '#10B981',
    bg: '#D1FAE5',
  },
  {
    icon: FileText,
    title: 'Demande de devis',
    desc: 'Formulaire qualifiant avec estimation automatique et génération PDF.',
    href: '/services#devis',
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    icon: TrendingUp,
    title: 'SEO technique',
    desc: 'Audit et optimisation pour être trouvé par les clients qui vous cherchent.',
    href: '/services#seo',
    color: '#3B82F6',
    bg: '#DBEAFE',
  },
  {
    icon: Shield,
    title: 'Maintenance & sécurité',
    desc: 'Monitoring, mises à jour et sauvegardes pour un site toujours opérationnel.',
    href: '/services#maintenance',
    color: '#EF4444',
    bg: '#FEE2E2',
  },
]

const process = [
  {
    step: '01',
    title: 'Cadrage & stratégie',
    desc: 'Nous analysons votre activité, vos clients et vos objectifs pour définir la meilleure approche.',
    duration: 'Semaine 1',
  },
  {
    step: '02',
    title: 'Design & prototypage',
    desc: 'Maquettes interactives validées avec vous avant tout développement. Aucune surprise.',
    duration: 'Semaines 1–2',
  },
  {
    step: '03',
    title: 'Développement',
    desc: 'Code propre, maintenable, sécurisé. Livraisons intermédiaires pour vous tenir informé.',
    duration: 'Semaines 2–4',
  },
  {
    step: '04',
    title: 'Livraison & formation',
    desc: 'Mise en production, tests finaux et formation à l\'utilisation du back-office.',
    duration: 'Dernière semaine',
  },
]

const problems = [
  {
    problem: 'Un site existant mais qui ne génère aucune demande',
    solution: 'Refonte orientée conversion avec formulaires qualifiants',
  },
  {
    problem: 'Des réservations encore gérées par téléphone',
    solution: 'Module de réservation en ligne intégré',
  },
  {
    problem: 'Des devis rédigés manuellement en 3h chacun',
    solution: 'Formulaire + génération PDF automatisée',
  },
  {
    problem: 'Impossible de mettre à jour le site sans développeur',
    solution: 'Back-office sur-mesure, simple et sécurisé',
  },
]

const sectors = [
  { icon: Briefcase, label: 'Conseil & Services', color: '#6B5CE7' },
  { icon: Utensils, label: 'Restauration', color: '#D4511C' },
  { icon: GraduationCap, label: 'Formation', color: '#059669' },
  { icon: Building2, label: 'Immobilier & Agences', color: '#3B82F6' },
  { icon: Heart, label: 'Bien-être & Santé', color: '#EC4899' },
  { icon: ShoppingBag, label: 'Commerce & Retail', color: '#F59E0B' },
  { icon: Shield, label: 'IT & Cybersécurité', color: '#1A1A2E' },
  { icon: Users, label: 'Associations & ONG', color: '#10B981' },
]

const pricingPreview = [
  {
    name: 'Essentiel',
    price: '2 900',
    desc: 'Site vitrine 5 pages, responsive, SEO de base',
    cta: 'Démarrer',
    featured: false,
  },
  {
    name: 'Croissance',
    price: '5 800',
    desc: 'Site + back-office + formulaire de devis ou réservation',
    cta: 'Recommandé',
    featured: true,
  },
  {
    name: 'Premium',
    price: '9 500',
    desc: 'Plateforme complète avec toutes les fonctionnalités',
    cta: 'Découvrir',
    featured: false,
  },
]

const faqs = [
  {
    q: 'Combien de temps pour livrer un site ?',
    a: 'Entre 3 et 8 semaines selon la complexité. Un site vitrine standard : 3 à 5 semaines. Une plateforme avec back-office et réservations : 6 à 8 semaines.',
  },
  {
    q: 'Dois-je fournir les textes et images ?',
    a: 'Les textes doivent venir de vous — c\'est votre expertise qu\'on met en valeur. Pour les images, nous travaillons avec des illustrations CSS/SVG et des placeholders réalistes. Des photos professionnelles peuvent être arrangées en option.',
  },
  {
    q: 'Je peux modifier mon site ensuite sans développeur ?',
    a: 'Oui. Chaque back-office est conçu pour être utilisable sans compétences techniques. Nous formons votre équipe à la livraison et documentons les procédures.',
  },
  {
    q: 'Quid de l\'hébergement et du nom de domaine ?',
    a: 'Nous conseillons et configurons l\'hébergement (Vercel, OVH, etc.) selon votre budget. Le nom de domaine reste sous votre propriété. Tout est prévu dans notre offre de maintenance.',
  },
]

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()
  const featuredTestimonials = getFeaturedTestimonials()

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] bg-gradient-hero flex items-center overflow-hidden noise">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto max-w-[1200px] relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/12 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
                <span className="text-caption text-white/80 font-medium">Ouvert aux nouveaux projets — Délai actuel : 2 semaines</span>
              </div>

              <h1 className="text-display-xl font-display text-white leading-[1.05] mb-6 text-balance">
                Des sites web qui{' '}
                <span className="font-serif italic" style={{ color: '#9F8FEF' }}>travaillent</span>{' '}
                pour vous.
              </h1>

              <p className="text-body-l text-white/60 mb-8 max-w-[480px] leading-relaxed">
                Atelier Nova conçoit des sites premium, plateformes administrables et outils métier
                pour les entreprises qui veulent plus qu'une belle page.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button
                  asChild
                  size="lg"
                  variant="primary"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl font-semibold"
                  rightIcon={<ArrowRight className="w-4.5 h-4.5" strokeWidth={1.5} />}
                >
                  <Link href="/quote">Demander un devis gratuit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline-white"
                >
                  <Link href="/projects">Voir les réalisations</Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-caption text-white/50 ml-1">4.9/5 · 48 avis</span>
                </div>
                <div className="w-px h-4 bg-white/20 hidden sm:block" />
                <span className="text-caption text-white/40">Aucun engagement · Devis sous 48h</span>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                {/* Main mockup card */}
                <div className="bg-[#1E1E3A]/80 border border-white/10 rounded-xl backdrop-blur-sm shadow-xl overflow-hidden">
                  {/* Topbar */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-danger/70" />
                      <div className="w-3 h-3 rounded-full bg-warning/70" />
                      <div className="w-3 h-3 rounded-full bg-success/70" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/8 rounded px-3 py-1 text-caption text-white/40 text-center">
                        admin.atelier-nova.fr/dashboard
                      </div>
                    </div>
                    <div className="w-16" />
                  </div>

                  {/* Dashboard content */}
                  <div className="p-5 space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Nouveaux leads', value: '12', change: '+3 cette semaine', color: '#6B5CE7' },
                        { label: 'Devis en attente', value: '5', change: '2 à envoyer', color: '#F59E0B' },
                        { label: 'RDV ce mois', value: '8', change: '3 confirmés', color: '#10B981' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white/5 rounded-lg p-3 border border-white/6">
                          <p className="text-[10px] text-white/40 mb-1 font-medium">{stat.label}</p>
                          <p className="text-xl font-display font-bold text-white">{stat.value}</p>
                          <p className="text-[10px] mt-1" style={{ color: stat.color }}>{stat.change}</p>
                        </div>
                      ))}
                    </div>

                    {/* Recent leads */}
                    <div className="bg-white/5 rounded-lg border border-white/6 overflow-hidden">
                      <div className="px-4 py-2.5 border-b border-white/6">
                        <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">Derniers leads</p>
                      </div>
                      {[
                        { name: 'Cabinet Dumont & Ass.', type: 'Refonte site', status: 'Nouveau', statusColor: '#3B82F6' },
                        { name: 'Restaurant Le Jardin', type: 'Réservation', status: 'Contacté', statusColor: '#6B5CE7' },
                        { name: 'FormaPro Lyon', type: 'Site + CMS', status: 'Converti', statusColor: '#10B981' },
                      ].map((lead) => (
                        <div key={lead.name} className="flex items-center justify-between px-4 py-2.5 border-b border-white/4 last:border-0">
                          <div>
                            <p className="text-[12px] font-medium text-white/80">{lead.name}</p>
                            <p className="text-[10px] text-white/35">{lead.type}</p>
                          </div>
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded"
                            style={{
                              color: lead.statusColor,
                              backgroundColor: `${lead.statusColor}18`,
                            }}
                          >
                            {lead.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -right-4 top-16 bg-success-soft border border-success/20 rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" strokeWidth={2} />
                    <span className="text-caption font-semibold text-success-text">Devis généré</span>
                  </div>
                </div>

                <div className="absolute -left-5 bottom-16 bg-surface rounded-lg px-3 py-2 shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    <span className="text-caption font-semibold text-text-primary">3 nouveaux messages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-b border-border bg-surface">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-text-primary leading-none">{value}</p>
                  <p className="text-caption text-text-tertiary mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-[640px] mb-14">
            <span className="section-label mb-3 block">Le problème</span>
            <h2 className="text-display-l font-display text-text-primary mb-4 text-balance">
              Votre site web vous coûte plus qu'il ne vous rapporte.
            </h2>
            <p className="text-body-l text-text-secondary leading-relaxed">
              La plupart des sites PME sont conçus pour exister, pas pour performer.
              Voici les situations que nous rencontrons chaque semaine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {problems.map(({ problem, solution }) => (
              <div
                key={problem}
                className="flex gap-5 p-6 bg-surface border border-border rounded-lg hover:border-accent/30 transition-colors duration-200"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-full bg-danger-soft flex items-center justify-center">
                    <span className="text-danger font-bold text-sm">×</span>
                  </div>
                </div>
                <div>
                  <p className="text-[15px] font-medium text-text-primary mb-2">{problem}</p>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <p className="text-body-s text-success-text font-medium">{solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-background-secondary">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label mb-3 block">Nos services</span>
            <h2 className="text-display-l font-display text-text-primary mb-4">
              Ce que nous faisons
            </h2>
            <p className="text-body-l text-text-secondary">
              De la vitrine premium à la plateforme administrable, chaque solution est pensée pour votre activité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, href, color, bg }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-4 p-7 bg-surface border border-border rounded-lg hover:border-accent/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-heading-s font-display text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  <p className="text-body-s text-text-secondary leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-accent text-[13px] font-semibold mt-auto">
                  En savoir plus
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="secondary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/services">Tous les services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center max-w-[560px] mx-auto mb-16">
            <span className="section-label mb-3 block">Comment ça fonctionne</span>
            <h2 className="text-display-l font-display text-text-primary mb-4">
              Un processus rodé, sans surprise
            </h2>
            <p className="text-body-l text-text-secondary">
              Quatre étapes claires, des livrables à chaque phase, et vous êtes tenu informé à chaque moment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border z-0" />

            {process.map(({ step, title, desc, duration }) => (
              <div key={step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-soft flex items-center justify-center mb-5 border-4 border-background-secondary">
                  <span className="font-display font-bold text-lg text-accent">{step}</span>
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-background-secondary rounded-full text-caption text-text-tertiary mb-3">
                  {duration}
                </div>
                <h3 className="text-heading-s font-display text-text-primary mb-2">{title}</h3>
                <p className="text-body-s text-text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label mb-3 block">Réalisations</span>
              <h2 className="text-display-l font-display text-text-primary">
                Des projets qui parlent d'eux-mêmes
              </h2>
            </div>
            <Button asChild variant="ghost" size="md" className="hidden md:flex" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/projects">Tous les projets</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group block bg-surface border border-border rounded-xl overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              >
                {/* Project visual */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: `${project.color}12` }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                    style={{ backgroundColor: project.color }}
                  >
                    <span>{project.sectorIcon}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-caption text-text-tertiary">{project.sector}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-caption text-text-tertiary">{project.duration}</span>
                  </div>
                  <h3 className="text-heading-s font-display text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-s text-text-secondary line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-background-secondary text-caption text-text-tertiary rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Button asChild variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/projects">Voir tous les projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-primary noise">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label mb-3 block text-accent">Témoignages</span>
            <h2 className="text-display-l font-display text-white mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-body-l text-white/55">
              Des projets livrés, des résultats mesurés, des équipes satisfaites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white/6 border border-white/10 rounded-xl p-7 flex flex-col gap-5"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <blockquote>
                  <p className="font-serif italic text-[18px] text-white/80 leading-relaxed line-clamp-4">
                    "{t.message}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-signature flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-display font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{t.name}</p>
                    <p className="text-caption text-white/45">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section-padding bg-background-secondary">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center max-w-[560px] mx-auto mb-12">
            <span className="section-label mb-3 block">Secteurs</span>
            <h2 className="text-display-l font-display text-text-primary mb-4">
              Votre secteur, notre expertise
            </h2>
            <p className="text-body-l text-text-secondary">
              Nous avons accompagné des structures de toutes tailles dans des secteurs variés.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-3.5 p-5 bg-surface border border-border rounded-lg hover:border-accent/30 transition-colors duration-200 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                </div>
                <p className="text-[14px] font-medium text-text-primary leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label mb-3 block">Nos offres</span>
            <h2 className="text-display-l font-display text-text-primary mb-4">
              Transparent sur les prix
            </h2>
            <p className="text-body-l text-text-secondary">
              Des offres claires comme point de départ. Chaque projet est ensuite adapté à votre besoin réel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {pricingPreview.map(({ name, price, desc, cta, featured }) => (
              <div
                key={name}
                className={`relative rounded-xl border p-7 flex flex-col gap-5 ${
                  featured
                    ? 'bg-gradient-signature border-accent/30 text-white shadow-accent-lg'
                    : 'bg-surface border-border'
                }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-caption font-semibold px-3 py-1 rounded-full border border-white/20">
                      Populaire
                    </span>
                  </div>
                )}
                <div>
                  <p className={`text-label font-semibold uppercase tracking-wider mb-2 ${featured ? 'text-white/60' : 'text-text-tertiary'}`}>
                    {name}
                  </p>
                  <p className={`text-3xl font-display font-bold ${featured ? 'text-white' : 'text-text-primary'}`}>
                    {price} <span className="text-[16px] font-normal opacity-60">€</span>
                  </p>
                </div>
                <p className={`text-body-s leading-relaxed ${featured ? 'text-white/70' : 'text-text-secondary'}`}>{desc}</p>
                <Button
                  asChild
                  variant={featured ? 'primary' : 'secondary'}
                  size="md"
                  className={featured ? 'bg-white text-accent hover:bg-white/90 mt-auto' : 'mt-auto'}
                >
                  <Link href="/pricing">{cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-body-s text-text-tertiary">
            Besoin d'une plateforme sur-mesure ?{' '}
            <Link href="/contact" className="text-accent font-medium hover:underline">
              Parlons-en →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <span className="section-label mb-3 block">FAQ</span>
            <h2 className="text-display-l font-display text-text-primary mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-surface border border-border rounded-lg p-6">
                <h3 className="text-heading-s font-display text-text-primary mb-3">{q}</h3>
                <p className="text-body-m text-text-secondary leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-body-m text-text-secondary">
            D'autres questions ?{' '}
            <Link href="/faq" className="text-accent font-medium hover:underline">
              Consultez notre FAQ complète →
            </Link>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-gradient-signature noise">
        <div className="container mx-auto max-w-[800px] text-center">
          <h2 className="text-display-l font-display text-white mb-4 text-balance">
            Prêt à créer quelque chose de remarquable ?
          </h2>
          <p className="text-body-l text-white/65 mb-8 max-w-[480px] mx-auto">
            Décrivez votre projet en 5 minutes. Nous vous répondons sous 48 heures avec une estimation et un plan d'action.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-accent hover:bg-white/90 font-semibold shadow-xl"
              rightIcon={<ArrowRight className="w-4.5 h-4.5" strokeWidth={1.5} />}
            >
              <Link href="/quote">Démarrer mon projet</Link>
            </Button>
            <Button asChild size="xl" variant="outline-white">
              <Link href="/booking">Prendre rendez-vous</Link>
            </Button>
          </div>
          <p className="text-caption text-white/40 mt-5">Aucun engagement · Devis gratuit · Réponse sous 48h</p>
        </div>
      </section>
    </>
  )
}
