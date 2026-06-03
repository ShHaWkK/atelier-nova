import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Réponses aux questions fréquentes sur les services Atelier Nova : délais, tarifs, maintenance, hébergement, propriété du site.',
}

const faqCategories = [
  {
    category: 'Délais & Processus',
    icon: '⏱',
    faqs: [
      {
        q: 'Combien de temps faut-il pour créer mon site ?',
        a: 'Un site vitrine standard (5 pages) prend 3 à 5 semaines. Une plateforme avec back-office, réservation et devis : 6 à 9 semaines. Ces délais incluent la phase de design, le développement, les tests et la formation.',
      },
      {
        q: 'Comment se déroule le projet concrètement ?',
        a: 'Nous travaillons en 4 phases : (1) Cadrage — nous définissons ensemble les objectifs et le périmètre. (2) Design — nous créons les maquettes et les validons avec vous. (3) Développement — nous construisons le site. (4) Livraison — mise en ligne, tests finaux et formation à l\'utilisation.',
      },
      {
        q: 'Est-ce que je peux voir l\'avancement avant la livraison finale ?',
        a: 'Oui. Nous livrons régulièrement des versions intermédiaires pour validation. Vous ne découvrez jamais le site terminé à la surprise.',
      },
      {
        q: 'Que se passe-t-il si je change d\'avis sur certains éléments ?',
        a: 'Les ajustements mineurs dans le périmètre défini sont inclus. Pour des changements importants en cours de projet, nous définissons ensemble les impacts sur le délai et le budget avant de procéder.',
      },
    ],
  },
  {
    category: 'Tarifs & Paiement',
    icon: '💰',
    faqs: [
      {
        q: 'Comment se passe le paiement ?',
        a: '30% à la signature du devis, 40% à la validation du design, 30% à la mise en production. Paiement par virement bancaire.',
      },
      {
        q: 'Y a-t-il des coûts cachés après la livraison ?',
        a: 'Non. Le prix du devis est définitif. Les seuls coûts récurrents sont l\'hébergement (10-40 €/mois, à votre charge) et un éventuel contrat de maintenance (optionnel). Tout est annoncé avant signature.',
      },
      {
        q: 'Proposez-vous des facilités de paiement ?',
        a: 'Nous pouvons aménager l\'échelonnement des paiements pour les projets importants. À discuter lors du cadrage.',
      },
    ],
  },
  {
    category: 'Technique & Hébergement',
    icon: '⚙️',
    faqs: [
      {
        q: 'Sur quelle technologie est construit mon site ?',
        a: 'Nous utilisons Next.js (React), Tailwind CSS, et Prisma avec une base de données PostgreSQL ou SQLite. Ce sont des technologies modernes, robustes et très largement supportées. Votre site peut être repris par n\'importe quel développeur JavaScript compétent.',
      },
      {
        q: 'Où sera hébergé mon site ?',
        a: 'Nous recommandons Vercel (très performant, gratuit pour les petits sites) ou Infomaniak/OVH pour des besoins plus importants. Vous choisissez et payez directement votre hébergement — vous restez indépendant.',
      },
      {
        q: 'Est-ce que mon site sera rapide sur mobile ?',
        a: 'Oui. Tous nos sites visent un score Core Web Vitals vert (LCP < 2.5s, CLS < 0.1). Nous optimisons les images, le JavaScript et le CSS dès la conception.',
      },
      {
        q: 'Mon site sera-t-il bien référencé sur Google ?',
        a: 'Nous intégrons le SEO technique dès la conception : balises, structure, vitesse, données structurées, sitemap. Cela pose les fondations. Le SEO éditorial (création de contenu) dépend de vous — ou de notre service dédié.',
      },
    ],
  },
  {
    category: 'Gestion & Autonomie',
    icon: '🎛️',
    faqs: [
      {
        q: 'Puis-je modifier mon site moi-même après livraison ?',
        a: 'Oui. Chaque site est livré avec un back-office adapté à votre niveau. Vous pouvez mettre à jour les textes, images, articles de blog, etc. sans aucune compétence technique. Nous formons votre équipe à la livraison.',
      },
      {
        q: 'Combien de personnes peuvent avoir accès à l\'admin ?',
        a: 'Autant que vous souhaitez. Les offres Croissance et Premium incluent la gestion multi-utilisateurs avec des rôles différents (admin, éditeur).',
      },
    ],
  },
  {
    category: 'Propriété & Sécurité',
    icon: '🔒',
    faqs: [
      {
        q: 'À qui appartient le site livré ?',
        a: 'À vous, entièrement. Le code source, le design, les contenus et le nom de domaine vous appartiennent dès la livraison finale. Aucun abonnement obligatoire, aucune dépendance vis-à-vis d\'Atelier Nova.',
      },
      {
        q: 'Que se passe-t-il si je veux changer de prestataire ensuite ?',
        a: 'Vous recevez le code source complet (dépôt Git). N\'importe quel développeur Next.js peut reprendre le projet. Pas de vendor lock-in.',
      },
      {
        q: 'Mon site sera-t-il sécurisé ?',
        a: 'Oui. Nous intégrons systématiquement : HTTPS, en-têtes de sécurité HTTP, protection CSRF, validation des entrées, sauvegardes. La sécurité n\'est pas une option — elle est incluse dans chaque projet.',
      },
      {
        q: 'Est-ce que mon site est conforme au RGPD ?',
        a: 'Nous mettons en place les fondations RGPD : consentement aux cookies, politique de confidentialité, formulaires conformes. Pour une conformité totale (notamment pour les sites traitant des données sensibles), nous recommandons une consultation juridique spécialisée.',
      },
    ],
  },
  {
    category: 'Maintenance',
    icon: '🔧',
    faqs: [
      {
        q: 'La maintenance est-elle obligatoire ?',
        a: 'Non. C\'est une option. Cela dit, nous la recommandons fortement : sans maintenance, votre site accumule des failles de sécurité et se dégrade progressivement (incompatibilités, performances).',
      },
      {
        q: 'Que couvre un contrat de maintenance ?',
        a: 'Monitoring de disponibilité 24/7, mises à jour mensuelles des dépendances, sauvegardes automatiques, renouvellement SSL, corrections de bugs mineurs et rapport mensuel. Les formules commencent à 80 €/mois.',
      },
      {
        q: 'Intervenez-vous en urgence si le site tombe ?',
        a: 'Oui, pour nos clients sous contrat de maintenance. Délai d\'intervention maximal : 2 heures en jours ouvrés.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto max-w-[900px]">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              FAQ
            </span>
            <h1 className="text-display-xl font-display text-text-primary mb-4 text-balance">
              Questions fréquentes
            </h1>
            <p className="text-body-l text-text-secondary max-w-[520px] mx-auto">
              Tout ce que vous voulez savoir avant de nous contacter. Et si vous ne trouvez pas la réponse — contactez-nous.
            </p>
          </div>

          <div className="space-y-10">
            {faqCategories.map(({ category, icon, faqs }) => (
              <div key={category}>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-2xl">{icon}</span>
                  <h2 className="text-heading-l font-display text-text-primary">{category}</h2>
                </div>

                <div className="space-y-3">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="bg-surface border border-border rounded-xl overflow-hidden">
                      <div className="px-7 py-5">
                        <h3 className="text-heading-s font-display text-text-primary mb-3">{q}</h3>
                        <p className="text-body-m text-text-secondary leading-relaxed">{a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto max-w-[700px] text-center">
          <h2 className="text-display-l font-display text-text-primary mb-4">
            Toujours une question ?
          </h2>
          <p className="text-body-l text-text-secondary mb-8">
            Écrivez-nous directement ou réservez un appel de 30 minutes — gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/booking">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
