import { ProductDetail } from "@/domain/models/product-detail"

export function adaptProductDetail(apiProduct) {
  return new ProductDetail({
    id: apiProduct.id,
    brand: apiProduct.brand,
    model: apiProduct.model,
    price: apiProduct.price,
    imageUrl: apiProduct.imgUrl,

    dimentions: apiProduct.dimentions,
    weight: apiProduct.weight,
    displayType: apiProduct.displayType,
    os: apiProduct.os,
    cpu: apiProduct.cpu,
    ram: apiProduct.ram,
    primaryCamera: apiProduct.primaryCamera,
    secondaryCamera: apiProduct.secondaryCmera,
    battery: apiProduct.battery,

    status: apiProduct.status,
    colors: apiProduct.options.colors,
    storages: apiProduct.options.storages,
  })
}
