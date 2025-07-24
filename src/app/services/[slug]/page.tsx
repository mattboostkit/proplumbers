import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { services, locations } from "@/config/site"
import { Button } from "@/components/ui/button"
import { PhoneButton } from "@/components/phone-button"
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data"
import { CheckCircle, Clock, Shield, ArrowRight, MapPin } from "lucide-react"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  const title = `${service.name} in Sevenoaks & Kent | Pro Plumbers`
  const description = getServiceMetaDescription(service)

  return {
    title,
    description,
    keywords: getServiceKeywords(service),
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_GB",
    },
  }
}

function getServiceMetaDescription(service: typeof services[0]) {
  const descriptions: Record<string, string> = {
    "emergency-plumbing": "24/7 emergency plumber in Sevenoaks, Kent. Fast response for burst pipes, leaks, blocked drains. No call-out charge. Gas Safe registered. Call 01732 444555.",
    "boiler-repair": "Expert boiler repair services in Sevenoaks & Kent. All makes & models. Gas Safe registered engineers. Same day service available. 12 month guarantee. Call 01732 444555.",
    "boiler-installation": "Professional boiler installation in Sevenoaks, Kent. Worcester Bosch approved. Free quotes, competitive prices, 10 year warranties available. Call 01732 444555.",
    "boiler-servicing": "Annual boiler servicing in Sevenoaks & Kent. Keep your heating efficient & safe. Gas Safe registered. Competitive prices from £85. Book online or call 01732 444555.",
    "blocked-drains": "Blocked drain specialists in Sevenoaks, Kent. Fast drain unblocking for sinks, toilets, showers. Professional equipment, fixed prices. Call 01732 444555.",
    "bathroom-installation": "Complete bathroom installation in Sevenoaks & Kent. Design to completion. Quality fitters, competitive prices, full project management. Call 01732 444555.",
    "general-plumbing": "Reliable plumbers in Sevenoaks for all repairs. Taps, toilets, leaks, pipes. No job too small. Fixed prices, no call-out charge. Call 01732 444555.",
    "commercial-plumbing": "Commercial plumbing services in Kent. Offices, shops, landlords. Planned maintenance, emergency repairs, compliance certificates. Call 01732 444555.",
  }
  return descriptions[service.slug] || service.description
}

