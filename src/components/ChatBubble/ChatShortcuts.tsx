import { CHAT_SHORTCUTS } from '@/data/chat';

interface ChatShortcutsProps {
  onSelect: (id: string, label: string) => void;
  disabled?: boolean;
}

export default function ChatShortcuts({ onSelect, disabled }: ChatShortcutsProps) {
  return (
    <div className="flex flex-wrap gap-1.5 border-t border-line bg-white/[.012] px-3.5 py-3">
      {CHAT_SHORTCUTS.map((shortcut) => (
        <button
          key={shortcut.id}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(shortcut.id, shortcut.label)}
          className="rounded-full border border-line-2 bg-white/[.02] px-3 py-[6px] font-mono text-[10.5px] tracking-[.05em] text-txt-2 transition-all duration-200 hover:border-brand-line hover:bg-brand-soft hover:text-txt disabled:cursor-not-allowed disabled:opacity-50"
        >
          {shortcut.label}
        </button>
      ))}
    </div>
  );
}
