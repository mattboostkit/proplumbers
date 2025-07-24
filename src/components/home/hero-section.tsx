import { ArrowRight, CheckCircle, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneButton } from "@/components/phone-button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="h-4 w-4" />
              24/7 Emergency Service Available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Expert Plumbers in <span className="text-primary">Sevenoaks</span> & Kent
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional plumbing, heating & boiler services. Gas Safe registered with 15+ years experience. 
              Available 24/7 for emergencies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <PhoneButton size="xl" />
              <Button size="xl" variant="outline" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Fixed Price Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">No Call-Out Charge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">12 Month Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Same Day Service</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Need Emergency Help?</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p className="font-semibold text-red-700 mb-2">🚨 Emergency Hotline</p>
                  <PhoneButton variant="emergency" size="lg" className="w-full" />
                </div>
                <div className="text-center text-sm text-gray-600">
                  <p>Average response time: <strong>30-60 minutes</strong></p>
                  <p className="mt-1">Available 24 hours, 7 days a week</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-3">Common Emergencies We Fix:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">•</span> Burst pipes & major leaks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">•</span> No hot water or heating
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">•</span> Blocked toilets & drains
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">•</span> Gas leaks & boiler breakdowns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}