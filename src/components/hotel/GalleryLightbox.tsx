"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryPhotos, type Photo } from "@/data/photos";
import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";

type MosaicItem = { photo: Photo; class?: string };

/**
 * Editorial lightbox.
 *
 * `mosaic` renders the asymmetric homepage strip; opening any tile
 * shows the full gallery inside the dialog. Without `mosaic`, the full
 * category-filtered grid renders (gallery page). Escape, arrow keys
 * and backdrop click all work; focus is moved into the dialog.
 */
export function GalleryLightbox({
  locale,
  mosaic,
}: {
  locale: Locale;
  mosaic?: MosaicItem[];
}) {
  const t = getDictionary(locale);
  const [filter, setFilter] = useState<"all" | (typeof galleryPhotos)[number]["category"]>("all");
  const [active, setActive] = useState<number | null>(null);

  /** The dialog is portalled, so it may only mount on the client. */
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const list = useMemo(
    () =>
      mosaic
        ? mosaic.map((item) => ({ category: null, photo: item.photo }))
        : galleryPhotos.filter((item) => filter === "all" || item.category === filter),
    [mosaic, filter],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight")
        setActive((i) => (i === null ? i : (i + 1) % list.length));
      if (event.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + list.length) % list.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, list.length]);

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [active]);

  const current = active !== null ? list[active] : null;

  return (
    <>
      {/* ─── Tiles ─────────────────────────────────────────── */}
      {mosaic ? (
        <div className="grid grid-cols-2 gap-2 sm:h-[520px] sm:grid-cols-6 sm:grid-rows-2 sm:gap-2.5 lg:h-[640px]">
          {mosaic.map((item, index) => (
            <button
              key={item.photo.src + index}
              type="button"
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden bg-cream ${item.class ?? ""}`}
              aria-label={item.photo.alt}
            >
              <Image
                src={item.photo.src}
                alt={item.photo.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      ) : (
        <>
          {/* Category filter — quiet text tabs, not pills */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {(["all", "rooms", "interiors", "balconies", "bathrooms", "hotel", "details"] as const).map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`font-sans text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    filter === cat
                      ? "text-espresso underline decoration-champagne underline-offset-8"
                      : "text-taupe/70 hover:text-espresso"
                  }`}
                >
                  {cat === "all" ? "All" : t.gallery.cats[cat]}
                </button>
              ),
            )}
          </div>

          <div className="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
            {list.map((item, index) => (
              <button
                key={item.photo.src + index}
                type="button"
                onClick={() => setActive(index)}
                className="mb-3 block w-full break-inside-avoid text-start"
                aria-label={item.photo.alt}
              >
                <span className="photo-mat block">
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.photo.src}
                      alt={item.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </span>
                </span>
                {"category" in item && item.category ? (
                  <span className="mt-2 block font-sans text-[11px] uppercase tracking-[0.14em] text-taupe">
                    {t.gallery.cats[item.category]}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </>
      )}

      {/*
       * ─── Lightbox dialog ────────────────────────────────
       * Portalled to <body>: the mosaic is wrapped in a scroll-reveal,
       * and a transformed ancestor would otherwise make this fixed
       * overlay resolve against the gallery block rather than the
       * viewport — and paint beneath the sticky header.
       */}
      {current && isClient
        ? createPortal(
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso/96 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.photo.alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute end-4 top-4 text-paper/80 transition-colors hover:text-paper"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.photo.src}
              alt={current.photo.alt}
              width={current.photo.width}
              height={current.photo.height}
              className="max-h-[86vh] w-full object-contain"
              sizes="(min-width: 1024px) 64rem, 100vw"
            />
            <p className="mt-3 text-center font-sans text-[12px] text-paper/70">
              {current.photo.alt}
            </p>
          </div>
        </div>,
        document.body,
      )
        : null}
    </>
  );
}
