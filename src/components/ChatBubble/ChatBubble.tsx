import { useCallback, useEffect, useRef, useState } from 'react';
import ChatWindow from './ChatWindow';
import { ChatGlyph, CloseGlyph } from './ChatIcon';
import { useOnKeyDown } from '@/hooks';
import { cn } from '@/utils/cn';

const TITLE_ID = 'chat-portfolio-title';

/**
 * Bubble flutuante fixo no canto inferior direito.
 * Abre a janela de chat com animação de entrada/saída.
 */
export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const close = useCallback(() => {
    setClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 180);
  }, []);

  const toggle = useCallback(() => {
    if (open && !closing) {
      close();
      return;
    }
    setClosing(false);
    setOpen(true);
  }, [open, closing, close]);

  useOnKeyDown('Escape', close, open && !closing);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[120] flex flex-col items-end gap-3 min-[620px]:bottom-7 min-[620px]:right-7">
      {open ? (
        <ChatWindow open={open} closing={closing} onClose={close} titleId={TITLE_ID} />
      ) : null}

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? 'Fechar chat' : 'Abrir chat do portfólio'}
        className="pointer-events-auto group relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-brand-line bg-gradient-to-br from-brand to-[#1FA85E] text-[#05140C] shadow-bubble transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-bubble-hover active:translate-y-0"
      >
        {!open ? (
          <>
            <span
              aria-hidden
              className="absolute inset-0 animate-bubble-ring rounded-full border border-brand"
            />
            <span
              aria-hidden
              className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-bg bg-[#4ADE80]"
            />
          </>
        ) : null}

        <span
          aria-hidden
          className={cn(
            'relative transition-transform duration-[250ms]',
            open ? 'rotate-90' : 'group-hover:scale-105',
          )}
        >
          {open ? <CloseGlyph className="h-6 w-6" /> : <ChatGlyph className="h-[26px] w-[26px]" />}
        </span>
      </button>
    </div>
  );
}
