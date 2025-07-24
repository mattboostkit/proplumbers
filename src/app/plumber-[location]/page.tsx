import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { locations } from "@/config/site"
import { PhoneButton } from "@/components/phone-button"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Droplet,
  Flame,
  Wrench,
  Home,
  ArrowRight
} from "lucide-react"
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/structured-data"

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
      title: "Location Not Found",
    }
  }

  const title = `Plumber ${location.name} - Local Plumbing Services | Pro Plumbers`
  const description = `Looking for a reliable plumber in ${location.name}? Pro Plumbers provides 24/7 emergency plumbing, boiler repairs, and all plumbing services. Gas Safe registered. Call 01732 444555.`

  return {
    title,
    description,
    keywords: [
      `plumber ${location.name.toLowerCase()}`,
      `plumbers in ${location.name.toLowerCase()}`,
      `${location.name.toLowerCase()} plumbing services`,
      `emergency plumber ${location.name.toLowerCase()}`,
      `boiler repair ${location.name.toLowerCase()}`,
      `local plumber ${location.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_GB",
    },
  }
}

export default async function PlumberLocationPage({
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
    { name: "Locations", url: "https://proplumbers.co.uk/locations" },
    { name: `Plumber ${location.name}`, url: `https://proplumbers.co.uk/plumber-${location.slug}` },
  ])

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    name: `Pro Plumbers - ${location.name}`,
    areaServed: {
      "@type": "City",
      name: location.name,
    },
  }

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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Serving {location.name} and surrounding areas</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Expert Plumbers in {location.name}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {getLocationDescription(location.name)}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <PhoneButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">No Call-Out Charge</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">5 Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">30-60</div>
                <p className="text-sm text-gray-600">Minutes average response to {location.name}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-gray-600">Happy customers in {location.name}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-gray-600">Years serving {location.name}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-gray-600">Emergency availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Plumbing Services Available in {location.name}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Pro Plumbers offers comprehensive plumbing and heating services to homes and 
              businesses throughout {location.name}. No job too big or small.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Droplet, title: "Emergency Plumbing", desc: "24/7 burst pipes & leaks" },
                { icon: Flame, title: "Boiler Services", desc: "Repair, service & installation" },
                { icon: Wrench, title: "General Plumbing", desc: "Taps, toilets & repairs" },
                { icon: Home, title: "Bathroom Fitting", desc: "Complete renovations" },
              ].map((service, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <Link href="/services" className="text-primary font-medium text-sm flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Location */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Your Local {location.name} Plumbers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Why Choose Pro Plumbers in {location.name}?</h3>
                <p className="text-gray-700 mb-4">
                  {getLocationContent(location.name).whyChoose}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Local engineers based near {location.name}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Fast response times - typically 30-60 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Knowledge of {location.name} water systems & common issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Established relationships with local suppliers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Common Plumbing Issues in {location.name}</h3>
                <p className="text-gray-700 mb-4">
                  {getLocationContent(location.name).commonIssues}
                </p>
                <div className="bg-white rounded-lg p-6">
                  <p className="font-semibold mb-2">Recent jobs in {location.name}:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {getLocationContent(location.name).recentJobs.map((job: string, index: number) => (
                      <li key={index}>• {job}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Areas We Cover Near {location.name}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              In addition to {location.name}, our plumbers regularly serve these nearby areas:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {getLocationContent(location.name).nearbyAreas.map((area: string, index: number) => (
                  <div key={index} className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="mt-8 text-gray-600">
              Can&apos;t see your area? We cover all of Kent - give us a call to check availability.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What {location.name} Customers Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {getLocationReviews(location.name).map((review, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&quot;{review.text}&quot;</p>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg font-semibold mb-2">Join 500+ Happy Customers in {location.name}</p>
              <p className="text-gray-600">Rated 5 stars on Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Plumber in {location.name}?
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

function getLocationDescription(locationName: string) {
  const descriptions: Record<string, string> = {
    "Sevenoaks": "Pro Plumbers has been serving Sevenoaks residents and businesses for over 15 years. Based locally on Lime Tree Walk, we&apos;re your neighbours and your trusted plumbing experts.",
    "West Malling": "Need a reliable plumber in West Malling? Pro Plumbers provides fast, professional plumbing services throughout West Malling and surrounding villages, with rapid response times.",
    "Tonbridge": "Pro Plumbers is Tonbridge&apos;s trusted choice for all plumbing and heating needs. From the High Street to the Castle, we keep Tonbridge homes and businesses running smoothly.",
    "Orpington": "Serving Orpington with pride, Pro Plumbers delivers expert plumbing solutions to BR5 and BR6 postcodes. Your local plumbers for emergencies, repairs, and installations.",
    "Sidcup": "Pro Plumbers brings professional plumbing services to Sidcup homes and businesses. Quick response times from our Kent-based team for all your plumbing needs.",
    "Bromley": "Bromley&apos;s choice for reliable plumbing services. Pro Plumbers covers all BR postcodes with 24/7 emergency response and comprehensive plumbing solutions.",
    "Bexley": "Your local Bexley plumbers. Pro Plumbers provides fast, affordable plumbing services throughout the Bexley area, from emergency repairs to planned installations.",
    "Chislehurst": "Pro Plumbers - Chislehurst&apos;s trusted plumbing experts. Serving the conservation area and beyond with careful, professional plumbing services that respect your property.",
    "Eltham": "Need a plumber in Eltham? Pro Plumbers offers comprehensive plumbing services to SE9 residents and businesses, with local engineers for faster response times."
  }
  return descriptions[locationName] || `Professional plumbing services in ${locationName} from Pro Plumbers. Gas Safe registered, fully insured, and available 24/7 for all your plumbing needs.`
}

function getLocationContent(locationName: string) {
  const content: Record<string, {
    whyChoose: string
    commonIssues: string
    recentJobs: string[]
    nearbyAreas: string[]
  }> = {
    "Sevenoaks": {
      whyChoose: "As Sevenoaks&apos; premier plumbing company, we understand the unique challenges of local properties, from Victorian homes near Knole Park to modern developments. Our Lime Tree Walk base means we&apos;re always nearby.",
      commonIssues: "Sevenoaks properties often experience hard water issues leading to limescale buildup, Victorian pipework problems in older homes, and boiler pressure issues during cold snaps.",
      recentJobs: [
        "Emergency leak repair on London Road",
        "Complete bathroom renovation in Knole",
        "Boiler replacement near Sevenoaks School",
        "Blocked drain clearance in Riverhead"
      ],
      nearbyAreas: ["Riverhead", "Dunton Green", "Otford", "Kemsing", "Seal", "Weald"]
    },
    "West Malling": {
      whyChoose: "West Malling residents trust Pro Plumbers for our local knowledge and rapid response. We understand the mix of historic properties in the Conservation Area and new builds around Kings Hill.",
      commonIssues: "Common issues in West Malling include aging pipework in period properties, hard water affecting modern boilers, and drainage problems in older parts of town.",
      recentJobs: [
        "Boiler service on High Street",
        "Kitchen plumbing for renovation near the Church",
        "Emergency pipe repair in Kings Hill",
        "Bathroom installation in Leybourne"
      ],
      nearbyAreas: ["Kings Hill", "Leybourne", "East Malling", "Larkfield", "Aylesford", "Ditton"]
    },
    "Tonbridge": {
      whyChoose: "Pro Plumbers knows Tonbridge inside out. From the historic Castle area to modern Tonbridge Wells borders, we provide tailored plumbing solutions for every type of property.",
      commonIssues: "Tonbridge homes often face challenges with older heating systems, flood-related plumbing issues near the Medway, and hard water problems affecting boilers and pipes.",
      recentJobs: [
        "Central heating upgrade near Tonbridge Castle",
        "Emergency flood damage repairs",
        "Commercial boiler service on High Street",
        "Drain unblocking in Higham Wood"
      ],
      nearbyAreas: ["Hildenborough", "Hadlow", "Shipbourne", "Tudeley", "Capel", "Pembury"]
    }
  }
  
  return content[locationName] || {
    whyChoose: `We&apos;ve built our reputation in ${locationName} on reliability, quality workmanship, and honest pricing. Our local knowledge means faster response times and better service.`,
    commonIssues: `Properties in ${locationName} commonly experience issues with hard water, aging pipework, and boiler efficiency. Our engineers are familiar with these local challenges.`,
    recentJobs: [
      "Emergency leak repair",
      "Annual boiler service",
      "Bathroom renovation",
      "Blocked drain clearance"
    ],
    nearbyAreas: locations.filter(l => l.name !== locationName).slice(0, 6).map(l => l.name)
  }
}

function getLocationReviews(locationName: string) {
  const reviews: Record<string, Array<{text: string, author: string, location: string}>> = {
    "Sevenoaks": [
      {
        text: "Fantastic service! They arrived within 45 minutes of calling with a burst pipe. Professional, tidy, and reasonably priced.",
        author: "Sarah M.",
        location: "Sevenoaks, TN13"
      },
      {
        text: "Used Pro Plumbers for our annual boiler service. Thorough job, great communication, and helpful advice about maintenance.",
        author: "James K.",
        location: "Riverhead, TN13"
      },
      {
        text: "Complete bathroom refit completed on time and budget. The team were respectful of our home and the finish is excellent.",
        author: "Emma L.",
        location: "Dunton Green, TN13"
      }
    ],
    "West Malling": [
      {
        text: "Emergency call-out on Sunday evening - arrived quickly and fixed our heating. Can&apos;t recommend highly enough!",
        author: "David P.",
        location: "West Malling, ME19"
      },
      {
        text: "Pro Plumbers installed our new boiler. Competitive quote, clean work, and great aftercare service. Very pleased.",
        author: "Rachel T.",
        location: "Kings Hill, ME19"
      },
      {
        text: "Had a blocked drain emergency. They came out same day and sorted it quickly. Fair pricing and friendly service.",
        author: "Mark H.",
        location: "Leybourne, ME19"
      }
    ]
  }
  
  return reviews[locationName] || [
    {
      text: "Excellent service from start to finish. Quick response, professional work, and fair pricing. Highly recommended!",
      author: "John D.",
      location: locationName
    },
    {
      text: "Called for an emergency repair and they arrived within the hour. Fixed the problem quickly and cleanly. Will use again.",
      author: "Lisa W.",
      location: locationName
    },
    {
      text: "Annual boiler service completed efficiently. The engineer was knowledgeable and gave useful maintenance tips.",
      author: "Peter S.",
      location: locationName
    }
  ]
}