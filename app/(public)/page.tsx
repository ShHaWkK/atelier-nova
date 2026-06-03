import Link from 'next/link'
import {
  ArrowRight, Check, Star, Globe, Calendar, FileText,
  LayoutDashboard, Shield, TrendingUp, ChevronRight,
  Users, Clock, Award, MessageSquare,
  Building2, Utensils, GraduationCap, Briefcase, Heart, ShoppingBag,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getFeaturedProjects } from '@/data/projects'
import { getFeaturedTestimonials } from '@/data/testimonials'

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()
  const featuredTestimonials = getFeaturedTestimonials()

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#0F0F1A] flex flex-col justify-center overflow-hidden">

        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid" />

        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none hero-glow-top" />
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full pointer-events-none hero-glow-right" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">

            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[13px] text-white/65 font-medium">Ouvert aux nouveaux projets · Réponse sous 48h</span>
              </div>

              <h1 className="font-display font-bold text-white mb-6 leading-[1.06] tracking-[-0.03em] text-[clamp(2.8rem,6vw,4.5rem)]">
                Des sites web qui{' '}
                <span className="relative inline-block">
                  <span className="gradient-text">travaillent</span>
                </span>
                <br />pour votre business.
              </h1>

              <p className="text-[1.125rem] text-white/50 leading-[1.75] mb-10 max-w-[480px]">
                Atelier Nova conçoit des sites premium, plateformes administrables et outils métier.
                Pas des templates — des produits digitaux pensés pour convertir.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#6B5CE7] hover:bg-[#5A4BD1] text-white font-semibold shadow-[0_0_30px_rgba(107,92,231,0.4)] text-[15px]"
                  rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={2} />}
                >
                  <Link href="/quote">Démarrer mon projet</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1] hover:border-white/20 text-[15px]"
                >
                  <Link href="/projects">Voir les réalisations</Link>
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2.5">
                  {['CB','PM','NF','LC','DM'].map((init, i) => (
                    <div
                      key={init}
                      className="w-9 h-9 rounded-full border-2 border-[#0F0F1A] flex items-center justify-center text-[11px] font-bold text-white"
                      style={{
                        background: ['#6B5CE7','#059669','#3B82F6','#D4511C','#1A1A2E'][i],
                        zIndex: 5 - i,
                      }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[13px] text-white/40">48 clients · note moyenne 4.9/5</p>
                </div>
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] mockup-bg">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3.5 border-b border-white/[0.06]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <div className="flex-1 mx-3">
                    <div className="h-5 rounded bg-white/[0.04] flex items-center justify-center">
                      <span className="text-[10px] text-white/25 font-mono">admin.atelier-nova.fr</span>
                    </div>
                  </div>
                </div>

                {/* Sidebar + Content */}
                <div className="flex h-[340px]">
                  {/* Mini sidebar */}
                  <div className="w-[52px] border-r border-white/[0.05] flex flex-col items-center pt-4 gap-3 flex-shrink-0">
                    {[
                      { color: '#6B5CE7', active: true },
                      { color: '#6B7280', active: false },
                      { color: '#6B7280', active: false },
                      { color: '#6B7280', active: false },
                      { color: '#6B7280', active: false },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: item.active ? 'rgba(107,92,231,0.25)' : 'rgba(255,255,255,0.04)' }}
                      >
                        <div className="w-3.5 h-3.5 rounded-sm" style={{ background: item.color, opacity: item.active ? 1 : 0.4 }} />
                      </div>
                    ))}
                  </div>

                  {/* Dashboard content */}
                  <div className="flex-1 p-4 space-y-3 overflow-hidden">
                    {/* Stat row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Nouveaux leads', val: '12', up: '+3', color: '#6B5CE7' },
                        { label: 'Devis envoyés', val: '5', up: '+1', color: '#F59E0B' },
                        { label: 'RDV confirmés', val: '8', up: '+2', color: '#10B981' },
                      ].map(s => (
                        <div key={s.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <p className="text-[9px] text-white/35 mb-1.5 leading-tight">{s.label}</p>
                          <p className="text-[20px] font-bold text-white leading-none font-display">{s.val}</p>
                          <p className="text-[9px] mt-1 font-medium" style={{ color: s.color }}>{s.up} cette sem.</p>
                        </div>
                      ))}
                    </div>

                    {/* Mini chart */}
                    <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-[10px] text-white/35 mb-2">Demandes / 6 semaines</p>
                      <div className="flex items-end gap-1.5 h-10">
                        {[40,65,30,80,55,70].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              background: i === 5 ? '#6B5CE7' : 'rgba(107,92,231,0.25)',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Recent leads */}
                    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="px-3 py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                        <p className="text-[9px] font-semibold text-white/35 uppercase tracking-widest">Derniers leads</p>
                      </div>
                      {[
                        { name: 'Cabinet Dumont', badge: 'Nouveau', color: '#3B82F6' },
                        { name: 'Restaurant Jardin', badge: 'Contacté', color: '#6B5CE7' },
                        { name: 'FormaPro Lyon', badge: 'Converti', color: '#10B981' },
                      ].map(l => (
                        <div key={l.name} className="flex items-center justify-between px-3 py-2 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                          <span className="text-[11px] text-white/60">{l.name}</span>
                          <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full" style={{ color: l.color, background: `${l.color}18` }}>{l.badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-6 top-1/3 bg-white rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-[#E8E5F0] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#0F0F1A]">Devis accepté</p>
                  <p className="text-[10px] text-[#8888A8]">FormaPro — 7 200 €</p>
                </div>
              </div>

              <div className="absolute -left-8 bottom-1/4 bg-white rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-[#E8E5F0] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-violet-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#0F0F1A]">Nouveau message</p>
                  <p className="text-[10px] text-[#8888A8]">Demande de devis reçue</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0F0F1A]/80 to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section className="bg-white border-b border-[#E8E5F0]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E8E5F0]">
            {[
              { value: '48+', label: 'Projets livrés', icon: '🚀' },
              { value: '96%', label: 'Clients satisfaits', icon: '⭐' },
              { value: '3.2×', label: 'Plus de leads', icon: '📈' },
              { value: '< 5 sem.', label: 'Délai moyen', icon: '⚡' },
            ].map(({ value, label, icon }) => (
              <div key={label} className="px-8 py-10 text-center">
                <div className="text-2xl mb-3">{icon}</div>
                <p className="font-display font-black text-[2.75rem] text-[#0F0F1A] leading-none tracking-[-0.04em] mb-1.5">{value}</p>
                <p className="text-[13px] font-medium text-[#8888A8] uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROBLEMS → SOLUTION
      ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-5">Le problème</p>
              <h2 className="font-display font-bold text-[2.5rem] leading-[1.12] tracking-[-0.02em] text-[#0F0F1A] mb-6">
                Votre site web vous coûte plus qu'il ne vous rapporte.
              </h2>
              <p className="text-[17px] text-[#4A4A6A] leading-relaxed">
                La plupart des sites PME sont conçus pour exister, pas pour performer.
                Voici ce que nous entendons chaque semaine.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { problem: 'Site existant mais aucune demande entrante', solution: 'Refonte orientée conversion avec CTA et formulaires qualifiants' },
                { problem: 'Réservations gérées par téléphone', solution: 'Module de réservation 24/7 avec rappels automatiques' },
                { problem: 'Devis rédigés manuellement (3h chacun)', solution: 'Formulaire qualifiant + génération PDF en 1 clic' },
                { problem: 'Impossible de modifier le site sans dev', solution: 'Back-office sur-mesure, utilisable sans compétences tech' },
              ].map(({ problem, solution }, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-[#E8E5F0] bg-[#F8F7F4] p-5 hover:border-[#6B5CE7]/30 hover:bg-white transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FEE2E2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#EF4444] text-[13px] font-bold leading-none">×</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-semibold text-[#0F0F1A] mb-2">{problem}</p>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#D1FAE5] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#059669]" strokeWidth={3} />
                        </div>
                        <p className="text-[13px] text-[#059669] font-medium">{solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section className="section-padding bg-[#F8F7F4]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-5 justify-center">Services</p>
            <h2 className="font-display font-bold text-[2.8rem] leading-[1.1] tracking-[-0.025em] text-[#0F0F1A] mb-4">
              Ce que nous faisons
            </h2>
            <p className="text-[17px] text-[#4A4A6A] max-w-[480px] mx-auto">
              De la vitrine premium à la plateforme administrable complète.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Globe, title: 'Site vitrine premium', desc: 'Design sur-mesure qui reflète votre expertise et convertit vos visiteurs en prospects.', href: '/services#vitrine', accent: '#6B5CE7', bg: '#EDE9FF' },
              { icon: LayoutDashboard, title: 'Back-office administrable', desc: 'Gérez vos contenus, leads et commandes sans jamais toucher au code.', href: '/services#backoffice', accent: '#1A1A2E', bg: '#F0EDE8' },
              { icon: Calendar, title: 'Réservation en ligne', desc: 'Réservations 24h/24 avec confirmations automatiques. Fini le téléphone.', href: '/services#reservation', accent: '#059669', bg: '#D1FAE5' },
              { icon: FileText, title: 'Formulaire de devis', desc: 'Qualification automatique, estimation de prix en direct, PDF en un clic.', href: '/services#devis', accent: '#D97706', bg: '#FEF3C7' },
              { icon: TrendingUp, title: 'SEO technique', desc: 'Audit et optimisation pour être trouvé par vos clients sur Google.', href: '/services#seo', accent: '#2563EB', bg: '#DBEAFE' },
              { icon: Shield, title: 'Maintenance', desc: 'Monitoring, mises à jour et sauvegardes. Votre site toujours opérationnel.', href: '/services#maintenance', accent: '#DC2626', bg: '#FEE2E2' },
            ].map(({ icon: Icon, title, desc, href, accent, bg }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-5 p-6 bg-white border border-[#E8E5F0] rounded-2xl hover:border-[#6B5CE7]/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(107,92,231,0.08)] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: bg }}
                >
                  <Icon className="w-5.5 h-5.5" style={{ color: accent }} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#0F0F1A] mb-2 font-display group-hover:text-[#6B5CE7] transition-colors">{title}</h3>
                  <p className="text-[14px] text-[#4A4A6A] leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#6B5CE7] text-[13px] font-semibold">
                  En savoir plus
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">Tous les services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="section-label mb-5">Processus</p>
              <h2 className="font-display font-bold text-[2.5rem] leading-[1.12] tracking-[-0.02em] text-[#0F0F1A] mb-5">
                Un processus rodé, sans surprise.
              </h2>
              <p className="text-[17px] text-[#4A4A6A] leading-relaxed mb-8">
                4 étapes claires. Des livrables à chaque phase.
                Vous êtes tenu informé à chaque moment.
              </p>
              <Button asChild size="md">
                <Link href="/quote">Commencer →</Link>
              </Button>
            </div>

            <div className="space-y-4">
              {[
                { n: '01', title: 'Cadrage & stratégie', desc: 'Analyse de votre activité, vos clients cibles et vos objectifs business. Définition du périmètre exact avant tout développement.', t: 'Semaine 1' },
                { n: '02', title: 'Design & prototypage', desc: 'Maquettes interactives validées avec vous avant de coder. Zéro surprise à la livraison.', t: 'Semaines 1–2' },
                { n: '03', title: 'Développement', desc: 'Code propre, maintenable, sécurisé. Livraisons intermédiaires pour suivre l\'avancement en temps réel.', t: 'Semaines 2–5' },
                { n: '04', title: 'Livraison & formation', desc: 'Mise en ligne, tests cross-navigateurs, formation à l\'utilisation du back-office et 30 jours de support.', t: 'Semaine finale' },
              ].map(({ n, title, desc, t }) => (
                <div
                  key={n}
                  className="flex gap-5 p-6 rounded-2xl border border-[#E8E5F0] bg-[#F8F7F4] hover:border-[#6B5CE7]/25 hover:bg-white transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-[#EDE9FF] flex items-center justify-center">
                      <span className="font-display font-black text-[15px] text-[#6B5CE7]">{n}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[15px] font-bold text-[#0F0F1A] font-display">{title}</h3>
                      <span className="text-[11px] font-medium text-[#8888A8] bg-[#F0EDE8] px-2 py-0.5 rounded-full">{t}</span>
                    </div>
                    <p className="text-[14px] text-[#4A4A6A] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════ */}
      <section className="section-padding bg-[#F8F7F4]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <p className="section-label mb-5">Réalisations</p>
              <h2 className="font-display font-bold text-[2.8rem] leading-[1.1] tracking-[-0.025em] text-[#0F0F1A]">
                Des projets concrets,<br />des résultats mesurés.
              </h2>
            </div>
            <Button asChild variant="secondary" size="md" className="hidden md:flex flex-shrink-0">
              <Link href="/projects">Tous les projets →</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group flex flex-col bg-white border border-[#E8E5F0] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(15,15,26,0.1)] transition-all duration-300"
              >
                {/* Visual */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `${project.color}0D` }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, ${project.color} 0, ${project.color} 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, ${project.color} 0, ${project.color} 1px, transparent 1px, transparent 48px)`,
                    }}
                  />
                  <div
                    className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg"
                    style={{ background: project.color }}
                  >
                    {project.sectorIcon}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ color: project.color, background: `${project.color}15` }}
                    >
                      {project.sector}
                    </span>
                    <span className="text-[12px] text-[#8888A8]">{project.duration}</span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#0F0F1A] mb-1.5 font-display group-hover:text-[#6B5CE7] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-[#4A4A6A] leading-relaxed mb-5 flex-1">
                    {project.tagline}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-5 p-3 bg-[#F8F7F4] rounded-xl">
                    {project.results.map(r => (
                      <div key={r.label} className="text-center">
                        <p className="text-[15px] font-black text-[#0F0F1A] font-display leading-none mb-0.5">{r.value}</p>
                        <p className="text-[10px] text-[#8888A8] leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-0.5 bg-[#F0EDE8] text-[11px] text-[#4A4A6A] rounded font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="section-padding bg-[#0F0F1A] relative overflow-hidden">
        <div className="absolute inset-0 dark-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none dark-glow-top" />

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9F8FEF] mb-5">
              <span className="inline-block w-5 h-px bg-[#9F8FEF]" />
              Témoignages
            </p>
            <h2 className="font-display font-bold text-[2.8rem] leading-[1.1] tracking-[-0.025em] text-white mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-[17px] text-white/45">
              Des projets livrés, des résultats mesurés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {featuredTestimonials.map(t => (
              <div
                key={t.id}
                className="rounded-2xl p-7 flex flex-col gap-5 bg-white/[0.04] border border-white/[0.08]"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="flex-1">
                  <p className="font-serif italic text-[17px] text-white/75 leading-[1.7]">
                    "{t.message}"
                  </p>
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6B5CE7, #4F46E5)' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{t.name}</p>
                    <p className="text-[12px] text-white/40">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTORS
      ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-5 justify-center">Secteurs</p>
            <h2 className="font-display font-bold text-[2.5rem] leading-[1.12] tracking-[-0.02em] text-[#0F0F1A] mb-4">
              Votre secteur, notre expertise
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Briefcase, label: 'Conseil & Services', color: '#6B5CE7' },
              { icon: Utensils, label: 'Restauration', color: '#D4511C' },
              { icon: GraduationCap, label: 'Formation', color: '#059669' },
              { icon: Building2, label: 'Immobilier', color: '#2563EB' },
              { icon: Heart, label: 'Bien-être & Santé', color: '#DB2777' },
              { icon: ShoppingBag, label: 'Commerce', color: '#D97706' },
              { icon: Shield, label: 'IT & Cybersécurité', color: '#1A1A2E' },
              { icon: Users, label: 'Associations', color: '#059669' },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl border border-[#E8E5F0] bg-[#F8F7F4] hover:border-[#6B5CE7]/25 hover:bg-white transition-all duration-200 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                  <Icon className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" style={{ color }} strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-semibold text-[#0F0F1A] leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING PREVIEW
      ══════════════════════════════════════ */}
      <section className="section-padding bg-[#F8F7F4]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-5 justify-center">Tarifs</p>
            <h2 className="font-display font-bold text-[2.8rem] leading-[1.1] tracking-[-0.025em] text-[#0F0F1A] mb-4">
              Des prix transparents
            </h2>
            <p className="text-[17px] text-[#4A4A6A] max-w-[480px] mx-auto">
              Chaque projet est adapté à votre besoin réel. Ces offres sont des points de départ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { name: 'Essentiel', price: '2 900', desc: 'Site vitrine 5 pages, responsive, SEO de base, formulaire de contact.', featured: false },
              { name: 'Croissance', price: '5 800', desc: 'Site + back-office + formulaire de devis qualifiant ou réservation en ligne.', featured: true },
              { name: 'Premium', price: '9 500', desc: 'Plateforme complète avec toutes les fonctionnalités, blog, et multi-utilisateurs.', featured: false },
            ].map(({ name, price, desc, featured }) => (
              <div
                key={name}
                className="relative rounded-2xl overflow-hidden"
              >
                {featured && (
                  <div className="absolute inset-0 bg-[#0F0F1A]" />
                )}
                {!featured && (
                  <div className="absolute inset-0 bg-white border border-[#E8E5F0] rounded-2xl" />
                )}

                <div className="relative z-10 p-7 flex flex-col gap-5">
                  {featured && (
                    <div className="absolute top-5 right-5">
                      <span className="text-[11px] font-bold bg-[#6B5CE7] text-white px-2.5 py-1 rounded-full">★ Populaire</span>
                    </div>
                  )}

                  <div>
                    <p className={`text-[12px] font-bold uppercase tracking-wider mb-3 ${featured ? 'text-white/40' : 'text-[#8888A8]'}`}>
                      {name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display font-black text-[2.5rem] leading-none tracking-tight ${featured ? 'text-white' : 'text-[#0F0F1A]'}`}>
                        {price}
                      </span>
                      <span className={`text-[16px] ${featured ? 'text-white/40' : 'text-[#8888A8]'}`}>€</span>
                    </div>
                  </div>

                  <p className={`text-[14px] leading-relaxed ${featured ? 'text-white/55' : 'text-[#4A4A6A]'}`}>
                    {desc}
                  </p>

                  <Button
                    asChild
                    size="md"
                    className={`justify-center text-[14px] font-semibold ${
                      featured
                        ? 'bg-[#6B5CE7] text-white hover:bg-[#5A4BD1] shadow-[0_4px_20px_rgba(107,92,231,0.4)]'
                        : 'bg-[#F8F7F4] text-[#0F0F1A] border border-[#E8E5F0] hover:bg-[#F0EDE8] hover:border-[#D4CEEE]'
                    }`}
                  >
                    <Link href="/pricing">Voir le détail</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[14px] text-[#8888A8]">
            Projet plus complexe ?{' '}
            <Link href="/contact" className="text-[#6B5CE7] font-semibold hover:underline">
              Demandez un devis sur mesure →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ (compact)
      ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[820px] px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-5 justify-center">FAQ</p>
            <h2 className="font-display font-bold text-[2.5rem] leading-[1.12] tracking-[-0.02em] text-[#0F0F1A]">
              Questions fréquentes
            </h2>
          </div>

          <div className="divide-y divide-[#E8E5F0]">
            {[
              { q: 'Combien de temps pour livrer mon site ?', a: 'Entre 3 et 8 semaines selon la complexité. Un site vitrine standard : 3 à 5 semaines. Une plateforme complète avec back-office : 6 à 8 semaines.' },
              { q: 'Qui fournit les textes et les images ?', a: "Les textes viennent de vous — c'est votre expertise. Pour les images, nous utilisons des illustrations CSS/SVG sur-mesure. Des photos pro peuvent être organisées en option." },
              { q: 'Je peux modifier mon site seul après livraison ?', a: 'Oui. Chaque back-office est conçu pour être utilisable sans compétences techniques. Formation incluse à la livraison.' },
              { q: "À qui appartient le site livré ?", a: "À vous, entièrement. Code source, design, domaine — tout vous appartient. Aucun abonnement obligatoire, aucune dépendance à Atelier Nova." },
            ].map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="text-[16px] font-bold text-[#0F0F1A] mb-2.5 font-display">{q}</h3>
                <p className="text-[15px] text-[#4A4A6A] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-[14px] text-[#8888A8]">
            Plus de questions ?{' '}
            <Link href="/faq" className="text-[#6B5CE7] font-semibold hover:underline">
              Voir la FAQ complète →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0F0F1A] py-28">
        <div className="absolute inset-0 dark-glow-center" />
        <div className="relative mx-auto max-w-[700px] px-5 md:px-8 text-center">
          <h2 className="font-display font-black text-[3rem] leading-[1.08] tracking-[-0.03em] text-white mb-5">
            Prêt à créer quelque chose<br />de remarquable ?
          </h2>
          <p className="text-[18px] text-white/50 leading-relaxed mb-10">
            Décrivez votre projet en 5 minutes. Estimation immédiate.
            Devis personnalisé sous 48 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-[#6B5CE7] text-white hover:bg-[#5A4BD1] font-bold shadow-[0_0_40px_rgba(107,92,231,0.4)] text-[16px]"
              rightIcon={<ArrowRight className="w-4.5 h-4.5" strokeWidth={2} />}
            >
              <Link href="/quote">Démarrer mon projet</Link>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1] text-[16px]"
            >
              <Link href="/booking">Prendre rendez-vous</Link>
            </Button>
          </div>
          <p className="mt-6 text-[13px] text-white/25">
            Aucun engagement · Devis gratuit · Réponse sous 48h
          </p>
        </div>
      </section>

    </div>
  )
}
