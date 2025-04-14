import { Product } from "@/domain/models/product"

export class ProductDetail extends Product {
  constructor({
    id,
    brand,
    model,
    price,
    imageUrl,
    dimentions,
    weight,
    displayType,
    os,
    cpu,
    ram,
    primaryCamera,
    secondaryCamera,
    battery,
    colors,
    storages,
    status,
  }) {
    super({ id, brand, model, price, imageUrl })

    this.dimentions = dimentions
    this.weight = weight
    this.displayType = displayType
    this.os = os
    this.cpu = cpu
    this.ram = ram
    this.primaryCamera = primaryCamera
    this.secondaryCamera = secondaryCamera
    this.battery = battery
    this.colors = colors
    this.storages = storages
    this.status = status
  }

  get isAvailable() {
    return this.status?.toLowerCase().includes("available")
  }
}
