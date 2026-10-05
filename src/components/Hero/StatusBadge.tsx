interface StatusBadgeProps {
  label: string;
}

export default function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <div className="mb-[34px] inline-flex items-center gap-[9px] rounded-full border border-line-2 bg-white/[.015] px-[15px] py-[7px] font-mono text-[11.5px] uppercase tracking-[.11em] text-txt-2">
      <span
        aria-hidden
        className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-[#4ADE80] shadow-dot"
      />
      {label}
    </div>
  );
}
