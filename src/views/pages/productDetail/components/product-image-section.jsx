import React from "react"

export function ProductImageSection({ product }) {
  return (
    <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center">
      <div className="aspect-square w-full max-w-md overflow-hidden flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={`${product.brand} ${product.model}`}
          className="object-contain w-full h-full"
          loading="lazy"
          width="400"
          height="400"
        />
      </div>
    </div>
  )
}
