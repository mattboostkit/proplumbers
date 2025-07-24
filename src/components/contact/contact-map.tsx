export function ContactMap() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Our Service Area</h2>
      
      <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <p className="text-gray-500">Map integration would go here</p>
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