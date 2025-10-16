import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center" id="main">
      <div className="mx-auto mb-4 h-16 w-16">
        <Image src="/BunnyLogo.png" width={64} height={64} alt="" />
      </div>
      <h1 className="font-serif text-2xl text-ink md:text-3xl">lost in the garden</h1>
      <p className="mt-2 text-ink/70">that page hasn’t sprouted yet.</p>
      <div className="mt-6">
        <Link
          href="/"
          className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-ink hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
        >
          ← back home
        </Link>
      </div>
    </main>
  );
}
