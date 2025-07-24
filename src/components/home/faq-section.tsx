"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Do you charge a call-out fee?",
    answer: "No, we don't charge any call-out fees. You only pay for the work completed. Our pricing is transparent with £85 for the first hour and £24 per 15 minutes thereafter, plus any parts required."
  },
  {
    question: "Are you available 24/7 for emergencies?",
    answer: "Yes, we provide 24/7 emergency plumbing services across Sevenoaks, Kent, and South East London. Our emergency response time is typically 30-60 minutes."
  },
  {
    question: "What areas do you cover?",
    answer: "We cover Sevenoaks, West Malling, Tonbridge, Orpington, Sidcup, Bromley, Bexley, Chislehurst, Eltham, and surrounding areas in Kent and South East London."
  },
  {
    question: "Are your plumbers Gas Safe registered?",
    answer: "Yes, all our engineers are Gas Safe registered and fully insured. We're also DBS checked for your peace of mind."
  },
  {
    question: "Do you offer guarantees on your work?",
    answer: "Yes, all our work comes with a 12-month workmanship guarantee. We stand behind the quality of our service."
  },
  {
    question: "How does your video quote service work?",
    answer: "Simply contact us to arrange a video call via FaceTime, WhatsApp, or Zoom. Show us the issue, and we'll provide an accurate quote immediately. This saves time and ensures we arrive with the right parts."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform",
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
      </div>
    </section>
  )
}