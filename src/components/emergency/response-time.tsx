import { Clock, MapPin, Users } from "lucide-react"

interface ResponseTimeProps {
  location: string
}

export function ResponseTime({ location }: ResponseTimeProps) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Fast Emergency Response in {location}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">30-60 Minutes</h3>
              <p className="text-gray-600">Average response time to {location}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Engineers</h3>
              <p className="text-gray-600">Plumbers based near {location}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Available Now</h3>
              <p className="text-gray-600">Multiple engineers on standby</p>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-center text-gray-700">
              <strong>Pro Tip:</strong> While waiting for our arrival, turn off your water supply 
              at the stopcock to minimise damage. Not sure where it is? Our team can guide you over the phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}