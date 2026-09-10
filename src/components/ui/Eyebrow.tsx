import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "ivory";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-body text-[12px] uppercase tracking-[0.24em]",
        tone === "gold" ? "text-gold" : "text-ivory/70",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("h-px w-6", tone === "gold" ? "bg-champagne" : "bg-ivory/50")}
      />
      {children}
    </p>
  );
}
