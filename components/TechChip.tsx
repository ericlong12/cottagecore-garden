export function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs text-ink/80 bg-ink/5">
      {label}
    </span>
  );
}
