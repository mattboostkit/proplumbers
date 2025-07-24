import Link from "next/link"
import { MapPin } from "lucide-react"
import { locations } from "@/config/site"
import { Button } from "@/components/ui/button"

export function ServiceAreas() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pro Plumbers provides professional plumbing services across Kent and South East London. 
            24/7 emergency coverage in all areas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Primary Service Areas
            </h3>
            <ul className="space-y-2">
              {locations.slice(0, 3).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/plumber-${location.slug}`}
                    className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary">•</span>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Kent Coverage
            </h3>
            <ul className="space-y-2">
              {locations.slice(0, 6).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/plumber-${location.slug}`}
                    className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary">•</span>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              South East London
            </h3>
            <ul className="space-y-2">
              {locations.slice(3, 9).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/plumber-${location.slug}`}
                    className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary">•</span>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Can&apos;t see your area? We may still be able to help.
          </p>
          <Button size="lg" asChild>
            <Link href="/locations">
              View All Areas
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}