import { Metadata } from "next"
import Link from "next/link"
import { Clock, AlertCircle, CheckCircle, Zap, MapPin, Shield, Users } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"
import { ReviewsSection } from "@/components/reviews-section"
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Emergency Plumber West Malling ME19 | 24/7 Service | Pro Plumbers",
  description: "Emergency plumber in West Malling & Kings Hill available 24/7. Fast response to burst pipes, leaks & boiler breakdowns. No call-out charge. Call 01732 444555.",
  keywords: [
    "emergency plumber west malling",
    "24 hour plumber west malling", 
    "emergency plumber me19",
    "urgent plumber kings hill",
    "weekend plumber west malling",
    "burst pipe west malling",
    "emergency plumber leybourne",
    "night plumber west malling"
  ],
}

export default function EmergencyPlumberWestMallingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Emergency Plumber West Malling", url: "https://proplumbers.co.uk/emergency-plumber-west-malling" },
  ])

  const serviceSchema = generateServiceSchema({
    name: "24/7 Emergency Plumber West Malling",
    description: "Emergency plumbing services in West Malling and Kings Hill. Available 24/7 with fast response times. No call-out charges.",
    slug: "emergency-plumber-west-malling"
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
              Emergency Plumber West Malling
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              24/7 emergency plumbing services for West Malling, Kings Hill, and surrounding 
              areas. Fast response to burst pipes, water leaks, and plumbing disasters.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">30-45 mins</p>
                  <p className="text-sm text-gray-600">Response Time</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">ME19 Area</p>
                  <p className="text-sm text-gray-600">Full Coverage</p>
                </div>
                <div>
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">No Call-Out</p>
                  <p className="text-sm text-gray-600">Charge</p>
                </div>
              </div>
            </div>
            <PhoneButton size="xl" className="animate-pulse" text="Call Emergency Plumber Now" />
            <p className="mt-4 text-sm text-gray-600">
              Local West Malling engineers • Available nights & weekends
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Emergency Plumbing Services in West Malling & Kings Hill
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Burst Pipe Repairs</h3>
                <p className="text-gray-600 mb-4">
                  Swift response to burst pipes in West Malling homes. We&apos;ll isolate 
                  the leak, minimize water damage, and complete permanent repairs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Immediate water shut-off</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Emergency pipe repair</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Kings Hill Emergencies</h3>
                <p className="text-gray-600 mb-4">
                  Specialist service for Kings Hill&apos;s modern homes. Fast response to 
                  new-build plumbing issues and emergency repairs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>New-build expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Modern system knowledge</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Blocked Drains</h3>
                <p className="text-gray-600 mb-4">
                  Emergency drain unblocking for West Malling properties. From blocked 
                  toilets to main drain issues, we&apos;ll get things flowing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>High-pressure jetting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>CCTV drain surveys</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Boiler Breakdowns</h3>
                <p className="text-gray-600 mb-4">
                  No heating or hot water in West Malling? Emergency Gas Safe engineers 
                  available 24/7 for boiler repairs and diagnostics.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>All boiler makes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Temporary heat solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Water Leak Detection</h3>
                <p className="text-gray-600 mb-4">
                  Mystery leaks in your West Malling property? We use advanced equipment 
                  to locate and fix hidden leaks quickly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Thermal imaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Minimal disruption</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Commercial Emergencies</h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency plumbing for West Malling businesses, shops, and offices. 
                  Priority response to minimize disruption.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Business continuity focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Invoice accounts available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">West Malling Emergency? Act Fast:</h3>
                  <ol className="space-y-2 text-sm">
                    <li>1. Turn off water supply at the stopcock if safe</li>
                    <li>2. Switch off electricity if water is near electrics</li>
                    <li>3. Call 01732 444555 for immediate West Malling response</li>
                    <li>4. Clear the area of valuables if possible</li>
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
              24/7 Emergency Coverage - West Malling & Beyond
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Primary Coverage - ME19
                </h3>
                <p className="text-gray-600 mb-4">
                  Our West Malling emergency plumbers provide fastest response to:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• West Malling Town</li>
                  <li>• Kings Hill</li>
                  <li>• Leybourne</li>
                  <li>• Larkfield</li>
                  <li>• East Malling</li>
                  <li>• New Hythe</li>
                  <li>• Wateringbury</li>
                  <li>• Mereworth</li>
                </ul>
                <p className="text-sm text-primary mt-4">
                  Average response: 30-45 minutes
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Extended Emergency Coverage
                </h3>
                <p className="text-gray-600 mb-4">
                  We also provide 24/7 emergency plumbing to:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• Maidstone</li>
                  <li>• Chatham</li>
                  <li>• Rochester</li>
                  <li>• Snodland</li>
                  <li>• Aylesford</li>
                  <li>• Ditton</li>
                  <li>• Borough Green</li>
                  <li>• Wrotham</li>
                </ul>
                <p className="text-sm text-primary mt-4">
                  Average response: 45-60 minutes
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium mb-4">
                Need emergency plumber in other Kent areas?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/emergency-plumber-sevenoaks" className="text-primary hover:underline">
                  Emergency Plumber Sevenoaks
                </Link>
                <Link href="/emergency-plumber-kent" className="text-primary hover:underline">
                  24 Hour Plumber Kent
                </Link>
                <Link href="/plumber-tonbridge" className="text-primary hover:underline">
                  Emergency Plumber Tonbridge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why West Malling Chooses Pro Plumbers for Emergencies
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Local Knowledge</h3>
                <p className="text-sm text-gray-600">
                  Know West Malling&apos;s water systems, from historic properties to Kings Hill new-builds.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Rapid Response</h3>
                <p className="text-sm text-gray-600">
                  Engineers based nearby means 30-45 minute emergency response to ME19.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fair Pricing 24/7</h3>
                <p className="text-sm text-gray-600">
                  Same rates day or night. No inflated emergency charges for West Malling.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Trusted Locally</h3>
                <p className="text-sm text-gray-600">
                  Serving West Malling for 15+ years. Known and recommended by locals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Emergencies */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Recent West Malling Emergency Call-Outs
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Kings Hill - Burst pipe in loft</p>
                  <p className="text-sm text-gray-600">35 minute response, leak stopped, pipe repaired same visit</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">West Malling High Street - Restaurant drain blocked</p>
                  <p className="text-sm text-gray-600">40 minute response on Saturday night, cleared for Sunday opening</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Leybourne - No hot water, young family</p>
                  <p className="text-sm text-gray-600">45 minute response, boiler fixed within 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* Emergency CTA */}
      <section className="bg-red-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            West Malling Plumbing Emergency?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t let water damage get worse. Our West Malling emergency plumbers 
            are standing by 24/7 to help.
          </p>
          <PhoneButton 
            variant="outline" 
            size="xl" 
            className="bg-white text-red-600 hover:bg-gray-100 border-white"
            text="01732 444555 - Emergency Line"
          />
          <p className="mt-4 text-sm text-white/80">
            Serving West Malling, Kings Hill, Leybourne & ME19 area • 30-45 min response
          </p>
        </div>
      </section>
    </>
  )
}