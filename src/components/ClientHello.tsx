'use client'
import { useEffect, useState } from 'react'

type ApiResponse = { message: string; time: string }

export default function ClientHello() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        return res.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch((e) => {
        if (!cancelled) setError(String(e))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="mt-4 p-4 bg-white rounded shadow">
      <h3 className="font-semibold">Demo client-fetch</h3>
      {loading && <p className="text-sm text-gray-500">Loading...</p>}
      {error && <p className="text-sm text-red-600">Error: {error}</p>}
      {data && (
        <div className="text-sm text-gray-700">
          <p>{data.message}</p>
          <p className="text-xs text-gray-500">{data.time}</p>
        </div>
      )}
    </section>
  )
}
