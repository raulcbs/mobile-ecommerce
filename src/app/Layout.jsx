import React from "react"
import { Outlet, Link } from "react-router"

export default function Layout() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#242424] text-[#ffffffde]">
      <header className="px-8 py-4 bg-[#1a1a1a] flex items-center gap-4">
        <h1>Mobile Ecommerce</h1>
        <nav className="grow flex">
          <Link to="/">Inicio</Link>
        </nav>
        <div>0</div>
      </header>
      <main className="w-full grow overflow-y-auto">
        <Outlet />
      </main>
      <footer>
        <p>Esto es el footer</p>
      </footer>
    </div>
  )
}
