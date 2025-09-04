import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const plushies = [
    {
      id: '1',
      name: 'Fluffy',
      species: 'Rabbit',
      traits: ['Soft', 'Cuddly'],
      funFact: 'Fluffy loves to eat carrots.',
      about: 'Fluffy is a soft and cuddly rabbit who enjoys lounging in the sun.',
      avatar: '/plushies/fluffy.png',
    },
    {
      id: '2',
      name: 'Spot',
      species: 'Dog',
      traits: ['Loyal', 'Playful'],
      funFact: 'Spot can fetch a ball from twice the distance of an average dog.',
      about: 'Spot is a loyal and playful dog who loves to chase after balls.',
      avatar: '/plushies/spot.png',
    },
    // Add more plushies as needed
  ]

  return (
    <main>
      <header className="mb-6 text-center">
        <div className="mx-auto mb-2 h-20 w-20">
          <Image src="/BunnyLogo.png" width={96} height={96} alt="bunny crest" />
        </div>
        <h1 className="text-2xl font-semibold" style={{ fontFamily: 'DM Serif Text, serif' }}>
          soft things • small tech • warm cups
        </h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {plushies.map(p => (
          <Link key={p.id} href={`/plushies/${p.id}`} className="card block">
            <div className="flex items-center gap-3">
              <Image src={p.avatar} alt={`${p.name} avatar`} width={64} height={64} />
              <div>
                <h3 className="text-lg font-semibold heading-serif">{p.name}</h3>
                <p className="text-sm text-ink/70">{p.species}</p>
              </div>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {p.traits.map(t => (
                <li key={t} className="rounded-full border border-moss/30 px-2 py-0.5">{t}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm"><span className="font-medium">Fun fact:</span> {p.funFact}</p>
            <p className="mt-2 text-sm text-ink/80 line-clamp-2">{p.about}</p>
          </Link>
        ))}
      </div>

      <footer className="mt-8 text-center text-sm text-ink/70">
        made with tea and time ✨
      </footer>
    </main>
  )
}