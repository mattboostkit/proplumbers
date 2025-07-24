export const siteConfig = {
  name: "Pro Plumbers Ltd",
  tagline: "Plumbing, Heating & Boiler Experts",
  description: "Professional plumbing services in Sevenoaks, Kent. Emergency plumbers available 24/7. Gas Safe registered, fully insured with 15+ years experience.",
  url: "https://proplumbers.co.uk",
  phone: "01732 444555",
  phoneFormatted: "01732 444555",
  email: "info@proplumbers.co.uk",
  address: {
    street: "11 Lime Tree Walk",
    city: "Sevenoaks",
    county: "Kent",
    postcode: "TN13 1YH",
    country: "United Kingdom"
  },
  established: 2014,
  openingHours: {
    emergency: "24/7",
    office: "Mon-Fri: 8am-6pm, Sat: 9am-4pm"
  },
  serviceAreas: {
    primary: ["Sevenoaks", "West Malling", "Tonbridge"],
    secondary: ["Orpington", "Sidcup", "Bromley", "Bexley", "Chislehurst", "Eltham"]
  },
  pricing: {
    firstHour: 85,
    per15Minutes: 24,
    currency: "£"
  },
  socialMedia: {
    facebook: "https://facebook.com/proplumbersltd",
    instagram: "https://instagram.com/proplumbersltd"
  }
}

export const services = [
  {
    id: "emergency-plumbing",
    name: "Emergency Plumbing",
    slug: "emergency-plumbing",
    description: "24/7 emergency plumbing services with rapid response",
    icon: "alert-circle"
  },
  {
    id: "boiler-repair",
    name: "Boiler Repair",
    slug: "boiler-repair",
    description: "Expert boiler repair services for all makes and models",
    icon: "flame"
  },
  {
    id: "boiler-installation",
    name: "Boiler Installation",
    slug: "boiler-installation",
    description: "Professional boiler installation with warranty",
    icon: "package"
  },
  {
    id: "boiler-servicing",
    name: "Boiler Servicing",
    slug: "boiler-servicing",
    description: "Annual boiler servicing to keep your heating running efficiently",
    icon: "wrench"
  },
  {
    id: "blocked-drains",
    name: "Blocked Drains",
    slug: "blocked-drains",
    description: "Fast and effective drain unblocking services",
    icon: "droplet"
  },
  {
    id: "bathroom-installation",
    name: "Bathroom Installation",
    slug: "bathroom-installation",
    description: "Complete bathroom fitting and renovation services",
    icon: "bath"
  },
  {
    id: "general-plumbing",
    name: "General Plumbing",
    slug: "general-plumbing",
    description: "Taps, toilets, leaks, and all general plumbing repairs",
    icon: "wrench"
  },
  {
    id: "commercial-plumbing",
    name: "Commercial Plumbing",
    slug: "commercial-plumbing",
    description: "Commercial and landlord plumbing services",
    icon: "building"
  }
]

export const locations = [
  { name: "Sevenoaks", slug: "sevenoaks", searchVolume: 480 },
  { name: "West Malling", slug: "west-malling", searchVolume: 70 },
  { name: "Tonbridge", slug: "tonbridge", searchVolume: 120 },
  { name: "Orpington", slug: "orpington", searchVolume: 90 },
  { name: "Sidcup", slug: "sidcup", searchVolume: 60 },
  { name: "Bromley", slug: "bromley", searchVolume: 140 },
  { name: "Bexley", slug: "bexley", searchVolume: 50 },
  { name: "Chislehurst", slug: "chislehurst", searchVolume: 40 },
  { name: "Eltham", slug: "eltham", searchVolume: 55 }
]