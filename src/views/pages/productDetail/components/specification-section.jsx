import React from "react"

export function SpecificationSection({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">{title}</h2>
      <dl className="grid grid-cols-1 gap-3">{children}</dl>
    </div>
  )
}
