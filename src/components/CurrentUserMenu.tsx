'use client'
import { useState } from 'react'

export default function CurrentUserMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setOpen((o) => !o)} className="px-3 py-1 bg-gray-200 rounded">
        User ▾
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow p-2">
          <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100">Profile</button>
          <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100">Sign out</button>
        </div>
      )}
    </div>
  )
}
