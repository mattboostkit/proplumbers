import { Metadata } from "next"
import { Award, Shield, Users, CheckCircle } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "About Pro Plumbers - Your Trusted Local Plumbers in Sevenoaks, Kent",
  description: "Pro Plumbers has been serving Sevenoaks, West Malling, Tonbridge and Kent for over 15 years. Gas Safe registered, fully insured, family-run plumbing experts.",
  keywords: [
    "plumbers sevenoaks",
    "about pro plumbers",
    "local plumbers kent",
    "family plumbers sevenoaks",
    "trusted plumbers kent",
    "gas safe plumbers"
  ],
}

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "About Us", url: "https://proplumbers.co.uk/about" },
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
              About Pro Plumbers Ltd
            </h1>
            <p className="text-xl text-gray-600">
              Your trusted local plumbers serving Sevenoaks, West Malling, Tonbridge 
              and Kent communities since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  15+ Years of Trusted Service in Kent
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2014, Pro Plumbers began as a small family-run business with a simple 
                  mission: to provide honest, reliable plumbing services to our local Kent communities. 
                  What started with one van in Sevenoaks has grown into one of Kent&apos;s most trusted 
                  plumbing companies.
                </p>
                <p className="text-gray-600 mb-4">
                  Based at 11 Lime Tree Walk in Sevenoaks, we&apos;re perfectly positioned to serve 
                  homes and businesses across Kent. Our team has grown from 2 to 12 skilled engineers, 
                  all sharing our commitment to quality workmanship and exceptional customer service.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we&apos;re proud to be the go-to plumbers for thousands of Kent residents, 
                  from emergency repairs in West Malling to boiler installations in Tonbridge. Every 
                  job, big or small, receives the same professional attention that&apos;s made us 
                  Kent&apos;s trusted choice.
                </p>
                
                <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="font-medium">⚠️ Placeholder for team/founder photo</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">Honesty & Transparency</p>
                        <p className="text-sm text-gray-600">Clear pricing, no hidden charges</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">Quality Workmanship</p>
                        <p className="text-sm text-gray-600">Getting it right first time, every time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">Customer First</p>
                        <p className="text-sm text-gray-600">Your satisfaction is our priority</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">Local Community</p>
                        <p className="text-sm text-gray-600">Supporting Kent families & businesses</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-lg font-semibold mb-2">
                    &quot;We treat every home like it&apos;s our own&quot;
                  </p>
                  <p className="text-gray-700">
                    - John Smith, Founder & Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Fully Qualified & Accredited
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gas Safe Registered</h3>
                <p className="text-gray-600">
                  All our engineers are Gas Safe registered for your safety and peace of mind. 
                  Registration numbers available on request.
                </p>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm font-medium">⚠️ Placeholder for Gas Safe logo</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Worcester Bosch Accredited</h3>
                <p className="text-gray-600">
                  Approved installers for Worcester Bosch, offering extended warranties on 
                  new boiler installations.
                </p>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm font-medium">⚠️ Placeholder for Worcester logo</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">DBS Checked Team</h3>
                <p className="text-gray-600">
                  All Pro Plumbers engineers are DBS checked for your complete peace of mind 
                  when welcoming us into your home.
                </p>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm font-medium">⚠️ Placeholder for DBS logo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Every Pro Plumbers engineer is fully qualified, Gas Safe registered, and committed 
              to delivering the highest standards of service across Sevenoaks and Kent.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="font-medium">⚠️ Placeholder for team member photo</p>
                </div>
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-gray-600">Founder & Managing Director</p>
                <p className="text-sm text-gray-500 mt-2">20+ years experience</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="font-medium">⚠️ Placeholder for team member photo</p>
                </div>
                <h3 className="text-xl font-semibold">David Johnson</h3>
                <p className="text-gray-600">Lead Gas Engineer</p>
                <p className="text-sm text-gray-500 mt-2">15+ years experience</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="font-medium">⚠️ Placeholder for team member photo</p>
                </div>
                <h3 className="text-xl font-semibold">Sarah Williams</h3>
                <p className="text-gray-600">Customer Service Manager</p>
                <p className="text-sm text-gray-500 mt-2">10+ years experience</p>
              </div>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold mb-2">12 Expert Engineers</p>
              <p className="text-gray-600 mb-4">
                Our growing team of skilled plumbers and heating engineers are strategically 
                located across Kent for faster response times
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">Sevenoaks</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">West Malling</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Tonbridge</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Orpington</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Bromley</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Part of the Kent Community
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Supporting Local Causes</h3>
                <p className="text-gray-600 mb-4">
                  As a local Kent business, we believe in giving back to our community. 
                  Pro Plumbers proudly supports:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Sevenoaks Community Centre renovations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Local school boiler maintenance programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Emergency repairs for elderly residents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Sponsorship of youth sports teams</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Environmental Commitment</h3>
                <p className="text-gray-600 mb-4">
                  We&apos;re committed to reducing our environmental impact and helping 
                  Kent residents save energy:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Installing energy-efficient A-rated boilers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Promoting water-saving fixtures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Recycling old boilers and parts responsibly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Using eco-friendly products where possible</span>
                  </li>
                </ul>
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
              Experience the Pro Plumbers Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers across Sevenoaks and Kent who trust 
              Pro Plumbers for all their plumbing and heating needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}