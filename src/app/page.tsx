import { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBar } from "@/components/home/trust-bar"
import { ServicesGrid } from "@/components/home/services-grid"
import { EmergencyBanner } from "@/components/home/emergency-banner"
import { ServiceAreas } from "@/components/home/service-areas"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { VideoQuoteSection } from "@/components/home/video-quote-section"
import { FAQSection } from "@/components/home/faq-section"
import { ReviewsSection } from "@/components/reviews-section"
import { LocalSEOSection } from "@/components/home/local-seo-section"
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Pro Plumbers Ltd - 24/7 Plumbers in Sevenoaks, Kent | Emergency Plumbing & Heating",
  description: "Professional plumbers serving Sevenoaks, West Malling, Tonbridge & Kent. 24/7 emergency plumbing, boiler repairs, Gas Safe registered. No call-out charge. Call 01732 444555",
  keywords: [
    "plumbers sevenoaks",
    "emergency plumber kent",
    "plumber west malling",
    "plumber tonbridge",
    "24 hour plumber sevenoaks",
    "boiler repair kent",
    "gas safe plumber sevenoaks",
    "local plumbers near me"
  ],
}

const homeFAQs = [
  {
    question: "Do you charge a call-out fee?",
    answer: "No, we don&apos;t charge any call-out fees. You only pay for the work completed. Our pricing is transparent with £85 for the first hour and £24 per 15 minutes thereafter, plus any parts required."
  },
  {
    question: "Which areas do you cover?",
    answer: "We cover Sevenoaks, West Malling, Tonbridge, Orpington, Sidcup, Bromley, Bexley, Chislehurst, Eltham, and surrounding areas in Kent and South East London."
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes, we provide 24/7 emergency plumbing services across all our coverage areas. Our emergency response time is typically 30-60 minutes."
  },
]

export default function HomePage() {
  const faqSchema = generateFAQSchema(homeFAQs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <HeroSection />
      <TrustBar />
      <EmergencyBanner />
      <ServicesGrid />
      <VideoQuoteSection />
      <ServiceAreas />
      <LocalSEOSection />
      <ReviewsSection limit={6} />
      <WhyChooseUs />
      <FAQSection />
    </>
  )
}