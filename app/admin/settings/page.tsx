'use client'

import * as React from 'react'
import { Save, Eye, EyeOff, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'

export default function SettingsPage() {
  const [saved, setSaved] = React.useState(false)

  // Company info
  const [companyName, setCompanyName] = React.useState('Atelier Nova')
  const [tagline, setTagline] = React.useState('Studio digital premium')
  const [email, setEmail] = React.useState('hello@atelier-nova.fr')
  const [phone, setPhone] = React.useState('+33 1 23 45 67 89')
  const [address, setAddress] = React.useState('12 rue de la Paix, 75001 Paris')
  const [bio, setBio] = React.useState('Studio digital spécialisé dans la création de sites web premium et de plateformes administrables.')

  // Socials
  const [twitter, setTwitter] = React.useState('https://twitter.com/ateliernova')
  const [linkedin, setLinkedin] = React.useState('https://linkedin.com/company/atelier-nova')
  const [github, setGithub] = React.useState('https://github.com/atelier-nova')

  // Notifications
  const [notifyLeads, setNotifyLeads] = React.useState(true)
  const [notifyBookings, setNotifyBookings] = React.useState(true)
  const [notifyQuotes, setNotifyQuotes] = React.useState(true)

  // Password
  const [currentPassword, setCurrentPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [showPass, setShowPass] = React.useState(false)

  function handleSaveCompany(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    toast({ variant: 'success', title: 'Paramètres sauvegardés', description: 'Les informations ont été mises à jour.' })
    setTimeout(() => setSaved(false), 2000)
  }

  function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      toast({ variant: 'error', title: 'Les mots de passe ne correspondent pas' })
      return
    }
    if (newPassword.length < 8) {
      toast({ variant: 'error', title: 'Mot de passe trop court (minimum 8 caractères)' })
      return
    }
    toast({ variant: 'success', title: 'Mot de passe mis à jour' })
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="space-y-6 max-w-[900px]">
      <div>
        <h1 className="text-heading-xl font-display text-text-primary">Paramètres</h1>
        <p className="text-body-s text-text-secondary mt-1">Gérez les informations de votre studio et vos préférences.</p>
      </div>

      {/* Company info */}
      <form onSubmit={handleSaveCompany}>
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-heading-s font-display text-text-primary">Informations du studio</h2>
            <p className="text-caption text-text-tertiary mt-0.5">Affichées sur le site public et dans les emails.</p>
          </div>
          <div className="p-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Nom du studio" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              <Input label="Slogan / Tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} optional />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Email de contact" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input label="Téléphone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} optional />
            </div>
            <Input label="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} optional />
            <Textarea
              label="Description courte"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              optional
              className="min-h-[80px]"
            />
          </div>
        </div>

        {/* Social links */}
        <div className="bg-surface border border-border rounded-xl overflow-hidden mt-5">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-heading-s font-display text-text-primary">Réseaux sociaux</h2>
          </div>
          <div className="p-6 space-y-4">
            <Input label="Twitter / X" value={twitter} onChange={(e) => setTwitter(e.target.value)} optional />
            <Input label="LinkedIn" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} optional />
            <Input label="GitHub" value={github} onChange={(e) => setGithub(e.target.value)} optional />
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="md"
            leftIcon={saved ? <Check className="w-4 h-4" strokeWidth={2} /> : <Save className="w-4 h-4" strokeWidth={1.5} />}
          >
            {saved ? 'Sauvegardé !' : 'Sauvegarder les paramètres'}
          </Button>
        </div>
      </form>

      {/* Notifications */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-heading-s font-display text-text-primary">Notifications email</h2>
          <p className="text-caption text-text-tertiary mt-0.5">Quand recevoir des notifications par email.</p>
        </div>
        <div className="divide-y divide-border">
          {[
            { label: 'Nouveaux leads', desc: 'Quand un formulaire de contact est soumis', checked: notifyLeads, onChange: setNotifyLeads },
            { label: 'Nouvelles demandes de RDV', desc: 'Quand un rendez-vous est réservé', checked: notifyBookings, onChange: setNotifyBookings },
            { label: 'Nouvelles demandes de devis', desc: 'Quand un devis est demandé', checked: notifyQuotes, onChange: setNotifyQuotes },
          ].map(({ label, desc, checked, onChange }) => (
            <div key={label} className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-body-s font-medium text-text-primary">{label}</p>
                <p className="text-caption text-text-tertiary">{desc}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onChange(!checked)
                  toast({ variant: 'success', title: `Notification ${!checked ? 'activée' : 'désactivée'}` })
                }}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                  checked ? 'bg-accent' : 'bg-border-medium'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    checked ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Password */}
      <form onSubmit={handlePasswordChange}>
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-heading-s font-display text-text-primary">Changer le mot de passe</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="relative">
              <Input
                label="Mot de passe actuel"
                type={showPass ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                rightAddon={
                  <button type="button" onClick={() => setShowPass((s) => !s)}>
                    {showPass ? <EyeOff className="w-4 h-4" strokeWidth={1.5} /> : <Eye className="w-4 h-4" strokeWidth={1.5} />}
                  </button>
                }
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Nouveau mot de passe"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                hint="Minimum 8 caractères"
              />
              <Input
                label="Confirmer le mot de passe"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="px-6 pb-6 flex justify-end">
            <Button type="submit" variant="dark" size="sm">Changer le mot de passe</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
