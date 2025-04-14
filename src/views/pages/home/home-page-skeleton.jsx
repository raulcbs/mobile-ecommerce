export function HomePageSkeleton() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex-col pb-8 lg:pb-12 md:flex space-y-4 md:space-y-0 md:space-x-4 md:flex-row items-center justify-between">
        <div className="h-10 bg-gray-200 rounded-lg w-48 dark:bg-gray-700 animate-pulse"></div>
        <div className="w-full md:w-1/2 relative">
          <div className="h-14 bg-gray-200 rounded-lg dark:bg-gray-700 animate-pulse"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="p-6 animate-pulse bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex gap-4"
          >
            <div className="min-w-[160px] w-[160px] h-[212px] bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/2"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4"></div>
              </div>

              <div className="mt-4 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
