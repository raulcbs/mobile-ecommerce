import { createContext, useContext, useState, useCallback } from "react"

const ProductContext = createContext()

export function useProduct() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider")
  }
  return context
}

export function ProductProvider({ children }) {
  const [currentProduct, setCurrentProduct] = useState(null)

  const saveProductInfo = useCallback((product) => {
    if (product) {
      setCurrentProduct({
        id: product.id,
        brand: product.brand,
        model: product.model,
      })
    }
  }, [])

  const clearProductInfo = useCallback(() => {
    setCurrentProduct(null)
  }, [])

  const value = {
    currentProduct,
    saveProductInfo,
    clearProductInfo,
  }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
