"use client"

import { useState } from "react"
import { ChevronDown, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { PhoneButton } from "@/components/phone-button"

interface EmergencyFAQProps {
  location: string
}

export function EmergencyFAQ({ location }: EmergencyFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: `How quickly can you get to ${location}?`,
      answer: `Our average response time to ${location} is 30-60 minutes for emergencies. We have local engineers in and around ${location} who are on call 24/7. As soon as you call, we'll dispatch the nearest available plumber to your location.`,
    },
    {
      question: "What counts as a plumbing emergency?",
      answer: "Plumbing emergencies include burst pipes, major leaks, no water supply, blocked toilets (especially if you only have one), no hot water or heating in winter, gas leaks, and any situation causing significant damage to your property. If in doubt, call us and we'll advise.",
    },
    {
      question: "Do you charge extra for emergency call-outs?",
      answer: "No, we don't charge call-out fees. Our pricing is transparent: £85 for the first hour and £24 per 15 minutes thereafter, plus any parts. This rate applies 24/7, including weekends and bank holidays.",
    },
    {
      question: "What should I do while waiting for the plumber?",
      answer: "First, turn off your water at the stopcock if there's a leak. For gas issues, turn off the gas supply and open windows. Move any valuables away from leaks. Our team can guide you through emergency steps over the phone when you call.",
    },
    {
      question: `Are your plumbers Gas Safe registered in ${location}?`,
      answer: `Yes, all our engineers serving ${location} are Gas Safe registered, fully insured, and DBS checked. We only send qualified professionals who can handle any plumbing or heating emergency safely and effectively.`,
    },
    {
      question: "What if you can't fix it immediately?",
      answer: "We'll always make the situation safe as a priority. If a permanent fix requires parts we don't carry, we'll implement a temporary solution to stop any damage, then return to complete the repair at a convenient time.",
    },
  ]

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Emergency Plumber {location} FAQs
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Common questions about our emergency service in {location}
          </p>

          <div className="space-y-4 mb-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform flex-shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 text-center">
            <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Don't wait - call us now for immediate assistance
            </p>
            <PhoneButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}