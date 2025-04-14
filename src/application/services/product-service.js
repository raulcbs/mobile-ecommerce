import { fetchProducts, fetchProductDetail } from "@/infrastructure/api/product-repository"

export const getAllProducts = async () => {
  return await fetchProducts()
}

export const getProductById = async (productId) => {
  return await fetchProductDetail(productId)
}

export const productService = {
  getAllProducts,
  getProductById,
}
