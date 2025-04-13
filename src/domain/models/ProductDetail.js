import { Product } from "@/domain/models/Product"

export class ProductDetail extends Product {
  constructor({
    id,
    brand,
    model,
    price,
    imageUrl,
    networkTechnology,
    networkSpeed,
    gprs,
    edge,
    announced,
    status,
    dimentions,
    weight,
    sim,
    displayType,
    displayResolution,
    displaySize,
    os,
    cpu,
    chipset,
    gpu,
    externalMemory,
    internalMemory,
    ram,
    primaryCamera,
    secondaryCamera,
    speaker,
    audioJack,
    wlan,
    bluetooth,
    gps,
    nfc,
    radio,
    usb,
    sensors,
    battery,
    colors,
    options,
  }) {
    super({ id, brand, model, price, imageUrl })

    this.networkTechnology = networkTechnology
    this.networkSpeed = networkSpeed
    this.gprs = gprs
    this.edge = edge
    this.announced = announced
    this.status = status
    this.dimentions = dimentions
    this.weight = weight
    this.sim = sim
    this.displayType = displayType
    this.displayResolution = displayResolution
    this.displaySize = displaySize
    this.os = os
    this.cpu = cpu
    this.chipset = chipset
    this.gpu = gpu
    this.externalMemory = externalMemory
    this.internalMemory = internalMemory
    this.ram = ram
    this.primaryCamera = primaryCamera
    this.secondaryCamera = secondaryCamera
    this.speaker = speaker
    this.audioJack = audioJack
    this.wlan = wlan
    this.bluetooth = bluetooth
    this.gps = gps
    this.nfc = nfc
    this.radio = radio
    this.usb = usb
    this.sensors = sensors
    this.battery = battery
    this.colors = colors
    this.options = options
  }

  get hasNfc() {
    return !!this.nfc
  }

  get isAvailable() {
    return this.status?.toLowerCase().includes("available")
  }
}
