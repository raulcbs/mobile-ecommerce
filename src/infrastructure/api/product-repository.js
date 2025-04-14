import { adaptProduct } from "@/domain/adapters/adapt-product"
import { adaptProductDetail } from "@/domain/adapters/adapt-product-detail"

const API_BASE_URL = import.meta.env.VITE_API_DOMAIN

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/product`)
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`)
    }
    const apiProducts = await response.json()

    return apiProducts.map((product) => adaptProduct(product))
  } catch (error) {
    console.error("Error al obtener productos:", error)
    throw error
  }
}

export async function fetchProductDetail(productId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/product/${productId}`)
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`)
    }
    const apiProduct = await response.json()

    return adaptProductDetail(apiProduct)
  } catch (error) {
    console.error(`Error al obtener producto con ID ${productId}:`, error)
    throw error
  }
}
