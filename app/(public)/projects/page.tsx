import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { getPublishedProjects } from '@/data/projects'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Découvrez les projets réalisés par Atelier Nova pour des clients PME, restaurants, cabinets, organismes de formation et plus.',
}

export default function ProjectsPage() {
  const projects = getPublishedProjects()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-[700px]">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              Réalisations
            </span>
            <h1 className="text-display-xl font-display text-text-primary mb-5 text-balance">
              Des projets concrets, des résultats mesurés.
            </h1>
            <p className="text-body-l text-text-secondary leading-relaxed max-w-[560px]">
              Chaque projet est une opportunité de résoudre un vrai problème métier. Voici une sélection de ce que nous avons construit.
            </p>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group block bg-surface border border-border rounded-xl overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual */}
                <div
                  className="h-56 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: `${project.color}10` }}
                >
                  {/* Abstract grid visual */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, ${project.color}30 0, ${project.color}30 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, ${project.color}30 0, ${project.color}30 1px, transparent 1px, transparent 40px)`
                    }}
                  />
                  <div
                    className="relative z-10 w-24 h-24 rounded-3xl flex items-center justify-center text-4xl shadow-xl"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.sectorIcon}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-text-primary text-caption font-semibold px-3 py-1 rounded-full shadow-sm">
                        ★ Projet mis en avant
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-caption font-medium text-accent bg-accent-soft px-2.5 py-1 rounded">
                      {project.sector}
                    </span>
                    <div className="flex items-center gap-1.5 text-text-tertiary">
                      <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span className="text-caption">{project.duration}</span>
                    </div>
                  </div>

                  <h2 className="text-heading-m font-display text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-body-s text-text-tertiary mb-3">{project.client}</p>
                  <p className="text-body-m text-text-secondary leading-relaxed mb-5">
                    {project.tagline}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-5 p-4 bg-background rounded-lg border border-border">
                    {project.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <p className="text-heading-s font-display font-bold text-text-primary">{r.value}</p>
                        <p className="text-[10px] text-text-tertiary mt-0.5 leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-background-secondary text-caption text-text-tertiary rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-0.5 bg-background-secondary text-caption text-text-tertiary rounded">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-accent text-[13px] font-semibold">
                    Voir le projet en détail
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" strokeWidth={2} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container mx-auto max-w-[800px] text-center">
          <h2 className="text-display-l font-display text-text-primary mb-4">
            Votre projet, le prochain de la liste ?
          </h2>
          <p className="text-body-l text-text-secondary mb-8">
            Décrivez-nous votre contexte et vos objectifs. Nous vous répondons sous 48h.
          </p>
          <Button asChild size="lg" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
            <Link href="/quote">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
