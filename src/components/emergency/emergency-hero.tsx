import { AlertCircle, Phone, Clock, MapPin } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EmergencyHeroProps {
  location: string
}

export function EmergencyHero({ location }: EmergencyHeroProps) {
  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
            <AlertCircle className="h-4 w-4" />
            Emergency Service Available Now
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Emergency Plumber in <span className="text-red-600">{location}</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Available 24/7 • Fast Response • No Call-Out Charge
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <p className="text-2xl font-bold text-red-600 mb-4">
              🚨 We're on our way to {location}!
            </p>
            <PhoneButton size="xl" className="mb-4" />
            <p className="text-sm text-gray-600">
              Average response time: <strong>30-60 minutes</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-white border rounded-lg p-4">
              <Clock className="h-6 w-6 text-red-600 mb-2" />
              <h3 className="font-semibold mb-1">24/7 Availability</h3>
              <p className="text-sm text-gray-600">Round-the-clock emergency service</p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <Phone className="h-6 w-6 text-red-600 mb-2" />
              <h3 className="font-semibold mb-1">Direct Hotline</h3>
              <p className="text-sm text-gray-600">Speak to a plumber immediately</p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <MapPin className="h-6 w-6 text-red-600 mb-2" />
              <h3 className="font-semibold mb-1">Local to {location}</h3>
              <p className="text-sm text-gray-600">Fast response from nearby engineers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}