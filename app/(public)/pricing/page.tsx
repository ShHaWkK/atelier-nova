import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, HelpCircle, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Tarifs',
  description: 'Découvrez les offres Atelier Nova : Essentiel, Croissance, Premium et Sur mesure. Prix transparents, délais annoncés.',
}

const plans = [
  {
    name: 'Essentiel',
    target: 'Indépendants, TPE',
    price: 2900,
    priceLabel: '2 900',
    desc: 'Un site professionnel pour bien se présenter et commencer à générer des demandes.',
    features: [
      'Site vitrine 5 pages',
      'Design responsive mobile/desktop',
      'Formulaire de contact',
      'SEO on-page',
      'HTTPS + optimisation vitesse',
      'Formation à la mise à jour',
      '30 jours de support',
    ],
    missing: ['Back-office administrable', 'Réservation ou devis', 'Blog administrable'],
    duration: '3 à 4 semaines',
    cta: 'Choisir Essentiel',
    featured: false,
    maintenance: 'Option dès 80 €/mois',
  },
  {
    name: 'Croissance',
    target: 'PME, cabinets, agences',
    price: 5800,
    priceLabel: '5 800',
    desc: 'Un site qui génère des leads avec un formulaire qualifiant ou un système de réservation.',
    features: [
      'Tout ce qui est dans Essentiel',
      'Back-office administrable',
      'Formulaire de devis OU réservation',
      'Génération de devis PDF',
      'Notifications email automatisées',
      'Dashboard admin',
      'Formation équipe incluse',
      '60 jours de support',
    ],
    missing: ['Blog administrable', 'Intégrations avancées'],
    duration: '5 à 6 semaines',
    cta: 'Recommandé — Choisir Croissance',
    featured: true,
    maintenance: 'Option dès 120 €/mois',
  },
  {
    name: 'Premium',
    target: 'Structures avec équipe',
    price: 9500,
    priceLabel: '9 500',
    desc: 'Une plateforme complète avec toutes les fonctionnalités pour gérer votre activité en ligne.',
    features: [
      'Tout ce qui est dans Croissance',
      'Blog administrable complet',
      'Réservation ET devis',
      'Gestion des témoignages',
      'Gestion des projets / portfolio',
      'Multi-utilisateurs admin',
      'SEO technique avancé',
      '90 jours de support prioritaire',
    ],
    missing: [],
    duration: '7 à 9 semaines',
    cta: 'Choisir Premium',
    featured: false,
    maintenance: 'Option dès 180 €/mois',
  },
]

