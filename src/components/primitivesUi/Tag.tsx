import { cn } from '@/utils/cn';

interface TagProps {
  children: React.ReactNode;
  size?: 'sm' | 'md';
}

export default function Tag({ children, size = 'md' }: TagProps) {
  return (
    <span
      className={cn(
        'rounded-[5px] border border-line-2 bg-white/[.015] font-mono tracking-[.04em] text-txt-2',
        size === 'md' ? 'px-[11px] py-[5px] text-[11px]' : 'px-[9px] py-1 text-[10px]',
      )}
    >
      {children}
    </span>
  );
}
