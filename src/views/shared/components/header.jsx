import { Link } from "react-router"
import { HeroIcon, ShoppingCardIcon } from "@/views/shared/icons"
import { useCart } from "@/views/shared/contexts/cart-context"

export function Header() {
  const { cartCount } = useCart()

  return (
    <nav className="shadow-sm bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto py-4 px-8 md:px-4">
        <Link to={"/"} className="flex items-center space-x-3">
          <HeroIcon />
          <span className="hidden sm:inline-block self-center text-2xl font-semibold whitespace-nowrap">
            TecnoPocket
          </span>
        </Link>

        <div className="relative inline-flex items-center p-3 font-medium text-center">
          <ShoppingCardIcon />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-sm font-bold -top-2 -end-2 ">
            {cartCount}
          </div>
        </div>
      </div>
    </nav>
  )
}
