import type { ReactNode } from "react";
import { cn } from "./cn";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  noDivider,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  noDivider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("relative w-full py-16 sm:py-24 lg:py-28", className)}
    >
      <Container>
        {!noDivider && (
          <div className="mb-12 sm:mb-16 border-t border-[color:var(--border)]" />
        )}
        {(eyebrow || title || subtitle) && (
          <header className="mb-14 sm:mb-16 lg:mb-20 text-center">
            {eyebrow && (
              <p className="text-[11px] font-semibold tracking-[0.28em] text-[color:var(--muted-2)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-5 sm:mt-6 text-3xl font-semibold tracking-tight sm:text-5xl text-[color:var(--fg)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
