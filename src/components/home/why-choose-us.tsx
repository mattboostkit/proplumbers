import { CheckCircle, Clock, Shield, Award, Users, Banknote } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent plumbing emergencies",
  },
  {
    icon: Shield,
    title: "Fully Insured & Gas Safe",
    description: "Complete peace of mind with comprehensive insurance coverage",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Established in 2014 with expert plumbers you can trust",
  },
  {
    icon: Users,
    title: "DBS Checked Team",
    description: "All engineers are background checked for your safety",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description: "Fixed quotes with no hidden charges or surprises",
  },
  {
    icon: CheckCircle,
    title: "12 Month Guarantee",
    description: "All work backed by our comprehensive workmanship guarantee",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Pro Plumbers?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience, we&apos;re the trusted choice for plumbing 
            and heating services in Sevenoaks and Kent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}