import type { Metadata } from 'next'
import { QuoteForm } from './QuoteForm'

export const metadata: Metadata = {
  title: 'Demande de devis',
  description: 'Décrivez votre projet en 5 minutes. Obtenez une estimation de prix et de délai.',
}

export default function QuotePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              Devis gratuit
            </span>
            <h1 className="text-display-l font-display text-text-primary mb-4 text-balance">
              Décrivez votre projet, on s'occupe du reste.
            </h1>
            <p className="text-body-l text-text-secondary max-w-[520px] mx-auto">
              5 minutes pour remplir le formulaire. 48 heures pour recevoir votre devis personnalisé.
              Aucun engagement.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  )
}
