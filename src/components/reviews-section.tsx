import { Star } from "lucide-react"

interface Review {
  id: string
  author: string
  location: string
  rating: number
  date: string
  text: string
  service?: string
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Sarah Mitchell",
    location: "Sevenoaks, TN13",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely brilliant service! Our boiler broke down on a Sunday evening and Pro Plumbers had someone out within 45 minutes. Fixed the problem quickly and didn&apos;t charge any call-out fee. Highly recommend!",
    service: "Emergency Boiler Repair"
  },
  {
    id: "2",
    author: "James Thompson",
    location: "West Malling, ME19",
    rating: 5,
    date: "1 month ago",
    text: "Used Pro Plumbers for a complete bathroom renovation. The team was professional, tidy, and completed everything on schedule. The finish is excellent and they even helped with the design. Couldn&apos;t be happier!",
    service: "Bathroom Installation"
  },
  {
    id: "3",
    author: "Emma Wilson",
    location: "Tonbridge, TN9",
    rating: 5,
    date: "3 weeks ago",
    text: "Annual boiler service completed efficiently. The engineer was knowledgeable, explained everything clearly, and gave useful tips for maintaining our heating system. Great value and peace of mind.",
    service: "Boiler Servicing"
  },
  {
    id: "4",
    author: "David Clarke",
    location: "Orpington, BR6",
    rating: 5,
    date: "1 week ago",
    text: "Emergency call for a burst pipe - they arrived in 35 minutes! Professional, courteous, and cleaned up after themselves. Fixed the problem and prevented major water damage. True lifesavers!",
    service: "Emergency Plumbing"
  },
  {
    id: "5",
    author: "Rachel Green",
    location: "Bromley, BR1",
    rating: 5,
    date: "2 months ago",
    text: "New Worcester Bosch boiler installed. Competitive quote, expert installation, and they handled all the warranty registration. The heating is so much more efficient now. Excellent service throughout.",
    service: "Boiler Installation"
  },
  {
    id: "6",
    author: "Peter Anderson",
    location: "Sevenoaks, TN14",
    rating: 5,
    date: "3 weeks ago",
    text: "Had a stubborn blocked drain that other plumbers couldn&apos;t fix. Pro Plumbers used a camera to find the issue and cleared it completely. Fair pricing and they explained everything. Will definitely use again.",
    service: "Drain Unblocking"
  }
]

interface ReviewsSectionProps {
  limit?: number
  location?: string
  service?: string
}

export function ReviewsSection({ limit = 3, location, service }: ReviewsSectionProps) {
  let filteredReviews = reviews
  
  if (location) {
    filteredReviews = reviews.filter(r => 
      r.location.toLowerCase().includes(location.toLowerCase())
    )
  }
  
  if (service) {
    filteredReviews = reviews.filter(r => 
      r.service?.toLowerCase().includes(service.toLowerCase())
    )
  }
  
  // If no filtered results, show all reviews
  if (filteredReviews.length === 0) {
    filteredReviews = reviews
  }
  
  const displayReviews = filteredReviews.slice(0, limit)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Don&apos;t just take our word for it - see what our customers across Kent have to say
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {displayReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {review.service && (
                  <p className="text-xs font-medium text-primary mb-2">{review.service}</p>
                )}
                
                <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-lg font-semibold">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>5.0 Average Rating</span>
            </div>
            <p className="text-gray-600 mt-2">Based on 500+ reviews across Google, Checkatrade & Trustpilot</p>
          </div>
        </div>
      </div>
    </section>
  )
}