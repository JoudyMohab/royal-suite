"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Wraps children in a div that fades+slides up when scrolled into view.
 * Respects `prefers-reduced-motion` — the CSS class handles that case.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
