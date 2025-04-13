import React from "react"
import { SpecificationSection } from "./specification-section"

export function ProductSpecifications({ product }) {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <SpecificationSection title="Design & Display">
        {product.dimentions && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Dimensions:</dt>
            <dd>{product.dimentions}</dd>
          </div>
        )}
        {product.weight && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Weight:</dt>
            <dd>{product.weight}</dd>
          </div>
        )}
        {product.sim && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">SIM:</dt>
            <dd>{product.sim}</dd>
          </div>
        )}
        {product.displayType && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Display type:</dt>
            <dd>{product.displayType}</dd>
          </div>
        )}
        {product.displaySize && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Size:</dt>
            <dd>{product.displaySize}</dd>
          </div>
        )}
        {product.displayResolution && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Resolution:</dt>
            <dd>{product.displayResolution}</dd>
          </div>
        )}
        {product.colors && Array.isArray(product.colors) && product.colors.length > 0 && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Colors:</dt>
            <dd>{product.colors.join(", ")}</dd>
          </div>
        )}
      </SpecificationSection>

      <SpecificationSection title="Platform & Hardware">
        {product.os && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Operating system:</dt>
            <dd>{product.os}</dd>
          </div>
        )}
        {product.chipset && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Chipset:</dt>
            <dd>{product.chipset}</dd>
          </div>
        )}
        {product.cpu && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">CPU:</dt>
            <dd>{product.cpu}</dd>
          </div>
        )}
        {product.gpu && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">GPU:</dt>
            <dd>{product.gpu}</dd>
          </div>
        )}
        {product.ram && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">RAM:</dt>
            <dd>{product.ram}</dd>
          </div>
        )}
        {product.internalMemory && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Internal memory:</dt>
            <dd>{product.internalMemory}</dd>
          </div>
        )}
        {product.externalMemory && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">External memory:</dt>
            <dd>{product.externalMemory}</dd>
          </div>
        )}
      </SpecificationSection>

      <SpecificationSection title="Cameras">
        {product.primaryCamera && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Main camera:</dt>
            <dd>{product.primaryCamera}</dd>
          </div>
        )}
        {product.secondaryCamera && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Front camera:</dt>
            <dd>{product.secondaryCamera}</dd>
          </div>
        )}
      </SpecificationSection>

      <SpecificationSection title="Connectivity">
        {product.networkTechnology && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Network technology:</dt>
            <dd>{product.networkTechnology}</dd>
          </div>
        )}
        {product.networkSpeed && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Network speed:</dt>
            <dd>{product.networkSpeed}</dd>
          </div>
        )}
        {product.wlan && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">WLAN:</dt>
            <dd>{product.wlan}</dd>
          </div>
        )}
        {product.bluetooth && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Bluetooth:</dt>
            <dd>{product.bluetooth}</dd>
          </div>
        )}
        {product.gps && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">GPS:</dt>
            <dd>{product.gps}</dd>
          </div>
        )}
      </SpecificationSection>

      <SpecificationSection title="Audio & Sensors">
        {product.speaker && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Speaker:</dt>
            <dd>{product.speaker}</dd>
          </div>
        )}
        {product.audioJack && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Audio jack:</dt>
            <dd>{product.audioJack}</dd>
          </div>
        )}
        {product.sensors && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Sensors:</dt>
            <dd>{product.sensors}</dd>
          </div>
        )}
      </SpecificationSection>

      <SpecificationSection title="Battery">
        {product.battery && (
          <div className="flex">
            <dt className="font-medium text-gray-600 dark:text-gray-400 w-36">Battery:</dt>
            <dd>{product.battery}</dd>
          </div>
        )}
      </SpecificationSection>
    </div>
  )
}
