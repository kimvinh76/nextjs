import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8080'

// whitelist backend paths to avoid open proxy
const ALLOWED_PATHS = ['/api/hello', '/api/login', '/api/logout']

function mapToBackendPath(proxyPath: string) {
  // proxyPath starts with /api/proxy, e.g. /api/proxy/login
  const suffix = proxyPath.replace(/^\/api\/proxy/, '') || '/'
  return `/api${suffix}`
}

async function forwardRequest(req: NextRequest) {
  const headers: Record<string, string> = {}
  const cookie = req.headers.get('cookie')
  if (cookie) headers['cookie'] = cookie
  const auth = req.headers.get('authorization')
  if (auth) headers['authorization'] = auth

  const backendPath = mapToBackendPath(req.nextUrl.pathname)
  if (!ALLOWED_PATHS.includes(backendPath)) {
    return new NextResponse('Path not allowed', { status: 403 })
  }

  const url = `${BACKEND_URL}${backendPath}`

  const init: RequestInit = {
    method: req.method,
    headers,
    body: ['POST', 'PUT', 'PATCH'].includes(req.method) ? await req.text() : undefined,
  }

  const backendRes = await fetch(url, init)
  const contentType = backendRes.headers.get('content-type') ?? 'application/json'
  const rawBody = await backendRes.text()

  // If backend returned HTML (e.g., Whitelabel error page), sanitize to JSON
  const looksLikeHtml = contentType.includes('text/html') || /<\/?html|<\/?doctype|<div|<body/i.test(rawBody)

  // copy set-cookie if backend returned it
  const setCookie = backendRes.headers.get('set-cookie')
  const outHeaders: Record<string, string> = {}
  if (setCookie) outHeaders['set-cookie'] = setCookie

  if (looksLikeHtml && backendRes.status >= 400) {
    outHeaders['content-type'] = 'application/json'
    const safeBody = JSON.stringify({ error: 'backend_error', status: backendRes.status, message: `Backend returned HTML error page` })
    return new NextResponse(safeBody, {
      status: backendRes.status,
      headers: outHeaders,
    })
  }

  outHeaders['content-type'] = contentType
  return new NextResponse(rawBody, {
    status: backendRes.status,
    headers: outHeaders,
  })
}

export async function GET(req: NextRequest) {
  return forwardRequest(req)
}

export async function POST(req: NextRequest) {
  return forwardRequest(req)
}
