import React from "react"
import { Outlet } from "react-router"
import { Header } from "@/views/shared/components/Header"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800  dark:bg-gray-900 dark:text-white">
      <Header />

      <main className="grow container mx-auto px-8 py-6 md:px-4">
        <Outlet />
      </main>
    </div>
  )
}
