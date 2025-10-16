import Link from "next/link";

type Props = { href: string; emoji: string; title: string; blurb: string };

export default function LinkCard({ href, emoji, title, blurb }: Props) {
  return (
    <Link
      href={href}
      className="card block focus-ring transition-transform hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="font-serif text-lg md:text-xl text-ink">
            <span aria-hidden="true" className="mr-2">
              {emoji}
            </span>
            {title}
          </div>
          <p className="text-sm text-ink/70">{blurb}</p>
        </div>
        <span aria-hidden="true" className="opacity-70">➜</span>
      </div>
    </Link>
  );
}
