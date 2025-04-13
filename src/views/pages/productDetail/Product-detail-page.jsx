import { useQuery } from "@tanstack/react-query"
import { productService } from "@/application/services/product-service"
import { useParams } from "react-router"
import { ProductDetailPageSkeleton } from "./Product-detail-page-skeleton"
import { ProductDetailPageError } from "./Product-detail-page-error"
import { ProductDetailBreadcrumbs } from "./components/product-detail-breadcrumbs"
import { ProductImageSection } from "./components/product-image-section"
import { ProductMainInfo } from "./components/product-main-info"
import { ProductSpecifications } from "./components/product-specifications"

export function ProductDetailPage() {
  const { id } = useParams()

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

  if (isLoading) return <ProductDetailPageSkeleton />

  if (isError) return <ProductDetailPageError />

  return (
    <div className="w-full animate-appear">
      <ProductDetailBreadcrumbs product={product} />

      <div className="flex flex-col md:flex-row gap-8 pb-8">
        <ProductImageSection product={product} />
        <ProductMainInfo product={product} />
      </div>

      <ProductSpecifications product={product} />
    </div>
  )
}
