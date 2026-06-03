'use client'

import Link from 'next/link'
import { AlertTriangle, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-[480px]">
        <div className="w-20 h-20 rounded-2xl bg-danger-soft flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-10 h-10 text-danger" strokeWidth={1.5} />
        </div>

        <h1 className="text-heading-xl font-display text-text-primary mb-3">
          Une erreur est survenue
        </h1>
        <p className="text-body-l text-text-secondary mb-2 leading-relaxed">
          Quelque chose s'est mal passé. L'erreur a été automatiquement signalée.
        </p>
        {error.digest && (
          <p className="text-caption text-text-tertiary font-mono mb-8">
            Référence : {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="primary"
            size="md"
            leftIcon={<RotateCcw className="w-4 h-4" strokeWidth={1.5} />}
            onClick={reset}
          >
            Réessayer
          </Button>
          <Button asChild variant="secondary" size="md">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
