import { Phone, Truck, Wrench, CheckCircle } from "lucide-react"

export function EmergencyProcess() {
  const steps = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly to a plumber who will assess your emergency",
      time: "0-2 mins",
    },
    {
      icon: Truck,
      title: "Rapid Dispatch",
      description: "We dispatch the nearest available engineer immediately",
      time: "2-5 mins",
    },
    {
      icon: Wrench,
      title: "Emergency Fix",
      description: "Our engineer arrives and resolves your emergency",
      time: "30-60 mins",
    },
    {
      icon: CheckCircle,
      title: "Problem Solved",
      description: "Fixed price, no hidden charges, 12-month guarantee",
      time: "Complete",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Our Emergency Response Process
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            From your call to problem solved - here&apos;s what to expect
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 h-full">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <p className="text-xs font-medium text-primary">{step.time}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 -right-3 w-6">
                    <svg
                      className="w-full text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2 text-green-800">
              ✅ Our Emergency Service Promise
            </h3>
            <ul className="space-y-2 text-green-700">
              <li>• No call-out charges - you only pay for work completed</li>
              <li>• Fixed price quotes before we start any work</li>
              <li>• All emergency repairs covered by our 12-month guarantee</li>
              <li>• Fully insured and Gas Safe registered engineers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}