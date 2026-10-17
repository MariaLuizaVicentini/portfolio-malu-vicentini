import { useCallback, useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { SITE } from '@/data/site';
import { SECTION_IDS } from '@/data/site';
import { useLockBodyScroll, useOnKeyDown, useScrollSpy } from '@/hooks';
import { cn } from '@/utils/cn';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useLockBodyScroll(menuOpen);
  useOnKeyDown('Escape', closeMenu, menuOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-line bg-bg/[.78] backdrop-blur-[18px]">
      <div className="wrap flex h-[68px] items-center justify-between">
        <Logo />

        <NavLinks activeId={activeId} />

        <div className="flex items-center gap-3">
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-[18px] py-[9px] font-mono text-xs font-medium tracking-[.04em] text-white shadow-none transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-btn-cv-hover"
          >
            Baixar CV
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="flex cursor-pointer flex-col gap-[5px] p-1.5 min-[980px]:hidden"
          >
            <span
              aria-hidden
              className={cn(
                'block h-[1.5px] w-[22px] bg-txt transition-transform duration-200',
                menuOpen && 'translate-y-[6.5px] rotate-45',
              )}
            />
            <span
              aria-hidden
              className={cn(
                'block h-[1.5px] w-[22px] bg-txt transition-opacity duration-200',
                menuOpen && 'opacity-0',
              )}
            />
            <span
              aria-hidden
              className={cn(
                'block h-[1.5px] w-[22px] bg-txt transition-transform duration-200',
                menuOpen && '-translate-y-[6.5px] -rotate-45',
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="wrap overflow-hidden border-t border-line bg-bg/95 pb-5 backdrop-blur-[18px] min-[980px]:hidden"
      >
        <NavLinks activeId={activeId} variant="mobile" onNavigate={closeMenu} />
      </div>
    </header>
  );
}
