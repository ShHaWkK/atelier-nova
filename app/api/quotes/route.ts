import { NextRequest, NextResponse } from 'next/server'
import { generateQuoteNumber } from '@/lib/utils'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName, lastName, email, phone, company, sector,
      projectType, budget, delay, pageCount, features,
      maintenance, estimateMin, estimateMax, message,
    } = body

    // Try DB first, fallback to mock response
    try {
      const { prisma } = await import('@/lib/db')
      const quote = await prisma.quote.create({
        data: {
          quoteNumber: generateQuoteNumber(),
          clientName: `${firstName} ${lastName}`.trim(),
          email,
          phone: phone || null,
          company: company || null,
          sector: sector || null,
          projectType: projectType || null,
          budget: budget || null,
          delay: delay || null,
          pageCount: pageCount || null,
          features: JSON.stringify(features ?? []),
          maintenance: maintenance ?? false,
          estimateMin: estimateMin || null,
          estimateMax: estimateMax || null,
          message: message || null,
          status: 'draft',
        },
      })
      return NextResponse.json({ success: true, id: quote.id })
    } catch {
      // DB not set up yet — return success anyway for demo
      return NextResponse.json({
        success: true,
        id: `demo-${Date.now()}`,
        message: 'Demo mode — base de données non configurée',
      })
    }
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { prisma } = await import('@/lib/db')
    const quotes = await prisma.quote.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(quotes)
  } catch {
    return NextResponse.json({ quotes: [], message: 'Demo mode' })
  }
}
