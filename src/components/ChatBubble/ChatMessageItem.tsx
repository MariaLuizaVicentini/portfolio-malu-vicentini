import type { ChatMessage } from '@/types';
import { cn } from '@/utils/cn';

interface ChatMessageItemProps {
  message: ChatMessage;
}

export default function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isBot = message.role === 'bot';

  return (
    <div className={cn('flex animate-msg-in', isBot ? 'justify-start' : 'justify-end')}>
      <div
        className={cn(
          'max-w-[86%] whitespace-pre-line rounded-[10px] px-3.5 py-2.5 text-[13px] leading-[1.6]',
          isBot
            ? 'rounded-bl-[3px] border border-line-2 bg-panel-2 text-txt-2'
            : 'rounded-br-[3px] border border-brand-line bg-brand-soft text-txt',
        )}
      >
        {message.text}

        {message.links?.length ? (
          <span className="mt-2.5 flex flex-col gap-1.5">
            {message.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="font-mono text-[11px] tracking-[.04em] text-brand underline-offset-4 transition-opacity hover:underline hover:opacity-90"
              >
                {link.label}
              </a>
            ))}
          </span>
        ) : null}
      </div>
    </div>
  );
}
