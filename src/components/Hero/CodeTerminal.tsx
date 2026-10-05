import WindowDots from '@/components/ui/WindowDots';
import { HERO_METRICS } from '@/data/site';

const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-code-key">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-code-str">{children}</span>
);
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="text-txt">{children}</span>
);

export default function CodeTerminal() {
  return (
    <div className="term-topline relative overflow-hidden rounded-xl border border-line bg-gradient-to-b from-panel-2 to-panel shadow-term">
      <div className="flex items-center gap-2 border-b border-line bg-white/[.012] px-[15px] py-3">
        <WindowDots />
        <span className="ml-2 font-mono text-[11.5px] text-txt-3">developer.php</span>
      </div>

      <pre className="overflow-x-auto p-[22px] font-mono text-[12.5px] leading-[2.05] text-txt-3 scroll-slim">
        <code>
          <span className="text-code-cmt">&lt;?php</span>
          {'\n'}
          <K>class</K> <span className="text-code-fn">Developer</span> {'{'}
          {'\n'}
          {'  '}
          <K>public</K> <V>$foco</V> = <S>&#39;Backend&#39;</S>;{'\n'}
          {'  '}
          <K>public</K> <V>$stack</V> = [<S>&#39;PHP&#39;</S>,{' '}
          <S>&#39;Python&#39;</S>, <S>&#39;TypeScript&#39;</S>];{'\n'}
          {'  '}
          <K>public</K> <V>$estudando</V> = <S>&#39;Arquitetura&#39;</S>;{'\n'}
          {'}'}
        </code>
      </pre>

      <div className="grid grid-cols-1 border-t border-line min-[620px]:grid-cols-3">
        {HERO_METRICS.map((metric, index) => (
          <div
            key={metric.label}
            className={
              'border-b border-line px-[18px] py-4 last:border-b-0 min-[620px]:border-b-0 min-[620px]:border-r ' +
              (index === HERO_METRICS.length - 1 ? 'min-[620px]:border-r-0' : '')
            }
          >
            <div className="font-mono text-[19px] font-semibold text-txt">{metric.value}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[.11em] text-txt-3">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
