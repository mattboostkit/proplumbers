import { Metadata } from "next"
import Link from "next/link"
import { services } from "@/config/site"
import { 
  Flame, 
  Wrench, 
  Droplet, 
  Bath, 
  Building, 
  AlertCircle,
  Package,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneButton } from "@/components/phone-button"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "alert-circle": AlertCircle,
  "flame": Flame,
  "wrench": Wrench,
  "droplet": Droplet,
  "bath": Bath,
  "building": Building,
  "package": Package,
}

export const metadata: Metadata = {
  title: "Plumbing & Heating Services in Sevenoaks, Kent | Pro Plumbers",
  description: "Professional plumbing and heating services in Sevenoaks and Kent. Emergency repairs, boiler servicing, bathroom installations. Gas Safe registered. Call 01732 444555.",
  keywords: [
    "plumbing services sevenoaks",
    "heating services kent",
    "boiler repair sevenoaks",
    "bathroom installation kent",
    "emergency plumber sevenoaks",
    "gas safe plumber kent"
  ],
}

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Services", url: "https://proplumbers.co.uk/services" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Plumbing & Heating Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive plumbing solutions for homes and businesses across Sevenoaks, 
              West Malling, Tonbridge and throughout Kent. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="font-medium">Gas Safe Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="font-medium">12 Month Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Complete Range of Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, Pro Plumbers provides 
              expert solutions for all your plumbing and heating needs in Kent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white border-2 rounded-lg p-6 hover:shadow-xl transition-all hover:border-primary"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Pro Plumbers for Your Plumbing Needs?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Based in Sevenoaks, we&apos;ve been serving Kent communities for over 15 years. 
                  We know the local area, common plumbing issues in Kent properties, and can 
                  respond quickly to emergencies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Deep knowledge of Kent water systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Understanding of local building regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Established relationships with local suppliers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Quality Guaranteed</h3>
                <p className="text-gray-600 mb-4">
                  Every job comes with our 12-month workmanship guarantee. We use only 
                  quality parts from trusted manufacturers and our Gas Safe registered 
                  engineers ensure safe, compliant installations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Worcester Bosch approved installers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Comprehensive insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Written quotes and guarantees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Plumbing Services Across Kent
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide all our services throughout Sevenoaks, West Malling, Tonbridge, 
              and surrounding areas. Whether you need an emergency plumber in Orpington or 
              a boiler service in Bromley, we&apos;re just a phone call away.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="font-semibold mb-4">Popular service requests by area:</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium">Sevenoaks</p>
                  <p className="text-gray-600">Boiler repairs, bathroom fitting</p>
                </div>
                <div>
                  <p className="font-medium">West Malling</p>
                  <p className="text-gray-600">Emergency plumbing, leak repairs</p>
                </div>
                <div>
                  <p className="font-medium">Tonbridge</p>
                  <p className="text-gray-600">Heating installations, drain clearing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Plumber in Kent? We&apos;re Here to Help
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Available 24/7 for emergencies. Free quotes. No call-out charges.
          </p>
          <PhoneButton 
            variant="outline" 
            size="xl"
            className="bg-white text-primary hover:bg-gray-100"
          />
        </div>
      </section>
    </>
  )
}