import { NAV_LINKS } from "@/data/site";
import { cn } from "@/utils/cn";
import {NavLinksProps} from "@/types/navbar";

export default function NavLinks({
  activeId,
  onNavigate,
  variant = "desktop",
}: NavLinksProps) {
  if (variant === "mobile") {
    return (
      <nav className="flex flex-col" aria-label="Navegação principal">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={activeId === link.href.slice(1) ? "true" : undefined}
            className={cn(
              "border-b border-line px-1 py-4 text-[15px] transition-colors",
              activeId === link.href.slice(1)
                ? "text-brand"
                : "text-txt-2 hover:text-txt",
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav
      className="hidden items-center gap-[34px] text-[13.5px] tracking-[.01em] text-txt-2 min-[980px]:flex"
      aria-label="Navegação principal"
    >
      {NAV_LINKS.map((link) => {
        const isActive = activeId === link.href.slice(1);

        return (
          <a
            key={link.href}
            href={link.href}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "group relative transition-colors duration-200 hover:text-txt",
              isActive && "text-txt",
            )}
          >
            {link.label}
            <span
              aria-hidden
              className={cn(
                "absolute -bottom-1.5 left-0 h-px bg-brand transition-[width] duration-[250ms] group-hover:w-full",
                isActive ? "w-full" : "w-0",
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
