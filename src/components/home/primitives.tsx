import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SolidButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 bg-primary px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90 ${className}`}
    >
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <button
      className={`inline-flex items-center gap-2 border px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors ${
        onDark
          ? "border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          : "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export function TextLink({ children }: { children: ReactNode }) {
  return (
    <span className="group inline-flex cursor-pointer items-center gap-1.5 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-primary">
      {children}
      <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
    </span>
  );
}

export function Wordmark({ onDark = false, className = "" }: { onDark?: boolean; className?: string }) {
  return (
    <div className="leading-none">
      <div
        className={`font-display text-3xl tracking-wide ${onDark ? "text-primary-foreground" : "text-primary"} ${className}`}
      >
        Philip <span className="text-accent">&</span> Shelly
      </div>
    </div>
  );
}