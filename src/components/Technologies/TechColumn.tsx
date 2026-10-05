import type { TechCategory } from '@/types';

interface TechColumnProps {
  category: TechCategory;
}

export default function TechColumn({ category }: TechColumnProps) {
  return (
    <div className="border-b border-line bg-panel px-[26px] py-8 transition-colors duration-300 last:border-b-0 hover:bg-panel-2 min-[620px]:border-r min-[620px]:[&:nth-child(2n)]:border-r-0 min-[1100px]:border-b-0 min-[1100px]:[&:nth-child(2n)]:border-r min-[1100px]:last:border-r-0">
      <div className="mb-6 flex items-center gap-[9px] border-b border-line pb-3.5">
        <span aria-hidden className="h-[7px] w-[7px] rounded-[1px] bg-brand" />
        <h3 className="font-mono text-[11px] uppercase tracking-[.14em] text-txt-2">
          {category.title}
        </h3>
      </div>

      <ul className="flex flex-col gap-0.5">
        {category.items.map((item, index) => (
          <li
            key={item.name}
            className="group flex items-center gap-[11px] rounded-[7px] border border-transparent px-3 py-[11px] text-sm text-txt transition-all duration-200 hover:border-brand-line hover:bg-brand-soft"
          >
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-md border border-line-2 bg-white/[.045] transition-all duration-200 group-hover:border-brand-line group-hover:bg-white/[.08]">
              {item.icon}
            </span>
            <span className="flex-1">{item.name}</span>
            <span className="font-mono text-[9.5px] tracking-[.06em] text-txt-3">
              {String(index + 1).padStart(2, '0')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
