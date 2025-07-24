import { Metadata } from "next"
import { PhoneButton } from "@/components/phone-button"
import { Button } from "@/components/ui/button"
import { generateBreadcrumbSchema } from "@/lib/structured-data"
import { 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  Car, 
  GraduationCap,
  Heart,
  Banknote,
  CheckCircle,
  MapPin,
  Mail
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers at Pro Plumbers - Join Our Team in Sevenoaks & Kent",
  description: "Join Pro Plumbers, Kent's leading plumbing company. We're hiring experienced plumbers and apprentices in Sevenoaks, West Malling, and Tonbridge. Great pay, benefits, and career progression.",
  keywords: [
    "plumber jobs sevenoaks",
    "plumbing careers kent",
    "plumber apprentice sevenoaks",
    "gas engineer jobs kent",
    "plumbing jobs west malling",
    "heating engineer jobs tonbridge",
    "plumber vacancy kent"
  ],
}

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Careers", url: "https://proplumbers.co.uk/careers" },
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
              Build Your Career with Pro Plumbers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join Kent&apos;s fastest-growing plumbing company. We&apos;re always looking for 
              talented plumbers, gas engineers, and apprentices to join our team in Sevenoaks, 
              West Malling, Tonbridge, and across Kent.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#current-openings">
                  View Current Openings
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:careers@proplumbers.co.uk">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Your CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Join Pro Plumbers?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Pay</h3>
                <p className="text-gray-600">
                  Above-average rates for experienced plumbers. Regular pay reviews and 
                  performance bonuses. Overtime available.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Company Benefits</h3>
                <p className="text-gray-600">
                  Fully equipped company van, fuel card, uniform, tools, and mobile phone 
                  provided. Local work across Kent.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Progression</h3>
                <p className="text-gray-600">
                  Clear career path from apprentice to senior engineer. Training opportunities 
                  and support for qualifications.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Great Team</h3>
                <p className="text-gray-600">
                  Join a supportive team of 12 experienced professionals. Family-run business 
                  with a friendly culture.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Flexible working patterns. Holiday pay and pension scheme. Local work means 
                  less travel time.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Job Security</h3>
                <p className="text-gray-600">
                  Established company with 15+ years in Kent. Growing customer base and 
                  consistent work flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="current-openings" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Current Opportunities
            </h2>

            {/* Experienced Plumber */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Experienced Plumber / Gas Engineer</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      Sevenoaks / Kent-wide
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Banknote className="h-4 w-4" />
                      £35,000 - £45,000 + overtime
                    </span>
                  </div>
                </div>
                <span className="inline-block mt-4 md:mt-0 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Hiring Now
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">
                We&apos;re looking for experienced plumbers to join our growing team serving Sevenoaks, 
                West Malling, Tonbridge, and Kent. If you&apos;re Gas Safe registered with a passion 
                for quality work and customer service, we want to hear from you.
              </p>
              
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>NVQ Level 2/3 in Plumbing & Heating</li>
                <li>Gas Safe registered (CCN1, CENWAT, CKR1, HTR1)</li>
                <li>Full UK driving licence</li>
                <li>Minimum 3 years experience</li>
                <li>Excellent customer service skills</li>
                <li>Live within reasonable distance of Kent service areas</li>
              </ul>
              
              <h4 className="font-semibold mb-2">What we offer:</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Competitive salary based on experience</li>
                <li>Company van for work and personal use</li>
                <li>Fuel card and uniform provided</li>
                <li>28 days holiday including bank holidays</li>
                <li>Pension scheme</li>
                <li>Ongoing training and development</li>
                <li>Overtime and on-call opportunities</li>
              </ul>
              
              <Button asChild>
                <a href="mailto:careers@proplumbers.co.uk?subject=Experienced Plumber Application">
                  Apply for this position
                </a>
              </Button>
            </div>

            {/* Apprentice */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Plumbing Apprentice</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      Based in Sevenoaks
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <GraduationCap className="h-4 w-4" />
                      Apprenticeship
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Banknote className="h-4 w-4" />
                      Competitive apprentice rates
                    </span>
                  </div>
                </div>
                <span className="inline-block mt-4 md:mt-0 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  2 Positions
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">
                Start your plumbing career with Pro Plumbers! We&apos;re offering apprenticeships 
                for motivated individuals who want to learn from experienced professionals while 
                earning. Work across Sevenoaks, West Malling, and Kent.
              </p>
              
              <h4 className="font-semibold mb-2">What we&apos;re looking for:</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Enthusiasm and willingness to learn</li>
                <li>Good communication skills</li>
                <li>Reliable and punctual</li>
                <li>Interest in plumbing/construction</li>
                <li>GCSE grades C or above in Maths and English</li>
              </ul>
              
              <h4 className="font-semibold mb-2">What you&apos;ll get:</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Full apprenticeship training programme</li>
                <li>Day release for college attendance</li>
                <li>Mentorship from experienced plumbers</li>
                <li>All tools and equipment provided</li>
                <li>Career progression opportunities</li>
                <li>Potential for full-time role upon qualification</li>
              </ul>
              
              <Button asChild>
                <a href="mailto:careers@proplumbers.co.uk?subject=Apprentice Application">
                  Apply for apprenticeship
                </a>
              </Button>
            </div>

            {/* Future Opportunities */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Don&apos;t See a Suitable Position?</h3>
              <p className="text-gray-700 mb-4">
                We&apos;re always interested in hearing from talented plumbers, gas engineers, and 
                bathroom fitters in the Kent area. As we continue to grow, new opportunities arise 
                regularly.
              </p>
              <p className="text-gray-700 mb-6">
                Send your CV to <a href="mailto:careers@proplumbers.co.uk" className="text-primary hover:underline">careers@proplumbers.co.uk</a> and 
                we&apos;ll keep you in mind for future positions.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:careers@proplumbers.co.uk">
                  <Mail className="mr-2 h-5 w-5" />
                  Send speculative application
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Working Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Where You&apos;ll Work
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Primary Areas</h3>
                <p className="text-gray-600 mb-4">
                  As a Pro Plumbers engineer, you&apos;ll primarily work in:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Sevenoaks and surrounding villages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>West Malling and Kings Hill</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Tonbridge and Hildenborough</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits of Local Work</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Less time travelling, more time earning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build relationships with regular local customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Know your patch - become the local expert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Home for dinner most nights</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-center font-medium">
                ⚠️ Placeholder for map showing our service areas across Kent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Simple Application Process
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Send Your Application</h3>
                  <p className="text-gray-600">
                    Email your CV to careers@proplumbers.co.uk or apply for specific positions above. 
                    Include a brief cover letter telling us why you want to join Pro Plumbers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Initial Phone Call</h3>
                  <p className="text-gray-600">
                    We&apos;ll call you for a brief chat about your experience, what you&apos;re looking 
                    for, and to answer any questions about working at Pro Plumbers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Meet the Team</h3>
                  <p className="text-gray-600">
                    Visit our Sevenoaks office to meet the team and learn more about how we work. 
                    This is a chance for both of us to see if we&apos;re a good fit.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trial Day</h3>
                  <p className="text-gray-600">
                    Spend a paid day with one of our teams to experience the role first-hand. 
                    This helps ensure you&apos;ll enjoy working with Pro Plumbers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Welcome to the Team!</h3>
                  <p className="text-gray-600">
                    If all goes well, we&apos;ll make you an offer and get you started with our 
                    induction process, including uniform, van allocation, and introduction to our systems.
                  </p>
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
              Ready to Join Kent&apos;s Best Plumbing Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the next step in your plumbing career with Pro Plumbers. 
              Great pay, local work, and a supportive team environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:careers@proplumbers.co.uk">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Your Application
                </a>
              </Button>
              <PhoneButton size="lg" text="Call to Discuss" />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Or drop your CV at our office: 11 Lime Tree Walk, Sevenoaks TN13 1YH
            </p>
          </div>
        </div>
      </section>
    </>
  )
}