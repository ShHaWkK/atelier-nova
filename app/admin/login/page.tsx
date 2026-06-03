'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Zap, Eye, EyeOff, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = React.useState('admin@atelier-nova.fr')
  const [password, setPassword] = React.useState('admin123')
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Demo auth
    await new Promise((r) => setTimeout(r, 800))

    if (email === 'admin@atelier-nova.fr' && password === 'admin123') {
      toast({ variant: 'success', title: 'Connexion réussie', description: 'Bienvenue dans votre espace admin.' })
      router.push('/admin/dashboard')
    } else {
      setError('Email ou mot de passe incorrect')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 noise">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-signature flex items-center justify-center shadow-accent-lg mb-4">
            <Zap className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <h1 className="text-heading-l font-display text-white">Atelier Nova</h1>
          <p className="text-body-s text-white/40 mt-1">Espace administrateur</p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/6 border border-white/10 rounded-xl p-7 backdrop-blur-sm space-y-5"
        >
          <div>
            <h2 className="text-heading-s font-display text-white mb-1">Connexion</h2>
            <p className="text-caption text-white/40">Accédez à votre tableau de bord.</p>
          </div>

          {error && (
            <div className="flex items-center gap-2.5 p-3 bg-danger-soft/15 border border-danger/20 rounded-lg">
              <span className="text-body-s text-danger">{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-label text-white/60 mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 bg-white/8 border border-white/15 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="admin@atelier-nova.fr"
                required
              />
            </div>

            <div>
              <label className="text-label text-white/60 mb-1.5 block">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 px-4 pr-11 bg-white/8 border border-white/15 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" strokeWidth={1.5} /> : <Eye className="w-4 h-4" strokeWidth={1.5} />}
                </button>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            loading={loading}
            className="w-full justify-center"
            rightIcon={<LogIn className="w-4 h-4" strokeWidth={1.5} />}
          >
            Se connecter
          </Button>

          <div className="p-3 bg-white/4 border border-white/8 rounded-lg">
            <p className="text-caption text-white/40 text-center">
              Démo : <span className="text-white/60">admin@atelier-nova.fr</span> / <span className="text-white/60">admin123</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
