'use client'

import * as React from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'

const SUBJECTS = [
  { value: 'project', label: 'Nouveau projet' },
  { value: 'quote', label: 'Question sur un devis' },
  { value: 'maintenance', label: 'Maintenance / support' },
  { value: 'partnership', label: 'Partenariat' },
  { value: 'other', label: 'Autre' },
]

export function ContactForm() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Votre nom est requis'
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = 'Email invalide'
    if (!subject) e.subject = 'Choisissez un sujet'
    if (!message.trim() || message.length < 20) e.message = 'Votre message doit faire au moins 20 caractères'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, subject, message, type: 'contact' }),
      })
      setSubmitted(true)
      toast({ variant: 'success', title: 'Message envoyé !', description: 'Nous vous répondons sous 24h ouvrées.' })
    } catch {
      toast({ variant: 'error', title: 'Erreur lors de l\'envoi', description: 'Réessayez ou envoyez-nous un email directement.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border rounded-xl p-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-success-soft flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-success" strokeWidth={1.5} />
        </div>
        <h3 className="text-heading-m font-display text-text-primary mb-2">Message envoyé !</h3>
        <p className="text-body-m text-text-secondary">
          Merci <strong>{name}</strong>. Nous vous répondrons à <strong>{email}</strong> sous 24 heures ouvrées.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Nom complet"
          placeholder="Thomas Renard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <Input
          label="Email"
          type="email"
          placeholder="thomas@entreprise.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
      </div>

      <Input
        label="Entreprise"
        placeholder="Nom de votre société"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        optional
      />

      <Select
        label="Sujet"
        placeholder="Choisissez un sujet"
        options={SUBJECTS}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        error={errors.subject}
      />

      <Textarea
        label="Message"
        placeholder="Décrivez votre demande ou votre projet..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={errors.message}
        className="min-h-[140px]"
      />

      <Button
        type="submit"
        variant="primary"
        size="md"
        loading={submitting}
        rightIcon={<Send className="w-4 h-4" strokeWidth={1.5} />}
      >
        Envoyer le message
      </Button>
    </form>
  )
}
