import { cn } from '@/utils/cn';

interface SectionProps {
  id?: string;
  alt?: boolean;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}

/** Bloco de seção com o espaçamento vertical e as bordas do layout original. */
export default function Section({ id, alt, className, children, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'relative py-[76px] min-[620px]:py-[110px]',
        alt && 'border-y border-line bg-bg-2',
        className,
      )}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
