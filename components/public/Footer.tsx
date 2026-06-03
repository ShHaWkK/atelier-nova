import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Site vitrine premium', href: '/services#vitrine' },
    { label: 'Refonte web', href: '/services#refonte' },
    { label: 'Réservation en ligne', href: '/services#reservation' },
    { label: 'Back-office', href: '/services#backoffice' },
    { label: 'SEO technique', href: '/services#seo' },
    { label: 'Maintenance', href: '/services#maintenance' },
  ],
  company: [
    { label: 'Nos réalisations', href: '/projects' },
    { label: 'Nos tarifs', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'CGV', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto max-w-[1200px]">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-signature flex items-center justify-center shadow-accent">
                <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2} />
              </div>
              <span className="font-display font-bold text-lg text-white">Atelier Nova</span>
            </Link>
            <p className="text-body-s text-white/55 leading-relaxed mb-6">
              Studio digital spécialisé dans la création de sites web premium et de plateformes
              administrables pour les entreprises ambitieuses.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-white/15 hover:text-white transition-all duration-150"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-label font-semibold text-white/90 uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-s text-white/50 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-label font-semibold text-white/90 uppercase tracking-wider mb-5">
              Studio
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-s text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label font-semibold text-white/90 uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:hello@atelier-nova.fr"
                  className="text-body-s text-white/55 hover:text-white transition-colors"
                >
                  hello@atelier-nova.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+33123456789"
                  className="text-body-s text-white/55 hover:text-white transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-body-s text-white/55">
                  12 rue de la Paix<br />75001 Paris, France
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-lg bg-white/6 border border-white/10">
              <p className="text-caption text-white/50 mb-2">Disponibilités</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
                <span className="text-body-s text-white/80 font-medium">Ouvert aux nouveaux projets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-white/35">
            © {new Date().getFullYear()} Atelier Nova. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption text-white/35 hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
