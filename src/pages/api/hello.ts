// Simple API route using Next.js pages API for demonstration
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Xin chào từ API!', time: new Date().toISOString() })
}
