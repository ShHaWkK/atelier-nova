import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Atelier Nova — Studio Digital Premium',
    template: '%s | Atelier Nova',
  },
  description:
    'Atelier Nova conçoit des sites web premium, plateformes administrables et outils web métier pour les entreprises ambitieuses.',
  keywords: [
    'studio digital',
    'création site web',
    'back-office',
    'réservation en ligne',
    'devis automatisé',
    'webdesign premium',
  ],
  openGraph: {
    title: 'Atelier Nova — Studio Digital Premium',
    description:
      'Sites web premium, plateformes administrables et outils web métier pour les entreprises ambitieuses.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${plusJakartaSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
