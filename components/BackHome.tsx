import Link from "next/link"

export default function BackHome() {
  return (
    <div className="mb-4">
      <Link href="/" className="text-sm underline hover:no-underline">← back to home</Link>
    </div>
  )
}
}
