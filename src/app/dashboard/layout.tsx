import { ReactNode } from 'react'
import Link from 'next/link'
import CurrentUserMenu from '../../components/CurrentUserMenu'

export default function DashboardLayout({ children }: { readonly children: ReactNode }) {
  return (
    <div className="mt-8">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <nav>
          <Link href="/dashboard" className="mr-4 text-blue-600">Overview</Link>
          <Link href="/dashboard/stats" className="text-blue-600">Stats</Link>
        </nav>
        <div className="ml-4">
          <CurrentUserMenu />
        </div>
      </header>
      <div className="p-4 bg-white rounded shadow">{children}</div>
    </div>
  )
}
