import { AlertCircle } from "lucide-react"
import { PhoneButton } from "@/components/phone-button"

export function EmergencyBanner() {
  return (
    <section className="bg-red-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-8 w-8 animate-pulse" />
            <div>
              <h3 className="text-xl font-bold">Emergency Plumber Available 24/7</h3>
              <p className="text-sm text-red-100">Fast response • No call-out charge • Fixed prices</p>
            </div>
          </div>
          <PhoneButton 
            variant="outline" 
            size="lg"
            className="bg-white text-red-600 hover:bg-red-50 border-white"
            text="Emergency Call"
          />
        </div>
      </div>
    </section>
  )
}