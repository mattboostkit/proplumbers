import { Metadata } from "next"
import Link from "next/link"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Terms of Service | Pro Plumbers Ltd - Plumbing Services Kent",
  description: "Terms and conditions for Pro Plumbers Ltd plumbing services in Sevenoaks, West Malling, Tonbridge and Kent. Transparent pricing and service guarantees.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://proplumbers.co.uk" },
    { name: "Terms of Service", url: "https://proplumbers.co.uk/terms" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated: January 2025</strong>
            </p>

            <p className="mb-6">
              These Terms of Service (&quot;Terms&quot;) govern your use of plumbing services provided by 
              Pro Plumbers Ltd, a company registered in England, operating throughout Sevenoaks, 
              West Malling, Tonbridge, and Kent. By engaging our services, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Our Services</h2>
            <p className="mb-4">
              Pro Plumbers Ltd provides professional plumbing, heating, and gas services including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>24/7 emergency plumbing repairs across Kent</li>
              <li>Boiler installation, repair, and servicing</li>
              <li>Bathroom design and installation</li>
              <li>General plumbing maintenance and repairs</li>
              <li>Commercial plumbing services</li>
              <li>Gas safety inspections and certificates</li>
              <li>Drain unblocking and maintenance</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Areas</h2>
            <p className="mb-6">
              We provide services throughout Kent and South East London, including but not limited to:
              Sevenoaks, West Malling, Tonbridge, Orpington, Sidcup, Bromley, Bexley, Chislehurst, 
              and Eltham. Service availability outside these areas is subject to engineer availability 
              and may incur additional charges.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Pricing and Payment</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Standard Rates</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>First hour: £85 (minimum charge)</li>
              <li>Additional time: £24 per 15 minutes</li>
              <li>Parts charged at cost plus reasonable markup</li>
              <li>No call-out charges</li>
              <li>Same rates apply 24/7, including weekends and bank holidays</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Payment due upon completion of work</li>
              <li>We accept cash, debit/credit cards, and bank transfers</li>
              <li>Commercial accounts available subject to credit approval</li>
              <li>Estimates provided are subject to inspection of actual work required</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Booking and Cancellations</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Emergency services: We aim to arrive within 30-60 minutes</li>
              <li>Scheduled appointments: We provide 2-hour arrival windows</li>
              <li>Cancellations: Please provide 24 hours notice where possible</li>
              <li>Late cancellations may incur a charge at our discretion</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Our Guarantees</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Workmanship Guarantee</h3>
            <p className="mb-6">
              All work completed by Pro Plumbers is guaranteed for 12 months from the date of completion. 
              This covers defects in workmanship but excludes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Normal wear and tear</li>
              <li>Misuse or negligence</li>
              <li>Work by other contractors</li>
              <li>Pre-existing defects not related to our work</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Parts Guarantee</h3>
            <p className="mb-6">
              Parts are covered by manufacturer warranties. We will facilitate warranty claims but 
              are not responsible for manufacturer defects.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide safe access to work areas</li>
              <li>Ensure an adult is present during service visits</li>
              <li>Disclose known issues or hazards</li>
              <li>Obtain necessary permissions for work in rented properties</li>
              <li>Make timely payment for services rendered</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Health and Safety</h2>
            <p className="mb-6">
              Pro Plumbers takes health and safety seriously:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>All engineers are Gas Safe registered</li>
              <li>We carry comprehensive public liability insurance</li>
              <li>Engineers follow strict safety protocols</li>
              <li>We may refuse work if conditions are unsafe</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitations of Liability</h2>
            <p className="mb-6">
              While we maintain comprehensive insurance, our liability is limited to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Direct damages resulting from our negligence</li>
              <li>The cost of rectifying defective work</li>
              <li>We are not liable for indirect or consequential losses</li>
              <li>Our total liability shall not exceed the value of the work performed</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Complaints Procedure</h2>
            <p className="mb-4">
              We strive for 100% customer satisfaction. If you&apos;re not happy with our service:
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li>Contact us immediately on 01732 444555</li>
              <li>We&apos;ll investigate within 48 hours</li>
              <li>If necessary, we&apos;ll revisit to resolve issues</li>
              <li>Written complaints can be sent to our Sevenoaks office</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Data Protection</h2>
            <p className="mb-6">
              We handle your personal data in accordance with our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. 
              We use your information only to provide plumbing services and will not share it 
              without your consent, except as required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Force Majeure</h2>
            <p className="mb-6">
              Pro Plumbers is not liable for delays or failures in performance resulting from acts 
              beyond our reasonable control, including but not limited to: natural disasters, extreme 
              weather affecting Kent, pandemic restrictions, or supply chain disruptions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
            <p className="mb-6">
              These Terms are governed by English law. Any disputes will be subject to the exclusive 
              jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Changes to Terms</h2>
            <p className="mb-6">
              We may update these Terms from time to time. Changes will be posted on our website. 
              Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>Pro Plumbers Ltd</strong></p>
              <p className="mb-2">Company Registration: [Registration Number]</p>
              <p className="mb-2">11 Lime Tree Walk</p>
              <p className="mb-2">Sevenoaks, Kent TN13 1YH</p>
              <p className="mb-2">Phone: <a href="tel:01732444555" className="text-primary hover:underline">01732 444555</a></p>
              <p className="mb-2">Email: <a href="mailto:info@proplumbers.co.uk" className="text-primary hover:underline">info@proplumbers.co.uk</a></p>
              <p>24/7 Emergency Line: <a href="tel:01732444555" className="text-primary hover:underline">01732 444555</a></p>
            </div>

            <p className="mb-6 text-sm text-gray-600">
              By engaging Pro Plumbers Ltd for any plumbing, heating, or gas services in Sevenoaks, 
              West Malling, Tonbridge, or anywhere in Kent, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}