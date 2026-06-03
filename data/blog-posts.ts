export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorRole: string
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured: boolean
  status: 'published' | 'draft'
  tags: string[]
}

export const categories = [
  'Création web',
  'Conversion',
  'SEO',
  'Sécurité',
  'Maintenance',
  'Automatisation',
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'pourquoi-pme-site-vitrine-ne-suffit-plus',
    title: "Pourquoi votre site vitrine ne suffit plus pour convertir en 2025",
    excerpt:
      "Un site web qui n'est pas conçu pour convertir est un coût, pas un investissement. Voici les 5 erreurs que commettent la plupart des PME et comment les corriger.",
    category: 'Conversion',
    author: 'Thomas Renard',
    authorRole: 'Fondateur, Atelier Nova',
    publishedAt: '2025-11-15',
    readingTime: 7,
    featured: true,
    status: 'published',
    tags: ['conversion', 'PME', 'stratégie digitale'],
    content: `
## Le problème avec les sites vitrines classiques

La majorité des sites PME que nous analysons partagent les mêmes caractéristiques : belle apparence, contenu générique, et zéro système de capture de contact.

Avoir un site web en 2025 ne suffit plus. **Ce qui compte, c'est ce que votre site fait pour vous quand vous dormez.**

## Les 5 erreurs les plus fréquentes

### 1. Aucun appel à l'action clair

Le visiteur arrive sur votre site, il comprend en 5 secondes ce que vous faites... mais il ne sait pas quoi faire ensuite. Résultat : il part.

Chaque page doit avoir un objectif unique et un CTA visible : *"Demander un devis"*, *"Réserver un appel"*, *"Télécharger le guide"*.

### 2. Un formulaire de contact trop générique

"Nom, email, message" — ce formulaire ne qualifie pas votre prospect. Vous recevez des messages vagues, vous perdez du temps à requalifier, et vous ratez les opportunités sérieuses.

Un bon formulaire collecte : le budget, le délai, le type de projet, les contraintes spécifiques. Il filtre les curieux et attire les acheteurs sérieux.

### 3. Pas de preuve sociale visible

Les PME hésitent souvent à afficher leurs clients ou leurs résultats. C'est une erreur. **La preuve sociale est le premier facteur de confiance** pour un nouveau visiteur.

Témoignages, études de cas, logos clients, chiffres de résultats — tout ce qui prouve que vous livrez ce que vous promettez.

### 4. Performances trop basses sur mobile

Plus de 60% du trafic web provient maintenant du mobile. Si votre site met plus de 3 secondes à charger sur un réseau 4G, vous perdez la moitié de vos visiteurs avant même qu'ils aient vu votre contenu.

### 5. Pas de système de lead nurturing

Le visiteur qui arrive aujourd'hui n'est pas forcément prêt à acheter aujourd'hui. Si vous n'avez pas de moyen de rester en contact (newsletter, rappel automatique, suivi devis), il disparaît définitivement.

## Comment corriger ça

La bonne nouvelle : ces problèmes se résolvent avec une refonte stratégique, pas forcément une refonte visuelle.

Chez Atelier Nova, nous commençons toujours par un audit de conversion avant de toucher au design. Parce que le design sans stratégie, c'est du beau travail sans résultat.

**Prêt à transformer votre site en machine à leads ?** Demandez un audit gratuit.
    `.trim(),
  },
  {
    id: '2',
    slug: 'reservation-en-ligne-secteur-service',
    title: "Réservation en ligne : le retour sur investissement que personne ne calcule",
    excerpt:
      "Un système de réservation en ligne coûte entre 2 000 et 8 000 €. Voici comment calculer précisément ce que vous perdez en ne l'ayant pas encore.",
    category: 'Automatisation',
    author: 'Sophie Leclaire',
    authorRole: 'Responsable projets, Atelier Nova',
    publishedAt: '2025-10-28',
    readingTime: 6,
    featured: true,
    status: 'published',
    tags: ['réservation', 'ROI', 'automatisation'],
    content: `
## Le coût invisible de l'absence de réservation en ligne

Prenons un exemple concret. Vous êtes consultant indépendant ou vous gérez un cabinet avec 3 collaborateurs.

Chaque semaine, vous traitez 15 à 20 demandes de rendez-vous par email ou téléphone. Chaque échange prend en moyenne 8 minutes (appel + email de confirmation + rappel si besoin). Soit **environ 2h30 par semaine**, 10h par mois.

Si votre taux journalier est de 500 €/jour, ces 10 heures vous coûtent **625 € par mois en temps non facturable**.

Sur 12 mois : **7 500 € perdus en gestion administrative**.

## Ce qu'un système de réservation en ligne change

Avec un module de réservation intégré à votre site :

- Le client choisit lui-même sa date et son créneau
- Il reçoit une confirmation automatique
- Il reçoit un rappel 24h avant
- En cas d'annulation, le créneau se libère automatiquement
- Vous recevez une notification et rien d'autre

**Résultat : 0 minute de gestion pour chaque rendez-vous confirmé.**

## Le calcul du ROI

Un module de réservation sur-mesure intégré à votre site coûte entre 2 000 € et 4 000 € selon les fonctionnalités.

Avec 10h/mois récupérées à 500 €/jour (soit 62,5 €/h) :

- Économie mensuelle : 625 €
- **Retour sur investissement : 3 à 6 mois**

Et ce calcul ne compte pas les revenus supplémentaires générés par les réservations prises en dehors de vos heures d'ouverture — un gain qui peut représenter 20 à 35% de chiffre d'affaires additionnel.

## Ce que nos clients ont constaté

Osteria Campo (restaurant) : 68% de leurs réservations sont maintenant prises en dehors des heures d'ouverture. 0 coup de téléphone manqué.

Archipel Events (événementiel) : 340% d'augmentation des demandes entrantes en 3 mois. Temps de réponse réduit de 70%.

**Vous voulez calculer votre ROI spécifique ?** Parlez-nous de votre activité.
    `.trim(),
  },
  {
    id: '3',
    slug: 'seo-technique-fondamentaux-2025',
    title: "Les fondamentaux du SEO technique que votre développeur a peut-être oubliés",
    excerpt:
      "Balises manquantes, images non optimisées, pages non indexées... Voici le checklist des erreurs SEO les plus courantes sur les sites PME.",
    category: 'SEO',
    author: 'Thomas Renard',
    authorRole: 'Fondateur, Atelier Nova',
    publishedAt: '2025-10-12',
    readingTime: 9,
    featured: false,
    status: 'published',
    tags: ['SEO', 'technique', 'performance'],
    content: `
## SEO technique vs SEO éditorial

Beaucoup de PME investissent dans la rédaction de contenu SEO (articles, pages de services) sans avoir mis en place les fondations techniques indispensables.

C'est comme construire une maison sur des fondations fissurées.

## Le checklist technique incontournable

### Structure des balises

- **Title** : unique sur chaque page, 55-60 caractères, mot-clé principal en premier
- **Meta description** : 150-160 caractères, call-to-action, mot-clé secondaire
- **H1** : un seul par page, cohérent avec le title
- **Hiérarchie des titres** : H2/H3/H4 logique, pas de saut de niveau

### Performances de chargement

- **Core Web Vitals** : LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Images** : format WebP, lazy loading, attribut alt renseigné
- **JavaScript** : bundle splitté, code mort retiré
- **Cache navigateur** : headers configurés côté serveur

### Structure des URLs

- URLs courtes, descriptives, en minuscules
- Pas de paramètres dynamiques inutiles (?id=123)
- Redirections 301 en place pour les anciennes URLs

### Données structurées (Schema.org)

Les rich snippets augmentent le taux de clic dans les résultats Google. Pour une PME :

- **LocalBusiness** : adresse, horaires, téléphone
- **Article** : pour les articles de blog
- **Product** / **Service** : pour les offres
- **FAQ** : pour la page FAQ (bonus : snippet en résultats)

### Mobile-first et accessibilité

Google indexe maintenant en priorité la version mobile de votre site. Si votre responsive est cassé, votre référencement en souffre.

## Les 3 erreurs les plus fréquentes

1. **Pages de catégories non indexées** : votre boutique ou catalogue entier est invisible pour Google
2. **Images sans alt** : texte alternatif manquant = contenu invisible pour les moteurs
3. **Liens internes cassés** : 404 internes signalent un site mal entretenu

## Commencer par un audit

Avant d'écrire du contenu, faites auditer la technique de votre site. **Un audit SEO technique coûte entre 300 € et 800 €** et peut débloquer 2× plus de trafic que 6 mois de rédaction.
    `.trim(),
  },
  {
    id: '4',
    slug: 'securite-web-pme-checklist',
    title: "Sécurité web pour les PME : ce que vous ne vérifiez probablement pas",
    excerpt:
      "HTTPS, mises à jour, sauvegardes, permissions... La sécurité d'un site n'est pas réservée aux grandes entreprises. Voici le minimum à mettre en place.",
    category: 'Sécurité',
    author: 'Marc Duval',
    authorRole: 'Développeur senior, Atelier Nova',
    publishedAt: '2025-09-25',
    readingTime: 8,
    featured: false,
    status: 'published',
    tags: ['sécurité', 'HTTPS', 'maintenance', 'PME'],
    content: `
## Les PME sont une cible privilégiée

Une idée reçue dangereuse : "Je suis trop petit pour être hacké." En réalité, 43% des cyberattaques ciblent les petites structures, précisément parce qu'elles ont moins de défenses.

## Le socle de sécurité minimal

### HTTPS partout

Si votre site n'est pas en HTTPS en 2025, c'est une urgence. Le navigateur affiche "Non sécurisé", Google vous pénalise en référencement, et vos données utilisateurs transitent en clair.

Solution : certificat Let's Encrypt (gratuit) configuré par votre hébergeur.

### Mises à jour régulières

Les failles de sécurité les plus exploitées sont des failles connues, corrigées dans des mises à jour... que personne n'a appliquées.

WordPress avec des plugins non mis à jour = cible facile. Planifiez des mises à jour mensuelles ou optez pour un contrat de maintenance.

### Sauvegardes quotidiennes

Pas de sauvegarde = risque de tout perdre en cas d'attaque ransomware ou d'erreur humaine.

Règle 3-2-1 : 3 copies, 2 supports différents, 1 hors site (cloud).

### Permissions des fichiers

Sur un hébergement partagé, des fichiers avec les mauvaises permissions (777) sont accessibles en écriture par n'importe qui. Vérifiez que vos fichiers sont en 644 et dossiers en 755.

### Protection des formulaires

Tout formulaire non protégé est une porte d'entrée pour :
- Le spam (bots automatisés)
- Les injections SQL
- Le phishing

Implémentez : reCAPTCHA v3, validation côté serveur, tokens CSRF.

## Ce que nous incluons dans chaque projet

Chez Atelier Nova, la sécurité n'est pas une option. Chaque site livré inclut :

- HTTPS configuré
- En-têtes de sécurité HTTP (CSP, HSTS, X-Frame-Options)
- Protection CSRF sur tous les formulaires
- Validation et sanitisation des entrées
- Logs d'erreurs configurés
- Sauvegarde automatique 24h

Parce qu'un site sécurisé n'est pas plus cher à construire — c'est une question de méthode.
    `.trim(),
  },
  {
    id: '5',
    slug: 'maintenance-site-web-pourquoi-important',
    title: "Votre site web sans maintenance, c'est une voiture sans contrôle technique",
    excerpt:
      "Beaucoup de clients pensent que leur site web est livré pour toujours. Voici pourquoi la maintenance n'est pas un luxe mais une nécessité opérationnelle.",
    category: 'Maintenance',
    author: 'Sophie Leclaire',
    authorRole: 'Responsable projets, Atelier Nova',
    publishedAt: '2025-09-08',
    readingTime: 5,
    featured: false,
    status: 'published',
    tags: ['maintenance', 'disponibilité', 'performance'],
    content: `
## Ce que "livré" signifie vraiment

Quand nous livrons un site, il fonctionne parfaitement dans son environnement du moment : navigateurs actuels, version de Node.js installée, dépendances npm à jour.

Six mois plus tard, le web a évolué. Les navigateurs ont été mis à jour. Des dépendances ont des failles. Chrome a changé son comportement sur certaines APIs CSS.

**Un site non maintenu se dégrade.** Pas spectaculairement — lentement, insidieusement.

## Les risques concrets

### Failles de sécurité

Les packages npm, les CMS, les plugins — tous reçoivent des patches de sécurité. Si vous ne les appliquez pas, vous accumulez des vulnérabilités connues.

### Incompatibilités navigateur

Les navigateurs évoluent. Une fonctionnalité JavaScript qui fonctionnait parfaitement peut être dépréciée dans une mise à jour. Résultat : une partie de vos visiteurs voient un site cassé.

### Dégradation des performances

Les CDN changent, les APIs tierces évoluent, les polices Google Fonts peuvent se comporter différemment. Sans monitoring, vous ne savez pas que votre site a ralenti.

### Expiration SSL

Un certificat SSL expiré = cadenas rouge dans le navigateur = fuite immédiate des visiteurs et effondrement du référencement.

## Ce qu'un contrat de maintenance couvre

Un contrat de maintenance mensuel inclut typiquement :

- Mises à jour des dépendances et du framework
- Monitoring de disponibilité (alerte en moins de 5 minutes)
- Sauvegarde quotidienne vérifiée
- Corrections de bugs mineurs (< 2h/mois)
- Rapport mensuel de performance
- Renouvellement SSL automatique

**Prix habituel : 80 à 250 €/mois** selon la complexité du projet.

Comparez avec le coût d'un site hors ligne pendant une journée ouvrée : manque à gagner, perte de crédibilité, coût de réparation d'urgence.

La maintenance n'est pas un coût. C'est une assurance.
    `.trim(),
  },
  {
    id: '6',
    slug: 'devis-automatise-agence-freelance',
    title: "Comment automatiser votre processus de devis et regagner 6 heures par semaine",
    excerpt:
      "Du formulaire de demande à l'envoi du PDF signé, voici comment structurer un processus de devis qui se gère presque seul.",
    category: 'Automatisation',
    author: 'Thomas Renard',
    authorRole: 'Fondateur, Atelier Nova',
    publishedAt: '2025-08-20',
    readingTime: 7,
    featured: false,
    status: 'published',
    tags: ['devis', 'automatisation', 'freelance', 'agence'],
    content: `
## Le processus de devis classique (et ses inefficacités)

1. Prospect envoie un email vague
2. Vous répondez pour qualifier (2-3 échanges)
3. Vous rédigez un devis dans Word/Pages
4. Vous l'exportez en PDF
5. Vous l'envoyez par email
6. Vous attendez
7. Vous relancez manuellement

**Temps moyen : 3 à 5 heures par devis.** Pour 5 devis par semaine, c'est 20h perdues.

## Le processus optimisé

### Étape 1 : Un formulaire de demande qui qualifie

Remplacez le formulaire "message libre" par un formulaire structuré avec :
- Type de projet (liste)
- Budget estimé (fourchettes)
- Délai souhaité
- Fonctionnalités souhaitées (checkboxes)
- Contexte (textarea libre)

Résultat : vous recevez déjà 80% des informations nécessaires pour rédiger un devis.

### Étape 2 : Estimation automatique

Un formulaire bien conçu peut afficher une estimation de prix en temps réel pendant que le client remplit ses informations. Pas un engagement — une indication.

Bénéfice : vous ne recevez plus de demandes avec un budget de 500€ pour un projet à 8 000€.

### Étape 3 : Génération PDF automatisée

Depuis votre back-office, en un clic : génération d'un devis PDF professionnel avec :
- Numéro de devis unique
- Prestations détaillées
- Conditions de paiement
- Date de validité
- Signature fictive / tampon

**Temps de génération : 30 secondes.** Vs 2h de rédaction Word.

### Étape 4 : Relances automatiques

Si le devis n'est pas ouvert après 48h : relance automatique.
Si pas de réponse après 7 jours : second email de relance.
Si pas de réponse après 14 jours : notification dans votre back-office pour une prise de contact personnalisée.

## Ce que ça change concrètement

Avec ce système, traiter un devis prend **15 à 30 minutes** au lieu de 3 à 5 heures :

- 5 min pour relire la demande structurée
- 10 min pour affiner l'estimation
- 2 min pour générer le PDF
- 3 min pour envoyer avec un message personnalisé

Sur 5 devis par semaine, vous récupérez **18 à 22 heures mensuelles**.

C'est le genre d'outil que nous construisons pour nos clients — et que nous utilisons nous-mêmes.
    `.trim(),
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured && p.status === 'published')
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status === 'published')
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category && p.status === 'published')
}
