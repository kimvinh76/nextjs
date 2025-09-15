'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="mt-4">
      <button
        className="px-3 py-1 bg-blue-600 text-white rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Clicked {count} times
      </button>
    </div>
  )
}
