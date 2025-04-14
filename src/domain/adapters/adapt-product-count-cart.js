import { ProductCountCart } from "../models/product-count-cart.js"

export function adaptProductCountCart(apiProduct) {
  return new ProductCountCart({
    count: apiProduct.count,
  })
}
