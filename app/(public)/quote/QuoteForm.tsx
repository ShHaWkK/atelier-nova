'use client'

import * as React from 'react'
import { ArrowRight, ArrowLeft, Check, Euro, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'

const STEPS = [
  { label: 'Contact', step: 1 },
  { label: 'Projet', step: 2 },
  { label: 'Fonctionnalités', step: 3 },
  { label: 'Récapitulatif', step: 4 },
]

const PROJECT_TYPES = [
  { value: 'vitrine', label: 'Site vitrine' },
  { value: 'refonte', label: 'Refonte de site existant' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'reservation', label: 'Système de réservation' },
  { value: 'backoffice', label: 'Back-office / Admin' },
  { value: 'blog', label: 'Blog ou CMS' },
  { value: 'webapp', label: 'Application web métier' },
  { value: 'autre', label: 'Autre / Sur mesure' },
]

const SECTORS = [
  { value: 'conseil', label: 'Conseil / Services' },
  { value: 'restauration', label: 'Restauration / Hôtellerie' },
  { value: 'formation', label: 'Formation / Éducation' },
  { value: 'sante', label: 'Santé / Bien-être' },
  { value: 'immobilier', label: 'Immobilier / Agences' },
  { value: 'it', label: 'IT / Tech / Cybersécurité' },
  { value: 'evenementiel', label: 'Événementiel' },
  { value: 'commerce', label: 'Commerce / Retail' },
  { value: 'association', label: 'Association / ONG' },
  { value: 'autre', label: 'Autre' },
]

const BUDGETS = [
  { value: 'lt1500', label: 'Moins de 1 500 €' },
  { value: '1500-3000', label: '1 500 – 3 000 €' },
  { value: '3000-6000', label: '3 000 – 6 000 €' },
  { value: '6000-12000', label: '6 000 – 12 000 €' },
  { value: 'gt12000', label: 'Plus de 12 000 €' },
  { value: 'unknown', label: 'Je ne sais pas encore' },
]

const DELAYS = [
  { value: 'urgent', label: 'Urgent (< 3 semaines)' },
  { value: 'normal', label: '1 à 2 mois' },
  { value: 'flexible', label: '2 à 4 mois' },
  { value: 'no-rush', label: 'Pas de contrainte particulière' },
]

const PAGE_COUNTS = [
  { value: '1-3', label: '1 à 3 pages' },
  { value: '4-8', label: '4 à 8 pages' },
  { value: '9-15', label: '9 à 15 pages' },
  { value: '15+', label: 'Plus de 15 pages' },
]

const FEATURES = [
  { id: 'backoffice', label: 'Back-office administrable', price: 2200 },
  { id: 'reservation', label: 'Réservation / Prise de RDV', price: 2000 },
  { id: 'devis', label: 'Formulaire de devis avancé', price: 1500 },
  { id: 'blog', label: 'Blog administrable', price: 1400 },
  { id: 'payment', label: 'Paiement en ligne', price: 1800 },
  { id: 'seo', label: 'SEO technique avancé', price: 1200 },
  { id: 'email', label: 'Automatisation email', price: 900 },
  { id: 'logo', label: 'Logo / Identité visuelle', price: 800 },
  { id: 'content', label: 'Rédaction de contenu', price: 700 },
  { id: 'multilingual', label: 'Site multilingue', price: 1600 },
]

interface FormData {
  // Step 1
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  sector: string
  // Step 2
  projectType: string
  budget: string
  delay: string
  pageCount: string
  message: string
  // Step 3
  features: string[]
  maintenance: boolean
}

const initialData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  sector: '',
  projectType: '',
  budget: '',
  delay: '',
  pageCount: '',
  message: '',
  features: [],
  maintenance: false,
}

function estimatePrice(data: FormData): { min: number; max: number; duration: string } {
  const baseByType: Record<string, [number, number]> = {
    vitrine: [2500, 4500],
    refonte: [3000, 5500],
    ecommerce: [5000, 12000],
    reservation: [3500, 7000],
    backoffice: [4000, 9000],
    blog: [2000, 4000],
    webapp: [6000, 18000],
    autre: [3000, 8000],
  }

  const base = baseByType[data.projectType] ?? [3000, 7000]
  let min = base[0]
  let max = base[1]

  const featureExtra = data.features.reduce((sum, fId) => {
    const f = FEATURES.find((x) => x.id === fId)
    return sum + (f?.price ?? 0)
  }, 0)

  const pageMultiplier =
    data.pageCount === '4-8' ? 1.2 : data.pageCount === '9-15' ? 1.4 : data.pageCount === '15+' ? 1.7 : 1

  min = Math.round((min + featureExtra * 0.7) * pageMultiplier)
  max = Math.round((max + featureExtra) * pageMultiplier)

  const weeks = data.features.length <= 2 ? '3 à 5 semaines' : data.features.length <= 5 ? '5 à 7 semaines' : '7 à 10 semaines'

  return { min, max, duration: weeks }
}

