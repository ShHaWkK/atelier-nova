import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe, RefreshCw, Calendar, FileText, LayoutDashboard,
  PenSquare, Mail, TrendingUp, Shield, ArrowRight, Check,
  Clock, Euro,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import { formatCurrency } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Découvrez tous les services Atelier Nova : site vitrine, back-office, réservation, devis, SEO, maintenance.',
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  RefreshCw,
  Calendar,
  FileText,
  LayoutDashboard,
  PenSquare,
  Mail,
  TrendingUp,
  Shield,
}

const categoryLabels = {
  creation: 'Création & Refonte',
  feature: 'Fonctionnalités',
  growth: 'Croissance & Performance',
}

const categoryDescs = {
  creation: 'La base de votre présence digitale, conçue pour durer.',
  feature: 'Des modules métier qui automatisent et convertissent.',
  growth: 'Optimiser, sécuriser et faire croître votre trafic.',
}

const grouped = {
  creation: services.filter((s) => s.category === 'creation'),
  feature: services.filter((s) => s.category === 'feature'),
  growth: services.filter((s) => s.category === 'growth'),
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary noise">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-[700px]">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              Nos services
            </span>
            <h1 className="text-display-xl font-display text-white mb-5 text-balance">
              Tout ce dont votre entreprise a besoin en ligne.
            </h1>
            <p className="text-body-l text-white/55 leading-relaxed max-w-[560px]">
              Des services complémentaires, pensés pour travailler ensemble.
              Du site vitrine à la plateforme administrable, en passant par le SEO et la maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services by category */}
      {(Object.keys(grouped) as Array<keyof typeof grouped>).map((cat) => (
        <section key={cat} id={cat} className="section-padding bg-background even:bg-background-secondary">
          <div className="container mx-auto max-w-[1200px]">
            <div className="mb-12">
              <span className="section-label mb-2 block">{categoryLabels[cat]}</span>
              <h2 className="text-display-m font-display text-text-primary mb-3">
                {categoryLabels[cat]}
              </h2>
              <p className="text-body-l text-text-secondary">{categoryDescs[cat]}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {grouped[cat].map((service) => {
                const Icon = iconMap[service.icon] ?? Globe
                return (
                  <div
                    key={service.id}
                    id={service.slug}
                    className="group bg-surface border border-border rounded-xl p-8 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="text-right">
                        <p className="text-caption text-text-tertiary">À partir de</p>
                        <p className="text-heading-m font-display text-text-primary font-bold">
                          {service.startingPrice < 1000
                            ? `${service.startingPrice} €/mois`
                            : formatCurrency(service.startingPrice)}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-heading-m font-display text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body-s text-accent font-medium mb-4">{service.tagline}</p>
                    <p className="text-body-m text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-label text-text-tertiary uppercase tracking-wider mb-3">Bénéfices</p>
                        <ul className="space-y-2">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" strokeWidth={2} />
                              <span className="text-body-s text-text-secondary">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-label text-text-tertiary uppercase tracking-wider mb-3">Livrables</p>
                        <ul className="space-y-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                              <span className="text-body-s text-text-secondary">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-border">
                      <div className="flex items-center gap-1.5 text-text-tertiary">
                        <Clock className="w-4 h-4" strokeWidth={1.5} />
                        <span className="text-body-s">{service.duration}</span>
                      </div>
                      <Button
                        asChild
                        variant="primary"
                        size="sm"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />}
                      >
                        <Link href="/quote">Demander un devis</Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Custom offer */}
      <section className="section-padding bg-primary noise">
        <div className="container mx-auto max-w-[900px] text-center">
          <h2 className="text-display-l font-display text-white mb-4">
            Votre projet ne rentre pas dans une case ?
          </h2>
          <p className="text-body-l text-white/55 mb-8 max-w-[560px] mx-auto">
            La majorité de nos projets sont sur-mesure. Décrivez-nous votre situation, nous vous proposerons la meilleure approche.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/quote">Décrire mon projet</Link>
            </Button>
            <Button asChild size="lg" variant="outline-white">
              <Link href="/booking">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
