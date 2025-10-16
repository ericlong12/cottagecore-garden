import Link from "next/link"

export default function BackHome() {
  return (
    <div className="mb-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1 text-ink hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
      >
        ← back to home
      </Link>
    </div>
  )
}
