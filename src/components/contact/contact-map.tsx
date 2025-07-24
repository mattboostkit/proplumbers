export function ContactMap() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Our Service Area</h2>
      
      <div className="aspect-video rounded-lg mb-4 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.170057851115!2d0.19047050000000001!3d51.271188699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df4d88c66efc0b%3A0xc5f7fc488496f00f!2sPro%20Plumbers!5e0!3m2!1sen!2suk!4v1753378866713!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pro Plumbers Location"
          className="w-full h-full"
        ></iframe>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Primary Areas</h4>
          <ul className="text-gray-600 space-y-1">
            <li>• Sevenoaks</li>
            <li>• West Malling</li>
            <li>• Tonbridge</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Also Covering</h4>
          <ul className="text-gray-600 space-y-1">
            <li>• Orpington</li>
            <li>• Bromley</li>
            <li>• All of Kent</li>
          </ul>
        </div>
      </div>
    </div>
  )
}