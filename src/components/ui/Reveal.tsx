import { useReveal } from '@/hooks';
import { cn } from '@/utils/cn';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Aplica a animação de entrada quando o bloco chega à viewport. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(visible ? 'animate-reveal-up' : 'opacity-0', className)}
    >
      {children}
    </div>
  );
}
