import Image from 'next/image'
import LinkCard from '@/components/LinkCard'

export default function Page() {
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

      <div className="grid gap-4 md:grid-cols-2">
        <LinkCard href="/plushies" emoji="🧸" title="Meet My Plushies" blurb="a little cast of characters" />
        <LinkCard href="/projects" emoji="🧪" title="Projects I’ve Built" blurb="tiny builds & code curiosities" />
        <LinkCard href="/tea" emoji="🍵" title="Tea Journal" blurb="sips, ratings, and steeped thoughts" />
        <LinkCard href="/balloons" emoji="🎈" title="Balloon Animals" blurb="twists, pops, and favorites" />
        <LinkCard href="/diary" emoji="📖" title="My Diary" blurb="longer reflections, whenever they bloom" />
        <LinkCard href="/calendar" emoji="📅" title="Future Calendar" blurb="where I might be this year" />
      </div>

      <footer className="mt-8 text-center text-sm text-ink/70">
        made with tea and time ✨
      </footer>
    </main>
  )
}
