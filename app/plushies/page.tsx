import Image from "next/image"
import Link from "next/link"
import BackHome from "@/components/BackHome"
import { plushies } from "@/content/plushies"

export const metadata = {
  title: "Plushies • My Garden",
  description: "Meet the little cast of characters.",
}

export default function PlushiesPage() {
  return (
    <main>
      <BackHome />
      <header className="mb-4">
        <h1 className="text-2xl font-semibold heading-serif">Meet My Plushies</h1>
        <p className="text-sm text-ink/70">a little cast of characters</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {plushies.map((p) => (
          <Link key={p.id} href={`/plushies/${p.id}`} className="card block">
            <div className="flex items-center gap-3">
              <Image src={p.avatar} alt={`${p.name} avatar`} width={64} height={64} />
              <div>
                <h3 className="text-lg font-semibold heading-serif">{p.name}</h3>
                <p className="text-sm text-ink/70">{p.species}</p>
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
          </Link>
        ))}
      </div>
    </main>
  )
}