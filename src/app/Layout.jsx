import React from "react"
import { Outlet, Link } from "react-router"
import { HomeIcon, ShoppingCardIcon } from "../views/shared/icons"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800  dark:bg-gray-900 dark:text-white">
      <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <HomeIcon />
            <span className="hidden sm:inline-block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TecnoPocket
            </span>
          </a>

          <div className="relative inline-flex items-center p-3 font-medium text-center text-white">
            <ShoppingCardIcon />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white -top-2 -end-2 ">
              0
            </div>
          </div>
        </div>
      </nav>

      <main className="grow max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <footer>
        <p>Esto es el footer</p>
      </footer>
    </div>
  )
}
