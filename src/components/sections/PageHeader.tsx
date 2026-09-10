import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-4 pt-40 md:px-10 md:pt-48">
      <Reveal className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display text-5xl font-medium leading-[1.08] text-espresso sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-espresso/65">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
