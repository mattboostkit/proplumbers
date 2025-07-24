import { Droplet, Flame, Bath, Wrench, AlertTriangle, Home } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"

interface EmergencyServicesProps {
  location: string
}

const emergencyServices = [
  {
    icon: Droplet,
    title: "Burst Pipes & Leaks",
    description: "Major water leaks, burst pipes, and flooding",
    urgency: "critical",
  },
  {
    icon: Flame,
    title: "Boiler Breakdowns",
    description: "No heating or hot water, boiler not working",
    urgency: "high",
  },
  {
    icon: Bath,
    title: "Blocked Drains",
    description: "Blocked toilets, sinks, or shower drains",
    urgency: "high",
  },
  {
    icon: Wrench,
    title: "Tap & Toilet Repairs",
    description: "Broken taps, running toilets, cistern problems",
    urgency: "medium",
  },
  {
    icon: AlertTriangle,
    title: "Gas Leaks",
    description: "Suspected gas leaks - evacuate and call immediately",
    urgency: "critical",
  },
  {
    icon: Home,
    title: "Water Supply Issues",
    description: "No water supply, low pressure, or contamination",
    urgency: "high",
  },
]

export function EmergencyServices({ location }: EmergencyServicesProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Emergency Plumbing Services in {location}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Whatever your plumbing emergency, our {location} team is ready to help. 
            We handle all urgent repairs with guaranteed fast response times.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg p-6 ${
                  service.urgency === "critical"
                    ? "border-red-500"
                    : service.urgency === "high"
                    ? "border-orange-400"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-full flex-shrink-0 ${
                      service.urgency === "critical"
                        ? "bg-red-100"
                        : service.urgency === "high"
                        ? "bg-orange-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <service.icon
                      className={`h-6 w-6 ${
                        service.urgency === "critical"
                          ? "text-red-600"
                          : service.urgency === "high"
                          ? "text-orange-600"
                          : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    {service.urgency === "critical" && (
                      <p className="text-red-600 text-xs mt-2 font-medium">
                        ⚠️ URGENT - Call immediately
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Emergency Listed?
            </h3>
            <p className="text-lg mb-6">
              Call us anyway - we handle ALL plumbing emergencies in {location}
            </p>
            <PhoneButton size="xl" />
          </div>
        </div>
      </div>
    </section>
  )
}