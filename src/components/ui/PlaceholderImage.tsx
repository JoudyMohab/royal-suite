import { cn } from "@/lib/cn";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  tone?: "deep" | "warm" | "sage";
  corner?: "tl" | "br" | "none";
  frame?: "gold" | "white" | "none";
};

const frames = {
  gold: "border border-champagne/40",
  white: "border-4 border-white",
  none: "",
};

const tones = {
  deep: "bg-gradient-to-br from-walnut via-[#4a352b] to-espresso",
  warm: "bg-gradient-to-br from-[#8a6753] via-walnut to-[#4a352b]",
  sage: "bg-gradient-to-br from-sage via-sage-deep to-[#4f5b49]",
};

/**
 * Labeled placeholder standing in for real hotel photography. Styled as a
 * warm-toned framed photograph (not a flat gray box) so layered, image-led
 * compositions still read as intentional. Swap for an <Image> once verified
 * photography is supplied.
 */
export function PlaceholderImage({
  label,
  className,
  tone = "deep",
  corner = "br",
  frame = "gold",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-end overflow-hidden",
        frames[frame],
        tones[tone],
        className,
      )}
      role="img"
      aria-label={label}
    >
      {corner !== "none" && (
        <span
          aria-hidden
          className={cn(
            "absolute h-8 w-8 border-champagne/70",
            corner === "tl"
              ? "left-3 top-3 border-l border-t"
              : "bottom-3 right-3 border-b border-r",
          )}
        />
      )}
      <span className="relative px-4 py-3 font-body text-[11px] uppercase tracking-[0.14em] text-ivory/50">
        {label}
      </span>
    </div>
  );
}
