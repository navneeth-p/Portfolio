import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "./cn";

type Variant = "primary" | "secondary" | "ghost";

function base(variant: Variant) {
  const common =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition will-change-transform select-none min-h-12 min-w-max sm:min-h-11";
  if (variant === "primary") {
    return cn(
      common,
      "bg-[color:var(--accent)] text-[color:var(--accent-ink)] hover:-translate-y-0.5 hover:shadow-lg dark:bg-[color:var(--accent)] dark:text-[color:var(--accent-ink)]",
    );
  }
  if (variant === "secondary") {
    return cn(
      common,
      "border border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--card-solid)_80%,transparent)] text-[color:var(--fg)] hover:-translate-y-0.5 dark:border-[color:var(--border)] dark:bg-[color:color-mix(in_oklab,var(--card-solid)_80%,transparent)] dark:text-[color:var(--fg)]",
    );
  }
  return cn(
    common,
    "text-[color:var(--fg)] hover:bg-[color:color-mix(in_oklab,var(--fg)_8%,transparent)] dark:text-[color:var(--fg)] dark:hover:bg-[color:color-mix(in_oklab,var(--fg)_12%,transparent)]",
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a className={cn(base(variant), className)} {...props} />;
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(base(variant), className)} {...props} />;
}
