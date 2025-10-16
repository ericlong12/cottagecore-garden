// lib/slug.ts
// ASCII-only kebab slugs with collision-safe suffixing (…-2, …-3, …)
export function slugify(input: string): string {
  const base = input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return base || "item";
}

export function deriveUniqueSlug(baseName: string, taken: Set<string>): string {
  const root = slugify(baseName);
  if (!taken.has(root)) {
    taken.add(root);
    return root;
  }
  let n = 2;
  while (taken.has(`${root}-${n}`)) n++;
  const slug = `${root}-${n}`;
  taken.add(slug);
  return slug;
}
