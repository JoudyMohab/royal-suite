import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] px-7 py-3.5 font-body text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline-offset-4";

const variants = {
  primary: "bg-sage-deep text-ivory hover:bg-[#566153]",
  walnut: "bg-walnut text-ivory hover:bg-[#59392e]",
  inverse: "bg-ivory text-espresso hover:bg-white",
  "on-photo": "border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory/10",
  secondary: "border border-espresso/25 text-espresso hover:border-espresso/60",
  ghost: "text-espresso/80 hover:text-walnut",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ variant = "primary", className, href, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
