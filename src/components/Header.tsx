"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function  Header() {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-medium">Next.js Starter</h2>
      <nav>
        {links.map((l) => {
          const active = pathname === l.href
          return (
            <Link
              key={l.href}
              href={l.href}
              className={
                "ml-4 text-sm " + (active ? 'text-blue-600 underline' : 'text-gray-700')
              }
              aria-current={active ? 'page' : undefined}
            >
              {l.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
