import Link from "next/link"
import { siteConfig, services, locations } from "@/config/site"
import { PhoneButton } from "@/components/phone-button"
import { MapPin, Clock, Shield, Award, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 mb-4">{siteConfig.tagline}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.county}<br />
                  {siteConfig.address.postcode}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <p className="text-sm text-gray-300">24/7 Emergency Service</p>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/people/Pro-Plumbers/100090551557515/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/proplumbersltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {locations.slice(0, 6).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/plumber-${location.slug}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Plumber {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm">Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-green-500" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-green-500" />
                <span className="text-sm">12 Month Guarantee</span>
              </div>
            </div>
            <div className="mt-6">
              <PhoneButton variant="outline" className="border-white !text-white hover:bg-white hover:!text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
              <p className="mt-1">Company Registration No: 12080269</p>
            </div>
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
              <Link href="/careers" className="text-sm text-gray-400 hover:text-white">
                Careers
              </Link>
              <Link href="/finance" className="text-sm text-gray-400 hover:text-white">
                Finance
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}