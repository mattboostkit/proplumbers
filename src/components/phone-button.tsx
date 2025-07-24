"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface PhoneButtonProps {
  variant?: "default" | "emergency" | "outline"
  size?: "default" | "sm" | "lg" | "xl"
  className?: string
  showIcon?: boolean
  text?: string
}

export function PhoneButton({ 
  variant = "emergency", 
  size = "default", 
  className,
  showIcon = true,
  text = "Call Now"
}: PhoneButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("font-bold", className)}
      asChild
    >
      <a href={`tel:${siteConfig.phone}`}>
        {showIcon && <Phone className="h-4 w-4" />}
        <span>{text}: {siteConfig.phoneFormatted}</span>
      </a>
    </Button>
  )
}