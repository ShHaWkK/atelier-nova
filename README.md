# Atelier Nova — Studio Digital Premium

Projet portfolio complet démontrant la création d'une plateforme web professionnelle : site public haut de gamme + back-office administrateur complet.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 3 + design system custom |
| UI Components | Radix UI (Dialog, Toast, Tabs…) |
| ORM | Prisma |
| Base de données | SQLite (POC) / PostgreSQL (prod) |
| Auth | Next-Auth v5 |
| PDF | jsPDF + jsPDF-AutoTable |
| Email | Nodemailer |
| Icons | Lucide React |
| Typos | Inter, Plus Jakarta Sans, DM Serif Display |

---

## Installation

### Prérequis

- Node.js 20+
- npm ou pnpm

### 1. Installer les dépendances

```bash
npm install
```

### 2. Variables d'environnement

```bash
cp .env.example .env
```

Éditez `.env` :

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="changez-moi-avec-openssl-rand-base64-32"
```

### 3. Base de données

```bash
npm run db:push    # Crée le schéma SQLite
npm run db:seed    # Données de démonstration
```

### 4. Lancer le serveur

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

---

## Identifiants admin (démo)

| Champ | Valeur |
|-------|--------|
| URL | http://localhost:3000/admin/login |
| Email | `admin@atelier-nova.fr` |
| Mot de passe | `admin123` |

---

## Pages publiques

| Route | Description |
|-------|-------------|
| `/` | Landing page complète |
| `/services` | Tous les services détaillés |
| `/projects` | Portfolio des réalisations |
| `/projects/[slug]` | Détail d'un projet |
| `/pricing` | Offres et tarifs |
| `/quote` | Formulaire de devis multi-étapes + estimation en temps réel |
| `/booking` | Prise de rendez-vous avec calendrier interactif |
| `/blog` | Liste des articles |
| `/blog/[slug]` | Article détaillé |
| `/contact` | Page de contact |
| `/faq` | FAQ complète |

## Back-office admin

| Route | Description |
|-------|-------------|
| `/admin/login` | Connexion sécurisée |
| `/admin/dashboard` | Tableau de bord + graphiques |
| `/admin/leads` | Gestion des contacts — filtres, statuts, notes |
| `/admin/quotes` | Gestion des devis + génération PDF |
| `/admin/bookings` | Gestion des rendez-vous |
| `/admin/blog` | CMS articles |
| `/admin/projects` | Gestion du portfolio |
| `/admin/testimonials` | Gestion des témoignages |
| `/admin/settings` | Paramètres studio |

---

## Structure des fichiers

```
atelier-nova/
├── app/
│   ├── (public)/           # Pages publiques (avec Header + Footer)
│   ├── admin/              # Back-office (avec Sidebar + TopBar)
│   ├── api/                # API Routes (quotes, leads, bookings)
│   ├── not-found.tsx       # Page 404
│   ├── error.tsx           # Page d'erreur
│   └── globals.css
├── components/
│   ├── ui/                 # Design system (Button, Badge, Card, Input, Modal, Table, Toast)
│   ├── public/             # Header, Footer
│   └── admin/              # Sidebar, TopBar
├── data/                   # Mock data (fonctionne sans DB)
├── lib/                    # db.ts, utils.ts
├── prisma/                 # schema.prisma + seed.ts
└── tailwind.config.ts
```

---

## Mode démo (sans base de données)

Le projet fonctionne sans base de données configurée :
- Formulaires publics : retournent un succès simulé
- Back-office : données mockées en mémoire
- Toutes les interactions UI sont fonctionnelles

Pour activer la vraie persistance : `npm run db:push && npm run db:seed`

---

## Déploiement Vercel

```bash
npx vercel
```

Variables à configurer :
- `DATABASE_URL` (Vercel Postgres recommandé)
- `AUTH_SECRET`

Pour PostgreSQL, modifier `prisma/schema.prisma` : `provider = "postgresql"`

---

## Direction artistique

**Concept** : "Artisanat numérique" — design sobre, éditorial, SaaS haut de gamme.

| Token | Valeur |
|-------|--------|
| Fond principal | `#F8F7F4` |
| Accent | `#6B5CE7` (violet indigo) |
| Dark | `#1A1A2E` (bleu nuit) |
| Texte principal | `#0F0F1A` |
| Titre | Plus Jakarta Sans 800 |
| Corps | Inter 400 |
| Éditorial | DM Serif Display italic |
