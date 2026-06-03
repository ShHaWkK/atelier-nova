import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, Clock, ExternalLink } from 'lucide-react'
import { getProjectBySlug, getPublishedProjects } from '@/data/projects'
import { Button } from '@/components/ui/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Projet introuvable' }
  return {
    title: project.title,
    description: project.tagline,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <>
      {/* Back nav */}
      <div className="pt-24 pb-4 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-body-s text-text-tertiary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Retour aux réalisations
          </Link>
        </div>
      </div>

      {/* Hero project */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-caption font-medium text-accent bg-accent-soft px-2.5 py-1 rounded">
                  {project.sector}
                </span>
                <div className="flex items-center gap-1.5 text-text-tertiary">
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span className="text-caption">{project.duration}</span>
                </div>
              </div>

              <h1 className="text-display-l font-display text-text-primary mb-3">{project.title}</h1>
              <p className="text-body-m text-text-tertiary mb-5">{project.client}</p>
              <p className="text-body-l text-text-secondary leading-relaxed mb-8">{project.tagline}</p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4">
                {project.results.map((r) => (
                  <div key={r.label} className="bg-surface border border-border rounded-lg p-4 text-center">
                    <p className="text-heading-m font-display font-bold text-text-primary">{r.value}</p>
                    <p className="text-caption text-text-tertiary mt-1">{r.label}</p>
                    <p className="text-[10px] text-text-tertiary/70 mt-0.5">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div
              className="h-[380px] rounded-xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: `${project.color}10` }}
            >
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, ${project.color}40 0, ${project.color}40 1px, transparent 1px, transparent 30px)`
                }}
              />
              <div
                className="relative z-10 w-32 h-32 rounded-3xl flex items-center justify-center text-6xl shadow-2xl"
                style={{ backgroundColor: project.color }}
              >
                {project.sectorIcon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Problem */}
      <section className="section-padding bg-background-secondary">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <span className="section-label mb-3 block">Contexte client</span>
              <h2 className="text-heading-xl font-display text-text-primary mb-4">Le point de départ</h2>
              <p className="text-body-l text-text-secondary leading-relaxed">{project.description}</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-7">
              <h3 className="text-heading-s font-display text-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-danger" />
                La problématique
              </h3>
              <p className="text-body-m text-text-secondary leading-relaxed">{project.problem}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Approach */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-background-secondary border border-border rounded-xl p-7">
              <h3 className="text-heading-s font-display text-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                La solution
              </h3>
              <p className="text-body-m text-text-secondary leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <span className="section-label mb-3 block">Approche</span>
              <h2 className="text-heading-xl font-display text-text-primary mb-4">Méthodologie UX/UI</h2>
              <p className="text-body-l text-text-secondary leading-relaxed">{project.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-3 block">Fonctionnalités</span>
              <h2 className="text-heading-xl font-display text-text-primary mb-6">Ce qui a été livré</h2>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" strokeWidth={2.5} />
                    </div>
                    <span className="text-body-m text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* Stack */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="text-heading-s font-display text-text-primary mb-4">Stack technique</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-background font-mono text-body-s text-text-secondary rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="text-heading-s font-display text-text-primary mb-4">Livrables</h3>
                <ul className="space-y-2">
                  {project.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-body-s text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary noise">
        <div className="container mx-auto max-w-[800px] text-center">
          <h2 className="text-display-l font-display text-white mb-4">
            Un projet similaire en tête ?
          </h2>
          <p className="text-body-l text-white/55 mb-8 max-w-[480px] mx-auto">
            Décrivez votre contexte en 5 minutes. Nous vous répondons avec une approche concrète sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/quote">Démarrer un projet similaire</Link>
            </Button>
            <Button asChild size="lg" variant="outline-white">
              <Link href="/projects">
                <ArrowLeft className="w-4 h-4 mr-1.5" strokeWidth={1.5} />
                Autres réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
