import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-[480px]">
        {/* 404 display */}
        <div className="relative mb-10">
          <p className="text-[140px] font-display font-black text-border leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-signature flex items-center justify-center shadow-accent-lg">
              <span className="text-3xl">🔍</span>
            </div>
          </div>
        </div>

        <h1 className="text-heading-xl font-display text-text-primary mb-3">
          Page introuvable
        </h1>
        <p className="text-body-l text-text-secondary mb-8 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée.
          Pas d'inquiétude, tout le reste fonctionne parfaitement.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="primary" size="md" leftIcon={<Home className="w-4 h-4" strokeWidth={1.5} />}>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
          <Button asChild variant="secondary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" strokeWidth={1.5} />}>
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
