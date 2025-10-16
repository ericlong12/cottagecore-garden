// lib/text.ts
// Very small, paragraph-safe auto-linker for bare http(s) URLs.
export function autoLink(text: string): string {
  // Avoid matching trailing punctuation
  const urlRe = /(https?:\/\/[^\s<]+[^\s<\.)\],;:"'])/g;
  return text.replace(
    urlRe,
    (m) =>
      `<a href="${m}" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2">${m}</a>`,
  );
}
