import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200";

const variants = {
  primary: "bg-walnut text-paper hover:bg-walnut-deep",
  secondary: "border border-champagne bg-transparent text-espresso hover:bg-cream",
  outline: "border border-espresso/30 text-espresso hover:border-espresso",
  inverse: "bg-paper text-espresso hover:bg-ivory",
  ghost: "text-espresso hover:text-walnut",
} as const;

type ButtonProps = React.ComponentProps<"a"> &
  React.ComponentProps<"button"> & {
    variant?: keyof typeof variants;
    href?: string;
  };

export function Button({
  variant = "primary",
  className,
  href,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <a href={href} className={classes} {...(rest as React.ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as React.ComponentProps<"button">)}>
      {children}
    </button>
  );
}
