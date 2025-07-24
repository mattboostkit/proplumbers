import { Metadata } from "next"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Privacy Policy | Pro Plumbers Ltd - Sevenoaks & Kent",
  description: "Privacy policy for Pro Plumbers Ltd. How we protect your data when providing plumbing services in Sevenoaks, West Malling, Tonbridge and Kent.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Privacy Policy", url: "https://proplumbers.co.uk/privacy" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated: January 2025</strong>
            </p>

            <p className="mb-6">
              Pro Plumbers Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting 
              your privacy. This Privacy Policy explains how we collect, use, and safeguard your information 
              when you use our plumbing services in Sevenoaks, West Malling, Tonbridge, and throughout Kent.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p className="mb-4">
              When you contact Pro Plumbers for plumbing services, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name and contact details (phone number, email address)</li>
              <li>Service address in Sevenoaks, Kent, or surrounding areas</li>
              <li>Details about your plumbing requirements</li>
              <li>Payment information for completed work</li>
              <li>Communication history for quality service delivery</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website (how you found Pro Plumbers)</li>
              <li>Device and operating system information</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              Pro Plumbers uses your information to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide plumbing services to your Sevenoaks or Kent property</li>
              <li>Schedule appointments and dispatch engineers</li>
              <li>Process payments for completed work</li>
              <li>Send service reminders (e.g., annual boiler servicing)</li>
              <li>Respond to emergency plumbing calls</li>
              <li>Improve our services based on customer feedback</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Our team:</strong> Engineers and office staff who need it to provide services</li>
              <li><strong>Service partners:</strong> Parts suppliers when ordering specific items</li>
              <li><strong>Payment processors:</strong> To handle transactions securely</li>
              <li><strong>Legal authorities:</strong> When required by law or for safety</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">
              Pro Plumbers implements appropriate security measures to protect your information. 
              Our engineers are DBS checked and trained in data protection. We use secure systems 
              for storing customer information and process payments through encrypted channels.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
            <p className="mb-4">
              Under UK data protection law, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies</h2>
            <p className="mb-6">
              Our website uses cookies to improve your experience. These may include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand how customers find plumbers in Kent</li>
              <li>Marketing cookies to show relevant plumbing services</li>
            </ul>
            <p className="mb-6">
              You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Third-Party Links</h2>
            <p className="mb-6">
              Our website may contain links to third-party sites. We are not responsible for their 
              privacy practices. This includes links to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Boiler manufacturer websites</li>
              <li>Online review platforms</li>
              <li>Social media pages</li>
              <li>Industry certification bodies</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Children&apos;s Privacy</h2>
            <p className="mb-6">
              Pro Plumbers does not knowingly collect information from children under 16. Our plumbing 
              services are contracted by adults for residential and commercial properties in Kent.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy periodically. Changes will be posted on this page with 
              an updated revision date. We encourage customers in Sevenoaks, West Malling, Tonbridge, 
              and across Kent to review this policy regularly.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or how Pro Plumbers handles your data, 
              please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>Pro Plumbers Ltd</strong></p>
              <p className="mb-2">11 Lime Tree Walk</p>
              <p className="mb-2">Sevenoaks, Kent TN13 1YH</p>
              <p className="mb-2">Phone: <a href="tel:01732444555" className="text-primary hover:underline">01732 444555</a></p>
              <p>Email: <a href="mailto:info@proplumbers.co.uk" className="text-primary hover:underline">info@proplumbers.co.uk</a></p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Complaints</h2>
            <p className="mb-6">
              If you&apos;re not satisfied with how we handle your data, you have the right to complain to the 
              Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}