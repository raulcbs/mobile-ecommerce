import { useMutation, useQuery } from "@tanstack/react-query"
import { productService } from "@/application/services/product-service"
import { useParams } from "react-router"
import { useState } from "react"
import { ProductDetailPageSkeleton } from "./product-detail-page-skeleton"
import { ProductDetailPageError } from "./product-detail-page-error"
import { ShoppingCardIcon } from "@/views/shared/icons"
import { useCart } from "@/views/shared/contexts/cart-context"
import { toast } from "sonner"

export function ProductDetailPage() {
  const { id } = useParams()
  const { updateCartCount } = useCart()
  const [selectedColor, setSelectedColor] = useState({ code: "", name: "" })
  const [selectedStorage, setSelectedStorage] = useState({ code: "", name: "" })
  const [addingToCart, setAddingToCart] = useState(false)

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getProductById(id),
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })

  const addToCartMutation = useMutation({
    mutationFn: ({ productId, colorCode, storageCode }) =>
      productService.postProductToCart({ productId, colorCode, storageCode }),
    onSuccess: (data) => {
      toast.success("Product added to cart successfully!")
      updateCartCount(data.count)
      setAddingToCart(false)
    },
    onError: () => {
      toast.error("Failed to add product to cart")
      setAddingToCart(false)
    },
  })

  if (isLoading) return <ProductDetailPageSkeleton />
  if (isError) return <ProductDetailPageError />

  if (!selectedColor.code) {
    setSelectedColor(product.colors[0])
  }

  if (!selectedStorage.code) {
    setSelectedStorage(product.storages[0])
  }

  const handleAddToCart = () => {
    if (!product.isAvailable) return

    setAddingToCart(true)
    addToCartMutation.mutate({
      productId: product.id,
      colorCode: selectedColor.code,
      storageCode: selectedStorage.code,
    })
  }

  const productDetails = [
    { label: "Brand", value: product.brand },
    { label: "Model", value: product.model },
    { label: "Price", value: product.formattedPrice },
    { label: "CPU", value: product.cpu },
    { label: "RAM", value: product.ram },
    { label: "Operating System", value: product.os },
    { label: "Display", value: product.displayType },
    { label: "Battery", value: product.battery },
    { label: "Cameras", value: `Main: ${product.primaryCamera}\nFront: ${product.secondaryCamera}` },
    { label: "Dimensions", value: product.dimentions },
    { label: "Weight", value: product.weight },
  ]

  return (
    <div className="w-full animate-appear">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1fr]">
            <div className="flex items-center justify-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
              <div className="max-w-sm w-full rounded-xl shadow-sm">
                <img
                  src={product.imageUrl}
                  alt={`${product.brand} ${product.model}`}
                  className="w-full rounded-lg object-contain mx-auto aspect-[3/4]"
                  loading="lazy"
                  width="300"
                  height="400"
                />
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col h-full gap-4">
              <div className="grow flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    {product.brand}
                  </span>
                  {product.isAvailable ? (
                    <span className="w-fit bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-green-900 dark:text-green-400 border border-green-400">
                      Available
                    </span>
                  ) : (
                    <span className="w-fit bg-red-100 text-red-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-red-900 dark:text-red-400 border border-red-400">
                      Not Available
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{product.model}</h1>

                <div className="flex flex-col gap-4">
                  {productDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="grid grid-cols-3 gap-4 border-b border-gray-100 dark:border-gray-700 pb-3"
                    >
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{detail.label}</dt>
                      <dd className="text-sm text-gray-900 dark:text-gray-300 col-span-2 whitespace-pre-line">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Colors</h2>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.code}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedColor?.code === color.code
                            ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : "border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        }`}
                      >
                        {color.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Storage</h2>
                  <div className="flex gap-3">
                    {product.storages.map((storage) => (
                      <button
                        key={storage.code}
                        onClick={() => setSelectedStorage(storage)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedStorage.code === storage.code
                            ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : "border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        }`}
                      >
                        {storage.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className={`${addingToCart && "animate-pulse"} cursor-pointer w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 active:bg-blue-900 transition-colors flex items-center justify-center space-x-2 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-900 mt-4 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled={!product.isAvailable || addingToCart}
                  onClick={handleAddToCart}
                >
                  <ShoppingCardIcon className="w-5 h-5" />
                  <span>{addingToCart ? "Adding..." : product.isAvailable ? "Add to Cart" : "Not Available"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
