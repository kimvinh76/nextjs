import Link from 'next/link'
import Counter from '../components/Counter'
import ClientHello from '../components/ClientHello'
import { getHelloData } from '../lib/hello'

// Server component: gọi API public tại thời điểm render (server-side)
async function getDemoData() {
  // Dùng helper trực tiếp để tránh việc fetch nội bộ trên server (đặc biệt hữu ích trong dev)
  return getHelloData()
}

// Route-level revalidation: tell Next to revalidate this page every 10 seconds
export const revalidate = 10

export default async function Home() {
  const data = await getDemoData()

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Xin chào - Next.js cơ bản</h1>
      <p className="mb-4">Đây là trang chủ ví dụ sử dụng Next.js + TypeScript + Tailwind.</p>

      {data ? (
        <section className="mb-4 p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Demo fetch (server-side)</h3>
          <p className="text-sm text-gray-700">{data.message}</p>
          <p className="text-xs text-gray-500">Server time (ISO): {data.time}</p>
          <p className="text-xs text-gray-400 mt-2">Ghi chú: dữ liệu được cache với revalidate = 10 giây (ISR).</p>
        </section>
      ) : (
        <section className="mb-4 p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Demo fetch (server-side)</h3>
          <p className="text-sm text-gray-700">Không có dữ liệu (yêu cầu lỗi)</p>
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
