import { Product } from "@/domain/models/product"

export function adaptProduct(apiProduct) {
  return new Product({
    id: apiProduct.id,
    brand: apiProduct.brand,
    model: apiProduct.model,
    price: apiProduct.price,
    imageUrl: apiProduct.imgUrl,
  })
}
