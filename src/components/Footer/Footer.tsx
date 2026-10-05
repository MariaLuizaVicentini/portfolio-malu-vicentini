import { FOOTER_LINKS, SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-10">
      <div className="wrap flex flex-col flex-wrap items-start justify-between gap-5 min-[620px]:flex-row min-[620px]:items-center min-[620px]:gap-[30px]">
        <div className="flex items-baseline gap-3.5">
          <span className="text-[15px] font-semibold tracking-[-.01em]">{SITE.name}</span>
          <span className="font-mono text-[11.5px] tracking-[.06em] text-txt-3">{SITE.role}</span>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap gap-x-[26px] gap-y-2 font-mono text-[11.5px] tracking-[.06em] text-txt-2"
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="font-mono text-[11px] tracking-[.05em] text-txt-3">
          © {SITE.year} {SITE.name}
        </div>
      </div>
    </footer>
  );
}
