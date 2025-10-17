import Image from "next/image"
import Link from "next/link"
import { plushies } from "@/content/plushies"

export const metadata = {
  title: "Plushies • My Garden",
  description: "Meet the little cast of characters.",
}

export default function PlushiesPage() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-6" id="main">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-sm text-ink/70">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>•</li>
            <li>
              <Link href="/plushies" className="font-medium">
                Plushies
              </Link>
            </li>
            <li aria-hidden>•</li>
            <li aria-current="page" className="text-ink">
              Meet My Plushies
            </li>
          </ol>
        </nav>

        <header className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold heading-serif">Meet My Plushies</h1>
            <p className="text-sm text-ink/70">a little cast of characters</p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
          >
            ← back to home
          </Link>
        </header>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {plushies.map((p) => (
            <Link
              key={p.id}
              href={`/plushies/${p.id}`}
              className="card block border border-slate-200 rounded-2xl p-4 transition-transform transform hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
            >
              <article className="flex flex-col">
                <div className="flex items-center gap-3">
                  <Image
                    src={p.avatar}
                    alt={`${p.name} avatar`}
                    width={56}
                    height={56}
                    className="rounded-full border border-slate-200"
                    priority={false}
                  />

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold heading-serif line-clamp-2">{p.name}</h3>
                    <p className="text-sm text-ink/70">{p.species}</p>
                  </div>
                </div>

                <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                  {p.traits.map((t) => (
                    <li
                      key={t}
                      className="tag rounded-full bg-slate-100 border border-slate-300 px-2 py-0.5 text-sm text-slate-800"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {p.funFact && (
                  <p className="mt-3 text-sm text-ink/80">
                    <span className="font-medium">💡 Fun fact:</span>{' '}
                    <span className="line-clamp-2">{p.funFact}</span>
                  </p>
                )}

                <div className="mt-4 flex items-center">
                  <span className="ml-auto text-sm font-medium text-amber-700 hover:text-amber-800">View profile →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}