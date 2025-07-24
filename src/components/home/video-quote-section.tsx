import { Video, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function VideoQuoteSection() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Video className="h-4 w-4" />
              Unique Service Offering
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get Instant Video Quotes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Save time and money with our innovative video quote service. 
              Show us your plumbing issue via FaceTime, WhatsApp, or Zoom 
              and get an accurate quote within minutes.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-semibold">No waiting for visits</p>
                  <p className="text-sm text-gray-600">Get quotes instantly without scheduling an appointment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-semibold">Accurate pricing</p>
                  <p className="text-sm text-gray-600">See the problem, quote the solution - no surprises</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-semibold">Faster service</p>
                  <p className="text-sm text-gray-600">We arrive prepared with the right parts first time</p>
                </div>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">
                <MessageSquare className="h-5 w-5" />
                Request Video Quote
              </Link>
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold">Contact us</p>
                  <p className="text-sm text-gray-600">Call or message us to arrange a video call</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold">Show us the issue</p>
                  <p className="text-sm text-gray-600">Video call via your preferred platform</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold">Get instant quote</p>
                  <p className="text-sm text-gray-600">Receive accurate pricing immediately</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold">Book your repair</p>
                  <p className="text-sm text-gray-600">Schedule at your convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}