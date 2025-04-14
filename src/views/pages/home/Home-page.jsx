import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router"
import { useState, useMemo } from "react"
import { useDebounce } from "@/views/shared/hooks/use-debounce"
import { productService } from "@/application/services/product-service"
import { HomePageSkeleton } from "./home-page-skeleton"
import { SearchIcon } from "@/views/shared/icons"

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm)

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productService.getAllProducts,
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })

  const filteredProducts = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return products

    const searchTermLower = debouncedSearchTerm.toLowerCase().trim()

    return products.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchTermLower) || product.model.toLowerCase().includes(searchTermLower)
    )
  }, [products, debouncedSearchTerm])

  if (isLoading) {
    return <HomePageSkeleton />
  }
  if (isError) {
    return <p>Error loading products. Please try again.</p>
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex-col pb-8 lg:pb-12 md:flex space-y-4 md:space-y-0 md:space-x-4 md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold text-center md:text-start">Products</h2>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by brand or model..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
      </div>

      {filteredProducts.length === 0 && (
        <div className="w-full text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No products were found matching "{searchTerm}"</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product, i) => (
          <div
            key={product.id + i}
            className="p-6 gap-4 animate-appear bg-white border transition-transform hover:-translate-y-1 duration-300 ease-in-out border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex"
          >
            <img
              className="object-contain min-w-[160px] w-[160px] h-[212px] mix-blend-multiply dark:mix-blend-normal"
              src={product.imageUrl}
              alt={`${product.brand} ${product.model}`}
              loading="lazy"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col gap-2">
                <span className="w-fit bg-blue-100 text-blue-800 text-xs font-medium px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  {product.brand}
                </span>
                <h5 className="text-lg font-semibold line-clamp-2">{product.model}</h5>
                <span className="text-xl font-bold">{product.formattedPrice}</span>
              </div>

              <Link
                to={`/producto/${product.id}`}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                See details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
