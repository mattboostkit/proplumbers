import { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Contact Us | Pro Plumbers Ltd",
  description: "Contact Pro Plumbers for plumbing services in Sevenoaks and Kent. Available 24/7. Call 01732 444555 or use our contact form for a free quote.",
  keywords: [
    "contact plumber sevenoaks",
    "plumber quote kent",
    "emergency plumber contact",
    "plumbing services contact",
  ],
}

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Contact", url: "https://proplumbers.co.uk/contact" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Pro Plumbers
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch for a free quote or emergency assistance. 
              We're available 24/7 to help with all your plumbing needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <ContactInfo />
              <ContactMap />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}