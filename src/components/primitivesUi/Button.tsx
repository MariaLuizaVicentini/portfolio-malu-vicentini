import { cn } from "@/utils/cn";

type Variant = "primary" | "ghost" | "text";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  external?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand px-[26px] py-3.5 text-sm font-semibold tracking-[.005em] text-[#05140C] shadow-btn-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-btn-primary-hover",
  ghost:
    "inline-flex items-center justify-center gap-2.5 rounded-lg border border-line-2 bg-white/[.02] px-[26px] py-3.5 text-sm font-medium tracking-[.005em] text-txt transition-all duration-200 hover:border-brand-line hover:bg-brand-soft hover:shadow-ghost-hover",
  text: "inline-flex items-center gap-2 border-b border-transparent px-2 py-3.5 text-sm text-txt-2 transition-colors duration-200 hover:border-line-2 hover:text-txt",
};

/** Link estilizado como botão, preservando os três estilos do HTML original. */
export default function ButtonLink({
  variant = "primary",
  external,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className={cn(VARIANTS[variant], className)}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}
