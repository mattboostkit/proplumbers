import { siteConfig } from "@/config/site"

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.county,
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.2705",
      longitude: "0.1957",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
        description: "24/7 Emergency Service",
      },
    ],
    areaServed: [
      ...siteConfig.serviceAreas.primary.map(area => ({
        "@type": "City",
        name: area,
      })),
      ...siteConfig.serviceAreas.secondary.map(area => ({
        "@type": "City",
        name: area,
      })),
    ],
    priceRange: "££",
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.socialMedia.facebook,
      siteConfig.socialMedia.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Plumbing",
            description: "24/7 emergency plumbing services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Boiler Repair & Installation",
            description: "Gas Safe registered boiler services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "General Plumbing",
            description: "All plumbing repairs and installations",
          },
        },
      ],
    },
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Plumber",
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: [
      ...siteConfig.serviceAreas.primary.map(area => ({
        "@type": "City",
        name: area,
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}