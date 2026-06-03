import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const cols = {
  Services: [
    ['Site vitrine premium', '/services#vitrine'],
    ['Refonte web', '/services#refonte'],
    ['Réservation en ligne', '/services#reservation'],
    ['Demande de devis', '/services#devis'],
    ['Back-office admin', '/services#backoffice'],
    ['SEO technique', '/services#seo'],
    ['Maintenance', '/services#maintenance'],
  ],
  Studio: [
    ['Réalisations', '/projects'],
    ['Tarifs', '/pricing'],
    ['Blog', '/blog'],
    ['FAQ', '/faq'],
    ['Contact', '/contact'],
    ['Prendre RDV', '/booking'],
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0A0A14] text-white">

      {/* Top CTA stripe */}
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[22px] font-display font-bold text-white mb-1">Vous avez un projet en tête ?</p>
            <p className="text-[15px] text-white/40">Devis gratuit · Réponse sous 48h · Sans engagement</p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#6B5CE7] text-white text-[14px] font-bold hover:bg-[#5A4BD1] transition-colors flex-shrink-0 shadow-[0_4px_20px_rgba(107,92,231,0.35)]"
          >
            Démarrer mon projet
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr_200px] gap-10 md:gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6B5CE7] to-[#4F46E5] flex items-center justify-center shadow-[0_4px_14px_rgba(107,92,231,0.4)]">
                <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-[17px] text-white">Atelier Nova</span>
            </Link>

            <p className="text-[14px] text-white/40 leading-relaxed mb-6">
              Studio digital spécialisé dans la création de sites web premium et de plateformes administrables.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[12px] text-white/55 font-medium">Disponible pour nouveaux projets</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-5">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/30 mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[14px] text-white/50 hover:text-white transition-colors duration-150">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/30 mb-4">Contact</p>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:hello@atelier-nova.fr" className="flex items-start gap-2.5 group">
                  <Mail className="w-4 h-4 text-[#6B5CE7] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[14px] text-white/50 group-hover:text-white transition-colors leading-snug">hello@atelier-nova.fr</span>
                </a>
              </li>
              <li>
                <a href="tel:+33123456789" className="flex items-start gap-2.5 group">
                  <Phone className="w-4 h-4 text-[#6B5CE7] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[14px] text-white/50 group-hover:text-white transition-colors">+33 1 23 45 67 89</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6B5CE7] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[14px] text-white/40 leading-snug">12 rue de la Paix<br />75001 Paris</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/25">
            © {new Date().getFullYear()} Atelier Nova. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {['Mentions légales', 'Confidentialité', 'CGV'].map(l => (
              <a key={l} href="#" className="text-[12px] text-white/25 hover:text-white/50 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
