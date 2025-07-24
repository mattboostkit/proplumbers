import { Shield, Award, Users, ThumbsUp } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "Gas Safe Registered",
    description: "Fully certified",
  },
  {
    icon: Award,
    title: "15+ Years",
    description: "Experience",
  },
  {
    icon: Users,
    title: "DBS Checked",
    description: "Trusted team",
  },
  {
    icon: ThumbsUp,
    title: "12 Month",
    description: "Guarantee",
  },
]

export function TrustBar() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}