const maintenancePlans = [
  {
    name: 'Essentiel',
    price: '80',
    features: [
      'Monitoring disponibilité',
      'Sauvegarde hebdomadaire',
      'Renouvellement SSL',
      'Rapport trimestriel',
    ],
  },
  {
    name: 'Sérénité',
    price: '150',
    features: [
      'Monitoring 24/7 (alerte < 5 min)',
      'Sauvegarde quotidienne',
      'Mises à jour mensuelles',
      '2h de corrections incluses',
      'Rapport mensuel de performance',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '250',
    features: [
      'Tout Sérénité inclus',
      '5h de développement incluses',
      'Support prioritaire (< 2h)',
      'Suivi SEO mensuel',
      'Audit trimestriel',
    ],
  },
]

const faqs = [
  {
    q: 'Les prix sont-ils fixes ?',
    a: 'Les offres ci-dessus sont des points de départ basés sur des projets type. Chaque projet est cadré avec vous avant tout engagement. Le devis final peut être différent selon la complexité réelle.',
  },
  {
    q: 'Y a-t-il des frais d\'hébergement supplémentaires ?',
    a: 'L\'hébergement n\'est pas inclus dans les tarifs de création. Nous recommandons et configurons votre hébergement (Vercel, Infomaniak, OVH) — comptez 10 à 40 €/mois selon les besoins. Le nom de domaine reste à votre charge (10-15 €/an).',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: '30% à la signature, 40% à la livraison du design validé, 30% à la mise en production. Aucun frais caché.',
  },
  {
    q: 'Puis-je faire évoluer mon site après la livraison ?',
    a: 'Oui. Vous pouvez gérer vous-même les contenus via le back-office. Pour des évolutions techniques ou de nouvelles fonctionnalités, nous proposons des tarifs horaires (75-95 €/h) ou des forfaits à définir ensemble.',
  },
  {
    q: 'Est-ce que je possède mon site à la livraison ?',
    a: 'Oui, absolument. Le code source, le design et le nom de domaine vous appartiennent intégralement à la livraison. Aucun abonnement obligatoire, aucune dépendance vis-à-vis d\'Atelier Nova.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-[680px]">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              Tarifs
            </span>
            <h1 className="text-display-xl font-display text-text-primary mb-5 text-balance">
              Des prix clairs, sans mauvaise surprise.
            </h1>
            <p className="text-body-l text-text-secondary leading-relaxed">
              Chaque offre est un point de départ. Votre projet est unique — nous nous adaptons toujours à votre réalité.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border flex flex-col ${
                  plan.featured
                    ? 'bg-primary border-accent/30 shadow-accent-lg'
                    : 'bg-surface border-border shadow-sm'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-signature text-white text-caption font-semibold px-4 py-1.5 rounded-full shadow-accent">
                      ★ Recommandé
                    </span>
                  </div>
                )}

                <div className="p-7 pb-6 border-b border-white/10">
                  <p className={`text-caption font-medium uppercase tracking-wider mb-1 ${plan.featured ? 'text-white/50' : 'text-text-tertiary'}`}>
                    {plan.target}
                  </p>
                  <h2 className={`text-heading-l font-display mb-2 ${plan.featured ? 'text-white' : 'text-text-primary'}`}>
                    {plan.name}
                  </h2>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`text-4xl font-display font-bold ${plan.featured ? 'text-white' : 'text-text-primary'}`}>
                      {plan.priceLabel} €
                    </span>
                  </div>
                  <p className={`text-body-s leading-relaxed ${plan.featured ? 'text-white/60' : 'text-text-secondary'}`}>
                    {plan.desc}
                  </p>
                  <div className={`mt-3 flex items-center gap-1.5 text-caption ${plan.featured ? 'text-white/40' : 'text-text-tertiary'}`}>
                    <span>⏱</span>
                    <span>{plan.duration}</span>
                  </div>
                </div>

                <div className="p-7 flex-1">
                  <p className={`text-label uppercase tracking-wider mb-4 ${plan.featured ? 'text-white/50' : 'text-text-tertiary'}`}>
                    Inclus
                  </p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.featured ? 'bg-success/20' : 'bg-success-soft'
                        }`}>
                          <Check className="w-3 h-3 text-success" strokeWidth={2.5} />
                        </div>
                        <span className={`text-body-s ${plan.featured ? 'text-white/75' : 'text-text-secondary'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.missing.length > 0 && (
                    <ul className="space-y-2.5 mb-6 opacity-50">
                      {plan.missing.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 text-text-tertiary">—</span>
                          <span className={`text-body-s line-through ${plan.featured ? 'text-white/40' : 'text-text-tertiary'}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={`text-caption mb-6 ${plan.featured ? 'text-white/40' : 'text-text-tertiary'}`}>
                    {plan.maintenance}
                  </div>

                  <Button
                    asChild
                    variant={plan.featured ? 'primary' : 'secondary'}
                    size="md"
                    className={`w-full justify-center ${plan.featured ? 'bg-white text-accent hover:bg-white/90' : ''}`}
                    rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
                  >
                    <Link href="/quote">{plan.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom */}
          <div className="mt-8 bg-background border border-border rounded-xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <h3 className="text-heading-m font-display text-text-primary mb-1">Sur mesure</h3>
              <p className="text-body-m text-text-secondary">
                Marketplace, SaaS, CRM interne, automatisations avancées... On le fait.
              </p>
            </div>
            <Button asChild variant="dark" size="md" className="flex-shrink-0" rightIcon={<MessageSquare className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/contact">Parler de mon projet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="section-padding bg-background-secondary">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center max-w-[560px] mx-auto mb-12">
            <span className="section-label mb-3 block">Maintenance</span>
            <h2 className="text-display-l font-display text-text-primary mb-4">
              Un site qui reste performant dans le temps
            </h2>
            <p className="text-body-l text-text-secondary">
              Optionnel mais fortement recommandé. Un site sans maintenance se dégrade silencieusement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-7 flex flex-col gap-5 ${
                  plan.featured ? 'bg-accent border-accent/30 shadow-accent' : 'bg-surface border-border'
                }`}
              >
                <div>
                  <h3 className={`text-heading-s font-display mb-1 ${plan.featured ? 'text-white' : 'text-text-primary'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-3xl font-display font-bold mt-2 ${plan.featured ? 'text-white' : 'text-text-primary'}`}>
                    {plan.price} <span className={`text-sm font-normal ${plan.featured ? 'text-white/60' : 'text-text-tertiary'}`}>€/mois</span>
                  </p>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-white/80' : 'text-success'}`} strokeWidth={2} />
                      <span className={`text-body-s ${plan.featured ? 'text-white/75' : 'text-text-secondary'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.featured ? 'primary' : 'secondary'}
                  size="sm"
                  className={plan.featured ? 'bg-white text-accent hover:bg-white/90' : ''}
                >
                  <Link href="/contact">Choisir {plan.name}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-[860px]">
          <div className="text-center mb-12">
            <span className="section-label mb-3 block">FAQ Tarifs</span>
            <h2 className="text-display-l font-display text-text-primary">Questions sur les prix</h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-heading-s font-display text-text-primary mb-2">{q}</h3>
                    <p className="text-body-m text-text-secondary leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
