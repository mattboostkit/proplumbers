export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-700">If you can see colors and styling, Tailwind is working!</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Test Button
        </button>
      </div>
    </div>
  )
}