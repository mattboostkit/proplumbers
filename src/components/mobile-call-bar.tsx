"use client"

import { Phone, MessageSquare } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg">
      <div className="grid grid-cols-2 gap-2 p-2">
        <Button
          variant="emergency"
          size="lg"
          className="font-bold"
          asChild
        >
          <a href={`tel:${siteConfig.phone}`}>
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="font-bold"
          asChild
        >
          <a href="/contact">
            <MessageSquare className="h-5 w-5" />
            Get Quote
          </a>
        </Button>
      </div>
    </div>
  )
}