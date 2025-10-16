"use client";

import * as React from "react";
import type { TeaType } from "@/content/teas";

const styles: Record<TeaType, string> = {
  black:  "bg-ink/15 text-ink",
  green:  "bg-sage/20 text-moss",
  white:  "bg-butter/40 text-ink",
  oolong: "bg-blush/25 text-ink",
  dark:   "bg-ink/25 text-ink",
  yellow: "bg-butter/40 text-ink",
  herbal: "bg-lavender/25 text-ink", // ← added
};

export function TypeChip({ type, className }: { type: TeaType; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1 text-sm text-ink ${className ?? ""}`}>
      {type}
    </span>
  );
}
