import { ProductDetail } from "@/domain/models/ProductDetail"

export function adaptProductDetail(apiProduct) {
  return new ProductDetail({
    id: apiProduct.id,
    brand: apiProduct.brand,
    model: apiProduct.model,
    price: apiProduct.price,
    imageUrl: apiProduct.imgUrl,

    networkTechnology: apiProduct.networkTechnology,
    networkSpeed: apiProduct.networkSpeed,
    gprs: apiProduct.gprs,
    edge: apiProduct.edge,
    announced: apiProduct.announced,
    status: apiProduct.status,
    dimentions: apiProduct.dimentions,
    weight: apiProduct.weight,
    sim: apiProduct.sim,

    displayType: apiProduct.displayType,
    displayResolution: apiProduct.displayResolution,
    displaySize: apiProduct.displaySize,

    os: apiProduct.os,
    cpu: apiProduct.cpu,
    chipset: apiProduct.chipset,
    gpu: apiProduct.gpu,

    externalMemory: apiProduct.externalMemory,
    internalMemory: apiProduct.internalMemory,
    ram: apiProduct.ram,

    primaryCamera: apiProduct.primaryCamera,
    secondaryCamera: apiProduct.secondaryCmera,

    speaker: apiProduct.speaker,
    audioJack: apiProduct.audioJack,

    wlan: apiProduct.wlan,
    bluetooth: apiProduct.bluetooth,
    gps: apiProduct.gps,
    nfc: apiProduct.nfc,
    radio: apiProduct.radio,
    usb: apiProduct.usb,

    sensors: apiProduct.sensors,
    battery: apiProduct.battery,
    colors: apiProduct.colors,
    options: apiProduct.options,
  })
}
