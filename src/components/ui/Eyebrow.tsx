import { cn } from '@/utils/cn';

interface EyebrowProps {
  num: string;
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ num, children, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[.16em] text-txt-3',
        className,
      )}
    >
      <span className="text-brand">{num}</span>
      {children}
    </div>
  );
}
