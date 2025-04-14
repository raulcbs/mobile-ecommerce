import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0)

  const updateCartCount = (count) => {
    setCartCount((prevCount) => prevCount + count)
  }

  const value = {
    cartCount,
    updateCartCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
