export const CANONICAL_TECH = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Vercel",
  "Node.js",
  "Prisma",
  "Supabase",
  "PostgreSQL",
  "Cloudflare",
  "Python",
  "Go",
] as const;

export type CanonTech = (typeof CANONICAL_TECH)[number];

const SYNONYMS: Record<string, CanonTech> = {
  "next": "Next.js",
  "nextjs": "Next.js",
  "next.js": "Next.js",
  "ts": "TypeScript",
  "reactjs": "React",
  "react.js": "React",
  "tailwind": "Tailwind CSS",
  "node": "Node.js",
  "nodejs": "Node.js",
  "node.js": "Node.js",
  "prisma orm": "Prisma",
  "postgres": "PostgreSQL",
  "postgresql": "PostgreSQL",
  "cloudflare workers": "Cloudflare",
  "cloudflare pages": "Cloudflare",
  "py": "Python",
  "golang": "Go",
};

export function toCanonicalTech(raw: string): CanonTech | null {
  const key = raw.trim().toLowerCase();
  return CANONICAL_TECH.includes(raw as CanonTech)
    ? (raw as CanonTech)
    : SYNONYMS[key] ?? null;
}

/** UI strategy:
 *  - Render canonical chips for any mappable tech.
 *  - Render neutral chips for unknowns (keep the original string).
 *  - Order canonicals by CANONICAL_TECH order; unknowns A→Z after canonicals.
 */
export function splitTech(tech: string[]) {
  const canonical: CanonTech[] = [];
  const unknown: string[] = [];
  for (const t of tech) {
    const m = toCanonicalTech(t);
    (m ? canonical : unknown).push(m ?? t);
  }
  const canonDedup = Array.from(new Set(canonical)).sort(
    (a, b) => CANONICAL_TECH.indexOf(a) - CANONICAL_TECH.indexOf(b),
  );
  const unknownDedup = Array.from(new Set(unknown)).sort((a, b) => a.localeCompare(b));
  return { canon: canonDedup, unknown: unknownDedup };
}
