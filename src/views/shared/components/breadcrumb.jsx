import { Link } from "react-router"
import { HomeIcon, AngleRightIcon } from "@/views/shared/icons"
import { useProduct } from "@/views/shared/contexts/product-context"

export function Breadcrumb() {
  const { currentProduct } = useProduct()

  if (!currentProduct) return null

  return (
    <div className="flex px-4 py-2 text-sm animate-appear">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
          >
            <HomeIcon className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <AngleRightIcon className="w-4 h-4 text-gray-400" />
            <span className="ml-1 text-gray-500 md:ml-2 dark:text-gray-400 ">{currentProduct.brand}</span>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <AngleRightIcon className="w-4 h-4 text-gray-400" />
            <span className="ml-1 text-gray-500 md:ml-2 dark:text-gray-400 truncate max-w-[200px]">
              {currentProduct.model}
            </span>
          </div>
        </li>
      </ol>
    </div>
  )
}
