import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Next.js Starter',
  description: 'A minimal Next.js starter with TypeScript and Tailwind',
}

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto p-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
