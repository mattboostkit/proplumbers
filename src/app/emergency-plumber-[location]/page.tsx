import { Metadata } from "next"
import { notFound } from "next/navigation"
import { locations } from "@/config/site"
import { EmergencyHero } from "@/components/emergency/emergency-hero"
import { EmergencyServices } from "@/components/emergency/emergency-services"
import { ResponseTime } from "@/components/emergency/response-time"
import { EmergencyProcess } from "@/components/emergency/emergency-process"
import { EmergencyFAQ } from "@/components/emergency/emergency-faq"
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data"

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>
}): Promise<Metadata> {
  const { location: locationSlug } = await params
  const location = locations.find((l) => l.slug === locationSlug)
  
  if (!location) {
    return {
      title: "Page Not Found",
    }
  }

  const title = `Emergency Plumber ${location.name} - 24/7 Service | Pro Plumbers`
  const description = `Need an emergency plumber in ${location.name}? Available 24/7 with fast response times. No call-out charge. Gas Safe registered. Call 01732 444555 now!`

  return {
    title,
    description,
    keywords: [
      `emergency plumber ${location.name.toLowerCase()}`,
      `24 hour plumber ${location.name.toLowerCase()}`,
      `urgent plumber ${location.name.toLowerCase()}`,
      `plumber ${location.name.toLowerCase()} emergency`,
      `burst pipe ${location.name.toLowerCase()}`,
      `boiler breakdown ${location.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_GB",
    },
  }
}

export default async function EmergencyLocationPage({
  params,
}: {
  params: Promise<{ location: string }>
}) {
  const { location: locationSlug } = await params
  const location = locations.find((l) => l.slug === locationSlug)

  if (!location) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Emergency Plumber", url: "https://proplumbers.co.uk/emergency-plumber" },
    { name: `Emergency Plumber ${location.name}`, url: `https://proplumbers.co.uk/emergency-plumber-${location.slug}` },
  ])

  const serviceSchema = generateServiceSchema({
    name: `Emergency Plumber ${location.name}`,
    description: `24/7 emergency plumbing services in ${location.name}. Fast response, no call-out charge, Gas Safe registered plumbers.`,
    slug: `emergency-plumber-${location.slug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <EmergencyHero location={location.name} />
      <ResponseTime location={location.name} />
      <EmergencyServices location={location.name} />
      <EmergencyProcess />
      <EmergencyFAQ location={location.name} />
    </>
  )
}