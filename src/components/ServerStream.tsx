// Server component that simulates streaming by awaiting between chunks
export default async function ServerStream() {
  // server-side fetch to internal API (ISR behavior)
  const res = await fetch('http://localhost:3000/api/hello', { next: { revalidate: 10 } })
  const json = res.ok ? await res.json() : { message: 'API lỗi', time: '' }

  // simulate slow additional part
  async function wait(ms: number) {
    return new Promise((res) => setTimeout(res, ms))
  }

  // first part is API data
  const part1 = `${json.message}`
  await wait(300)

  // second part delayed
  const part2 = `Phần 2: nội dung server (tải chậm hơn)`
  await wait(2000)

  return (
    <div>
      <p className="text-sm text-gray-700">{part1}</p>
      <p className="text-xs text-gray-500">Server time: {json.time}</p>
      <p className="text-sm text-gray-700 mt-2">{part2}</p>
    </div>
  )
}
