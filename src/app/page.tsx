import { HeroSection } from "@/components/home/hero-section"
import { TrustBar } from "@/components/home/trust-bar"
import { ServicesGrid } from "@/components/home/services-grid"
import { EmergencyBanner } from "@/components/home/emergency-banner"
import { ServiceAreas } from "@/components/home/service-areas"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { VideoQuoteSection } from "@/components/home/video-quote-section"
import { FAQSection } from "@/components/home/faq-section"
import { generateLocalBusinessSchema } from "@/lib/structured-data"

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <HeroSection />
      <TrustBar />
      <EmergencyBanner />
      <ServicesGrid />
      <VideoQuoteSection />
      <ServiceAreas />
      <WhyChooseUs />
      <FAQSection />
    </>
  )
}