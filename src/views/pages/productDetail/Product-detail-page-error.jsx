export function ProductDetailPageError() {
  return (
    <div className="w-full py-12">
      <div className="max-w-md mx-auto text-center bg-red-50 p-6 rounded-lg dark:bg-gray-800">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Error</h2>
        <p className="text-gray-700 dark:text-gray-300">Could not load product details. Please try again later.</p>
        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
