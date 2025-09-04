import BackHome from '@/components/BackHome'
import { plushies } from '@/content/plushies'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return plushies.map((p) => ({ id: p.id }))
}

export default function PlushieDetail({ params }: { params: { id: string } }) {
  const p = plushies.find((x) => x.id === params.id)
  if (!p) return notFound()

  return (
    <main>
      <BackHome />
      <div className="card">
        <div className="flex items-center gap-3">
          <Image src={p.avatar} alt={`${p.name} avatar`} width={80} height={80} />
          <div>
            <h1 className="text-xl font-semibold heading-serif">{p.name}</h1>
            <p className="text-ink/70">{p.species}</p>
          </div>
        </div>

        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {p.traits.map((t) => (
            <li key={t} className="rounded-full border border-moss/30 px-2 py-0.5">{t}</li>
          ))}
        </ul>

        {p.funFact && (
          <p className="mt-3 text-sm">
            <span className="font-medium">Fun fact:</span> {p.funFact}
          </p>
        )}
        <p className="mt-2 text-sm text-ink/80">{p.about}</p>

        {p.favorites?.length ? (
          <div className="mt-3 text-sm">
            <span className="font-medium">Favorites:</span> {p.favorites.join(', ')}
          </div>
        ) : null}

        <div className="mt-4">
          <Link href="/plushies" className="btn">← back to all plushies</Link>
        </div>
      </div>
    </main>
  )
}
