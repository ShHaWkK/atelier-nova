'use client'

import * as React from 'react'
import { Check, ChevronLeft, ChevronRight, Video, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'

const MEETING_TYPES = [
  {
    id: 'discovery',
    label: 'Découverte projet',
    desc: 'Premier échange pour découvrir votre projet et vos objectifs',
    duration: '30 min',
    icon: Video,
  },
  {
    id: 'quote-review',
    label: 'Revue de devis',
    desc: 'Discussion sur un devis reçu et affinement du périmètre',
    duration: '45 min',
    icon: Phone,
  },
  {
    id: 'technical',
    label: 'Point technique',
    desc: 'Questions techniques, architecture, choix de stack',
    duration: '30 min',
    icon: Calendar,
  },
]

const AVAILABLE_TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1)
  const days = []
  const firstDay = new Date(year, month, 1).getDay()
  const adjusted = (firstDay + 6) % 7
  for (let i = 0; i < adjusted; i++) days.push(null)
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

const MONTH_NAMES = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
const DAY_NAMES = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const disabledDays = (d: Date): boolean => {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  if (d < now) return true
  const dow = d.getDay()
  return dow === 0 || dow === 6
}

export function BookingForm() {
  const [meetingType, setMeetingType] = React.useState('')
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const days = getDaysInMonth(currentYear, currentMonth)

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear((y) => y - 1) }
    else setCurrentMonth((m) => m - 1)
    setSelectedDate(null)
    setSelectedTime('')
  }

  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear((y) => y + 1) }
    else setCurrentMonth((m) => m + 1)
    setSelectedDate(null)
    setSelectedTime('')
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!meetingType) e.meetingType = 'Choisissez un type de rendez-vous'
    if (!selectedDate) e.date = 'Sélectionnez une date'
    if (!selectedTime) e.time = 'Sélectionnez un créneau'
    if (!name.trim()) e.name = 'Votre nom est requis'
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = 'Email invalide'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          meetingType,
          date: selectedDate?.toISOString(),
          time: selectedTime,
          name,
          email,
          phone,
          message,
        }),
      })
      setSubmitted(true)
      toast({ variant: 'success', title: 'Rendez-vous réservé !', description: 'Vous recevrez une confirmation par email.' })
    } catch {
      toast({ variant: 'error', title: 'Une erreur est survenue', description: 'Veuillez réessayer.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border rounded-xl p-10 text-center shadow-sm max-w-[600px] mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-success-soft flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-success" strokeWidth={2} />
        </div>
        <h2 className="text-heading-xl font-display text-text-primary mb-3">Rendez-vous confirmé !</h2>
        <p className="text-body-l text-text-secondary mb-2">
          Nous avons bien enregistré votre demande. Vous recevrez une confirmation par email dans les prochaines minutes.
        </p>
        {selectedDate && (
          <div className="mt-5 p-4 bg-accent-soft rounded-xl border border-accent/15">
            <p className="text-body-m font-semibold text-accent">
              {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} à {selectedTime}
            </p>
            <p className="text-body-s text-text-secondary mt-1">
              {MEETING_TYPES.find((t) => t.id === meetingType)?.label} · {MEETING_TYPES.find((t) => t.id === meetingType)?.duration}
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-[1fr_340px] gap-8">
        {/* Left: Type + Calendar */}
        <div className="space-y-7">
          {/* Meeting type */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-heading-s font-display text-text-primary mb-4">Type de rendez-vous</h2>
            {errors.meetingType && (
              <p className="text-caption text-danger mb-3">{errors.meetingType}</p>
            )}
            <div className="space-y-3">
              {MEETING_TYPES.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setMeetingType(type.id)}
                    className={`w-full flex items-start gap-4 p-4 rounded-lg border text-left transition-all ${
                      meetingType === type.id
                        ? 'border-accent bg-accent-soft'
                        : 'border-border hover:border-accent/40 hover:bg-accent-soft/20'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      meetingType === type.id ? 'bg-accent' : 'bg-background'
                    }`}>
                      <Icon className={`w-5 h-5 ${meetingType === type.id ? 'text-white' : 'text-text-tertiary'}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className={`text-[14px] font-semibold mb-0.5 ${meetingType === type.id ? 'text-accent' : 'text-text-primary'}`}>
                        {type.label}
                      </p>
                      <p className="text-body-s text-text-secondary">{type.desc}</p>
                      <p className="text-caption text-text-tertiary mt-1">{type.duration}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-heading-s font-display text-text-primary">
                {MONTH_NAMES[currentMonth]} {currentYear}
              </h2>
              <div className="flex items-center gap-1">
                <button type="button" onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-background transition-colors">
                  <ChevronLeft className="w-4 h-4 text-text-secondary" strokeWidth={1.5} />
                </button>
                <button type="button" onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-background transition-colors">
                  <ChevronRight className="w-4 h-4 text-text-secondary" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAY_NAMES.map((d) => (
                <div key={d} className="text-center text-caption text-text-tertiary font-medium py-1">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days.map((day, idx) => {
                if (!day) return <div key={idx} />
                const disabled = disabledDays(day)
                const isSelected = selectedDate?.toDateString() === day.toDateString()
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={disabled}
                    onClick={() => { setSelectedDate(day); setSelectedTime('') }}
                    className={`w-full aspect-square flex items-center justify-center rounded-lg text-[13px] font-medium transition-all ${
                      isSelected
                        ? 'bg-accent text-white shadow-accent'
                        : disabled
                        ? 'text-text-tertiary opacity-30 cursor-not-allowed'
                        : 'hover:bg-accent-soft hover:text-accent text-text-secondary'
                    }`}
                  >
                    {day.getDate()}
                  </button>
                )
              })}
            </div>
            {errors.date && <p className="text-caption text-danger mt-2">{errors.date}</p>}
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div className="bg-surface border border-border rounded-xl p-6 animate-fade-in">
              <h2 className="text-heading-s font-display text-text-primary mb-4">
                Créneaux disponibles — {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {AVAILABLE_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-1 rounded-lg text-[13px] font-medium text-center transition-all ${
                      selectedTime === time
                        ? 'bg-accent text-white shadow-accent'
                        : 'bg-background border border-border hover:border-accent/40 hover:text-accent text-text-secondary'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.time && <p className="text-caption text-danger mt-2">{errors.time}</p>}
            </div>
          )}
        </div>

        {/* Right: Form */}
        <div className="bg-surface border border-border rounded-xl p-6 h-fit space-y-4">
          <h2 className="text-heading-s font-display text-text-primary mb-2">Vos coordonnées</h2>

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
          <Input
            label="Téléphone"
            type="tel"
            placeholder="+33 6 12 34 56 78"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            optional
          />
          <Textarea
            label="Contexte (optionnel)"
            placeholder="Décrivez brièvement votre projet ou la raison de votre prise de contact..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            optional
            className="min-h-[100px]"
          />

          {/* Summary */}
          {(selectedDate && selectedTime) && (
            <div className="p-4 bg-accent-soft rounded-lg border border-accent/15">
              <p className="text-caption text-accent font-semibold uppercase tracking-wider mb-2">Votre RDV</p>
              <p className="text-body-s text-text-primary font-medium">
                {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedTime}
              </p>
              {meetingType && (
                <p className="text-caption text-text-secondary mt-1">
                  {MEETING_TYPES.find((t) => t.id === meetingType)?.label}
                </p>
              )}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="md"
            loading={submitting}
            className="w-full justify-center"
            rightIcon={<Check className="w-4 h-4" strokeWidth={2} />}
          >
            Confirmer le rendez-vous
          </Button>
          <p className="text-caption text-text-tertiary text-center">Vous recevrez une confirmation par email</p>
        </div>
      </div>
    </form>
  )
}
