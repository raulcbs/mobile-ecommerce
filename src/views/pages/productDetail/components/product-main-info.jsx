import React from "react"

export function ProductMainInfo({ product }) {
  return (
    <div className="w-full md:w-1/2 flex flex-col">
      <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400 mb-3">
        {product.brand}
      </span>

      <h1 className="text-3xl font-bold mb-6">{product.model}</h1>

      <div className="flex flex-col gap-3 grow">
        <div className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400 font-medium w-28">Price:</span>
          <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">{product.formattedPrice}</span>
        </div>

        <div className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400 font-medium w-28">Brand:</span>
          <span>{product.brand}</span>
        </div>

        <div className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400 font-medium w-28">Model:</span>
          <span>{product.model}</span>
        </div>

        {product.status && (
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 font-medium w-28">Status:</span>
            <span
              className={`${product.isAvailable ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
            >
              {product.status}
            </span>
          </div>
        )}

        {product.announced && (
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 font-medium w-28">Announced:</span>
            <span>{product.announced}</span>
          </div>
        )}
      </div>

      <button
        type="button"
        className="w-full md:w-auto px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base text-center transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={!product.isAvailable}
      >
        Add to Cart
      </button>
    </div>
  )
}
