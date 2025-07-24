import { Metadata } from "next"
import Link from "next/link"
import { locations } from "@/config/site"
import { MapPin, Users, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneButton } from "@/components/phone-button"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Service Areas - Plumbers in Sevenoaks, Kent & South East London",
  description: "Pro Plumbers serves Sevenoaks, West Malling, Tonbridge, Orpington, Bromley and all of Kent. Find your local plumber with 24/7 emergency coverage.",
  keywords: [
    "plumbers kent areas",
    "plumbing service areas",
    "local plumbers kent",
    "plumbers near me",
    "kent plumbing coverage",
    "emergency plumber locations"
  ],
}

export default function LocationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Service Areas", url: "https://proplumbers.co.uk/locations" },
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
              Our Service Areas
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pro Plumbers provides professional plumbing services across Kent and South East London. 
              With engineers strategically located throughout our coverage area, we ensure rapid 
              response times for both emergencies and scheduled work.
            </p>
            <PhoneButton size="lg" />
          </div>
        </div>
      </section>

      {/* Google Business Profile Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Find Us on Google Maps
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Visit our main office in Sevenoaks or view our service coverage across Kent 
              and South East London.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.170057851115!2d0.19047050000000001!3d51.271188699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df4d88c66efc0b%3A0xc5f7fc488496f00f!2sPro%20Plumbers!5e0!3m2!1sen!2suk!4v1753378866713!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pro Plumbers Location on Google Maps"
                className="w-full"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.google.com/maps/place/Pro+Plumbers+Ltd/@51.2694479,0.1875273,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                View larger map →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Primary Service Areas
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our main operating areas where we guarantee the fastest response times and 
              have the highest concentration of local engineers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {locations.slice(0, 3).map((location) => (
                <Link
                  key={location.slug}
                  href={`/plumber-${location.slug}`}
                  className="group bg-white border-2 rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>30-45 min response time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>Multiple local engineers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>24/7 emergency coverage</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {getLocationHighlight(location.name)}
                  </p>
                  
                  <span className="text-primary font-medium group-hover:underline">
                    View {location.name} services →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              All Service Areas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Kent Coverage
                </h3>
                <div className="bg-white rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {locations.filter(l => ["sevenoaks", "west-malling", "tonbridge"].includes(l.slug)).map((location) => (
                      <Link
                        key={location.slug}
                        href={`/plumber-${location.slug}`}
                        className="flex items-center gap-2 p-3 rounded hover:bg-gray-50 transition-colors"
                      >
                        <MapPin className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">{location.name}</p>
                          <p className="text-xs text-gray-500">Click for details</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium mb-2">Also covering:</p>
                    <p className="text-sm text-gray-600">
                      Otford, Kemsing, Seal, Weald, Dunton Green, Riverhead, Borough Green, 
                      Hildenborough, Hadlow, Paddock Wood, and all surrounding villages.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  South East London Coverage
                </h3>
                <div className="bg-white rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {locations.filter(l => ["orpington", "bromley", "sidcup", "bexley", "chislehurst", "eltham"].includes(l.slug)).map((location) => (
                      <Link
                        key={location.slug}
                        href={`/plumber-${location.slug}`}
                        className="flex items-center gap-2 p-3 rounded hover:bg-gray-50 transition-colors"
                      >
                        <MapPin className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">{location.name}</p>
                          <p className="text-xs text-gray-500">Click for details</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium mb-2">Also covering:</p>
                    <p className="text-sm text-gray-600">
                      Petts Wood, St Mary Cray, St Paul&apos;s Cray, Swanley, Crockenhill, 
                      Farnborough, Green Street Green, and neighboring areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Across Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              How We Serve Multiple Areas Effectively
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Engineer Placement</h3>
                <p className="text-gray-600">
                  Our 12 engineers are strategically based across Kent and South East London 
                  for optimal coverage and faster response times.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Central Dispatch System</h3>
                <p className="text-gray-600">
                  One phone number (01732 444555) connects you to our dispatch team who 
                  assign the nearest available engineer to your location.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
                <p className="text-gray-600">
                  We track our engineers in real-time to provide accurate arrival times 
                  and ensure the fastest possible response to your plumbing emergency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside Coverage Area */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Outside Our Regular Coverage Area?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              While we primarily serve the areas listed above, we may still be able to help 
              with your plumbing needs. We regularly take on jobs in surrounding areas and 
              can often accommodate special requests.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneButton size="lg" text="Call to Check Availability" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Send an Enquiry
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Find Your Local Pro Plumber
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Click on your area above or call us now for immediate assistance. 
              Available 24/7 across all our service areas.
            </p>
            <PhoneButton size="xl" />
          </div>
        </div>
      </section>
    </>
  )
}

function getLocationHighlight(locationName: string) {
  const highlights: Record<string, string> = {
    "Sevenoaks": "Home to our main office on Lime Tree Walk. Fastest response times and highest engineer concentration in the TN13-TN15 postcodes.",
    "West Malling": "Excellent coverage across ME19 including Kings Hill, Leybourne, and surrounding villages. Regular commercial and residential work.",
    "Tonbridge": "Comprehensive coverage from the historic town center to outlying areas. Specialists in period property plumbing.",
    "Orpington": "Strong presence in BR5 and BR6 postcodes with dedicated local engineers for rapid emergency response.",
    "Bromley": "Major hub for our South East London operations. Full coverage of all BR postcodes including Beckenham and Hayes.",
    "Sidcup": "Regular service area with experienced engineers familiar with local property types and common issues.",
    "Bexley": "Growing coverage area with increasing demand. Fast response times for both emergency and scheduled work.",
    "Chislehurst": "Specialist service for conservation area properties requiring careful, considerate plumbing work.",
    "Eltham": "SE9 coverage with local engineers providing full range of plumbing and heating services."
  }
  return highlights[locationName] || "Comprehensive plumbing services with local engineers for fast response times."
}