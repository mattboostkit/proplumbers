import Link from "next/link"
import { 
  Flame, 
  Wrench, 
  Droplet, 
  Bath, 
  Building, 
  AlertCircle,
  Package
} from "lucide-react"
import { services } from "@/config/site"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "alert-circle": AlertCircle,
  "flame": Flame,
  "wrench": Wrench,
  "droplet": Droplet,
  "bath": Bath,
  "building": Building,
  "package": Package,
}

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to complete installations, we provide comprehensive plumbing 
            and heating services across Sevenoaks and Kent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}