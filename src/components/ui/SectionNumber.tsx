import { cn } from "@/lib/cn";

export function SectionNumber({
  value,
  tone = "gold",
}: {
  value: string;
  tone?: "gold" | "espresso" | "ivory";
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "mb-2 block font-display text-sm italic",
        tone === "gold" && "text-champagne/80",
        tone === "espresso" && "text-espresso/50",
        tone === "ivory" && "text-ivory/50",
      )}
    >
      {value}
    </span>
  );
}
