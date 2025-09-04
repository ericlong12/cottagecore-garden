import * as React from "react";

export function DifficultyDots({ level, className = "" }: { level: 1|2|3|4|5; className?: string }) {
  const l = Math.max(1, Math.min(5, level));
  return (
    <div aria-label={`Difficulty: ${l} out of 5`} className={`inline-flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          aria-hidden="true"
          key={i}
          className={`inline-block h-2.5 w-2.5 rounded-full ${i < l ? "bg-moss" : "bg-ink/20"}`}
        />
      ))}
    </div>
  );
}
