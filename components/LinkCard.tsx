
import Link from 'next/link'
import { ReactNode } from 'react'

export default function LinkCard({ href, emoji, title, blurb }: { href: string; emoji: string; title: string; blurb: string }) {
  return (
    <Link href={href} className="card block transition-transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-lg font-semibold" style={{ fontFamily: 'DM Serif Text, serif' }}>
            <span className="mr-2">{emoji}</span>{title}
          </div>
          <p className="text-sm text-ink/70">{blurb}</p>
        </div>
        <div className="opacity-70">➜</div>
      </div>
    </Link>
  )
}
