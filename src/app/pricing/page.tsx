import { Metadata } from "next"
import Link from "next/link"
import { PhoneButton } from "@/components/phone-button"
import { Button } from "@/components/ui/button"
import { generateBreadcrumbSchema } from "@/lib/structured-data"
import { 
  Calculator, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Wrench,
  Home,
  Flame,
  ShowerHead,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: "Transparent Pricing - Plumbing Costs Sevenoaks & Kent | Pro Plumbers",
  description: "Clear, upfront plumbing prices in Sevenoaks, West Malling & Kent. No hidden fees. £85 first hour, £24 per 15 mins after. See all our service prices.",
  keywords: [
    "plumber prices sevenoaks",
    "plumbing costs kent",
    "boiler installation price",
    "bathroom fitting cost",
    "emergency plumber rates",
    "transparent plumbing pricing",
    "plumber hourly rate kent"
  ],
}

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Pricing", url: "https://proplumbers.co.uk/pricing" },
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
              Transparent Plumbing Prices
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No hidden fees, no surprise charges. Clear pricing for all our plumbing, 
              heating, and boiler services across Sevenoaks, West Malling, Tonbridge & Kent.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneButton size="lg" text="Get Your Quote" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/finance">
                  Finance Available
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pricing Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our Simple Pricing Structure
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Standard Rates</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">First Hour</span>
                    <span className="text-2xl font-bold text-primary">£85</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">After First Hour</span>
                    <span className="text-xl font-bold">£24 per 15 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Call Out Charge</span>
                    <span className="text-xl font-bold text-green-600">FREE</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800 flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    Same rates 24/7 including weekends & bank holidays
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Free quotes for larger jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>All labour and workmanship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>12-month guarantee on all work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Transparent parts pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>No hidden VAT or fees</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900 mb-1">Price Example:</p>
                <p className="text-sm text-blue-800">
                  A typical boiler repair taking 90 minutes would cost: £85 (first hour) + £24 (additional 30 mins) = £109 + parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Job Prices */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Guide Prices for Common Jobs
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              These are typical price ranges for common plumbing jobs in Sevenoaks and Kent. 
              Exact prices depend on your specific requirements.
            </p>

            {/* Emergency & Repairs */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Wrench className="h-6 w-6 text-primary" />
                Emergency & General Repairs
              </h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-4">Service</th>
                      <th className="text-left p-4">Typical Duration</th>
                      <th className="text-right p-4">Price Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Burst Pipe Repair</p>
                          <p className="text-sm text-gray-600">Emergency fix & pipe replacement</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">1-2 hours</td>
                      <td className="p-4 text-right font-medium">£85-£133</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Tap Repair/Replacement</p>
                          <p className="text-sm text-gray-600">Fix dripping tap or install new</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">30-60 mins</td>
                      <td className="p-4 text-right font-medium">£85 + parts</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Toilet Repair</p>
                          <p className="text-sm text-gray-600">Fix running toilet, replace parts</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">45-90 mins</td>
                      <td className="p-4 text-right font-medium">£85-£109</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Blocked Sink/Drain</p>
                          <p className="text-sm text-gray-600">Clear blockage, check pipes</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">30-90 mins</td>
                      <td className="p-4 text-right font-medium">£85-£109</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Boiler Services */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Flame className="h-6 w-6 text-primary" />
                Boiler Services
              </h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-4">Service</th>
                      <th className="text-left p-4">What&apos;s Included</th>
                      <th className="text-right p-4">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Annual Boiler Service</p>
                          <p className="text-sm text-gray-600">Keep warranty valid</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Full inspection, cleaning, safety check, certificate
                      </td>
                      <td className="p-4 text-right font-medium">£85-£120</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Boiler Repair</p>
                          <p className="text-sm text-gray-600">Diagnose & fix faults</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Fault diagnosis, labour, common parts
                      </td>
                      <td className="p-4 text-right font-medium">£109-£250</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">New Boiler Installation</p>
                          <p className="text-sm text-gray-600">Combi boiler replacement</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Supply & fit, warranty, Gas Safe certificate
                      </td>
                      <td className="p-4 text-right font-medium">£1,800-£3,500</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Powerflush</p>
                          <p className="text-sm text-gray-600">Clean heating system</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Full system flush, chemicals, inhibitor
                      </td>
                      <td className="p-4 text-right font-medium">£350-£600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bathroom & Installation */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShowerHead className="h-6 w-6 text-primary" />
                Bathroom & Installation Work
              </h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-4">Service</th>
                      <th className="text-left p-4">Scope</th>
                      <th className="text-right p-4">Price Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Toilet Installation</p>
                          <p className="text-sm text-gray-600">Supply & fit new toilet</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Remove old, install new, test
                      </td>
                      <td className="p-4 text-right font-medium">£150-£300</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Shower Installation</p>
                          <p className="text-sm text-gray-600">Electric or mixer shower</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Plumbing, fitting, testing
                      </td>
                      <td className="p-4 text-right font-medium">£200-£500</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Full Bathroom Refit</p>
                          <p className="text-sm text-gray-600">Complete renovation</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        All plumbing, tiling available
                      </td>
                      <td className="p-4 text-right font-medium">£3,000-£8,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Radiator Installation</p>
                          <p className="text-sm text-gray-600">Supply & fit new radiator</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Pipework, fitting, balancing
                      </td>
                      <td className="p-4 text-right font-medium">£200-£400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                Additional Services
              </h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-4">Service</th>
                      <th className="text-left p-4">Details</th>
                      <th className="text-right p-4">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Gas Safety Certificate</p>
                          <p className="text-sm text-gray-600">Landlord certificate</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        All gas appliances checked
                      </td>
                      <td className="p-4 text-right font-medium">£75-£120</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Water Leak Detection</p>
                          <p className="text-sm text-gray-600">Find hidden leaks</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Investigation & report
                      </td>
                      <td className="p-4 text-right font-medium">£109-£200</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">Outside Tap Installation</p>
                          <p className="text-sm text-gray-600">Garden tap fitting</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        Supply, fit & insulate
                      </td>
                      <td className="p-4 text-right font-medium">£120-£200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Pricing Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Transparent Pricing?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">No Surprises</h3>
                <p className="text-gray-600">
                  Know exactly what you&apos;ll pay before we start. Our hourly rate 
                  structure means fair pricing for every job.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair for Everyone</h3>
                <p className="text-gray-600">
                  Same rates for all customers, whether it&apos;s a small repair or 
                  emergency call-out. No premium charges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Efficient Service</h3>
                <p className="text-gray-600">
                  Our experienced engineers work efficiently to minimize time and 
                  keep your costs down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Pricing */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Commercial & Contract Pricing
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              For businesses in Sevenoaks, West Malling, and Kent, we offer competitive 
              contract rates and maintenance packages. Regular servicing keeps costs predictable.
            </p>
            <Button size="lg" asChild>
              <Link href="/commercial-plumbing">
                View Commercial Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Flexible Payment Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Immediate Payment</h3>
                <p className="text-gray-600 mb-6">
                  Pay on completion of work for the best value. We accept:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Cash</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Debit/Credit Cards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Bank Transfer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Commercial Accounts (30 days)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Finance Available</h3>
                <p className="text-gray-700 mb-6">
                  Spread the cost of larger jobs with our flexible finance options:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="font-medium">• 0% interest over 12 months</li>
                  <li className="font-medium">• Low rate finance 24-60 months</li>
                  <li className="font-medium">• Buy now, pay in 3 months</li>
                </ul>
                <Button asChild>
                  <Link href="/finance">
                    Learn About Finance
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">Important Pricing Information</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All prices shown include labour but exclude VAT where applicable</li>
                    <li>• Parts are charged at cost plus a reasonable markup</li>
                    <li>• Prices are subject to inspection of actual work required</li>
                    <li>• Written quotes provided free for jobs over £500</li>
                    <li>• Emergency call-outs may require immediate payment</li>
                    <li>• Prices valid for properties within our standard service areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Your Fixed Price Quote Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Call us now for an accurate quote on your plumbing needs. 
              Free quotes for all major work in Sevenoaks, West Malling, Tonbridge & Kent.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneButton size="xl" text="Call for Quote" />
              <Button size="xl" variant="outline" asChild>
                <Link href="/contact">
                  Request Quote Online
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Available 24/7 • No call-out charge • Same day service
            </p>
          </div>
        </div>
      </section>
    </>
  )
}