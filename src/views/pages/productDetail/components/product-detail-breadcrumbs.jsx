import React from "react"
import { Link } from "react-router"
import { AngleRightIcon, HomeIcon } from "@/views/shared/icons"

export function ProductDetailBreadcrumbs({ product }) {
  return (
    <nav className="flex py-3 mb-6">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <HomeIcon className="w-4 h-4" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <AngleRightIcon className="w-3 h-3 text-gray-400 mx-1" />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{product.brand}</span>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <AngleRightIcon className="w-3 h-3 text-gray-400 mx-1" />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 line-clamp-1">
              {product.model}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
