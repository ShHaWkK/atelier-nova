'use client'

import * as React from 'react'
import { Menu, Bell, Search, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const PAGE_TITLES: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/leads': 'Leads',
  '/admin/quotes': 'Devis',
  '/admin/bookings': 'Rendez-vous',
  '/admin/blog': 'Blog',
  '/admin/projects': 'Projets',
  '/admin/testimonials': 'Témoignages',
  '/admin/settings': 'Paramètres',
}

interface TopBarProps {
  onMenuClick: () => void
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const pathname = usePathname()
  const title = PAGE_TITLES[pathname] ?? 'Admin'

  return (
    <header className="h-14 bg-white border-b border-border flex items-center px-5 gap-4 flex-shrink-0">
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-background transition-colors"
        onClick={onMenuClick}
      >
        <Menu className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-body-s">
        <span className="text-text-tertiary">Admin</span>
        <ChevronRight className="w-3.5 h-3.5 text-text-tertiary" strokeWidth={1.5} />
        <span className="font-medium text-text-primary">{title}</span>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-2">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg text-text-secondary hover:bg-background transition-colors">
          <Bell className="w-4.5 h-4.5" strokeWidth={1.5} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger border-2 border-white" />
        </button>

        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-signature flex items-center justify-center">
          <span className="text-white font-bold text-xs">AD</span>
        </div>
      </div>
    </header>
  )
}