function getServiceKeywords(service: typeof services[0]) {
  const baseKeywords = [
    `${service.name.toLowerCase()} sevenoaks`,
    `${service.name.toLowerCase()} kent`,
    `${service.name.toLowerCase()} west malling`,
    `${service.name.toLowerCase()} tonbridge`,
  ]
  
  const specificKeywords: Record<string, string[]> = {
    "boiler-repair": ["boiler breakdown", "boiler not working", "heating repair", "no hot water"],
    "emergency-plumbing": ["emergency plumber", "24 hour plumber", "urgent plumber", "plumber near me"],
    "blocked-drains": ["drain unblocking", "blocked toilet", "blocked sink", "drain cleaning"],
    "bathroom-installation": ["bathroom fitters", "bathroom renovation", "new bathroom", "bathroom design"],
  }
  
  return [...baseKeywords, ...(specificKeywords[service.slug] || [])]
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Services", url: "https://proplumbers.co.uk/services" },
    { name: service.name, url: `https://proplumbers.co.uk/services/${service.slug}` },
  ])

  const serviceSchema = generateServiceSchema(service)

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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {service.name} Services in Sevenoaks & Kent
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {getServiceHeroDescription(service)}
            </p>
            <div className="flex flex-wrap gap-4">
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

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {getServiceContent(service)}
              </div>

              {/* Service Areas */}
              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  {service.name} Available Throughout Kent
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide {service.name.toLowerCase()} services across all our coverage areas:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/${service.slug}-${location.slug}`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>{location.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Info */}
              <div className="bg-white border rounded-lg p-6 mb-6 sticky top-20">
                <h3 className="text-xl font-semibold mb-4">Quick Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-gray-600">
                        {service.id === "emergency-plumbing" ? "30-60 minutes" : "Same day available"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Guarantee</p>
                      <p className="text-sm text-gray-600">12 month workmanship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Pricing</p>
                      <p className="text-sm text-gray-600">£85 first hour, £24/15 mins</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <PhoneButton className="w-full" size="lg" />
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Pro Plumbers?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Gas Safe Registered engineers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">15+ years serving Kent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Fully insured & DBS checked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">No call-out charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Transparent fixed pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.slug}`}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold mb-2">{relatedService.name}</h3>
                  <p className="text-sm text-gray-600">{relatedService.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need {service.name} in Kent?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call Pro Plumbers now for fast, professional service
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

function getServiceHeroDescription(service: typeof services[0]) {
  const descriptions: Record<string, string> = {
    "emergency-plumbing": "When disaster strikes, Pro Plumbers responds fast. Available 24/7 across Sevenoaks, West Malling, Tonbridge and all of Kent for urgent plumbing emergencies.",
    "boiler-repair": "Expert boiler repair services for all makes and models. Our Gas Safe engineers diagnose and fix boiler problems quickly, getting your heating back on when you need it most.",
    "boiler-installation": "Professional boiler installation from Worcester Bosch approved installers. Quality boilers, expert fitting, and warranties up to 10 years for complete peace of mind.",
    "boiler-servicing": "Keep your boiler running efficiently with annual servicing from Pro Plumbers. Prevent breakdowns, maintain warranties, and ensure your family&apos;s safety.",
    "blocked-drains": "Fast and effective drain unblocking services. From blocked sinks to backed-up toilets, we clear all drainage problems using professional equipment.",
    "bathroom-installation": "Transform your bathroom with Pro Plumbers. From design to completion, we handle every aspect of your bathroom renovation with skill and attention to detail.",
    "general-plumbing": "Your local plumbers for all repairs and maintenance. Leaking taps, running toilets, burst pipes - no job too small. Fixed prices and quality guaranteed.",
    "commercial-plumbing": "Reliable commercial plumbing services for Kent businesses. Planned maintenance, emergency repairs, and compliance certificates for landlords and property managers.",
  }
  return descriptions[service.slug] || service.description
}

function getServiceContent(service: typeof services[0]) {
  const content: Record<string, React.ReactElement> = {
    "emergency-plumbing": (
      <>
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for emergency plumber action photo</p>
        </div>
        
        <h2>24/7 Emergency Plumbing Services Across Kent</h2>
        <p>
          When you&apos;re facing a plumbing emergency in Sevenoaks, West Malling, or anywhere in Kent, 
          every minute counts. Water damage can escalate quickly, turning a small leak into a costly 
          disaster. That&apos;s why Pro Plumbers offers round-the-clock emergency plumbing services with 
          rapid response times throughout Kent.
        </p>

        <h3>Common Plumbing Emergencies We Handle</h3>
        <ul>
          <li><strong>Burst pipes</strong> - Immediate response to minimise water damage</li>
          <li><strong>Major leaks</strong> - Quick isolation and repair of leaking pipes</li>
          <li><strong>Blocked toilets</strong> - Fast unblocking when you can&apos;t wait</li>
          <li><strong>No water supply</strong> - Diagnosis and restoration of water flow</li>
          <li><strong>Boiler breakdowns</strong> - Emergency heating repairs in winter</li>
          <li><strong>Gas leaks</strong> - Safe isolation and repair by Gas Safe engineers</li>
        </ul>

        <h3>Our Emergency Response Process</h3>
        <p>
          When you call our 24-hour hotline on 01732 444555, you&apos;ll speak directly to a plumber 
          who can provide immediate advice while we dispatch an engineer. Our average response time 
          to Sevenoaks is just 30-60 minutes, with engineers strategically located across Kent for 
          faster arrival times.
        </p>

        <h3>No Call-Out Charges - Ever</h3>
        <p>
          Unlike many emergency plumbers in Kent, we never charge call-out fees - day or night. 
          You only pay for the work completed at our transparent rates: £85 for the first hour 
          and £24 per 15 minutes thereafter, plus any parts required.
        </p>
      </>
    ),
    "boiler-repair": (
      <>
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for boiler repair technician photo</p>
        </div>

        <h2>Expert Boiler Repair Services in Sevenoaks & Kent</h2>
        <p>
          A broken boiler means no heating or hot water - a real emergency, especially during Kent&apos;s 
          cold winters. Pro Plumbers specialises in fast, effective boiler repairs for all makes and 
          models, with Gas Safe registered engineers available seven days a week across Sevenoaks, 
          West Malling, Tonbridge and beyond.
        </p>

        <h3>Common Boiler Problems We Fix</h3>
        <ul>
          <li><strong>No heating or hot water</strong> - Often caused by faulty diverter valves or thermostats</li>
          <li><strong>Boiler keeps cutting out</strong> - Usually indicates low pressure or thermostat issues</li>
          <li><strong>Strange noises</strong> - Banging, whistling or gurgling sounds need investigation</li>
          <li><strong>Leaking boiler</strong> - From faulty internal components requiring urgent repair</li>
          <li><strong>Error codes displayed</strong> - We diagnose and fix all manufacturer error codes</li>
          <li><strong>Pilot light problems</strong> - Relighting and fixing persistent pilot light issues</li>
        </ul>

        <h3>All Boiler Makes & Models</h3>
        <p>
          Our experienced engineers work with all major boiler manufacturers including Worcester Bosch, 
          Vaillant, Baxi, Ideal, Viessmann, and more. We carry common spare parts in our vans for 
          faster repairs, meaning most boiler problems can be fixed on the first visit.
        </p>

        <div className="my-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for boiler brand logos</p>
        </div>

        <h3>Boiler Repair Costs in Kent</h3>
        <p>
          We believe in transparent pricing with no hidden charges. Our standard rate of £85 for the 
          first hour includes full diagnosis of your boiler problem. Most repairs are completed within 
          1-2 hours, with parts charged separately at competitive rates. We&apos;ll always provide a 
          fixed quote before starting work.
        </p>
      </>
    ),
    "boiler-installation": (
      <>
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for new boiler installation photo</p>
        </div>

        <h2>Professional Boiler Installation in Sevenoaks & Kent</h2>
        <p>
          Choosing the right boiler and installer is crucial for your home&apos;s comfort and efficiency. 
          As Worcester Bosch approved installers serving Sevenoaks, West Malling, and throughout Kent, 
          Pro Plumbers combines expert knowledge with quality products to deliver heating solutions 
          that last.
        </p>

        <h3>Why Replace Your Boiler?</h3>
        <ul>
          <li><strong>Age</strong> - Boilers over 10-15 years old are inefficient and prone to breakdowns</li>
          <li><strong>Rising energy bills</strong> - New A-rated boilers can save £300+ per year</li>
          <li><strong>Frequent repairs</strong> - When repair costs mount, replacement makes sense</li>
          <li><strong>Home improvements</strong> - Upgrading for extensions or bathroom additions</li>
          <li><strong>Better technology</strong> - Smart controls and improved efficiency</li>
        </ul>

        <h3>Our Boiler Installation Process</h3>
        <ol>
          <li><strong>Free home survey</strong> - We assess your heating needs and hot water demand</li>
          <li><strong>Personalised quote</strong> - Transparent pricing with no hidden costs</li>
          <li><strong>Professional installation</strong> - Typically completed in 1-2 days</li>
          <li><strong>System flush</strong> - Protecting your new boiler from debris</li>
          <li><strong>Full demonstration</strong> - Showing you how to use your new system</li>
          <li><strong>Warranty registration</strong> - Securing your manufacturer guarantee</li>
        </ol>

        <div className="my-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for Worcester Bosch accreditation badge</p>
        </div>

        <h3>Boiler Types We Install</h3>
        <p>
          We install all types of boilers to suit Kent homes, from compact combis perfect for 
          Sevenoaks apartments to system boilers for larger Tonbridge family homes. Our experts 
          will recommend the best solution based on your property size, water pressure, and budget.
        </p>
      </>
    ),
    "blocked-drains": (
      <>
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for drain unblocking equipment photo</p>
        </div>

        <h2>Professional Drain Unblocking Services in Kent</h2>
        <p>
          Blocked drains are more than just inconvenient - they can cause flooding, bad smells, and 
          health hazards. Pro Plumbers provides fast, effective drain unblocking services throughout 
          Sevenoaks, West Malling, Tonbridge and Kent, using professional equipment to clear even 
          the toughest blockages.
        </p>

        <h3>Signs You Have a Blocked Drain</h3>
        <ul>
          <li><strong>Slow draining</strong> - Water taking longer to drain from sinks, baths or showers</li>
          <li><strong>Bad odours</strong> - Unpleasant smells from plugholes or outside drains</li>
          <li><strong>Gurgling sounds</strong> - Unusual noises when water drains</li>
          <li><strong>Water backup</strong> - Water rising in toilets, sinks or shower trays</li>
          <li><strong>Outside flooding</strong> - Water pooling around drain covers</li>
        </ul>

        <h3>Our Drain Unblocking Methods</h3>
        <p>
          We use various professional techniques depending on the blockage type and location:
        </p>
        <ul>
          <li><strong>High-pressure jetting</strong> - Powerful water jets clear stubborn blockages</li>
          <li><strong>Drain rods</strong> - Traditional but effective for many blockages</li>
          <li><strong>CCTV inspection</strong> - Cameras identify blockage causes and locations</li>
          <li><strong>Chemical treatments</strong> - Safe, professional-grade drain cleaners</li>
        </ul>

        <h3>Preventing Future Blockages</h3>
        <p>
          After clearing your drains, we&apos;ll advise on preventing future problems. This might include 
          regular maintenance, avoiding certain items down drains, or installing drain guards. Many 
          Kent properties, especially older homes in Sevenoaks, benefit from annual drain maintenance.
        </p>
      </>
    ),
    "bathroom-installation": (
      <>
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for luxury bathroom installation photo</p>
        </div>

        <h2>Complete Bathroom Installation Services in Sevenoaks & Kent</h2>
        <p>
          Transform your bathroom with Pro Plumbers&apos; complete installation service. From initial 
          design to final finishing touches, we manage every aspect of your bathroom renovation. 
          Serving Sevenoaks, West Malling, Tonbridge and throughout Kent, we create beautiful, 
          functional bathrooms that add value to your home.
        </p>

        <h3>Our Bathroom Installation Services Include</h3>
        <ul>
          <li><strong>Full project management</strong> - One point of contact throughout</li>
          <li><strong>Design consultation</strong> - Making the most of your space and budget</li>
          <li><strong>All trades provided</strong> - Plumbing, electrical, tiling, plastering</li>
          <li><strong>Quality fixtures</strong> - We work with all major bathroom brands</li>
          <li><strong>Accessibility options</strong> - Walk-in showers, grab rails, easy access</li>
          <li><strong>Guaranteed workmanship</strong> - 12-month warranty on all work</li>
        </ul>

        <div className="my-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-medium">⚠️ Placeholder for before/after bathroom photos</p>
        </div>

        <h3>Bathroom Installation Process</h3>
        <ol>
          <li><strong>Free consultation</strong> - Discuss your ideas and requirements</li>
          <li><strong>Design & quote</strong> - Detailed plan and transparent pricing</li>
          <li><strong>Strip out</strong> - Careful removal of old bathroom</li>
          <li><strong>First fix</strong> - Plumbing and electrical preparation</li>
          <li><strong>Installation</strong> - Fitting new suite and fixtures</li>
          <li><strong>Finishing</strong> - Tiling, painting, and final touches</li>
        </ol>

        <h3>Popular Bathroom Trends in Kent</h3>
        <p>
          Kent homeowners are choosing modern, water-efficient bathrooms with features like digital 
          showers, wall-hung toilets, and LED mirror cabinets. Whether you prefer contemporary 
          minimalism or traditional elegance, we&apos;ll create the perfect bathroom for your 
          Sevenoaks or Kent home.
        </p>
      </>
    ),
  }

  return content[service.slug] || (
    <>
      <h2>Professional {service.name} Services</h2>
      <p>{service.description}</p>
      <p>
        Pro Plumbers provides expert {service.name.toLowerCase()} services throughout Sevenoaks, 
        West Malling, Tonbridge and all of Kent. With over 15 years experience and Gas Safe 
        registered engineers, we deliver quality workmanship at competitive prices.
      </p>
    </>
  )
}