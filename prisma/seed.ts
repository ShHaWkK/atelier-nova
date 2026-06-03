import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing data
  await prisma.adminSettings.deleteMany()
  await prisma.testimonial.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.lead.deleteMany()

  // Leads
  await prisma.lead.createMany({
    data: [
      { name: 'Cabinet Dumont & Associés', email: 'contact@dumont-asso.fr', company: 'Dumont & Associés', type: 'Refonte site', status: 'new', priority: 'high' },
      { name: 'Restaurant Le Jardin', email: 'info@lejardin.fr', company: 'SARL Le Jardin', type: 'Réservation en ligne', status: 'contacted', priority: 'normal' },
      { name: 'FormaPro Lyon', email: 'rh@formapro.fr', company: 'FormaPro SARL', type: 'Site + CMS', status: 'converted', priority: 'high' },
    ],
  })

  // Bookings
  await prisma.booking.createMany({
    data: [
      { clientName: 'Thomas Bergeron', email: 'thomas@bergeron.fr', meetingType: 'Découverte projet', date: '2025-11-25', time: '10:00', status: 'confirmed' },
      { clientName: 'Sophie Martinet', email: 'sophie@martinet.com', meetingType: 'Revue de devis', date: '2025-11-25', time: '14:30', status: 'planned' },
    ],
  })

  // Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Camille Bergerac',
        role: 'Directrice générale',
        company: 'Archipel Events',
        message: "Nous avions besoin d'un site qui reflète notre positionnement premium tout en générant de vraies demandes. Atelier Nova a livré exactement ça.",
        rating: 5,
        avatar: 'CB',
        published: true,
        featured: true,
      },
      {
        name: 'Philippe Morteau',
        role: 'Associé fondateur',
        company: 'Méridiem Conseil',
        message: "Ce qui m'a convaincu, c'est la rigueur dans la réflexion amont. Le site qui en résulte est à notre image : sobre, sérieux, efficace.",
        rating: 5,
        avatar: 'PM',
        published: true,
        featured: true,
      },
    ],
  })

  // Admin settings
  await prisma.adminSettings.createMany({
    data: [
      { key: 'company_name', value: 'Atelier Nova' },
      { key: 'contact_email', value: 'hello@atelier-nova.fr' },
    ],
  })

  console.log('✅ Seed complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
