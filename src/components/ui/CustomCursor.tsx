"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Minimal circular cursor for desktop pointers. Reads "VIEW" over any
 * element carrying data-cursor="view" (photography). Disabled entirely on
 * touch/coarse pointers, so it never appears on mobile, and never renders
 * during SSR to avoid a hydration mismatch.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [hoveringView, setHoveringView] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("cursor-enabled", enabled);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHoveringView(Boolean(target.closest('[data-cursor="view"]')));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <div
        className={
          "flex items-center justify-center rounded-full border border-white text-white transition-all duration-200 ease-out " +
          (hoveringView ? "h-16 w-16 bg-transparent" : "h-2.5 w-2.5 bg-white")
        }
      >
        {hoveringView && (
          <span className="font-body text-[10px] uppercase tracking-[0.14em]">
            View
          </span>
        )}
      </div>
    </div>
  );
}
