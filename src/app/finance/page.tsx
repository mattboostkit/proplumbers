import { Metadata } from "next"
import Link from "next/link"
import { PhoneButton } from "@/components/phone-button"
import { Button } from "@/components/ui/button"
import { generateBreadcrumbSchema } from "@/lib/structured-data"
import { 
  CreditCard, 
  Shield, 
  CheckCircle,
  Calculator,
  FileText,
  Home,
  Percent,
  Clock,
  AlertCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Options - Affordable Plumbing Payment Plans | Pro Plumbers Kent",
  description: "Spread the cost of boiler installations and bathroom renovations with Pro Plumbers finance options. 0% interest available. Serving Sevenoaks, West Malling, Tonbridge & Kent.",
  keywords: [
    "plumbing finance sevenoaks",
    "boiler finance kent",
    "bathroom payment plans",
    "0 interest plumbing finance",
    "spread cost boiler installation",
    "monthly payment plumber kent",
    "affordable plumbing sevenoaks"
  ],
}

export default function FinancePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Finance Options", url: "https://proplumbers.co.uk/finance" },
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
      <section className="bg-gradient-to-b from-green-50 to-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Flexible Finance Options for Your Plumbing Needs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Don&apos;t let cost delay essential plumbing work. Spread the cost of boiler 
              installations, bathroom renovations, and major repairs with our flexible 
              payment plans available to Sevenoaks, West Malling, Tonbridge and Kent residents.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneButton size="lg" text="Discuss Finance Options" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get a Quote First
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Pro Plumbers Finance?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">0% Interest Available</h3>
                <p className="text-gray-600">
                  Spread the cost over 12 months with 0% interest on approved applications 
                  for boiler installations and bathroom renovations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Decision</h3>
                <p className="text-gray-600">
                  Apply online and get a decision in minutes. No lengthy paperwork or 
                  waiting around. Start your project sooner.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">FCA Regulated</h3>
                <p className="text-gray-600">
                  Our finance partners are FCA regulated, ensuring fair and transparent 
                  lending practices for Kent homeowners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Plans */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Finance Plans to Suit Every Budget
            </h2>

            {/* 0% Interest Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold">0% Interest - 12 Months</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Perfect for new boiler installations and bathroom renovations. Spread the cost 
                over a year with no interest charges.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Ideal for:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Boiler installations (£2,000 - £3,500)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Bathroom renovations (£3,000 - £8,000)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Central heating upgrades</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Example:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm mb-2">New Worcester Bosch boiler: £2,400</p>
                    <p className="text-sm mb-2">12 monthly payments of: <strong>£200</strong></p>
                    <p className="text-sm text-green-600">Total interest: £0</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                Representative example: £2,400 loan over 12 months. 0% APR. 12 monthly 
                payments of £200. Total amount payable £2,400. Subject to status.
              </p>
            </div>

            {/* Low Rate Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Low Rate Finance - 24-60 Months</h3>
              
              <p className="text-gray-600 mb-6">
                For larger projects or when you need lower monthly payments. Competitive rates 
                for Kent homeowners.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Perfect for:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Complete bathroom refits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Multiple bathroom renovations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Full heating system replacements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Example:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm mb-2">Bathroom renovation: £6,000</p>
                    <p className="text-sm mb-2">36 monthly payments of: <strong>£189</strong></p>
                    <p className="text-sm text-gray-600">9.9% APR (rates from 9.9% - 19.9%)</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                Representative example: £6,000 loan over 36 months. 9.9% APR. 36 monthly 
                payments of £189. Total amount payable £6,804. Subject to status.
              </p>
            </div>

            {/* Buy Now Pay Later */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Buy Now, Pay Later - 3 Months</h3>
              
              <p className="text-gray-600 mb-6">
                Need emergency repairs but waiting for insurance or other funds? Delay payment 
                for up to 3 months with no interest.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">Great for:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Emergency boiler repairs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Insurance claim situations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Unexpected plumbing issues</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">How it works:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• No payment for 3 months</li>
                    <li>• 0% interest if paid within 3 months</li>
                    <li>• Option to spread cost after 3 months</li>
                    <li>• Minimum spend £500</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              How to Apply for Finance
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Simple Application Process</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Get Your Quote</p>
                      <p className="text-sm text-gray-600">
                        Contact us for a free quote on your plumbing project
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Choose Your Plan</p>
                      <p className="text-sm text-gray-600">
                        Select the finance option that suits your budget
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Quick Online Application</p>
                      <p className="text-sm text-gray-600">
                        Apply online in minutes - instant decision in most cases
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-semibold">Work Begins</p>
                      <p className="text-sm text-gray-600">
                        Once approved, we schedule your plumbing work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">What You&apos;ll Need</h3>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Proof of Income</p>
                        <p className="text-sm text-gray-600">Recent payslips or bank statements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Home className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Address History</p>
                        <p className="text-sm text-gray-600">3 years of UK address history</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Bank Details</p>
                        <p className="text-sm text-gray-600">For direct debit setup</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      <strong>Eligibility:</strong> UK residents, 18+, subject to credit check. 
                      Representative APR varies based on amount and term.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Calculate Your Monthly Payments
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Want to know what your monthly payments could be? Call us with your project 
              details and we&apos;ll provide a full breakdown of finance options available.
            </p>
            <PhoneButton size="lg" text="Get Finance Quote" />
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Important Information</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">Before You Apply</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Please ensure you can afford the monthly repayments before applying for finance. 
                    Missing payments could affect your credit rating and your home may be at risk 
                    if you secure the loan against it.
                  </p>
                  <p className="text-sm text-gray-700">
                    Pro Plumbers Ltd acts as a credit broker, not a lender, and will introduce you 
                    to a panel of lenders. We may receive a commission for this introduction.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-sm max-w-none text-gray-600">
              <h3 className="text-lg font-semibold text-gray-900">Terms & Conditions</h3>
              <ul>
                <li>Finance subject to status and credit check</li>
                <li>UK residents only, aged 18 or over</li>
                <li>Minimum loan amount £500, maximum £25,000</li>
                <li>Terms available from 3 to 60 months</li>
                <li>Pro Plumbers Ltd is authorised and regulated by the Financial Conduct Authority</li>
                <li>We are a credit broker, not a lender</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Our Finance Partners</h3>
              <p>
                We work with leading UK finance providers to offer competitive rates to homeowners 
                in Sevenoaks, West Malling, Tonbridge, and across Kent. All our partners are FCA 
                regulated and follow responsible lending practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t Let Cost Delay Essential Plumbing Work
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Spread the cost with our flexible finance options. Get your new boiler or 
            dream bathroom today, pay over time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PhoneButton 
              variant="outline" 
              size="xl"
              className="bg-white text-primary hover:bg-gray-100"
              text="Discuss Finance Options"
            />
            <Button size="xl" variant="outline" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/contact">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}