export function QuoteForm() {
  const [step, setStep] = React.useState(1)
  const [data, setData] = React.useState<FormData>(initialData)
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormData, string>>>({})
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const estimate = estimatePrice(data)

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function toggleFeature(id: string) {
    setData((prev) => ({
      ...prev,
      features: prev.features.includes(id)
        ? prev.features.filter((f) => f !== id)
        : [...prev.features, id],
    }))
  }

  function validateStep(s: number): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (s === 1) {
      if (!data.firstName.trim()) newErrors.firstName = 'Votre prénom est requis'
      if (!data.lastName.trim()) newErrors.lastName = 'Votre nom est requis'
      if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email))
        newErrors.email = 'Adresse email invalide'
    }
    if (s === 2) {
      if (!data.projectType) newErrors.projectType = 'Choisissez un type de projet'
      if (!data.budget) newErrors.budget = 'Indiquez votre budget estimé'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function next() {
    if (validateStep(step)) setStep((s) => s + 1)
  }

  function prev() {
    setStep((s) => s - 1)
  }

  async function submit() {
    setSubmitting(true)
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, estimateMin: estimate.min, estimateMax: estimate.max }),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setSubmitted(true)
      toast({ variant: 'success', title: 'Demande envoyée !', description: 'Nous vous répondons sous 48h.' })
    } catch {
      toast({ variant: 'error', title: 'Une erreur est survenue', description: 'Veuillez réessayer ou nous contacter directement.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border rounded-xl p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-success-soft flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-success" strokeWidth={2} />
        </div>
        <h2 className="text-heading-xl font-display text-text-primary mb-3">Demande reçue !</h2>
        <p className="text-body-l text-text-secondary mb-2">
          Merci <strong>{data.firstName}</strong>. Nous avons bien reçu votre demande et nous vous répondrons sous 48 heures ouvrées.
        </p>
        <p className="text-body-s text-text-tertiary mb-8">
          Un récapitulatif a été envoyé à <strong>{data.email}</strong>.
        </p>
        <div className="p-5 bg-accent-soft rounded-xl border border-accent/15 text-left mb-8">
          <p className="text-label text-text-tertiary uppercase tracking-wider mb-3">Estimation indicative</p>
          <div className="flex items-center gap-2">
            <Euro className="w-5 h-5 text-accent" strokeWidth={1.5} />
            <span className="text-heading-m font-display text-text-primary">
              {estimate.min.toLocaleString('fr-FR')} – {estimate.max.toLocaleString('fr-FR')} €
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
            <span className="text-body-m text-text-secondary">{estimate.duration}</span>
          </div>
        </div>
        <Button variant="secondary" size="md" onClick={() => { setSubmitted(false); setData(initialData); setStep(1) }}>
          Soumettre une autre demande
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
      {/* Progress */}
      <div className="px-7 pt-7 pb-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-caption text-text-tertiary">Étape {step} sur {STEPS.length}</span>
          <span className="text-caption text-accent font-medium">{Math.round((step / STEPS.length) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-background-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-signature rounded-full transition-all duration-500 ease-standard"
            style={{ width: `${(step / STEPS.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-3 mb-7">
          {STEPS.map((s) => (
            <div key={s.step} className="flex flex-col items-center gap-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-caption font-semibold transition-all ${
                  s.step < step
                    ? 'bg-success text-white'
                    : s.step === step
                    ? 'bg-accent text-white'
                    : 'bg-background-secondary text-text-tertiary'
                }`}
              >
                {s.step < step ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} /> : s.step}
              </div>
              <span className={`text-[11px] font-medium hidden sm:block ${s.step === step ? 'text-accent' : 'text-text-tertiary'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-7 pb-7">
        {/* Step 1: Contact */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <h2 className="text-heading-m font-display text-text-primary mb-1">Vos coordonnées</h2>
              <p className="text-body-s text-text-secondary">Ces informations nous permettront de vous contacter avec votre devis.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Prénom" placeholder="Thomas" value={data.firstName} onChange={(e) => update('firstName', e.target.value)} error={errors.firstName} />
              <Input label="Nom" placeholder="Renard" value={data.lastName} onChange={(e) => update('lastName', e.target.value)} error={errors.lastName} />
            </div>
            <Input label="Email" type="email" placeholder="thomas@entreprise.fr" value={data.email} onChange={(e) => update('email', e.target.value)} error={errors.email} />
            <Input label="Téléphone" type="tel" placeholder="+33 6 12 34 56 78" value={data.phone} onChange={(e) => update('phone', e.target.value)} optional />
            <Input label="Entreprise" placeholder="Nom de votre société" value={data.company} onChange={(e) => update('company', e.target.value)} optional />
            <Select
              label="Secteur d'activité"
              placeholder="Sélectionnez votre secteur"
              options={SECTORS}
              value={data.sector}
              onChange={(e) => update('sector', e.target.value)}
              optional
            />
          </div>
        )}

        {/* Step 2: Project */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <h2 className="text-heading-m font-display text-text-primary mb-1">Votre projet</h2>
              <p className="text-body-s text-text-secondary">Décrivez les grandes lignes pour que nous puissions estimer au mieux.</p>
            </div>
            <Select
              label="Type de projet"
              placeholder="Quel type de site ou d'outil ?"
              options={PROJECT_TYPES}
              value={data.projectType}
              onChange={(e) => update('projectType', e.target.value)}
              error={errors.projectType}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <Select
                label="Budget estimé"
                placeholder="Fourchette indicative"
                options={BUDGETS}
                value={data.budget}
                onChange={(e) => update('budget', e.target.value)}
                error={errors.budget}
              />
              <Select
                label="Délai souhaité"
                placeholder="Dans quel délai ?"
                options={DELAYS}
                value={data.delay}
                onChange={(e) => update('delay', e.target.value)}
                optional
              />
            </div>
            <Select
              label="Nombre de pages approximatif"
              placeholder="Estimation du nombre de pages"
              options={PAGE_COUNTS}
              value={data.pageCount}
              onChange={(e) => update('pageCount', e.target.value)}
              optional
            />
            <Textarea
              label="Description libre"
              placeholder="Décrivez votre projet, vos objectifs, vos contraintes, ce que vous aimez ou n'aimez pas sur votre site actuel..."
              value={data.message}
              onChange={(e) => update('message', e.target.value)}
              optional
              className="min-h-[130px]"
            />
          </div>
        )}

        {/* Step 3: Features */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-heading-m font-display text-text-primary mb-1">Fonctionnalités souhaitées</h2>
              <p className="text-body-s text-text-secondary">Sélectionnez tout ce qui vous semble pertinent. L'estimation s'adapte en temps réel.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {FEATURES.map((feature) => {
                const checked = data.features.includes(feature.id)
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => toggleFeature(feature.id)}
                    className={`flex items-center justify-between p-4 rounded-lg border text-left transition-all duration-150 ${
                      checked
                        ? 'border-accent bg-accent-soft'
                        : 'border-border bg-background hover:border-accent/40 hover:bg-accent-soft/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                          checked ? 'bg-accent' : 'bg-surface border border-border'
                        }`}
                      >
                        {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </div>
                      <span className={`text-body-s font-medium ${checked ? 'text-accent' : 'text-text-secondary'}`}>
                        {feature.label}
                      </span>
                    </div>
                    <span className="text-caption text-text-tertiary flex-shrink-0 ml-2">
                      +{feature.price.toLocaleString('fr-FR')} €
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Maintenance */}
            <button
              type="button"
              onClick={() => update('maintenance', !data.maintenance)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border text-left transition-all duration-150 ${
                data.maintenance ? 'border-accent bg-accent-soft' : 'border-border bg-background hover:border-accent/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                    data.maintenance ? 'bg-accent' : 'bg-surface border border-border'
                  }`}
                >
                  {data.maintenance && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </div>
                <div>
                  <p className={`text-body-s font-medium ${data.maintenance ? 'text-accent' : 'text-text-secondary'}`}>
                    Contrat de maintenance mensuel
                  </p>
                  <p className="text-caption text-text-tertiary">Mises à jour, sauvegardes, monitoring, support</p>
                </div>
              </div>
              <span className="text-caption text-text-tertiary flex-shrink-0 ml-2">Dès 80 €/mois</span>
            </button>

            {/* Live estimate */}
            {data.projectType && (
              <div className="p-5 bg-primary rounded-xl text-white">
                <p className="text-caption text-white/50 uppercase tracking-wider mb-3">Estimation indicative (non contractuelle)</p>
                <div className="flex items-center gap-3 mb-2">
                  <Euro className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="text-heading-l font-display">
                    {estimate.min.toLocaleString('fr-FR')} – {estimate.max.toLocaleString('fr-FR')} €
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-body-s">{estimate.duration}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Recap */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-heading-m font-display text-text-primary mb-1">Récapitulatif</h2>
              <p className="text-body-s text-text-secondary">Vérifiez les informations avant d'envoyer votre demande.</p>
            </div>

            <div className="space-y-3">
              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <div className="px-5 py-3 bg-background-secondary border-b border-border">
                  <p className="text-label font-semibold text-text-secondary uppercase tracking-wider">Contact</p>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { label: 'Nom', value: `${data.firstName} ${data.lastName}` },
                    { label: 'Email', value: data.email },
                    data.phone && { label: 'Téléphone', value: data.phone },
                    data.company && { label: 'Entreprise', value: data.company },
                    data.sector && { label: 'Secteur', value: SECTORS.find((s) => s.value === data.sector)?.label ?? data.sector },
                  ].filter(Boolean).map((row) => (
                    <div key={(row as {label: string}).label} className="flex justify-between items-center px-5 py-3">
                      <span className="text-body-s text-text-tertiary">{(row as {label: string}).label}</span>
                      <span className="text-body-s text-text-primary font-medium">{(row as {value: string}).value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <div className="px-5 py-3 bg-background-secondary border-b border-border">
                  <p className="text-label font-semibold text-text-secondary uppercase tracking-wider">Projet</p>
                </div>
                <div className="divide-y divide-border">
                  {[
                    data.projectType && { label: 'Type', value: PROJECT_TYPES.find((t) => t.value === data.projectType)?.label ?? '' },
                    data.budget && { label: 'Budget', value: BUDGETS.find((b) => b.value === data.budget)?.label ?? '' },
                    data.delay && { label: 'Délai', value: DELAYS.find((d) => d.value === data.delay)?.label ?? '' },
                    data.pageCount && { label: 'Nb. pages', value: PAGE_COUNTS.find((p) => p.value === data.pageCount)?.label ?? '' },
                  ].filter(Boolean).map((row) => (
                    <div key={(row as {label: string}).label} className="flex justify-between items-center px-5 py-3">
                      <span className="text-body-s text-text-tertiary">{(row as {label: string}).label}</span>
                      <span className="text-body-s text-text-primary font-medium">{(row as {value: string}).value}</span>
                    </div>
                  ))}
                  {data.features.length > 0 && (
                    <div className="px-5 py-3">
                      <p className="text-body-s text-text-tertiary mb-2">Fonctionnalités</p>
                      <div className="flex flex-wrap gap-1.5">
                        {data.features.map((fId) => (
                          <span key={fId} className="text-caption bg-accent-soft text-accent px-2 py-0.5 rounded">
                            {FEATURES.find((f) => f.id === fId)?.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Estimate */}
              <div className="bg-primary rounded-xl p-5 text-white">
                <p className="text-caption text-white/50 uppercase tracking-wider mb-3">Estimation indicative</p>
                <div className="flex items-center gap-2 mb-2">
                  <Euro className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span className="text-heading-m font-display">
                    {estimate.min.toLocaleString('fr-FR')} – {estimate.max.toLocaleString('fr-FR')} €
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/55">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-body-s">{estimate.duration}</span>
                </div>
                <p className="text-[11px] text-white/30 mt-2">
                  Estimation non contractuelle. Le devis final sera établi après étude complète.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {step > 1 ? (
            <Button
              type="button"
              variant="secondary"
              size="md"
              onClick={prev}
              leftIcon={<ArrowLeft className="w-4 h-4" strokeWidth={1.5} />}
            >
              Retour
            </Button>
          ) : (
            <div />
          )}

          {step < STEPS.length ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={next}
              rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
            >
              Continuer
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              size="md"
              loading={submitting}
              onClick={submit}
              rightIcon={<Check className="w-4 h-4" strokeWidth={2} />}
            >
              Envoyer ma demande
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
