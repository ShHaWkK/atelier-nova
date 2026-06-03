import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, Calendar } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez l\'équipe Atelier Nova pour votre projet web.',
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-[560px] mb-14">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              Contact
            </span>
            <h1 className="text-display-xl font-display text-text-primary mb-4 text-balance">
              Parlons de votre projet.
            </h1>
            <p className="text-body-l text-text-secondary leading-relaxed">
              Une question, un projet en tête ou simplement envie d'échanger ? Nous répondons sous 24 heures ouvrées.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-5">
              {/* Contact card */}
              <div className="bg-surface border border-border rounded-xl p-7 space-y-5">
                <h2 className="text-heading-s font-display text-text-primary">Coordonnées</h2>

                <div className="space-y-4">
                  <a
                    href="mailto:hello@atelier-nova.fr"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-label text-text-tertiary uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-body-m text-text-primary group-hover:text-accent transition-colors">hello@atelier-nova.fr</p>
                    </div>
                  </a>

                  <a href="tel:+33123456789" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-label text-text-tertiary uppercase tracking-wider mb-0.5">Téléphone</p>
                      <p className="text-body-m text-text-primary group-hover:text-accent transition-colors">+33 1 23 45 67 89</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-label text-text-tertiary uppercase tracking-wider mb-0.5">Adresse</p>
                      <p className="text-body-m text-text-primary">12 rue de la Paix<br />75001 Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-label text-text-tertiary uppercase tracking-wider mb-0.5">Horaires</p>
                      <p className="text-body-s text-text-secondary">Lun – Ven : 9h00 – 18h00</p>
                      <p className="text-body-s text-text-tertiary">Weekends : fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-primary rounded-xl p-5 flex items-center gap-3 noise">
                <span className="w-3 h-3 rounded-full bg-success animate-pulse-dot flex-shrink-0" />
                <div>
                  <p className="text-[14px] font-semibold text-white">Disponible pour de nouveaux projets</p>
                  <p className="text-caption text-white/50 mt-0.5">Délai actuel : 2 semaines avant démarrage</p>
                </div>
              </div>

              {/* Quick links */}
              <div className="grid grid-cols-2 gap-3">
                <Button asChild variant="secondary" size="md" className="justify-center" leftIcon={<MessageSquare className="w-4 h-4" strokeWidth={1.5} />}>
                  <Link href="/quote">Demande de devis</Link>
                </Button>
                <Button asChild variant="secondary" size="md" className="justify-center" leftIcon={<Calendar className="w-4 h-4" strokeWidth={1.5} />}>
                  <Link href="/booking">Prendre RDV</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
