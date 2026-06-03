import type { Metadata } from 'next'
import { BookingForm } from './BookingForm'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description: 'Réservez un créneau de 30 minutes pour discuter de votre projet avec l\'équipe Atelier Nova.',
}

export default function BookingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto max-w-[900px]">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              Rendez-vous
            </span>
            <h1 className="text-display-l font-display text-text-primary mb-4 text-balance">
              Réservez un créneau.
            </h1>
            <p className="text-body-l text-text-secondary max-w-[520px] mx-auto">
              30 minutes pour échanger sur votre projet, sans engagement. Visio ou téléphone selon votre préférence.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>
    </>
  )
}
