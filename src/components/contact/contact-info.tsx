import { Phone, Mail, MapPin, Clock, Video } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"
import { siteConfig } from "@/config/site"

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Call Us
          </h3>
          <PhoneButton size="lg" className="w-full mb-2" />
          <p className="text-sm text-gray-600">
            24/7 emergency service • Free quotes over the phone
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Email
          </h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
          <p className="text-sm text-gray-600 mt-1">
            We'll respond within 1 hour during business hours
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Address
          </h3>
          <address className="not-italic text-gray-700">
            {siteConfig.address.street}<br />
            {siteConfig.address.city}<br />
            {siteConfig.address.county}<br />
            {siteConfig.address.postcode}
          </address>
        </div>

        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Hours
          </h3>
          <p className="text-gray-700">
            <strong>Emergency Service:</strong> 24/7<br />
            <strong>Office Hours:</strong> {siteConfig.openingHours.office}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Video className="h-5 w-5 text-blue-600" />
            Video Quote Service
          </h3>
          <p className="text-sm text-gray-700">
            Get instant quotes via FaceTime, WhatsApp, or Zoom. 
            Call us to arrange a video consultation.
          </p>
        </div>
      </div>
    </div>
  )
}