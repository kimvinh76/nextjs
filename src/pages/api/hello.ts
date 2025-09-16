// Simple API route using Next.js pages API for demonstration
import type { NextApiRequest, NextApiResponse } from 'next'
import { getHelloData } from '../../lib/hello'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getHelloData())
}
