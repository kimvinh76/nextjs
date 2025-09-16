'use client'
import { useState } from 'react'

export default function DashboardWidget() {
  const [val, setVal] = useState(0)
  return (
    <div className="p-3 border rounded">
      <p className="text-sm">Widget client: {val}</p>
      <button className="mt-2 px-2 py-1 bg-blue-600 text-white rounded" onClick={() => setVal((v) => v + 1)}>Inc</button>
    </div>
  )
}
