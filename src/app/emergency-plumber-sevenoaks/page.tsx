import { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, AlertCircle, CheckCircle, Zap, MapPin, Shield, Users } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"
import { ReviewsSection } from "@/components/reviews-section"
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber Sevenoaks TN13 | Fast Response | Pro Plumbers",
  description: "Emergency plumber in Sevenoaks available 24/7. 30-60 minute response. No call-out charge. Burst pipes, leaks, blocked drains. Call 01732 444555 now.",
  keywords: [
    "emergency plumber sevenoaks",
    "24 hour plumber sevenoaks",
    "emergency plumber tn13",
    "urgent plumber sevenoaks",
    "weekend plumber sevenoaks",
    "night plumber sevenoaks",
    "burst pipe sevenoaks",
    "emergency leak repair sevenoaks"
  ],
}

export default function EmergencyPlumberSevenoaksPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Emergency Plumber Sevenoaks", url: "https://proplumbers.co.uk/emergency-plumber-sevenoaks" },
  ])

  const serviceSchema = generateServiceSchema({
    name: "24/7 Emergency Plumber Sevenoaks",
    description: "Emergency plumbing services in Sevenoaks, Kent. Available 24/7 with 30-60 minute response times. No call-out charges.",
    slug: "emergency-plumber-sevenoaks"
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
              24/7 Emergency Plumber Sevenoaks
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Burst pipe? Major leak? Blocked drain? Our emergency plumbers are available 
              24 hours a day, 7 days a week across Sevenoaks TN13, TN14 & TN15.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">30-60 mins</p>
                  <p className="text-sm text-gray-600">Response Time</p>
                </div>
                <div>
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">24/7</p>
                  <p className="text-sm text-gray-600">Available</p>
                </div>
                <div>
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">No Call-Out</p>
                  <p className="text-sm text-gray-600">Charge</p>
                </div>
              </div>
            </div>
            <PhoneButton size="xl" className="animate-pulse" text="Call Emergency Line Now" />
            <p className="mt-4 text-sm text-gray-600">
              Lines open 24/7 • Local Sevenoaks engineers on standby
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Emergency Plumbing Services in Sevenoaks
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Burst Pipes</h3>
                <p className="text-gray-600 mb-4">
                  Immediate response to burst pipes in Sevenoaks homes. We&apos;ll stop the 
                  leak, minimize damage, and repair or replace damaged pipework.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Emergency shut-off</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Temporary & permanent repairs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Water Leaks</h3>
                <p className="text-gray-600 mb-4">
                  From ceiling leaks to under-floor pipes, our Sevenoaks plumbers quickly 
                  locate and fix leaks to prevent water damage.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Leak detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Emergency repairs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Blocked Drains</h3>
                <p className="text-gray-600 mb-4">
                  Severely blocked toilets, sinks, or drains in Sevenoaks? We&apos;ll clear 
                  blockages fast and get your water flowing again.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>High-pressure jetting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>CCTV inspection available</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">No Hot Water</h3>
                <p className="text-gray-600 mb-4">
                  Boiler breakdown? No heating? Our Gas Safe engineers provide emergency 
                  boiler repairs across Sevenoaks, even on weekends.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Boiler diagnostics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Temporary heating solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Overflowing Toilets</h3>
                <p className="text-gray-600 mb-4">
                  Don&apos;t let an overflowing toilet flood your Sevenoaks home. Emergency 
                  response to stop overflow and fix the cause.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Immediate response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Sanitary cleanup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Gas Leaks</h3>
                <p className="text-gray-600 mb-4">
                  Smell gas? Call us immediately. Gas Safe registered engineers available 
                  24/7 for emergency gas leak repairs in Sevenoaks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Gas Safe certified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Safety first approach</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">Emergency? Here&apos;s What To Do:</h3>
                  <ol className="space-y-2 text-sm">
                    <li>1. Turn off water at the mains if safe to do so</li>
                    <li>2. Switch off electricity if water is near electrical points</li>
                    <li>3. Call us on 01732 444555 for immediate assistance</li>
                    <li>4. Move valuables away from leak areas if possible</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              24/7 Emergency Coverage Across Sevenoaks
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Sevenoaks Town Coverage
                </h3>
                <p className="text-gray-600 mb-4">
                  Based on Lime Tree Walk, our emergency plumbers can reach any address in 
                  central Sevenoaks within 30 minutes, day or night.
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• Sevenoaks Town Centre</li>
                  <li>• Greatness</li>
                  <li>• Wildernesse</li>
                  <li>• Kippington</li>
                  <li>• Bradbourne</li>
                  <li>• St Johns</li>
                  <li>• Hollybush</li>
                  <li>• Brittains</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Surrounding Villages
                </h3>
                <p className="text-gray-600 mb-4">
                  Our emergency service extends to all Sevenoaks district villages. 
                  45-60 minute response guaranteed.
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• Riverhead</li>
                  <li>• Dunton Green</li>
                  <li>• Otford</li>
                  <li>• Kemsing</li>
                  <li>• Seal</li>
                  <li>• Weald</li>
                  <li>• Underriver</li>
                  <li>• Ide Hill</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium mb-4">
                Need an emergency plumber elsewhere in Kent?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/emergency-plumber-west-malling" className="text-primary hover:underline">
                  Emergency Plumber West Malling
                </Link>
                <Link href="/emergency-plumber-kent" className="text-primary hover:underline">
                  Emergency Plumber Kent
                </Link>
                <Link href="/plumber-tonbridge" className="text-primary hover:underline">
                  Emergency Plumber Tonbridge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Emergency */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Pro Plumbers for Emergencies?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Genuine 24/7 Service</h3>
                <p className="text-sm text-gray-600">
                  Real emergency plumbers, not a call center. Available nights, weekends & holidays.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Local to Sevenoaks</h3>
                <p className="text-sm text-gray-600">
                  Engineers based in Sevenoaks means faster response than national companies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fixed Price Promise</h3>
                <p className="text-sm text-gray-600">
                  No inflated emergency rates. Same £85 first hour rate, day or night.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Experienced Team</h3>
                <p className="text-sm text-gray-600">
                  15+ years handling Sevenoaks emergencies. We&apos;ve seen it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Emergency CTA */}
      <section className="bg-red-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Plumbing Emergency in Sevenoaks?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait - water damage gets worse by the minute. 
            Call our 24/7 emergency line now for immediate assistance.
          </p>
          <PhoneButton 
            variant="outline" 
            size="xl" 
            className="bg-white text-red-600 hover:bg-gray-100 border-white"
            text="01732 444555 - Emergency Line"
          />
          <p className="mt-4 text-sm text-white/80">
            Average response time: 30-60 minutes in Sevenoaks TN13-TN15
          </p>
        </div>
      </section>

      {/* Schema for 24/7 availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Plumbing",
            "provider": {
              "@type": "Plumber",
              "name": "Pro Plumbers Ltd",
              "telephone": "01732 444555",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sevenoaks",
                "addressRegion": "Kent"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Sevenoaks"
            },
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          }),
        }}
      />
    </>
  )
}