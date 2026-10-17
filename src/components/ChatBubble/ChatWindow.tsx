import { useEffect, useRef, useState } from 'react';
import ChatMessageItem from './ChatMessageItem';
import ChatShortcuts from './ChatShortcuts';
import TypingDots from './TypingDots';
import { CloseGlyph, SendGlyph } from './ChatIcon';
import { CHAT_GREETING, resolveAnswer } from '@/data/chat';
import { SITE } from '@/data/site';
import type { ChatMessage } from '@/types';
import { cn } from '@/utils/cn';

interface ChatWindowProps {
  open: boolean;
  closing: boolean;
  onClose: () => void;
  titleId: string;
}

let messageSeq = 0;
const nextId = () => {
  messageSeq += 1;
  return `msg-${messageSeq}`;
};

export default function ChatWindow({ open, closing, onClose, titleId }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([CHAT_GREETING]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (open && !closing) {
      inputRef.current?.focus();
    }
  }, [open, closing]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  const pushExchange = (question: string, lookup: string) => {
    const userMessage: ChatMessage = { id: nextId(), role: 'user', text: question };
    setMessages((current) => [...current, userMessage]);
    setTyping(true);

    timeoutRef.current = window.setTimeout(() => {
      const answer = resolveAnswer(lookup);
      setMessages((current) => [...current, { id: nextId(), ...answer }]);
      setTyping(false);
    }, 420);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = draft.trim();
    if (!value || typing) return;

    setDraft('');
    pushExchange(value, value);
  };

  const handleShortcut = (id: string, label: string) => {
    if (typing) return;
    pushExchange(label, id);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      className={cn(
        'term-topline pointer-events-auto relative flex h-[min(560px,calc(100dvh-140px))] w-[min(376px,calc(100vw-32px))] flex-col overflow-hidden rounded-[14px] border border-line bg-gradient-to-b from-panel-2 to-panel shadow-chat',
        closing ? 'animate-chat-out' : 'animate-chat-in',
      )}
    >
      <header className="flex items-center gap-3 border-b border-line bg-white/[.012] px-4 py-3.5">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-brand-line bg-brand-soft font-mono text-[12px] font-semibold text-brand">
          {SITE.welcome}
        </span>

        <span className="min-w-0 flex-1">
          <span id={titleId} className="block truncate text-[13.5px] font-semibold">
            Assistente do portfólio
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[.11em] text-txt-3">
            <span aria-hidden className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-[#4ADE80]" />
            Online
          </span>
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar chat"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line-2 text-txt-3 transition-all duration-200 hover:border-brand-line hover:bg-brand-soft hover:text-brand"
        >
          <CloseGlyph className="h-4 w-4" />
        </button>
      </header>

      <div
        ref={listRef}
        className="scroll-slim flex flex-1 flex-col gap-2.5 overflow-y-auto px-3.5 py-4"
      >
        {messages.map((message) => (
          <ChatMessageItem key={message.id} message={message} />
        ))}
        {typing ? <TypingDots /> : null}
      </div>

      <ChatShortcuts onSelect={handleShortcut} disabled={typing} />

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-line bg-bg-2 px-3 py-3"
      >
        <label htmlFor="chat-input" className="sr-only">
          Escreva sua mensagem
        </label>
        <input
          id="chat-input"
          ref={inputRef}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Escreva sua pergunta…"
          autoComplete="off"
          className="min-w-0 flex-1 rounded-[9px] border border-line-2 bg-bg px-3 py-2.5 text-[13px] text-txt outline-none transition-colors duration-200 placeholder:text-txt-3 focus:border-brand-line"
        />
        <button
          type="submit"
          disabled={!draft.trim() || typing}
          aria-label="Enviar mensagem"
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] bg-brand text-[#05140C] shadow-btn-primary transition-all duration-200 hover:-translate-y-px hover:shadow-btn-primary-hover disabled:pointer-events-none disabled:opacity-40"
        >
          <SendGlyph className="h-[18px] w-[18px]" />
        </button>
      </form>
    </div>
  );
}
