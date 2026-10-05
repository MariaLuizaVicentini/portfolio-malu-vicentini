import { PILLARS } from '@/data/about';

export default function Pillars() {
  return (
    <div className="mt-[38px] grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line min-[620px]:grid-cols-2">
      {PILLARS.map((pillar) => (
        <div key={pillar.index} className="bg-bg-2 p-[22px]">
          <div className="mb-[9px] font-mono text-[10px] tracking-[.12em] text-brand">
            {pillar.index}
          </div>
          <h3 className="mb-1.5 text-[15px] font-semibold tracking-[-.01em]">{pillar.title}</h3>
          <span className="block text-[12.5px] leading-[1.55] text-txt-3">
            {pillar.description}
          </span>
        </div>
      ))}
    </div>
  );
}
