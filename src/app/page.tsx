import Link from 'next/link'
import Counter from '../components/Counter'
import ClientHello from '../components/ClientHello'

// Server component: gọi API public tại thời điểm render (server-side)
async function getDemoData() {
  // dùng internal API để dễ quan sát timestamp và demo ISR
  const res = await fetch('/api/hello', { next: { revalidate: 10 } })
  if (!res.ok) return null
  return res.json()
}

export default async function Home() {
  const data = await getDemoData()

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Xin chào - Next.js cơ bản</h1>
      <p className="mb-4">Đây là trang chủ ví dụ sử dụng Next.js + TypeScript + Tailwind.</p>

      {data && (
        <section className="mb-4 p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Demo fetch (server-side)</h3>
          <p className="text-sm text-gray-700">{data.title}</p>
        </section>
      )}

      <nav className="space-x-4">
        <Link href="/about" className="text-blue-600 underline">Giới thiệu</Link>
        <Link href="/api/hello" className="text-blue-600 underline">API: /api/hello</Link>
      </nav>

    <Counter />
    <ClientHello />
    </main>
  )
}
