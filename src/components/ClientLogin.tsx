'use client'
import { useState } from 'react'

export default function ClientLogin() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [msg, setMsg] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setMsg(null)
    try {
      const res = await fetch('/api/proxy/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass }),
        credentials: 'include',
      })
      const text = await res.text()
      setMsg(`Status: ${res.status} - ${text}`)
    } catch (err: any) {
      setMsg(String(err))
    }
  }

  return (
    <form onSubmit={submit} className="mt-4 p-3 border rounded">
      <div>
        <label htmlFor="login-user" className="block text-sm">Username</label>
        <input id="login-user" value={user} onChange={(e) => setUser(e.target.value)} className="border px-2 py-1 w-full" />
      </div>
      <div className="mt-2">
        <label htmlFor="login-pass" className="block text-sm">Password</label>
        <input id="login-pass" type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="border px-2 py-1 w-full" />
      </div>
      <button className="mt-3 px-3 py-1 bg-green-600 text-white rounded" type="submit">Login (proxy)</button>
      {msg && <p className="mt-2 text-sm">{msg}</p>}
    </form>
  )
}
