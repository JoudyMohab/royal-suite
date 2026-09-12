"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryPhotos } from "@/data/photos";
import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";

export function GalleryLightbox({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((i) => (i === null ? i : (i + 1) % galleryPhotos.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((i) => (i === null ? i : (i - 1 + galleryPhotos.length) % galleryPhotos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
        {galleryPhotos.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            className="mb-3 block w-full break-inside-avoid text-start"
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
            <span className="mt-2 block font-sans text-[11px] uppercase tracking-[0.14em] text-taupe">
              {t.gallery.cats[item.category]}
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={galleryPhotos[active].photo.alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute end-4 top-4 text-paper"
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
              src={galleryPhotos[active].photo.src}
              alt={galleryPhotos[active].photo.alt}
              width={galleryPhotos[active].photo.width}
              height={galleryPhotos[active].photo.height}
              className="max-h-[90vh] w-full object-contain"
            />
            <p className="mt-3 font-sans text-sm text-paper">
              {galleryPhotos[active].photo.alt}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
