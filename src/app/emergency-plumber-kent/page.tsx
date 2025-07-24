import { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, AlertCircle, CheckCircle, Zap, MapPin, Shield, Users } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"
import { ReviewsSection } from "@/components/home/reviews-section"
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "24 Hour Emergency Plumber Kent | All Areas Covered | Pro Plumbers",
  description: "24 hour emergency plumber covering all of Kent. Fast response to Sevenoaks, West Malling, Tonbridge, Orpington & Bromley. No call-out charge. Call 01732 444555.",
  keywords: [
    "emergency plumber kent",
    "24 hour plumber kent",
    "emergency plumbing kent",
    "urgent plumber kent",
    "weekend plumber kent",
    "night plumber kent",
    "kent emergency plumbing service",
    "24/7 plumber kent"
  ],
}

export default function EmergencyPlumberKentPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Emergency Plumber Kent", url: "https://proplumbers.co.uk/emergency-plumber-kent" },
  ])

  const serviceSchema = generateServiceSchema({
    name: "24 Hour Emergency Plumber Kent",
    description: "24/7 emergency plumbing services covering all of Kent. Fast response times, no call-out charges.",
    areaServed: ["Kent", "Sevenoaks", "West Malling", "Tonbridge", "Orpington", "Bromley", "Sidcup", "Bexley"],
    offers: {
      price: "85",
      priceCurrency: "GBP",
      priceSpecification: "First hour £85, then £24 per 15 minutes",
    },
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema]),
        }}
      />
      
      {/* Emergency Hero Section */}
      <section className="bg-red-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertCircle className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              24 Hour Emergency Plumber Kent
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Covering all of Kent with rapid emergency plumbing response. From burst pipes 
              to boiler breakdowns, our 24/7 service is here when you need us most.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">30-90 mins</p>
                  <p className="text-sm text-gray-600">Response Time</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">All Kent</p>
                  <p className="text-sm text-gray-600">Coverage</p>
                </div>
                <div>
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">No Call-Out</p>
                  <p className="text-sm text-gray-600">Charge</p>
                </div>
              </div>
            </div>
            <PhoneButton size="xl" className="animate-pulse" text="Call 24/7 Emergency Line" />
            <p className="mt-4 text-sm text-gray-600">
              12 engineers across Kent • Genuine 24 hour service
            </p>
          </div>
        </div>
      </section>

      {/* Kent Coverage Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              24/7 Emergency Plumber Coverage Across Kent
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  West Kent
                </h3>
                <p className="text-gray-600 mb-4">
                  Fast emergency response to West Kent areas including:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• <Link href="/emergency-plumber-sevenoaks" className="text-primary hover:underline">Sevenoaks</Link> (30-45 mins)</li>
                  <li>• <Link href="/plumber-tonbridge" className="text-primary hover:underline">Tonbridge</Link> (30-60 mins)</li>
                  <li>• Tunbridge Wells (45-60 mins)</li>
                  <li>• Edenbridge (45-60 mins)</li>
                  <li>• Westerham (45-60 mins)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  North Kent
                </h3>
                <p className="text-gray-600 mb-4">
                  Emergency plumbers covering North Kent:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• <Link href="/emergency-plumber-west-malling" className="text-primary hover:underline">West Malling</Link> (30-45 mins)</li>
                  <li>• Maidstone (45-60 mins)</li>
                  <li>• Gravesend (60-75 mins)</li>
                  <li>• Dartford (45-60 mins)</li>
                  <li>• Swanley (30-45 mins)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  SE London/Kent Border
                </h3>
                <p className="text-gray-600 mb-4">
                  24/7 coverage for Greater London areas:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• <Link href="/plumber-orpington" className="text-primary hover:underline">Orpington</Link> (30-60 mins)</li>
                  <li>• <Link href="/plumber-bromley" className="text-primary hover:underline">Bromley</Link> (45-60 mins)</li>
                  <li>• <Link href="/plumber-sidcup" className="text-primary hover:underline">Sidcup</Link> (45-60 mins)</li>
                  <li>• <Link href="/plumber-bexley" className="text-primary hover:underline">Bexley</Link> (45-60 mins)</li>
                  <li>• <Link href="/plumber-chislehurst" className="text-primary hover:underline">Chislehurst</Link> (45-60 mins)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                How Our Kent-Wide Emergency Service Works
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <p className="font-medium mb-2">Call Our 24/7 Line</p>
                  <p className="text-sm text-gray-600">
                    Speak directly to our dispatch team, not a call center
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <p className="font-medium mb-2">Nearest Engineer Dispatched</p>
                  <p className="text-sm text-gray-600">
                    We locate your nearest available engineer for fastest response
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <p className="font-medium mb-2">Track Arrival Time</p>
                  <p className="text-sm text-gray-600">
                    Receive updates on engineer location and arrival time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Common Kent Plumbing Emergencies We Handle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Residential Emergencies</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Winter Pipe Bursts</h4>
                    <p className="text-sm text-gray-600">
                      Kent&apos;s freezing winters cause pipes to burst. We carry materials 
                      for immediate repairs and can prevent further damage.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Boiler Breakdowns</h4>
                    <p className="text-sm text-gray-600">
                      No heating or hot water? Our Gas Safe engineers provide emergency 
                      boiler repairs 24/7 across Kent.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Severe Blockages</h4>
                    <p className="text-sm text-gray-600">
                      Blocked toilets, drains backing up? We have professional equipment 
                      for emergency drain clearance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Commercial Emergencies</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Restaurant Plumbing</h4>
                    <p className="text-sm text-gray-600">
                      Emergency response for Kent restaurants, pubs, and cafes. Minimize 
                      downtime with rapid repairs.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Office Buildings</h4>
                    <p className="text-sm text-gray-600">
                      Water leaks threatening equipment? Multiple toilet failures? Priority 
                      response for Kent businesses.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Care Homes</h4>
                    <p className="text-sm text-gray-600">
                      Specialist emergency service for care homes and medical facilities 
                      requiring immediate attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why We&apos;re Kent&apos;s Trusted Emergency Plumbers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Shield className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">True 24/7 Service</h3>
                  <p className="text-gray-600">
                    Not just an answering service - real plumbers available round the clock. 
                    Our engineers work shifts to ensure genuine 24 hour coverage across Kent.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">12 Local Engineers</h3>
                  <p className="text-gray-600">
                    With engineers based across Kent from Sevenoaks to Maidstone, we ensure 
                    rapid response times to any emergency, anywhere in the county.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
                  <p className="text-gray-600">
                    Call our Sevenoaks office directly - no call centers or middlemen. 
                    Speak to someone who knows Kent and can dispatch help immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fixed Emergency Rates</h3>
                  <p className="text-gray-600">
                    No inflated emergency prices. Same transparent rates 24/7: £85 first hour, 
                    £24 per 15 minutes after. No call-out charges anywhere in Kent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* Final CTA */}
      <section className="bg-red-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Plumbing Emergency in Kent? We&apos;re Here 24/7
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Dartford to Dover, Maidstone to Margate - Pro Plumbers provides 
            genuine 24 hour emergency coverage across Kent.
          </p>
          <PhoneButton 
            variant="outline" 
            size="xl" 
            className="bg-white text-red-600 hover:bg-gray-100 border-white"
            text="01732 444555 - Kent Emergency Line"
          />
          <p className="mt-4 text-sm text-white/80">
            Average response: 30-60 mins in major towns, 60-90 mins rural areas
          </p>
        </div>
      </section>
    </>
  )
}