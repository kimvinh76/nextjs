'use client'
import { useState } from 'react'

export default function ClientProxyDemo() {
  const [data, setData] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function run() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/proxy')
      if (!res.ok) throw new Error(String(res.status))
      const text = await res.text()
      setData(text)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-4 p-3 border rounded">
      <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={run} disabled={loading}>
        {loading ? 'Loading...' : 'Call proxy'}
      </button>
      {error && <p className="text-red-600 mt-2">Error: {error}</p>}
      {data && <pre className="mt-2 text-sm whitespace-pre-wrap">{data}</pre>}
    </div>
  )
}
