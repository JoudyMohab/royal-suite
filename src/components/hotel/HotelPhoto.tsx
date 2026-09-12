import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Photo } from "@/data/photos";

type HotelPhotoProps = {
  photo: Photo;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function HotelPhoto({
  photo,
  alt,
  className,
  priority,
  sizes = "(min-width: 1024px) 60vw, 100vw",
}: HotelPhotoProps) {
  return (
    <figure className={cn("photo-mat relative overflow-hidden", className)}>
      <Image
        src={photo.src}
        alt={alt ?? photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </figure>
  );
}
