export class Product {
  constructor({ id, brand, model, price, imageUrl }) {
    this.id = id
    this.brand = brand
    this.model = model
    this.price = price
    this.imageUrl = imageUrl
  }

  get formattedPrice() {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "EUR",
    }).format(this.price ?? 0)
  }
}
