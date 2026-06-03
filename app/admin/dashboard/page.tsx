import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, FileText, Calendar, MessageSquare, TrendingUp, Euro, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react'
import { StatCard } from '@/components/ui/Card'
import { StatusBadge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { dashboardStats, mockLeads, mockBookings, mockQuotes } from '@/data/admin-mock'
import { formatCurrency, formatDate } from '@/lib/utils'

export const metadata: Metadata = { title: 'Dashboard — Admin' }

export default function DashboardPage() {
  const recentLeads = mockLeads.slice(0, 5)
  const upcomingBookings = mockBookings.filter((b) => b.status === 'planned' || b.status === 'confirmed').slice(0, 4)
  const pendingQuotes = mockQuotes.filter((q) => q.status === 'to-send' || q.status === 'draft').slice(0, 4)

  return (
    <div className="space-y-6 max-w-[1300px]">
      {/* Page title */}
      <div>
        <h1 className="text-heading-xl font-display text-text-primary">Dashboard</h1>
        <p className="text-body-s text-text-secondary mt-1">Bienvenue. Voici un aperçu de votre activité.</p>
      </div>

      {/* Stat cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="Nouveaux leads"
          value={dashboardStats.newLeads}
          change="+3 cette semaine"
          changeType="up"
          icon={<Users className="w-5 h-5 text-accent" strokeWidth={1.5} />}
          iconBg="#EDE9FF"
        />
        <StatCard
          label="Devis en attente"
          value={dashboardStats.pendingQuotes}
          change="2 à envoyer"
          changeType="neutral"
          icon={<FileText className="w-5 h-5 text-warning" strokeWidth={1.5} />}
          iconBg="#FEF3C7"
        />
        <StatCard
          label="RDV ce mois"
          value={dashboardStats.upcomingBookings}
          change="4 confirmés"
          changeType="up"
          icon={<Calendar className="w-5 h-5 text-success" strokeWidth={1.5} />}
          iconBg="#D1FAE5"
        />
        <StatCard
          label="Revenus estimés"
          value={formatCurrency(dashboardStats.estimatedRevenue)}
          change={`Taux : ${dashboardStats.conversionRate}%`}
          changeType="up"
          icon={<Euro className="w-5 h-5 text-info" strokeWidth={1.5} />}
          iconBg="#DBEAFE"
        />
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-5">
        {/* Weekly leads chart */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-heading-s font-display text-text-primary">Leads par semaine</h2>
              <p className="text-caption text-text-tertiary mt-0.5">6 dernières semaines</p>
            </div>
            <TrendingUp className="w-5 h-5 text-success" strokeWidth={1.5} />
          </div>

          {/* Simple bar chart */}
          <div className="flex items-end justify-between gap-3 h-32">
            {dashboardStats.weeklyLeads.map((item, idx) => {
              const maxCount = Math.max(...dashboardStats.weeklyLeads.map((w) => w.count))
              const height = (item.count / maxCount) * 100
              const isLast = idx === dashboardStats.weeklyLeads.length - 1
              return (
                <div key={item.week} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-lg transition-all ${isLast ? 'bg-accent' : 'bg-accent-soft'}`}
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] text-text-tertiary">{item.week}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Project types */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="mb-5">
            <h2 className="text-heading-s font-display text-text-primary">Types de projets</h2>
            <p className="text-caption text-text-tertiary mt-0.5">Répartition des demandes</p>
          </div>

          <div className="space-y-3">
            {dashboardStats.projectTypes.map(({ name, value }) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-body-s text-text-secondary">{name}</span>
                  <span className="text-caption font-semibold text-text-primary">{value}%</span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-signature rounded-full"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Recent leads */}
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="text-heading-s font-display text-text-primary">Derniers leads</h2>
            <Button asChild variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />}>
              <Link href="/admin/leads">Voir tout</Link>
            </Button>
          </div>
          <div className="divide-y divide-[#F0EDE8]">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center gap-3 px-5 py-3.5 hover:bg-background/60 transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-xs">
                    {lead.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-text-primary truncate">{lead.name}</p>
                  <p className="text-caption text-text-tertiary truncate">{lead.type}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <StatusBadge status={lead.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming bookings */}
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="text-heading-s font-display text-text-primary">Prochains RDV</h2>
            <Button asChild variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />}>
              <Link href="/admin/bookings">Voir tout</Link>
            </Button>
          </div>
          <div className="divide-y divide-[#F0EDE8]">
            {upcomingBookings.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <Calendar className="w-8 h-8 text-text-tertiary mx-auto mb-2" strokeWidth={1} />
                <p className="text-body-s text-text-tertiary">Aucun rendez-vous à venir</p>
              </div>
            ) : upcomingBookings.map((booking) => (
              <div key={booking.id} className="flex items-center gap-3 px-5 py-3.5 hover:bg-background/60 transition-colors">
                <div className="w-10 flex-shrink-0 text-center">
                  <p className="text-[11px] font-bold text-text-tertiary uppercase">
                    {new Date(booking.date).toLocaleDateString('fr-FR', { month: 'short' })}
                  </p>
                  <p className="text-lg font-display font-bold text-text-primary leading-none">
                    {new Date(booking.date).getDate()}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-text-primary truncate">{booking.clientName}</p>
                  <p className="text-caption text-text-tertiary">{booking.time} · {booking.meetingType}</p>
                </div>
                <StatusBadge status={booking.status} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending quotes */}
      {pendingQuotes.length > 0 && (
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="text-heading-s font-display text-text-primary">Devis à traiter</h2>
            <Button asChild variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />}>
              <Link href="/admin/quotes">Voir tout</Link>
            </Button>
          </div>
          <div className="divide-y divide-[#F0EDE8]">
            {pendingQuotes.map((quote) => (
              <div key={quote.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-background/60 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-[13px] font-medium text-text-primary">{quote.clientName}</p>
                    <span className="text-caption font-mono text-text-tertiary">{quote.quoteNumber}</span>
                  </div>
                  <p className="text-caption text-text-tertiary">{quote.projectType}</p>
                </div>
                <p className="text-[13px] font-semibold text-text-primary flex-shrink-0">
                  {formatCurrency(quote.estimateMin)} – {formatCurrency(quote.estimateMax)}
                </p>
                <StatusBadge status={quote.status} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
