import Link from "next/link"
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"

export function LocalSEOSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Your Trusted Local Plumbers Across Kent
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Pro Plumbers has been the go-to choice for plumbing and heating services in 
            Sevenoaks, West Malling, Tonbridge and throughout Kent since 2014.
          </p>

          {/* Local Service Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Plumbers in Sevenoaks
              </h3>
              <p className="text-gray-600 mb-4">
                Based on Lime Tree Walk, we&apos;re Sevenoaks&apos; most trusted plumbing company. 
                From Knole to Riverhead, we know every neighborhood and provide rapid response 
                for emergencies.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Emergency plumber Sevenoaks TN13-TN15</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Boiler repairs & servicing Sevenoaks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Bathroom fitting Sevenoaks area</span>
                </li>
              </ul>
              <Link href="/plumber-sevenoaks" className="text-primary font-medium text-sm mt-4 inline-block">
                More about Sevenoaks services →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Plumbers in West Malling
              </h3>
              <p className="text-gray-600 mb-4">
                Serving West Malling, Kings Hill, and surrounding villages with professional 
                plumbing services. Our local engineers ensure fast response times throughout 
                the ME19 postcode.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24 hour plumber West Malling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Central heating repairs Kings Hill</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Blocked drains West Malling area</span>
                </li>
              </ul>
              <Link href="/plumber-west-malling" className="text-primary font-medium text-sm mt-4 inline-block">
                More about West Malling services →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Plumbers in Tonbridge
              </h3>
              <p className="text-gray-600 mb-4">
                From Tonbridge Castle to Hildenborough, we provide comprehensive plumbing 
                services. Expert solutions for period properties and modern homes alike 
                throughout TN9-TN11.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Emergency plumber Tonbridge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Boiler installation Tonbridge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Plumbing repairs Hildenborough</span>
                </li>
              </ul>
              <Link href="/plumber-tonbridge" className="text-primary font-medium text-sm mt-4 inline-block">
                More about Tonbridge services →
              </Link>
            </div>
          </div>

          {/* Why Local Matters */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Why Choose a Local Kent Plumber?
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Faster Response</h4>
                <p className="text-sm text-gray-600">
                  Local engineers mean quicker arrival times - typically 30-60 minutes
                </p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Area Knowledge</h4>
                <p className="text-sm text-gray-600">
                  We know Kent&apos;s water systems, common issues, and best solutions
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Trusted Locally</h4>
                <p className="text-sm text-gray-600">
                  15+ years serving Kent communities with 500+ 5-star reviews
                </p>
              </div>
              <div className="text-center">
                <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">One Number</h4>
                <p className="text-sm text-gray-600">
                  Call 01732 444555 for any plumbing need across all our areas
                </p>
              </div>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Popular Plumbing Services by Area
            </h3>
            <div className="bg-white rounded-lg p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Emergency Services:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <Link href="/emergency-plumber-sevenoaks" className="hover:text-primary">Emergency plumber Sevenoaks</Link></li>
                    <li>• <Link href="/emergency-plumber-kent" className="hover:text-primary">24 hour plumber Kent</Link></li>
                    <li>• <Link href="/emergency-plumber-west-malling" className="hover:text-primary">Urgent plumber West Malling</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Boiler Services:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <Link href="/services/boiler-repair" className="hover:text-primary">Boiler repair Sevenoaks</Link></li>
                    <li>• <Link href="/services/boiler-installation" className="hover:text-primary">New boiler Tonbridge</Link></li>
                    <li>• <Link href="/services/boiler-servicing" className="hover:text-primary">Boiler service Kent</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">General Plumbing:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <Link href="/services/blocked-drains" className="hover:text-primary">Blocked drains Kent</Link></li>
                    <li>• <Link href="/services/bathroom-installation" className="hover:text-primary">Bathroom fitters Sevenoaks</Link></li>
                    <li>• <Link href="/services/general-plumbing" className="hover:text-primary">Plumber near me Kent</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold mb-4">
              Need a plumber in Sevenoaks, West Malling, Tonbridge or anywhere in Kent?
            </p>
            <PhoneButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}