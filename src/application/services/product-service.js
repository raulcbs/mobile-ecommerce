import { fetchProducts, fetchProductDetail, fetchProductToCart } from "@/infrastructure/api/product-repository"

export const getAllProducts = async () => {
  return await fetchProducts()
}

export const getProductById = async (productId) => {
  return await fetchProductDetail(productId)
}

export const postProductToCart = async ({ productId, colorCode, storageCode }) => {
  return await fetchProductToCart({ id: productId, colorCode, storageCode })
}

export const productService = {
  getAllProducts,
  getProductById,
  postProductToCart,
}
